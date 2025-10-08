import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Users, Award, CheckCircle2, X } from "lucide-react";
import { WaitlistDialog } from "@/components/WaitlistDialog";

const Academy = () => {
  const comparisons = [
    {
      feature: "Focus Area",
      academy: "Exclusively private markets",
      others: "General business/tech",
      highlight: true,
    },
    {
      feature: "Instructors",
      academy: "Active GPs, LPs, and dealmakers",
      others: "Celebrities & generalists",
      highlight: true,
    },
    {
      feature: "Content Depth",
      academy: "Advanced, actionable insights",
      others: "Introductory overviews",
      highlight: true,
    },
    {
      feature: "Community",
      academy: "Verified industry professionals",
      others: "Open enrollment",
      highlight: true,
    },
    {
      feature: "Application",
      academy: "Real-world deal scenarios",
      others: "Theoretical concepts",
      highlight: true,
    },
  ];

  const topics = [
    {
      icon: BookOpen,
      title: "Fund Structuring",
      description:
        "Learn the intricacies of fund formation, legal structures, and LP agreements from experienced fund managers.",
    },
    {
      icon: Users,
      title: "Investor Relations",
      description:
        "Master the art of LP communications, fundraising narratives, and building long-term investor relationships.",
    },
    {
      icon: Award,
      title: "Deal Execution",
      description:
        "From sourcing to closing — understand due diligence, term sheets, and post-investment value creation.",
    },
    {
      icon: GraduationCap,
      title: "Portfolio Management",
      description: "Develop strategies for portfolio construction, risk management, and performance optimization.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary font-semibold">Coming Soon</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Learn the Language of Private Markets
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              MarketGlide Academy — the world's first masterclass-style learning platform dedicated to private market
              investing.
            </p>
            <WaitlistDialog
              title="Join MarketGlide Academy Waitlist"
              description="Be the first to access our exclusive masterclass content when we launch. We'll notify you as soon as enrollment opens."
              source="academy"
            >
              <Button size="lg" className="text-lg px-8 py-6">
                Join the Waitlist
              </Button>
            </WaitlistDialog>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-12 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
              <GraduationCap className="w-20 h-20 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Launching Soon</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Built with experts from global investment, finance, and legal backgrounds.
              </p>
              <p className="text-xl font-semibold text-foreground">
                From fund structuring to investor relations, learn directly from professionals who've done it.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What You'll Learn</h2>
            <p className="text-xl text-muted-foreground">Expert-led masterclasses on the topics that matter</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <topic.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{topic.title}</h3>
                  <p className="text-muted-foreground">{topic.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why MarketGlide Academy?</h2>
            <p className="text-xl text-muted-foreground">
              The only learning platform built for private markets professionals
            </p>
          </motion.div>

          <Card className="overflow-hidden border-2">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="p-4 text-left font-semibold">Feature</th>
                    <th className="p-4 text-left font-semibold text-primary">MarketGlide Academy</th>
                    <th className="p-4 text-left font-semibold text-muted-foreground">Other EdTech Platforms</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr key={item.feature} className={index % 2 === 0 ? "bg-muted/20" : ""}>
                      <td className="p-4 font-medium">{item.feature}</td>
                      <td className="p-4">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className={item.highlight ? "font-semibold" : ""}>{item.academy}</span>
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <X className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                          <span>{item.others}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Be the first to access MarketGlide Academy</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sign up for early updates and exclusive founding member benefits.
              </p>
              <Button size="lg" className="text-lg px-8 py-6" asChild>
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

export default Academy;
