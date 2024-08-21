import "./globals.css";

import type { Metadata, Viewport } from "next";

import { AuthProvider } from "@/hooks/useAuth";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

const APP_NAME = "Aaron Soto";

export const metadata = {
  title: {
    default: `${APP_NAME} | Frontend Developer`,
    template: `%s | ${APP_NAME}`,
  },
  description:
    "Aaron Soto is a frontend developer and designer who is always eager to learn. Keeping up with the latest tech trends is his forte.",
  icon: [
    { url: "/favicon/favicon.ico", type: "image/x-icon" },
    { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    {
      url: "/favicon/favicon-16x16.png",
      type: "image/png",
      sizes: "16x16",
    },
    {
      url: "/favicon/favicon-32x32.png",
      type: "image/png",
      sizes: "32x32",
    },
    {
      url: "/favicon/favicon-96x96.png",
      type: "image/png",
      sizes: "96x96",
    },
    {
      url: "/favicon/favicon-192x192.png",
      type: "image/png",
      sizes: "192x192",
    },
  ],
  apple: [
    {
      url: "/favicon/apple-touch-icon-57x57.png",
      sizes: "57x57",
      type: "image/png",
    },
    {
      url: "/favicon/apple-touch-icon-60x60.png",
      sizes: "60x60",
      type: "image/png",
    },
    {
      url: "/favicon/apple-touch-icon-72x72.png",
      sizes: "72x72",
      type: "image/png",
    },
    {
      url: "/favicon/apple-touch-icon-76x76.png",
      sizes: "76x76",
      type: "image/png",
    },
    {
      url: "/favicon/apple-touch-icon-114x114.png",
      sizes: "114x114",
      type: "image/png",
    },
    {
      url: "/favicon/apple-touch-icon-120x120.png",
      sizes: "120x120",
      type: "image/png",
    },
    {
      url: "/favicon/apple-touch-icon-144x144.png",
      sizes: "144x144",
      type: "image/png",
    },
    {
      url: "/favicon/apple-touch-icon-152x152.png",
      sizes: "152x152",
      type: "image/png",
    },
    {
      url: "/favicon/apple-touch-icon-180x180.png",
      sizes: "180x180",
      type: "image/png",
    },
  ],

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // PWA
  manifest: "/manifest.json",
  applicationName: "Aaron Soto",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "Aaron Soto",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_NAME,
      template: "%s - Frontend Developer",
    },
    images: "/assets/images/og-image.jpg",
    description:
      "Aaron Soto is a frontend developer and designer who is always eager to learn. Keeping up with the latest tech trends is his forte.",
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_NAME,
      template: "%s - Frontend Developer",
    },
    description:
      "Aaron Soto is a frontend developer and designer who is always eager to learn. Keeping up with the latest tech trends is his forte.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={cn(
          roboto.className,
          "relative min-h-screen antialiased flex flex-col"
        )}
      >
        <AuthProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
