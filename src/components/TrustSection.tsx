import { motion } from "framer-motion";

const TrustSection = () => {
  const partners = [
    "ENDURANCE", "Yotewo", "Founders Law", "Shojin", "MarketGlide", "InvestTech"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-semibold text-center text-muted-foreground mb-16"
        >
          Users and partners who trust us
        </motion.h2>
        
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-16 items-center"
            animate={{ x: [0, -1200] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 flex items-center justify-center min-w-[180px] h-16"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-xl md:text-2xl font-bold text-muted-foreground/80 hover:text-muted-foreground tracking-wide transition-colors duration-300">
                  {partner}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default TrustSection;