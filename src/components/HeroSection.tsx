import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Global private markets visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-hero text-white mb-6 animate-fadeIn">
            Discover Premium{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Private Market
            </span>{" "}
            Opportunities
          </h1>

          {/* Subheading */}
          <p className="text-subtitle text-white/90 mb-8 max-w-2xl mx-auto animate-fadeIn delay-200">
            Exclusive access to vetted investors, strategic advisory, and global 
            private deals in one platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp delay-400">
            <Button variant="cta" size="xl" className="group">
              Schedule a Call
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Play className="mr-2 w-4 h-4" />
              Apply for Access
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-fadeIn delay-600">
            <p className="text-white/60 text-sm mb-4 font-medium uppercase tracking-wider">
              Trusted by Leading Investment Firms
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {/* Placeholder for partner logos */}
              <div className="h-8 w-24 bg-white/20 rounded backdrop-blur-sm"></div>
              <div className="h-8 w-24 bg-white/20 rounded backdrop-blur-sm"></div>
              <div className="h-8 w-24 bg-white/20 rounded backdrop-blur-sm"></div>
              <div className="h-8 w-24 bg-white/20 rounded backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;