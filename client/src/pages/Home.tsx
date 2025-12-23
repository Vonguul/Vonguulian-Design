import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollMemory } from "@/hooks/useScrollMemory";
import HeroSection from "@/components/HeroSection";
import MovementSubscriptionSection from "@/components/MovementSubscriptionSection";
import ProductsSection from "@/components/ProductsSection";
import ConsultationSection from "@/components/ConsultationSection";
import ContactSection from "@/components/ContactSection";
import VitalStatsSection from "@/components/VitalStatsSection";
import SocialFooter from "@/components/SocialFooter";
import BottomNavigation from "@/components/BottomNavigation";

export default function Home() {
  useScrollMemory();
  usePageMeta({
    title: "Vonguul - Community of Progress",
    description: "Transform your life with curated Human Design digital products and expert consultation services. Discover personalized cheatsheets and alignment coaching to unlock your potential.",
  });

  return (
    <div className="min-h-screen">
      <HeroSection />
      <MovementSubscriptionSection />
      <ProductsSection />
      <ConsultationSection />
      <ContactSection />
      <VitalStatsSection />
      <SocialFooter />
      <BottomNavigation />
    </div>
  );
}
