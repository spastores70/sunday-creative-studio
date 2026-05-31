"use client";

const brands = [
  "Luminary Co.",
  "Apex Digital",
  "Prism Labs",
  "Nova Systems",
  "Zenith Works",
  "Orbit Studio",
  "Pulse Creative",
  "Vantage Group",
  "Echo Brand",
  "Stratum Inc.",
];

export default function LogoStrip() {
  const duplicated = [...brands, ...brands, ...brands];

  return (
    <section className="py-12 border-y border-white/5 overflow-hidden">
      <p className="text-center text-xs tracking-widest text-white/25 uppercase mb-8 font-medium">
        Trusted by ambitious brands worldwide
      </p>
      <div className="relative">
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{
            animation: "marquee 30s linear infinite",
            width: "max-content",
          }}
        >
          {duplicated.map((brand, i) => (
            <span
              key={i}
              className="text-white/20 font-semibold text-sm tracking-wider hover:text-white/45 transition-colors duration-300 shrink-0"
            >
              {brand}
            </span>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#060608] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#060608] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
