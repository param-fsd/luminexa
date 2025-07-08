"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Rocket, Lightbulb } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";

const jobs = [
  
  {
    slug: "android-ios-developer",
    title: "Android & iOS Developer",
    description:
      "Luminexa is seeking a skilled Android & iOS Developer to create next-generation mobile applications that merge design, functionality, and emerging tech.",
    location: "On-Site",
    type: "Full-Time",
  },
  {
    slug: "architecture-visualizer",
    title: "Architecture Visualizer",
    description:
      "Luminexa is expanding its creative team and looking for a highly skilled Architecture Visualizer who can bring architectural concepts to life through immersive 3D renders and animated walkthroughs.",
    location: "On-Site",
    type: "Full-Time",
  },
  {
    slug: "junior-architect",
    title: "Junior Architect",
    description:
      "Luminexa is seeking a Junior Architect to contribute to 3D visualization and design projects, working at the intersection of architecture and emerging technologies.",
    location: "On-Site",
    type: "Full-Time",
  },
  {
    slug: "business-development-associate",
    title: "Business Development Associate",
    description:
      "Luminexa is looking for a dynamic Business Development Associate (BDA) who will be a key player in driving our growth.",
    location: "On-Site",
    type: "Full-Time",
  },
];

const benefits = [
  {
    icon: <Rocket className="size-10 text-primary" />,
    title: "Fast-Paced Growth",
    description:
      "Work in a dynamic environment where innovation meets execution.",
  },
  {
    icon: <Lightbulb className="size-10 text-yellow-400" />,
    title: "Innovative Culture",
    description:
      "We foster creativity and provide a space for your ideas to thrive.",
  },
  {
    icon: <Users className="size-10 text-blue-500" />,
    title: "Collaborative Team",
    description:
      "Join a team of like-minded professionals who push boundaries together.",
  },
  {
    icon: <Briefcase className="size-10 text-green-500" />,
    title: "Career Advancement",
    description:
      "We invest in your growth with mentorship and upskilling programs.",
  },
];

const CareersPage = () => {
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
    <>
      <section className="w-full py-20 px-6 md:px-10 bg-muted/30 dark:bg-black relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            <FancyText text="Careers" className="text-sm" />
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            <FancyText text="Join Our Growing nex Team" className="" />
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            <FancyText
              text="Be part of an innovative team that's building the future of nex. Explore open roles and apply today!"
              className="text-base"
            />
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden rounded-xl shadow-lg bg-background dark:bg-muted/10 hover:shadow-xl transition-all">
                <CardContent className="">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Briefcase className="size-5 text-primary" />
                    <FancyText text={job.title} className="" />
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    <FancyText text={job.description} className="text-base" />
                  </p>
                  <div className="flex justify-between items-center mt-4 text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Users className="size-4" />
                      <FancyText text={job.location} className="text-sm" />
                    </span>
                    <Badge variant="outline">
                      <FancyText text={job.type} className="text-sm" />
                    </Badge>
                  </div>
                  <Link href={`/careers/${job.slug}`}>
                    <Button
                      variant="outline"
                      className="mt-4 w-full cursor-pointer"
                    >
                      <FancyText text="View Details" className="text-base" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="relative py-20 px-6 md:px-10 dark:from-muted/50 dark:to-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            <FancyText text="Why Work With Us?" className="" />
          </h2>
          <p className="mt-3">
            <FancyText
              text="Join a company that values growth, innovation, and collaboration."
              className="text-base"
            />
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 dark:bg-muted/20 p-6 rounded-xl shadow-md border backdrop-blur-md text-center"
            >
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold">
                <FancyText text={benefit.title} className="" />
              </h3>
              <p className="mt-2">
                <FancyText text={benefit.description} className="text-base" />
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <FAQSection />
    </>
  );
};

export default CareersPage;