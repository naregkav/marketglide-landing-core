import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Users, MessageSquare, Zap, Shield, Bot } from "lucide-react";

const FeaturesGrid = () => {
  const features = [
    {
      icon: Search,
      title: "Deal Discovery",
      description: "Find the perfect investment opportunities tailored to your criteria and risk profile."
    },
    {
      icon: Users,
      title: "Direct Connections",
      description: "Connect directly with verified investors, fund managers, and industry leaders."
    },
    {
      icon: Bot,
      title: "AI Agent on WhatsApp",
      description: "Get instant responses and deal matching through our intelligent WhatsApp assistant."
    },
    {
      icon: MessageSquare,
      title: "Seamless Messaging",
      description: "Communicate effortlessly with your network through our integrated messaging platform."
    },
    {
      icon: Zap,
      title: "Personal Relationship Manager",
      description: "Manage all your professional relationships in one centralized, intelligent system."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Bank-grade security ensures your sensitive investment data remains protected."
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Designed for trust. Inspired by community.
          </h2>
          <p className="text-xl text-muted-foreground">
            Built for smarter fundraising & investing.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="card-premium hover-lift group h-full">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;