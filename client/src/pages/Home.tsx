import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ConsultationSection from "@/components/ConsultationSection";
import ContactSection from "@/components/ContactSection";
import VitalStatsSection from "@/components/VitalStatsSection";
import SocialFooter from "@/components/SocialFooter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <ConsultationSection />
      <ContactSection />
      <VitalStatsSection />
      <SocialFooter />
    </div>
  );
}
