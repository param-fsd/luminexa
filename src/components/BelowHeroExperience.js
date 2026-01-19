"use client";

import { motion } from "framer-motion";
import { Sparkles, Play } from "lucide-react";

export default function ImmersivePreview({
  videoSrc = "/vid2.mp4",
}) {
  return (
    <section className="relative w-full overflow-hidden py-14 md:py-20">
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.16) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-secondary/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-center"
        >
          

          <p className="mt-2 text-[13px] text-muted-foreground max-w-xl mx-auto">
            Interactive maps, image mapping, 360° tours and 3D walkthroughs —
            all inside one seamless interface.
          </p>
        </motion.div>

        {/* ================= LANDSCAPE VIDEO ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto max-w-[900px]"
        >
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
            {/* video */}
            <video
              src={videoSrc}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />

            {/* subtle cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

            {/* top status */}
            <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full px-3 py-1 bg-black/40 backdrop-blur border border-white/15">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-[11px] text-white/85">
                Live interactive preview
              </span>
            </div>

            {/* bottom hint */}
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/35 backdrop-blur border border-white/15 px-4 py-3">
              <div className="flex items-center gap-2 text-white">
                <Play className="size-4 opacity-80" />
                <span className="text-[12px] font-medium">
                  Click • Explore • Visualize
                </span>
              </div>
              <p className="mt-1 text-[11px] text-white/70">
                Map-based navigation • hotspots • documents • 3D views
              </p>
            </div>
          </div>

          {/* depth shadow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-8 w-[85%] rounded-full bg-black/20 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
