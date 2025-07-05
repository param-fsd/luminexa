"use client";

import { useState, useEffect } from "react";

import HeroSection from "@/components/HeroSection";
import LogoSection from "@/components/LogoSection";
import FeatureSection from "@/components/FeatureSection";
import WorkingSection from "@/components/WorkingSection";
import Service from "@/app/services/page"
import PricingSection from "@/components/PricingSection";
import Blog from "@/app/blogs/page"
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function LandingPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Logos Section */}
        <LogoSection />

        <Service/>

        {/* Features Section */}
        <FeatureSection container={container} item={item} />

        {/* How It Works Section */}

        <WorkingSection />

        {/* Testimonials Section */}
        

        {/* FAQ Section */}
        <FAQSection />

        <Blog />

        {/* CTA Section */}
        <CTASection />
      </main>
    </>
  );
}
