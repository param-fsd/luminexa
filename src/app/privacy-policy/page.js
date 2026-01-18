"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ShieldCheck,
  Lock,
  Share2,
  UserCheck,
  RefreshCw,
  Mail,
  Sparkles,
  Cookie,
  Database,
  Globe,
  FileText,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const PrivacyPolicy = () => {
  const sections = useMemo(
    () => [
      {
        id: "overview",
        title: "Overview",
        icon: FileText,
        content: [
          "This Privacy Policy explains how Luminexa Technologies (“we”, “us”, or “our”) collects, uses, and protects information when you visit our website, use our services, or submit an enquiry.",
          "By using our website or submitting information through our forms, you agree to the practices described in this policy.",
        ],
      },
      {
        id: "info-we-collect",
        title: "Information We Collect",
        icon: UserCheck,
        content: [
          "Information you provide directly: name, phone number, email address, company name, designation, budget range, project requirements, and any other details you choose to share in an enquiry or contact form.",
          "Technical/usage information: IP address, device type, browser type, pages viewed, and basic interaction data collected for security and analytics purposes.",
          "If you contact us via email or phone, we may keep a record of that communication to respond and improve support quality.",
        ],
      },
      {
        id: "how-we-use",
        title: "How We Use Your Information",
        icon: Sparkles,
        content: [
          "To respond to enquiries and provide proposals, estimates, demos, and consultations.",
          "To deliver and improve our services, user experience, and website performance.",
          "To communicate updates about your request, including follow-ups related to project scope or requirements.",
          "To maintain security, prevent fraud or abuse, and ensure system reliability.",
          "To comply with legal obligations where applicable.",
        ],
      },
      {
        id: "cookies-analytics",
        title: "Cookies & Analytics",
        icon: Cookie,
        content: [
          "We may use cookies or similar technologies to keep the website functional and understand how visitors interact with our pages.",
          "Analytics data is generally collected in aggregated form to improve performance, usability, and content.",
          "You can typically control cookies through your browser settings. Disabling cookies may affect certain website features.",
        ],
      },
      {
        id: "sharing",
        title: "Sharing Your Information",
        icon: Share2,
        content: [
          "We do not sell your personal information.",
          "We may share information with trusted service providers (such as hosting, email delivery, analytics, or customer support tools) only to operate and improve our services.",
          "These partners are expected to protect your data and use it only for permitted service-related purposes.",
          "We may disclose information if required by law, legal process, or to protect our rights and safety.",
        ],
      },
      {
        id: "data-retention",
        title: "Data Retention",
        icon: Database,
        content: [
          "We keep personal information only as long as needed for the purposes described in this policy (for example, to respond to your enquiry, maintain business records, or meet legal requirements).",
          "When information is no longer required, we take reasonable steps to delete or anonymize it.",
        ],
      },
      {
        id: "security",
        title: "Security Measures",
        icon: Lock,
        content: [
          "We apply reasonable administrative, technical, and organizational safeguards designed to protect your information.",
          "However, no online method of transmission or storage is 100% secure. We encourage you to avoid sharing highly sensitive personal information in forms unless necessary.",
        ],
      },
      {
        id: "international",
        title: "International Transfers",
        icon: Globe,
        content: [
          "Depending on our service providers, your data may be processed or stored in different regions.",
          "Where applicable, we take reasonable steps to ensure appropriate protections are in place when transferring or processing data.",
        ],
      },
      {
        id: "your-rights",
        title: "Your Rights",
        icon: ShieldCheck,
        content: [
          "You may request access, correction, or deletion of your personal information.",
          "You may also request that we stop contacting you for promotional messages (if any).",
          "To exercise these rights, please contact us using the support link below. We will respond within a reasonable timeframe.",
        ],
      },
      {
        id: "changes",
        title: "Changes to This Policy",
        icon: RefreshCw,
        content: [
          "We may update this policy periodically to reflect changes in our practices, technology, or legal requirements.",
          "If we make significant changes, we may post a notice on this page. We encourage you to review this policy occasionally.",
        ],
      },
    ],
    []
  );

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28">
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
        {/* ================= HEADER (LEFT / FLEX START) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl text-left mt-20"
        >
          <div className="mb-2 flex items-center gap-2">
            <Badge className="rounded-full px-4 py-1">Privacy</Badge>
            <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" />
              Transparency matters
            </span>
          </div>

          <h1 className="text-[30px] sm:text-[36px] md:text-[44px] font-bold tracking-tight text-foreground">
            Privacy Policy
          </h1>

          <p className="mt-1 text-sm md:text-[14px] text-muted-foreground leading-relaxed">
            Your privacy is important to us. This policy explains how we collect,
            use, and protect your information when you interact with Luminexa
            Technologies.
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="outline" className="rounded-full">
              Last updated: <span className="ml-1 font-medium">Jan 2026</span>
            </Badge>
            <Badge variant="outline" className="rounded-full">
              Applies to: Website • Enquiry forms • Support
            </Badge>
          </div>

          <div className="mt-6 h-1 w-32 rounded-full bg-gradient-to-r from-primary to-primary/60" />
        </motion.div>

        {/* ================= CONTENT LAYOUT ================= */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* LEFT: On this page */}
          <motion.aside
            {...fadeUp}
            transition={{ duration: 0.45 }}
            className="lg:col-span-4"
          >
            <div className="rounded-2xl border border-border bg-background/60 backdrop-blur p-5 md:p-6 shadow-sm lg:sticky lg:top-24">
              <p className="text-sm font-semibold text-foreground">On this page</p>

              <div className="mt-4 space-y-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block rounded-lg border border-border bg-background/70 px-3 py-2 text-[13px] text-muted-foreground hover:text-foreground hover:border-primary/30 transition"
                  >
                    {s.title}
                  </a>
                ))}
              </div>

              <Separator className="my-5" />

              <div className="rounded-xl border border-border bg-background/70 p-4">
                <p className="text-sm font-semibold text-foreground">Need help?</p>
                <p className="mt-1 text-[12.5px] text-muted-foreground leading-relaxed">
                  If you want to access, update, or delete your information, contact our team.
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  <Button asChild className="h-11 rounded-lg w-full">
                    <Link href="/contact-us">
                      <Mail className="mr-2 size-4" />
                      Contact Support
                    </Link>
                  </Button>

                  <Button asChild variant="outline" className="h-11 rounded-lg w-full">
                    <Link href="/">Back to Home</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* RIGHT: Sections */}
          <div className="lg:col-span-8 space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <Card className="rounded-2xl border border-border bg-background/60 backdrop-blur shadow-sm">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start gap-3">
                        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="size-5 text-primary" />
                        </span>

                        <div className="flex-1">
                          <h2 className="text-lg md:text-xl font-semibold text-foreground">
                            {section.title}
                          </h2>

                          <div className="mt-2 space-y-2">
                            {section.content.map((line, i) => (
                              <p
                                key={i}
                                className="text-[13px] md:text-[13.5px] text-muted-foreground leading-relaxed"
                              >
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}

            {/* Bottom CTA */}
            <motion.div {...fadeUp} transition={{ duration: 0.45 }}>
              <div className="rounded-2xl border border-border bg-background/60 backdrop-blur p-6 md:p-8 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Privacy requests & support
                    </h3>
                    <p className="mt-1 text-[13.5px] text-muted-foreground leading-relaxed">
                      Contact us for any privacy-related questions or requests.
                    </p>
                  </div>

                  <Button asChild className="h-11 rounded-lg px-7 w-fit">
                    <Link href="/contact-us">
                      <Mail className="mr-2 size-4" />
                      Contact Support
                    </Link>
                  </Button>
                </div>

                <Separator className="my-6" />

                <p className="text-[12px] text-muted-foreground">
                  Note: This page is for general information and does not constitute legal advice.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
