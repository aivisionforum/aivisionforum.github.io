import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://visionforum.ai"),
  title: "AI Vision Forum｜人工智能愿景论坛",
  description: "An independent international forum for thoughtful conversations about AI and society. 一个讨论人工智能、社会与公共价值的独立国际论坛。",
  keywords: "AI, Vision Forum, GOSIM, human-centered AI, open source AI, AI governance, AI ethics",
  openGraph: {
    title: "AI Vision Forum",
    description: "Conversations on AI, society and public value｜关于人工智能、社会与公共价值的对话",
    url: "https://visionforum.ai",
    siteName: "AI Vision Forum",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Vision Forum｜人工智能愿景论坛",
    description: "Conversations on AI, society and public value",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Navigation />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
