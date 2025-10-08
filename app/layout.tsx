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
  title: "AI Vision Forum - Global Cooperation for Human-Centered AI",
  description: "The GOSIM AI Vision Forum brings together leading researchers, policymakers, and innovators to shape the future of human-centered AI through open collaboration.",
  keywords: "AI, Vision Forum, GOSIM, human-centered AI, open source AI, AI governance, AI ethics",
  openGraph: {
    title: "AI Vision Forum",
    description: "Global Cooperation for Human-Centered AI",
    url: "https://visionforum.ai",
    siteName: "AI Vision Forum",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
