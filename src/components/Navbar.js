"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ChevronRight, Briefcase, Sparkles, Info, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ✅ Bottom dock visibility on scroll
  const [showDock, setShowDock] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setShowDock(y > 140); // slightly later
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, y: -16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
    exit: { opacity: 0, y: -16, transition: { duration: 0.18, ease: "easeIn" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -14 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.06, duration: 0.22, ease: "easeOut" },
    }),
  };

  // Top nav items (same as yours)
  const navItems = useMemo(
    () => [
      { href: "/services", label: "Services" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/blogs", label: "Blog" },
      { href: "/careers", label: "Careers" },
      { href: "/about-us", label: "About Us" },
    ],
    []
  );

  // ✅ Bottom dock items (smaller)
  const dockItems = useMemo(
    () => [
      { href: "/work", label: "Work", icon: Briefcase },
      { href: "/services", label: "Services", icon: Sparkles },
      { href: "/about-us", label: "About", icon: Info },
    ],
    []
  );

  return (
    <>
      {/* TOP NAVBAR */}
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 px-4 md:px-10 ${
          isScrolled ? "bg-background/80 border-b border-border shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-8 w-[120px]">
              <Image
                src="/logo.png"
                width={160}
                height={40}
                alt="Logo"
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex gap-4 items-center">
            <Link
              href="/faq"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </Link>

            <Link href="/getstarted">
              <Button className="rounded-full text-sm group py-5">
                Get Started
                <ChevronRight className="size-4 ml-1 group-hover:translate-x-1 transition-all duration-200" />
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen((s) => !s)}
              className="rounded-full"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden fixed top-0 inset-x-0 h-screen bg-background text-foreground flex flex-col"
            >
              {/* Top Bar */}
              <div className="p-4 flex items-center justify-between border-b border-border">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <div className="h-8 w-[120px]">
                    <Image
                      src="/logo.png"
                      width={160}
                      height={40}
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Link>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full"
                >
                  <X className="size-6" />
                </Button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col flex-grow pt-6 pb-4 px-6 gap-2 overflow-y-auto">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={item.href}
                      className="block py-3 px-4 text-base font-medium rounded-lg
                                 text-foreground/90 hover:text-foreground
                                 hover:bg-accent transition-all duration-200"
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
                  className="flex flex-col gap-2 pt-3 mt-2 border-t border-border"
                >
                  <Link
                    href="/faq"
                    className="block py-3 px-4 text-sm font-medium rounded-lg
                               text-muted-foreground hover:text-foreground
                               hover:bg-accent transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>

                  <Link href="/getstarted" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full rounded-full text-sm group py-5 flex justify-between items-center">
                      Get Started
                      <ChevronRight className="size-5 group-hover:translate-x-1 transition-all duration-200" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ✅ BOTTOM DOCK NAVBAR (smaller) */}
      <AnimatePresence>
        {showDock && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.985 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60]"
          >
            <div
              className="
                flex items-center gap-1.5
                rounded-full px-2.5 py-1.5
                bg-black text-white
                backdrop-blur-xl shadow-lg
                border border-white/10
              "
            >
              {/* Left logo icon (smaller) */}
              <Link
                href="/"
                className="flex items-center justify-center w-15 h-8 rounded-full hover:bg-white/10 transition"
                aria-label="Home"
              >
                <div className="relative w-6 h-6 ">
                  <Image src="/logo2.png" alt="Logo" fill className="object-contain" />
                </div>
              </Link>

              {/* Dock items (smaller text + padding) */}
              <div className="flex items-center gap-1">
                {dockItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="
                        flex items-center gap-1.5
                        px-2.5 py-1.5 rounded-full
                        text-[12px] font-medium
                        text-white/80 hover:text-white
                        hover:bg-white/10 transition
                      "
                    >
                      <Icon className="size-3.5" />
                      <span className="hidden sm:inline">{item.label}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Contact button (smaller) */}
              <Link href="/contact-us">
                <button
                  className="
                    ml-1
                    flex items-center gap-1.5
                    rounded-full px-3 py-1.5
                    bg-white
                    text-black text-[12px] font-semibold
                    transition
                  "
                >
                  <Mail className="size-3.5 " />
                  <span>Contact</span>
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
