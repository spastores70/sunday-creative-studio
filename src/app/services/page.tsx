import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import Pricing from "@/components/services/Pricing";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Sunday Creative Studio's full range of services: brand identity, web design, motion, UI/UX, and creative strategy.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesList />
        <Pricing />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
