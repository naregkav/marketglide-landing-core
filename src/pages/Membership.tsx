"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import NumberFlow from "@number-flow/react";
import { Briefcase, CheckCheck, Database, Server, MessageCircle, Eye, Users, MessageSquare, Filter, Users2, Calendar, BarChart, Bell, HeadphonesIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Basic",
    description: "Perfect for those that best fits your investor or founder journey",
    price: 0,
    yearlyPrice: 0,
    buttonText: "Apply",
    buttonVariant: "outline" as const,
    features: [
      { text: "3 Current Listings & 3 Community Profiles", icon: <Eye size={20} /> },
      { text: "Reply-Only Access", icon: <MessageSquare size={20} /> },
      { text: "Industry & Region Filters Only", icon: <Filter size={20} /> },
    ],
    includes: [
      "Free includes:",
      "Profile Views",
      "Basic Messaging",
      "Regional Filters",
      "Community Access",
    ],
  },
  {
    name: "Standard",
    description: "Enhanced features for serious investors",
    price: 199,
    yearlyPrice: 1999,
    buttonText: "Apply",
    buttonVariant: "default" as const,
    popular: true,
    features: [
      { text: "10 Current Listings & 10 Community Profiles", icon: <Users size={20} /> },
      { text: "Start Chats with 10 Listings", icon: <MessageSquare size={20} /> },
      { text: "Advanced Filters", icon: <Filter size={20} /> },
    ],
    includes: [
      "Everything in Basic, plus:",
      "Connection Requests",
      "Direct Messaging",
      "Investment Size Filters",
      "Funding Stage Filters",
    ],
  },
  {
    name: "Premium",
    description: "Full access for professional fund managers",
    price: 299,
    yearlyPrice: 2999,
    buttonText: "Apply",
    buttonVariant: "outline" as const,
    features: [
      { text: "Unlimited Access", icon: <Database size={20} /> },
      { text: "Expert Network (2 Hours/Month)", icon: <Users2 size={20} /> },
      { text: "Curated Strategy Sessions", icon: <Calendar size={20} /> },
    ],
    includes: [
      "Everything in Standard, plus:",
      "Unlimited Connections",
      "Expert Network Access",
      "Strategy Sessions",
      "Investor Roundtables",
      "Community Events",
      "Market Research Reports",
      "Platform Matching Alerts",
      "Concierge Support",
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-50 mx-auto flex w-fit rounded-full bg-muted border border-border p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={`relative z-10 w-fit sm:h-12 h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            selected === "0"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-accent border-accent bg-gradient-accent"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={`relative z-10 w-fit sm:h-12 h-8 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            selected === "1"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-accent border-accent bg-gradient-accent"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Yearly</span>
        </button>
      </div>
    </div>
  );
};

const Membership = () => {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="px-4 pt-24 min-h-screen mx-auto relative bg-gradient-subtle" ref={pricingRef}>
        <div
          className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, hsl(var(--accent)) 0%, transparent 70%)`,
            opacity: 0.6,
            mixBlendMode: "multiply",
          }}
        />

        <div className="text-center mb-6 max-w-3xl mx-auto relative z-10">
          <TimelineContent
            as="h1"
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="md:text-6xl sm:text-4xl text-3xl font-medium text-foreground mb-4"
          >
            Membership Tiers
          </TimelineContent>

          <TimelineContent
            as="p"
            animationNum={2}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="sm:text-base text-sm text-muted-foreground sm:w-[70%] w-[80%] mx-auto"
          >
            Choose the plan that best fits your investment strategy and unlock access to premium private market opportunities.
          </TimelineContent>
        </div>

        <TimelineContent
          as="div"
          animationNum={3}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="relative z-10"
        >
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </TimelineContent>

        <div className="grid md:grid-cols-3 max-w-7xl gap-4 py-6 mx-auto relative z-10">
          {plans.map((plan, index) => (
            <TimelineContent
              key={plan.name}
              as="div"
              animationNum={4 + index}
              timelineRef={pricingRef}
              customVariants={revealVariants}
            >
              <Card
                className={`relative border-border h-[600px] flex flex-col ${
                  plan.popular ? "ring-2 ring-accent bg-accent/5" : "bg-card"
                }`}
              >
                <CardHeader className="text-left">
                  <div className="flex justify-between">
                    <h3 className="text-3xl font-semibold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    {plan.popular && (
                      <div className="">
                        <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                          Popular
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-semibold text-foreground">
                      {plan.price === 0 ? (
                        "Free"
                      ) : (
                        <>
                          $
                          <NumberFlow
                            value={isYearly ? plan.yearlyPrice : plan.price}
                            className="text-4xl font-semibold"
                          />
                        </>
                      )}
                    </span>
                    {plan.price !== 0 && (
                      <span className="text-muted-foreground ml-1">
                        /{isYearly ? "year" : "month"}
                      </span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pt-0 flex-1 flex flex-col">
                  <button
                    className={`w-full mb-6 p-4 text-xl rounded-xl transition-all ${
                      plan.popular
                        ? "bg-gradient-accent shadow-lg shadow-accent/20 border border-accent/30 text-accent-foreground"
                        : plan.buttonVariant === "outline"
                          ? "bg-gradient-primary shadow-lg shadow-primary/20 border border-primary/30 text-primary-foreground"
                          : "bg-gradient-primary shadow-lg shadow-primary/20 border border-primary/30 text-primary-foreground"
                    }`}
                  >
                    {plan.buttonText} →
                  </button>
                  <ul className="space-y-2 font-semibold py-5">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-muted-foreground grid place-content-center mt-0.5 mr-3">
                          {feature.icon}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <h4 className="font-medium text-base text-foreground mb-3">
                      {plan.includes[0]}
                    </h4>
                    <ul className="space-y-2 font-semibold">
                      {plan.includes.slice(1).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="h-6 w-6 bg-accent/10 border border-accent rounded-full grid place-content-center mt-0.5 mr-3">
                            <CheckCheck className="h-4 w-4 text-accent" />
                          </span>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TimelineContent>
          ))}
        </div>
      </div>

      {/* Enterprise Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-accent p-8 rounded-lg text-accent-foreground">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <p className="text-accent-foreground/90 mb-2">
                    For firms with complex needs, high-volume deal flow, or multi-team usage, our Enterprise plan offers customized access, advanced features, and dedicated support.
                  </p>
                  <p className="text-accent-foreground/80 text-sm">
                    Whether you're a fund, family office, corporate VC, or ecosystem partner, we'll tailor MarketGlide to work for you.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button className="bg-white/10 border border-white/20 text-white hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Talk to us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Membership;