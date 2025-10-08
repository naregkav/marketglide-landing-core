import { Crown, Handshake, Calendar, Shield, Globe2, TrendingUp } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ScheduleCallDialog } from "@/components/ScheduleCallDialog";
import { Link } from "react-router-dom";

const FamilyOfficesPage = () => {
  const benefits = [
    {
      icon: Globe2,
      title: "Cross-Border Opportunities",
      description: "Access curated opportunities aligned with multi-generational capital goals across global markets."
    },
    {
      icon: Handshake,
      title: "Trusted Relationships",
      description: "Build long-term trusted relationships with founders, funds, and co-investors in a discreet environment."
    },
    {
      icon: Calendar,
      title: "Exclusive Events",
      description: "Participate in exclusive roundtables, forums, and investor events designed for family office principals."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Premium & Discreet */}
      <section className="relative pt-32 pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Crown className="w-16 h-16 text-accent mx-auto mb-8" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Tailored Capital Strategies for{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Family Offices
              </span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-8 font-light">
              Explore Cross-Border Opportunities with Confidence
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              MarketGlide empowers family offices to seamlessly explore exciting deals, tailored to long-term wealth strategies and cross-border market access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply/family-offices">
                <InteractiveHoverButton variant="hero" size="xl" className="shadow-large">
                  Get Started
                </InteractiveHoverButton>
              </Link>
              <ScheduleCallDialog>
                <InteractiveHoverButton variant="outline" size="xl">
                  Schedule a Call
                </InteractiveHoverButton>
              </ScheduleCallDialog>
            </div>
          </div>
        </div>
      </section>

      {/* How MarketGlide Helps - Elegant Spacing */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-6">
              How MarketGlide <span className="bg-gradient-accent bg-clip-text text-transparent">Serves You</span>
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto font-light">
              Designed for the unique needs of multi-generational wealth management
            </p>

            <div className="space-y-12">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="card-premium p-10 hover-lift group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-glow">
                      <benefit.icon className="w-10 h-10 text-accent-foreground" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-semibold text-foreground mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed font-light">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Discretion & Trust */}
      <section className="py-28 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Discretion & <span className="bg-gradient-accent bg-clip-text text-transparent">Trust</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                Your privacy and security are paramount. All interactions occur in a verified, gated environment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Verified Network</h3>
                <p className="text-muted-foreground font-light">
                  Connect only with vetted investors, funds, and opportunities that meet our standards.
                </p>
              </div>

              <div className="text-center p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Handshake className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Confidential Dealings</h3>
                <p className="text-muted-foreground font-light">
                  Your activity and interests remain private. Share information on your terms.
                </p>
              </div>

              <div className="text-center p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Long-Term Focus</h3>
                <p className="text-muted-foreground font-light">
                  Built for patient capital and multi-generational wealth strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="card-premium p-12 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Join an Elite <span className="bg-gradient-accent bg-clip-text text-transparent">Community</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-light">
                Connect with like-minded family offices, participate in curated events, and gain access to market intelligence that matters.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">80+</div>
                  <div className="text-muted-foreground font-light">Family Offices</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">£12B+</div>
                  <div className="text-muted-foreground font-light">AUM Represented</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">40+</div>
                  <div className="text-muted-foreground font-light">Countries</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {["Private Roundtables", "Co-Investment Forum", "Market Intelligence", "Expert Network"].map((tag) => (
                  <span key={tag} className="px-5 py-2 bg-muted rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA - Elegant */}
      <section className="py-24 bg-gradient-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent-foreground rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-foreground rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-6">
              Ready to Explore Premium Opportunities?
            </h2>
            <p className="text-xl text-accent-foreground/90 mb-10 font-light">
              Schedule a call to discover how MarketGlide can help your family office identify and execute high-quality investment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply/family-offices">
                <InteractiveHoverButton 
                  variant="cta" 
                  size="xl" 
                  className="bg-background text-foreground hover:bg-background/90 shadow-large"
                >
                  Get Started
                </InteractiveHoverButton>
              </Link>
              <ScheduleCallDialog>
                <InteractiveHoverButton 
                  variant="outline" 
                  size="xl" 
                  className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10"
                >
                  Schedule a Call
                </InteractiveHoverButton>
              </ScheduleCallDialog>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FamilyOfficesPage;
