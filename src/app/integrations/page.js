
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Globe, Map, Cpu } from "lucide-react";

const productsAndServices = [
  {
    name: "nexAR",
    description: "Advanced augmented reality solutions for immersive experiences.",
    features: "Enables immersive augmented reality experiences through advanced image tracking, tap-to-place functionality, and multi-image tracking capabilities.",
    icon: Camera,
  },
  {
    name: "nexNet",
    description: "Robust networking and custom web application development.",
    features: "Provides robust networking solutions with seamless image mapping, custom web and app development, and comprehensive frontend and backend support.",
    icon: Globe,
  },
  {
    name: "nex3D",
    description: "Cutting-edge 3D visualization and virtual tour creation.",
    features: "Delivers cutting-edge 3D visualization through drone-based virtual tours, 3D rendered tours, immersive walkthroughs, and high-quality still view renders.",
    icon: Map,
  },
  {
    name: "nexAI",
    description: "AI-powered solutions for web, 3D, and creative applications.",
    features: "Empowers web and 3D applications with AI-driven integrations, custom solutions, and creative graphic design and animation capabilities.",
    icon: Cpu,
  },
];

const ProductsAndServicesPage = () => {
  // Define a reusable text styling component for uniform fancy text
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

  // Scrolling text with uniform styling
  const scrollText = (
    <FancyText
      text="Innovate Transform Succeed Empower Create Excel Advance Inspire Lead"
      className="text-4xl mx-2"
    />
  );

  return (
    <div className="w-full py-20 px-6 md:px-10 bg-muted/30 dark:bg-black">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl tracking-tight">
          <FancyText text="Our Products and Services" className="" />
        </h1>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          <FancyText
            text="Discover our innovative solutions designed to elevate your business with cutting-edge technology."
            className="text-base"
          />
        </p>
        
      </motion.div>

      {/* Products and Services Section */}
      <div className="grid gap-6 lg:grid-cols-4">
        {productsAndServices.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 flex flex-col items-center text-center bg-background dark:bg-muted/10">
              <product.icon className="size-12 text-primary mb-4" />
              <h3 className="text-xl">
                <FancyText text={product.name} className="font-semibold" />
              </h3>
              <p className="text-muted-foreground mt-2">
                <FancyText text={product.description} className="text-base" />
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                <FancyText text={product.features} className="text-sm" />
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Horizontal Scrolling Text Sections */}
      <div className="mt-16 space-y-4 flex flex-col items-center justify-center">
        {/* Left Scrolling Text */}
        <div className="overflow-hidden w-full">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              },
            }}
            className="whitespace-nowrap text-center inline-block"
          >
            {scrollText}
            {scrollText}
          </motion.div>
        </div>

        {/* Right Scrolling Text */}
        <div className="overflow-hidden w-full">
          <motion.div
            animate={{
              x: ["-50%", "0%"],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              },
            }}
            className="whitespace-nowrap text-center inline-block"
          >
            {scrollText}
            {scrollText}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductsAndServicesPage;
