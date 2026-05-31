"use client";

import { motion } from "framer-motion";

export default function TestimonialsHero() {
  return (
    <section className="relative pt-36 pb-20 bg-[#060608] overflow-hidden text-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-orange-500/5 blur-[100px]" />
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="tag-pill mb-6 inline-flex">Client Stories</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6">
            Real Results,{" "}
            <span className="gradient-text">Real Voices</span>
          </h1>
          <p className="text-lg text-white/45 max-w-xl mx-auto">
            Over 200 projects. Hundreds of happy clients. Here&apos;s what they have to say
            about working with Sunday Creative Studio.
          </p>
        </motion.div>

        {/* Aggregate rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 inline-flex items-center gap-4 glass-card px-6 py-4 rounded-2xl border border-white/[0.07]"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="text-left">
            <p className="text-white font-bold text-lg leading-none">4.98 / 5.0</p>
            <p className="text-white/30 text-xs">Based on 200+ reviews</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
