"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  Star,
  MapPinned,
  Rotate3d,
  Box,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Navigation,
  Map,
  Crosshair,
  Layers,
  Gauge,
  FileText,
  MousePointerClick,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Motion variants                                                            */
/* -------------------------------------------------------------------------- */
const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, duration: 0.55, ease: "easeOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/* -------------------------------------------------------------------------- */
/*  Feature data                                                               */
/* -------------------------------------------------------------------------- */
const features = [
  {
    icon: MapPinned,
    title: "Image Mapping",
    description:
      "Tap any plot to instantly view dimensions, pricing, availability, and documents.",
  },
  {
    icon: Rotate3d,
    title: "360° Virtual Tours",
    description:
      "Immersive walkthroughs and aerial perspectives to explore remotely, anytime.",
  },
  {
    icon: Box,
    title: "3D Rendered Models",
    description:
      "Photoreal 3D previews of future projects for confident decision-making.",
  },
];

const demo = {
  description:
    "Quick preview: plot tap → details panel → gallery → CTA. Replace the URL with your video.",
  url: "/vid1.mp4",
};

/* -------------------------------------------------------------------------- */
/*  Small “value strip”                                                        */
/* -------------------------------------------------------------------------- */
const QuickStrip = () => {
  const stats = [
    { icon: MousePointerClick, label: "Tap-to-View", sub: "Instant details" },
    { icon: FileText, label: "Docs & Plans", sub: "Floor plans, PDFs" },
    { icon: Gauge, label: "Fast UX", sub: "Smooth navigation" },
  ];

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
      {stats.map((s) => {
        const Icon = s.icon;
        return (
          <div
            key={s.label}
            className="rounded-2xl border border-border bg-background/60 backdrop-blur p-4 flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-xl border border-border bg-muted/35 flex items-center justify-center">
              <Icon className="size-5 text-primary" />
            </div>
            <div className="min-w-0">
              <div className="text-[13px] font-semibold text-foreground">
                {s.label}
              </div>
              <div className="text-[11px] text-muted-foreground">{s.sub}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const MainProduct = () => {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* ================= HEADER + INTRO ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="min-w-0"
        >
          <motion.div variants={item} className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="rounded-full px-4 py-1">
                Visualization
              </Badge>

              <span className="inline-flex items-center gap-2 text-[11px] text-muted-foreground">
                <Sparkles className="size-4 text-primary" />
                Real estate experience layer
              </span>

              <span className="hidden md:inline-flex text-[11px] px-3 py-1 rounded-full bg-muted/40 border border-border text-muted-foreground">
                Mapping • Tours • 3D
              </span>
            </div>

            <h2 className="mt-5 text-[26px] sm:text-[34px] md:text-[40px] font-bold tracking-tight text-foreground leading-tight">
              Transforming <span className="text-primary">Real Estate</span>
              <br />
              with <span className="text-foreground/90">Cutting-Edge</span>{" "}
              Visualization
            </h2>

            <p className="mt-4 text-[13px] sm:text-[14px] md:text-[15px] text-muted-foreground leading-relaxed">
              We build interactive visualization systems for layouts, villas,
              and large-scale projects — so buyers, investors, and teams can
              explore faster, compare options, and make decisions with clarity.
            </p>
          </motion.div>
        </motion.div>

        {/* ================= FULL SCREEN VIDEO (FULL BLEED) ================= */}
       {/* ================= CLEAN VIDEO SECTION ================= */}
{/* ================= CLEAN VIDEO SECTION ================= */}
<motion.div
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  className="mt-10"
>
  <div className="mx-auto max-w-[80vw] lg:max-w-[72vw]">
    <div className="aspect-[16/8] overflow-hidden rounded-xl">
      <video
        src="/vid1.mp4"
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>

    <p className="mt-3 text-center text-[12px] text-muted-foreground">
      Interactive visualization • Image mapping • 360° tours • 3D walkthroughs
    </p>
  </div>
</motion.div>



        {/* ================= MAIN GRID (LEFT CONTENT + RIGHT MAP) ================= */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-12 items-start">
          {/* ================= LEFT ================= */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="min-w-0"
          >
            <motion.div variants={item} className="max-w-2xl">
              <div className="rounded-2xl border border-border bg-background/60 backdrop-blur p-5">
                <div className="text-[13px] font-semibold text-foreground">
                  What users can do inside the experience
                </div>

                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Tap plots to open details instantly",
                    "View floor plans, images & PDFs",
                    "Explore via 360° tours & hotspots",
                    "See 3D renders for future phases",
                  ].map((t) => (
                    <li
                      key={t}
                      className="text-[12px] text-muted-foreground flex items-start gap-2"
                    >
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="leading-snug">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <QuickStrip />

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild className="rounded-xl">
                  <Link href="/services/nexnet">
                    Explore Visualization{" "}
                    <ArrowUpRight className="ml-2 size-4" />
                  </Link>
                </Button>

                <Button asChild variant="outline" className="rounded-xl">
                  <Link href="/contact-us">Request Demo</Link>
                </Button>
              </div>
            </motion.div>

            {/* Feature row */}
            <motion.div
              variants={item}
              className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="relative rounded-2xl border border-border bg-background/60 backdrop-blur p-5 overflow-hidden"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 to-secondary/10" />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.08]"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.45) 1px, transparent 0)",
                        backgroundSize: "22px 22px",
                      }}
                    />

                    <div className="relative">
                      <div className="h-11 w-11 rounded-2xl border border-border bg-muted/35 flex items-center justify-center">
                        <Icon className="size-5 text-primary" />
                      </div>

                      <div className="mt-4 text-[14px] font-semibold text-foreground">
                        {f.title}
                      </div>

                      <div className="mt-1 text-[12px] text-muted-foreground leading-snug">
                        {f.description}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* ================= RIGHT (MAP PANEL ONLY) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full"
          >
            <Card className="relative overflow-hidden rounded-2xl border border-border bg-background/60 backdrop-blur shadow-sm">
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.22) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-primary/18 to-secondary/18 blur-3xl opacity-60" />

              <CardContent className="relative z-10 p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-2xl border border-border bg-muted/35 flex items-center justify-center">
                      <Map className="size-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[13px] font-semibold text-foreground">
                        Interactive Map UI
                      </div>
                      <div className="text-[11px] text-muted-foreground">
                        Tap plots • hotspots • navigation
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] px-3 py-1 rounded-full bg-muted/40 border border-border text-muted-foreground">
                    Live
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {[
                    { icon: Crosshair, label: "Plot Focus" },
                    { icon: Navigation, label: "Visual" },
                    { icon: Layers, label: "Layers" },
                  ].map((it) => {
                    const Icon = it.icon;
                    return (
                      <div
                        key={it.label}
                        className="rounded-xl border border-border bg-muted/30 p-3 flex items-center gap-2"
                      >
                        <div className="h-8 w-8 rounded-xl border border-border bg-background/60 flex items-center justify-center">
                          <Icon className="size-4 text-primary" />
                        </div>
                        <div className="text-[11px] text-muted-foreground leading-tight">
                          {it.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-2xl border border-border bg-muted/30 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-4 h-4 text-foreground/80 fill-foreground/80 opacity-90"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] px-3 py-1 rounded-full bg-background/60 border border-border text-muted-foreground">
                      Trusted
                    </span>
                  </div>

                  <p className="mt-3 text-[12px] text-muted-foreground leading-relaxed">
                    Reduce back-and-forth by showing plot info, floor plans,
                    renders, and CTAs inside a clean map-driven experience.
                  </p>

                  <div className="mt-4 flex items-start gap-3">
                    <div className="h-9 w-9 rounded-xl border border-border bg-background/60 flex items-center justify-center">
                      <ShieldCheck className="size-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-foreground">
                        AI Integration
                      </div>
                      <div className="text-[11px] text-muted-foreground">
                        Smart insights, faster qualification, better decisions.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <Button asChild className="rounded-xl">
                    <Link href="/contact-us">
                      Talk to us <ArrowUpRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-xl">
                    <Link href="/portfolio">View Work</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MainProduct;
