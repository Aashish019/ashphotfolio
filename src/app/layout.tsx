import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import ShaderBackground from "@/components/ShaderBackground";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aashish Anil - DevOps Engineer",
  description: "Portfolio website showcasing expertise in DevOps Engineering, Cloud Infrastructure, and Automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SmoothScroll />
        <ShaderBackground />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
