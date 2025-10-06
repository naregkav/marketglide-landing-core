import { motion } from "framer-motion";
import { Rocket, Building2, Home, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WhoWeServe = () => {
  const communities = [
    {
      icon: Rocket,
      title: "Startups",
      subtitle: "Seed to Series C",
      buttonText: "Raise Faster",
      description: "Connect with VCs, angels, and strategic investors who are actively looking for deals in your sector.",
      stat: "Average 3.2 months to close",
      highlighted: false,
    },
    {
      icon: Building2,
      title: "Fund Managers",
      subtitle: "Emerging & Established",
      buttonText: "Find LPs",
      description: "Access family offices, institutional investors, and HNWIs ready to commit capital to your fund.",
      stat: "€50M+ average fund size",
      highlighted: false,
    },
    {
      icon: Home,
      title: "Real Estate",
      subtitle: "Projects & Developments",
      buttonText: "Showcase Developments",
      description: "Present your projects to real estate investors, REITs, and development finance partners.",
      stat: "€2M-€100M+ deal sizes",
      highlighted: false,
    },
    {
      icon: TrendingUp,
      title: "Investors",
      subtitle: "Angels to Institutions",
      buttonText: "Access Vetted Dealflow",
      description: "Discover curated investment opportunities across all asset classes and geographies.",
      stat: "500+ verified deals monthly",
      highlighted: true,
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
            Four distinct communities, one powerful platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                <Card className={`h-full flex flex-col ${community.highlighted ? 'border-primary shadow-lg' : ''}`}>
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-xl mb-1">{community.title}</CardTitle>
                    <CardDescription className="text-sm">{community.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <Button
                      variant={community.highlighted ? "default" : "outline"}
                      className="w-full mb-4"
                    >
                      {community.buttonText}
                    </Button>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {community.description}
                    </p>
                    <div className="bg-muted/50 rounded-lg px-3 py-2">
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
