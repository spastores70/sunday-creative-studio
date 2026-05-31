"use client";

import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

const testimonials = [
  {
    quote: "Sunday Creative transformed our brand from forgettable to iconic. The new identity drove a 340% increase in inbound leads within three months of launch.",
    author: "Sarah Chen",
    role: "CEO, Luminary Co.",
    avatar: "SC",
    color: "#f97316",
    project: "Brand Identity",
    size: "lg",
  },
  {
    quote: "The website they built isn't just beautiful — it's a conversion machine. Our sign-up rate doubled within the first week.",
    author: "Marcus Rivera",
    role: "Founder, Apex Digital",
    avatar: "MR",
    color: "#a855f7",
    project: "Web Design",
    size: "sm",
  },
  {
    quote: "Their creative strategy process uncovered insights about our audience we'd never seen before. It completely reshaped how we communicate our product.",
    author: "Priya Kaur",
    role: "CMO, Nova Systems",
    avatar: "PK",
    color: "#ec4899",
    project: "Creative Strategy",
    size: "sm",
  },
  {
    quote: "Working with Sunday was the best investment we made last year. Our rebrand coincided with a 60% increase in brand recognition scores.",
    author: "James Whitfield",
    role: "Marketing Director, Zenith",
    avatar: "JW",
    color: "#06b6d4",
    project: "Full Rebrand",
    size: "sm",
  },
  {
    quote: "The motion design work they did for our product launch set a new standard for our industry. Competitors have been trying to copy it ever since. I can't recommend Sunday Creative highly enough — they're in a different league.",
    author: "Aisha Okonkwo",
    role: "VP Brand, Prism Labs",
    avatar: "AO",
    color: "#f59e0b",
    project: "Motion Design",
    size: "lg",
  },
  {
    quote: "They pushed back on ideas that wouldn't have served us well and brought concepts we never would have imagined. That's rare and invaluable.",
    author: "Tom Eriksen",
    role: "CEO, Orbit Studio",
    avatar: "TE",
    color: "#8b5cf6",
    project: "Brand Identity",
    size: "sm",
  },
  {
    quote: "Our site now ranks on page 1 for 12 target keywords. The design is stunning and the performance scores are perfect.",
    author: "Lena Marchetti",
    role: "Head of Growth, Pulse",
    avatar: "LM",
    color: "#10b981",
    project: "Web Design & SEO",
    size: "sm",
  },
  {
    quote: "The team at Sunday doesn't just execute briefs — they challenge them. Every project comes back better than we imagined.",
    author: "Ryan Patel",
    role: "Founder, Vantage Group",
    avatar: "RP",
    color: "#f97316",
    project: "Creative Strategy",
    size: "sm",
  },
  {
    quote: "Sunday Creative built our entire brand system from scratch in 6 weeks. On time, on budget, beyond expectations. The attention to craft in everything they produce is extraordinary.",
    author: "Nora Lindqvist",
    role: "Co-founder, Echo Brand",
    avatar: "NL",
    color: "#a855f7",
    project: "Full Brand System",
    size: "lg",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsGrid() {
  return (
    <section className="section-padding bg-[#060608]">
      <div className="container-custom">
        <StaggerContainer
          className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
          staggerDelay={0.06}
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.author}>
              <div className="break-inside-avoid glass-card rounded-2xl p-6 border border-white/[0.07] hover:border-white/12 hover:bg-white/[0.05] transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <Stars />
                  <span
                    className="text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded-full"
                    style={{
                      background: `${t.color}15`,
                      border: `1px solid ${t.color}25`,
                      color: t.color,
                    }}
                  >
                    {t.project}
                  </span>
                </div>

                <div className="text-2xl font-serif text-white/10 leading-none mb-2 select-none">&ldquo;</div>
                <p className="text-sm text-white/60 leading-relaxed mb-5">{t.quote}</p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/6">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${t.color}40, ${t.color}15)`,
                      border: `1px solid ${t.color}25`,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white/85 truncate">{t.author}</p>
                    <p className="text-xs text-white/30 truncate">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
