import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AIAvatarProvider } from "@/components/ai/AIAvatarProvider";
import { ChatProvider } from "@/components/chat/ChatProvider";
import ChatWidget from "@/components/chat/ChatWidget";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home - Wichita Public Schools",
  description: "USD 259 Wichita Public Schools — Empowering nearly 50,000 students across 90+ schools in Wichita, Kansas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${dmSans.variable} ${playfair.variable} font-sans antialiased min-h-screen`}
      >
        <AIAvatarProvider>
          <ChatProvider>
            <Header />
            {children}
            <Footer />
            {/* D-ID embed creates its own FAB button and chat interface automatically */}
            <ChatWidget />
          </ChatProvider>
        </AIAvatarProvider>
      </body>
    </html>
  );
}
