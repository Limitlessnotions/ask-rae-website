
import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CLOUDINARY_HOST = "res.cloudinary.com";
const CLOUDINARY_CLOUD_NAME = "gmdcnulb";

const TIKTOK_VERIFICATION_FILENAME =
  "tiktokQzrOR6r65BcKdV4VMv8nNWqTd5tmGQDq.txt";

const TIKTOK_VERIFICATION_CONTENT =
  "tiktok-developers-site-verification=QzrOR6r65BcKdV4VMv8nNWqTd5tmGQDq";

const ALLOWED_MEDIA_PREFIXES = [
  "/video/upload/",
  "/image/upload/",
];

/**
 * Build a safe Cloudinary URL.
 */
function buildCloudinaryUrl(
  pathSegments: string[]
): string | null {
  const relativePath = `/${pathSegments.join("/")}`;

  const allowed = ALLOWED_MEDIA_PREFIXES.some(
    (prefix) => relativePath.startsWith(prefix)
  );

  if (!allowed) {
    return null;
  }

  const encodedPath = relativePath
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  // Construct the hostname and pathname separately.
  // This prevents accidental hostname concatenation.
  const cloudinaryUrl = new URL(
    `${CLOUDINARY_CLOUD_NAME}${encodedPath}`,
    `https://${CLOUDINARY_HOST}/`
  );

  // Ensure requests can only reach Cloudinary.
  if (cloudinaryUrl.hostname !== CLOUDINARY_HOST) {
    throw new Error(
      `Invalid Cloudinary hostname: ${cloudinaryUrl.hostname}`
    );
  }

  return cloudinaryUrl.toString();
}

/**
 * Determine the media content type.
 */
function getContentType(
  upstreamContentType: string | null,
  path: string
): string {
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

  if (
    lowerPath.endsWith(".jpg") ||
    lowerPath.endsWith(".jpeg")
  ) {
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

/**
 * Create response headers for media delivery.
 */
function createMediaHeaders(
  upstream: Response,
  path: string
): Headers {
  const headers = new Headers();

  headers.set(
    "Content-Type",
    getContentType(
      upstream.headers.get("content-type"),
      path
    )
  );

  const contentLength = upstream.headers.get(
    "content-length"
  );

  if (contentLength) {
    headers.set("Content-Length", contentLength);
  }

  const contentRange = upstream.headers.get(
    "content-range"
  );

  if (contentRange) {
    headers.set("Content-Range", contentRange);
  }

  headers.set(
    "Accept-Ranges",
    upstream.headers.get("accept-ranges") || "bytes"
  );

  headers.set(
    "Cache-Control",
    "public, max-age=31536000, immutable"
  );

  return headers;
}

/**
 * Handle GET and HEAD requests.
 */
async function handleRequest(
  request: NextRequest,
  method: "GET" | "HEAD"
): Promise<Response> {
  const pathname = request.nextUrl.pathname;

  const prefix = "/api/tiktok-media/";

  if (!pathname.startsWith(prefix)) {
    return new Response("Not Found", {
      status: 404,
    });
  }

  const requestedPath = pathname.slice(prefix.length);

  if (!requestedPath) {
    return new Response("Not Found", {
      status: 404,
    });
  }

  /*
  |--------------------------------------------------------------------------
  | TikTok URL-prefix verification
  |--------------------------------------------------------------------------
  */

  if (requestedPath === TIKTOK_VERIFICATION_FILENAME) {
    return new Response(
      method === "HEAD"
        ? null
        : TIKTOK_VERIFICATION_CONTENT,
      {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Content-Length": String(
            new TextEncoder().encode(
              TIKTOK_VERIFICATION_CONTENT
            ).length
          ),
          "Cache-Control": "public, max-age=60",
        },
      }
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Cloudinary media proxy
  |--------------------------------------------------------------------------
  */

  const pathSegments = requestedPath
    .split("/")
    .filter(Boolean);

  const cloudinaryUrl = buildCloudinaryUrl(
    pathSegments
  );

  if (!cloudinaryUrl) {
    return new Response("Not Found", {
      status: 404,
    });
  }

  // Temporary diagnostic: inspect the exact URL.
  console.log(
    "CLOUDINARY URL CONSTRUCTED:",
    cloudinaryUrl
  );

  const range = request.headers.get("range");

  const upstreamHeaders: HeadersInit = {};

  if (range) {
    upstreamHeaders.Range = range;
  }

  let upstream: Response;

  try {
    upstream = await fetch(cloudinaryUrl, {
      method,
      headers: upstreamHeaders,
      redirect: "follow",
      cache: "no-store",
    });
  } catch (error) {
    console.error(
      "TikTok media proxy fetch failed:",
      error
    );

    return new Response(
      "Unable to retrieve media.",
      {
        status: 502,
        headers: {
          "Content-Type": "text/plain",
          "Cache-Control": "no-store",
        },
      }
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Cloudinary upstream error handling
  |--------------------------------------------------------------------------
  */

  if (!upstream.ok) {
    let errorBody = "";

    try {
      errorBody = await upstream.text();
    } catch {
      errorBody = "Unable to read upstream error response.";
    }

    console.error("CLOUDINARY UPSTREAM ERROR:", {
      status: upstream.status,
      statusText: upstream.statusText,
      contentType: upstream.headers.get("content-type"),
      body: errorBody.slice(0, 1000),
      requestedPath,
      cloudinaryUrl,
    });

    return new Response(
      "Cloudinary media unavailable.",
      {
        status: 502,
        headers: {
          "Content-Type": "text/plain",
          "Cache-Control": "no-store",
        },
      }
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Successful media response
  |--------------------------------------------------------------------------
  */

  console.log("CLOUDINARY MEDIA RETRIEVED:", {
    status: upstream.status,
    contentType: upstream.headers.get("content-type"),
    contentLength: upstream.headers.get("content-length"),
    requestedPath,
  });

  const headers = createMediaHeaders(
    upstream,
    requestedPath
  );

  return new Response(
    method === "HEAD" ? null : upstream.body,
    {
      status: upstream.status,
      headers,
    }
  );
}

/**
 * GET handler.
 */
export async function GET(
  request: NextRequest
): Promise<Response> {
  return handleRequest(request, "GET");
}

/**
 * HEAD handler.
 */
export async function HEAD(
  request: NextRequest
): Promise<Response> {
  return handleRequest(request, "HEAD");
}
