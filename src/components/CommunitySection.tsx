import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { Calendar, Users, MapPin, FileText, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import communityImage from "@/assets/community-networking.jpg";

interface Event {
  id: string;
  title: string;
  location: string;
  event_date: string;
  event_time: string | null;
  type: string;
  is_featured: boolean;
}

const CommunitySection = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("is_featured", true)
        .order("event_date", { ascending: true })
        .limit(3);

      if (error) {
        console.error("Error fetching events:", error);
      } else {
        setEvents(data || []);
      }
      setLoading(false);
    };

    fetchEvents();

    // Set up real-time subscription
    const channel = supabase
      .channel("events-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "events",
        },
        () => {
          fetchEvents();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const features = [
    {
      icon: Calendar,
      title: "Monthly Roundtables",
      description: "Exclusive investor meetups and founder workshops in London, NYC, and Dubai",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Member Directory",
      description: "Access to our curated community of 500+ verified investors and founders",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Global Presence",
      description: "Active chapters in 12 cities across Europe, North America, and MENA",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: FileText,
      title: "Knowledge Sharing",
      description: "Weekly insights, market reports, and best practices from industry leaders",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { value: "100+", label: "Community Members" },
    { value: "2", label: "Events This Year" },
    { value: "$180M+", label: "Deals Originated" },
    { value: "8", label: "Global Hubs" },
  ];

  return (
    <section
      id="community"
      className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px]" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <Badge
            variant="secondary"
            className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20"
          >
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            Community Driven
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold">
            More than software{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              —a movement for smarter private markets
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our thriving community of founders, investors, and fund managers building the future of private market
            connectivity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Image with Stats */}
          <div className="relative animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={communityImage}
                alt="Community networking event"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

              {/* Floating Stats Badges */}
              <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm rounded-xl px-6 py-4 border border-border shadow-lg">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>

              <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-sm rounded-xl px-6 py-4 border border-border shadow-lg">
                <div className="text-3xl font-bold text-accent mb-1">12</div>
                <div className="text-sm text-muted-foreground">Global Cities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div
          className="bg-card border border-border rounded-2xl p-8 mb-12 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary" />
            Upcoming Events
          </h3>

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-20 bg-muted animate-pulse rounded-lg" />
              ))}
            </div>
          ) : events.length > 0 ? (
            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                >
                  <div className="flex-shrink-0 w-16 text-center">
                    <div className="text-sm font-medium text-primary">{format(new Date(event.event_date), "MMM")}</div>
                    <div className="text-2xl font-bold">{format(new Date(event.event_date), "dd")}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                      {event.event_time && (
                        <>
                          <span className="text-muted-foreground/50">•</span>
                          <Calendar className="w-4 h-4" />
                          {event.event_time}
                        </>
                      )}
                    </p>
                  </div>
                  <Badge variant="outline" className="capitalize">
                    {event.type}
                  </Badge>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">No upcoming events at the moment. Check back soon!</p>
          )}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: "800ms" }}>
          <InteractiveHoverButton variant="default" size="lg" icon={ArrowRight} className="text-lg px-8 py-6">
            Join Our Community
          </InteractiveHoverButton>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${1000 + index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
