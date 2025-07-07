"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    company: "",
    solution: "",
    budget: "",
    phone: "",
    email: "",
  });
  const [outputMessage, setOutputMessage] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello, I am "${formData.name}", "${formData.designation}" at "${formData.company}". We are currently looking for "${formData.solution}" solution, and our budget is "${formData.budget}". Please connect with us on "${formData.phone}" or email us at "${formData.email}".`;
    setOutputMessage(message);
    setShowOutput(true);
  };

  return (
    <section className="w-full py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-muted/30 dark:bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight">
          <FancyText text="Business Enquiry" />
        </h1>
        <p className="text-muted-foreground mt-4 text-lg">
          <FancyText text="Please fill in the details below to connect with us about your business needs." className="text-lg" />
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-12 w-[80%] mx-auto"
      >
        <form id="paragraphForm" onSubmit={handleSubmit} className="text-4xl text-muted-foreground">
          <p className="leading-relaxed mb-6">
            <FancyText text="Hello, I am" className="text-4xl" />{" "}
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Your Name"
              className="inline-block w-auto min-w-[120px] mx-1 border-0 border-b border-foreground outline-none text-foreground text-4xl rounded-none bg-black placeholder:text-2xl placeholder:text-muted-foreground"
            />
            ,{" "}
            <Input
              id="designation"
              type="text"
              value={formData.designation}
              onChange={handleInputChange}
              required
              placeholder="Your Designation"
              className="inline-block w-60 min-w-[160px] mx-2 border-0 border-b border-foreground outline-none text-foreground text-4xl rounded-none bg-black placeholder:text-2xl placeholder:text-muted-foreground"
            />{" "}
            <FancyText text="at" className="text-4xl" />{" "}
            <Input
              id="company"
              type="text"
              value={formData.company}
              onChange={handleInputChange}
              required
              placeholder="Your Company"
              className="inline-block w-50 min-w-[120px] mx-1 border-0 border-b border-foreground outline-none text-foreground text-4xl rounded-none bg-black placeholder:text-2xl placeholder:text-muted-foreground"
            />
            . <FancyText text="We are currently looking for" className="text-4xl" />{" "}
            <Input
              id="solution"
              type="text"
              value={formData.solution}
              onChange={handleInputChange}
              required
              placeholder="Solution Type"
              className="inline-block w-auto min-w-[120px] mx-1 border-0 border-b border-foreground outline-none text-foreground text-4xl rounded-none bg-black placeholder:text-2xl placeholder:text-muted-foreground"
            />{" "}
            <FancyText text="solution, and our budget is" className="text-4xl" />{" "}
            <Input
              id="budget"
              type="text"
              value={formData.budget}
              onChange={handleInputChange}
              required
              placeholder="Your Budget"
              className="inline-block w-auto min-w-[120px] mx-1 border-0 border-b border-foreground outline-none text-foreground text-4xl rounded-none bg-black placeholder:text-2xl placeholder:text-muted-foreground"
            />
            . <FancyText text="Please connect with us on" className="text-4xl" />{" "}
            <Input
              id="phone"
              type="text"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="Your Phone"
              className="inline-block w-auto min-w-[120px] mx-1 border-0 border-b border-foreground outline-none text-foreground text-4xl rounded-none bg-black placeholder:text-2xl placeholder:text-muted-foreground"
            />{" "}
            <FancyText text="or email us at" className="text-4xl" />{" "}
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Your Email"
              className="inline-block w-70 min-w-[120px] mx-1 border-0 border-b border-foreground outline-none text-foreground text-4xl rounded-none bg-black placeholder:text-2xl placeholder:text-muted-foreground"
            />
            .
          </p>
          <div className="flex justify-center">
             <Button
              type="submit"
              className="mt-[25px] rounded-[36px] px-8 py-8 text-2xl bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <FancyText text="Generate Message" className="text-2xl" />
            </Button>
          </div>
        </form>

        {showOutput && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-[30px] p-5 border-l-4 border-green-500 text-foreground whitespace-pre-wrap"
          >
            <FancyText text={outputMessage} className="text-base" />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default EnquiryForm;