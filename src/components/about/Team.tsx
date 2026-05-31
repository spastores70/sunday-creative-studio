"use client";

import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

const team = [
  {
    name: "Alex Rivera",
    role: "Founder & Creative Director",
    bio: "Former design lead at IDEO. Obsessed with the intersection of aesthetics and business strategy.",
    initials: "AR",
    gradient: "from-orange-500/30 to-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    name: "Mia Chen",
    role: "Head of Brand Design",
    bio: "Ex-Apple Design team. Believes every brand has an authentic visual voice — she finds it.",
    initials: "MC",
    gradient: "from-purple-500/30 to-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    name: "Jordan Park",
    role: "Lead Web Developer",
    bio: "Full-stack engineer turned frontend artisan. Builds web experiences that are fast, beautiful, and accessible.",
    initials: "JP",
    gradient: "from-pink-500/30 to-pink-500/10",
    border: "border-pink-500/20",
  },
  {
    name: "Sophia Laurent",
    role: "Motion Designer",
    bio: "Award-winning animator who transforms static brands into living, breathing experiences.",
    initials: "SL",
    gradient: "from-cyan-500/30 to-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    name: "Kai Tanaka",
    role: "UX Research Lead",
    bio: "Turns user data into design decisions. His research has guided products used by millions.",
    initials: "KT",
    gradient: "from-amber-500/30 to-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    name: "Nadia Hassan",
    role: "Creative Strategist",
    bio: "Brand strategist with 10 years at WPP agencies. Connects creative vision to commercial reality.",
    initials: "NH",
    gradient: "from-emerald-500/30 to-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

export default function Team() {
  return (
    <section className="section-padding bg-[#0a0a10]">
      <div className="container-custom">
        <AnimateOnScroll className="text-center mb-14">
          <span className="tag-pill mb-6 inline-flex">The Team</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            The Minds Behind{" "}
            <span className="gradient-text">The Magic</span>
          </h2>
          <p className="text-white/45 text-base max-w-md mx-auto">
            Senior talent from top agencies and tech companies, working together
            in perfect creative harmony.
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <div className="glass-card rounded-2xl p-6 group hover:bg-white/[0.05] transition-all duration-300 border border-white/[0.07]">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} border ${member.border} flex items-center justify-center text-lg font-black text-white`}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{member.name}</h3>
                    <p className="text-xs text-white/40">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-white/45 leading-relaxed">{member.bio}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
