import { Badge } from "@/components/ui/badge";
import { Linkedin, ExternalLink } from "lucide-react";
import { CircularGallery, GalleryItem } from "@/components/ui/circular-gallery";

const FeaturedMembers = () => {
  const members = [
    {
      name: "Renato Chiodaro",
      title: "Managing Partner",
      company: "Alpine Capital Partners",
      image: "/members/renato-chiodaro.webp",
      verified: true,
      expertise: ["Private Equity", "Infrastructure"]
    },
    {
      name: "Richard Lark", 
      title: "Investment Director",
      company: "European Growth Fund",
      image: "/members/richard-lark.webp",
      verified: true,
      expertise: ["Venture Capital", "Fintech"]
    },
    {
      name: "Henrique Roloff",
      title: "Senior Advisor",
      company: "Global Asset Management",
      image: "/members/henrique-roloff.webp", 
      verified: true,
      expertise: ["Real Estate", "REIT"]
    },
    {
      name: "Armen Kherlopian, Ph.D.",
      title: "Chief Investment Officer",
      company: "Strategic Partners LLC",
      image: "/members/armen-kherlopian.webp",
      verified: true,
      expertise: ["Biotech", "Healthcare"]
    }
  ];

  // Transform members data to match GalleryItem interface
  const galleryItems: GalleryItem[] = members.map((member) => ({
    common: member.name,
    binomial: `${member.title} • ${member.company}`,
    photo: {
      url: member.image,
      text: `Professional portrait of ${member.name}, ${member.title} at ${member.company}`,
      pos: "center",
      by: member.company
    }
  }));

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

        {/* Circular Gallery */}
        <div className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
          <CircularGallery 
            items={galleryItems}
            radius={300}
            autoRotateSpeed={0.01}
            className="w-full h-full"
          />
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