"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FaStar, FaFire, FaCheck, FaMobileAlt } from "react-icons/fa";

const LogoSection = () => {
  const highlights = useMemo(
    () => [
      { text: "10+ Years of Excellence", icon: FaStar },
      { text: "99% Success Rate", icon: FaFire },
      { text: "50+ Thriving Projects", icon: FaCheck },
      { text: "Immersive User Experiences", icon: FaMobileAlt },
    ],
    []
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
    }),
  };

  return (
    <section className="w-full bg-transparent ">
      <div className="px-4 md:px-6 py-12 md:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                Innovate, Elevate, Dominate
              </h2>
              <p className="mt-2 max-w-[640px] text-sm md:text-base text-muted-foreground">
                Discover the expertise and innovation that power our immersive,
                future-ready solutions.
              </p>
            </motion.div>

            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                    className="
                      rounded-2xl
                      border border-border
                      bg-muted/40
                      p-4 sm:p-5
                      backdrop-blur
                      transition-all
                    "
                  >
                    <div className="
                      mx-auto mb-2
                      flex h-11 w-11 items-center justify-center
                      rounded-xl
                      border border-border
                      bg-background/60
                    ">
                      <Icon size={18} className="text-primary" />
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-foreground/90 leading-snug">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
