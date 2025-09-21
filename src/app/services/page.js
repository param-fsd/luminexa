"use client";

import React, { useRef, useEffect, useState, memo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { gsap } from "gsap";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Cpu, Globe, Map } from "lucide-react";
import Link from "next/link";
import services from "@/data/serviceData";

const MOBILE_BREAKPOINT = 768;

const iconMap = { Camera, Cpu, Globe, Map };

const ParticleCard = memo(({
  children,
  className = '',
  disableAnimations = false,
  style,
  clickEffect = true,
  service
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleClick = e => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8, // Slightly faster for smoother feel
          ease: 'power3.out',
          onComplete: () => ripple.remove()
        }
      );
    };

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, [disableAnimations, clickEffect]);

  return (
    <div
      ref={cardRef}
      className={`${className} particle-container rounded-xl shadow-2xl w-full`}
      style={{ ...style, position: 'relative', overflow: 'hidden' }}
      role="article"
      aria-label={`Service card for ${service.title}`}
    >
      {children}
    </div>
  );
});

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

const ProductsAndServicesPage = () => {
  const scrollContainerRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const isMobile = useMobileDetection();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handleChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div id="services" className="w-full py-20 bg-muted/30 dark:bg-black">
      <div className="px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <Badge
            className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            Services
          </Badge>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Business Innovation Solutions
          </h1>
          <p className="text-muted-foreground mt-3 max-w-[800px] mx-auto text-base md:text-lg">
            Discover our innovative solutions designed to elevate your business with cutting-edge technology.
          </p>
        </motion.div>

        <div
          ref={scrollContainerRef}
          className="relative flex flex-col items-center min-h-[80vh] py-20 snap-y snap-mandatory overflow-y-auto"
          style={{ scrollBehavior: 'smooth', scrollSnapStop: 'always' }}
        >
          {services.map((service, index) => {
            const cardProgress = useTransform(
              scrollYProgress,
              [index / services.length, (index + 1) / services.length],
              [0, 1]
            );
            const scale = useSpring(useTransform(cardProgress, [0, 0.5, 1], [0.9, 1, 0.9]), {
              stiffness: 150, // Increased for snappier response
              damping: 25,  // Adjusted for smoother settling
              mass: 0.4,    // Lighter mass for quicker animation
            });
            const opacity = useSpring(useTransform(cardProgress, [0, 0.5, 1], [0.7, 1, 0.7]), {
              stiffness: 150,
              damping: 25,
              mass: 0.4,
            });
            const y = useSpring(useTransform(cardProgress, [0, 0.5, 1], [60, 0, -60]), {
              stiffness: 150,
              damping: 25,
              mass: 0.4,
            });

            const IconComponent = iconMap[service.icon] || Camera;

            return (
              <motion.div
                key={service.title}
                style={{
                  scale: reducedMotion || isMobile ? 1 : scale,
                  opacity: reducedMotion || isMobile ? 1 : opacity,
                  y: reducedMotion || isMobile ? 0 : y,
                  zIndex: services.length - index,
                  marginTop: index > 0 ? '20px' : '0', // Reduced overlap for smoother stacking
                }}
                className="w-full snap-start"
              >
                <ParticleCard
                  className="card p-8 md:p-10"
                  style={{ backgroundColor: service.color }}
                  disableAnimations={isMobile || reducedMotion}
                  clickEffect={true}
                  service={service}
                >
                  <div className="flex flex-col p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <IconComponent className="size-16 text-primary mr-4" aria-hidden="true" />
                      <div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-white">{service.title}</h3>
                        <div className="card__label text-sm text-primary font-medium">{service.label}</div>
                      </div>
                    </div>
                    <p className="text-2xl md:text-3xl font-semibold mb-4">{service.description}</p>
                    <p className="text-muted-foreground text-base md:text-sm mb-6 ">{service.applications}</p>
                    <Button asChild className="mt-auto self-end" variant="outline">
                      <Link href={`/services/${service.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </ParticleCard>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-12 mb-10 px-4 md:px-6"
        >
          <div className="flex flex-col md:flex-row md:items-start md:gap-8">
            <div className="flex-1 text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Proven Results, Trusted by Innovators
              </h2>
              <p className="text-muted-foreground text-base mb-6 max-w-[600px]">
                Our innovative solutions deliver measurable results, empowering businesses to dominate their industries. <br />
                Partner with us to unlock unparalleled growth and success.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="self-start md:self-center"
            >
              <Button
                asChild
                variant="default"
                className="px-6 py-6 rounded-xl bg-primary text-black hover:bg-primary/90"
              >
                <Link href="/portfolio" aria-label="View our portfolio">
                  Explore Our <strong><i>Portfolio</i></strong>
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="w-full bg-muted/50 py-10 mt-10 rounded-lg px-4 md:px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
            <p className="text-sm md:text-base text-muted-foreground mb-4 max-w-[800px]">
              Ready to elevate your project? Get started with our services today!
            </p>
            <Link href="/contact-us">
              <Button
                variant="default"
                className="text-sm px-6 py-2 bg-primary text-black hover:bg-primary/90"
                aria-label="Get started with our services"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsAndServicesPage;