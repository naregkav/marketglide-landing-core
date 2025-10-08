import { Trophy, Target, Zap, Shield, Users2, TrendingUp, Globe, Award } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ScheduleCallDialog } from "@/components/ScheduleCallDialog";
import { Link } from "react-router-dom";

const PEVCPage = () => {
  const benefits = [
    {
      icon: Target,
      title: "Exclusive Deal Flow",
      description: "Access opportunities aligned with your mandate, all vetted through a structured onboarding process."
    },
    {
      icon: Globe,
      title: "Sector-Specific Filters",
      description: "Explore deals in tech, healthcare, sustainability, infrastructure, and more."
    },
    {
      icon: Zap,
      title: "Early Access to Deals",
      description: "Gain first-mover advantage by investing in companies and funds before they reach wider attention."
    },
    {
      icon: Users2,
      title: "Co-Investment Ready",
      description: "Collaborate on larger tickets, discover fund syndications, and access joint participation opportunities."
    },
    {
      icon: Award,
      title: "Expert Network Access",
      description: "Tap into trusted legal, regulatory, and investment professionals."
    },
    {
      icon: TrendingUp,
      title: "Peer Intelligence",
      description: "See what other funds are tracking and which sectors are gaining traction."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Premium & Exclusive */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-8 border border-accent/30">
              <Trophy className="w-4 h-4 text-accent-foreground" />
              <span className="text-accent-foreground font-semibold text-sm uppercase tracking-wide">For PE & VC Investors</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
              Superior Deal Flow for PE & VC Investors
            </h1>
            <p className="text-2xl text-primary-foreground/90 mb-8 font-medium">
              Strategic Sourcing in High-Growth Markets
            </p>
            <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed max-w-3xl mx-auto">
              Whether you're deploying growth capital, seeking strategic buyouts, or backing next-gen founders, MarketGlide gives you access to a high-signal environment designed for top investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://stage.marketglide.io/app/registration/investor?type=investor" target="_blank" rel="noopener noreferrer">
                <InteractiveHoverButton variant="cta" size="xl" className="bg-accent hover:bg-accent/90 text-foreground">
                  Access Deal Flow Now
                </InteractiveHoverButton>
              </a>
              <ScheduleCallDialog source="pe-vc">
                <InteractiveHoverButton variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Schedule a Call
                </InteractiveHoverButton>
              </ScheduleCallDialog>
            </div>
          </div>
        </div>
      </section>

      {/* How MarketGlide Helps - Dark Premium Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                How MarketGlide <span className="bg-gradient-accent bg-clip-text text-transparent">Helps You</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Streamline your investment workflow with powerful tools designed for professional investors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="card-premium p-8 hover-lift group bg-gradient-to-br from-card to-card/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Compliance */}
      <section className="py-24 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="card-premium p-12 bg-gradient-to-br from-card to-primary/5">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Shield className="w-24 h-24 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Smart Compliance & Institutional Credibility
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    All users undergo verification. Baseline checks ensure you're connecting with legitimate, qualified counterparties. Our platform aligns with regulatory standards, providing the institutional credibility you expect.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="px-4 py-2 bg-primary/10 rounded-lg">
                      <span className="text-primary font-semibold">UK Home Office Aligned</span>
                    </div>
                    <div className="px-4 py-2 bg-primary/10 rounded-lg">
                      <span className="text-primary font-semibold">Verified Users Only</span>
                    </div>
                    <div className="px-4 py-2 bg-primary/10 rounded-lg">
                      <span className="text-primary font-semibold">Secure Data</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Intelligence */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Stay Ahead with <span className="bg-gradient-accent bg-clip-text text-transparent">Market Intelligence</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Join a community of leading investors. See trending sectors, connect with co-investors, and leverage peer intelligence to make smarter decisions faster.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="card-premium p-6">
                <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">300+</div>
                <div className="text-sm text-muted-foreground">Active PE/VC Firms</div>
              </div>
              <div className="card-premium p-6">
                <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">£5B+</div>
                <div className="text-sm text-muted-foreground">AUM Represented</div>
              </div>
              <div className="card-premium p-6">
                <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">12</div>
                <div className="text-sm text-muted-foreground">Sector Verticals</div>
              </div>
              <div className="card-premium p-6">
                <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">35+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA - Premium Dark */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Access Superior Deal Flow?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10">
              Schedule a call to see how MarketGlide connects PE/VC firms with high-quality, vetted opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://stage.marketglide.io/app/registration/investor?type=investor" target="_blank" rel="noopener noreferrer">
                <InteractiveHoverButton variant="cta" size="xl" className="bg-accent hover:bg-accent/90 text-foreground">
                  Join the Network
                </InteractiveHoverButton>
              </a>
              <ScheduleCallDialog source="pe-vc">
                <InteractiveHoverButton variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Schedule Your Call
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

export default PEVCPage;
