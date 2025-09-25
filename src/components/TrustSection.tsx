import { motion } from "framer-motion";
import { useRef } from "react";

const TrustSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const partners = [
    { name: "ENDURANCE", logo: "ENDURANCE" },
    { name: "Yotewo", logo: "Yotewo" },
    { name: "Founders Law", logo: "Founders Law" },
    { name: "Shojin", logo: "Shojin" },
    { name: "MarketGlide", logo: "MarketGlide" },
    { name: "InvestTech", logo: "InvestTech" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-muted-foreground text-sm font-medium uppercase tracking-wider mb-8">
            Users and partners who trust us
          </h2>
        </motion.div>

        {/* Animated Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={scrollRef}
            className="flex space-x-12 py-4"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Double the partners for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center min-w-[200px] h-16"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-muted-foreground font-semibold text-lg tracking-wide opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                  {partner.logo}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;