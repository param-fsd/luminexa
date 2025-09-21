"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { FaSearch, FaListUl, FaPen, FaCheckCircle, FaCloudUploadAlt, FaHeadset } from 'react-icons/fa';

const WorkingSection = () => {
  const [activeStep, setActiveStep] = useState(null);

  const handleStepClick = (index) => {
    setActiveStep(activeStep === index ? null : index);
    console.log(`Clicked on step: ${steps[index].title}`);
    // Add your logic here, e.g., open a modal, navigate, etc.
  };

  const steps = [
    {
      icon: <FaSearch />,
      title: "Discovery",
      description:
        "We begin by understanding your business needs, goals, and the specific challenges you want to address.",
      details: "In this phase, we conduct thorough interviews, analyze market trends, and identify key opportunities to align our solutions with your vision."
    },
    {
      icon: <FaListUl />,
      title: "Planning",
      description:
        "Our team creates a detailed roadmap outlining the scope, timeline, resources, and deliverables for your project.",
      details: "We break down the project into milestones, assign resources, and establish clear KPIs to ensure efficient execution and measurable success."
    },
    {
      icon: <FaPen />,
      title: "Design",
      description:
        "We create user-centric designs that align with your brand identity and provide optimal user experience.",
      details: "Our designers craft wireframes, prototypes, and visual elements, incorporating user feedback to refine the interface for intuitiveness and aesthetics."
    },
    {
      icon: <FaCheckCircle />,
      title: "Test & Refine",
      description:
        "Rigorous testing and iterations to ensure flawless performance and user satisfaction.",
      details: "We perform unit, integration, and user acceptance testing, addressing bugs and optimizing based on real-world simulations and feedback loops."
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Deploy & Integrate",
      description:
        "Seamless deployment and integration into your existing systems for immediate impact.",
      details: "Using CI/CD pipelines, we deploy the solution securely and integrate it with your infrastructure, minimizing downtime and ensuring compatibility."
    },
    {
      icon: <FaHeadset />,
      title: "Support & Evolve",
      description:
        "Ongoing support, updates, and evolution to keep your experience cutting-edge.",
      details: "We provide 24/7 monitoring, regular updates, and scalable enhancements to adapt to evolving needs and technological advancements."
    },
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="px-4 md:px-6 relative max-w-3xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            How It Works
          </Badge>
          <h2 className="text-2xl md:text-3xl font-semibold">
            From Idea to Immersive Reality
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Our streamlined process transforms your creative ideas into high-impact, interactive digital experiences — built for engagement, innovation, and results.
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => handleStepClick(i)}
              className={`flex items-start justify-between mb-12 cursor-pointer transition-all duration-300 ${activeStep === i ? 'bg-primary/10 p-4 rounded-lg' : ''}`}
            >
              <div className="flex-1 text-left">
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm text-base mt-2">{step.description}</p>
                {activeStep === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground text-sm mt-4"
                  >
                    {step.details}
                  </motion.p>
                )}
              </div>
              <div className="flex flex-col items-center ml-6 relative">
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl shadow-lg"
                  animate={activeStep === i ? { scale: 1.2, rotate: 360 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {step.icon}
                </motion.div>
                <div
                  className={`absolute w-px h-full border-l border-dashed border-border top-[3rem] left-1/2 -translate-x-1/2 ${i === steps.length - 1 ? "hidden" : ""}`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingSection;