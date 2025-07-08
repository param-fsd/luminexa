import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
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
    <section className="w-full py-20 overflow-hidden">
      <div className="px-4 md:px-6 relative py-5">
        <motion.div
          className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-primary/10 via-secondary/10 to-background/50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] shadow-[0_10px_20px_rgba(0,0,0,0.1),0_6px_6px_rgba(0,0,0,0.05)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.2 }}
        >
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
        </motion.div>
        <style>
          {`
            @keyframes float {
              0% {
                transform: translateX(0) translateY(0);
                opacity: 0.6;
              }
              50% {
                transform: translateX(20px) translateY(-10px);
                opacity: 0.8;
              }
              100% {
                transform: translateX(0) translateY(0);
                opacity: 0.6;
              }
            }
            .cloud {
              position: absolute;
              background: rgba(255, 255, 255, 0.2);
              border-radius: 50%;
              filter: blur(20px);
              animation: float 25s ease-in-out infinite;
            }
            .cloud-1 {
              width: 200px;
              height: 60px;
              top: 10%;
              left: 10%;
              animation-delay: 0s;
            }
            .cloud-2 {
              width: 250px;
              height: 80px;
              top: 30%;
              right: 15%;
              animation-delay: 5s;
            }
            .cloud-3 {
              width: 150px;
              height: 50px;
              bottom: 20%;
              left: 25%;
              animation-delay: 10s;
            }
            @media (prefers-color-scheme: dark) {
              .cloud {
                background: rgba(255, 255, 255, 0.1);
              }
            }
          `}
        </style>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Badge
              className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
              variant="secondary"
            >
              <FancyText text="AR" className="text-sm" />
            </Badge>
            <Badge
              className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
              variant="secondary"
            >
              <FancyText text="Custom WebApps" className="text-sm" />
            </Badge>
            <Badge
              className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
              variant="secondary"
            >
              <FancyText text="360 Virtual Tour" className="text-sm" />
            </Badge>
            <Badge
              className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
              variant="secondary"
            >
              <FancyText text="AI" className="text-sm" />
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            <FancyText text="Experience the Future Built by Luminexa" className="" />
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            <FancyText
              text="Luminexa helps you collaborate, automate, and scale — with powerful AR, AI, and custom apps built for results."
              className="text-lg md:text-xl"
            />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full h-12 px-8 text-base cursor-pointer group"
            >
              <FancyText text="Why nex?" className="text-base" />
              <ArrowRight className="group-hover:translate-x-1 transition-all ease-in-out duration-200 size-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-12 px-8 text-base cursor-pointer"
            >
              <FancyText text="Book a Demo" className="text-base" />
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <FancyText text="Custom-Built for Your Brand" className="text-sm" />
            </div>
            <div className=" cover items-center gap-1">
              <Check className="size-4 text-primary" />
              <FancyText text="End-to-End Solutions" className="text-sm" />
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <FancyText text="Scalable Across All Platforms" className="text-sm" />
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