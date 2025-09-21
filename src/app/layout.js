
"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect, useState } from "react";
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
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true); // Show popup if no consent is stored
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
            you agree to our use of cookies. You can learn more in our{" "}
            <a href="/privacy-policy" className="underline hover:text-primary">
              Privacy Policy
            </a>
            .
          </p>
        </CardContent>
        <CardFooter className="flex justify-end gap-3 px-4 md:px-6"> {/* Increased gap */}
          <Button
            variant="outline"
            onClick={handleDecline}
            className="rounded-full h-12 px-10 text-lg" // Larger button
            aria-label="Decline cookies"
          >
            Decline
          </Button>
          <Button
            onClick={handleAccept}
            className="rounded-full h-12 px-10 text-lg" // Larger button
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
 
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Set initial state based on current scroll position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Luminexa Technologies</title>
        <meta
          name="description"
          content="Luminexa empowers brands with powerful WebAR experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Luminexa Technologies" />
        <meta
          property="og:description"
          content="WebAR, brand engagement, and immersive experiences by Luminexa."
        />
        <meta property="og:image" content="/preview.png" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar isScrolled={isScrolled} mounted={mounted} />
          {children}
          <CookieConsent />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
