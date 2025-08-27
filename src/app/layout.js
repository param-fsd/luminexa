"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect, useState } from "react";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Cookie Consent Component
const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 w-full z-50"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <Card className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border/40 w-full">
        <CardContent className="pt-6 px-4 md:px-6">
          <h2 id="cookie-consent-title" className="text-lg font-semibold">
            We use cookies
          </h2>
          <p id="cookie-consent-description" className="text-sm text-muted-foreground mt-2">
            We use cookies to enhance your experience, analyze site usage, and personalize content. By clicking "Accept,"
            you agree to our use of{" "}
            <a href="/privacy-policy" className="underline hover:text-primary">
              Privacy Policy
            </a>
            .
          </p>
        </CardContent>
        <CardFooter className="flex justify-end gap-3 px-4 md:px-6">
          <Button
            variant="outline"
            onClick={handleDecline}
            className="rounded-full h-12 px-10 text-lg"
            aria-label="Decline cookies"
          >
            Decline
          </Button>
          <Button
            onClick={handleAccept}
            className="rounded-full h-12 px-10 text-lg"
            aria-label="Accept cookies"
          >
            Accept
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <head>
        <title>Luminexa Technologies</title>
        <meta
          name="description"
          content="Luminexa empowers brands with powerful WebAR experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Luminexa Technologies" />
        <meta property="og:description" content="Luminexa" />
        <meta property="og:image" content="/preview.png" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          forcedTheme="light" // Force a specific theme for SSR
        >
          {/* {children}
          <CookieConsent />
          <Footer /> */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-PHTLNX1NGG"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PHTLNX1NGG');
            `}
          </Script>
        </ThemeProvider>
      </body>
    </html>
  );
}