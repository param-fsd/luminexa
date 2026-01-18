"use client";

import React from "react";
import { useParams } from "next/navigation";
import { jobs } from "@/data/careerData";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  ArrowLeft,
  MapPin,
  Briefcase,
  Clock,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CareerDetails = () => {
  const { slug } = useParams();
  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Job not found</p>
      </div>
    );
  }

  return (
    <section className="relative w-full min-h-screen py-24 md:py-32 overflow-hidden">
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.18) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* soft glows */}
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-secondary/15 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* ================= BREADCRUMB ================= */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-[12px] text-muted-foreground flex items-center gap-2"
        >
          <Link href="/careers" className="hover:underline flex items-center gap-1">
            Careers
          </Link>
          <span>›</span>
          <span className="text-foreground font-medium">{job.title}</span>
        </motion.div>

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="flex items-center gap-2 mb-4">
            <Badge className="rounded-full px-4 py-1">Careers</Badge>
            <span className="text-[11px] text-muted-foreground flex items-center gap-1">
              <Sparkles className="size-3.5 text-primary" />
              Join our growing team
            </span>
          </div>

          <h1 className="text-[30px] sm:text-[36px] md:text-[42px] font-bold tracking-tight text-foreground">
            {job.title}
          </h1>

          <p className="mt-3 text-[14px] text-muted-foreground max-w-xl">
            Be part of Luminexa’s mission to build immersive, future-ready digital
            experiences.
          </p>
        </motion.div>

        {/* ================= CONTENT GRID ================= */}
        <div className="grid gap-10 lg:grid-cols-[2.7fr_1.3fr]">
          {/* ================= JOB DESCRIPTION ================= */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-sm md:prose-base dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: job.fullDescription }}
          />

          {/* ================= SIDEBAR ================= */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-fit rounded-2xl border border-border bg-background/60 backdrop-blur p-6"
          >
            {/* hover glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 to-secondary/10" />

            <div className="relative">
              <h3 className="text-sm font-semibold mb-5">Job Overview</h3>

              <div className="space-y-4 text-[12px] text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Briefcase className="size-4 text-primary" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-primary" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-primary" />
                  <span>{job.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="size-4 text-primary" />
                  <span>Posted: September 2025</span>
                </div>

                <Badge className="mt-4 w-fit">Open Position</Badge>
              </div>

              <Button className="mt-6 w-full rounded-xl">
                Apply Now
              </Button>
            </div>
          </motion.aside>
        </div>

        {/* ================= NEWSLETTER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 max-w-4xl mx-auto rounded-2xl border border-border bg-background/60 backdrop-blur p-8 text-center"
        >
          <Mail className="size-8 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-semibold">
            Stay Updated with Career Openings
          </h3>
          <p className="text-[13px] text-muted-foreground mt-2 mb-5">
            Get notified when new roles open at Luminexa.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="sm:w-80"
            />
            <Button className="rounded-xl">Subscribe</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerDetails;
