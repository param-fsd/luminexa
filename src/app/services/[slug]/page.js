"use client";

import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import sanitizeHtml from "sanitize-html";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Sparkles,
  Code,
  ShieldCheck,
  Zap,
  Layers,
} from "lucide-react";

import services from "@/data/serviceData";

/* -------------------------------------------------------------------------- */
/*  Background – same vibe as HeroSection                                      */
/* -------------------------------------------------------------------------- */
const SectionBg = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-background" />

    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.14) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    />

    <div className="absolute -top-28 -left-24 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
    <div className="absolute -bottom-32 -right-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-secondary/18 to-primary/18 blur-3xl" />
  </div>
);

const StatStrip = () => {
  const items = [
    { icon: Zap, title: "Fast Delivery", sub: "Rapid prototypes" },
    { icon: ShieldCheck, title: "Stable Builds", sub: "Production-ready" },
    { icon: Layers, title: "Premium UX", sub: "Modern UI systems" },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <div
            key={it.title}
            className="rounded-2xl border border-border bg-muted/30 backdrop-blur p-4 flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-xl border border-border bg-background/60 flex items-center justify-center">
              <Icon className="size-5 text-primary" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-foreground">
                {it.title}
              </div>
              <div className="text-xs text-muted-foreground">{it.sub}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  SubService Tile – FIXED TOP TEXT readability (glass panel)                 */
/* -------------------------------------------------------------------------- */
const SubServiceTile = ({ parentSlug, serviceImage, subService }) => {
  const imageSrc = subService.image || serviceImage || "/placeholder.jpg";

  return (
    <Link
      href={`/services/${parentSlug}/${subService.subSlug}`}
      className="group block"
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="
          relative overflow-hidden rounded-2xl border border-border
          bg-background/60 backdrop-blur shadow-sm
          h-[320px] sm:h-[340px] md:h-[380px]
        "
      >
        {/* IMAGE */}
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={subService.title}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* ✅ TOP SOFT DARKEN (so top text is readable on light images) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-transparent" />
        {/* ✅ BOTTOM DARKEN (keeps your previous look) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/25 to-transparent" />

        {/* Tech grid overlay */}
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
            maskImage:
              "radial-gradient(circle at 60% 42%, black 0%, black 45%, transparent 74%)",
            WebkitMaskImage:
              "radial-gradient(circle at 60% 42%, black 0%, black 45%, transparent 74%)",
          }}
        />

        {/* Border ring */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-500" />

        {/* ------------------------------------------------------------------ */}
        {/* ✅ TOP CONTENT (glass panel)                                         */}
        {/* ------------------------------------------------------------------ */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-start justify-between gap-3">
          {/* LEFT GLASS PANEL */}
          <div
            className="
              rounded-2xl border border-white/15 bg-black/35 backdrop-blur-xl
              px-4 py-3
              max-w-[82%]
            "
          >
            {/* Title row */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[14px] sm:text-[15px] font-semibold text-white">
                {subService.title}
              </span>

              {/* small tag pill (optional style like your screenshot) */}
              <span className="text-[10px] sm:text-[11px] px-3 py-1 rounded-full bg-white/12 ring-1 ring-white/20 text-white/90">
                {parentSlug === "augmented-reality" ? "nexAR" : "nex"}
              </span>
            </div>

            {/* Description (keep small & neat like screenshot) */}
            <p className="mt-1 text-[12px] sm:text-[13px] text-white/85 leading-snug line-clamp-2">
              {subService.description}
            </p>

            {/* Micro line */}
            <div className="mt-1.5 flex items-center gap-2 text-[10px] text-white/75">
              <Sparkles className="size-3.5" />
              <span>Modern UI • Performance • Detailing</span>
            </div>

            {/* Learn more pill */}
            <div className="mt-2 inline-flex">
              <span className="text-[10px] sm:text-[11px] px-3 py-1 rounded-full bg-white/14 ring-1 ring-white/20 text-white/90 backdrop-blur">
                Learn More
              </span>
            </div>
          </div>

          {/* RIGHT ARROW BUTTON */}
          <motion.div
            className="shrink-0 h-10 w-10 rounded-full bg-white/70 ring-1 ring-black/10 backdrop-blur-md shadow-sm flex items-center justify-center"
            whileHover={{ x: 3, y: -3 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ArrowUpRight className="size-4 text-black/75" />
          </motion.div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* ✅ BOTTOM "VIEW DETAILS" (like your screenshot)                       */}
        {/* ------------------------------------------------------------------ */}
        <div className="absolute bottom-5 right-6 z-20 text-[11px] sm:text-[12px] text-white/80">
          View Details →
        </div>

        {/* Corner glow */}
        <div className="absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-gradient-to-br from-primary/25 to-secondary/25 blur-3xl opacity-40 group-hover:opacity-65 transition-opacity duration-500" />
      </motion.div>
    </Link>
  );
};

const ServiceDetails = () => {
  const params = useParams();
  const slug = params?.slug;

  const service = useMemo(() => services.find((s) => s.slug === slug), [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-base text-foreground">Service not found</p>
      </div>
    );
  }

  const sanitizedOverview = sanitizeHtml(service.overview || "", {
    allowedTags: ["p", "b", "i", "em", "strong", "a", "ul", "li", "ol", "br"],
    allowedAttributes: { a: ["href", "target"] },
  });

  return (
    <section className="relative w-full min-h-screen py-16 md:py-20 overflow-hidden">
      <SectionBg />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 text-sm text-muted-foreground flex items-center gap-2"
        >
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <span>{">"}</span>
          <span className="text-foreground/90 font-medium">{service.title}</span>
        </motion.div>

        {/* Header panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl border border-border bg-background/60 backdrop-blur p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="min-w-0">
              <Badge variant="secondary" className="mb-3 w-fit rounded-full px-3 py-1">
                {service.label}
              </Badge>

              <h1 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold tracking-tight text-foreground">
                {service.title}
              </h1>

              <p className="mt-3 text-[12px] sm:text-[13px] md:text-[14px] text-muted-foreground max-w-2xl">
                {service.description}
              </p>
            </div>

            <div className="flex gap-3 self-start">
              <Button asChild variant="outline" className="rounded-xl">
                <Link href="/contact-us">Book a Demo</Link>
              </Button>
              <Button asChild className="rounded-xl">
                <Link href="/portfolio">Portfolio</Link>
              </Button>
            </div>
          </div>

          <StatStrip />
        </motion.div>

        {/* Overview */}
        <div className="mt-8 grid grid-cols-1 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-2xl border border-border bg-background/60 backdrop-blur p-6 md:p-8"
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <h2 className="text-base md:text-lg font-semibold text-foreground">
                Overview
              </h2>
              <span className="text-[10px] sm:text-[11px] px-3 py-1 rounded-full bg-muted/40 border border-border text-muted-foreground">
                Details
              </span>
            </div>

            <article
              className="prose prose-sm dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: sanitizedOverview }}
            />
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="rounded-2xl border border-border bg-background/60 backdrop-blur p-6 md:p-8"
          >
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="text-base md:text-lg font-semibold text-foreground">
                Our Services
              </h2>
              <span className="hidden sm:inline-flex items-center gap-2 text-[10px] sm:text-[11px] text-muted-foreground">
                <Sparkles className="size-4 text-primary" />
                Tech-style panels
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {service?.subServices?.map((sub) => (
                <SubServiceTile
                  key={sub.subSlug}
                  parentSlug={service.slug}
                  serviceImage={service.image}
                  subService={sub}
                />
              ))}

              {/* Custom Development Enquiry */}
              <Link href="/contact-us" className="md:col-span-2 group block">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="relative overflow-hidden rounded-2xl border border-dashed border-primary/40 bg-muted/30 backdrop-blur p-7 md:p-10"
                >
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute -top-24 -left-24 h-[320px] w-[320px] rounded-full bg-primary/20 blur-3xl" />
                    <div className="absolute -bottom-24 -right-24 h-[360px] w-[360px] rounded-full bg-secondary/20 blur-3xl" />
                  </div>

                  <div className="relative z-10 max-w-xl mx-auto text-center">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-2xl border border-border bg-background/60 flex items-center justify-center">
                      <Code className="w-7 h-7 text-primary" />
                    </div>

                    <h3 className="text-[16px] sm:text-[18px] font-semibold text-foreground">
                      Custom Development Enquiry
                    </h3>
                    <p className="text-[12px] sm:text-[13px] text-muted-foreground mt-2">
                      Need a tailored solution? Contact us to discuss your custom development needs.
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold text-primary">
                      Contact Us <ArrowUpRight className="size-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
