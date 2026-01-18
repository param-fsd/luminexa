"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  Clock,
  ShieldCheck,
} from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const inputClass =
    "h-11 rounded-md bg-background/70 border-border shadow-sm " +
    "focus-visible:ring-2 focus-visible:ring-primary/40 transition";

  const textareaClass =
    "min-h-[140px] rounded-md bg-background/70 border-border shadow-sm " +
    "focus-visible:ring-2 focus-visible:ring-primary/40 transition";

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-24">
      {/* ================= GLOBAL BACKGROUND ================= */}
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
        {/* ================= HEADER (flex-start) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl text-left"
        >
          <div className="mb-4 flex items-center gap-2">
            <Badge className="rounded-full px-4 py-1">Contact</Badge>
            <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" />
              We usually respond within 24 hours
            </span>
          </div>

          <h2 className="text-[30px] sm:text-[36px] md:text-[44px] font-bold tracking-tight text-foreground">
            Get in Touch
          </h2>

          <p className="mt-3 text-sm md:text-[14px] text-muted-foreground leading-relaxed max-w-2xl">
            Have questions or need help? Share your requirement and we’ll connect
            with the right solution, timeline, and next steps.
          </p>

          <div className="mt-6 h-1 w-32 rounded-full bg-gradient-to-r from-primary to-primary/60" />
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid gap-10 lg:grid-cols-12">
          {/* ================= CONTACT INFO ================= */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-border bg-background/60 backdrop-blur p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">
                Contact Information
              </h3>
              <p className="mt-1 text-[13px] text-muted-foreground">
                Prefer direct contact? Use the details below.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href="mailto:support@luminexa.in"
                  className="flex items-start gap-3 rounded-xl border border-border bg-background/70 p-4 hover:border-primary/30 transition"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10">
                    <Mail className="size-5 text-primary" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <p className="mt-1 text-[13px] text-muted-foreground">
                      support@luminexa.in
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+918660449970"
                  className="flex items-start gap-3 rounded-xl border border-border bg-background/70 p-4 hover:border-primary/30 transition"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10">
                    <Phone className="size-5 text-primary" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Phone</p>
                    <p className="mt-1 text-[13px] text-muted-foreground">
                      +91 86604 49970
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3 rounded-xl border border-border bg-background/70 p-4">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="size-5 text-primary" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Location
                    </p>
                    <p className="mt-1 text-[13px] text-muted-foreground">
                      1st Stage Banashankari, Bangalore, Karnataka
                    </p>
                  </div>
                </div>
              </div>

              {/* micro trust */}
              <div className="mt-6 grid gap-3">
                <div className="flex items-start gap-3 rounded-xl border border-border bg-background/70 p-4">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10">
                    <Clock className="size-5 text-primary" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Response time
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
                      Privacy-first
                    </p>
                    <p className="mt-1 text-[12.5px] text-muted-foreground">
                      We use your details only to respond to your request.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="mt-3 h-10 rounded-lg"
                    >
                      <Link href="/privacy-policy">Read Privacy Policy</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= CONTACT FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative lg:col-span-7"
          >
            <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[22px] bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-70 blur-2xl" />

            <div className="rounded-2xl border border-border bg-background/60 backdrop-blur p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">
                Send a Message
              </h3>
              <p className="mt-1 text-[13px] text-muted-foreground">
                Tell us what you’re building. We’ll reply with the next steps.
              </p>

              <form className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Your Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-medium text-foreground">
                    Your Message
                  </label>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirement..."
                    className={textareaClass}
                  />
                  <p className="text-[11px] text-muted-foreground">
                    Tip: Mention timeline, budget range, and reference links if available.
                  </p>
                </div>

                <Button
                  type="button"
                  className="md:col-span-2 h-12 rounded-lg text-sm font-medium"
                >
                  <Send className="mr-2 size-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
