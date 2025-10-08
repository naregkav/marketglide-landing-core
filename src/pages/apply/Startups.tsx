import { Check, Users, FileText, TrendingUp, Network } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ScheduleCallDialog } from "@/components/ScheduleCallDialog";
import { Link } from "react-router-dom";
import sophiaAI from "@/assets/sophia-ai.jpg";

const StartupsPage = () => {
  const benefits = [
    {
      icon: Network,
      title: "Curated Investor Network",
      description:
        "Showcase your opportunity to a growing ecosystem of certified investors who match your sector, geography, and capital needs. All selectively onboarded for relevance and value.",
    },
    {
      icon: TrendingUp,
      title: "Flexible Fundraising Options",
      description:
        "Raise for equity, debt, SPVs, funds, or hybrids. MarketGlide allows you to configure your fundraising structure and align with investors looking for exactly what you offer.",
    },
    {
      icon: Users,
      title: "No Gatekeepers",
      description:
        "No middlemen, commissions, or third-party filters. You control the narrative and communicate directly with potential investors.",
    },
    {
      icon: FileText,
      title: "Community Engagement",
      description:
        "Visibility goes beyond listing — you're embedded in a curated network of dealmakers and capital allocators.",
    },
  ];

  const credibility = [
    "Differentiate from unsolicited pitches with an institutional-grade profile in a private, curated environment.",
    "Exposure to LPs, family offices, and advisors already active on the platform.",
    "Upload decks and financial summaries, visible only to qualified, logged-in users.",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Vibrant & Energetic */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6 animate-fade-in">
              <span className="text-accent font-semibold text-sm">For Startups & Companies</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
              Raise Capital Smarter with MarketGlide
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Fundraising is harder than ever. The right investors are difficult to reach, cold outreach is exhausting,
              and traditional networks are saturated. MarketGlide was designed to reverse that.
            </p>
            <p className="text-lg text-foreground mb-10 max-w-2xl mx-auto">
              We give startups and companies a direct path to curated investors, plus the infrastructure to present your
              opportunity professionally and credibly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://stage.marketglide.io/app/registration/company?type=company"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InteractiveHoverButton variant="hero" size="xl">
                  Start Fundraising
                </InteractiveHoverButton>
              </a>
              <ScheduleCallDialog source="startups">
                <InteractiveHoverButton variant="outline" size="xl">
                  Schedule a Call
                </InteractiveHoverButton>
              </ScheduleCallDialog>
            </div>
          </div>
        </div>
      </section>

      {/* How MarketGlide Helps You */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How MarketGlide <span className="bg-gradient-accent bg-clip-text text-transparent">Helps You</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="card-premium p-8 hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="card-premium p-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                MarketGlide <span className="bg-gradient-accent bg-clip-text text-transparent">Advantage</span>
              </h2>
              <div className="space-y-6">
                {credibility.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sophia AI Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="card-premium p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-glow">
                    <img src={sophiaAI} alt="Sophia AI" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
                    <span className="text-accent font-semibold text-sm">Meet Sophia AI</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Your <span className="bg-gradient-accent bg-clip-text text-transparent">AI Fundraising Agent</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Sophia guides startups through every stage of fundraising with intelligent recommendations and
                    actionable insights.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-accent text-sm">✓</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Investor Discovery:</span>
                        <span className="text-muted-foreground">
                          {" "}
                          Find investors perfectly aligned with your sector, stage, and geography
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-accent text-sm">✓</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Outreach Strategy:</span>
                        <span className="text-muted-foreground">
                          {" "}
                          Get personalized guidance on approaching and engaging with investors
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-accent text-sm">✓</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Real-Time Guidance:</span>
                        <span className="text-muted-foreground">
                          {" "}
                          Receive instant answers to fundraising questions and strategic advice
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Join the MarketGlide <span className="bg-gradient-accent bg-clip-text text-transparent">Ecosystem</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Visibility goes beyond listing. You're embedded in a curated network of dealmakers and capital allocators,
              with access to events, insights, and collaboration opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Investor Events", "Market Insights", "Deal Syndication", "Expert Network"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-card border border-card-border rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Position Your Startup in Front of the Right Investors?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Schedule a call to see how MarketGlide can help accelerate your fundraising.
            </p>
            <ScheduleCallDialog source="startups">
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

export default StartupsPage;
