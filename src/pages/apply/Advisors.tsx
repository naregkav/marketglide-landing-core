import { Network, Handshake, TrendingUp, Users, Award, Lightbulb, Target, Star } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ScheduleCallDialog } from "@/components/ScheduleCallDialog";
import { Link } from "react-router-dom";

const AdvisorsPage = () => {
  const benefits = [
    {
      icon: Handshake,
      title: "Introducers & Referral Partners",
      description: "Earn referral-based incentives by introducing quality companies, funds, or investors.",
    },
    {
      icon: TrendingUp,
      title: "Accelerators & Platforms",
      description: "Give your cohorts enhanced visibility to our investor community.",
    },
    {
      icon: Award,
      title: "Legal & Advisory",
      description: "Be discoverable by funds, family offices, and portfolio companies.",
    },
    {
      icon: Star,
      title: "Premium Exposure",
      description: "Gain profile visibility through curated lists and partnership pages.",
    },
    {
      icon: Network,
      title: "Value-Driven Networking",
      description: "Provide scalable, engaging tools for your network.",
    },
    {
      icon: Lightbulb,
      title: "Thought Leadership Opportunities",
      description: "Build reputation through MarketGlide Academy and content initiatives.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Collaborative */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-background via-muted/10 to-background">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent/10 rounded-full mb-8 border border-accent/20">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wide">For Advisors & Partners</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Why Partner with <span className="bg-gradient-accent bg-clip-text text-transparent">MarketGlide?</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-6 font-medium">
              Position Yourself at the Center of Capital Flows
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              MarketGlide isn't just for dealmakers. As an advisor, consultant, accelerator, incubator, or ecosystem
              builder, your network plays a vital role in how capital flows and opportunities emerge.
            </p>
            <p className="text-lg text-foreground mb-10 max-w-3xl mx-auto">
              We offer a platform to amplify your visibility, enhance your value to clients, and scale your exposure
              across private markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://stage.marketglide.io/app/registration/investor?type=investor-advisors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InteractiveHoverButton variant="hero" size="xl">
                  Become a Partner
                </InteractiveHoverButton>
              </a>
              <ScheduleCallDialog source="advisors">
                <InteractiveHoverButton variant="outline" size="xl">
                  Schedule a Call
                </InteractiveHoverButton>
              </ScheduleCallDialog>
            </div>
          </div>
        </div>
      </section>

      {/* How MarketGlide Helps - Dynamic Grid */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                How MarketGlide <span className="bg-gradient-accent bg-clip-text text-transparent">Helps You</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Multiple pathways to create value and grow your influence in the private markets ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="card-premium p-8 hover-lift group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col h-full">
                    <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <benefit.icon className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-4">
              Flexible <span className="bg-gradient-accent bg-clip-text text-transparent">Partnership Models</span>
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Choose the partnership model that fits your practice
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-premium p-10 hover-lift">
                <Target className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">Referral Partners</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Earn commissions on qualified introductions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Access to platform for client referrals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Co-branded materials and support</span>
                  </li>
                </ul>
              </div>

              <div className="card-premium p-10 hover-lift">
                <Network className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">Strategic Partners</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Profile visibility across our network</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Featured placement for accelerators/platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Access to exclusive partner events</span>
                  </li>
                </ul>
              </div>

              <div className="card-premium p-10 hover-lift">
                <Award className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">Service Providers</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Legal, tax, and advisory listings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Direct discovery by funds and companies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Enhanced credibility through verification</span>
                  </li>
                </ul>
              </div>

              <div className="card-premium p-10 hover-lift">
                <Lightbulb className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">Content Partners</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Thought leadership through MarketGlide Academy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Guest articles and expert interviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Build reputation as an industry expert</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Impact */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Growing <span className="bg-gradient-accent bg-clip-text text-transparent">Ecosystem</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Join a vibrant community of advisors, accelerators, and ecosystem partners creating value across private
              markets
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="card-premium p-6">
                <div className="text-4xl font-bold text-accent mb-2">120+</div>
                <div className="text-sm text-muted-foreground">Active Partners</div>
              </div>
              <div className="card-premium p-6">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Accelerators</div>
              </div>
              <div className="card-premium p-6">
                <div className="text-4xl font-bold text-accent mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Service Providers</div>
              </div>
              <div className="card-premium p-6">
                <div className="text-4xl font-bold text-accent mb-2">£800M+</div>
                <div className="text-sm text-muted-foreground">Partner-Driven Capital</div>
              </div>
            </div>

            <div className="card-premium p-10 text-left">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Why Partners Choose MarketGlide</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Curated Access</div>
                    <div className="text-sm text-muted-foreground">
                      Direct access to exciting, vetted opportunities.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Aligned Incentives</div>
                    <div className="text-sm text-muted-foreground">
                      MarketGlide simply powers discovery, trust, and collaboration
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Verified Network</div>
                    <div className="text-sm text-muted-foreground">Connect clients with quality opportunities</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Scalable Platform</div>
                    <div className="text-sm text-muted-foreground">Tools that grow with your practice</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-6">
              Ready to Amplify Your Impact?
            </h2>
            <p className="text-xl text-accent-foreground/90 mb-10">
              Schedule a call to discover how MarketGlide can help you and your clients unlock new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://stage.marketglide.io/app/registration/investor?type=investor-advisors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InteractiveHoverButton
                  variant="cta"
                  size="xl"
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  Expand Your Network
                </InteractiveHoverButton>
              </a>
              <ScheduleCallDialog source="advisors">
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

export default AdvisorsPage;
