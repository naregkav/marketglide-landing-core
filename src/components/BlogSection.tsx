import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const articles = [
    {
      title: "The Emergence of the Multi-Family Office",
      excerpt: "We explore how private family offices (MFOs) can be solutions that provide sophisticated investment and wealth management for high-net-worth families.",
      date: "Feb 26, 2025",
      category: "Wealth Management",
      image: "/api/placeholder/400/250",
      readTime: "5 min read"
    },
    {
      title: "The Power of Access & Why Private Markets Are Built on Exclusivity",
      excerpt: "The best opportunities never appear in public markets but are shared within a single platform, where high-caliber investments are curated and intelligently matched to serious investors.",
      date: "Feb 27, 2025", 
      category: "Market Insights",
      image: "/api/placeholder/400/250",
      readTime: "7 min read"
    },
    {
      title: "The Rise of the Anti-Marketplace",
      excerpt: "As more low-quality deals reach equity crowdfunding platforms and failing the very people they claim to serve, we explore why volume-based marketplaces no longer work.",
      date: "Jul 4, 2025",
      category: "Industry Analysis", 
      image: "/api/placeholder/400/250",
      readTime: "6 min read"
    },
    {
      title: "The False Meritocracy of Warm Intros",
      excerpt: "Warm intros combine signal and access into a single filter, making them the most democratic path forward. How the referral system reinforces bias and how curated, permission-based discovery can level the playing field.",
      date: "Jul 4, 2025",
      category: "Network Effects",
      image: "/api/placeholder/400/250", 
      readTime: "8 min read"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
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
            <div
              key={article.title}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                <div className="w-full h-full bg-muted/30 flex items-center justify-center">
                  <div className="text-muted-foreground text-sm">Article Image</div>
                </div>
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
                  <button className="text-accent hover:text-accent/80 text-sm font-medium flex items-center group-hover:gap-2 transition-all">
                    Read Article
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <InteractiveHoverButton variant="hero" size="lg">
            View All Articles
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;