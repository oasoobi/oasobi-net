import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect } from "react";
import { useTheme } from 'next-themes';
import "./globals.css";
import Header from "@/components/Header";
import FooterLinks from "@/components/FooterLinks"
import NextTopLoader from "nextjs-toploader";
import Head from 'next/head';

const NotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "oasobi",
    template: "%s | oasobi"
  },
  description: "oasobi's site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/>
    </Head>
    <html lang="ja" suppressHydrationWarning={true}>
      <body className={NotoSansJP.className}>
        <NextTopLoader showSpinner={false} height={1.6} color={"#0073ff"} />
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
    </>
  );
}
