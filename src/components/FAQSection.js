
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQSection = () => {
  // Reusable FancyText component for uniform styling with optimized spacing
  const FancyText = ({ text, className }) => {
    const words = text.split(" ");
    return (
      <span className={className}>
        {words.map((word, index) => (
          <span
            key={index}
            className={
              index % 3 === 0
                ? "font-bold"
                : index % 3 === 1
                ? "italic font-light"
                : "font-medium"
            }
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    );
  };

  return (
    <section id="faq" className="w-full py-20 md:py-32">
      <div className="px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            <FancyText text="FAQ" className="text-sm" />
          </Badge>
          <h2 className="text-3xl md:text-4xl tracking-tight">
            <FancyText text="Frequently Asked Questions" className="font-bold" />
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            <FancyText
              text="Find answers to common questions about our platform."
              className="md:text-lg"
            />
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {[
  {
    question: "How many days will it take to build the complete solution?",
    answer:
      "Basic services or solutions typically take around 3 to 4 working days. For complex solutions, it may take anywhere from 15 days to 1 month depending on the requirements.",
  },
  {
    question:
      "Are all your products and services based on a subscription model or one-time payment?",
    answer:
      "Not all. Some services are offered as one-time payments, while others may follow a subscription model depending on the nature of the service.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We take data security very seriously. All data is encrypted in transit and at rest, and we follow industry-standard practices to ensure your information is safe.",
  },
  {
    question: "Do prices vary?",
    answer:
      "Yes, our pricing may vary on a monthly basis depending on market conditions, usage requirements, and custom solutions.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Support depends on the plan you choose. We offer email support for all users, priority support for premium plans, and 24/7 support for enterprise clients.",
  },
  {
    question: "Do you offer packages for buying multiple services or products?",
    answer:
      "Yes, we do offer bundled pricing or custom packages when you're purchasing multiple services or products. Contact us for a tailored quote.",
  },
].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <AccordionItem value={`item-${i}`} className="">
                  <AccordionTrigger className="text-left text-base hover:no-underline">
                    <FancyText text={faq.question} className="font-medium" />
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
