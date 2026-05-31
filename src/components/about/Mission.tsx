"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Mission() {
  return (
    <section className="section-padding bg-[#0a0a10]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll direction="left">
            <span className="tag-pill mb-6 inline-flex">Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              Design That{" "}
              <span className="gradient-text">Moves Businesses</span>{" "}
              Forward
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-4">
              We believe design is the most powerful lever a business has. When done right,
              it builds trust before a word is read, commands premium prices, and creates
              loyalty that outlasts any campaign.
            </p>
            <p className="text-white/50 text-base leading-relaxed">
              Our mission is to democratize world-class creative work — to bring
              Apple-level craft to ambitious companies who refuse to settle for ordinary.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Founded", value: "2016", icon: "📍" },
                { label: "Team Members", value: "18", icon: "👥" },
                { label: "Countries Served", value: "30+", icon: "🌍" },
                { label: "Awards Won", value: "24", icon: "🏆" },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-2xl p-6 border border-white/[0.07]">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <div className="text-2xl font-black gradient-text mb-1">{item.value}</div>
                  <div className="text-xs text-white/35 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
