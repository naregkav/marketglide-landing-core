import { 
  ScrollXCarousel, 
  ScrollXCarouselContainer, 
  ScrollXCarouselWrap, 
  ScrollXCarouselProgress 
} from "@/components/ui/scroll-x-carousel";
import { 
  CardHoverReveal, 
  CardHoverRevealMain, 
  CardHoverRevealContent 
} from "@/components/ui/card-hover-reveal";
import infrastructureImg from "@/assets/infrastructure.jpg";
import agricultureImg from "@/assets/agriculture.jpg";
import manufacturingImg from "@/assets/manufacturing.jpg";
import hospitalityImg from "@/assets/hospitality.jpg";
import fintechImg from "@/assets/fintech.jpg";
import healthcareImg from "@/assets/healthcare.jpg";
import renewableEnergyImg from "@/assets/renewable-energy.jpg";
import technologyImg from "@/assets/technology.jpg";
import realEstateImg from "@/assets/real-estate.jpg";
import educationImg from "@/assets/education.jpg";
import transportationImg from "@/assets/transportation.jpg";
import retailImg from "@/assets/retail.jpg";
import miningImg from "@/assets/mining.jpg";

interface Sector {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
}

const SectorsCovered = () => {
  const sectors: Sector[] = [
    {
      id: "fintech",
      title: "Financial Technology",
      image: fintechImg,
      description: "Digital banking, payment solutions, blockchain, and innovative financial services transforming the industry",
      category: "Finance"
    },
    {
      id: "healthcare",
      title: "Healthcare & Biotech",
      image: healthcareImg,
      description: "Medical technology, pharmaceutical research, telemedicine, and healthcare innovation improving lives globally",
      category: "Healthcare"
    },
    {
      id: "renewable-energy",
      title: "Renewable Energy",
      image: renewableEnergyImg,
      description: "Solar, wind, hydroelectric, and clean energy solutions driving sustainable future development",
      category: "Energy"
    },
    {
      id: "technology",
      title: "Technology & Software",
      image: technologyImg,
      description: "AI, machine learning, cloud computing, cybersecurity, and cutting-edge software development",
      category: "Technology"
    },
    {
      id: "real-estate",
      title: "Real Estate",
      image: realEstateImg,
      description: "Commercial properties, residential developments, smart buildings, and urban planning projects",
      category: "Real Estate"
    },
    {
      id: "infrastructure",
      title: "Infrastructure",
      image: infrastructureImg,
      description: "Transportation networks, utilities, smart city development, and critical infrastructure projects",
      category: "Infrastructure"
    },
    {
      id: "agriculture",
      title: "Agriculture & Food",
      image: agricultureImg,
      description: "Sustainable farming, agtech innovation, food security initiatives, and agricultural modernization",
      category: "Agriculture"
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      image: manufacturingImg,
      description: "Industrial automation, smart factories, production optimization, and advanced manufacturing",
      category: "Manufacturing"
    },
    {
      id: "hospitality",
      title: "Hospitality & Tourism",
      image: hospitalityImg,
      description: "Hotels, resorts, travel technology, and premium leisure developments worldwide",
      category: "Hospitality"
    },
    {
      id: "education",
      title: "Education & E-Learning",
      image: educationImg,
      description: "Online learning platforms, educational technology, skill development, and knowledge democratization",
      category: "Education"
    },
    {
      id: "transportation",
      title: "Transportation & Logistics",
      image: transportationImg,
      description: "Supply chain optimization, autonomous vehicles, shipping, and smart mobility solutions",
      category: "Transportation"
    },
    {
      id: "retail",
      title: "Retail & E-Commerce",
      image: retailImg,
      description: "Digital commerce, omnichannel retail, consumer technology, and innovative shopping experiences",
      category: "Retail"
    },
    {
      id: "mining",
      title: "Mining & Resources",
      image: miningImg,
      description: "Sustainable resource extraction, mining technology, mineral processing, and environmental responsibility",
      category: "Resources"
    }
  ];

  return (
    <ScrollXCarousel className="h-[200vh] bg-muted/20">
      <ScrollXCarouselContainer className="h-screen">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto pt-20 pb-12 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sectors We Cover
          </h2>
          <p className="text-subtitle">
            Explore cutting-edge industries driving global innovation. Find investment opportunities across technology, finance, healthcare, energy, and more.
          </p>
        </div>

        {/* Progress Bar */}
        <ScrollXCarouselProgress 
          className="w-full h-1 bg-muted mb-8"
          progressStyle="h-full bg-gradient-to-r from-primary to-primary/60"
        />

        {/* Horizontal Scrolling Cards */}
        <ScrollXCarouselWrap 
          className="flex gap-6 pl-6 pr-[50vw]"
          xRange={['0%', '-70%']}
        >
          {sectors.map((sector) => (
            <CardHoverReveal 
              key={sector.id}
              className="w-80 h-96 rounded-2xl bg-card shadow-lg flex-shrink-0"
            >
              <CardHoverRevealMain className="rounded-2xl">
                <div 
                  className="w-full h-full rounded-2xl bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${sector.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-2xl" />
                  
                  {/* Always visible content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full mb-2">
                      <span className="text-xs font-medium text-primary-foreground/90">
                        {sector.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {sector.title}
                    </h3>
                  </div>
                </div>
              </CardHoverRevealMain>
              
              {/* Hover reveal content */}
              <CardHoverRevealContent className="bg-card/90 border border-border rounded-xl">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {sector.description}
                </p>
              </CardHoverRevealContent>
            </CardHoverReveal>
          ))}
        </ScrollXCarouselWrap>
      </ScrollXCarouselContainer>
    </ScrollXCarousel>
  );
};

export default SectorsCovered;