import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { Calendar, Users, MapPin, FileText, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

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
        }
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
      description:
        "Exclusive investor meetups and founder workshops in London, NYC, and Dubai",
    },
    {
      icon: Users,
      title: "Member Directory",
      description:
        "Access to our curated community of 500+ verified investors and founders",
    },
    {
      icon: MapPin,
      title: "Global Presence",
      description:
        "Active chapters in 12 cities across Europe, North America, and MENA",
    },
    {
      icon: FileText,
      title: "Knowledge Sharing",
      description:
        "Weekly insights, market reports, and best practices from industry leaders",
    },
  ];

  const stats = [
    { value: "500+", label: "Community Members" },
    { value: "24", label: "Events This Year" },
    { value: "£180M+", label: "Deals Originated" },
    { value: "12", label: "Global Cities" },
  ];

  return (
    <section id="community" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30 bg-primary/5">
            <Users className="w-4 h-4 mr-2 inline" />
            Community Driven
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            More than software —
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              a movement for smarter private markets
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our thriving community of founders, investors, and fund managers
            building the future of private market connectivity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Features Grid + Events */}
          <div className="space-y-8">
            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Upcoming Events */}
            <div className="bg-card border border-border rounded-xl p-6 animate-fade-in">
              <h3 className="font-semibold text-xl mb-4">Upcoming Events</h3>
              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4 animate-pulse">
                      <div className="w-16 h-16 bg-muted rounded-lg" />
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-muted rounded w-3/4" />
                        <div className="h-3 bg-muted rounded w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : events.length > 0 ? (
                <div className="space-y-4">
                  {events.map((event, index) => (
                    <div
                      key={event.id}
                      className="flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-accent rounded-lg flex flex-col items-center justify-center text-accent-foreground">
                        <span className="text-xs font-medium uppercase">
                          {format(new Date(event.event_date), "MMM")}
                        </span>
                        <span className="text-2xl font-bold">
                          {format(new Date(event.event_date), "dd")}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors truncate">
                          {event.title}
                        </h4>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                          {event.event_time && ` • ${event.event_time}`}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all self-center flex-shrink-0" />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm">
                  No upcoming events at the moment. Check back soon!
                </p>
              )}
            </div>

            {/* CTA Button */}
            <InteractiveHoverButton
              variant="default"
              size="lg"
              className="w-full"
              icon={Users}
            >
              Join Our Community
            </InteractiveHoverButton>
          </div>

          {/* Right: Community Image with Stats */}
          <div className="relative animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="relative rounded-2xl overflow-hidden border-2 border-border shadow-2xl group">
              {/* Placeholder gradient for community image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 relative overflow-hidden">
                {/* Overlay pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                
                {/* Stats Badges */}
                <div className="absolute top-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border shadow-lg animate-scale-in">
                  <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground">Active Members</div>
                </div>

                <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border shadow-lg animate-scale-in" style={{ animationDelay: "200ms" }}>
                  <div className="text-3xl font-bold text-primary">12</div>
                  <div className="text-sm text-muted-foreground">Global Cities</div>
                </div>

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-card/90 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md animate-fade-in"
                  style={{ animationDelay: `${400 + index * 50}ms` }}
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
