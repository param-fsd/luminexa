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
import blogs from "@/data/blogData";

const BlogPage = ({ limit, showNewsletter = true }) => {
  // Sort blogs by date (assuming date is a parseable string like "2023-10-15" or "October 15, 2023")
  const sortedBlogs = [...blogs].sort((a, b) => {
    // Adjust date parsing based on your date format
    // Example: If date is "October 15, 2023", use a library like date-fns or parse manually
    return new Date(b.date) - new Date(a.date);
  });

  // Apply limit if provided, otherwise show all blogs
  const displayedBlogs = limit ? sortedBlogs.slice(0, limit) : sortedBlogs;

  return (
    <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
          Blog
        </Badge>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Stay Updated with the Latest from Luminexa
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto md:text-sm">
          Explore expert opinions, industry news, and practical guides to help you grow with Luminexa.
        </p>
      </motion.div>

      {/* Blog Cards */}
      <div className="max-w-[80%] mx-auto grid gap-6 lg:grid-cols-3 lg:gap-8">
        {displayedBlogs.map((blog, index) => (
          <motion.div
            key={blog.slug}
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
                  {blog.category}
                </Badge>
                <h3 className="text-2xl text-foreground">{blog.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{blog.date}</p>
                <p className="text-muted-foreground mt-3 text-base">{blog.shortDescription}</p>
                <Link href={`/blogs/${blog.slug}`}>
                  <Button
                    variant="ghost"
                    className="mt-4 text-primary font-semibold hover:underline cursor-pointer"
                    aria-label={`Read more about ${blog.title}`}
                  >
                    Read More →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Newsletter Subscription (conditionally rendered) */}
      {showNewsletter && (
        <div className="mt-16 flex flex-col items-center border shadow-md bg-white border-gray-200 dark:border-neutral-700 p-10 rounded-lg dark:bg-[#262626] mx-auto text-center">
          <Mail className="size-10 text-primary mb-4" />
          <h3 className="text-2xl font-semibold">Subscribe to Our Journey</h3>
          <p className="text-muted-foreground mt-2 mb-4 text-base">
            Get the latest Luminexa insights delivered straight to your inbox.
          </p>
          <div className="flex w-full max-w-md gap-2">
            <Input type="email" placeholder="Enter your email" className="flex-1 text-base h-12" />
            <Button className="h-12 text-base cursor-pointer">Subscribe</Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogPage;