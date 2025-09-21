"use client";

import React from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import features from "@/data/feature.data";

// Define Framer Motion variants for container and items
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger children animations
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const FeatureSection = () => {
  return (
    <section id="features" className="w-full py-20 md:py-32 bg-background">
      <div className="px-4 md:px-6 max-w-6xl mx-auto">
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
            Why Luminexa
          </Badge>
          <h2 className="text-2xl md:text-3xl font-semibold">The Luminexa Difference</h2>
         <p className="max-w-[800px] text-muted-foreground md:text-lg">
            We're your creative partner, blending innovation, design, and strategy to transform your vision into impactful digital experiences, helping businesses engage and succeed.
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
              <Card className="h-full flex flex-col justify-between p-6 border border-gray-200 shadow-md">
                <CardContent className="flex flex-col items-center text-center space-y-4 h-full">
                  <div className="text-primary bg-muted rounded-full p-4">
                    <feature.icon className="size-8" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground flex-1">{feature.description}</p>
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