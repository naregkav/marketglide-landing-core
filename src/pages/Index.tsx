import Navigation from "@/components/Navigation";
import HeroSectionNew from "@/components/HeroSectionNew";
import TrustSection from "@/components/TrustSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import ApplicationProcess from "@/components/ApplicationProcess";
import MeetSophia from "@/components/MeetSophia";
import WhyMarketGlide from "@/components/WhyMarketGlide";
import CommunitySection from "@/components/CommunitySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSectionNew />
      <TrustSection />
      <FeaturesGrid />
      <ApplicationProcess />
      <MeetSophia />
      <WhyMarketGlide />
      <CommunitySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
