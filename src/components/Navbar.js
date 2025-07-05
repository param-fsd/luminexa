
"use client";

import { Moon, Sun, X, Menu, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = ({ isScrolled, mounted }) => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 px-10 ${
        isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex h-16 items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <div className="size-30">
              <Image
                src="/logo.png"
                width={100}
                height={32}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link
            href="/services"
            className="text-base text-muted-foreground transition-colors hover:text-foreground"
          >
            <FancyText text="Services" className="text-base font-medium" />
          </Link>
          <Link
            href="/blog"
            className="text-base text-muted-foreground transition-colors hover:text-foreground"
          >
            <FancyText text="Blog" className="text-base font-medium" />
          </Link>
          <Link
            href="/nex"
            className="text-base text-muted-foreground transition-colors hover:text-foreground"
          >
            <FancyText text="nex" className="text-base font-medium" />
          </Link>
          <Link
            href="/testimonials"
            className="text-base text-muted-foreground transition-colors hover:text-foreground"
          >
            <FancyText text="Testimonials" className="text-base font-medium" />
          </Link>
          <Link
            href="/about"
            className="text-base text-muted-foreground transition-colors hover:text-foreground"
          >
            <FancyText text="About Us" className="text-base font-medium" />
          </Link>
          <Link
            href="/careers"
            className="text-base text-muted-foreground transition-colors hover:text-foreground"
          >
            <FancyText text="Careers" className="text-base font-medium" />
          </Link>
        </nav>
        <div className="hidden md:flex gap-4 items-center">
          <Link
            href="/login"
            className="text-base text-muted-foreground transition-colors hover:text-foreground"
          >
            <FancyText text="FAQ" className="text-base font-medium" />
          </Link>
          <Link href={`/signup`}>
            <Button className="rounded-full text-base group cursor-pointer py-5">
              <FancyText text="Get Started" className="text-base" />
              <ChevronRight className="size-4 group-hover:translate-x-1 transition-all ease-in-out duration-200 ml-1" />
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full cursor-pointer"
          >
            {mounted && theme === "dark" ? (
              <Sun className="size-[18px]" />
            ) : (
              <Moon className="size-[18px]" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
            <span className="sr-only">
              <FancyText text="Toggle menu" className="text-sm" />
            </span>
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 inset-x-0 bg-white dark:bg-[#262626] border-b"
        >
          <div className="py-4 px-5 flex flex-col gap-4">
            <Link
              href="/services"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FancyText text="Services" className="text-sm font-medium" />
            </Link>
            <Link
              href="/blog"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FancyText text="Blog" className="text-sm font-medium" />
            </Link>
            <Link
              href="/pricing"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FancyText text="Pricing" className="text-sm font-medium" />
            </Link>
            <Link
              href="/nex"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FancyText text="nex" className="text-sm font-medium" />
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Link
                href="/faq"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FancyText text="FAQ" className="text-sm font-medium" />
              </Link>
              <Link href={`/signup`}>
                <Button className="rounded-full">
                  <FancyText text="Get Started" className="text-sm" />
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
