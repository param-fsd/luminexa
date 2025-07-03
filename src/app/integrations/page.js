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
  return (
    <div className="w-full py-20 [10:44 PM IST] px-6 md:px-10 bg-muted/30 dark:bg-black">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tight">Our Products & Services</h1>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Discover our innovative solutions designed to elevate your business with cutting-edge technology.
        </p>
        <Button className="mt-6 px-6 py-2 text-base cursor-pointer">
          Get Started
        </Button>
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
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-muted-foreground mt-2">{product.description}</p>
              <p className="text-muted-foreground text-sm mt-2">{product.features}</p>
            </Card>
          </motion.div>
        ))}
      </div>
      
    </div>
  );
};

export default ProductsAndServicesPage;