import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import multiFamilyOfficeImage from "@/assets/blog/multi-family-office.jpg";
import powerOfAccessImage from "@/assets/blog/power-of-access.jpg";
import antiMarketplaceImage from "@/assets/blog/anti-marketplace.jpg";
import warmIntrosImage from "@/assets/blog/warm-intros.jpg";
import institutionalInvestorsImage from "@/assets/blog/institutional-investors.jpg";

const BlogSection = () => {
  const articles = [
    {
      title: "The Emergence of the Multi-Family Office",
      excerpt: "We explore how multi-family offices (MFOs) are transforming wealth management for high-net-worth families through sophisticated investment strategies and expert-driven approaches.",
      date: "Feb 26, 2025",
      category: "Wealth Management",
      image: multiFamilyOfficeImage,
      readTime: "12 min read",
      slug: "/blog/multi-family-office"
    },
    {
      title: "The Power of Access & Why Private Markets Are Built on Exclusivity",
      excerpt: "The best opportunities never appear in public markets but are shared within exclusive networks, where high-caliber investments are curated and intelligently matched to serious investors.",
      date: "Feb 27, 2025", 
      category: "Market Insights",
      image: powerOfAccessImage,
      readTime: "6 min read",
      slug: "/blog/power-of-access"
    },
    {
      title: "The Rise of the Anti-Marketplace",
      excerpt: "As private capital markets grow noisier, traditional fundraising platforms are failing the very people they claim to serve. We explore why volume-based marketplaces no longer work.",
      date: "Jul 4, 2025",
      category: "Industry Analysis", 
      image: antiMarketplaceImage,
      readTime: "7 min read",
      slug: "/blog/anti-marketplace"
    },
    {
      title: "The False Meritocracy of Warm Intros",
      excerpt: "Warm intros are seen as the gold standard in private markets, but they reinforce bias and favor proximity over merit. How curated, permission-based discovery can level the playing field.",
      date: "Jul 4, 2025",
      category: "Network Effects",
      image: warmIntrosImage,
      readTime: "8 min read",
      slug: "/blog/warm-intros"
    },
    {
      title: "What Institutional Investors Really Want",
      excerpt: "Most founders pitch vision and traction, but institutional investors evaluate risk-adjusted profiles, governance, and capital efficiency. Learn to bridge the language gap.",
      date: "Jul 4, 2025",
      category: "Fundraising Strategy",
      image: institutionalInvestorsImage,
      readTime: "9 min read",
      slug: "/blog/institutional-investors"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-6">
            Blog
          </h2>
          <p className="text-subtitle mb-8">
            Stay ahead with expert insights, market trends, and strategic guidance from MarketGlide's curated thought leadership.
          </p>
          <InteractiveHoverButton variant="outline" size="sm" showArrow={false}>
            Read More →
          </InteractiveHoverButton>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <Link
              key={article.title}
              to={article.slug}
              className="group cursor-pointer block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {article.date}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {article.readTime}
                  </span>
                  <span className="text-accent hover:text-accent/80 text-sm font-semibold flex items-center group-hover:gap-2 transition-all">
                    Read Article
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link to="/blog">
            <InteractiveHoverButton variant="accent" size="lg">
              View All Articles
            </InteractiveHoverButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;