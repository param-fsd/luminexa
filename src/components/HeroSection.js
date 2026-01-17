"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // FancyText for uniform styling
  const FancyText = ({ text, className = "" }) => {
    const words = text.split(" ");
    return (
      <>
        {words.map((word, index) => (
          <span
            key={index}
            className={`${
              index % 3 === 0
                ? "font-medium"
                : index % 3 === 1
                ? "italic font-light"
                : "font-bold"
            } ${className}`}
          >
            {word}{" "}
          </span>
        ))}
      </>
    );
  };

  useEffect(() => setMounted(true), []);

  const tags = useMemo(
    () => ["AR", "Custom WebApps", "360 Virtual Tour", "AI", "Image Mapping", "3D"],
    []
  );

  return (
    <section className="w-full overflow-hidden relative">
      {/* Background: subtle grid + gradient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.14) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-3xl" />
      </div>

      <div className="px-4 md:px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            {/* Badges */}
            <div className="flex flex-wrap justify-start gap-3 mb-6">
              {tags.map((t) => (
                <Badge
                  key={t}
                  className="rounded-full px-4 py-1 text-sm font-medium bg-[#D3D3D3] border border-border"
                  variant="secondary"
                >
                  <span className="text-sm text-foreground/80">{t}</span>
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">
                <FancyText text="Experience the Future Built by Luminexa" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-muted-foreground mb-7 max-w-xl">
              Luminexa helps you collaborate, automate, and scale — with powerful
              AR, AI, and 3D experiences built for results.
            </p>

            {/* Buttons */}
            <div className="flex flex-row flex-wrap gap-3 justify-start">
              <Button
                size="lg"
                className="rounded-full h-12 px-6 text-base cursor-pointer group min-w-[140px]"
                onClick={() => router.push("/features")}
              >
                <span className="text-base">
                  Why <strong>nex?</strong>
                </span>
                <ArrowRight className="group-hover:translate-x-1 transition-all ease-in-out duration-200 size-4 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-6 text-base cursor-pointer min-w-[140px]"
                onClick={() => router.push("/getstarted")}
              >
                <span className="text-base">Book a Demo</span>
              </Button>
            </div>

            {/* Checks */}
            <div className="flex flex-wrap items-start justify-start gap-x-6 gap-y-3 mt-7 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="size-4 text-primary" />
                <span>Custom-Built for Your Brand</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="size-4 text-primary" />
                <span>End-to-End Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="size-4 text-primary" />
                <span>Scalable Across All Platforms</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="relative">
            {/* Floating animated blobs */}
            <motion.div
              aria-hidden
              className="absolute -top-10 -left-10 h-[280px] w-[280px] rounded-full bg-gradient-to-br from-primary/25 to-secondary/25 blur-3xl"
              animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="absolute -bottom-12 -right-10 h-[320px] w-[320px] rounded-full bg-gradient-to-br from-secondary/25 to-primary/25 blur-3xl"
              animate={{ y: [0, 16, 0], x: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Orbit ring */}
            <motion.div
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[360px] w-[360px] rounded-full border border-border/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary/60 blur-[1px]" />
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 h-3 w-3 rounded-full bg-secondary/60 blur-[1px]" />
              <div className="absolute -bottom-2 left-1/3 h-3 w-3 rounded-full bg-primary/50 blur-[1px]" />
            </motion.div>

            {/* Main preview card */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="relative mx-auto max-w-xl"
            >
              <motion.div
                className="rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-gradient-to-b from-background to-muted/20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Top mini bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-border/60">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                    <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                    <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Sparkles className="size-4" />
                    <span>Beyond Limit</span>
                  </div>
                </div>

                {/* 3D ONLY VISUAL */}
                <div className="relative h-[260px] md:h[300px] lg:h[300] overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
                  {/* soft grid */}
                  <div
                    className="absolute inset-0 opacity-[0.10]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.35) 1px, transparent 0)",
                      backgroundSize: "22px 22px",
                    }}
                  />

                  {/* 3D base platform */}
                  <motion.div
                    className="absolute left-1/2 bottom-10 -translate-x-1/2 h-24 w-[340px] rounded-[999px] bg-gradient-to-r from-primary/15 via-secondary/15 to-primary/15 blur-xl"
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* floating 3D cubes */}
                  <motion.div
                    className="absolute left-16 top-16 h-16 w-16 rounded-2xl border border-border/40 bg-gradient-to-br from-primary/25 to-secondary/25 shadow-xl"
                    animate={{ y: [0, -14, 0], rotate: [0, 12, 0] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute right-16 top-24 h-14 w-14 rounded-2xl border border-border/40 bg-gradient-to-br from-secondary/25 to-primary/25 shadow-xl"
                    animate={{ y: [0, 16, 0], rotate: [0, -12, 0] }}
                    transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute left-24 bottom-20 h-12 w-12 rounded-2xl border border-border/40 bg-gradient-to-br from-primary/20 to-secondary/20 shadow-lg"
                    animate={{ y: [0, 10, 0], rotate: [0, 16, 0] }}
                    transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute right-28 bottom-28 h-10 w-10 rounded-2xl border border-border/40 bg-gradient-to-br from-secondary/20 to-primary/20 shadow-lg"
                    animate={{ y: [0, 18, 0], rotate: [0, -8, 0] }}
                    transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute left-[50%] top-14 -translate-x-1/2 h-10 w-10 rounded-2xl border border-border/40 bg-gradient-to-br from-primary/15 to-secondary/15 shadow-md"
                    animate={{ y: [0, -12, 0], rotate: [0, 20, 0] }}
                    transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute left-[50%] bottom-16 -translate-x-1/2 h-11 w-11 rounded-2xl border border-border/40 bg-gradient-to-br from-secondary/15 to-primary/15 shadow-md"
                    animate={{ y: [0, 14, 0], rotate: [0, -18, 0] }}
                    transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* tiny signal dots */}
                  <motion.div
                    className="absolute bottom-10 left-10 h-3 w-3 rounded-full bg-primary/70 blur-[0.5px]"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute top-10 right-10 h-2.5 w-2.5 rounded-full bg-secondary/70 blur-[0.5px]"
                    animate={{ scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                {/* ✅ FIXED Bottom info strip (mobile visible) */}
                <div className="px-4 py-4 flex flex-wrap gap-2 relative z-10">
                  {["WebAR", "3D", "Immersive UX", "AI"].map((label) => (
                    <span
                      key={label}
                      className="text-xs px-3 py-1 rounded-full bg-background/80 border border-border text-foreground shadow-sm backdrop-blur"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Floating stat cards */}
              <motion.div
                className="absolute -left-6 top-14 hidden sm:block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="rounded-xl border border-border bg-background/80 backdrop-blur px-4 py-3 shadow-lg">
                  <div className="text-xs text-muted-foreground">Conversion Lift</div>
                  <div className="text-lg font-semibold text-foreground">+32%</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-6 bottom-14 hidden sm:block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, 12, 0] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="rounded-xl border border-border bg-background/80 backdrop-blur px-4 py-3 shadow-lg">
                  <div className="text-xs text-muted-foreground">Engagement</div>
                  <div className="text-lg font-semibold text-foreground">2.8x</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-8 top-16 hidden sm:block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, -8, 0] }}
                transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="rounded-xl border border-border bg-background/80 backdrop-blur px-4 py-3 shadow-lg">
                  <div className="text-xs text-muted-foreground">3D Preview</div>
                  <div className="text-lg font-semibold text-foreground">Real-time</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-8 bottom-20 hidden sm:block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="rounded-xl border border-border bg-background/80 backdrop-blur px-4 py-3 shadow-lg">
                  <div className="text-xs text-muted-foreground">AR Ready</div>
                  <div className="text-lg font-semibold text-foreground">Web + App</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
