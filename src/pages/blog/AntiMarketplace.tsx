import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import antiMarketplaceImage from "@/assets/blog/anti-marketplace.jpg";

const AntiMarketplace = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <Badge className="bg-secondary text-secondary-foreground mb-4">INDUSTRY ANALYSIS</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              The Rise of the Anti-Marketplace
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Jul 4, 2025</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>7 min read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src={antiMarketplaceImage} 
              alt="The Rise of the Anti-Marketplace" 
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed prose-p:mb-6">
            <p className="text-xl font-medium !mb-6">
              In private markets, noise is abundant, and signal is scarce.
            </p>
            <p>
              For the past decade, digital fundraising platforms have positioned themselves as gateways to startup funding and LP discovery. Promising scale, access, and disintermediation, they were heralded as the future of capital formation. But in practice, many have delivered the opposite: friction, irrelevance, and dilution of trust.
            </p>
            <p>
              Founders seeking to raise capital for startups experience the same loop: upload your pitch deck, define your targets, and send cold intros to investor lists. Most go unread or result in formulaic responses. The illusion of investor access masks a broken fundraising strategy.
            </p>
            <p>
              Emerging fund managers raising their first or second fund face a similar frustration. They try to find LP investors through traditional outreach or legacy databases, but the process lacks clarity, trust, and meaningful engagement.
            </p>
            <p>
              Meanwhile, LPs and family offices are flooded with unfiltered deal flow and irrelevant fund pitches. The signal-to-noise ratio is worse than ever.
            </p>

            <hr className="my-12 border-border" />
            
            <h2>The Myth of Volume in Fundraising Platforms</h2>
            <p>
              Many investor matching platforms are built around scale. More founders. More funds. More activity. The assumption is that volume creates outcomes. But in private capital markets, volume often means low-quality leads, poor alignment, and wasted time.
            </p>
            <p>
              For startups raising capital or fund managers looking for LPs, this model creates friction instead of momentum. Investors are left sifting through decks that don't match their thesis. Founders are left wondering if anyone actually read their message.
            </p>
            <p>
              Private markets depend on precision, context, and mutual alignment. In this ecosystem, curation (never quantity) is the real advantage.
            </p>

            <hr className="my-12 border-border" />
            
            <h2>Introducing the Anti-Marketplace for Capital</h2>
            <p>
              MarketGlide is not another investor database or CRM. It's a curated discovery platform built to allow founders, emerging fund managers, and professional investors to meet through trusted and permission-based connections.
            </p>
            <p>
              We call it an anti-marketplace because it challenges everything traditional capital platforms stand for.
            </p>
            <ul>
              <li><strong>Startups and funds are matched with investors</strong> who have already indicated interest in their stage, sector, and strategy.</li>
              <li><strong>With warm and permissioned introductions,</strong> there are never any cold intros. Every engagement starts with context and consent.</li>
              <li><strong>Structured profiles, self-certification, and verified track records</strong> ensure that every participant is investment-ready.</li>
              <li><strong>We never, ever charge success fees</strong> on capital raised. Not to the buy-side, not to the sell-side. MarketGlide is a trusted community, not a broker.</li>
            </ul>

            <hr className="my-12 border-border" />
            
            <h2>Why Curated Capital is the Future of Fundraising</h2>
            <p>
              The best investors aren't waiting in generic marketplaces. They're waiting for signal - opportunities that speak to their mandate, values, and timing.
            </p>
            <p>
              The best founders aren't looking for mass exposure. They're looking for fit.
            </p>
            <p>
              That's why the next generation of private market platforms will optimize for:
            </p>
            <ul>
              <li>Investor alignment, not outreach volume</li>
              <li>Actionable, filtered deal flow</li>
              <li>Fewer, but higher-quality connections</li>
            </ul>
            <p>
              For emerging fund managers, LP discovery shouldn't mean cold-pitching hundreds of unknown contacts. For founders, raising capital shouldn't mean paying success fees to intermediaries for access to outdated investor lists.
            </p>
            <p>
              It should mean finding the right counterparties, faster, more transparently, and with less friction.
            </p>
            <p>
              That's what MarketGlide is built to do.
            </p>

            <div className="bg-accent/10 p-6 rounded-lg my-8">
              <p className="text-sm font-medium">
                MarketGlide is the trusted discovery layer for global private capital markets. We help startups raise capital, emerging fund managers connect with LPs, and investors find curated deal flow - all through a no-noise, no-commission, permission-based platform.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-border text-center">
            <h3 className="text-2xl font-bold mb-4">Experience the Anti-Marketplace</h3>
            <p className="text-muted-foreground mb-6">
              Join a curated community where quality beats quantity.
            </p>
            <InteractiveHoverButton variant="accent" size="lg">
              Apply for Membership
            </InteractiveHoverButton>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AntiMarketplace;
