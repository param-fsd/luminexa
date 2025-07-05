
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Mail, Calendar, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const blogPost = {
  title: "The Future of SaaS: Trends to Watch in 2025",
  description:
    "Discover the latest trends shaping the SaaS industry in 2025 and beyond.",
  image: "/blog1.jpg",
  category: "Trends",
  date: "March 30, 2025",
  author: "John Doe",
  content: `
    <h2>Introduction</h2>
    <p>The SaaS industry is evolving rapidly, with new technologies and trends shaping the future.</p>
    
    <h2>AI and Automation</h2>
    <p>AI-powered solutions are making SaaS platforms smarter and more efficient.</p>
    
    <h2>Subscription Models</h2>
    <p>The rise of flexible subscription plans and user-centric pricing is revolutionizing the market.</p>
    
    <h2>Conclusion</h2>
    <p>The SaaS industry is on an exciting trajectory, and staying ahead of these trends will be crucial for businesses.</p>
  `,
};

const relatedBlogs = [
  {
    title: "5 SaaS Marketing Strategies You Need to Know",
    category: "Marketing",
    date: "March 28, 2025",
  },
  {
    title: "Top 10 SaaS Tools for Business Growth in 2025",
    category: "Tools",
    date: "March 26, 2025",
  },
  {
    title: "Why Customer Success is Crucial for SaaS Businesses",
    category: "Customer Success",
    date: "March 22, 2025",
  },
];

const BlogDetails = () => {
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

  // Parse blog content to apply FancyText to <p> and <h2> elements
  const parseContentWithFancyText = (content) => {
    return content.replace(
      /<h2>(.*?)<\/h2>|<p>(.*?)<\/p>/g,
      (match, h2Text, pText) => {
        if (h2Text) {
          return `<h2><span class="font-bold">${h2Text
            .split(" ")
            .map(
              (word, index) =>
                `<span class="${
                  index % 3 === 0
                    ? "font-bold"
                    : index % 3 === 1
                    ? "italic font-light"
                    : "font-medium"
                }">${word} </span>`
            )
            .join("")}</span></h2>`;
        }
        if (pText) {
          return `<p><span class="text-base">${pText
            .split(" ")
            .map(
              (word, index) =>
                `<span class="${
                  index % 3 === 0
                    ? "font-bold"
                    : index % 3 === 1
                    ? "italic font-light"
                    : "font-medium"
                }">${word} </span>`
            )
            .join("")}</span></p>`;
        }
        return match;
      }
    );
  };

  return (
    <section className="w-full min-h-screen py-20 px-6 md:px-10 bg-muted/30 dark:bg-black flex justify-between gap-8 max-md:flex-col">
      <div className="w-[70%] max-md:w-full">
        {/* Hero Section */}
        <div className="relative w-full mx-auto text-center">
          <motion.div
            className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              layout="fill"
              objectFit="cover"
              priority
            />
          </motion.div>
          <Badge className="absolute top-4 left-4 text-sm px-3 py-1 rounded-full bg-primary text-white">
            <FancyText text={blogPost.category} className="text-sm" />
          </Badge>
        </div>

        {/* Blog Content */}
        <div className="max-w-3xl mx-auto mt-8">
          <h1 className="text-4xl text-center">
            <FancyText text={blogPost.title} className="font-bold" />
          </h1>
          <div className="flex justify-center items-center gap-4 text-muted-foreground text-sm mt-3">
            <Calendar className="size-4" />
            <span>
              <FancyText text={blogPost.date} className="text-sm" />
            </span>
            <span className="mx-2">•</span>
            <span>
              <FancyText text={`By ${blogPost.author}`} className="text-sm" />
            </span>
          </div>

          {/* Social Share Bar */}
          <div className="mt-6 flex justify-center gap-3">
            <Button variant="outline" size="icon">
              <Facebook className="size-5" />
              <span className="sr-only">
                <FancyText text="Share on Facebook" className="text-sm" />
              </span>
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="size-5" />
              <span className="sr-only">
                <FancyText text="Share on Twitter" className="text-sm" />
              </span>
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="size-5" />
              <span className="sr-only">
                <FancyText text="Share on LinkedIn" className="text-sm" />
              </span>
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="size-5" />
              <span className="sr-only">
                <FancyText text="Share via Email" className="text-sm" />
              </span>
            </Button>
          </div>

          {/* Blog Content */}
          <article className="prose lg:prose-lg dark:prose-invert mt-8">
            <div
              dangerouslySetInnerHTML={{
                __html: parseContentWithFancyText(blogPost.content),
              }}
            />
          </article>

          {/* Comments Section */}
          <div className="mt-16 p-6 bg-background dark:bg-muted/10 rounded-lg shadow-md">
            <h3 className="text-xl">
              <FancyText text="Join the Discussion" className="font-semibold" />
            </h3>

            {/* Comment Input */}
            <div className="flex items-start gap-4">
              <Image
                src="/user.jpg"
                alt="User Avatar"
                width={48}
                height={48}
                className="rounded-full border"
              />
              <textarea
                placeholder="Share your thoughts..."
                className="w-full p-3 border rounded-lg bg-muted/10 dark:bg-muted/20 focus:border-primary focus:ring-2 focus:ring-primary transition"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <Button className="mt-4 w-full bg-primary hover:bg-primary/90 transition">
              <FancyText text="Post Comment" className="text-base" />
            </Button>

            {/* Dummy Comments */}
            <div className="mt-6 space-y-4">
              <div className="flex gap-4">
                <Image
                  src="/user.jpg"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full border"
                />
                <div>
                  <h4 className="text-sm">
                    <FancyText text="John Doe" className="font-semibold" />
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    <FancyText
                      text="Great insights! Thanks for sharing."
                      className="text-sm"
                    />
                  </p>
                  <Button variant="link" className="text-primary text-sm">
                    <FancyText text="Reply" className="text-sm" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4 pl-12">
                <Image
                  src="/user.jpg"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full border"
                />
                <div>
                  <h4 className="text-sm">
                    <FancyText text="Jane Smith" className="font-semibold" />
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    <FancyText
                      text="Absolutely! This was really helpful."
                      className="text-sm"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Blogs */}
      <div className="w-[30%] max-md:w-full">
        <h4 className="text-xl">
          <FancyText text="Related Blogs" className="font-semibold" />
        </h4>
        <ul className="space-y-4">
          {relatedBlogs.map((blog, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="p-4 flex items-start gap-4 bg-background dark:bg-muted/20 hover:shadow-md transition">
                <div className="flex-1">
                  <Badge variant="outline" className="text-xs mb-2">
                    <FancyText text={blog.category} className="text-xs" />
                  </Badge>
                  <h5 className="text-lg">
                    <FancyText text={blog.title} className="font-medium" />
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    <FancyText text={blog.date} className="text-sm" />
                  </p>
                </div>
                <Link href={`/blogs/${index}`}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-primary cursor-pointer"
                  >
                    <ArrowRight className="size-5" />
                  </Button>
                </Link>
              </Card>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogDetails;
