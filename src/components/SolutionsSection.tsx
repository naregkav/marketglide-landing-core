import { Network, Shield, Users, TrendingUp } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Network,
      title: "Exclusive Deal Flow",
      description: "Access premium private market opportunities curated by our expert team.",
      features: ["Pre-vetted opportunities", "Early-stage access", "Global coverage"]
    },
    {
      icon: Shield,
      title: "Trusted Network",
      description: "Connect with verified investors, fund managers, and industry leaders.",
      features: ["KYC verified members", "Reputation scoring", "Secure communications"]
    },
    {
      icon: Users,
      title: "Strategic Advisory",
      description: "Expert guidance from seasoned professionals in private markets.",
      features: ["1-on-1 consultations", "Market insights", "Deal structuring"]
    },
    {
      icon: TrendingUp,
      title: "Portfolio Intelligence",
      description: "Advanced analytics and reporting for your private market investments.",
      features: ["Performance tracking", "Risk analytics", "Benchmark comparisons"]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Solutions for{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Private Markets
            </span>
          </h2>
          <p className="text-subtitle">
            Everything you need to discover, evaluate, and execute private market opportunities 
            in one integrated platform.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="card-premium p-6 hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="w-6 h-6 text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {solution.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {solution.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="text-sm text-muted-foreground flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <InteractiveHoverButton variant="ghost" size="sm" className="w-full">
                Learn More
              </InteractiveHoverButton>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <InteractiveHoverButton variant="hero" size="lg">
            Explore All Solutions
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;