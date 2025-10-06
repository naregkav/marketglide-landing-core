import { motion } from "framer-motion";
import { Rocket, Building2, Home, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhoWeServe = () => {
  const communities = [
    {
      icon: Rocket,
      title: "Startups",
      subtitle: "Seed to Series C",
      buttonText: "Raise Faster",
      description: "Connect with VCs, angels, and strategic investors who are actively looking for deals in your sector.",
      stat: "Average 3.2 months to close",
      link: "https://stage.marketglide.io/app/registration/company?type=company",
      bgColor: "from-primary/10 to-primary/5",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Building2,
      title: "Fund Managers",
      subtitle: "Emerging & Established",
      buttonText: "Find LPs",
      description: "Access family offices, institutional investors, and HNWIs ready to commit capital to your fund.",
      stat: "€50M+ average fund size",
      link: "https://stage.marketglide.io/app/registration/company?type=fund",
      bgColor: "from-accent/10 to-accent/5",
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
    },
    {
      icon: Home,
      title: "Real Estate",
      subtitle: "Projects & Developments",
      buttonText: "Showcase Developments",
      description: "Present your projects to real estate investors, REITs, and development finance partners.",
      stat: "€2M-€100M+ deal sizes",
      link: "https://stage.marketglide.io/app/registration/company?type=company",
      bgColor: "from-success/10 to-success/5",
      iconBg: "bg-success/10",
      iconColor: "text-success",
    },
    {
      icon: TrendingUp,
      title: "Investors",
      subtitle: "Angels to Institutions",
      buttonText: "Access Vetted Dealflow",
      description: "Discover curated investment opportunities across all asset classes and geographies.",
      stat: "500+ verified deals monthly",
      link: "https://stage.marketglide.io/app/registration/investor?type=investor-private",
      bgColor: "from-primary-glow/10 to-primary-glow/5",
      iconBg: "bg-primary-glow/10",
      iconColor: "text-primary-glow",
      highlighted: true,
    },
    {
      icon: Users,
      title: "Advisors and Partners",
      subtitle: "Strategic Experts",
      buttonText: "Join Network",
      description: "Connect with companies and investors as a trusted advisor, bringing expertise and opportunities.",
      stat: "Premium advisor network",
      link: "https://stage.marketglide.io/app/registration/investor?type=investor-advisors",
      bgColor: "from-accent-secondary/10 to-accent-secondary/5",
      iconBg: "bg-accent-secondary/10",
      iconColor: "text-accent-secondary",
    },
  ];

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
            Who We Serve
          </h2>
          <p className="text-lg text-muted-foreground">
            Five distinct communities, one powerful platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {communities.map((community, index) => {
            const Icon = community.icon;
            return (
              <motion.div
                key={community.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full flex flex-col relative overflow-hidden ${community.highlighted ? 'border-primary shadow-lg' : ''}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${community.bgColor} pointer-events-none`} />
                  <CardHeader className="relative">
                    <div className={`w-14 h-14 rounded-full ${community.iconBg} flex items-center justify-center mb-4`}>
                      <Icon className={`w-7 h-7 ${community.iconColor}`} />
                    </div>
                    <CardTitle className="text-xl mb-1">{community.title}</CardTitle>
                    <CardDescription className="text-sm">{community.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col relative">
                    <Button
                      variant={community.highlighted ? "default" : "outline"}
                      className="w-full mb-4"
                      asChild
                    >
                      <a href={community.link} target="_blank" rel="noopener noreferrer">
                        {community.buttonText}
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {community.description}
                    </p>
                    <div className="bg-background/50 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/50">
                      <p className="text-xs text-center text-muted-foreground">
                        {community.stat}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground">
            <span className="text-primary font-bold">500+</span> active members across all segments
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeServe;
