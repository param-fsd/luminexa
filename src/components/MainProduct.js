"use client";

import React from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";

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

const MainProduct = () => {
  return (
    <section className="w-full py-20 md:py-32 flex flex-col md:flex-row items-start justify-between max-w-6xl mx-auto px-4 md:px-6">
      {/* Main Content */}
      <div className="w-full md:w-2/3 space-y-8">
        <div className="text-center md:text-left">
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium text-white"
            variant="secondary"
          >
            Visualization
          </Badge>
          <h2 className="text-3xl md:text-4xl text-white mt-4">
            Transforming <strong>Real Estate</strong> <br /> <i>with Cutting-Edge Visualization</i>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            We provide interactive and immersive visualization solutions for real estate, helping clients explore properties in detail and make informed decisions quickly.
          </p>
        </div>

        {/* Feature List - Inline with Icons, Equal Padding, Improved Arrangement */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 md:gap-4 justify-center md:justify-start"
        >
          {[
            {
              icon: (
                <svg
                  className="w-8 h-8 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447-2.724A1 1 0 0021 13.382V2.618a1 1 0 00-1.447-.894L15 4m-6 0l6-3"
                  />
                </svg>
              ),
              title: "Image Mapping",
              description: "Tap on any plot to instantly view complete details including dimensions, pricing, and availability.",
            },
            {
              icon: (
                <svg
                  className="w-8 h-8 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5.5 5.5m10.5-1.5V4m0 0h-4m4 0l-5.5 5.5m-5.5 5.5l-5.5 5.5m0 0v-4m0 4h4m12-4l5.5-5.5m-5.5 5.5v4m0-4h-4"
                  />
                </svg>
              ),
              title: "360° Virtual Tours",
              description: "Immersive aerial walkthroughs that showcase the property and its surroundings remotely.",
            },
            {
              icon: (
                <svg
                  className="w-8 h-8 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              ),
              title: "3D Rendered Models",
              description: "Realistic 3D models of properties for detailed exploration and future project previews.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex flex-col items-center space-y-2 p-4"
            >
              {feature.icon}
              <div className="flex flex-col items-center space-y-1">
                <span className="text-muted-foreground font-bold">{feature.title}</span>
                <span className="text-muted-foreground text-center text-sm">
                  {feature.description}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Button
          asChild
          size="lg"
          variant="secondary"
          className="rounded-full h-12 px-8 text-black bg-white cursor-pointer group hover:text-white"
          aria-label="Explore Visualization Solutions"
        >
          <Link href="/services/nexnet">Explore Visualization Solutions →</Link>
        </Button>
      </div>

      {/* Sidebar Content */}
      <div className="w-full md:w-1/3 mt-12 md:mt-9 md:pl-8">
        <Card className="border-none shadow-lg rounded-lg p-6">
          <CardContent className="space-y-4 text-center p-6">
            <div className="flex space-x-1 justify-center">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            </div>
            <p className="text-gray-400">
              Our real estate visualization solutions help buyers, investors, and developers explore properties in a detailed, interactive, and engaging way.
            </p>
            <p className="text-white font-semibold">
              Experience the future of real estate visualization
            </p>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex flex-col items-center space-y-1">
                <span className="text-white font-bold">AI Integration</span>
                <span className="text-gray-300 text-sm">
                  Leverage AI to analyze property data and provide personalized visualization insights.
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MainProduct;