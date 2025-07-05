
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
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
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 dark:from-gray-100 dark:to-gray-500 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

      <div className="px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight">
            <FancyText text="Let's Bring Your Ideas to Life" className="font-bold" />
          </h2>
          <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
            <FancyText
              text="Whether you're launching a campaign, building an immersive experience, or reimagining your digital presence — we're here to help you create something unforgettable."
              className="md:text-xl"
            />
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full h-12 px-8 text-base cursor-pointer group"
            >
              <FancyText text="Get Started with Luminexa" className="text-base" />
              <ArrowRight
                className="group-hover:translate-x-1 transition-all ease-in-out duration-200 size-4 ml-2"
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:text-white hover:bg-white/10 cursor-pointer dark:text-neutral-700 dark:bg-white dark:hover:bg-gray-100"
            >
              <FancyText text="Book a Creative Demo" className="text-base" />
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/80 mt-4">
            <FancyText
              text="No obligation. Just ideas, inspiration, and what's possible for your brand."
              className="text-sm"
            />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
