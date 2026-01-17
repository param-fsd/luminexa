"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { ChevronRight } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */
const steps = [
  {
    title: "Project goals and objectives",
    description: "Define the purpose of the project and what success looks like",
  },
  {
    title: "Major milestones",
    description: "Represent meaningful checkpoints that signal progress",
  },
  {
    title: "Timeline",
    description: "Provides a high-level view of when milestones are expected",
  },
  {
    title: "Phases or stages",
    description: "Break the project into manageable sections from start to finish",
  },
  {
    title: "Key deliverables",
    description: "Outline the tangible outcomes produced at each stage",
  },
  {
    title: "Dependencies and risks",
    description: "Highlight factors that influence sequencing and potential delays",
  },
];

/* -------------------------------------------------------------------------- */
/*  Motion                                                                     */
/* -------------------------------------------------------------------------- */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/* -------------------------------------------------------------------------- */
/*  Step Card                                                                  */
/* -------------------------------------------------------------------------- */
function StepCard({ index, title, description }) {
  const stepNo = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      variants={item}
      className="group relative w-full overflow-hidden rounded-2xl border border-border bg-background/70 backdrop-blur"
    >
      {/* subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative flex items-stretch">
        {/* Left step block */}
        <div className="min-w-[120px] sm:min-w-[140px] border-r border-border bg-muted/20 px-4 py-5">
          <div className="text-[11px] text-muted-foreground tracking-wide">
            Step
          </div>
          <div className="mt-1 text-3xl sm:text-4xl font-semibold text-foreground">
            {stepNo}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-5 py-5">
          <div className="text-[14px] sm:text-[15px] font-semibold text-foreground leading-snug">
            {title}
          </div>
          <p className="mt-1 text-[12px] sm:text-[13px] text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Right Arrow */}
        <div className="flex items-center pr-4">
          <div className="h-10 w-10 rounded-full border border-border bg-muted/20 flex items-center justify-center transition group-hover:bg-muted/30">
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* small light accent strip */}
      <div className="absolute left-0 top-0 h-full w-1 bg-muted/40" />
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */
export default function WorkingSection() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-muted/30 overflow-hidden">
      {/* light background (global tokens) */}
      <div className="absolute inset-0 -z-10 bg-background" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-muted/40 blur-3xl -z-10" />
      <div className="absolute -bottom-28 -right-24 h-[520px] w-[520px] rounded-full bg-muted/40 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header (flex-start) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <Badge variant="secondary" className="rounded-full px-4 py-1">
            How It Works
          </Badge>

          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
            From Idea to Execution
          </h2>

          <p className="mt-3 text-[13px] sm:text-[14px] text-muted-foreground leading-relaxed">
            A clean step-by-step workflow that keeps delivery predictable,
            measurable, and fast — from discovery to launch and beyond.
          </p>
        </motion.div>

        {/* 2-column layout like reference image */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {steps.map((s, i) => (
            <StepCard
              key={i}
              index={i}
              title={s.title}
              description={s.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}


