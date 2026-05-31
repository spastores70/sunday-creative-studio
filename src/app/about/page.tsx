import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import Team from "@/components/about/Team";
import Values from "@/components/about/Values";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sunday Creative Studio — our story, mission, values, and the team behind the work.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <Mission />
        <Values />
        <Team />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
