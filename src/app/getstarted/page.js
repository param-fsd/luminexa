"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Send,
  CheckCircle2,
  Sparkles,
  Clock,
  ShieldCheck,
  ChevronRight,
  Rocket,
  ArrowUpRight,
  Layers,
  Briefcase,
  Phone,
  Mail,
  User2,
  Building2,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

const SectionBg = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-background" />
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.14) 1px, transparent 1px)",
        backgroundSize: "58px 58px",
      }}
    />
    <div className="absolute -top-24 -left-24 h-[340px] w-[340px] rounded-full bg-primary/10 blur-3xl" />
    <div className="absolute -bottom-24 -right-20 h-[380px] w-[380px] rounded-full bg-secondary/10 blur-3xl" />
  </div>
);

const SectionLabel = ({ icon: Icon, children }) => (
  <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
    {Icon ? <Icon className="size-3.5 text-primary" /> : null}
    <span>{children}</span>
  </div>
);

const DetailItem = ({ title, desc, icon: Icon }) => (
  <div className="flex items-start gap-3 rounded-[16px] border border-border/60 bg-background/70 p-4">
    <span className="mt-0.5 inline-flex size-9 items-center justify-center rounded-xl bg-primary/10 shrink-0">
      <Icon className="size-4 text-primary" />
    </span>
    <div>
      <p className="text-[13px] sm:text-[14px] font-medium text-foreground">
        {title}
      </p>
      <p className="mt-1 text-[11px] sm:text-[12px] leading-5 text-muted-foreground">
        {desc}
      </p>
    </div>
  </div>
);

const StatCard = ({ label, value }) => (
  <div className="rounded-[18px] sm:rounded-[20px] border border-border/60 bg-background/70 px-4 py-3">
    <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
      {label}
    </p>
    <p className="mt-1 text-[14px] sm:text-[16px] font-semibold text-foreground">
      {value}
    </p>
  </div>
);

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

  const quickTags = useMemo(
    () => [
      "Requirement Intake",
      "Scope-Based Planning",
      "Proposal Ready",
      "Professional Discussion",
    ],
    []
  );

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const setSolutionChip = (value) => {
    setFormData((prev) => ({ ...prev, solutionType: value }));
    setErrors((prev) => ({ ...prev, solutionType: "" }));
  };

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
    "h-11 rounded-xl border border-border/70 bg-background/80 shadow-sm transition focus-visible:ring-2 focus-visible:ring-primary/30";

  const inputClassError =
    "h-11 rounded-xl border border-destructive/60 bg-background/80 shadow-sm transition focus-visible:ring-2 focus-visible:ring-destructive/30";

  const textareaClass =
    "min-h-[150px] rounded-xl border border-border/70 bg-background/80 shadow-sm transition focus-visible:ring-2 focus-visible:ring-primary/30";

  const selectClass = cx(
    "h-11 w-full rounded-xl border border-border/70 bg-background/80 px-3 text-sm shadow-sm transition",
    "focus:outline-none focus:ring-2 focus:ring-primary/30"
  );

  return (
    <section className="relative min-h-screen overflow-hidden py-4 sm:py-6 md:py-8">
      <SectionBg />

      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-5">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[26px] border border-border/60 bg-gradient-to-br from-foreground to-foreground/90 text-background"
        >
          <div className="absolute inset-0 opacity-[0.08]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />
          </div>

          <div className="relative z-10 px-4 py-6 sm:px-6 sm:py-7 md:px-8 md:py-8 lg:px-10 lg:py-10">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur">
                  Enquiry
                </Badge>

                <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] text-white/75">
                  <Sparkles className="size-3.5 text-white/90" />
                  Professional requirement intake
                </span>
              </div>

              <h2 className="mt-3 text-[24px] leading-tight sm:text-[34px] md:text-[44px] lg:text-[52px] font-semibold tracking-[-0.04em] text-white">
                Let’s discuss your requirement clearly.
              </h2>

              <p className="mt-3 max-w-2xl text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-white/80">
                Share your project details, expected scope, and priorities. This
                helps us suggest the right solution, estimate effort properly,
                and move ahead with a cleaner proposal flow.
              </p>

              <div className="mt-5 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                <Button
                  asChild
                  className="rounded-full px-5 h-9 text-[12px] w-full sm:w-auto"
                >
                  <a href="#enquiry-form">
                    Submit Enquiry
                    <ArrowUpRight className="size-4 ml-2" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-5 h-9 text-[12px] border-white/15 bg-white/5 text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  <a href="#project-guidance">Project Guidance</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <section className="mt-4 grid grid-cols-1 lg:grid-cols-[.9fr_1.1fr] gap-3 sm:gap-4">
          <div className="rounded-[18px] sm:rounded-[22px] border border-border/60 bg-background/70 px-3 py-3 sm:px-5 sm:py-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div>
                <div className="text-[15px] sm:text-[22px] md:text-[26px] font-semibold tracking-tight text-foreground">
                  24h
                </div>
                <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Response Window
                </div>
              </div>

              <div>
                <div className="text-[15px] sm:text-[22px] md:text-[26px] font-semibold tracking-tight text-foreground">
                  Clear
                </div>
                <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Scope Review
                </div>
              </div>

              <div>
                <div className="text-[15px] sm:text-[22px] md:text-[26px] font-semibold tracking-tight text-foreground">
                  Ready
                </div>
                <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Proposal Flow
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[18px] sm:rounded-[22px] border border-border/60 bg-background/70 px-3 py-3 sm:px-5 sm:py-4 flex flex-wrap gap-2">
            {quickTags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full border border-border bg-muted/20 px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 xl:grid-cols-[.9fr_1.1fr] gap-6 sm:gap-7 xl:gap-10 items-start">
          <motion.div
            id="project-guidance"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <SectionLabel icon={Rocket}>Project Guidance</SectionLabel>

            <h3 className="mt-3 text-[20px] sm:text-[28px] md:text-[34px] font-semibold tracking-tight text-foreground">
              Better inputs help us respond better.
            </h3>

            <div className="mt-6 space-y-3">
              <DetailItem
                icon={Clock}
                title="Quick response timeline"
                desc="Most enquiries are reviewed within one business day."
              />

              <DetailItem
                icon={ShieldCheck}
                title="Accurate scope understanding"
                desc="Project type, budget, and timeline help us estimate more precisely."
              />

              <DetailItem
                icon={Sparkles}
                title="Cleaner discussion flow"
                desc="When the basics are already shared, the next conversation stays focused and productive."
              />
            </div>

            <div className="mt-6 rounded-[18px] sm:rounded-[22px] border border-border/60 bg-background/70 p-4 sm:p-5">
              <SectionLabel icon={Layers}>Helpful Details</SectionLabel>

              <div className="mt-4 space-y-2.5">
                {[
                  "What service or solution you are looking for",
                  "Expected budget range if available",
                  "Timeline, milestone, or deadline",
                  "Any references, examples, or links",
                  "Specific deliverables you expect",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <ChevronRight className="mt-0.5 size-4 text-primary shrink-0" />
                    <span className="text-[11px] sm:text-[12px] leading-5 text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <StatCard label="Response" value="Within 24 Hours" />
              <StatCard label="Approach" value="Scope-Based Planning" />
              <StatCard label="Output" value="Clean Proposal Flow" />
            </div>
          </motion.div>

          <motion.div
            id="enquiry-form"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[28px] bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-2xl opacity-80" />

            <div className="rounded-[20px] sm:rounded-[24px] border border-border/60 bg-background/75 backdrop-blur px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <SectionLabel icon={Sparkles}>Project Details</SectionLabel>
                  <h3 className="mt-3 text-[20px] sm:text-[28px] md:text-[34px] font-semibold tracking-tight text-foreground">
                    Tell us about your project.
                  </h3>
                  <p className="mt-2 text-[11px] sm:text-[13px] leading-5 sm:leading-6 text-muted-foreground max-w-2xl">
                    Fill in the essentials and we’ll take it forward from there
                    with the right next steps.
                  </p>
                </div>

                <div className="rounded-[16px] border border-border/60 bg-background/80 px-4 py-3 w-full sm:w-auto">
                  <p className="text-[11px] text-muted-foreground">Completion</p>
                  <div className="mt-1.5 flex items-center gap-2">
                    <div className="h-2 w-full sm:w-24 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${completionScore}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-medium text-foreground shrink-0">
                      {completionScore}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-[18px] border border-border/60 bg-muted/20 p-4">
                <p className="text-[12px] font-medium text-foreground">
                  Quick select
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {quickChips.map((chip) => {
                    const active = formData.solutionType === chip;

                    return (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => setSolutionChip(chip)}
                        className={cx(
                          "rounded-full border px-3 py-1.5 text-[12px] transition",
                          active
                            ? "border-primary/40 bg-primary/10 text-foreground"
                            : "border-border bg-background/80 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                        )}
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
                  className="mt-6 rounded-[20px] border border-border/60 bg-background/80 px-6 py-10 text-center"
                >
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="size-9 text-primary" />
                  </div>
                  <p className="mt-4 text-[18px] font-semibold text-foreground">
                    Thank you! We received your enquiry.
                  </p>
                  <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
                    Our team will get back to you shortly with the next steps.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-6 grid gap-4 md:grid-cols-2"
                >
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <User2 className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={cx(
                          "pl-9",
                          errors.name ? inputClassError : inputClass
                        )}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building2 className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company / Brand"
                        className={cx(inputClass, "pl-9")}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">
                      Designation
                    </label>
                    <div className="relative">
                      <Briefcase className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        placeholder="Founder, Manager, etc."
                        className={cx(inputClass, "pl-9")}
                      />
                    </div>
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
                      placeholder="e.g. ₹50,000 - ₹2,00,000"
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">
                      Mobile Number <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Enter mobile number"
                        className={cx(
                          "pl-9",
                          errors.mobile ? inputClassError : inputClass
                        )}
                      />
                    </div>
                    {errors.mobile && (
                      <p className="text-xs text-destructive">{errors.mobile}</p>
                    )}
                  </div>

                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-sm font-medium text-foreground">
                      Email ID <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={cx(
                          "pl-9",
                          errors.email ? inputClassError : inputClass
                        )}
                      />
                    </div>
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
                      placeholder="Scope, references, timeline, expected deliverables..."
                      className={textareaClass}
                    />
                    <p className="text-[11px] leading-5 text-muted-foreground">
                      Mention scope, deadline, location, output type, or any
                      reference links.
                    </p>
                  </div>

                  <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-[16px] border border-border/60 bg-muted/20 p-4">
                      <p className="text-[12px] font-medium text-foreground">
                        What happens next?
                      </p>
                      <div className="mt-3 space-y-2.5">
                        {[
                          "We review your enquiry",
                          "We understand the scope and priority",
                          "We respond with the next steps",
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-2.5">
                            <CheckCircle2 className="size-4 mt-0.5 text-primary shrink-0" />
                            <span className="text-[11px] sm:text-[12px] leading-5 text-muted-foreground">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[16px] border border-border/60 bg-muted/20 p-4">
                      <p className="text-[12px] font-medium text-foreground">
                        Best details to include
                      </p>
                      <div className="mt-3 space-y-2.5">
                        {[
                          "Required service or solution",
                          "Expected timeline",
                          "Approximate budget range",
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-2.5">
                            <CheckCircle2 className="size-4 mt-0.5 text-primary shrink-0" />
                            <span className="text-[11px] sm:text-[12px] leading-5 text-muted-foreground">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 rounded-xl text-sm font-medium md:col-span-2"
                  >
                    <Send className="mr-2 size-4" />
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </Button>

                  <div className="md:col-span-2 flex items-center gap-2 text-[11px] leading-5 text-muted-foreground">
                    <ArrowUpRight className="size-3.5 text-primary shrink-0" />
                    Your details help us prepare a cleaner and more accurate
                    next-step discussion.
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </section>

        <section className="mt-14 mb-6">
          <div className="relative overflow-hidden rounded-[20px] sm:rounded-[26px] border border-border/60 bg-foreground text-background">
            <div className="absolute inset-0 opacity-[0.06]">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />
            </div>

            <div className="relative z-10 px-4 py-6 sm:px-6 md:px-8 md:py-9 text-center">
              <p className="text-[10px] sm:text-[12px] uppercase tracking-[0.18em] text-background/70">
                Ready to move ahead
              </p>

              <h2 className="mt-3 text-[20px] sm:text-[28px] md:text-[36px] font-semibold tracking-tight text-background">
                Start with a clear enquiry and let’s take it forward.
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-background/75">
                Share your project requirement, expected scope, and timeline. We’ll
                review it and guide you with the right next steps.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                <Button
                  asChild
                  variant="secondary"
                  className="rounded-full px-5 w-full sm:w-auto"
                >
                  <a href="#enquiry-form">Submit Enquiry</a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-5 border-background/20 bg-transparent text-background hover:bg-background/10 w-full sm:w-auto"
                >
                  <a href="#project-guidance">View Guidance</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default EnquiryForm;