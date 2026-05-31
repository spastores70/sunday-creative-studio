"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative pt-36 pb-24 bg-[#060608] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-purple-600/6 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-orange-500/6 blur-[80px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="tag-pill mb-6 inline-flex">Our Story</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6">
            We&apos;re a Studio on a{" "}
            <span className="gradient-text">Mission</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed">
            Sunday Creative Studio was founded on the belief that great design isn&apos;t just
            how something looks — it&apos;s how it thinks, feels, and performs. We exist to
            give ambitious brands the creative edge they deserve.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 relative rounded-3xl overflow-hidden border border-white/6"
          style={{ aspectRatio: "21/9" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d20] via-[#100d14] to-[#0d0d20]" />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Abstract art composition */}
            <div className="relative w-full h-full">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full opacity-20"
                  style={{
                    width: `${[400, 300, 200, 150, 250, 180][i]}px`,
                    height: `${[400, 300, 200, 150, 250, 180][i]}px`,
                    background: [
                      "radial-gradient(circle, #f97316, transparent)",
                      "radial-gradient(circle, #a855f7, transparent)",
                      "radial-gradient(circle, #ec4899, transparent)",
                      "radial-gradient(circle, #06b6d4, transparent)",
                      "radial-gradient(circle, #f59e0b, transparent)",
                      "radial-gradient(circle, #8b5cf6, transparent)",
                    ][i],
                    left: `${[10, 30, 60, 70, 20, 50][i]}%`,
                    top: `${[20, 40, 10, 60, 70, 50][i]}%`,
                    transform: "translate(-50%, -50%)",
                    filter: "blur(40px)",
                  }}
                />
              ))}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white/10 text-6xl md:text-8xl font-black tracking-tighter select-none">
                  SUNDAY
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
