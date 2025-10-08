import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import powerOfAccessImage from "@/assets/blog/power-of-access.jpg";

const PowerOfAccess = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <Badge className="bg-primary text-primary-foreground mb-4">MARKET INSIGHTS</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              The Power of Access & Why Private Markets Are Built on Exclusivity
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Feb 27, 2025</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>6 min read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src={powerOfAccessImage} 
              alt="The Power of Access" 
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              In private investments, success is about knowing where to place the capital more than just having it. The best deals never appear on public exchanges or in crowded investor circles. They emerge in quiet conversations between those with the right networks, the right insights, and, most importantly, the right access.
            </p>
            <p>
              Private markets have always operated in the shadows of exclusivity, built on relationships, trust, and the ability to connect with opportunities before they become widely known. The difference between those who seize the future and those who chase it often comes down to this: who gets in first.
            </p>
            <p>
              For decades, family offices, VCs, and institutional investors have lived in a world where information is power, and access is everything. They don't sift through thousands of generic opportunities; they are invited into rooms where high-caliber, pre-vetted investments are presented directly to them. It is in these spaces that true wealth creation happens—not by chance, but by design.
            </p>

            <h2>A New Kind of Access</h2>
            <p>
              MarketGlide was born out of a simple but powerful idea: what if this level of exclusivity and intelligence could be curated into a single platform?
            </p>
            <p>
              The vision was to create a place where serious investors don't just browse through deal flow but engage with a community that mirrors their ambition. A platform where investments aren't just listed—they are curated, vetted, and intelligently matched to those who can unlock their potential.
            </p>
            <p>
              As a MarketGlide member, you'll be sitting at the intersection of global capital and the world's most promising private market opportunities. Whether it's a pioneering startup reshaping an industry, a high-growth company seeking strategic investors, or a family office looking for the right co-investment partner—MarketGlide ensures that every connection is meaningful, every opportunity is tailored, and every investor has a seat at the table of high-impact decision-making.
            </p>

            <h2>Beyond the Platform: The Power of Community</h2>
            <p>
              But MarketGlide is more than just a gateway to investments—it is a network of visionaries shaping the future of private markets. It's a space where investors don't just find deals; they find like-minded peers, strategic partners, and opportunities to collaborate on a global scale.
            </p>
            <p>
              In private markets, the right introduction can change everything. A single conversation can open doors to partnerships that redefine industries. That's why MarketGlide doesn't just connect investors with companies—it connects them with each other.
            </p>
            <p>
              At invitation-only investor roundtables, exclusive MarketGlide-hosted summits, and curated networking events, our members don't just access opportunities—they immerse themselves in a world where the next billion-dollar investment is just one conversation away.
            </p>

            <h2>Join the Circle of Access</h2>
            <p>
              There is a reason why the most successful investors operate in closed circles. Not every opportunity is meant to be open to all.
            </p>
            <p>
              For those who seek to go beyond the ordinary, who want to step into a space where investments are not just discovered but designed for their strategic goals—this is where access begins.
            </p>
            <p>
              Apply to join MarketGlide today and discover a world where investment is not just about capital, but about belonging to a network that shapes the future.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-border text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Join MarketGlide?</h3>
            <p className="text-muted-foreground mb-6">
              Discover exclusive investment opportunities through our curated platform.
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

export default PowerOfAccess;
