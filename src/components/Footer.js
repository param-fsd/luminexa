"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const SocialIcon = ({ href, label, children }) => (
  <Link
    href={href}
    aria-label={label}
    className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:text-foreground hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
  >
    {children}
    <span className="sr-only">{label}</span>
  </Link>
);

const Footer = () => {
  return (
    <footer className="relative w-full bg-background pb-14 md:pb-14">
      {/* top hairline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          {/* ================= BRAND ================= */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
  {/* Left: Logo */}
  <Image
    src="/logo3.png"
    width={120}
    height={32}
    alt="Luminexa"
    className="h-7 w-auto"
  />

  {/* Right: Company details */}
  <div className="leading-tight text-[13px] text-muted-foreground">
    <p className="font-medium text-foreground">
      Luminexa Technologies Pvt Ltd
    </p>
    <p>CIN: U62099KA2025PTC204174</p>
  </div>
</div>


            <p className="text-[13px] leading-relaxed text-muted-foreground max-w-sm">
              We design and build immersive digital platforms using AR, AI,
              visualization, and modern web technologies — crafted for scale,
              clarity, and real-world impact.
            </p>

            {/* subtle metrics */}
            <div className="flex gap-6 pt-1 text-[11px] text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">50+</p>
                <p>Projects</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">10+</p>
                <p>Industries</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">100%</p>
                <p>Custom</p>
              </div>
            </div>

            {/* ================= SOCIALS ================= */}
            <div className="pt-1">
              <p className="text-[12px] font-semibold text-foreground mb-3">
                Follow us
              </p>
              <div className="flex flex-wrap gap-3">
                <SocialIcon
                  href="https://www.facebook.com/arluminexa/"
                  label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:scale-105"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </SocialIcon>

                <SocialIcon href="https://x.com/_luminexa" label="X">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:scale-105"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </SocialIcon>

                <SocialIcon
                  href="https://www.linkedin.com/company/luminexa-technologies"
                  label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:scale-105"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </SocialIcon>

                <SocialIcon
                  href="https://www.instagram.com/_luminexa"
                  label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:scale-105"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </SocialIcon>

                <SocialIcon
                  href="https://www.youtube.com/@luminexaTechnologies"
                  label="YouTube"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:scale-105"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </SocialIcon>
              </div>
            </div>
          </div>

          {/* ================= LINK GROUPS ================= */}
          {[
            {
              title: "Product",
              links: [
                { label: "Features", href: "/features" },
                { label: "nexAR", href: "/services/nexar" },
                { label: "360 Virtual Tour", href: "/services/nexnet/360-virtual-tour" },
                { label: "All Services", href: "/services" },
              ],
            },
            {
              title: "Resources",
              links: [
                { label: "Blog", href: "/blogs" },
                { label: "Support", href: "/" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/about-us" },
                { label: "Careers", href: "/careers" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Contact", href: "/contact-us" },
              ],
            },
          ].map((group) => (
            <div key={group.title} className="space-y-5">
              <h4 className="text-[14px] font-semibold text-foreground tracking-wide">
                {group.title}
              </h4>

              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute left-0 -bottom-1 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
                      </span>
                      <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-9 h-px w-full bg-border/60" />

        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-muted-foreground">
            © {new Date().getFullYear()} Luminexa Technologies Pvt Ltd. All rights reserved.
          </p>

          <div className="flex gap-5 text-[12px]">
            <Link
              href="/privacy-policy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
