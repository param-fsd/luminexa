"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";// adjust if your firebase path is different

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Send,
  CheckCircle2,
  Rocket,
  Target,
  Lightbulb,
  Sparkles,
  Clock,
  ShieldCheck,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const solutionOptions = useMemo(
    () => [
      "Web Development",
      "Mobile App",
      "WebAR / AR Experience",
      "Image Mapping",
      "360 Virtual Tour",
      "3D Walkthrough / Rendering",
      "AI & Automation",
      "Cloud / Backend",
      "Other",
    ],
    []
  );

  const quickChips = useMemo(
    () => [
      "WebAR / AR Experience",
      "Image Mapping",
      "360 Virtual Tour",
      "3D Walkthrough / Rendering",
    ],
    []
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const setSolutionChip = (value) => {
    setFormData((prev) => ({ ...prev, solutionType: value }));
    setErrors((prev) => ({ ...prev, solutionType: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9+\-\s()]{8,}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid mobile number";
    }

    return newErrors;
  };

  const completionScore = useMemo(() => {
    const fields = [
      "name",
      "company",
      "designation",
      "solutionType",
      "budget",
      "mobile",
      "email",
      "details",
    ];

    const filled = fields.filter(
      (key) => String(formData[key] || "").trim().length > 0
    ).length;

    return Math.round((filled / fields.length) * 100);
  }, [formData]);

 const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  try {
    setIsSubmitting(true);

    await addDoc(collection(db, "leads"), {
      assignedTo: "",
      budget: formData.budget.trim(),
      businessCategory: "",
      companyAddress: "",
      companyName: formData.company.trim(),
      companyOtherDetails: formData.details.trim(),

      contactPoints: [
        {
          contactName: formData.name.trim(),
          designation: formData.designation.trim(),
          emailId: formData.email.trim(),
          mobileNumber: formData.mobile.trim(),
          otherDetails: "",
        },
      ],

      createdAt: serverTimestamp(),
      deleted: false,
      followUpDate: "",
      notes: "",
      projectType: formData.solutionType.trim(),
      source: "website enquiry",
      status: "new",
      updatedAt: serverTimestamp(),
      website: "",
    });

    setSubmitted(true);

    setFormData({
      name: "",
      company: "",
      designation: "",
      solutionType: "",
      budget: "",
      mobile: "",
      email: "",
      details: "",
    });

    setErrors({});

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  } catch (error) {
    console.error("Error submitting lead:", error);
    alert("Something went wrong while submitting. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
  const inputClass =
    "h-11 rounded-md bg-background/70 border-border shadow-sm " +
    "focus-visible:ring-2 focus-visible:ring-primary/40 transition";

  const inputClassError =
    "h-11 rounded-md bg-background/70 border border-destructive/60 shadow-sm " +
    "focus-visible:ring-2 focus-visible:ring-destructive/30 transition";

  const selectClass =
    "h-11 w-full rounded-md bg-background/70 px-3 text-sm border border-border shadow-sm " +
    "focus:outline-none focus:ring-2 focus:ring-primary/40 transition";

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.18) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-secondary/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-3xl text-left"
          role="banner"
        >
          <div className="mb-4 flex items-center gap-2">
            <Badge className="rounded-full px-4 py-1">Enquiry</Badge>
            <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" />
              Quick details → faster proposal
            </span>
          </div>

          <h2 className="text-[28px] font-bold tracking-tight text-foreground sm:text-[34px] md:text-[40px]">
            Kickstart Your Journey
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Share your requirement and we’ll suggest the best approach, timeline
            and scope.
          </p>

          <div className="mt-6 h-1 w-32 rounded-full bg-gradient-to-r from-primary to-primary/60" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-border bg-background/60 p-6 shadow-sm backdrop-blur md:p-8">
              <h3 className="text-xl font-semibold text-foreground">
                Why Get Started?
              </h3>
              <p className="mt-1 text-[13px] text-muted-foreground">
                Fill the form and we’ll respond with a clear next step.
              </p>

              <div className="mt-5 grid gap-3">
                <div className="flex items-start gap-3 rounded-xl border border-border bg-background/70 p-4">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10">
                    <Clock className="size-5 text-primary" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Typical response time
                    </p>
                    <p className="mt-1 text-[12.5px] text-muted-foreground">
                      Within 24 hours (business days).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-border bg-background/70 p-4">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10">
                    <ShieldCheck className="size-5 text-primary" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Clear scope, better pricing
                    </p>
                    <p className="mt-1 text-[12.5px] text-muted-foreground">
                      More detail helps us estimate accurately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  {
                    icon: Rocket,
                    title: "Fast-Track Your Project",
                    desc: "Proven process to launch faster.",
                  },
                  {
                    icon: Target,
                    title: "Tailored Solutions",
                    desc: "Built around your business goal.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Modern + Innovative",
                    desc: "AR, 360 tours, 3D walkthroughs, AI & web.",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={i}
                      whileHover={{ y: -2 }}
                      transition={{
                        type: "spring",
                        stiffness: 240,
                        damping: 18,
                      }}
                      className="rounded-xl border border-border bg-background/70 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="size-5 text-primary" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {item.title}
                          </p>
                          <p className="mt-1 text-[12.5px] text-muted-foreground">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative lg:col-span-3"
          >
            <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[22px] bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-70 blur-2xl" />

            <div className="rounded-2xl border border-border bg-background/60 p-6 shadow-sm backdrop-blur md:p-8">
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Tell Us About You
                  </h3>
                  <p className="mt-1 text-[13px] text-muted-foreground">
                    Minimal details needed. Add more for a faster quote.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-background/70 px-4 py-2">
                  <p className="text-[11px] text-muted-foreground">Completion</p>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${completionScore}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-medium text-foreground">
                      {completionScore}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-[12px] font-medium text-foreground">
                  Quick select
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {quickChips.map((chip) => {
                    const active = formData.solutionType === chip;

                    return (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => setSolutionChip(chip)}
                        className={[
                          "rounded-full border px-3 py-1.5 text-[12px] transition",
                          active
                            ? "border-primary/40 bg-primary/10 text-foreground"
                            : "border-border bg-background/70 text-muted-foreground hover:border-primary/30 hover:text-foreground",
                        ].join(" ")}
                      >
                        {chip}
                      </button>
                    );
                  })}
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col items-center justify-center rounded-2xl border border-border bg-background/70 px-6 py-10 text-center"
                >
                  <CheckCircle2 className="size-14 text-primary" />
                  <p className="mt-3 text-lg font-semibold text-foreground">
                    Thank you! We received your enquiry.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We’ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={errors.name ? inputClassError : inputClass}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">
                      Company Name
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company / Brand"
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">
                      Designation
                    </label>
                    <Input
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="Your role (e.g., Founder, Manager)"
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">
                      Solution Type
                    </label>
                    <div className="relative">
                      <select
                        name="solutionType"
                        value={formData.solutionType}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="">Select a solution type</option>
                        {solutionOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                        ▾
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">
                      Budget
                    </label>
                    <Input
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g., ₹50,000 - ₹2,00,000"
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">
                      Mobile Number <span className="text-destructive">*</span>
                    </label>
                    <Input
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                      className={errors.mobile ? inputClassError : inputClass}
                    />
                    {errors.mobile && (
                      <p className="text-xs text-destructive">
                        {errors.mobile}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-sm font-medium text-foreground">
                      Email ID <span className="text-destructive">*</span>
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={errors.email ? inputClassError : inputClass}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-sm font-medium text-foreground">
                      Additional Details
                    </label>
                    <Textarea
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Scope, timeline, references, links..."
                      className="min-h-[140px] rounded-md border-border bg-background/70 shadow-sm transition focus-visible:ring-2 focus-visible:ring-primary/40"
                    />
                    <p className="text-[11px] text-muted-foreground">
                      Tip: Mention location, output format (360/3D/Web), and
                      deadline.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 rounded-lg text-sm font-medium md:col-span-2"
                  >
                    <Send className="mr-2 size-4" />
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;