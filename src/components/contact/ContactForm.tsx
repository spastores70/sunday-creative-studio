"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const services = [
  "Brand Identity",
  "Web Design & Development",
  "Motion & Animation",
  "Creative Strategy",
  "UI/UX Design",
  "Full Package",
  "Other",
];

const budgets = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000 – $60,000",
  "$60,000+",
  "Not sure yet",
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    await new Promise((res) => setTimeout(res, 1500));
    setFormState("success");
  };

  const info = [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email us",
      value: "hello@sundaycreative.studio",
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Response time",
      value: "Within 24 hours",
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "Global · Remote-first",
    },
  ];

  return (
    <section className="pb-24 bg-[#060608]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <AnimateOnScroll direction="left" className="lg:col-span-1">
            <div className="space-y-4">
              {info.map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-2xl p-5 border border-white/[0.07] flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-white/30 mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium text-white/80">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="glass-card rounded-2xl p-6 border border-white/[0.07] mt-4">
                <h3 className="text-sm font-semibold text-white mb-3">What to expect</h3>
                <ul className="space-y-2.5">
                  {[
                    "Free 30-min discovery call",
                    "Custom project proposal",
                    "Transparent pricing",
                    "No obligation to proceed",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-xs text-white/45">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Form */}
          <AnimateOnScroll direction="right" className="lg:col-span-2">
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-3xl p-10 md:p-14 border border-white/[0.07] text-center flex flex-col items-center justify-center min-h-[500px]"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/30 to-purple-500/20 border border-orange-500/30 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Message Received!</h3>
                <p className="text-white/45 text-sm max-w-sm">
                  Thank you for reaching out. We&apos;ll review your project details and get
                  back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-3xl p-8 md:p-10 border border-white/[0.07] space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex"
                      className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-orange-500/40 focus:bg-white/6 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Rivera"
                      className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-orange-500/40 focus:bg-white/6 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-orange-500/40 focus:bg-white/6 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Inc."
                      className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-orange-500/40 focus:bg-white/6 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2">
                    Service Needed *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedService(s)}
                        className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                          selectedService === s
                            ? "bg-orange-500/20 border border-orange-500/40 text-orange-400"
                            : "bg-white/4 border border-white/8 text-white/45 hover:text-white/70 hover:border-white/15"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2">
                    Budget Range
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setSelectedBudget(b)}
                        className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                          selectedBudget === b
                            ? "bg-purple-500/20 border border-purple-500/40 text-purple-400"
                            : "bg-white/4 border border-white/8 text-white/45 hover:text-white/70 hover:border-white/15"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project, goals, timeline, and anything else that would help us understand what you need..."
                    className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-orange-500/40 focus:bg-white/6 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="btn-primary w-full py-4 rounded-xl text-base font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center gap-2">
                    {formState === "submitting" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>

                <p className="text-center text-xs text-white/20">
                  By submitting, you agree to our Privacy Policy. We never share your data.
                </p>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
