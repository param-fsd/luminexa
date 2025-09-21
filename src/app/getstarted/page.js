"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, Rocket, Target, Lightbulb } from "lucide-react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    designation: "",
    solutionType: "",
    budget: "",
    mobile: "",
    email: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
  };

  return (
    <section className="w-full py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
        role="banner"
      >
        <h2 className="text-3xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Kickstart Your Journey
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-sm">
          Ready to transform your ideas into reality? Share your details or learn why our platform is the perfect starting point.
        </p>
        <div className="mt-6 h-1 w-32 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3 p-8 rounded-2xl shadow-lg border "
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Tell Us About You
          </h3>
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center text-center space-y-4"
            >
              <CheckCircle className="size-14 text-primary" />
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Thank You! Your Details Have Been Submitted
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We'll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium   mb-1.5"
                  >
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 rounded-sm h-12  focus:ring-2 focus:ring-primary hover:border-primary/50 text-gray-900 dark:text-white transition-all duration-200"
                    aria-label="Full Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5"
                  >
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={handleChange}
                    className="p-3 rounded-sm h-12  focus:ring-2 focus:ring-primary hover:border-primary/50 text-gray-900 dark:text-white transition-all duration-200"
                    aria-label="Company Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="designation"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5"
                  >
                    Designation
                  </label>
                  <Input
                    id="designation"
                    name="designation"
                    type="text"
                    placeholder="Enter your designation"
                    value={formData.designation}
                    onChange={handleChange}
                   className="p-3 rounded-sm h-12  focus:ring-2 focus:ring-primary hover:border-primary/50 text-gray-900 dark:text-white transition-all duration-200"
                    aria-label="Designation"
                  />
                </div>

                <div>
                  <label
                    htmlFor="solutionType"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5"
                  >
                    Solution Type
                  </label>
                  <select
                    id="solutionType"
                    name="solutionType"
                    value={formData.solutionType}
                    onChange={handleChange}
                    className="w-full p-3 rounded-sm h-12 border  focus:ring-2 focus:ring-primary hover:border-primary/50 text-gray-900 dark:text-white  transition-all duration-200"
                    aria-label="Solution Type"
                  >
                    <option value="" disabled>
                      Select a solution type
                    </option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Cloud Solutions">Cloud Solutions</option>
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5"
                  >
                    Budget
                  </label>
                  <Input
                    id="budget"
                    name="budget"
                    type="text"
                    placeholder="e.g., $10,000 - $20,000"
                    value={formData.budget}
                    onChange={handleChange}
                  className="p-3 rounded-sm h-12  focus:ring-2 focus:ring-primary hover:border-primary/50 text-gray-900 dark:text-white transition-all duration-200"
                    aria-label="Budget"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5"
                  >
                    Mobile Number
                  </label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                   className="p-3 rounded-sm h-12  focus:ring-2 focus:ring-primary hover:border-primary/50 text-gray-900 dark:text-white transition-all duration-200"
                    aria-label="Mobile Number"
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-xs mt-1.5">{errors.mobile}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5"
                  >
                    Email ID
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 rounded-sm h-12  focus:ring-2 focus:ring-primary hover:border-primary/50 text-gray-900 dark:text-white transition-all duration-200"
                    aria-label="Email ID"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="details"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5"
                  >
                    Additional Details
                  </label>
                  <Textarea
                    id="details"
                    name="details"
                    placeholder="Share any additional details or requirements"
                    value={formData.details}
                    onChange={handleChange}
                    className="p-3 rounded-sm h-32 focus:ring-2 focus:ring-primary hover:border-primary/50 text-gray-900 dark:text-white transition-all duration-200"
                    rows={6}
                    aria-label="Additional Details"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full md:col-span-2 flex py-6 text-base items-center justify-center gap-2 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 dark:text-black text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <motion.span
                  animate={{ x: submitted ? 10 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Send size={20} />
                </motion.span>
                Submit
              </Button>
            </form>
          )}
        </motion.div>

        {/* Why Get Started Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 p-8 rounded-2xl shadow-lg border"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Why Get Started?
          </h3>
          <div className="space-y-6">
            <motion.div
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-2 bg-primary/10 rounded-full">
                <Rocket className="size-6 text-primary" />
              </div>
              <div>
                <p className="text-base font-medium text-gray-900 dark:text-white">
                  Fast-Track Your Project
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Our expert team accelerates your timeline with proven expertise.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-2 bg-primary/10 rounded-full">
                <Target className="size-6 text-primary" />
              </div>
              <div>
                <p className="text-base font-medium text-gray-900 dark:text-white">
                  Tailored Solutions
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Customized strategies to meet your unique business goals.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-2 bg-primary/10 rounded-full">
                <Lightbulb className="size-6 text-primary" />
              </div>
              <div>
                <p className="text-base font-medium text-gray-900 dark:text-white">
                  Innovative Ideas
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Cutting-edge solutions to bring your vision to life.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnquiryForm;