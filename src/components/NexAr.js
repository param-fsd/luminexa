"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Globe,
  Smartphone,
  Layers,
  Camera,
  ArrowUpRight,
  Sparkles,
  Scan,
  Zap,
  Hand,
  MousePointerClick,
  Cuboid,
  Play,
  Orbit,
  Navigation,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Feature data                                                              */
/* -------------------------------------------------------------------------- */
const features = [
  {
    icon: Globe,
    title: "WebAR Platform",
    desc: "Launch AR instantly in the browser with zero app downloads.",
  },
  {
    icon: Smartphone,
    title: "Cross-Device Ready",
    desc: "Optimized for Android, iOS, tablets, and desktop browsers.",
  },
  {
    icon: Layers,
    title: "Rich AR Layers",
    desc: "3D models, animations, videos, buttons, and hotspots.",
  },
  {
    icon: Camera,
    title: "Real-World Preview",
    desc: "Place products, visuals, and experiences in real environments.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Right UI Preview (no images)                                              */
/* -------------------------------------------------------------------------- */
const PhonePreview = () => {
  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-6 -z-10 rounded-[42px] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-2xl opacity-80" />

      {/* Phone frame */}
      <div className="relative mx-auto w-full max-w-[420px] rounded-[36px] border border-border bg-background/60 backdrop-blur shadow-2xl overflow-hidden">
        {/* top bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-background/40">
          <div className="flex items-center gap-2">
            <div className="size-2.5 rounded-full bg-primary/80" />
            <p className="text-[12px] font-semibold text-foreground">
              nexAR
            </p>
          </div>
          <Badge variant="outline" className="rounded-full text-[10px]">
            Live UI
          </Badge>
        </div>

        {/* screen */}
        <div className="relative p-5">
          {/* AR "camera" area */}
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-gradient-to-br from-muted/40 via-background/20 to-muted/40">
            {/* subtle grid inside screen */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.2) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />

            {/* floating "3D object" */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 mx-auto mt-12 mb-10 size-[150px] rounded-[28px] border border-border bg-background/60 backdrop-blur shadow-xl flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-primary/10 to-secondary/10 opacity-90" />
              <div className="relative flex flex-col items-center">
                <Cuboid className="size-8 text-primary" />
                <p className="mt-2 text-[12px] font-semibold text-foreground">
                  3D Model
                </p>
                <p className="text-[10px] text-muted-foreground">
                  Rotate • Scale • Tap
                </p>
              </div>
            </motion.div>

            {/* hint overlay */}
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/45 text-white px-3 py-1.5 text-[11px] backdrop-blur">
              <Scan className="size-4" />
              Point camera to marker
            </div>

            {/* bottom controls */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="grid grid-cols-4 gap-2">
                {[
                  { icon: Orbit, label: "Rotate" },
                  { icon: Hand, label: "Scale" },
                  { icon: Play, label: "Animate" },
                  { icon: Navigation, label: "CTA" },
                ].map((btn, i) => {
                  const Icon = btn.icon;
                  return (
                    <button
                      key={i}
                      type="button"
                      className="group rounded-2xl border border-border bg-background/70 backdrop-blur px-3 py-3 hover:border-primary/30 transition text-left"
                    >
                      <Icon className="size-4 text-primary" />
                      <p className="mt-1 text-[10px] font-medium text-foreground">
                        {btn.label}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ring */}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-[28px]" />
          </div>

          {/* UI cards under screen */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-border bg-background/60 backdrop-blur p-4">
              <div className="flex items-center gap-2">
                <Zap className="size-4 text-primary" />
                <p className="text-[12px] font-semibold text-foreground">
                  Instant Load
                </p>
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Web link opens AR in seconds.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background/60 backdrop-blur p-4">
              <div className="flex items-center gap-2">
                <MousePointerClick className="size-4 text-primary" />
                <p className="text-[12px] font-semibold text-foreground">
                  Interactive
                </p>
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Buttons, hotspots & actions.
              </p>
            </div>
          </div>

          {/* mini footer text */}
          <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <Camera className="size-4" /> Camera-ready UI
            </span>
            <span className="flex items-center gap-1">
              <Smartphone className="size-4" /> iOS / Android
            </span>
          </div>
        </div>
      </div>

      {/* floating badge */}
      <div className="absolute -top-4 right-6 hidden sm:block">
        <div className="rounded-full border border-border bg-background/70 backdrop-blur px-4 py-2 shadow-lg flex items-center gap-2">
          <Sparkles className="size-4 text-primary" />
          <span className="text-[12px] text-foreground font-medium">
            No app install
          </span>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  nexAR Section                                                             */
/* -------------------------------------------------------------------------- */
const NexArSection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />

        {/* tech grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.18) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* glows */}
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[620px] w-[620px] rounded-full bg-secondary/15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Badge className="rounded-full px-4 py-1">Product</Badge>
              <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                <Sparkles className="size-3.5 text-primary" />
                Web-based Augmented Reality
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-bold tracking-tight text-foreground">
              nexAR - Augmented Reality
            </h2>

            <p className="mt-5 text-[13px] sm:text-[14px] md:text-[15px] text-muted-foreground max-w-xl leading-relaxed">
              nexAR transforms ordinary marketing, education, and product
              experiences into immersive augmented reality — delivered instantly
              through the web. No installs. No friction. Just powerful AR that
              works everywhere.
            </p>

            <div className="mt-6 h-px w-full max-w-xl bg-border" />

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    className="relative rounded-2xl border border-border bg-background/60 backdrop-blur p-4"
                  >
                    <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 to-secondary/10" />
                    <div className="relative flex gap-4">
                      <div className="h-10 w-10 rounded-xl border border-border bg-muted/40 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-foreground">
                          {f.title}
                        </div>
                        <div className="text-[12px] text-muted-foreground leading-snug">
                          {f.desc}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild className="rounded-xl">
                <Link href="/services/augmented-reality">
                  Explore nexAR <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-xl">
                <Link href="/contact-us">Request Demo</Link>
              </Button>
            </div>
          </motion.div>

          {/* ================= RIGHT UI PREVIEW (NO IMAGE) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <PhonePreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NexArSection;
