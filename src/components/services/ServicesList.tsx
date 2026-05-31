"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";

const services = [
  {
    id: "brand",
    number: "01",
    title: "Brand Identity",
    subtitle: "Your brand is your most valuable asset",
    description:
      "We craft complete brand identities — from logo and color systems to typography, voice, and motion guidelines. Every element is designed to work in harmony, creating a brand that's recognizable, scalable, and impossible to forget.",
    deliverables: [
      "Logo design & variations",
      "Color palette & typography",
      "Brand guidelines document",
      "Icon library",
      "Stationery design",
      "Social media templates",
    ],
    accent: "text-orange-400",
    bg: "from-orange-500/8 to-transparent",
  },
  {
    id: "web",
    number: "02",
    title: "Web Design & Development",
    subtitle: "Your website is your hardest-working employee",
    description:
      "We design and build websites that don't just look stunning — they convert. Built with Next.js and modern performance standards, our sites load fast, rank well, and guide visitors toward action with precision.",
    deliverables: [
      "UX research & wireframing",
      "High-fidelity UI design",
      "Next.js / React development",
      "Animation & interactions",
      "SEO optimization",
      "Analytics integration",
    ],
    accent: "text-purple-400",
    bg: "from-purple-500/8 to-transparent",
  },
  {
    id: "motion",
    number: "03",
    title: "Motion & Animation",
    subtitle: "Brands that move, brands that stick",
    description:
      "From micro-interactions to full brand films, our motion work transforms static assets into living experiences. We bring your brand narrative to life with cinematic quality that captivates and converts.",
    deliverables: [
      "Brand motion guidelines",
      "Animated logo reveals",
      "UI micro-interactions",
      "Social media animations",
      "Brand films & reels",
      "Presentation animations",
    ],
    accent: "text-pink-400",
    bg: "from-pink-500/8 to-transparent",
  },
  {
    id: "strategy",
    number: "04",
    title: "Creative Strategy",
    subtitle: "Great work starts with great thinking",
    description:
      "Before a single pixel is moved, we develop a strategic foundation for your brand. Market research, audience mapping, competitive analysis, and creative direction that ensures every design decision drives business results.",
    deliverables: [
      "Brand positioning workshop",
      "Audience research",
      "Competitive audit",
      "Messaging framework",
      "Creative brief",
      "Campaign concepting",
    ],
    accent: "text-amber-400",
    bg: "from-amber-500/8 to-transparent",
  },
];

export default function ServicesList() {
  return (
    <section className="section-padding bg-[#060608]">
      <div className="container-custom">
        <div className="space-y-6">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.id} delay={i * 0.05}>
              <div
                id={service.id}
                className={`glass-card rounded-3xl p-8 md:p-10 border border-white/[0.07] bg-gradient-to-br ${service.bg} hover:border-white/12 transition-all duration-300`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-black tracking-widest ${service.accent} font-mono`}>
                        {service.number}
                      </span>
                      <div className="flex-1 h-px bg-white/8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-2">
                      {service.title}
                    </h2>
                    <p className={`text-sm font-medium ${service.accent} mb-4`}>{service.subtitle}</p>
                    <p className="text-white/45 text-base leading-relaxed">{service.description}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-widest text-white/25 uppercase mb-4">
                      What you get
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <div className={`w-1.5 h-1.5 rounded-full bg-current ${service.accent} shrink-0`} />
                          <span className="text-sm text-white/55">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
