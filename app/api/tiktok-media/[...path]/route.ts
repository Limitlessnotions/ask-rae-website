import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CLOUDINARY_HOST = "res.cloudinary.com";
const CLOUDINARY_CLOUD_NAME = "gmdcnulb";

const ALLOWED_MEDIA_PREFIXES = [
  "/video/upload/",
  "/image/upload/",
];

function getVerificationConfig() {
  return {
    filename:
      process.env.TIKTOK_VERIFICATION_FILENAME?.trim() || "",
    content:
      process.env.TIKTOK_VERIFICATION_CONTENT ?? "",
  };
}

function buildCloudinaryUrl(pathSegments: string[]) {
  const relativePath = `/${pathSegments.join("/")}`;

  const allowed = ALLOWED_MEDIA_PREFIXES.some((prefix) =>
    relativePath.startsWith(prefix)
  );

  if (!allowed) {
    return null;
  }

  const encodedPath = relativePath
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  return `https://${CLOUDINARY_HOST}/${CLOUDINARY_CLOUD_NAME}${encodedPath}`;
}

function getContentType(
  upstreamContentType: string | null,
  path: string
) {
  if (upstreamContentType) {
    return upstreamContentType;
  }

  const lowerPath = path.toLowerCase();

  if (lowerPath.endsWith(".mp4")) {
    return "video/mp4";
  }

  if (lowerPath.endsWith(".mov")) {
    return "video/quicktime";
  }

  if (lowerPath.endsWith(".webm")) {
    return "video/webm";
  }

  if (lowerPath.endsWith(".jpg") || lowerPath.endsWith(".jpeg")) {
    return "image/jpeg";
  }

  if (lowerPath.endsWith(".png")) {
    return "image/png";
  }

  if (lowerPath.endsWith(".webp")) {
    return "image/webp";
  }

  return "application/octet-stream";
}

function createMediaHeaders(
  upstream: Response,
  path: string
) {
  const headers = new Headers();

  headers.set(
    "Content-Type",
    getContentType(
      upstream.headers.get("content-type"),
      path
    )
  );

  const contentLength =
    upstream.headers.get("content-length");

  if (contentLength) {
    headers.set(
      "Content-Length",
      contentLength
    );
  }

  const contentRange =
    upstream.headers.get("content-range");

  if (contentRange) {
    headers.set(
      "Content-Range",
      contentRange
    );
  }

  const acceptRanges =
    upstream.headers.get("accept-ranges");

  headers.set(
    "Accept-Ranges",
    acceptRanges || "bytes"
  );

  headers.set(
    "Cache-Control",
    "public, max-age=31536000, immutable"
  );

  return headers;
}

async function handleRequest(
  request: NextRequest,
  method: "GET" | "HEAD"
) {
  const pathSegments =
    (await Promise.resolve(
      request.nextUrl.pathname
        .replace(
          /^\/api\/tiktok-media\/?/,
          ""
        )
        .split("/")
        .filter(Boolean)
    ));

  if (pathSegments.length === 0) {
    return new Response(
      "Not Found",
      {
        status: 404,
      }
    );
  }

  /*
   * TikTok URL-prefix verification
   *
   * TikTok provides a filename and file content.
   * We expose that exact content at:
   *
   * /api/tiktok-media/<filename>
   *
   * The values are supplied through Vercel
   * environment variables after TikTok gives us
   * the verification file.
   */
  const verification =
    getVerificationConfig();

  const requestedPath =
    pathSegments.join("/");

  if (
    verification.filename &&
    verification.content &&
    requestedPath === verification.filename
  ) {
    return new Response(
      method === "HEAD"
        ? null
        : verification.content,
      {
        status: 200,
        headers: {
          "Content-Type": "text/plain",
          "Cache-Control":
            "public, max-age=60",
        },
      }
    );
  }

  /*
   * Only allow Cloudinary media paths.
   *
   * This deliberately prevents this endpoint
   * from becoming an arbitrary URL proxy.
   */
  const cloudinaryUrl =
    buildCloudinaryUrl(pathSegments);

  if (!cloudinaryUrl) {
    return new Response(
      "Not Found",
      {
        status: 404,
      }
    );
  }

  const range =
    request.headers.get("range");

  const upstreamHeaders: HeadersInit = {};

  if (range) {
    upstreamHeaders.Range = range;
  }

  let upstream: Response;

  try {
    upstream = await fetch(
      cloudinaryUrl,
      {
        method,
        headers: upstreamHeaders,
        redirect: "follow",
        cache: "no-store",
      }
    );
  } catch (error) {
    console.error(
      "TikTok media proxy fetch failed:",
      error
    );

    return new Response(
      "Unable to retrieve media.",
      {
        status: 502,
      }
    );
  }

  if (!upstream.ok) {
    console.error(
      "Cloudinary media request failed:",
      upstream.status,
      cloudinaryUrl
    );

    return new Response(
      "Media unavailable.",
      {
        status: upstream.status,
      }
    );
  }

  const headers =
    createMediaHeaders(
      upstream,
      requestedPath
    );

  return new Response(
    method === "HEAD"
      ? null
      : upstream.body,
    {
      status: upstream.status,
      headers,
    }
  );
}

export async function GET(
  request: NextRequest
) {
  return handleRequest(
    request,
    "GET"
  );
}

export async function HEAD(
  request: NextRequest
) {
  return handleRequest(
    request,
    "HEAD"
  );
}