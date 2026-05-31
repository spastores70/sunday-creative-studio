"use client";

import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your business, audience, and competitive landscape through immersive workshops and research.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "From insights we craft a clear creative strategy — positioning, messaging, and a roadmap for execution.",
    icon: "🧭",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our designers translate strategy into stunning visuals that are both beautiful and functionally purposeful.",
    icon: "✦",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "We iterate closely with you, incorporating feedback until every detail exceeds your expectations.",
    icon: "◈",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We deploy with precision and support you through launch — plus a 30-day post-launch care window.",
    icon: "🚀",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-[#0a0a10]">
      <div className="container-custom">
        <AnimateOnScroll className="mb-16">
          <span className="tag-pill mb-6 inline-flex">How We Work</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight max-w-lg">
              A Process Built for{" "}
              <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-white/45 text-base max-w-sm lg:text-right">
              Five clear stages from first conversation to final launch — no surprises,
              only results.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[calc(2rem-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/40 via-purple-500/40 to-transparent hidden md:block" />

          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {steps.map((step, index) => (
              <StaggerItem key={step.number}>
                <div className="glass-card rounded-2xl p-6 md:pl-20 relative overflow-hidden transition-all duration-300 hover:bg-white/[0.05] group">
                  {/* Number indicator */}
                  <div className="hidden md:flex absolute left-6 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500/20 to-purple-500/20 border border-white/10 items-center justify-center z-10">
                    <span className="text-xs font-black text-white/60">{index + 1}</span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-4 md:gap-0">
                      <span className="md:hidden text-2xl font-black text-white/10 tabular-nums">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/4 border border-white/8 flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </div>
                    <div className="md:ml-4 flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-base font-bold text-white">{step.title}</h3>
                        <span className="hidden md:block text-xs text-white/25 font-mono">{step.number}</span>
                      </div>
                      <p className="text-sm text-white/45 leading-relaxed max-w-2xl">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer rounded-2xl" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
