"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter(); // Initialize router

  // Reusable FancyText component for uniform styling
  const FancyText = ({ text, className }) => {
    const words = text.split(" ");
    return (
      <>
        {words.map((word, index) => (
          <span
            key={index}
            className={`${
              index % 3 === 0
                ? "font-bold"
                : index % 3 === 1
                ? "italic font-light"
                : "font-medium"
            } ${className}`}
          >
            {word}{" "}
          </span>
        ))}
      </>
    );
  };

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full py-20 overflow-hidden relative">
      <div className="px-4 md:px-6 relative py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 relative z-10"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-5">
            <Badge
              className="mb-2 rounded-full px-4 py-1 text-sm font-medium bg-transparent border border-secondary"
              variant="secondary"
            >
              <span className="text-sm">AR</span>
            </Badge>
            <Badge
              className="mb-2 rounded-full px-4 py-1 text-sm font-medium bg-transparent border border-secondary"
              variant="secondary"
            >
              <span className="text-sm">Custom WebApps</span>
            </Badge>
            <Badge
              className="mb-2 rounded-full px-4 py-1 text-sm font-medium bg-transparent border border-secondary"
              variant="secondary"
            >
              <span className="text-sm">360 Virtual Tour</span>
            </Badge>
            <Badge
              className="mb-2 rounded-full px-4 py-1 text-sm font-medium bg-transparent border border-secondary"
              variant="secondary"
            >
              <span className="text-sm">AI</span>
            </Badge>
            <Badge
              className="mb-2 rounded-full px-4 py-1 text-sm font-medium bg-transparent border border-secondary"
              variant="secondary"
            >
              <span className="text-sm">Image Mapping</span>
            </Badge>
          </div>
          
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 w-full"
          >
            <FancyText text="Experience the Future Built by Luminexa" className="" />
          </h1>
          <p className="text-sm md:text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
            Luminexa helps you collaborate, automate, and scale — with powerful
            AR, AI, and custom apps built for results.
          </p>
          <div className="flex flex-row flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full h-12 px-6 text-base cursor-pointer group min-w-[120px]"
              onClick={() => router.push("/features")} // Add click handler for navigation
            >
              <span className="text-base">
                Why <strong>nex?</strong>
              </span>
              <ArrowRight className="group-hover:translate-x-1 transition-all ease-in-out duration-200 size-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-12 px-6 text-base cursor-pointer min-w-[120px]"
            >
              <span className="text-base">Book a Demo</span>
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span className="text-sm">Custom-Built for Your Brand</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span className="text-sm">End-to-End Solutions</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span className="text-sm">Scalable Across All Platforms</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto max-w-5xl relative z-10"
        >
          <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
            <video
              src="https://cdn.glitch.global/62dd5357-cabd-4363-bf7a-61c739629aa4/Untitled%20video%20-%20Made%20with%20Clipchamp%20(18).mp4?v=1751383115509"
              width={1280}
              height={720}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
          <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;