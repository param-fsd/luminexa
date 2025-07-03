"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect, useState } from "react";
import Head from "next/head"; // Import Head
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Luminexa - Elevate with AR</title>
        <meta name="description" content="Luminexa empowers brands with powerful WebAR experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Luminexa Technologies" />
        <meta property="og:description" content="WebAR, brand engagement, and immersive experiences by Luminexa." />
        <meta property="og:image" content="/preview.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar isScrolled={isScrolled} mounted={mounted} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
