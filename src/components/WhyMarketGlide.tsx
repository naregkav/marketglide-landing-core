import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Check } from "lucide-react";

const WhyMarketGlide = () => {
  const comparison = {
    otherTools: [
      "Fragmented networks",
      "Manual research required",
      "Limited deal visibility",
      "No verification process",
      "Generic matching",
      "Siloed communications"
    ],
    marketGlide: [
      "Unified ecosystem",
      "AI-powered discovery",
      "Exclusive deal flow",
      "Verified members only",
      "Intelligent matching",
      "Integrated platform"
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Why MarketGlide?
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The difference is clear
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how MarketGlide transforms your private market experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Other Tools */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card border-destructive/20">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Other Tools</h3>
                    <p className="text-muted-foreground">Traditional approach</p>
                  </div>
                  
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    {comparison.otherTools.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-destructive/5"
                      >
                        <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                          <X className="h-4 w-4 text-destructive" />
                        </div>
                        <p className="text-foreground">{item}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* MarketGlide */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-accent/5 to-accent/10 border-accent/30 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">MarketGlide</h3>
                    <p className="text-accent font-medium">The future is here</p>
                  </div>
                  
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    {comparison.marketGlide.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors duration-300"
                      >
                        <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <p className="text-foreground font-medium">{item}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMarketGlide;
