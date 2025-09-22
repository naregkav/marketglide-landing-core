import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TopOpportunities from "@/components/TopOpportunities";
import SectorsCovered from "@/components/SectorsCovered";
import FeaturedMembers from "@/components/FeaturedMembers";
import StrategicPartners from "@/components/StrategicPartners";
import MembershipSection from "@/components/MembershipSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TopOpportunities />
      <SectorsCovered />
      <FeaturedMembers />
      <StrategicPartners />
      <MembershipSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
