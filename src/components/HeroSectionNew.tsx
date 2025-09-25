import { motion } from "framer-motion";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Badge } from "@/components/ui/badge";
import ConnectionRequests from "@/components/ConnectionRequests";

const HeroSectionNew = () => {
  return (
    <section className="relative min-h-screen pt-20 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-accent/90 via-accent to-accent-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#ffffff10,transparent)]"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
              Coming Soon: AI Agent on WhatsApp
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-hero text-white mb-6"
          >
            The Trusted Discovery Layer For{" "}
            <span className="block mt-2">Global Private Markets</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-subtitle text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Connect with elite investors, funds, and opportunities. All in one place.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <InteractiveHoverButton variant="cta" size="xl" className="bg-white text-accent hover:bg-white/90">
              Schedule a Call
            </InteractiveHoverButton>
          </motion.div>
        </div>
      </div>

      {/* Connection Requests Widget */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10"
      >
        <ConnectionRequests />
      </motion.div>
    </section>
  );
};

export default HeroSectionNew;