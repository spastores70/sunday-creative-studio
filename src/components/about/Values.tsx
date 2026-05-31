"use client";

import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

const values = [
  {
    icon: "✦",
    title: "Craft Above All",
    description:
      "We sweat every detail. Pixel-perfect isn't a standard — it's a minimum. We won't ship work we're not proud of.",
  },
  {
    icon: "◈",
    title: "Strategic at Heart",
    description:
      "Beautiful isn't enough. Every design decision is grounded in strategy, data, and a deep understanding of your audience.",
  },
  {
    icon: "◇",
    title: "Radical Transparency",
    description:
      "No surprises, no hidden costs. We communicate openly, deliver on time, and own our mistakes when they happen.",
  },
  {
    icon: "○",
    title: "Long-term Thinking",
    description:
      "We build relationships, not transactions. We want to be your creative partner for years, not just one project.",
  },
];

export default function Values() {
  return (
    <section className="section-padding bg-[#060608]">
      <div className="container-custom">
        <AnimateOnScroll className="text-center mb-14">
          <span className="tag-pill mb-6 inline-flex">Our Values</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            What We Stand{" "}
            <span className="gradient-text">For</span>
          </h2>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="glass-card rounded-2xl p-6 h-full group hover:bg-white/[0.05] transition-all duration-300 border border-white/[0.07] hover:border-orange-500/20">
                <div className="text-2xl text-orange-400/70 mb-4 font-mono group-hover:scale-110 transition-transform duration-300 inline-block">{v.icon}</div>
                <h3 className="text-base font-bold text-white mb-3">{v.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{v.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
