import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Membership = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const features = [
    {
      name: "Profile Views / Month",
      basic: "3 Current Listings & 3 Community Profiles",
      standard: "10 Current Listings & 10 Community Profiles", 
      premium: "Unlimited"
    },
    {
      name: "Connection Requests / Month",
      basic: "",
      standard: "10 Current Listings & 10 Community Profiles",
      premium: "Unlimited"
    },
    {
      name: "Direct Messaging / Month",
      basic: "Reply-Only Access",
      standard: "Start Chats with 10 Current Listings & 10 Community Profiles",
      premium: "Unlimited"
    },
    {
      name: "Smart Filters",
      basic: "Industry & Region Only",
      standard: "All in Free, plus Investment Size & Funding Stage",
      premium: "Unlimited Custom Filters Across Deal Type, Stage, Geography & More"
    },
    {
      name: "Expert Network Access",
      basic: false,
      standard: false,
      premium: "2 Hours / Month"
    },
    {
      name: "Curated Strategy Sessions",
      basic: false,
      standard: false,
      premium: true
    },
    {
      name: "Investor Roundtables",
      basic: false,
      standard: false,
      premium: true
    },
    {
      name: "Community Events",
      basic: false,
      standard: false,
      premium: true
    },
    {
      name: "Market Research Reports",
      basic: false,
      standard: false,
      premium: true
    },
    {
      name: "Platform Matching Alerts",
      basic: false,
      standard: false,
      premium: true
    },
    {
      name: "Concierge Support",
      basic: false,
      standard: false,
      premium: true
    }
  ];

  const tiers = {
    basic: {
      name: "Basic",
      price: { monthly: "Free", yearly: "Free" },
      subtitle: "/ Lifetime",
      description: "Perfect for those that best fits your investor or founder journey"
    },
    standard: {
      name: "Standard", 
      price: { monthly: "$199", yearly: "$1,999" },
      subtitle: billingCycle === "monthly" ? "/ Monthly" : "/ Yearly",
      description: "Enhanced features for serious investors"
    },
    premium: {
      name: "Premium",
      price: { monthly: "$299", yearly: "$2,999" },
      subtitle: billingCycle === "monthly" ? "/ Monthly" : "/ Yearly", 
      description: "Full access for professional fund managers"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Membership Tiers
            </h1>
            <p className="text-subtitle mb-8">
              Choose the plan that best fits your investment strategy and unlock access to premium private market opportunities.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <div className="bg-muted p-1 rounded-lg flex">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    billingCycle === "monthly"
                      ? "bg-accent text-accent-foreground shadow-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    billingCycle === "yearly"
                      ? "bg-accent text-accent-foreground shadow-medium" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Desktop Table View */}
            <div className="hidden lg:block">
              <div className="card-premium overflow-hidden">
                {/* Header Row */}
                <div className="grid grid-cols-4 bg-muted/30">
                  <div className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Feature</h3>
                    <p className="text-muted-foreground text-sm">
                      Everything you need that best fits your investor or founder journey
                    </p>
                  </div>
                  
                  {Object.entries(tiers).map(([key, tier]) => (
                    <div key={key} className="p-6 text-center border-l border-border">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {tier.name}
                      </h3>
                      <div className="mb-2">
                        <span className="text-2xl font-bold text-accent">
                          {tier.price[billingCycle]}
                        </span>
                        <span className="text-muted-foreground text-sm ml-1">
                          {tier.subtitle}
                        </span>
                      </div>
                      <Button 
                        variant={key === "premium" ? "cta" : "hero"} 
                        size="sm"
                        className="w-full mb-2"
                      >
                        Apply →
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Feature Rows */}
                {features.map((feature, index) => (
                  <div key={feature.name} className={`grid grid-cols-4 border-t border-border ${
                    index % 2 === 0 ? "bg-background" : "bg-muted/20"
                  }`}>
                    <div className="p-4 font-medium text-foreground">
                      {feature.name}
                    </div>
                    <div className="p-4 text-sm text-muted-foreground border-l border-border">
                      {typeof feature.basic === "string" ? feature.basic : 
                       feature.basic ? <Check className="w-4 h-4 text-success mx-auto" /> :
                       <X className="w-4 h-4 text-muted-foreground/50 mx-auto" />}
                    </div>
                    <div className="p-4 text-sm text-muted-foreground border-l border-border">
                      {typeof feature.standard === "string" ? feature.standard :
                       feature.standard ? <Check className="w-4 h-4 text-success mx-auto" /> :
                       <X className="w-4 h-4 text-muted-foreground/50 mx-auto" />}
                    </div>
                    <div className="p-4 text-sm text-muted-foreground border-l border-border">
                      {typeof feature.premium === "string" ? feature.premium :
                       feature.premium ? <Check className="w-4 h-4 text-success mx-auto" /> :
                       <X className="w-4 h-4 text-muted-foreground/50 mx-auto" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden space-y-8">
              {Object.entries(tiers).map(([key, tier]) => (
                <div key={key} className="card-premium p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {tier.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-accent">
                        {tier.price[billingCycle]}
                      </span>
                      <span className="text-muted-foreground text-sm ml-1">
                        {tier.subtitle}
                      </span>
                    </div>
                    <Button 
                      variant={key === "premium" ? "cta" : "hero"} 
                      size="sm"
                      className="w-full"
                    >
                      Apply →
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {features.map((feature) => {
                      const value = feature[key as keyof typeof feature] as string | boolean;
                      return (
                        <div key={feature.name} className="flex justify-between items-start">
                          <span className="text-sm font-medium text-foreground">
                            {feature.name}
                          </span>
                          <div className="text-sm text-muted-foreground text-right max-w-[60%]">
                            {typeof value === "string" ? value :
                             value ? <Check className="w-4 h-4 text-success" /> :
                             <X className="w-4 h-4 text-muted-foreground/50" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-accent p-8 rounded-lg text-accent-foreground">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <p className="text-accent-foreground/90 mb-2">
                    For firms with complex needs, high-volume deal flow, or multi-team usage, our Enterprise plan offers customized access, advanced features, and dedicated support.
                  </p>
                  <p className="text-accent-foreground/80 text-sm">
                    Whether you're a fund, family office, corporate VC, or ecosystem partner, we'll tailor MarketGlide to work for you.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Talk to us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Membership;