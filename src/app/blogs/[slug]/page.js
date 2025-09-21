"use client";

import React from "react";
import { useParams } from "next/navigation";
import blogs from "@/data/blogData";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const BlogDetails = () => {
  const { slug } = useParams();
  const blogPost = blogs.find((b) => b.slug === slug);

  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Blog not found</p>
      </div>
    );
  }

  return (
    <section className="w-full min-h-screen py-20 px-6 md:px-10 bg-muted/30 dark:bg-black">
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto mb-6 text-sm text-muted-foreground flex items-center gap-2">
        <Link href="/blogs" className="hover:underline flex items-center gap-1">
          <ArrowLeft className="size-4" /> Blog
        </Link>
        <span>{">"}</span>
        <span className="text-foreground font-medium">{blogPost.title}</span>
      </div>

      {/* Hero with Title */}
      <motion.div
        className="relative w-full max-w-5xl mx-auto h-[28rem] rounded-2xl overflow-hidden shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background image */}
        <Image
          src={blogPost.image}
          alt={blogPost.title}
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">
          <Badge className="mb-4 w-fit text-sm px-3 py-1 rounded-full bg-primary text-black">
            {blogPost.category}
          </Badge>

          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {blogPost.title}
          </motion.h1>

          <div className="flex items-center gap-4 text-gray-200 text-sm mt-3">
            <Calendar className="size-4" />
            <span>{blogPost.date}</span>
            <span className="mx-2">•</span>
            <span>By {blogPost.author}</span>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-5xl mx-auto mt-12">
        <motion.article
          className="prose lg:prose-xl dark:prose-invert mt-10 max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          dangerouslySetInnerHTML={{ __html: blogPost.fullDescription }}
        />
      </div>

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
    </section>
  );
};

export default BlogDetails;
 