import { StoriesCarousel, Story } from "@/components/ui/stories-carousel";
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

const SectorsCovered = () => {
  const sectors: Story[] = [
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
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sectors We Cover
          </h2>
          <p className="text-subtitle">
            Explore cutting-edge industries driving global innovation. Find investment opportunities across technology, finance, healthcare, energy, and more.
          </p>
        </div>

        {/* Stories Carousel */}
        <StoriesCarousel 
          stories={sectors}
          autoPlay={true}
          autoPlayInterval={4000}
          showDots={true}
          showArrows={true}
          className="max-w-6xl mx-auto"
        />
      </div>
    </section>
  );
};

export default SectorsCovered;