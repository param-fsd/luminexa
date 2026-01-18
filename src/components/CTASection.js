"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  ArrowUpRight,
  Sparkles,
  Cpu,
  Layers,
  Zap,
} from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative w-full py-28 md:py-36 overflow-hidden">
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />

        {/* tech grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* soft glows */}
        <div className="absolute -top-48 -left-48 h-[620px] w-[620px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
        <div className="absolute -bottom-48 -right-48 h-[720px] w-[720px] rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center relative"
        >
          {/* ================= TOP MICRO UI ================= */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Badge className="rounded-full px-4 py-1" variant="secondary">
              Let’s Collaborate
            </Badge>
            <span className="text-[11px] text-muted-foreground flex items-center gap-1">
              <Sparkles className="size-3.5 text-primary" />
              Design • AR • AI • Engineering
            </span>
          </div>

          {/* ================= HEADLINE ================= */}
          <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-bold tracking-tight text-foreground">
            Innovating Beyond <br />
            <span className="text-primary">Boundaries</span>
          </h2>

          {/* ================= DESCRIPTION ================= */}
          <p className="mt-5 text-[13px] sm:text-[14px] md:text-[15px] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From immersive WebAR to intelligent platforms and future-ready
            digital products — we help brands turn bold ideas into meaningful,
            scalable experiences.
          </p>

          {/* ================= FEATURE STRIP ================= */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { icon: Zap, label: "Fast Delivery" },
              { icon: Layers, label: "Premium UI" },
              { icon: Cpu, label: "Modern Stack" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/60 backdrop-blur text-[11px] text-foreground"
                >
                  <Icon className="size-4 text-primary" />
                  {item.label}
                </motion.div>
              );
            })}
          </div>

          {/* ================= CTA ACTIONS ================= */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="rounded-xl h-12 px-8">
              <Link href="/getstarted">
                Start a Project
                <ArrowUpRight className="ml-2 size-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-xl h-12 px-8"
            >
              <Link href="/contact-us">Book a Creative Demo</Link>
            </Button>
          </div>

          {/* ================= BOTTOM MICRO COPY ================= */}
          <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
            No obligation • Strategy-first • Built to scale
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
