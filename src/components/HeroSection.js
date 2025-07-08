import React, { useEffect, useRef } from "react";
import VANTA from "vanta/dist/vanta.clouds.min"; // Import Vanta CLOUDS effect
import * as THREE from "three"; // Import Three.js
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
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

  // Reference to the Vanta effect container
  const vantaRef = useRef(null);

  // Initialize Vanta.js CLOUDS effect
  useEffect(() => {
    const vantaEffect = VANTA({
      el: vantaRef.current,
      THREE, // Pass Three.js to Vanta
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      skyColor: 0x0,
      cloudColor: 0x0,
      cloudShadowColor: 0x555555,
      sunColor: 0xf2efec,
      sunGlareColor: 0x575656,
      sunlightColor: 0xffffff,
      speed: 2.2,
    });

    // Cleanup effect on component unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <section className="w-full py-20 overflow-hidden relative">
      <div className="px-4 md:px-6 relative py-5">
        {/* Vanta.js Background */}
        <div
          ref={vantaRef}
          className="absolute inset-0 -z-10 h-full w-full"
        ></div>

        {/* Top Shadow */}
        <div
          className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent dark:from-black dark:to-transparent pointer-events-none -z-5"
        ></div>

        {/* Bottom Shadow */}
        <div
          className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent dark:from-black dark:to-transparent pointer-events-none -z-5"
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 relative z-0"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Badge
              className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
              variant="secondary"
            >
              <FancyText text="AR" className="text-sm" />
            </Badge>
            <Badge
              className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
              variant="secondary"
            >
              <FancyText text="Custom WebApps" className="text-sm" />
            </Badge>
            <Badge
              className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
              variant="secondary"
            >
              <FancyText text="360 Virtual Tour" className="text-sm" />
            </Badge>
            <Badge
              className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
              variant="secondary"
            >
              <FancyText text="AI" className="text-sm" />
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            <FancyText text="Experience the Future Built by Luminexa" className="" />
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            <FancyText
              text="Luminexa helps you collaborate, automate, and scale — with powerful AR, AI, and custom apps built for results."
              className="text-lg md:text-xl"
            />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full h-12 px-8 text-base cursor-pointer group"
            >
              <FancyText text="Why nex?" className="text-base" />
              <ArrowRight className="group-hover:translate-x-1 transition-all ease-in-out duration-200 size-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-12 px-8 text-base cursor-pointer"
            >
              <FancyText text="Book a Demo" className="text-base" />
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <FancyText text="Custom-Built for Your Brand" className="text-sm" />
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <FancyText text="End-to-End Solutions" className="text-sm" />
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <FancyText text="Scalable Across All Platforms" className="text-sm" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto max-w-5xl z-0"
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