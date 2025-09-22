import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/glow-card";
import { MapPin, TrendingUp, Clock } from "lucide-react";

const TopOpportunities = () => {
  const opportunities = [
    {
      title: "Shojin: Edenbridge",
      description: "Shojin is pleased to introduce its latest investment opportunity, Town Station Yard. Edenbridge, Kent. This is a development of 38 residential units, comprising 19 flats and 19 houses, as well as the conversion of the Grade II listed building at the center of the site, known as the Goods Shed, into commercial space.",
      image: "/api/placeholder/400/250",
      category: "Real Estate",
      region: "UK & IRELAND",
      returnRate: "Fixed 17%",
      timeline: "36 months",
      glowColor: "blue" as const
    },
    {
      title: "World Trade Center Yerevan",
      description: "To develop an iconic, grade A, net-zero mixed-use infrastructure in the center of Yerevan.",
      image: "/api/placeholder/400/250", 
      category: "Infrastructure",
      region: "SOUTHEAST EUROPE",
      returnRate: "IRR 22%",
      timeline: "48 months",
      glowColor: "teal" as const
    },
    {
      title: "Treelogy LLC",
      description: "Cultivating top-quality palms in a premier facility, Treelogy is committed to food security and sustainability.",
      image: "/api/placeholder/400/250",
      category: "Agriculture", 
      region: "MENA",
      returnRate: "ROI 25%",
      timeline: "60 months",
      glowColor: "green" as const
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Top Opportunities
          </h2>
          <p className="text-subtitle">
            Discover the latest high-growth investment opportunities from companies and funds on MarketGlide's exclusive network.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {opportunities.map((opportunity, index) => (
            <GlowCard
              key={opportunity.title}
              glowColor={opportunity.glowColor}
              customSize={true}
              className="overflow-hidden hover-lift group fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <div className="w-full h-full bg-muted/30 flex items-center justify-center">
                  <div className="text-muted-foreground text-sm">Investment Image</div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {opportunity.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {opportunity.title}
                  </h3>
                  <div className="flex items-center text-success text-sm font-medium">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {opportunity.returnRate}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                  {opportunity.description}
                </p>

                {/* Metadata */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {opportunity.region}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {opportunity.timeline}
                  </div>
                </div>

                {/* CTA */}
                <Button variant="outline" size="sm" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  View Details
                </Button>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopOpportunities;