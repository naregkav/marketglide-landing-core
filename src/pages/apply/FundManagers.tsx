import { Shield, Users, FileCheck, Building2, CheckCircle2 } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ScheduleCallDialog } from "@/components/ScheduleCallDialog";

const FundManagersPage = () => {
  const benefits = [
    {
      icon: FileCheck,
      title: "Showcase Your Thesis",
      description: "Clearly communicate your sector focus, team experience, pipeline access, and differentiation — the things LPs actually care about."
    },
    {
      icon: Users,
      title: "Access LPs and Co-GPs",
      description: "Engage with family offices, private investors, and institutional LPs who are open to first-time funds. Discover potential anchor partners."
    },
    {
      icon: Building2,
      title: "Infrastructure Without Overhead",
      description: "Upload pitch decks and documents, securely gated and visible only to certified investors."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Structured & Credible */}
      <section className="relative pt-32 pb-24">
        <div className="absolute inset-0 bg-gradient-subtle"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-5 py-2 bg-primary/10 rounded-lg mb-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">For Emerging Fund Managers</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Built for Emerging Fund Managers & First-Time GPs
            </h1>
            <p className="text-2xl font-semibold text-primary mb-6">
              Position Your Fund to Be Taken Seriously
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Raising capital as a new fund manager is notoriously difficult, especially without established track records or institutional infrastructure. MarketGlide helps emerging GPs cut through the noise and build credibility from day one.
            </p>
            <ScheduleCallDialog>
              <InteractiveHoverButton variant="hero" size="xl">
                Schedule Your Consultation
              </InteractiveHoverButton>
            </ScheduleCallDialog>
          </div>
        </div>
      </section>

      {/* How MarketGlide Helps You - Clean Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
              How MarketGlide <span className="text-primary">Helps You</span>
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Everything you need to establish credibility and connect with the right LPs
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="card-premium p-10 hover-lift"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-foreground mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
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

      {/* Credibility & Compliance */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Built on <span className="text-primary">Trust & Compliance</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                MarketGlide maintains institutional-grade standards so you can focus on what matters: raising your fund.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-premium p-8">
                <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Verified Network</h3>
                <p className="text-muted-foreground">
                  All investors undergo baseline verification. You're connecting with real, qualified capital allocators.
                </p>
              </div>

              <div className="card-premium p-8">
                <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Secure Documentation</h3>
                <p className="text-muted-foreground">
                  Upload pitch decks and fund materials with confidence. Access is restricted to logged-in, verified users only.
                </p>
              </div>

              <div className="card-premium p-8">
                <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">UK Home Office Aligned</h3>
                <p className="text-muted-foreground">
                  Our platform adheres to regulatory standards, providing peace of mind for international GPs.
                </p>
              </div>

              <div className="card-premium p-8">
                <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">BAJ Accelerator Partner</h3>
                <p className="text-muted-foreground">
                  Backed by industry-leading programs supporting emerging managers and funds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Join a Growing Community of <span className="text-primary">Emerging Managers</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Access exclusive roundtables, LP introductions, and peer learning opportunities designed specifically for first-time GPs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Emerging Managers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">£500M+</div>
                <div className="text-muted-foreground">Capital Raised</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">40+</div>
                <div className="text-muted-foreground">LPs Actively Seeking</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Ready to Build Credibility for Your Fund?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Schedule a call to discover how MarketGlide can help you achieve your investment goals.
            </p>
            <ScheduleCallDialog>
              <InteractiveHoverButton variant="cta" size="xl" className="bg-accent hover:bg-accent/90">
                Schedule a Call
              </InteractiveHoverButton>
            </ScheduleCallDialog>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FundManagersPage;
