"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Rocket,
  Sparkles,
  Hammer,
  Handshake,
  Laptop2,
  ArrowRight,
} from "lucide-react";

const AboutPage = () => {
  // Reusable FancyText component for uniform styling


  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-background text-foreground">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl text-center"
      >
        <h2 className="text-4xl font-bold">
          Who We Are
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
       At Luminexa Technologies, we craft scalable, innovative solutions blending AR, AI, and web technologies to redefine business experiences.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mt-12 w-full max-w-5xl">
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Globe className="size-8 text-primary mb-4" />
            <h3 className="text-2xl font-semibold">
          Our Mission
            </h3>
            <p className="text-muted-foreground mt-2">
              Empower businesses with cutting-edge technology and seamless digital experiences
              
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Rocket className="size-8 text-primary mb-4" />
            <h3 className="text-2xl font-semibold">
             Our Vision
            </h3>
            <p className="text-muted-foreground mt-2">
             To create a future where businesses thrive through innovation and efficiency.
              
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core Values */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 w-full max-w-5xl">
        {[
          {
            title: "Innovation",
            description: "We embrace creativity to drive progress.",
            icon: <Sparkles className="size-8 text-primary mb-4" />,
          },
          {
            title: "Quality",
            description: "Delivering excellence through precision and performance.",
            icon: <Hammer className="size-8 text-primary mb-4" />,
          },
          {
            title: "Collaboration",
            description: "Strong partnerships lead to exceptional results.",
            icon: <Handshake className="size-8 text-primary mb-4" />,
          },
        ].map((value, index) => (
          <Card key={index}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              {value.icon}
              <h3 className="text-xl font-semibold">
                {value.title}
              </h3>
              <p className="text-muted-foreground mt-2">
                {value.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      

      {/* Call-to-Action */}
      <div className="flex flex-col items-center mt-16">
        <h3 className="text-3xl font-bold">
          Let's Build Together
        </h3>
        <p className="text-muted-foreground mt-2">
          Partner with us to bring your ideas to life.
        </p>
        <Button className="mt-6 rounded-full px-8 py-5 text-lg group">
       Get in Touch
          <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-all duration-300" />
        </Button>
      </div>
    </section>
  );
};

export default AboutPage;