"use client";

import { Moon, Sun, X, Menu, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = ({ isScrolled, mounted }) => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { 
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  // Animation variants for individual menu items
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1, // Staggered animation for each item
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 px-6 md:px-10 ${
        isScrolled ? "bg-trackground/80 shadow-sm" : "bg-transparent"
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
            className="text-sm text-white font-medium transition-colors hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="/case-studies"
            className="text-sm text-white font-medium transition-colors hover:text-foreground"
          >
            Case Studies
          </Link>
          <Link
            href="/blogs"
            className="text-sm text-white font-medium transition-colors hover:text-foreground"
          >
            Blog
          </Link>
          <Link
            href="/careers"
            className="text-sm text-white font-medium transition-colors hover:text-foreground"
          >
            Careers
          </Link>
          <Link
            href="/about-us"
            className="text-sm text-white font-medium transition-colors hover:text-foreground"
          >
            About Us
          </Link>
        </nav>
        <div className="hidden md:flex gap-4 items-center">
          <Link
            href="/faq"
            className="text-sm text-muted-foreground font-medium transition-colors hover:text-foreground"
          >
            FAQ
          </Link>
          <Link href="/getstarted">
            <Button className="rounded-full text-sm group cursor-pointer py-5">
              Get Started
              <ChevronRight className="size-4 group-hover:translate-x-1 transition-all ease-in-out duration-200 ml-1" />
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full cursor-pointer hover:bg-gray-200/50 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed top-0 inset-x-0 h-screen bg-black flex flex-col justify-start"
          >
            <div className="p-4 flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full hover:bg-gray-700/50 transition-all duration-200 active:scale-95 flex items-center justify-center"
              >
                <X className="size-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <div className="flex flex-col flex-grow pt-8 pb-4 px-6 gap-2 overflow-y-auto">
              {[
                { href: "/services", label: "Services" },
                { href: "/case-studies", label: "Case Studies" },
                { href: "/blogs", label: "Blog" },
                { href: "/careers", label: "Careers" },
                { href: "/about-us", label: "About Us" }
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={item.href}
                    className="block py-3 px-4 text-base font-medium text-white rounded-lg hover:bg-gray-700/50 hover:text-foreground transition-all duration-200 active:scale-95"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                custom={5}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-2 pt-2 border-t border-gray-700"
              >
                <Link
                  href="/faq"
                  className="block py-3 px-4 text-sm font-medium text-muted-foreground rounded-lg hover:bg-gray-700/50 hover:text-foreground transition-all duration-200 active:scale-95"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link href="/getstarted">
                  <Button
                    className="w-full rounded-full text-sm group cursor-pointer py-5 flex justify-between items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                    <ChevronRight className="size-5 group-hover:translate-x-1 transition-all ease-in-out duration-200" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                custom={6}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-2 pt-2 border-t border-gray-700"
              >
                <div className="text-sm font-medium text-muted-foreground">Follow Us</div>
                <div className="flex gap-9">
                  <motion.div
                    custom={7}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href="https://www.facebook.com/arluminexa/"
                      className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-gray-700/50 transition-all duration-200 active:scale-95"
                      onClick={() => setMobileMenuOpen(false)}
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
                        className="size-6"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </Link>
                  </motion.div>
                  <motion.div
                    custom={8}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href="https://x.com/_luminexa"
                      className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-gray-700/50 transition-all duration-200 active:scale-95"
                      onClick={() => setMobileMenuOpen(false)}
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
                        className="size-6"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                      <span className="sr-only">X</span>
                    </Link>
                  </motion.div>
                  <motion.div
                    custom={9}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href="https://www.linkedin.com/company/luminexa-technologies"
                      className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-gray-700/50 transition-all duration-200 active:scale-95"
                      onClick={() => setMobileMenuOpen(false)}
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
                        className="size-6"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </motion.div>
                  <motion.div
                    custom={10}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href="https://www.instagram.com/_luminexa"
                      className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-gray-700/50 transition-all duration-200 active:scale-95"
                      onClick={() => setMobileMenuOpen(false)}
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
                        className="size-6"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </motion.div>
                  <motion.div
                    custom={11}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href="https://www.youtube.com/@luminexaTechnologies"
                      className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-gray-700/50 transition-all duration-200 active:scale-95"
                      onClick={() => setMobileMenuOpen(false)}
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
                        className="size-6"
                      >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                      <span className="sr-only">YouTube</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;