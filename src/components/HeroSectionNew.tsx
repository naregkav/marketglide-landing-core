import { motion } from "framer-motion";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Badge } from "@/components/ui/badge";
import ConnectionRequests from "@/components/ConnectionRequests";

const HeroSectionNew = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-accent/90 via-accent to-accent-secondary">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        {/* Primary radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_30%_300px,#ffffff15,transparent)]"></div>
        
        {/* Secondary radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_70%_100px,#ffffff08,transparent)]"></div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_800px_at_50%_400px,#ffffff05,transparent)]"></div>
        
        {/* Animated floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/3 w-24 h-24 bg-white/4 rounded-full blur-lg"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/6 rounded-full blur-md"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
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
              <InteractiveHoverButton variant="cta" size="xl" className="bg-white text-accent hover:bg-white/90">
                Schedule a Call
              </InteractiveHoverButton>
            </motion.div>
          </div>

          {/* Right Content - Connection Requests Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <ConnectionRequests />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionNew;