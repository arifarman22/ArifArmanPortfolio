import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arif Arman | Full Stack Software Engineer",
  description: "Portfolio of Arif Arman, Full Stack Software Engineer based in Dhaka, Bangladesh.",
};

import SmoothScroll from "@/components/layout/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans font-light" suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
