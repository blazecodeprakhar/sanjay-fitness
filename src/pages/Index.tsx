import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CertificationsSection from "@/components/CertificationsSection";
import ServicesSection from "@/components/ServicesSection";
import PackagesSection from "@/components/PackagesSection";
import MissionSection from "@/components/MissionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CertificationsSection />
      <ServicesSection />
      <PackagesSection />
      <MissionSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
