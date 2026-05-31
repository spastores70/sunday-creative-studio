import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialsGrid from "@/components/testimonials/TestimonialsGrid";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what Sunday Creative Studio clients say about their experience and results.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>
        <TestimonialsHero />
        <TestimonialsGrid />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
