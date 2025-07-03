
import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full py-20 overflow-hidden">
      <div className="px-4 md:px-6 relative py-5">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge
            className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium ml-4"
            variant="secondary"
          >
            AR
          </Badge>
          <Badge
            className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium ml-4"
            variant="secondary"
          >
            Custom WebApps
          </Badge>
          <Badge
            className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium ml-4"
            variant="secondary"
          >
           360 Virtual Tour
          </Badge>
          <Badge
            className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium ml-4"
            variant="secondary"
          >
            Ai
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Experience the Future Built by Luminexa
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Luminexa helps you collaborate, automate, and scale — with powerful AR, AI, and custom apps built for results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full h-12 px-8 text-base cursor-pointer group"
            >
              Why nex?
              <ArrowRight className="group-hover:translate-x-1 transition-all ease-in-out duration-200 size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-12 px-8 text-base cursor-pointer"
            >
              Book a Demo
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>Custom-Built for Your Brand</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>End-to-End Solutions</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>Scalable Across All Platforms</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
            <video
              src="https://cdn.glitch.global/62dd5357-cabd-4363-bf7a-61c739629aa4/Untitled%20video%20-%20Made%20with%20Clipchamp%20(18).mp4?v=1751383115509"
              width={1280}
              height={720}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
          <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;