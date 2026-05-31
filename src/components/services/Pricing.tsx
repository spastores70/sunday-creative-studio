"use client";

import Link from "next/link";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for new brands",
    price: "$8,000",
    period: "per project",
    features: [
      "Brand logo & identity",
      "Color & typography system",
      "Brand guidelines (PDF)",
      "2 rounds of revisions",
      "3-week turnaround",
      "Source files included",
    ],
    cta: "Get Started",
    popular: false,
    accent: "border-white/10",
  },
  {
    name: "Growth",
    tagline: "Most popular choice",
    price: "$18,000",
    period: "per project",
    features: [
      "Everything in Starter",
      "Website design & build",
      "Motion & animations",
      "SEO optimization",
      "3 rounds of revisions",
      "30-day post-launch support",
    ],
    cta: "Start a Project",
    popular: true,
    accent: "border-orange-500/30",
  },
  {
    name: "Enterprise",
    tagline: "For full transformations",
    price: "Custom",
    period: "scoped to you",
    features: [
      "Everything in Growth",
      "Creative strategy & research",
      "Full campaign concepting",
      "Ongoing monthly retainer",
      "Dedicated team",
      "Priority access & SLA",
    ],
    cta: "Book a Call",
    popular: false,
    accent: "border-white/10",
  },
];

export default function Pricing() {
  return (
    <section className="section-padding bg-[#0a0a10]">
      <div className="container-custom">
        <AnimateOnScroll className="text-center mb-14">
          <span className="tag-pill mb-6 inline-flex">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-white/45 text-base max-w-md mx-auto">
            No hidden fees, no surprises. Every package delivers measurable value.
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={`relative glass-card rounded-3xl p-8 h-full flex flex-col border ${plan.accent} ${
                  plan.popular ? "bg-white/[0.05]" : ""
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="btn-primary px-4 py-1 rounded-full text-xs font-bold">
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-xs text-white/35">{plan.tagline}</p>
                </div>

                <div className="mb-8">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-sm text-white/30 ml-2">{plan.period}</span>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-white/55">
                      <div className="w-4 h-4 rounded-full bg-orange-500/15 border border-orange-500/25 flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-3.5 rounded-xl text-sm font-semibold text-center block transition-all ${
                    plan.popular
                      ? "btn-primary"
                      : "btn-secondary"
                  }`}
                >
                  <span>{plan.cta}</span>
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
