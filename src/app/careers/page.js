"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Clock } from "lucide-react";
import Link from "next/link";
import { jobs, benefits } from "@/data/careerData";

const CareersPage = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mb-12 text-center"
      >
        <Badge className="rounded-full px-4 py-1.5 text-sm font-medium">
          Careers at Luminexa
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
          Shape the Future with Us
        </h2>
        <p className="text-muted-foreground mt-3 text-base max-w-lg mx-auto">
          Join Luminexa’s innovative team and build cutting-edge solutions in a collaborative, growth-driven environment.
        </p>
      </motion.div>

      {/* Benefits Section (Horizontal Scroll on Mobile) */}
      <div className="max-w-5xl mx-auto mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">Why Join Luminexa?</h3>
        <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="snap-center flex-shrink-0 w-64 md:w-auto p-6 rounded-lg shadow-md border text-center"
            >
              <div
                className="mb-4 flex justify-center"
                dangerouslySetInnerHTML={{ __html: benefit.icon }}
              />
              <h4 className="text-lg font-semibold">{benefit.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
        {jobs.map((job, index) => (
          <motion.div
            key={job.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="flex flex-col p-6 rounded-xl shadow-lg hover:shadow-xl transition-all h-full">
              <CardContent className="flex-1 p-0">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Briefcase className="size-5 text-primary" />
                  {job.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">{job.shortDescription}</p>
                <div className="flex flex-wrap gap-4 items-center mt-4 text-xs">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Users className="size-4" />
                    {job.location}
                  </span>
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Clock className="size-4" />
                    {job.experience}
                  </span>
                  <Badge variant="outline" className="text-xs">{job.type}</Badge>
                </div>
              </CardContent>
              <Link href={`/careers/${job.slug}`}>
                <Button
                  variant="outline"
                  className="mt-4 w-full cursor-pointer text-sm"
                  aria-label={`View details for ${job.title}`}
                >
                  View Details
                </Button>
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CareersPage;