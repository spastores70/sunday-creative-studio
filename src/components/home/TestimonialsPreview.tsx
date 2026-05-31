"use client";

import Link from "next/link";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

const testimonials = [
  {
    quote:
      "Sunday Creative transformed our brand from forgettable to iconic. The new identity drove a 340% increase in inbound leads within three months.",
    author: "Sarah Chen",
    role: "CEO, Luminary Co.",
    avatar: "SC",
    rating: 5,
    color: "#f97316",
  },
  {
    quote:
      "The website they built for us isn't just beautiful — it's a conversion machine. Our sign-up rate doubled within the first week of launch.",
    author: "Marcus Rivera",
    role: "Founder, Apex Digital",
    avatar: "MR",
    rating: 5,
    color: "#a855f7",
  },
  {
    quote:
      "Their creative strategy process uncovered insights about our audience we'd never seen before. It completely reshaped how we communicate.",
    author: "Priya Kaur",
    role: "CMO, Nova Systems",
    avatar: "PK",
    rating: 5,
    color: "#ec4899",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPreview() {
  return (
    <section className="section-padding bg-[#0a0a10]">
      <div className="container-custom">
        <AnimateOnScroll className="text-center mb-16">
          <span className="tag-pill mb-6 inline-flex">Client Love</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5">
            What Our Clients{" "}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="text-white/45 text-base max-w-md mx-auto">
            Don&apos;t take our word for it. Here&apos;s what the people we&apos;ve worked with have to say.
          </p>
        </AnimateOnScroll>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          staggerDelay={0.1}
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.author}>
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col group hover:bg-white/[0.055] transition-all duration-300 border border-white/[0.07]">
                {/* Quote mark */}
                <div className="text-4xl font-serif text-white/10 leading-none mb-3 select-none">&ldquo;</div>

                <p className="text-sm text-white/60 leading-relaxed flex-1 mb-6">{t.quote}</p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.color}40, ${t.color}20)`, border: `1px solid ${t.color}30` }}
                  >
                    {t.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white/85 truncate">{t.author}</p>
                    <p className="text-xs text-white/35 truncate">{t.role}</p>
                  </div>
                  <Stars count={t.rating} />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateOnScroll className="text-center mt-12" delay={0.2}>
          <Link
            href="/testimonials"
            className="btn-secondary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-medium"
          >
            Read All Reviews
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
