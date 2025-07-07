
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
    <section className="w-full py-8 sm:py-12 md:py-20 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-muted/30 dark:bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full mx-auto text-center"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          <FancyText text="Business Enquiry" />
        </h1>
        <p className="text-muted-foreground mt-4 text-base sm:text-lg md:text-xl">
          <FancyText text="Please fill in the details below to connect with us about your business needs." className="text-base sm:text-lg md:text-xl" />
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 sm:mt-10 md:mt-12 w-full mx-auto"
      >
        <form id="paragraphForm" onSubmit={handleSubmit} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground">
          <p className="leading-relaxed mb-6 flex flex-wrap gap-x-2 gap-y-4 items-baseline">
            <FancyText text="Hello, I am" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />{" "}
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Your Name"
              className="inline-block w-full sm:w-[150px] md:w-[180px] lg:w-[200px] mx-1 border-0 border-b border-foreground outline-none text-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl rounded-none bg-transparent placeholder:text-base sm:placeholder:text-lg md:placeholder:text-xl placeholder:text-muted-foreground"
            />
            ,{" "}
            <Input
              id="designation"
              type="text"
              value={formData.designation}
              onChange={handleInputChange}
              required
              placeholder="Your Designation"
              className="inline-block w-full sm:w-[180px] md:w-[220px] lg:w-[260px] mx-1 border-0 border-b border-foreground outline-none text-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl rounded-none bg-transparent placeholder:text-base sm:placeholder:text-lg md:placeholder:text-xl placeholder:text-muted-foreground"
            />{" "}
            <FancyText text="at" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />{" "}
            <Input
              id="company"
              type="text"
              value={formData.company}
              onChange={handleInputChange}
              required
              placeholder="Your Company"
              className="inline-block w-full sm:w-[150px] md:w-[180px] lg:w-[200px] mx-1 border-0 border-b border-foreground outline-none text-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl rounded-none bg-transparent placeholder:text-base sm:placeholder:text-lg md:placeholder:text-xl placeholder:text-muted-foreground"
            />
            . <FancyText text="We are currently looking for" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />{" "}
            <Input
              id="solution"
              type="text"
              value={formData.solution}
              onChange={handleInputChange}
              required
              placeholder="Solution Type"
              className="inline-block w-full sm:w-[150px] md:w-[180px] lg:w-[200px] mx-1 border-0 border-b border-foreground outline-none text-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl rounded-none bg-transparent placeholder:text-base sm:placeholder:text-lg md:placeholder:text-xl placeholder:text-muted-foreground"
            />{" "}
            <FancyText text="solution, and our budget is" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />{" "}
            <Input
              id="budget"
              type="text"
              value={formData.budget}
              onChange={handleInputChange}
              required
              placeholder="Your Budget"
              className="inline-block w-full sm:w-[150px] md:w-[180px] lg:w-[200px] mx-1 border-0 border-b border-foreground outline-none text-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl rounded-none bg-transparent placeholder:text-base sm:placeholder:text-lg md:placeholder:text-xl placeholder:text-muted-foreground"
            />
            . <FancyText text="Please connect with us on" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />{" "}
            <Input
              id="phone"
              type="text"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="Your Phone"
              className="inline-block w-full sm:w-[150px] md:w-[180px] lg:w-[200px] mx-1 border-0 border-b border-foreground outline-none text-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl rounded-none bg-transparent placeholder:text-base sm:placeholder:text-lg md:placeholder:text-xl placeholder:text-muted-foreground"
            />{" "}
            <FancyText text="or email us at" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />{" "}
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Your Email"
              className="inline-block w-full sm:w-[180px] md:w-[220px] lg:w-[260px] mx-1 border-0 border-b border-foreground outline-none text-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl rounded-none bg-transparent placeholder:text-base sm:placeholder:text-lg md:placeholder:text-xl placeholder:text-muted-foreground"
            />
            .
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6">
            <FancyText
              text="Once you've filled in the details above, click the button below to Submiit a professional message tailored to your enquiry. Our team will review your submission and reach out promptly."
              className="text-base sm:text-lg md:text-lg"
            />
          </p>
          
          <div className="flex justify-start">
            <Button
              type="submit"
              className="mt-4 sm:mt-6 md:mt-8 rounded-[36px] px-6 sm:px-8 py-6 sm:py-7 md:py-8 text-lg sm:text-xl md:text-2xl bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <FancyText text="Submit Enquiry" className="text-lg sm:text-xl md:text-2xl" />
            </Button>
          </div>
        </form>

        {showOutput && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 sm:mt-8 md:mt-10 p-4 sm:p-5 border-l-4 border-green-500 text-foreground whitespace-pre-wrap text-sm sm:text-base md:text-lg w-full"
          >
            <FancyText text={outputMessage} className="text-sm sm:text-base md:text-lg" />
          </motion.div>
        )}
      </motion.div>

      <style jsx>{`
        @media (max-width: 640px) {
          form p {
            flex-direction: column;
            align-items: flex-start;
          }
          input {
            width: 100% !important;
            margin: 0.25rem 0 !important;
          }
          input::placeholder {
            font-size: 0.875rem !important;
          }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          input {
            min-width: 100px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default EnquiryForm;