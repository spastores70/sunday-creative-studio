"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative pt-36 pb-20 bg-[#060608] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-purple-600/5 blur-[100px]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="tag-pill mb-6 inline-flex">What We Offer</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6">
            Services Built for{" "}
            <span className="gradient-text">Ambitious Brands</span>
          </h1>
          <p className="text-lg text-white/45 max-w-xl mx-auto">
            From first impression to lasting legacy — we cover every creative discipline your
            brand needs to dominate its category.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
