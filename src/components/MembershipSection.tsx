import { Button } from "@/components/ui/button";
import { Check, Crown, Star, Zap } from "lucide-react";

const MembershipSection = () => {
  const membershipTiers = [
    {
      icon: Zap,
      name: "Investor",
      description: "For individual investors seeking premium opportunities",
      price: "Contact Us",
      features: [
        "Access to vetted deal flow",
        "Basic market intelligence",
        "Community forum access",
        "Monthly market updates",
        "Standard support"
      ],
      cta: "Apply Now",
      popular: false
    },
    {
      icon: Crown,
      name: "Fund Manager",
      description: "For professional fund managers and institutional investors",
      price: "Premium",
      features: [
        "Priority deal access",
        "Advanced analytics dashboard",
        "Direct LP introductions",
        "Custom research reports",
        "Dedicated relationship manager",
        "API access"
      ],
      cta: "Schedule Call",
      popular: true
    },
    {
      icon: Star,
      name: "Advisor",
      description: "For advisors and consultants in private markets",
      price: "Custom",
      features: [
        "White-label solutions",
        "Client portfolio management",
        "Co-investment opportunities",
        "Regulatory compliance tools",
        "Training & certification",
        "Revenue sharing programs"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="membership" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Exclusive{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Membership Tiers
            </span>
          </h2>
          <p className="text-subtitle">
            Choose the membership that fits your investment strategy and unlock 
            access to global private market opportunities.
          </p>
        </div>

        {/* Membership Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {membershipTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative card-premium p-8 ${
                tier.popular 
                  ? 'ring-2 ring-accent shadow-glow transform scale-105' 
                  : ''
              } hover-lift`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium shadow-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-6 mx-auto">
                <tier.icon className="w-7 h-7 text-accent-foreground" />
              </div>

              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {tier.description}
                </p>
                <div className="text-3xl font-bold text-foreground">
                  {tier.price}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={tier.popular ? "cta" : "hero"}
                size="lg"
                className="w-full"
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg">
          <p className="text-muted-foreground text-sm">
            All memberships include our standard compliance framework and regulatory support. 
            <br />
            Custom enterprise solutions available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;