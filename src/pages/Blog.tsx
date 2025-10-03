import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";

// Blog article data matching the Framer design
const featuredArticle = {
  id: 1,
  title: "The Emergence of the Multi-Family Office",
  excerpt: "How ultra-high-net-worth families are revolutionizing wealth management through sophisticated multi-family office structures and investment strategies.",
  category: "INSIGHTS",
  date: "Sep 20, 2024",
  readTime: "8 min read",
  image: "/api/placeholder/600/400",
  featured: true,
};

const articles = [
  {
    id: 2,
    title: "Portfolio Diversification Strategies for 2024",
    excerpt: "Essential strategies for building resilient investment portfolios in today's dynamic market environment.",
    category: "PRO TIPS",
    date: "Sep 18, 2024",
    readTime: "5 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 3,
    title: "Digital Asset Integration in Family Offices",
    excerpt: "How forward-thinking family offices are incorporating digital assets into their investment frameworks.",
    category: "UPDATES",
    date: "Sep 15, 2024",
    readTime: "6 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 4,
    title: "ESG Investment Fundamentals",
    excerpt: "Understanding the basics of Environmental, Social, and Governance investing for sustainable returns.",
    category: "BASICS",
    date: "Sep 12, 2024",
    readTime: "4 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 5,
    title: "Alternative Investment Opportunities",
    excerpt: "Exploring private equity, real estate, and other alternative assets for portfolio enhancement.",
    category: "PRO TIPS",
    date: "Sep 10, 2024",
    readTime: "7 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 6,
    title: "Risk Management Best Practices",
    excerpt: "Comprehensive approaches to identifying, assessing, and mitigating investment risks.",
    category: "BASICS",
    date: "Sep 8, 2024",
    readTime: "6 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 7,
    title: "Platform Updates & New Features",
    excerpt: "Latest enhancements to our investment platform including advanced analytics and reporting tools.",
    category: "CMS",
    date: "Sep 5, 2024",
    readTime: "3 min read",
    image: "/api/placeholder/400/250",
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "INSIGHTS":
      return "bg-accent text-accent-foreground";
    case "PRO TIPS":
      return "bg-primary text-primary-foreground";
    case "UPDATES":
      return "bg-success text-success-foreground";
    case "BASICS":
      return "bg-secondary text-secondary-foreground";
    case "CMS":
      return "bg-muted text-muted-foreground";
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
          <Card className="max-w-6xl mx-auto overflow-hidden shadow-large hover:shadow-glow transition-all duration-300 hover-lift">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Featured Article Image */}
                <div className="aspect-[4/3] lg:aspect-auto">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <div className="text-muted-foreground text-sm">Featured Article Image</div>
                  </div>
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
                  
                  <InteractiveHoverButton variant="accent" size="lg" className="w-fit">
                    Read Article
                    <ArrowRight className="ml-2" size={16} />
                  </InteractiveHoverButton>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden shadow-medium hover:shadow-large transition-all duration-300 hover-lift group">
                <CardContent className="p-0">
                  {/* Article Image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center">
                    <div className="text-muted-foreground text-sm">Article Image</div>
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
                      <InteractiveHoverButton variant="ghost" size="sm" showArrow={false} className="text-accent hover:text-accent/80 p-0 h-auto">
                        Read more
                      </InteractiveHoverButton>
                      <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;