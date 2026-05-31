"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We work with ambitious companies at all stages — from funded startups building their first brand to established enterprises undergoing a transformation. We specialize in tech, SaaS, consumer brands, and professional services.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary by scope. A brand identity takes 4–6 weeks, a website 6–10 weeks, and a full brand + digital package typically 10–14 weeks. We always provide a detailed project timeline during our discovery phase.",
  },
  {
    q: "What does working with Sunday Creative look like?",
    a: "You get a dedicated team: a strategist, lead designer, and project manager. We communicate through weekly calls and a shared workspace. Expect clear milestones, proactive updates, and no surprises.",
  },
  {
    q: "Do you offer ongoing retainer services?",
    a: "Yes. Many clients move to a monthly creative retainer after their initial project — giving them on-demand design support, content creation, and strategic guidance at a predictable cost.",
  },
  {
    q: "How do you price your services?",
    a: "We price per project, scoped carefully to your needs. Brand identity packages start at $8,000; websites from $15,000. We're happy to create a custom proposal — reach out and we'll respond within 24 hours.",
  },
  {
    q: "What happens after the project launches?",
    a: "Every project includes a 30-day post-launch support window at no extra charge. We monitor, fix, and refine based on real-world feedback to ensure everything performs exactly as intended.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`glass-card rounded-2xl border border-white/[0.07] overflow-hidden transition-all duration-300 ${open ? "border-orange-500/20" : ""}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
      >
        <span className="text-sm md:text-base font-semibold text-white/85 group-hover:text-white transition-colors pr-4">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
            open
              ? "bg-orange-500/15 border-orange-500/30 text-orange-400"
              : "bg-white/4 border-white/8 text-white/40"
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <div className="h-px bg-white/6 mb-4" />
              <p className="text-sm text-white/45 leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="section-padding bg-[#060608]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <span className="tag-pill mb-6 inline-flex">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Questions{" "}
              <span className="gradient-text">Answered</span>
            </h2>
            <p className="text-white/45 text-base">
              Everything you need to know about working with us.
            </p>
          </AnimateOnScroll>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={faq.q} delay={i * 0.05}>
                <FAQItem q={faq.q} a={faq.a} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
