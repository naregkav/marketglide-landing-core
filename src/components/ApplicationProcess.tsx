import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, UserCheck, Target, Rocket } from "lucide-react";

const ApplicationProcess = () => {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: "Apply",
      description: "Submit your application with your investment profile and objectives."
    },
    {
      number: 2,
      icon: UserCheck,
      title: "Vetting & Curation",
      description: "Our team carefully reviews and verifies your credentials and investment history."
    },
    {
      number: 3,
      icon: Target,
      title: "Get Matched",
      description: "Our AI algorithm matches you with relevant opportunities and network connections."
    },
    {
      number: 4,
      icon: Rocket,
      title: "Start Raising & Investing",
      description: "Begin your journey with exclusive access to premium deal flow and network.",
      isComplete: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Applying to MarketGlide is easy peasy
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-6 right-6 h-0.5 bg-muted hidden md:block">
              <motion.div
                className="h-full bg-gradient-accent"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div key={index} variants={itemVariants} className="h-full">
                    <Card className="card-premium hover-lift group relative h-full">
                      <CardContent className="p-6 text-center h-full flex flex-col">
                        {/* Step Number */}
                        <div className="relative mb-6">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg ${
                            step.isComplete ? 'bg-gradient-accent' : 'bg-accent'
                          }`}>
                            {step.number}
                          </div>
                          {step.isComplete && (
                            <div className="absolute -top-2 -right-2 text-2xl">🎉</div>
                          )}
                        </div>

                        {/* Icon */}
                        <div className="mb-4 flex justify-center">
                          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                            <IconComponent className="h-6 w-6 text-accent" />
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationProcess;