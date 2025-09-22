import infrastructureImg from "@/assets/infrastructure.jpg";
import agricultureImg from "@/assets/agriculture.jpg";
import manufacturingImg from "@/assets/manufacturing.jpg";
import hospitalityImg from "@/assets/hospitality.jpg";

const SectorsCovered = () => {
  const sectors = [
    {
      title: "Infrastructure",
      image: infrastructureImg,
      description: "Transportation, utilities, and smart city development projects"
    },
    {
      title: "Agriculture", 
      image: agricultureImg,
      description: "Sustainable farming, agtech, and food security initiatives"
    },
    {
      title: "Manufacturing",
      image: manufacturingImg, 
      description: "Industrial facilities, automation, and production capabilities"
    },
    {
      title: "Hospitality",
      image: hospitalityImg,
      description: "Hotels, resorts, and premium leisure developments"
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

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={sector.title}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                {/* Image */}
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {sector.description}
                  </p>
                </div>

                {/* Active Indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === 0 ? 'bg-accent w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsCovered;