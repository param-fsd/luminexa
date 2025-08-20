import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import SplitText from "./animations/SpltText";
import Prism from "./animations/Prism";

const HeroSection = () => {
  return (
    <section className="w-full py-20 overflow-hidden">
      <div className="px-4 md:px-6 relative py-5">
        <div style={{ width: '100%', height: '600px', position: "absolute", zIndex: '-10'}}>
  <Prism
    animationType="3drotate"
    timeScale={0.5}
    height={3.5}
    baseWidth={5.5}
    scale={2}
    hueShift={0}
    colorFrequency={1}
    noise={0.5}
    glow={1}
  />
</div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-5xl mx-auto mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Badge
              className="mb-2 rounded-full px-4 py-1 text-sm font-medium"
              variant="secondary"
            >
              <span className="text-sm">AR</span>
            </Badge>
            <Badge
              className="mb-2 rounded-full px-4 py-1 text-sm font-medium"
              variant="secondary"
            >
              <span className="text-sm">Custom WebApps</span>
            </Badge>
            <Badge
              className="mb-2 rounded-full px-4 py-1 text-sm font-medium"
              variant="secondary"
            >
              <span className="text-sm">360 Virtual Tour</span>
            </Badge>
            <Badge
              className="mb-2 rounded-full px-4 py-1 text-sm font-medium"
              variant="secondary"
            >
              <span className="text-sm">AI</span>
            </Badge>
            <Badge
              className="mb-2 rounded-full px-4 py-1 text-sm font-medium"
              variant="secondary"
            >
              <span className="text-sm">Image Mapping</span>
            </Badge>
          </div>
          <SplitText
            text="Experience the Future Built by Luminexa"
            className="text-5xl md:text-6xl lg:text-7xl tracking-normal mb-6 bg-clip-text bg-gradient-to-r from-foreground to-foreground/70 font-bold w-full"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-100px"
            textAlign="center"
          />
          <p className="text-sm md:text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
            Luminexa helps you collaborate, automate, and scale — with powerful AR, AI, and custom apps built for results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="sm"
              className="rounded-full h-12 px-8 text-base cursor-pointer group"
            >
              <span className="text-base">Why <strong>nex?</strong></span>
              <ArrowRight className="group-hover:translate-x-1 transition-all ease-in-out duration-200 size-4 ml-2" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="rounded-full h-12 px-8 text-base cursor-pointer"
            >
              <span className="text-base">Book a Demo</span>
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span className="text-sm">Custom-Built for Your Brand</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span className="text-sm">End-to-End Solutions</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span className="text-sm">Scalable Across All Platforms</span>
            </div>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default HeroSection;