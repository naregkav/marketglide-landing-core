import { Badge } from "@/components/ui/badge";
import { Linkedin, ExternalLink } from "lucide-react";

const FeaturedMembers = () => {
  const members = [
    {
      name: "Renato Chiodaro",
      title: "Managing Partner",
      company: "Alpine Capital Partners",
      image: "/api/placeholder/300/300",
      verified: true,
      expertise: ["Private Equity", "Infrastructure"]
    },
    {
      name: "Richard Lark", 
      title: "Investment Director",
      company: "European Growth Fund",
      image: "/api/placeholder/300/300",
      verified: true,
      expertise: ["Venture Capital", "Fintech"]
    },
    {
      name: "Henrique Roloff",
      title: "Senior Advisor",
      company: "Global Asset Management",
      image: "/api/placeholder/300/300", 
      verified: true,
      expertise: ["Real Estate", "REIT"]
    },
    {
      name: "Armen Kherlopian, Ph.D.",
      title: "Chief Investment Officer",
      company: "Strategic Partners LLC",
      image: "/api/placeholder/300/300",
      verified: true,
      expertise: ["Biotech", "Healthcare"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Members
          </h2>
          <p className="text-subtitle">
            Meet and connect with elite investors, top-tier fund managers, and renowned dealmakers, gaining exclusive insights from them as they shape the future of private markets.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {members.map((member, index) => (
            <div
              key={member.name}
              className="card-premium p-6 text-center hover-lift group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Profile Image */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
                  <div className="text-muted-foreground text-xs">Photo</div>
                </div>
                {member.verified && (
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-2 border-background">
                    <div className="w-4 h-4 bg-accent-foreground rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Member Info */}
              <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-1">
                {member.title}
              </p>
              <p className="text-muted-foreground text-xs mb-4">
                {member.company}
              </p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-1 justify-center mb-4">
                {member.expertise.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="text-xs px-2 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-2">
                <button className="w-8 h-8 bg-muted hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 bg-muted hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <div className="text-muted-foreground text-sm mb-4">
            Join 500+ verified investment professionals
          </div>
          <button className="text-accent hover:text-accent/80 font-medium transition-colors">
            View All Members →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMembers;