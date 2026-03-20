"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  ArrowUpRight,
  Sparkles,
  Cpu,
  Layers,
  Zap,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const SectionBg = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-background" />
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.14) 1px, transparent 1px)",
        backgroundSize: "58px 58px",
      }}
    />
    <div className="absolute -top-24 -left-24 h-[340px] w-[340px] rounded-full bg-primary/10 blur-3xl" />
    <div className="absolute -bottom-24 -right-20 h-[380px] w-[380px] rounded-full bg-secondary/10 blur-3xl" />
  </div>
);

const SectionLabel = ({ icon: Icon, children }) => (
  <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
    {Icon ? <Icon className="size-3.5 text-primary" /> : null}
    <span>{children}</span>
  </div>
);

const CTASection = () => {
  const highlights = [
    "Fast delivery approach",
    "Premium UI systems",
    "Modern and scalable stack",
    "Strategy-first execution",
  ];

  const features = [
    { icon: Zap, label: "Fast Delivery" },
    { icon: Layers, label: "Premium UI" },
    { icon: Cpu, label: "Modern Stack" },
  ];

  return (
    <section className="relative w-full py-14 md:py-16 overflow-hidden">
      <SectionBg />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[20px] sm:rounded-[26px] border border-border/60 bg-foreground text-background"
        >
          <div className="absolute inset-0 opacity-[0.06]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />
          </div>

          <div className="absolute -top-20 -left-20 h-[220px] w-[220px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-[260px] w-[260px] rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 xl:grid-cols-[1.15fr_.85fr] gap-8 px-4 py-6 sm:px-6 md:px-8 md:py-9 lg:px-10 lg:py-10">
            <div>
              <Badge className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur">
                Let’s Collaborate
              </Badge>

              <h2 className="mt-3 text-[22px] sm:text-[30px] md:text-[40px] lg:text-[46px] font-semibold tracking-[-0.04em] leading-tight text-background">
                Innovating Beyond
                <span className="block text-background/85">Boundaries</span>
              </h2>

              <p className="mt-4 max-w-2xl text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-background/75">
                From immersive WebAR to intelligent platforms and future-ready
                digital products, we help brands turn bold ideas into
                meaningful, scalable experiences.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Button
                  asChild
                  variant="secondary"
                  className="rounded-full px-5 w-full sm:w-auto"
                >
                  <Link href="/getstarted">
                    Start a Project
                    <ArrowUpRight className="size-4 ml-2" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-5 border-background/20 bg-transparent text-background hover:bg-background/10 w-full sm:w-auto"
                >
                  <Link href="/contact-us">Book a Creative Demo</Link>
                </Button>
              </div>

              <div className="mt-5 flex items-center gap-2 text-[11px] text-background/65">
                <span className="h-1.5 w-1.5 rounded-full bg-background/60" />
                No obligation • Strategy-first • Built to scale
              </div>
            </div>

            <div className="xl:border-l xl:border-white/10 xl:pl-8">
              <SectionLabel icon={Sparkles}>Why work with us</SectionLabel>

              <div className="mt-4 space-y-3">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-white mt-0.5 shrink-0" />
                    <span className="text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-background/75">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {features.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.25 }}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[10px] sm:text-[11px] text-background backdrop-blur"
                    >
                      <Icon className="size-4 text-white/90" />
                      {item.label}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;