"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function CTABanner() {
  return (
    <section className="section-padding bg-[#0a0a10]">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="relative rounded-3xl overflow-hidden border border-white/8">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-purple-500/8 to-pink-500/10" />
            <div className="absolute inset-0 bg-[#0d0d14]/80" />

            {/* Glow orbs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-orange-500/15 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-purple-500/15 blur-3xl" />

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 py-20 px-8 md:px-16 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="tag-pill mb-6 inline-flex">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  Limited Spots Available
                </p>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5">
                  Ready to Build
                  <br />
                  <span className="gradient-text">Something Legendary?</span>
                </h2>

                <p className="text-white/50 text-base md:text-lg max-w-md mx-auto mb-10">
                  We take on a limited number of projects each quarter to ensure
                  every client gets our best work. Spots fill fast.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="btn-primary px-10 py-4 rounded-xl text-base font-semibold group"
                  >
                    <span className="flex items-center gap-2">
                      Book a Free Discovery Call
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                  <Link
                    href="/services"
                    className="btn-secondary px-10 py-4 rounded-xl text-base font-medium"
                  >
                    View Services
                  </Link>
                </div>

                <p className="text-white/25 text-xs mt-6">
                  No commitment required · Response within 24 hours
                </p>
              </motion.div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
