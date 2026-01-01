import Hero from "@/components/Hero";
import ParallaxSection from "@/components/ParallaxSection";
import ProductSection from "@/components/ProductSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductSection />
      <StatsSection />
      <ParallaxSection />
      <PricingSection />
      <ContactSection />
    </>
  );
}
