import { motion } from "framer-motion";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Badge } from "@/components/ui/badge";
import ConnectionRequests from "@/components/ConnectionRequests";
import { ScheduleCallDialog } from "@/components/ScheduleCallDialog";

const HeroSectionNew = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-accent/90 via-accent to-accent-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#ffffff10,transparent)]"></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-center lg:text-left">
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6"
            >
              The Trusted Discovery Layer For{" "}
              <span className="block mt-2">Global Private Markets</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl lg:max-w-none"
            >
              Connect with elite investors, funds, and opportunities. All in one place.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <ScheduleCallDialog>
                <InteractiveHoverButton variant="cta" size="xl" className="bg-white text-accent hover:bg-white/90">
                  Schedule a Call
                </InteractiveHoverButton>
              </ScheduleCallDialog>
            </motion.div>
          </div>

          {/* Right Content - Connection Requests Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hidden lg:flex justify-end"
          >
            <ConnectionRequests />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionNew;