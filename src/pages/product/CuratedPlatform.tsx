import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, Users, TrendingUp } from "lucide-react";

const CuratedPlatform = () => {
  const steps = [
    {
      icon: Shield,
      title: "Apply and Get Verified",
      description: "Submit your application and go through our thorough vetting process to join our exclusive network."
    },
    {
      icon: TrendingUp,
      title: "Access Curated Deal Flow",
      description: "Discover pre-vetted investment opportunities matched to your criteria and investment thesis."
    },
    {
      icon: Users,
      title: "Connect with Confidence",
      description: "Build relationships with verified founders, fund managers, and investors in our trusted ecosystem."
    }
  ];

  const differentiators = [
    {
      title: "Vetted Community",
      description: "Not an open marketplace — every member is personally vetted and verified."
    },
    {
      title: "Transparent Membership",
      description: "No success fees or hidden costs. Simple, clear membership model."
    },
    {
      title: "Human Relationships",
      description: "Backed by real connections and trust, not just algorithms and cold outreach."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              The trusted platform for private market discovery
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Where vetted founders, fund managers, and investors connect through trust and curation — not cold outreach.
            </p>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="/membership">Apply for Membership</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Three simple steps to join the future of deal-making</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It's Different */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why It's Different</h2>
            <p className="text-xl text-muted-foreground">The MarketGlide advantage</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-300">
                  <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join MarketGlide's curated ecosystem of dealmakers shaping the future of private markets
              </h2>
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="/membership">Apply Now</a>
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CuratedPlatform;
