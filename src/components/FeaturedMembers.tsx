import { Badge } from "@/components/ui/badge";
import { Linkedin, ExternalLink } from "lucide-react";
import { CircularGallery, GalleryItem } from "@/components/ui/circular-gallery";
import { useRef } from "react";

const FeaturedMembers = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const members = [
    {
      name: "Renato Chiodaro",
      title: "Managing Partner",
      company: "Alpine Capital Partners",
      image: "/members/renato-chiodaro.webp",
      verified: true,
      expertise: ["Private Equity", "Infrastructure"],
    },
    {
      name: "Richard Lark",
      title: "Investment Director",
      company: "European Growth Fund",
      image: "/members/richard-lark.webp",
      verified: true,
      expertise: ["Venture Capital", "Fintech"],
    },
    {
      name: "Henrique Roloff",
      title: "Senior Advisor",
      company: "Global Asset Management",
      image: "/members/henrique-roloff.webp",
      verified: true,
      expertise: ["Real Estate", "REIT"],
    },
    {
      name: "Armen Kherlopian, Ph.D.",
      title: "Chief Investment Officer",
      company: "Strategic Partners LLC",
      image: "/members/armen-kherlopian.webp",
      verified: true,
      expertise: ["Biotech", "Healthcare"],
    },
  ];

  // Transform members data to match GalleryItem interface
  const galleryItems: GalleryItem[] = members.map((member) => ({
    common: member.name,
    binomial: `${member.title} • ${member.company}`,
    photo: {
      url: member.image,
      text: `Professional portrait of ${member.name}, ${member.title} at ${member.company}`,
      pos: "center",
      by: member.company,
    },
  }));

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-6">
            Featured Members
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet our distinguished network of investment professionals, entrepreneurs, and industry leaders who are
            shaping the future of global business.
          </p>
        </div>

        {/* 3D Circular Gallery */}
        <div className="relative h-[600px] mb-16">
          <CircularGallery
            items={galleryItems}
            radius={400}
            autoRotateSpeed={0.005}
            sectionRef={sectionRef}
            className="w-full h-full"
          />
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <div className="text-muted-foreground text-sm mb-4">Join 100+ verified investment professionals</div>
          <button className="text-accent hover:text-accent/80 font-medium transition-colors">View All Members →</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMembers;
