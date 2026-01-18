"use client";

import React from "react";
import Image from "next/image";
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
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-primary/25 to-secondary/25 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[620px] w-[620px] rounded-full bg-gradient-to-br from-secondary/25 to-primary/25 blur-3xl" />
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
              nexAR <br />
              <span className="text-primary">Web-First Augmented Reality</span>
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

          {/* ================= RIGHT VISUAL ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-[28px] border border-border bg-background/60 backdrop-blur shadow-2xl overflow-hidden">
              <Image
                src="/nex.jpg"
                alt="nexAR WebAR experience"
                width={900}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-white/10 rounded-[28px]" />

              <div className="absolute top-5 right-5 rounded-full px-4 py-1 text-[11px] bg-black/60 text-white border border-white/20 backdrop-blur">
                Live WebAR
              </div>
            </div>

            {/* 🔥 Overlay image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-10 -left-10 w-[220px] sm:w-[260px] rounded-2xl border border-border bg-background/70 backdrop-blur shadow-xl overflow-hidden"
            >
              <Image
                src="/nex.jpg" // you can replace with another AR screenshot
                alt="nexAR mobile preview"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl" />
            </motion.div>

            {/* glow */}
            <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NexArSection;
