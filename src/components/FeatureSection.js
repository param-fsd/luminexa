
"use client";

import React from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import features from "@/data/feature.data";

const FeatureSection = ({ container, item }) => {
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
    <section id="features" className="w-full py-20 md:py-32">
      <div className="px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            <FancyText text="Why Luminexa" className="text-sm" />
          </Badge>
          <h2 className="text-3xl md:text-4xl tracking-tight">
            <FancyText text="The Luminexa Difference" className="" />
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            <FancyText
              text="We're your creative partner, blending innovation, design, and strategy to transform your vision into impactful digital experiences, helping businesses engage and succeed."
              className="md:text-lg"
            />
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={item}>
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl mb-2">
                    <FancyText text={feature.title} className="font-bold" />
                  </h3>
                  <p className="text-muted-foreground">
                    <FancyText text={feature.description} className="text-base" />
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
