import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, BarChart3, Clock, Target } from "lucide-react";

const MeetSophia = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Matches",
      description: "Get matched with relevant opportunities in seconds, not weeks."
    },
    {
      icon: BarChart3,
      title: "Smart Insights",
      description: "Receive data-driven insights to make better investment decisions."
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "24/7 AI assistant ready to help with your investment queries."
    },
    {
      icon: Target,
      title: "Action Oriented",
      description: "Not just information - get actionable steps for every opportunity."
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
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Meet Sophia
            </h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Dashboard Container */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                  <div>
                    <div className="w-20 h-3 bg-white/30 rounded mb-1"></div>
                    <div className="w-16 h-2 bg-white/20 rounded"></div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-white/20 rounded"></div>
                  <div className="w-6 h-6 bg-white/20 rounded"></div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-white/10 rounded-xl p-4 mb-6">
                <div className="flex items-end space-x-2 h-20">
                  {[40, 60, 30, 80, 50, 70, 45].map((height, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/40 rounded-t flex-1"
                      style={{ height: `${height}%` }}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  ))}
                </div>
              </div>

              {/* Data Rows */}
              <div className="space-y-3">
                {[80, 60, 90].map((width, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-4 h-4 bg-white/30 rounded-full"></div>
                    <div className={`h-2 bg-white/20 rounded`} style={{ width: `${width}%` }}></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm border border-white/30"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-4 -left-4 w-12 h-12 bg-white/15 rounded-lg backdrop-blur-sm border border-white/20"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetSophia;