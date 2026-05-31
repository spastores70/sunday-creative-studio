"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060608]">
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/8 blur-[120px] pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-500/8 blur-[100px] pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-pink-500/4 blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating elements */}
      <div className="absolute top-32 left-[8%] float-animation hidden lg:block">
        <div className="glass-card rounded-2xl px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/30 to-orange-500/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-white/70 font-medium">Project Delivered</p>
            <p className="text-xs text-white/35">Brand Identity</p>
          </div>
        </div>
      </div>

      <div className="absolute top-48 right-[8%] float-animation-delayed hidden lg:block">
        <div className="glass-card rounded-2xl px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/30 to-purple-500/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-white/70 font-medium">+340% Conversions</p>
            <p className="text-xs text-white/35">Client Growth</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 left-[12%] float-animation hidden lg:block" style={{ animationDelay: "2s" }}>
        <div className="glass-card rounded-2xl px-4 py-3 flex items-center gap-2">
          <div className="flex -space-x-1.5">
            {["#f97316", "#a855f7", "#ec4899", "#06b6d4"].map((color, i) => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-[#060608]" style={{ backgroundColor: color }} />
            ))}
          </div>
          <p className="text-xs text-white/60 ml-1">+200 happy clients</p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="tag-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            Now Accepting New Clients
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6"
        >
          <span className="block text-white">We Design</span>
          <span className="block gradient-text py-1">Digital Dreams</span>
          <span className="block text-white">Into Reality.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Sunday Creative Studio crafts premium brand identities, digital experiences,
          and creative strategies that set ambitious companies apart.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="btn-primary px-8 py-4 rounded-xl text-base font-semibold group"
          >
            <span className="flex items-center gap-2">
              Start a Project
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
          <Link
            href="/services"
            className="btn-secondary px-8 py-4 rounded-xl text-base font-medium"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          {[
            { label: "Projects Delivered", value: "200+" },
            { label: "Client Satisfaction", value: "99%" },
            { label: "Years of Excellence", value: "8+" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2">
              <span className="text-2xl font-bold gradient-text">{stat.value}</span>
              <span className="text-xs text-white/35">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/25 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-orange-500/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
