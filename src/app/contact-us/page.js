"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  Clock,
  ShieldCheck,
  MessageSquare,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const cx = (...c) => c.filter(Boolean).join(" ");

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

const InfoCard = ({ icon: Icon, title, value, href, description }) => {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href ? { href } : {})}
      className={cx(
        "group flex items-start gap-3 rounded-[16px] sm:rounded-[18px] border border-border/60 bg-background/70 p-4 sm:p-5 transition-all",
        href ? "hover:border-primary/30 hover:bg-background" : ""
      )}
    >
      <span className="inline-flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="size-5 text-primary" />
      </span>

      <div className="min-w-0">
        <p className="text-[13px] sm:text-[14px] font-semibold text-foreground">
          {title}
        </p>
        <p className="mt-1 text-[12px] sm:text-[13px] text-muted-foreground break-words">
          {value}
        </p>
        {description ? (
          <p className="mt-2 text-[11px] sm:text-[12px] leading-5 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </Wrapper>
  );
};

const TrustRow = ({ icon: Icon, title, text }) => (
  <div className="flex items-start gap-3 rounded-[16px] border border-border/60 bg-background/70 p-4">
    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 shrink-0">
      <Icon className="size-5 text-primary" />
    </span>
    <div>
      <p className="text-[13px] sm:text-[14px] font-semibold text-foreground">
        {title}
      </p>
      <p className="mt-1 text-[11px] sm:text-[12px] leading-5 text-muted-foreground">
        {text}
      </p>
    </div>
  </div>
);

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    return newErrors;
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

      await addDoc(collection(db, "contactUs"), {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        status: "new",
        source: "website contact page",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Something went wrong while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "h-11 rounded-xl border border-border/70 bg-background/70 shadow-sm transition " +
    "focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0";

  const inputClassError =
    "h-11 rounded-xl border border-destructive/60 bg-background/70 shadow-sm transition " +
    "focus-visible:ring-2 focus-visible:ring-destructive/30 focus-visible:ring-offset-0";

  const textareaClass =
    "min-h-[150px] rounded-xl border border-border/70 bg-background/70 shadow-sm transition " +
    "focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0";

  const textareaClassError =
    "min-h-[150px] rounded-xl border border-destructive/60 bg-background/70 shadow-sm transition " +
    "focus-visible:ring-2 focus-visible:ring-destructive/30 focus-visible:ring-offset-0";

  return (
    <section className="relative min-h-screen overflow-hidden py-4 sm:py-6 md:py-8">
      <SectionBg />

      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-5">
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-5 flex flex-wrap items-center gap-2 text-[11px] sm:text-[12px] text-muted-foreground"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-3" />
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Contact Us</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
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
                  Contact
                </Badge>

                <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] text-white/75">
                  <Sparkles className="size-3.5 text-white/90" />
                  We usually respond within 24 hours
                </span>
              </div>

              <h1 className="mt-3 text-[24px] leading-tight sm:text-[34px] md:text-[44px] lg:text-[52px] font-semibold tracking-[-0.04em] text-white">
                Get in Touch
              </h1>

              <p className="mt-3 max-w-2xl text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-white/80">
                Share your requirement and our team will get back to you.
              </p>

              <div className="mt-5 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-5 h-9 text-[12px] border-white/15 bg-white/5 text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <section className="mt-8 grid grid-cols-1 xl:grid-cols-[.9fr_1.1fr] gap-6 sm:gap-7 xl:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <SectionLabel icon={MessageSquare}>Contact Information</SectionLabel>

            <h2 className="mt-3 text-[20px] sm:text-[28px] md:text-[34px] font-semibold tracking-tight text-foreground">
              Contact Information
            </h2>

            <p className="mt-3 max-w-xl text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-muted-foreground">
              Reach us directly through the details below.
            </p>

            <div className="mt-6 space-y-3">
              <InfoCard
                icon={Mail}
                title="Email"
                value="support@luminexa.in"
                href="mailto:support@luminexa.in"
                description="For enquiries and project discussions."
              />

              <InfoCard
                icon={Phone}
                title="Phone"
                value="+91 86604 49970"
                href="tel:+918660449970"
                description="Call us for quick assistance."
              />

              <InfoCard
                icon={MapPin}
                title="Location"
                value="1st Stage Banashankari, Bangalore, Karnataka"
                description="Bangalore, Karnataka"
              />
            </div>

            <div className="mt-6 grid gap-3">
              <TrustRow
                icon={Clock}
                title="Response time"
                text="Within 24 hours on business days."
              />

              <TrustRow
                icon={ShieldCheck}
                title="Privacy-first"
                text="Your details are used only to respond to your enquiry."
              />
            </div>

            <div className="mt-6">
              <Button asChild variant="outline" className="rounded-full px-5">
                <Link href="/privacy-policy">
                  Read Privacy Policy
                  <ChevronRight className="size-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[28px] bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-80 blur-2xl" />

            <div className="rounded-[20px] sm:rounded-[24px] border border-border/60 bg-background/75 backdrop-blur px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 shadow-sm">
              <SectionLabel icon={Send}>Send Message</SectionLabel>

              <h2 className="mt-3 text-[20px] sm:text-[28px] md:text-[34px] font-semibold tracking-tight text-foreground">
                Send us a Message
              </h2>

              <p className="mt-3 text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-muted-foreground max-w-2xl">
                Fill in the form and we’ll get back to you shortly.
              </p>

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
                    Thank you! Your message has been sent.
                  </p>
                  <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
                    Our team will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-6 grid gap-5 md:grid-cols-2"
                >
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">
                      Your Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={errors.name ? inputClassError : inputClass}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">
                      Your Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={form.email}
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
                      Your Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirement..."
                      className={
                        errors.message ? textareaClassError : textareaClass
                      }
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">
                        {errors.message}
                      </p>
                    )}
                    <p className="text-[11px] leading-5 text-muted-foreground">
                      Mention your requirement briefly.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="md:col-span-2 h-12 rounded-xl text-sm font-medium"
                  >
                    <Send className="mr-2 size-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
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
                Ready to connect
              </p>

              <h2 className="mt-3 text-[20px] sm:text-[28px] md:text-[36px] font-semibold tracking-tight text-background">
                Ready to connect?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-background/75">
                Contact us and we’ll get back to you soon.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                <Button
                  asChild
                  variant="secondary"
                  className="rounded-full px-5 w-full sm:w-auto"
                >
                  <Link href="mailto:support@luminexa.in">Email Us</Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-5 border-background/20 bg-transparent text-background hover:bg-background/10 w-full sm:w-auto"
                >
                  <Link href="tel:+918660449970">Call Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactPage;