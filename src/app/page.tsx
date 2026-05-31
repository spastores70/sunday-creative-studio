import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import LogoStrip from "@/components/home/LogoStrip";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Stats from "@/components/home/Stats";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import FAQ from "@/components/home/FAQ";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Sunday Creative Studio — Premium Design & Digital Experiences",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Services />
        <Process />
        <Stats />
        <TestimonialsPreview />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
