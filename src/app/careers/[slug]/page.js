"use client";

import React from "react";
import { useParams } from "next/navigation";
import { jobs } from "@/data/careerData";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CareerDetails = () => {
  const { slug } = useParams();
  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Job not found</p>
      </div>
    );
  }

  return (
    <section className="w-full min-h-screen py-16 px-6 md:px-12">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto mb-8 text-sm text-muted-foreground flex items-center gap-2"
      >
        <Link href="/careers" className="hover:underline flex items-center gap-1">
          <ArrowLeft className="size-4" /> Careers
        </Link>
        <span>{">"}</span>
        <span className="text-foreground font-medium">{job.title}</span>
      </motion.div>

      {/* Main Content with Sidebar */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-[3fr_1fr] gap-8">
        {/* Job Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {job.title}
          </h1>
          <motion.article
            className="prose lg:prose-xl dark:prose-invert mt-6 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: job.fullDescription }}
          />
          
        </motion.div>

        {/* Sidebar with Metadata */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-lg shadow-md border"
        >
          <h3 className="text-lg font-semibold mb-4">Job Details</h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-2">
              <Briefcase className="size-4 text-primary" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-primary" />
              <span>{job.experience}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-4 text-primary" />
              <span>Posted: September 2025</span>
            </div>
            <Badge className="w-fit px-3 py-1">
              Open Position
            </Badge>
          </div>
          
        </motion.div>
        {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3"
          >
            
            <Button
              className="bg-primary text-black hover:bg-primary/90 text-sm px-6 py-3 h-12 flex items-center gap-2"
              aria-label={`Apply for ${job.title}`}
            >
              Apply Now
              <ArrowRight className="size-5" />
            </Button>
          </motion.div> */}
      </div>

      {/* Newsletter Subscription */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 max-w-5xl mx-auto flex flex-col items-center border shadow-md p-8 rounded-lg text-center"
      >
        <Mail className="size-8 text-primary mb-4" />
        <h3 className="text-xl font-semibold">Stay Updated with Luminexa</h3>
        <p className="text-muted-foreground mt-2 mb-4 text-sm">
          Get the latest career opportunities and insights delivered to your inbox.
        </p>
        <div className="flex w-full max-w-md gap-2">
          <Input type="email" placeholder="Enter your email" className="flex-1 text-base h-10" />
          <Button className="h-10 text-base cursor-pointer">Subscribe</Button>
        </div>
      </motion.div>
    </section>
  );
};

export default CareerDetails;