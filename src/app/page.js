"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import LogoSection from "@/components/LogoSection";
import FeatureSection from "@/components/FeatureSection";
import WorkingSection from "@/components/WorkingSection";
import Service from "@/app/services/page";
import Blog from "@/app/blogs/page";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Chatbot from "@/components/Chatbot";
import MainProduct from "@/components/MainProduct";
import NexAr from "@/components/NexAr";
import TestimonialSection from "@/components/TestimonialSection";
import BelowHeroExperience from "@/components/BelowHeroExperience";

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
      <main className="flex-1 relative">
        {/* Hero Section */}
        <HeroSection />

        <LogoSection />

        <BelowHeroExperience/>

        <Service />

          {/* <Chatbot/> */}

        {/* Features Section */}
        <FeatureSection container={container} item={item} />

        <MainProduct />

        <NexAr />
        {/* How It Works Section */}
        <WorkingSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Blog Section - Show only 3 blogs, hide newsletter */}
        <Blog limit={3} showNewsletter={false} />

      

        {/* CTA Section */}
        <CTASection />
        
      </main>
    </>
  );
}