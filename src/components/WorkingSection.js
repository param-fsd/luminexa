"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

const WorkingSection = () => {
  // Reusable FancyText component for uniform styling
  const FancyText = ({ text, className }) => {
    const words = text.split(" ");
    return (
      <>
        {words.map((word, index) => (
          <span
            key={index}
            className={`${
              index % 3 === 0
                ? "font-bold"
                : index % 3 === 1
                ? "italic font-light"
                : "font-medium"
            } ${className}`}
          >
            {word}{" "}
          </span>
        ))}
      </>
    );
  };

  return (
    <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            <FancyText text="How It Works" className="text-sm" />
          </Badge>
          <h2 className="text-3xl md:text-4xl tracking-tight">
            <FancyText text="From Idea to Immersive Reality" className="" />
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            <FancyText
              text="Our streamlined process transforms your creative ideas into high-impact, interactive digital experiences — built for engagement, innovation, and results."
              className="md:text-lg"
            />
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
            <div
              className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-border"
            ></div>
          </div>

          {[
            {
              step: "01",
              title: "Share Your Vision",
              description:
                "Bring us your concept, challenge, or goal — whether it's to engage users, tell a story, or elevate your brand.",
            },
            {
              step: "02",
              title: "We Craft the Experience",
              description:
                "Our team designs and builds interactive experiences tailored to your audience and objectives.",
            },
            {
              step: "03",
              title: "Launch & Lead",
              description:
                "Go live with confidence — backed by performance insights, seamless support, and future-ready flexibility.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center space-y-4"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                <FancyText text={step.step} className="text-xl font-bold" />
              </div>
              <h3 className="text-xl">
                <FancyText text={step.title} className="font-bold" />
              </h3>
              <p className="text-muted-foreground">
                <FancyText text={step.description} className="text-base" />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingSection;