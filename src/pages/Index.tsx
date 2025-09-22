import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import MembershipSection from "@/components/MembershipSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SolutionsSection />
      <MembershipSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
