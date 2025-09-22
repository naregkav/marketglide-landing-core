import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const StrategicPartners = () => {
  const partners = [
    { 
      name: "Venture Builders", 
      description: "Growth Capital & Strategic Advisory",
      category: "Investment",
      logo: "/api/placeholder/160/80" 
    },
    { 
      name: "Enterprise Invest", 
      description: "Enterprise Technology Solutions",
      category: "Technology",
      logo: "/api/placeholder/160/80" 
    },
    { 
      name: "Endurance Capital", 
      description: "Long-term Investment Partners",
      category: "Investment",
      logo: "/api/placeholder/160/80" 
    },
    { 
      name: "Founders Law", 
      description: "Legal & Regulatory Expertise",
      category: "Legal",
      logo: "/api/placeholder/160/80" 
    },
    { 
      name: "Yotewo Advisory", 
      description: "Strategic Business Consulting",
      category: "Advisory",
      logo: "/api/placeholder/160/80" 
    },
    { 
      name: "Global Finance Corp", 
      description: "International Banking Solutions",
      category: "Financial",
      logo: "/api/placeholder/160/80" 
    },
    { 
      name: "Innovation Labs", 
      description: "R&D and Product Development",
      category: "Technology",
      logo: "/api/placeholder/160/80" 
    },
    { 
      name: "Market Leaders", 
      description: "Market Analysis & Strategy",
      category: "Advisory",
      logo: "/api/placeholder/160/80" 
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Strategic Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Trusted by leading legal, financial, and advisory firms worldwide
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel 
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={partner.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group">
                    <div className="bg-card border border-border rounded-xl p-8 h-48 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:bg-card/80">
                      {/* Logo Placeholder */}
                      <div className="w-32 h-16 bg-muted/80 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-muted">
                        <span className="text-muted-foreground font-semibold text-sm">
                          {partner.name.split(' ').map(word => word.charAt(0)).join('')}
                        </span>
                      </div>
                      
                      {/* Partner Info */}
                      <h3 className="font-semibold text-foreground mb-2 text-base">
                        {partner.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {partner.description}
                      </p>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {partner.category}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Trust Message */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            Regulated and compliant across multiple jurisdictions
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategicPartners;