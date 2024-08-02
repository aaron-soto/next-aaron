import "./globals.css";

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Aaron Soto",
  description: "Frontend Developer and Designer",
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
      <body className={cn(roboto.className, "relative dark")}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
