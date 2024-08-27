import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect } from "react";
import "./globals.css";
import Header from "@/components/Header";
import FooterLinks from "@/components/FooterLinks"
import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

const NotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "oasobi",
    template: "%s | oasobi"
  },
  description: "oasobi's site"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <body className={NotoSansJP.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <FooterLinks />
        </ThemeProvider>
      </body>
    </html>
  );
}
