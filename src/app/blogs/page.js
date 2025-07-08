"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const blogs = [
  {
    title: "Coming Soon",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/blog1.jpg",
    category: "Lorem",
    date: "Lorem Ipsum",
  },
  {
    title: "Coming Soon",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/blog2.jpg",
    category: "Lorem",
    date: "Lorem Ipsum",
  },
  {
    title: "Coming Soon",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/blog3.jpg",
    category: "Lorem",
    date: "Lorem Ipsum",
  },
];

const BlogPage = () => {
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
    <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
          <FancyText text="Blog" className="text-sm" />
        </Badge>
        <h2 className="text-3xl md:text-4xl tracking-tight mt-4">
          <FancyText text="Stay Updated with the Latest from Luminexa" className="font-bold" />
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          <FancyText
            text="Explore expert opinions, industry news, and practical guides to help you grow with Luminexa."
            className="md:text-lg"
          />
        </p>
      </motion.div>

      <div className="max-w-[80%] mx-auto grid gap-6 lg:grid-cols-3 lg:gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden rounded-xl shadow-lg bg-background dark:bg-muted/10 transition-transform transform hover:scale-[1.02] hover:shadow-xl py-0">
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="px-6 pb-4">
                <Badge variant="secondary" className="text-sm mb-3 px-3 py-1 rounded-full">
                  <FancyText text={blog.category} className="text-sm" />
                </Badge>
                <h3 className="text-2xl text-foreground">
                  <FancyText text={blog.title} className="font-bold" />
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  <FancyText text={blog.date} className="text-sm" />
                </p>
                <p className="text-muted-foreground mt-3">
                  <FancyText text={blog.description} className="text-base" />
                </p>
                <Link href={`/blogs/${blog.title}`}>
                  <Button
                    variant="ghost"
                    className="mt-4 text-primary font-semibold hover:underline cursor-pointer"
                  >
                    <FancyText text="Read More" className="text-base font-semibold" /> →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center border shadow-md bg-white border-gray-200 dark:border-neutral-700 p-10 rounded-lg dark:bg-[#262626] mx-auto text-center">
        <Mail className="size-10 text-primary mb-4" />
        <h3 className="text-2xl">
          <FancyText text="Subscribe to Our Journey" className="font-semibold" />
        </h3>
        <p className="text-muted-foreground mt-2 mb-4">
          <FancyText
            text="Get the latest Luminexa insights delivered straight to your inbox."
            className="text-base"
          />
        </p>
        <div className="flex w-full max-w-md gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 text-base h-12"
          />
          <Button className="h-12 text-base cursor-pointer">
            <FancyText text="Subscribe" className="text-base" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;