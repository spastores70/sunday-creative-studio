"use client";

import Link from "next/link";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Brand Identity",
    description:
      "Logos, visual systems, and brand guidelines that make your identity unforgettable and consistent across every touchpoint.",
    gradient: "from-orange-500/15 to-orange-500/5",
    borderHover: "hover:border-orange-500/25",
    tag: "Branding",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
    title: "Web Design & Dev",
    description:
      "High-performance websites and apps with pixel-perfect design, buttery animations, and conversion-optimized architecture.",
    gradient: "from-purple-500/15 to-purple-500/5",
    borderHover: "hover:border-purple-500/25",
    tag: "Digital",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Motion & Animation",
    description:
      "Cinematic motion design, interactive animations, and video production that bring your brand story to life.",
    gradient: "from-pink-500/15 to-pink-500/5",
    borderHover: "hover:border-pink-500/25",
    tag: "Motion",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Creative Strategy",
    description:
      "Data-informed creative direction, campaign concepting, and brand positioning that drives measurable business growth.",
    gradient: "from-amber-500/15 to-amber-500/5",
    borderHover: "hover:border-amber-500/25",
    tag: "Strategy",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "UI/UX Design",
    description:
      "Intuitive interfaces and seamless user experiences grounded in research, designed to delight and retain users.",
    gradient: "from-cyan-500/15 to-cyan-500/5",
    borderHover: "hover:border-cyan-500/25",
    tag: "Design",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: "Content Creation",
    description:
      "Photography, copywriting, and editorial content that tells your brand story with clarity and conviction.",
    gradient: "from-emerald-500/15 to-emerald-500/5",
    borderHover: "hover:border-emerald-500/25",
    tag: "Content",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#060608]">
      <div className="container-custom">
        <AnimateOnScroll className="text-center mb-16">
          <span className="tag-pill mb-6 inline-flex">What We Do</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5">
            Services Built for{" "}
            <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            Every service we offer is designed with one goal: making your brand
            impossible to ignore.
          </p>
        </AnimateOnScroll>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          staggerDelay={0.08}
        >
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div
                className={`glass-card rounded-2xl p-6 h-full flex flex-col transition-all duration-300 cursor-pointer group border border-white/[0.07] ${service.borderHover}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-bold text-white">{service.title}</h3>
                  <span className="text-[10px] font-semibold tracking-wider text-white/30 uppercase px-2 py-1 rounded-full border border-white/8">
                    {service.tag}
                  </span>
                </div>
                <p className="text-sm text-white/45 leading-relaxed flex-1">{service.description}</p>
                <div className="mt-4 flex items-center text-orange-400/70 text-xs font-medium group-hover:text-orange-400 transition-colors">
                  <span>Learn more</span>
                  <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateOnScroll className="text-center mt-12" delay={0.2}>
          <Link
            href="/services"
            className="btn-secondary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-medium"
          >
            View All Services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
