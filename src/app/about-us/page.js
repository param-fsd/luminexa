"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Sparkles,
  Rocket,
  Globe,
  BrainCircuit,
  Boxes,
  Wand2,
  ShieldCheck,
  Code2,
  Handshake,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const AboutPage = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.18) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute -top-36 -left-36 h-[520px] w-[520px] rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-secondary/12 blur-3xl" />
      </div>

     <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* ================= HERO ================= */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55 }}
            className="max-w-xl"
          >
            <Badge className="mb-3 rounded-full px-3 py-1 text-xs">
              About Luminexa
            </Badge>

            <h1 className="text-[32px] font-bold tracking-tight text-foreground sm:text-[40px] md:text-[44px] leading-tight">
              Engineering{" "}
              <span className="text-primary">Digital Experiences</span>
              <br className="hidden sm:block" />
              That Feel Modern, Fast, and Human
            </h1>

            <p className="mt-4 text-[13.5px] md:text-[14.5px] text-muted-foreground leading-relaxed">
              Luminexa Technologies is a product + solutions company focused on
              building experience-first platforms using Augmented Reality,
              Artificial Intelligence, and modern web technologies.
            </p>

            <p className="mt-2 text-[13.5px] md:text-[14.5px] text-muted-foreground leading-relaxed">
              We help brands, developers, and enterprises move beyond static
              content by turning ideas into interactive, intelligent, and
              scalable systems.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="rounded-lg px-7 py-5 text-sm">
                Get in Touch <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-lg px-7 py-5 text-sm"
              >
                View Our Work
              </Button>
            </div>

            {/* Quick trust points */}
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 backdrop-blur">
                <ShieldCheck className="size-4 text-primary" />
                Production-ready builds
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 backdrop-blur">
                <Code2 className="size-4 text-primary" />
                Clean architecture
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 backdrop-blur">
                <Handshake className="size-4 text-primary" />
                Partner mindset
              </span>
            </div>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-background/60 backdrop-blur shadow-sm">
              {/* Image */}
              <div className="relative aspect-[16/11] w-full">
                <img
                  src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1600&q=80"
                  alt="Luminexa team building digital experiences"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                {/* Overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/20 to-background/70" />
                <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
              </div>

              {/* Floating card */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold">Experience-first</p>
                    <p className="mt-1 text-[13px] text-muted-foreground leading-relaxed">
                      Design + engineering that improves engagement, clarity,
                      and conversion across devices.
                    </p>
                  </div>

                  <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-background">
                    <Wand2 className="size-5 text-primary" />
                  </span>
                </div>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    { label: "WebAR", value: "Fast" },
                    { label: "AI", value: "Smart" },
                    { label: "UI/UX", value: "Modern" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border bg-background/70 px-3 py-2 text-center"
                    >
                      <div className="text-sm font-semibold">{s.value}</div>
                      <div className="text-[11px] text-muted-foreground">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* subtle outline glow */}
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[28px] bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 blur-2xl" />
          </motion.div>
        </div>

        {/* ================= STATS STRIP ================= */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-12 rounded-2xl border border-border bg-background/60 backdrop-blur p-5 md:p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              { icon: Sparkles, title: "Innovation-led", desc: "Future-ready builds" },
              { icon: Rocket, title: "Performance", desc: "Optimized across devices" },
              { icon: Globe, title: "Scalable", desc: "From MVP to enterprise" },
              { icon: ShieldCheck, title: "Reliable", desc: "Maintainable systems" },
            ].map((it, i) => {
              const Icon = it.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-border bg-background/70 p-4"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{it.title}</p>
                    <p className="mt-1 text-[12.5px] text-muted-foreground">
                      {it.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ================= MISSION / VISION ================= */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Globe,
              title: "Our Mission",
              desc:
                "To simplify complex ideas through intuitive digital experiences that enhance clarity, engagement, and decision-making for businesses and users.",
            },
            {
              icon: Rocket,
              title: "Our Vision",
              desc:
                "To shape a future where immersive technology becomes a natural extension of how people learn, explore, and interact with the world.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-2xl border border-border bg-background/60 backdrop-blur p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= WHAT WE DO ================= */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-14"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold">What We Build</h2>
              <p className="mt-1 text-[13.5px] text-muted-foreground">
                Products and solutions designed for impact, not just aesthetics.
              </p>
            </div>
            <Badge variant="outline" className="w-fit rounded-full">
              AR • AI • Web • Automation
            </Badge>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Boxes,
                title: "WebAR Experiences",
                desc:
                  "Image tracking, product visualization, and interactive campaigns that run directly in the browser.",
              },
              {
                icon: BrainCircuit,
                title: "AI-Enabled Systems",
                desc:
                  "Smart workflows, assistants, and intelligence layers that reduce manual effort and improve decisions.",
              },
              {
                icon: Code2,
                title: "Modern Web Apps",
                desc:
                  "Fast, responsive platforms built with clean architecture, maintainable UI, and scalable backends.",
              },
              {
                icon: Sparkles,
                title: "Design + UX",
                desc:
                  "Conversion-focused UI/UX with micro-interactions and thoughtful layouts that feel premium.",
              },
            ].map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  className="group rounded-2xl border border-border bg-background/60 backdrop-blur p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </span>
                    <span className="opacity-0 transition-opacity group-hover:opacity-100">
                      <ArrowRight className="size-4 text-muted-foreground" />
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{v.title}</h3>
                  <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ================= CORE VALUES ================= */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-14"
        >
          <h2 className="text-xl font-semibold">What Defines Us</h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Innovation",
                desc:
                  "We explore emerging tech to build solutions that stay relevant, scalable, and future-ready.",
                icon: Sparkles,
              },
              {
                title: "Quality",
                desc:
                  "Clean architecture, performance efficiency, and long-term maintainability guide every build.",
                icon: Rocket,
              },
              {
                title: "Collaboration",
                desc:
                  "We work closely with partners and clients, treating every project as a shared mission.",
                icon: Handshake,
              },
            ].map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="rounded-2xl border border-border bg-background/60 backdrop-blur p-5"
                >
                  <Icon className="size-6 text-primary mb-3" />
                  <h3 className="text-base font-semibold">{v.title}</h3>
                  <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ================= CTA ================= */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-2xl border border-border bg-background/60 backdrop-blur p-7 text-center"
        >
          <h3 className="text-2xl font-bold">Let’s Build What’s Next</h3>
          <p className="mx-auto mt-2 max-w-xl text-[13.5px] text-muted-foreground leading-relaxed">
            From immersive WebAR products to intelligent automation systems,
            we’re ready to turn your vision into a working reality.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button className="rounded-lg px-7 py-5 text-sm">
              Get in Touch <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button variant="outline" className="rounded-lg px-7 py-5 text-sm">
              Explore Capabilities
            </Button>
          </div>

          <p className="mt-5 text-[12px] text-muted-foreground">
            Luminexa Technologies • AR • AI • Web
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
