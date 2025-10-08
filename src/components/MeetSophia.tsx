import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, BarChart3, Clock, Target } from "lucide-react";

const MeetSophia = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Matches",
      description: "Get matched with relevant opportunities in seconds, not weeks.",
    },
    {
      icon: BarChart3,
      title: "Smart Insights",
      description: "Receive data-driven insights to make better investment decisions.",
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "24/7 AI agent ready to help with your investment queries.",
    },
    {
      icon: Target,
      title: "Action Oriented",
      description: "Not just information - get actionable steps for every opportunity.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-accent via-accent to-accent-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Meet Sophia
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Your fundraising AI agent that never sleeps
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Feature Cards */}
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
                  <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-3">{feature.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Dashboard Container */}
            <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-white/30 to-white/20 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white/40 rounded-full"></div>
                  </div>
                  <div>
                    <div className="w-24 h-4 bg-white/30 rounded-md mb-2"></div>
                    <div className="w-20 h-3 bg-white/20 rounded-md"></div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                  <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                  <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="bg-white/10 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-32 h-4 bg-white/30 rounded"></div>
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-white/20 rounded"></div>
                    <div className="w-6 h-6 bg-white/20 rounded"></div>
                  </div>
                </div>
                <div className="flex items-end justify-between space-x-3 h-24">
                  {[45, 70, 35, 85, 55, 75, 50, 90].map((height, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-t from-white/40 to-white/60 rounded-t-lg flex-1"
                      style={{ height: `${height}%` }}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ duration: 1.2, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  ))}
                </div>
              </div>

              {/* Data Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "85%", label: "Match Accuracy" },
                  { value: "2.3x", label: "Deal Flow" },
                  { value: "48h", label: "Response Time" },
                  { value: "95%", label: "User Satisfaction" },
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 rounded-xl p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-xs text-white/70">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl backdrop-blur-sm border border-white/30"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-8 -left-6 w-16 h-16 bg-gradient-to-r from-white/15 to-white/5 rounded-xl backdrop-blur-sm border border-white/20"
              animate={{
                y: [0, 12, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
            <motion.div
              className="absolute top-1/3 -left-4 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm border border-white/25"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetSophia;
