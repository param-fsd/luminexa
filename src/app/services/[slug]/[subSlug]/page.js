"use client";

import React, { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import sanitizeHtml from "sanitize-html";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Play,
  ShieldCheck,
  Cpu,
  Layers,
  HelpCircle,
  Rocket,
} from "lucide-react";
import services from "@/data/serviceData";

const cx = (...c) => c.filter(Boolean).join(" ");

/* -------------------------------------------------------------------------- */
/*  Background – global tokens (Hero-like)                                     */
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
    { icon: ShieldCheck, title: "Stable builds", sub: "Production-ready" },
    { icon: Cpu, title: "Modern stack", sub: "Fast + scalable" },
    { icon: Layers, title: "Premium UI", sub: "Tech detailing" },
  ];

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
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

const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={cx(
      "relative px-4 py-2 rounded-full text-[11px] sm:text-[12px] border transition-all",
      active
        ? "bg-foreground text-background border-foreground"
        : "bg-background/60 text-muted-foreground border-border hover:bg-muted/40 hover:text-foreground"
    )}
    aria-current={active ? "page" : undefined}
    type="button"
  >
    {children}
  </button>
);

const GlassPanel = ({ children, className = "" }) => (
  <div
    className={cx(
      "rounded-2xl border border-border bg-background/60 backdrop-blur shadow-sm",
      className
    )}
  >
    {children}
  </div>
);

/* -------------------------------------------------------------------------- */
/*  Demo Panel – modern video UI                                               */
/* -------------------------------------------------------------------------- */
const DemoPanel = ({ demo, index, title }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="relative overflow-hidden rounded-2xl border border-border bg-background/60 backdrop-blur shadow-sm"
    >
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.30) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl opacity-50" />

      <div className="relative p-4 md:p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="text-[11px] text-muted-foreground flex items-center gap-2">
              <Play className="size-3.5 text-primary" />
              <span>Demo {index + 1}</span>
            </div>
            <h3 className="mt-1 text-[14px] sm:text-[15px] font-semibold text-foreground truncate">
              {demo.title || `${title} Demo`}
            </h3>
          </div>

          <span className="text-[10px] sm:text-[11px] px-3 py-1 rounded-full bg-muted/40 border border-border text-muted-foreground">
            Video
          </span>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-muted/30">
          <div className="aspect-video">
            <video
              src={demo.url}
              controls
              className="w-full h-full"
              aria-label={`Demo video ${index + 1} for ${title}`}
            />
          </div>
        </div>

        {demo.description ? (
          <p className="mt-3 text-[12px] sm:text-[13px] text-muted-foreground leading-snug">
            {demo.description}
          </p>
        ) : null}
      </div>
    </motion.div>
  );
};

const SubServiceDetails = () => {
  const params = useParams();
  const slug = params?.slug;
  const subSlug = params?.subSlug;

  const service = useMemo(() => services.find((s) => s.slug === slug), [slug]);

  const subService = useMemo(
    () => service?.subServices?.find((ss) => ss.subSlug === subSlug),
    [service, subSlug]
  );

  const [activeTab, setActiveTab] = useState("overview");

  if (!service || !subService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-base text-foreground">Sub-service not found</p>
      </div>
    );
  }

  // ✅ IMPORTANT: Use ONLY subService image for hero (fallback to service if missing)
  const heroImage =
    subService.image || service.image || "/placeholder.jpg";

  const sanitizedOverview = sanitizeHtml(subService.overview || "", {
    allowedTags: ["p", "b", "i", "em", "strong", "a", "ul", "li", "ol", "br"],
    allowedAttributes: { a: ["href", "target"] },
  });

  const tabs = [
    { id: "overview", label: "Overview" },
    ...(subService.benefits?.length ? [{ id: "benefits", label: "Benefits" }] : []),
    ...(subService.caseStudies?.length ? [{ id: "caseStudies", label: "Case Studies" }] : []),
    ...(subService.technologies?.length ? [{ id: "technologies", label: "Technologies" }] : []),
    ...(subService.faqs?.length ? [{ id: "faqs", label: "FAQs" }] : []),
  ];

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
          <Link href="/services" className="hover:underline flex items-center gap-1">
            <ArrowLeft className="size-3" /> Services
          </Link>
          <span>{">"}</span>
          <Link href={`/services/${service.slug}`} className="hover:underline">
            {service.title}
          </Link>
          <span>{">"}</span>
          <span className="text-foreground/90 font-medium">{subService.title}</span>
        </motion.div>

        {/* HERO PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl border border-border bg-background/60 backdrop-blur"
        >
          {/* ✅ Image as Next/Image (no stretching) */}
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={subService.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
              maskImage: "radial-gradient(circle at 60% 42%, black 0%, black 45%, transparent 74%)",
              WebkitMaskImage:
                "radial-gradient(circle at 60% 42%, black 0%, black 45%, transparent 74%)",
            }}
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/15" />
          <div className="absolute -bottom-24 -right-24 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-primary/25 to-secondary/25 blur-3xl opacity-60" />

          {/* ✅ Stable height to avoid compression */}
          <div className="relative z-10 p-6 md:p-10 min-h-[320px] sm:min-h-[360px] md:min-h-[420px] flex flex-col justify-end">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="min-w-0">
                <Badge
                  variant="secondary"
                  className="mb-3 w-fit rounded-full px-3 py-1 bg-white/15 text-white border border-white/15 backdrop-blur"
                >
                  {service.label}
                </Badge>

                <h1 className="text-[20px] sm:text-[24px] md:text-[30px] font-bold tracking-tight text-white">
                  {subService.title}
                </h1>

                <p className="mt-3 text-[12px] sm:text-[13px] md:text-[14px] text-white/85 max-w-2xl leading-snug">
                  {subService.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Secure", "Scalable", "High Performance"].map((t) => (
                    <span
                      key={t}
                      className="text-[10px] sm:text-[11px] px-3 py-1 rounded-full bg-white/12 ring-1 ring-white/18 text-white/85 backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 self-start md:self-end">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl bg-white/10 text-white border-white/15 hover:bg-white/15"
                >
                  <Link href="/contact-us">
                    Book Demo <ArrowUpRight className="size-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild className="rounded-xl">
                  <Link href="/portfolio">Portfolio</Link>
                </Button>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-[11px] text-white/75">
              <Sparkles className="size-4 text-primary" />
              <span>Modern UI • Smooth motion • Built for real results</span>
            </div>
          </div>
        </motion.div>

        {/* TABS */}
        <GlassPanel className="mt-8 p-4 md:p-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-wrap gap-2"
          >
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </TabButton>
            ))}
          </motion.div>
        </GlassPanel>

        {/* CONTENT */}
        <div className="mt-6 space-y-6">
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6"
            >
              <GlassPanel className="p-6 md:p-8">
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
              </GlassPanel>

              {subService.demos?.length ? (
                <GlassPanel className="p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <h2 className="text-base md:text-lg font-semibold text-foreground">
                      See It in Action
                    </h2>
                    <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] text-muted-foreground">
                      <Play className="size-4 text-primary" />
                      Demos
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                    {subService.demos.map((demo, index) => (
                      <DemoPanel
                        key={index}
                        demo={demo}
                        index={index}
                        title={subService.title}
                      />
                    ))}
                  </div>
                </GlassPanel>
              ) : null}
            </motion.div>
          )}

          {activeTab === "benefits" && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <GlassPanel className="p-6 md:p-8">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h2 className="text-base md:text-lg font-semibold text-foreground">
                    Benefits
                  </h2>
                  <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] text-muted-foreground">
                    <Sparkles className="size-4 text-primary" />
                    Value
                  </span>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {subService.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="rounded-xl border border-border bg-muted/30 px-4 py-3 text-[12px] sm:text-[13px] text-foreground/90"
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>
              </GlassPanel>
            </motion.div>
          )}

          {activeTab === "caseStudies" && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <GlassPanel className="p-6 md:p-8">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h2 className="text-base md:text-lg font-semibold text-foreground">
                    Case Studies
                  </h2>
                  <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] text-muted-foreground">
                    <Rocket className="size-4 text-primary" />
                    Results
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {subService.caseStudies.map((study, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-border bg-muted/30 p-4"
                    >
                      <h3 className="text-[14px] md:text-[15px] font-semibold text-foreground">
                        {study.title}
                      </h3>
                      <p className="mt-1 text-[12px] md:text-[13px] text-muted-foreground leading-snug">
                        {study.description}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>
          )}

          {activeTab === "technologies" && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <GlassPanel className="p-6 md:p-8">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h2 className="text-base md:text-lg font-semibold text-foreground">
                    Technologies
                  </h2>
                  <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] text-muted-foreground">
                    <Cpu className="size-4 text-primary" />
                    Stack
                  </span>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {subService.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="rounded-xl border border-border bg-muted/30 px-4 py-3 text-center text-[12px] sm:text-[13px] text-foreground/90"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </GlassPanel>
            </motion.div>
          )}

          {activeTab === "faqs" && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <GlassPanel className="p-6 md:p-8">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h2 className="text-base md:text-lg font-semibold text-foreground">
                    FAQs
                  </h2>
                  <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] text-muted-foreground">
                    <HelpCircle className="size-4 text-primary" />
                    Help
                  </span>
                </div>

                <ul className="space-y-3">
                  {subService.faqs.map((faq, index) => (
                    <li key={index} className="rounded-2xl border border-border bg-muted/30 p-4">
                      <h3 className="text-[14px] md:text-[15px] font-semibold text-foreground">
                        {faq.question}
                      </h3>
                      <p className="mt-1 text-[12px] md:text-[13px] text-muted-foreground leading-snug">
                        {faq.answer}
                      </p>
                    </li>
                  ))}
                </ul>
              </GlassPanel>
            </motion.div>
          )}
        </div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 mb-10"
        >
          <GlassPanel className="p-8 text-center">
            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-muted-foreground mb-4 max-w-2xl mx-auto">
              Ready to elevate your project? Get started with{" "}
              <span className="text-foreground font-semibold">{subService.title}</span>{" "}
              today!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="rounded-xl">
                <Link href="/contact-us">Get Started</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-xl">
                <Link href={`/services/${service.slug}`}>Back</Link>
              </Button>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
};

export default SubServiceDetails;
