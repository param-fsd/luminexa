"use client";

import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import sanitizeHtml from "sanitize-html";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Play,
  ShieldCheck,
  Cpu,
  Layers,
  HelpCircle,
  Rocket,
  MapPinned,
  Image as ImageIcon,
  BadgeInfo,
  ScanSearch,
  Mountain,
  Box,
  CheckCircle2,
  Quote,
  ChevronRight,
} from "lucide-react";
import services from "@/data/serviceData";

const cx = (...c) => c.filter(Boolean).join(" ");

const iconMap = {
  MapPinned,
  Image: ImageIcon,
  BadgeInfo,
  ScanSearch,
  Mountain,
  Box,
};

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

const FeatureRow = ({ feature, reverse = false }) => {
  const Icon = iconMap[feature.icon] || Layers;

  return (
    <div
      className={cx(
        "grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 items-center",
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      )}
    >
      <div>
        <SectionLabel icon={Icon}>Feature</SectionLabel>
        <h3 className="mt-3 text-[17px] sm:text-[22px] md:text-[26px] font-semibold tracking-tight text-foreground">
          {feature.title}
        </h3>
        <p className="mt-3 text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-muted-foreground max-w-xl">
          {feature.description}
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[18px] sm:rounded-[22px] border border-border/60 bg-muted/20">
        {feature.image ? (
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
          </div>
        ) : (
          <div className="aspect-[4/3] w-full flex items-center justify-center bg-muted/20">
            <Icon className="size-10 text-primary/70" />
          </div>
        )}
      </div>
    </div>
  );
};

const DemoWide = ({ demo, index, title }) => (
  <div className="grid grid-cols-1 xl:grid-cols-[1.08fr_.92fr] gap-4 sm:gap-5 xl:gap-8 items-start">
    <div className="overflow-hidden rounded-[18px] sm:rounded-[22px] border border-border/60 bg-muted/20">
      <div className="aspect-video">
        <video
          src={demo.url}
          poster={demo.poster}
          controls
          className="w-full h-full"
          aria-label={`Demo ${index + 1} for ${title}`}
        />
      </div>
    </div>

    <div className="pt-1">
      <SectionLabel icon={Play}>Demo {index + 1}</SectionLabel>
      <h3 className="mt-3 text-[18px] sm:text-[22px] md:text-[26px] font-semibold tracking-tight text-foreground">
        {demo.title || `${title} Demo`}
      </h3>
      {demo.description ? (
        <p className="mt-3 text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-muted-foreground">
          {demo.description}
        </p>
      ) : null}
    </div>
  </div>
);

const ProcessLine = ({ step, last }) => (
  <div className="relative pl-9 sm:pl-10">
    <div className="absolute left-0 top-0 flex flex-col items-center">
      <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-border bg-background text-[10px] sm:text-[11px] font-semibold text-primary flex items-center justify-center">
        {step.step}
      </div>
      {!last ? <div className="mt-2 h-14 sm:h-16 w-px bg-border" /> : null}
    </div>

    <div className="pb-6">
      <div className="text-[14px] sm:text-[17px] font-semibold text-foreground">
        {step.title}
      </div>
      <p className="mt-2 text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-muted-foreground max-w-2xl">
        {step.description}
      </p>
    </div>
  </div>
);

const FAQRow = ({ faq }) => (
  <div className="py-4 border-b border-border/70 last:border-b-0">
    <h3 className="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-foreground">
      {faq.question}
    </h3>
    <p className="mt-2 text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-muted-foreground max-w-3xl">
      {faq.answer}
    </p>
  </div>
);

const ImageStrip = ({ images, title }) => {
  if (!images?.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
      {images.map((img, index) => (
        <div
          key={`${img}-${index}`}
          className="overflow-hidden rounded-[16px] sm:rounded-[20px] border border-border/50 bg-muted/20 p-2 sm:p-3"
        >
          <Image
            src={img}
            alt={`${title} gallery ${index + 1}`}
            width={1200}
            height={800}
            className="w-full h-auto rounded-[10px] sm:rounded-[14px] object-contain transition-transform duration-500 hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
};

const SubServiceDetails = () => {
  const params = useParams();
  const slug = params?.slug;
  const subSlug = params?.subSlug;

  const service = useMemo(() => services.find((s) => s.slug === slug), [slug]);

  const subService = useMemo(
    () => service?.subServices?.find((ss) => ss.subSlug === subSlug),
    [service, subSlug]
  );

  if (!service || !subService) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <p className="text-base text-foreground">Sub-service not found</p>
      </div>
    );
  }

  const heroImage =
    subService.heroImage ||
    subService.image ||
    service.image ||
    "/placeholder.jpg";

  const sanitizedOverview = sanitizeHtml(subService.overview || "", {
    allowedTags: ["p", "b", "i", "em", "strong", "a", "ul", "li", "ol", "br"],
    allowedAttributes: { a: ["href", "target", "rel"] },
  });

  const fallbackStats = [
    { value: "Secure", label: "Delivery" },
    { value: "Fast", label: "Experience" },
    { value: "Scalable", label: "Growth" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden py-4 sm:py-6 md:py-8">
      <SectionBg />

      <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-5">
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-5 flex flex-wrap items-center gap-2 text-[11px] sm:text-[12px] text-muted-foreground"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-3" />
            Services
          </Link>
          <span>/</span>
          <Link
            href={`/services/${service.slug}`}
            className="hover:text-foreground transition-colors"
          >
            {service.title}
          </Link>
          <span>/</span>
          <span className="text-foreground">{subService.title}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[26px] border border-border/60"
        >
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={subService.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 to-black/70" />
          <div className="absolute inset-0 ring-1 ring-white/10 rounded-[20px] sm:rounded-[24px] md:rounded-[26px]" />

          <div className="relative z-10 px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 min-h-[260px] sm:min-h-[320px] md:min-h-[380px] flex flex-col justify-end">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur">
                  {subService.heroBadge || service.label || "Service"}
                </Badge>
              </div>

              <h1 className="mt-3 text-[22px] leading-tight sm:text-[32px] md:text-[44px] lg:text-[52px] font-semibold tracking-[-0.04em] text-white">
                {subService.title}
              </h1>

              <p className="mt-3 max-w-xl text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-white/82">
                {subService.description}
              </p>

              <div className="mt-5 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                <Button
                  asChild
                  className="rounded-full px-5 h-9 text-[12px] w-full sm:w-auto"
                >
                  <Link href={subService.cta?.primaryLink || "/contact-us"}>
                    {subService.cta?.primaryText || "Book Demo"}
                    <ArrowUpRight className="size-4 ml-2" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-5 h-9 text-[12px] border-white/15 bg-white/5 text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  <Link href={subService.cta?.secondaryLink || "/portfolio"}>
                    {subService.cta?.secondaryText || "Portfolio"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {(subService.stats?.length || subService.highlightTags?.length) && (
          <section className="mt-4 grid grid-cols-1 lg:grid-cols-[.9fr_1.1fr] gap-3 sm:gap-4">
            {(subService.stats?.length ? subService.stats : fallbackStats)
              ?.length ? (
              <div className="rounded-[18px] sm:rounded-[22px] border border-border/60 bg-background/70 px-3 py-3 sm:px-5 sm:py-4">
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {(subService.stats?.length
                    ? subService.stats
                    : fallbackStats
                  ).map((stat, index) => (
                    <div key={`${stat.label}-${index}`}>
                      <div className="text-[15px] sm:text-[22px] md:text-[26px] font-semibold tracking-tight text-foreground">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {subService.highlightTags?.length ? (
              <div className="rounded-[18px] sm:rounded-[22px] border border-border/60 bg-background/70 px-3 py-3 sm:px-5 sm:py-4 flex flex-wrap gap-2">
                {subService.highlightTags.map((tag, index) => (
                  <span
                    key={`${tag}-${index}`}
                    className="rounded-full border border-border bg-muted/20 px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </section>
        )}

        <section className="mt-8 grid grid-cols-1 xl:grid-cols-[1.2fr_.8fr] gap-6 sm:gap-7 xl:gap-10 items-start">
          <div>
            <SectionLabel icon={Layers}>Overview</SectionLabel>
            <h2 className="mt-3 text-[20px] sm:text-[28px] md:text-[34px] font-semibold tracking-tight text-foreground">
              Driving Innovation Through Technology
            </h2>

            <article
              className="prose prose-sm dark:prose-invert max-w-none mt-4 text-[11px] sm:text-[13px] leading-5 sm:leading-6"
              dangerouslySetInnerHTML={{ __html: sanitizedOverview }}
            />
          </div>

          <div className="xl:border-l border-border/70 pt-1 xl:pt-0 xl:pl-8">
            <SectionLabel icon={Sparkles}>Highlights</SectionLabel>
            <div className="mt-4 space-y-3">
              {(subService.highlightTags?.length
                ? subService.highlightTags
                : ["Responsive", "Scalable", "Modern Experience", "Business Ready"]
              ).map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-[11px] sm:text-[13px] md:text-[14px] text-muted-foreground leading-5 sm:leading-6">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {subService.gallery?.length ? (
          <section className="mt-10">
            <SectionLabel icon={ImageIcon}>Gallery</SectionLabel>
            <div className="mt-4">
              <ImageStrip images={subService.gallery} title={subService.title} />
            </div>
          </section>
        ) : null}

        {subService.features?.length ? (
          <section className="mt-12 space-y-10">
            <div>
              <SectionLabel icon={ShieldCheck}>Features</SectionLabel>
              <h2 className="mt-3 text-[20px] sm:text-[28px] md:text-[34px] font-semibold tracking-tight text-foreground">
                Engineered for Excellence
              </h2>
            </div>

            {subService.features.map((feature, index) => (
              <FeatureRow
                key={index}
                feature={feature}
                reverse={index % 2 === 1}
              />
            ))}
          </section>
        ) : null}

        {subService.demos?.length ? (
          <section className="mt-12 space-y-8">
            <div>
              <SectionLabel icon={Play}>Demo</SectionLabel>
              <h2 className="mt-3 text-[20px] sm:text-[28px] md:text-[34px] font-semibold tracking-tight text-foreground">
                See the experience in motion.
              </h2>
            </div>

            {subService.demos.map((demo, index) => (
              <DemoWide
                key={index}
                demo={demo}
                index={index}
                title={subService.title}
              />
            ))}
          </section>
        ) : null}

        {subService.benefits?.length ? (
          <section className="mt-12">
            <SectionLabel icon={Sparkles}>Benefits</SectionLabel>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
              {subService.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 py-0.5">
                  <CheckCircle2 className="size-4 text-primary mt-1 shrink-0" />
                  <span className="text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-muted-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-12 grid grid-cols-1 xl:grid-cols-[.95fr_1.05fr] gap-8 sm:gap-10 xl:gap-12">
          {subService.workflow?.length ? (
            <div>
              <SectionLabel icon={Rocket}>Process</SectionLabel>
              <h2 className="mt-3 text-[20px] sm:text-[28px] md:text-[34px] font-semibold tracking-tight text-foreground">
                A simple delivery flow.
              </h2>

              <div className="mt-6">
                {subService.workflow.map((step, index) => (
                  <ProcessLine
                    key={index}
                    step={step}
                    last={index === subService.workflow.length - 1}
                  />
                ))}
              </div>
            </div>
          ) : null}

          {(subService.technologies?.length || subService.deliverables?.length) && (
            <div>
              {subService.technologies?.length ? (
                <>
                  <SectionLabel icon={Cpu}>Technology</SectionLabel>
                  <h2 className="mt-3 text-[20px] sm:text-[28px] md:text-[34px] font-semibold tracking-tight text-foreground">
                    Built with the right stack.
                  </h2>

                  <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                    {subService.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-border bg-muted/20 px-3 sm:px-4 py-2 text-[10px] sm:text-[12px] text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              ) : null}

              {subService.deliverables?.length ? (
                <div className={subService.technologies?.length ? "mt-8" : ""}>
                  <SectionLabel icon={ChevronRight}>Deliverables</SectionLabel>
                  <div className="mt-4 space-y-2.5">
                    {subService.deliverables.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <ChevronRight className="size-4 text-primary mt-1 shrink-0" />
                        <span className="text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-muted-foreground">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </section>

        {subService.caseStudies?.length ? (
          <section className="mt-12 space-y-6">
            <div>
              <SectionLabel icon={Rocket}>Case Study</SectionLabel>
              <h2 className="mt-3 text-[20px] sm:text-[28px] md:text-[34px] font-semibold tracking-tight text-foreground">
                Practical outcomes, presented clearly.
              </h2>
            </div>

            {subService.caseStudies.map((study, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] overflow-hidden rounded-[18px] sm:rounded-[24px] border border-border/60 bg-muted/20"
              >
                <div className="relative min-h-[200px] sm:min-h-[240px]">
                  {study.image ? (
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center">
                      <Rocket className="size-10 text-primary/70" />
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                  <SectionLabel icon={Rocket}>Result</SectionLabel>
                  <h3 className="mt-3 text-[17px] sm:text-[22px] md:text-[28px] font-semibold tracking-tight text-foreground">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-muted-foreground">
                    {study.description}
                  </p>

                  {study.result ? (
                    <div className="mt-5 inline-flex w-fit rounded-full border border-border bg-background px-4 py-2 text-[10px] sm:text-[12px] text-foreground">
                      {study.result}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </section>
        ) : null}

        {subService.testimonial ? (
          <section className="mt-12">
            <div className="rounded-[20px] sm:rounded-[24px] border border-border/60 bg-muted/20 px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8">
              <SectionLabel icon={Quote}>Testimonial</SectionLabel>
              <p className="mt-4 max-w-4xl text-[16px] sm:text-[22px] md:text-[28px] leading-[1.4] tracking-tight text-foreground">
                “{subService.testimonial.quote}”
              </p>
              <div className="mt-5">
                <div className="text-[13px] font-medium text-foreground">
                  {subService.testimonial.name}
                </div>
                {subService.testimonial.company ? (
                  <div className="text-[10px] sm:text-[12px] uppercase tracking-[0.14em] text-muted-foreground mt-1">
                    {subService.testimonial.company}
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}

        {subService.faqs?.length ? (
          <section className="mt-12">
            <SectionLabel icon={HelpCircle}>FAQs</SectionLabel>
            <h2 className="mt-3 text-[20px] sm:text-[28px] md:text-[34px] font-semibold tracking-tight text-foreground">
              Common questions.
            </h2>

            <div className="mt-6 rounded-[18px] sm:rounded-[22px] border border-border/60 bg-background/50 px-4 sm:px-6 md:px-7">
              {subService.faqs.map((faq, index) => (
                <FAQRow key={index} faq={faq} />
              ))}
            </div>
          </section>
        ) : null}

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
                Ready to move forward
              </p>

              <h2 className="mt-3 text-[20px] sm:text-[28px] md:text-[36px] font-semibold tracking-tight text-background">
                {subService.cta?.title || `Start with ${subService.title}`}
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-[11px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-6 text-background/75">
                {subService.cta?.description ||
                  `Build a more refined and modern presentation with ${subService.title}.`}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                <Button
                  asChild
                  variant="secondary"
                  className="rounded-full px-5 w-full sm:w-auto"
                >
                  <Link href={subService.cta?.primaryLink || "/contact-us"}>
                    {subService.cta?.primaryText || "Get Started"}
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-5 border-background/20 bg-transparent text-background hover:bg-background/10 w-full sm:w-auto"
                >
                  <Link href={subService.cta?.secondaryLink || "/portfolio"}>
                    {subService.cta?.secondaryText || "View Portfolio"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SubServiceDetails;