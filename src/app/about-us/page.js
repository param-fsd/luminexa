"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Sparkles,
  Rocket,
  Globe,
  BrainCircuit,
  Boxes,
  Wand2,
  ShieldCheck,
  Code2,
  Handshake,
  Layers,
  CheckCircle2,
  Quote,
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

const InfoCard = ({ icon: Icon, title, desc }) => (
  <motion.div
    {...fadeUp}
    transition={{ duration: 0.45 }}
    className="rounded-[18px] sm:rounded-[22px] border border-border/60 bg-background/70 p-4 sm:p-5 md:p-6"
  >
    <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-primary/10">
      <Icon className="size-5 text-primary" />
    </span>

    <h3 className="mt-4 text-[15px] sm:text-[18px] font-semibold text-foreground">
      {title}
    </h3>

    <p className="mt-2 text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-muted-foreground">
      {desc}
    </p>
  </motion.div>
);

const ValueCard = ({ icon: Icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 220, damping: 18 }}
    className="rounded-[18px] sm:rounded-[22px] border border-border/60 bg-background/70 p-4 sm:p-5 md:p-6"
  >
    <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-primary/10">
      <Icon className="size-5 text-primary" />
    </span>

    <h3 className="mt-4 text-[15px] sm:text-[18px] font-semibold text-foreground">
      {title}
    </h3>

    <p className="mt-2 text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-muted-foreground">
      {desc}
    </p>
  </motion.div>
);

const ProcessLine = ({ step, last }) => (
  <div className="relative pl-9 sm:pl-10">
    <div className="absolute left-0 top-0 flex flex-col items-center">
      <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-border bg-background text-[10px] sm:text-[11px] font-semibold text-primary flex items-center justify-center">
        {step.step}
      </div>
      {!last ? <div className="mt-2 h-14 sm:h-16 w-px bg-border" /> : null}
    </div>

    <div className="pb-6">
      <div className="text-[14px] sm:text-[17px] font-semibold text-foreground">
        {step.title}
      </div>
      <p className="mt-2 text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-muted-foreground max-w-3xl">
        {step.description}
      </p>
    </div>
  </div>
);

const AboutPage = () => {
  const stats = [
    { value: "AR", label: "Immersive Solutions" },
    { value: "AI", label: "Intelligent Systems" },
    { value: "Web", label: "Modern Platforms" },
  ];

  const highlights = [
    "Production-ready builds",
    "Clean architecture",
    "Experience-first execution",
    "Scalable delivery approach",
  ];

  const capabilities = [
    {
      icon: Boxes,
      title: "WebAR Experiences",
      desc: "Browser-based immersive experiences including image tracking, product visualization, interactive campaigns, and engagement-led digital solutions.",
    },
    {
      icon: BrainCircuit,
      title: "AI-Enabled Systems",
      desc: "Smart workflows, automation systems, assistant-driven tools, and intelligence-powered layers that reduce manual effort and improve decisions.",
    },
    {
      icon: Code2,
      title: "Modern Web Applications",
      desc: "Fast, responsive, and scalable platforms built with clean architecture, maintainable UI systems, and strong product-focused engineering.",
    },
    {
      icon: Wand2,
      title: "Design + UX Systems",
      desc: "Premium interfaces, thoughtful layouts, and polished interactions designed to improve clarity, usability, and conversion.",
    },
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Innovation",
      desc: "We work with emerging technologies to build solutions that stay relevant, adaptive, and future-ready.",
    },
    {
      icon: ShieldCheck,
      title: "Quality",
      desc: "Performance, maintainability, and structured execution shape every experience we design and develop.",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      desc: "We approach every project with a partner mindset, aligning our work with real business objectives and outcomes.",
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Understand the requirement",
      description:
        "We begin by understanding the business goal, audience, expected outcome, and technical scope before shaping the right solution.",
    },
    {
      step: "02",
      title: "Design the experience",
      description:
        "We structure the experience with strong visual clarity, interaction flow, and product thinking so it feels intuitive and premium.",
    },
    {
      step: "03",
      title: "Build with the right solution approach",
      description:
        "We choose a practical execution path based on the project requirement, ensuring the product remains reliable, scalable, and easy to use.",
    },
    {
      step: "04",
      title: "Refine and deliver",
      description:
        "After testing and iteration, we finalize the product for launch with a reliable, business-ready, and maintainable delivery standard.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen py-6 md:py-8 overflow-hidden">
      <SectionBg />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[26px] border border-border/60"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1600&q=80"
              alt="Luminexa Technologies"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 to-black/70" />
          <div className="absolute inset-0 ring-1 ring-white/10 rounded-[26px]" />

          <div className="relative z-10 px-5 py-6 sm:px-7 md:px-8 md:py-8 lg:px-10 lg:py-10 min-h-[290px] sm:min-h-[340px] md:min-h-[420px] flex flex-col justify-end">
            <div className="max-w-3xl">
              <Badge className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur">
                About Luminexa
              </Badge>

              <h1 className="mt-3 text-[24px] leading-tight sm:text-[34px] md:text-[46px] lg:text-[58px] font-semibold tracking-[-0.04em] text-white">
                Engineering Digital Experiences That Feel Modern, Fast, and
                Human
              </h1>

              <p className="mt-3 max-w-2xl text-[12px] sm:text-[13px] md:text-[14px] leading-6 text-white/82">
                Luminexa Technologies is a product and solutions company focused
                on building experience-first platforms using immersive,
                intelligent, and modern digital systems.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild className="rounded-full px-5 h-9 text-[12px]">
                  <Link href="/contact-us">
                    Get in Touch
                    <ArrowUpRight className="size-4 ml-2" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-5 h-9 text-[12px] border-white/15 bg-white/5 text-white hover:bg-white/10"
                >
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats + highlights */}
        <section className="mt-4 grid grid-cols-1 lg:grid-cols-[.9fr_1.1fr] gap-3 sm:gap-4">
          <div className="rounded-[18px] sm:rounded-[22px] border border-border/60 bg-background/70 px-3 py-3 sm:px-5 sm:py-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {stats.map((stat, index) => (
                <div key={`${stat.label}-${index}`}>
                  <div className="text-[15px] sm:text-[22px] md:text-[26px] font-semibold tracking-tight text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[18px] sm:rounded-[22px] border border-border/60 bg-background/70 px-3 py-3 sm:px-5 sm:py-4 flex flex-wrap gap-2">
            {highlights.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="rounded-full border border-border bg-muted/20 px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Overview */}
        <section className="mt-8 grid grid-cols-1 xl:grid-cols-[1.2fr_.8fr] gap-7 xl:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel icon={Layers}>Overview</SectionLabel>
            <h2 className="mt-3 text-[22px] sm:text-[28px] md:text-[36px] font-semibold tracking-tight text-foreground">
              Building immersive, intelligent, and scalable digital systems.
            </h2>

            <div className="mt-4 space-y-3 text-[12px] sm:text-[13px] md:text-[14px] leading-6 text-muted-foreground">
              <p>
                We help brands, startups, and enterprises move beyond static
                content by transforming ideas into interactive, intelligent, and
                experience-driven digital solutions.
              </p>
              <p>
                Our work combines product thinking, engineering structure,
                visual refinement, and emerging technologies to build systems
                that are not only functional, but also premium in experience.
              </p>
              <p>
                From immersive solutions and AI-powered workflows to scalable
                applications and modern interface systems, we focus on creating
                technology that delivers real business value with better
                usability and presentation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="xl:border-l border-border/70 xl:pl-8"
          >
            <SectionLabel icon={Sparkles}>Highlights</SectionLabel>

            <div className="mt-4 space-y-3">
              {[
                "Experience-first development approach.",
                "Strong blend of immersive, intelligent, and web-based systems.",
                "Structured builds with scalable architecture.",
                "Focused on both polished design and business value.",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-primary mt-1 shrink-0" />
                  <span className="text-[12px] sm:text-[13px] md:text-[14px] leading-6 text-muted-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Mission + Vision */}
        <section className="mt-12 space-y-10">
          <div>
            <SectionLabel icon={Rocket}>Mission & Vision</SectionLabel>
            <h2 className="mt-3 text-[22px] sm:text-[28px] md:text-[36px] font-semibold tracking-tight text-foreground">
              Direction with purpose.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <InfoCard
              icon={Globe}
              title="Our Mission"
              desc="To simplify complex ideas through intuitive digital experiences that improve clarity, engagement, and decision-making for businesses and users."
            />
            <InfoCard
              icon={Rocket}
              title="Our Vision"
              desc="To shape a future where immersive technologies and intelligent systems become a natural extension of how people learn, explore, and interact."
            />
          </div>
        </section>

        {/* Capabilities */}
        <section className="mt-12 space-y-10">
          <div>
            <SectionLabel icon={ShieldCheck}>Capabilities</SectionLabel>
            <h2 className="mt-3 text-[22px] sm:text-[28px] md:text-[36px] font-semibold tracking-tight text-foreground">
              What we build.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            {capabilities.map((item, index) => (
              <ValueCard
                key={index}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mt-12">
          <div className="grid grid-cols-1 xl:grid-cols-[0.8fr_1.2fr] gap-8 sm:gap-10 xl:gap-12 items-start">
            <div>
              <SectionLabel icon={Rocket}>Process</SectionLabel>
              <h2 className="mt-3 text-[22px] sm:text-[28px] md:text-[36px] font-semibold tracking-tight text-foreground">
                How we approach delivery.
              </h2>

              <p className="mt-4 max-w-xl text-[12px] sm:text-[13px] md:text-[14px] leading-6 text-muted-foreground">
                Every project follows a clear execution flow from understanding
                the requirement to delivering a polished, reliable, and
                business-ready product.
              </p>
            </div>

            <div className="rounded-[20px] sm:rounded-[24px] border border-border/60 bg-background/70 p-4 sm:p-6 md:p-7">
              {workflow.map((step, index) => (
                <ProcessLine
                  key={index}
                  step={step}
                  last={index === workflow.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mt-12 space-y-6">
          <div>
            <SectionLabel icon={Sparkles}>Values</SectionLabel>
            <h2 className="mt-3 text-[22px] sm:text-[28px] md:text-[36px] font-semibold tracking-tight text-foreground">
              What defines us.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {values.map((item, index) => (
              <ValueCard
                key={index}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="mt-12">
          <div className="rounded-[20px] sm:rounded-[24px] border border-border/60 bg-muted/20 px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8">
            <SectionLabel icon={Quote}>About our approach</SectionLabel>
            <p className="mt-4 max-w-5xl text-[16px] sm:text-[22px] md:text-[30px] leading-[1.4] tracking-tight text-foreground">
              “We believe good technology should not only function well, but
              also feel natural, refined, and valuable for the people who use
              it.”
            </p>
            <div className="mt-5">
              <div className="text-[13px] font-medium text-foreground">
                Luminexa Technologies
              </div>
              <div className="text-[10px] sm:text-[12px] uppercase tracking-[0.14em] text-muted-foreground mt-1">
                Immersive • Intelligent • Digital Solutions
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 mb-6">
          <div className="relative overflow-hidden rounded-[20px] sm:rounded-[26px] border border-border/60 bg-foreground text-background">
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

            <div className="relative z-10 px-4 py-6 sm:px-6 md:px-8 md:py-9 text-center">
              <p className="text-[10px] sm:text-[12px] uppercase tracking-[0.18em] text-background/70">
                Let’s build what’s next
              </p>

              <h2 className="mt-3 text-[22px] sm:text-[28px] md:text-[38px] font-semibold tracking-tight text-background">
                Create better digital products with Luminexa
              </h2>

              <p className="mx-auto mt-3 max-w-3xl text-[12px] sm:text-[13px] md:text-[14px] leading-6 text-background/75">
                From immersive solutions to intelligent automation and scalable
                digital platforms, we’re ready to turn your vision into a
                polished and working reality.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                <Button
                  asChild
                  variant="secondary"
                  className="rounded-full px-5 w-full sm:w-auto"
                >
                  <Link href="/contact-us">Get in Touch</Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-5 border-background/20 bg-transparent text-background hover:bg-background/10 w-full sm:w-auto"
                >
                  <Link href="/services">Explore Capabilities</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutPage;