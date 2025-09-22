import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Globe } from "@/components/ui/globe";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] pt-20 flex items-center justify-center overflow-hidden">
      {/* Interactive Globe Background */}
      <div className="absolute inset-0 flex items-end justify-center pb-8">
        <Globe className="scale-90 md:scale-100" />
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn">
            The Trusted Discovery Layer for{" "}
            <span className="block mt-2">Global Private Markets</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed animate-fadeIn delay-200">
            Exclusive access to premium private market opportunities, trusted strategic advisory services, and a vetted community of elite investors, fund managers, and dealmakers.
          </p>

          {/* Platform Message */}
          <p className="text-white/80 mb-8 font-medium animate-fadeIn delay-300">
            All in one powerful platform.
          </p>

          {/* CTA Button */}
          <div className="animate-slideUp delay-400">
            <Button variant="cta" size="xl" className="group bg-white text-primary hover:bg-white/90">
              Schedule a Call
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 animate-fadeIn delay-600">
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