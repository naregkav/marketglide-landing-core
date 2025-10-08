import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Target, Zap, MessageSquare, TrendingUp, Database } from "lucide-react";
import { WaitlistDialog } from "@/components/WaitlistDialog";

const SophiaAI = () => {
  const features = [
    {
      icon: Target,
      title: "Investor Matching",
      description: "Analyzes 100K+ investor profiles to find ideal matches based on thesis, region, and stage."
    },
    {
      icon: MessageSquare,
      title: "Instant Outreach Flows",
      description: "Generates personalized messages and strategies tailored to each investor."
    },
    {
      icon: Zap,
      title: "Workflow Integration",
      description: "Track progress and follow-ups automatically with seamless workflow management."
    }
  ];

  const trustPoints = [
    {
      icon: Database,
      title: "Proprietary Data",
      description: "Powered by MarketGlide's exclusive database of verified investors and market intelligence."
    },
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced algorithms trained on real fundraising success patterns."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Built by MarketGlide, refined through years of private market expertise."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="text-accent font-semibold">Coming Soon</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Meet Sophia — Your Fundraising AI Agent
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Sophia transforms investor discovery into intelligent, data-driven matchmaking. Powered by MarketGlide's proprietary database and real-time market intelligence.
            </p>
            <WaitlistDialog
              title="Join Sophia AI Waitlist"
              description="Be the first to experience Sophia when it launches. We'll notify you as soon as it's available."
              source="sophia-ai"
            >
              <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90">
                Join the Waitlist
              </Button>
            </WaitlistDialog>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Features</h2>
            <p className="text-xl text-muted-foreground">Intelligence that adapts to your fundraising needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Example */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">See Sophia in Action</h2>
            <p className="text-xl text-muted-foreground">Real results, real intelligence</p>
          </motion.div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-accent/5 to-primary/5 border-2 border-accent/20">
            <div className="space-y-6">
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground mb-2">User Query:</p>
                <p className="text-lg font-medium">"Looking for VCs investing in Series A SaaS in Europe."</p>
              </div>
              
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-accent animate-pulse" />
                </div>
              </div>

              <div className="bg-accent/10 backdrop-blur-sm p-6 rounded-lg border border-accent/30">
                <p className="text-sm text-accent mb-2">Sophia's Response:</p>
                <p className="text-lg font-medium mb-4">
                  "Found 12 matches currently deploying capital — including Index Ventures and Balderton Capital."
                </p>
                <p className="text-muted-foreground">
                  Complete with investment thesis alignment, recent portfolio additions, and recommended outreach strategies.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Built by MarketGlide</h2>
            <p className="text-xl text-muted-foreground">Backed by data, refined by experience</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-2 hover:border-accent/50 transition-all duration-300">
                  <point.icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
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
            <Card className="p-12 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Be first to use Sophia. Join the early access program.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Limited spots available for founding members who'll shape the future of AI-powered fundraising.
              </p>
              <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90" asChild>
                <a href="/membership">Join Waitlist</a>
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SophiaAI;
