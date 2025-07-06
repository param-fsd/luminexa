
"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  // Reusable FancyText component for uniform styling
  const FancyText = ({ text, className }) => {
    const words = text.split(" ");
    return (
      <>
        {words.map((word, index) => (
          <span
            key={index}
            className={`${
              index % 3 === 0
                ? "font-medium"
                : index % 3 === 1
                ? "italic font-light"
                : "font-bold"
            } ${className}`}
          >
            {word}{" "}
          </span>
        ))}
      </>
    );
  };

  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
      <div className="flex flex-col gap-8 px-4 py-10 md:px-20 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-2">
            <div className="flex items-center gap-1">
              <div className="w-24 h-6">
                <Image
                  src="/logo.png"
                  width={100}
                  height={24}
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-sm mb-1 text-muted-foreground">
              <FancyText text="Luminexa Technologies Pvt Ltd" className="text-sm" />
            </p>
            <p className="text-sm mb-1 text-muted-foreground">
              <FancyText text="CIN: U62099KA2025PTC204174" className="text-sm" />
            </p>
            <p className="text-sm text-muted-foreground">
              <FancyText
                text="Unify your digital journey with an experience-first platform built to accelerate ideas, boost efficiency, and spark engagement."
                className="text-sm"
              />
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/arluminexa/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">
                  <FancyText text="Facebook" className="text-sm" />
                </span>
              </Link>
              <Link
                href="https://x.com/_luminexa"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">
                  <FancyText text="Twitter" className="text-sm" />
                </span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/luminexa-technologies"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">
                  <FancyText text="LinkedIn" className="text-sm" />
                </span>
              </Link>
              <Link
                href="https://www.instagram.com/_luminexa"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="sr-only">
                  <FancyText text="Instagram" className="text-sm" />
                </span>
              </Link>
              <Link
                href="https://www.youtube.com/@luminexaTechnologies"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
                <span className="sr-only">
                  <FancyText text="YouTube" className="text-sm" />
                </span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg">
              <FancyText text="Product" className="font-bold" />
            </h4>
            <ul className="space-y-2 text-base">
              <li>
                <Link
                  href="/features"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FancyText text="Features" className="text-base" />
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FancyText text="Pricing" className="text-base" />
                </Link>
              </li>
              
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FancyText text="Services" className="text-base yksi" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg">
              <FancyText text="Resources" className="font-bold" />
            </h4>
            <ul className="space-y-2 text-base">
              
              <li>
                <Link
                  href="/guides"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FancyText text="Guides" className="text-base" />
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FancyText text="Blog" className="text-base" />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FancyText text="Support" className="text-base" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg">
              <FancyText text="Company" className="font-bold" />
            </h4>
            <ul className="space-y-2 text-base">
              <li>
                <Link
                  href="/about-us"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FancyText text="About" className="text-base" />
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FancyText text="Careers" className="text-base" />
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FancyText text="Privacy Policy" className="text-base" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FancyText text="Contact Us" className="text-base" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
          <p className="text-sm text-muted-foreground">
            <FancyText
              text={`© ${new Date().getFullYear()} Luminexa. All rights reserved.`}
              className="text-sm"
            />
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <FancyText text="Privacy Policy" className="text-sm" />
            </Link>
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <FancyText text="Terms of Service" className="text-sm" />
            </Link>
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <FancyText text="Cookie Policy" className="text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
