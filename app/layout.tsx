import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryWrapper from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Cursor Pagination",
  description: "A simple example of cursor-based pagination in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryWrapper>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-300`}
        >
          {children}
        </body>
      </QueryWrapper>
    </html>
  );
}
