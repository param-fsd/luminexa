"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Smartphone, Globe, ImagePlay, Camera } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";

const features = [
  {
    icon: <Smartphone className="w-8 h-8 text-white" />,
    title: "Immersive AR",
    desc: "Transform ordinary visuals into extraordinary interactive experiences with augmented reality."
  },
  {
    icon: <Globe className="w-8 h-8 text-white" />,
    title: "WebAR",
    desc: "No app required — experience AR directly in your mobile browser."
  },
  {
    icon: <ImagePlay className="w-8 h-8 text-white" />,
    title: "Interactive Motion Graphics",
    desc: "Engage with dynamic and interactive motion graphics like never before."
  },
  {
    icon: <Camera className="w-8 h-8 text-white" />,
    title: "AR Product Demos",
    desc: "Visualize products in real-world environments before making a decision."
  }
];

const NexAr = () => {
  return (
    <section className="w-full py-20 md:py-32 flex flex-col items-center max-w-6xl mx-auto px-4 md:px-6">
      {/* Image without hover effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        className="mb-12"
      >
      </motion.div>

      <div className="w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium text-white"
            variant="secondary"
          >
            Augmented Reality
          </Badge>
         
          <h2 className="text-3xl md:text-4xl text-white mt-4">
            Elevate <strong>Experiences</strong>  <br/><i>with  nexAR</i>
          </h2>
          <p className="text-muted-foreground max-w-lg">
            We craft AR solutions that bridge the gap between digital and physical worlds,
            enabling brands, educators, and businesses to deliver interactive experiences
            that truly engage audiences.
          </p>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full h-12 px-8 text-black bg-white hover:bg-[#86B0FF] hover:text-white transition"
            aria-label="Explore AR Solutions"
          >
            <Link href="/services/nexar">Explore AR Solutions →</Link>
          </Button>
        </motion.div>

        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {features.map((f, i) => (
            <Card
              key={i}
              className="shadow-lg hover:shadow-xl hover:border-[#86B0FF] transition rounded-2xl"
            >
              <CardContent className="p-4 space-y-1">
                {f.icon}
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NexAr;