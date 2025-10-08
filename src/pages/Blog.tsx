import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import multiFamilyOfficeImage from "@/assets/blog/multi-family-office.jpg";
import powerOfAccessImage from "@/assets/blog/power-of-access.jpg";
import antiMarketplaceImage from "@/assets/blog/anti-marketplace.jpg";
import warmIntrosImage from "@/assets/blog/warm-intros.jpg";
import institutionalInvestorsImage from "@/assets/blog/institutional-investors.jpg";

// Blog article data
const featuredArticle = {
  id: 1,
  title: "The Emergence of the Multi-Family Office",
  excerpt: "We explore how multi-family offices (MFOs) are transforming wealth management for high-net-worth families. From their 19th-century origins to modern AI-powered platforms, MFOs provide sophisticated investment and wealth management solutions that are gaining traction in emerging markets across the Middle East and Asia.",
  category: "WEALTH MANAGEMENT",
  date: "Feb 26, 2025",
  readTime: "12 min read",
  image: multiFamilyOfficeImage,
  featured: true,
  slug: "/blog/multi-family-office"
};

const articles = [
  {
    id: 2,
    title: "The Power of Access & Why Private Markets Are Built on Exclusivity",
    excerpt: "In private investments, success is about knowing where to place capital. The best opportunities never appear in public markets but are shared within exclusive networks, where high-caliber investments are curated and intelligently matched to serious investors.",
    category: "MARKET INSIGHTS",
    date: "Feb 27, 2025",
    readTime: "6 min read",
    image: powerOfAccessImage,
    slug: "/blog/power-of-access"
  },
  {
    id: 3,
    title: "The Rise of the Anti-Marketplace",
    excerpt: "As private capital markets grow noisier, traditional fundraising platforms are failing founders, fund managers, and LPs. We explore why volume-based marketplaces no longer work and introduce permission-based discovery as the future of capital formation.",
    category: "INDUSTRY ANALYSIS",
    date: "Jul 4, 2025",
    readTime: "7 min read",
    image: antiMarketplaceImage,
    slug: "/blog/anti-marketplace"
  },
  {
    id: 4,
    title: "The False Meritocracy of Warm Intros",
    excerpt: "Warm intros are seen as the gold standard in private markets, but they reinforce bias and favor proximity over merit. Learn how curated, permission-based discovery can level the playing field and allow excellence to surface on its own terms.",
    category: "NETWORK EFFECTS",
    date: "Jul 4, 2025",
    readTime: "8 min read",
    image: warmIntrosImage,
    slug: "/blog/warm-intros"
  },
  {
    id: 5,
    title: "What Institutional Investors Really Want",
    excerpt: "Most founders pitch vision and traction, but institutional investors evaluate risk-adjusted profiles, governance, and capital efficiency. Bridge the language gap and learn to present your company through an institutional lens.",
    category: "FUNDRAISING STRATEGY",
    date: "Jul 4, 2025",
    readTime: "9 min read",
    image: institutionalInvestorsImage,
    slug: "/blog/institutional-investors"
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "WEALTH MANAGEMENT":
      return "bg-accent text-accent-foreground";
    case "MARKET INSIGHTS":
      return "bg-primary text-primary-foreground";
    case "INDUSTRY ANALYSIS":
      return "bg-secondary text-secondary-foreground";
    case "NETWORK EFFECTS":
      return "bg-accent/80 text-accent-foreground";
    case "FUNDRAISING STRATEGY":
      return "bg-primary/80 text-primary-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Teal Gradient */}
      <section className="pt-20 pb-16 bg-gradient-accent">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground mb-6">
              Insights, guides & updates — all in one place
            </h1>
            <p className="text-lg md:text-xl text-accent-foreground/90 leading-relaxed">
              Stay informed with expert insights, market analysis, and strategic guidance 
              for navigating the evolving landscape of wealth management and investment.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <Link to={featuredArticle.slug}>
            <Card className="max-w-6xl mx-auto overflow-hidden shadow-large hover:shadow-glow transition-all duration-300 hover-lift cursor-pointer">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Featured Article Image */}
                  <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                
                {/* Featured Article Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className={getCategoryColor(featuredArticle.category)}>
                      {featuredArticle.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <span>{featuredArticle.date}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                    {featuredArticle.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <InteractiveHoverButton variant="accent" size="lg" className="w-fit font-semibold">
                    Read Full Article
                    <ArrowRight className="ml-2" size={18} />
                  </InteractiveHoverButton>
                </div>
              </div>
            </CardContent>
          </Card>
          </Link>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {articles.map((article) => (
              <Link key={article.id} to={article.slug}>
                <Card className="overflow-hidden shadow-medium hover:shadow-large transition-all duration-300 hover-lift group cursor-pointer h-full">
                  <CardContent className="p-0">
                    {/* Article Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  
                  {/* Article Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className={getCategoryColor(article.category)} variant="secondary">
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-muted-foreground text-xs">
                        <span>{article.date}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2 leading-tight group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-accent hover:text-accent/80 text-sm font-semibold">
                        Read Article
                      </span>
                      <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;