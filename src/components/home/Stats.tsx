"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const stats = [
  { value: "200+", label: "Projects Completed", desc: "Across 25+ industries" },
  { value: "99%", label: "Client Satisfaction", desc: "Based on post-project surveys" },
  { value: "8+", label: "Years of Excellence", desc: "Established 2016" },
  { value: "$50M+", label: "Revenue Generated", desc: "For our clients collectively" },
];

export default function Stats() {
  return (
    <section className="section-padding bg-[#060608] overflow-hidden">
      <div className="container-custom">
        <AnimateOnScroll className="text-center mb-16">
          <span className="tag-pill mb-6 inline-flex">By the Numbers</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Results That{" "}
            <span className="gradient-text">Speak Volumes</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6 md:p-8 text-center group hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden border border-white/[0.07]">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="stat-number mb-2">{stat.value}</div>
                  <p className="text-sm font-semibold text-white/70 mb-1">{stat.label}</p>
                  <p className="text-xs text-white/30">{stat.desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
