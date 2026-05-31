"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative pt-36 pb-16 bg-[#060608] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="tag-pill mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            Accepting Projects
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6">
            Let&apos;s Build
            <br />
            <span className="gradient-text">Something Great</span>
          </h1>
          <p className="text-lg text-white/45 max-w-xl leading-relaxed">
            Tell us about your project. We&apos;ll review and reply within 24 hours to
            schedule a free 30-minute discovery call.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
