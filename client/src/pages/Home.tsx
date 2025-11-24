import { useEffect } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { setJsonLd, getOrganizationSchema } from "@/lib/jsonld";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ConsultationSection from "@/components/ConsultationSection";
import ContactSection from "@/components/ContactSection";
import VitalStatsSection from "@/components/VitalStatsSection";
import SocialFooter from "@/components/SocialFooter";
import BottomNavigation from "@/components/BottomNavigation";

export default function Home() {
  usePageMeta({
    title: "Vonguulian Design - Premium Digital Products & Consultation Services",
    description: "Transform your life with curated Human Design digital products and expert consultation services. Discover personalized cheatsheets and alignment coaching to unlock your potential.",
    ogUrl: "https://vonguulian.com",
    ogImage: "https://vonguulian.com/favicon.jpg",
  });

  useEffect(() => {
    setJsonLd(getOrganizationSchema());
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <ConsultationSection />
      <ContactSection />
      <VitalStatsSection />
      <SocialFooter />
      <BottomNavigation />
    </div>
  );
}
