"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import services from "@/data/serviceData";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import sanitizeHtml from "sanitize-html";

const SubServiceDetails = () => {
  const { slug, subSlug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const subService = service?.subServices.find((ss) => ss.subSlug === subSlug);
  const [activeTab, setActiveTab] = useState("overview");

  if (!service || !subService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-base">Sub-service not found</p>
      </div>
    );
  }

  // Sanitize HTML for overview
  const sanitizedOverview = sanitizeHtml(subService.overview, {
    allowedTags: ["p", "b", "i", "em", "strong", "a", "ul", "li"],
    allowedAttributes: { a: ["href"] },
  });

  // Tab configuration, filtered to show only tabs with data
  const tabs = [
    { id: "overview", label: "Overview" }, // Always show Overview for overview and videos
    ...(subService.benefits?.length > 0
      ? [{ id: "benefits", label: "Benefits" }]
      : []),
    ...(subService.caseStudies?.length > 0
      ? [{ id: "caseStudies", label: "Case Studies" }]
      : []),
    ...(subService.technologies?.length > 0
      ? [{ id: "technologies", label: "Technologies" }]
      : []),
    ...(subService.faqs?.length > 0 ? [{ id: "faqs", label: "FAQs" }] : []),
  ];

  return (
    <section className="w-full min-h-screen py-16 px-6 md:px-12 bg-gradient-to-b from-muted/30 to-black">
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto mb-6 text-sm text-muted-foreground flex items-center gap-2">
        <Link
          href="/services"
          className="hover:underline flex items-center gap-1"
          aria-label="Back to Services"
        >
          <ArrowLeft className="size-3" /> Services
        </Link>
        <span>{">"}</span>
        <Link
          href={`/services/${service.slug}`}
          className="hover:underline"
          aria-label={`Back to ${service.title}`}
        >
          {service.title}
        </Link>
        <span>{">"}</span>
        <span className="text-foreground font-medium">{subService.title}</span>
      </div>

      {/* Hero Section */}
      <motion.div
        className="relative w-full max-w-5xl mx-auto h-[24rem] rounded-2xl overflow-hidden shadow-xl"
        style={{
          backgroundImage: `url(${service.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col justify-end p-6 h-full">
          <Badge className="mb-3 w-fit text-xs px-2 py-0.5 rounded-full bg-primary text-black">
            {service.label}
          </Badge>
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-xl md:text-2xl font-bold text-white">
              {subService.title}
            </h1>
          </motion.div>
          <p className="text-gray-200 text-sm md:text-base mt-2 max-w-xl">
            {subService.description}
          </p>
        </div>
      </motion.div>

      {/* Tabs Navigation */}
      <div className="max-w-5xl mx-auto mt-10">
        <motion.div
          className="flex flex-wrap gap-3 border-b border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "ghost"}
              className={`text-sm px-3 py-1 rounded-b ${
                activeTab === tab.id
                  ? "bg-primary text-black"
                  : "text-muted-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              onClick={() => setActiveTab(tab.id)}
              aria-current={activeTab === tab.id ? "page" : undefined}
            >
              {tab.label}
            </Button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-lg font-semibold mb-3">Overview</h2>
              <article
                className="prose prose-sm dark:prose-invert max-w-none mb-6"
                dangerouslySetInnerHTML={{ __html: sanitizedOverview }}
              />

              {subService.demos?.length > 0 && (
                <div className="w-full mt-6">
                  <h2 className="text-lg font-semibold mb-3 text-start">
                    See It in Action
                  </h2>

                  <div className="space-y-6">
                    {subService.demos.map((demo, index) => (
                      <div
                        key={index}
                        className="flex flex-col md:flex-row items-center gap-6 border rounded-lg shadow-sm bg-muted/50 p-4"
                      >
                        {/* Video Section (60%) */}
                        <div className="w-full md:w-3/5">
                          <div className="aspect-video rounded-lg overflow-hidden">
                            <video
                              src={demo.url}
                              controls
                              className="w-full h-full"
                              aria-label={`Demo video ${index + 1} for ${subService.title}`}
                            />
                          </div>
                        </div>

                        {/* Text Section (40%) */}
                        <div className="w-full md:w-2/5 text-sm text-muted-foreground">
                          <h3 className="text-lg font-semibold mb-2">
                            {demo.title}
                          </h3>
                          <p>{demo.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === "benefits" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-base md:text-lg font-semibold mb-3">
                Benefits
              </h2>
              <ul className="list-disc pl-5 text-muted-foreground">
                {subService.benefits.map((benefit, index) => (
                  <li key={index} className="text-sm md:text-base mb-1">
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {activeTab === "caseStudies" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-base md:text-lg font-semibold mb-3">
                Case Studies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {subService.caseStudies.map((study, index) => (
                  <div
                    key={index}
                    className="border p-4 rounded-lg shadow-sm bg-white dark:bg-[#262626]"
                  >
                    <h3 className="text-sm md:text-base font-semibold">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {study.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "technologies" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-base md:text-lg font-semibold mb-3">
                Technologies
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {subService.technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="border p-3 rounded-lg shadow-sm bg-white dark:bg-[#262626] text-center text-sm md:text-base"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {activeTab === "faqs" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-base md:text-lg font-semibold mb-3">FAQs</h2>
              <ul className="space-y-3">
                {subService.faqs.map((faq, index) => (
                  <li
                    key={index}
                    className="border p-4 rounded-lg shadow-sm bg-white dark:bg-[#262626]"
                  >
                    <h3 className="text-sm md:text-base font-semibold">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {faq.answer}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Get Started Section */}
        <motion.div
          className="w-full bg-muted/50 py-10 mt-10 mb-10 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <p className="text-sm md:text-base text-muted-foreground mb-4 max-w-xl">
              Ready to elevate your project? Get started with our {subService.title} today!
            </p>
            <Link href="/contact">
              <Button
                variant="default"
                className="text-sm px-6 py-2 bg-primary text-black hover:bg-primary/90"
                aria-label="Get started with this service"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubServiceDetails;
