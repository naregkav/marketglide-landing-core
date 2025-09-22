const StrategicPartners = () => {
  const partners = [
    { name: "Venture Builders", logo: "/api/placeholder/120/60" },
    { name: "Enterprise Invest", logo: "/api/placeholder/120/60" },
    { name: "Endurance", logo: "/api/placeholder/120/60" },
    { name: "Founders Law", logo: "/api/placeholder/120/60" },
    { name: "Yotewo", logo: "/api/placeholder/120/60" }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Strategic Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading legal, financial, and advisory firms worldwide
          </p>
        </div>

        {/* Partners Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 grayscale hover:grayscale-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-24 h-12 bg-muted/50 rounded flex items-center justify-center">
                <span className="text-muted-foreground text-xs font-medium">
                  {partner.name.split(' ')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Message */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Regulated and compliant across multiple jurisdictions
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategicPartners;