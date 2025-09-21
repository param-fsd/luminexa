
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

const FAQSection = () => {
  return (
    <section
      id="faq"
      className="w-full flex flex-col items-center justify-center px-6 py-16 bg-background"
    >
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-3 mb-12"
        >
          <Badge className="rounded-full px-4 py-1.5 text-xs font-medium text-primary bg-muted">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-4 text-sm sm:text-base leading-relaxed">
            Find answers to common questions about our platform.
          </p>
        </motion.div>

        <div className="w-full max-w-3xl">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <AccordionItem value={`item-${i}`} className="border-gray-200">
                  <AccordionTrigger className="text-left text-base font-bold text-primary hover:no-underline py-3">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed py-3 text-left">
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
