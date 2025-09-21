"use client";

import React from "react";
import { useParams } from "next/navigation";
import services from "@/data/serviceData";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import sanitizeHtml from "sanitize-html";

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-base">Service not found</p>
      </div>
    );
  }

  // Sanitize HTML with basic configuration
  const sanitizedOverview = sanitizeHtml(service.overview, {
    allowedTags: ["p", "b", "i", "em", "strong", "a", "ul", "li"],
    allowedAttributes: { a: ["href"] },
  });

  return (
    <section className="w-full min-h-screen py-16 px-6 md:px-12 bg-gradient-to-b from-muted/30 to-black">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto mb-6 text-sm text-muted-foreground flex items-center gap-2"
      >
        <Link href="/services" className="hover:underline flex items-center gap-1" aria-label="Back to Services">
          <ArrowLeft className="size-3" /> Services
        </Link>
        <span>{">"}</span>
        <span className="text-foreground font-medium">{service.title}</span>
      </motion.div>

      {/* Header */}
      <motion.div
        className="max-w-5xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge className="mb-3 w-fit text-xs px-2 py-0.5 rounded-full bg-primary text-black">
          {service.label}
        </Badge>
        <h1 className="text-xl md:text-2xl font-bold tracking-tight mb-3">{service.title}</h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-xl">{service.description}</p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-1 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Overview */}
          <div className="mb-10">
            <h2 className="text-base md:text-lg font-semibold mb-3">Overview</h2>
            <motion.article
              className="prose prose-sm dark:prose-invert max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              dangerouslySetInnerHTML={{ __html: sanitizedOverview }}
            />
          </div>
          <hr className="my-6" />

          {/* Sub-Services */}
          <div className="mb-10">
            <h2 className="text-base md:text-lg font-semibold mb-4 text-center">Our Services</h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {service.subServices.map((subService) => (
                <Link
                  key={subService.subSlug}
                  href={`/services/${service.slug}/${subService.subSlug}`}
                  className="border p-4 rounded-lg shadow-md bg-white dark:bg-[#262626] hover:shadow-lg hover:scale-105 transition-all duration-300"
                  aria-label={`Learn more about ${subService.title}`}
                >
                  <h3 className="text-sm md:text-base font-semibold">{subService.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{subService.description}</p>
                  <Button variant="link" className="mt-3 p-0 h-auto text-primary text-sm">
                    Learn More
                  </Button>
                </Link>
              ))}
              {/* Custom Development Enquiry Card */}
              <Link
                href="/contact-us"
                className="border p-4 rounded-lg shadow-md bg-[#0E2849] hover:shadow-lg hover:scale-105 transition-all duration-300"
                aria-label="Contact us for custom development"
              >
                <h3 className="text-sm md:text-base font-semibold">Custom Development Enquiry</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Need a tailored solution? Contact us to discuss your custom development needs.
                </p>
                <Button variant="link" className="mt-3 p-0 h-auto text-primary text-sm">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
          <hr className="my-6" />

          {/* Key Features */}
          <div className="mb-10">
            <h2 className="text-base md:text-lg font-semibold mb-3">Key Features</h2>
            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {service.features.map((feature, index) => (
                <li
                  key={index}
                  className="py-3  transition-colors"
                >
                  <h3 className="text-sm md:text-base font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                </li>
              ))}
            </motion.ul>
          </div>
 <hr className="my-6" />

          {/* Applications */}
          <div className="mb-10">
            <h2 className="text-base md:text-lg font-semibold mb-3">Applications</h2>
            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {service.applications.map((app, index) => (
                <li
                  key={index}
                  className="py-3 
                            transition-colors"
                >
                  <p className="text-sm md:text-base">{app}</p>
                </li>
              ))}
            </motion.ul>
          </div>
          <hr className="my-6" />

          {/* Contact Us Section with Full-Width Box */}
          <motion.div
            className="w-full bg-muted/50 py-10 mt-10 mb-10 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
              <p className="text-sm md:text-base text-muted-foreground mb-4 max-w-xl">
                Ready to transform your business? Contact us to explore how our {service.title} can help!
              </p>
              <Link href="/contact-us">
                <Button
                  variant="default"
                  className="text-sm px-6 py-2 bg-primary text-black hover:bg-primary/90"
                  aria-label="Contact us about this service"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetails;