
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ask-rae.vercel.app"),
  title: {
    default: "Ask Rae | AI Social Media Assistant",
    template: "%s | Ask Rae",
  },
  description:
    "Ask Rae is an AI-powered social media assistant that helps users create, manage, and publish social media content.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Ask Rae | AI Social Media Assistant",
    description:
      "Create, manage, and publish social media content with Ask Rae.",
    url: "https://ask-rae.vercel.app",
    siteName: "Ask Rae",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
