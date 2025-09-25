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
    description: "For founders, funds, and investors getting started.",
    price: 0,
    yearlyPrice: 0,
    buttonText: "Apply now",
    buttonVariant: "outline" as const,
    features: [
      { text: "View 3 listings/month", icon: <Eye size={20} /> },
      { text: "View 3 members/month", icon: <Users size={20} /> },
      { text: "Reply-only messaging", icon: <MessageSquare size={20} /> },
      { text: "Industry & region filters only", icon: <Filter size={20} /> },
      { text: "MarketGlide newsletter", icon: <Bell size={20} /> },
    ],
  },
  {
    name: "Standard",
    description: "For active users raising or deploying capital.",
    price: 199,
    yearlyPrice: 167, // 199 * 12 * 0.84 / 12 = 167 (16% savings)
    buttonText: "Apply now",
    buttonVariant: "default" as const,
    features: [
      { text: "Everything in Free", icon: <CheckCheck size={20} /> },
      { text: "View 10 listings/month", icon: <Eye size={20} /> },
      { text: "View 10 members/month", icon: <Users size={20} /> },
      { text: "Smart filters (by deal stage, ticket size, investor type)", icon: <Filter size={20} /> },
      { text: "Start and reply to chats", icon: <MessageSquare size={20} /> },
      { text: "Investor roundtable invites", icon: <Calendar size={20} /> },
    ],
  },
  {
    name: "Premium",
    description: "Our most popular plan for a reason.",
    price: 299,
    yearlyPrice: 251, // 299 * 12 * 0.84 / 12 = 251 (16% savings)
    buttonText: "Apply now",
    buttonVariant: "outline" as const,
    popular: true,
    features: [
      { text: "Everything in Pro", icon: <CheckCheck size={20} /> },
      { text: "Unlimited listings & members", icon: <Database size={20} /> },
      { text: "Unlimited direct chats", icon: <MessageSquare size={20} /> },
      { text: "Unlimited custom filters", icon: <Filter size={20} /> },
      { text: "Performance Analytics & Insights", icon: <BarChart size={20} /> },
      { text: "Priority Support", icon: <HeadphonesIcon size={20} /> },
    ],
  },
  {
    name: "Enterprise",
    description: "For family offices, corporate VC arms, or institutions.",
    price: null,
    yearlyPrice: null,
    buttonText: "Get started",
    buttonVariant: "default" as const,
    features: [
      { text: "Everything in Pro", icon: <CheckCheck size={20} /> },
      { text: "Custom team accounts", icon: <Users2 size={20} /> },
      { text: "White-glove onboarding", icon: <HeadphonesIcon size={20} /> },
      { text: "Dedicated relationship manager", icon: <MessageCircle size={20} /> },
      { text: "Advanced reporting & analytics", icon: <BarChart size={20} /> },
      { text: "Investor syndicate building", icon: <Users size={20} /> },
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
          <span className="relative flex items-center gap-2">
            Yearly
            <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-xs font-medium">
              SAVE 16%
            </span>
          </span>
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

        <div className="grid lg:grid-cols-4 md:grid-cols-2 max-w-7xl gap-4 py-6 mx-auto relative z-10 md:items-stretch">
          {plans.map((plan, index) => (
            <TimelineContent
              key={plan.name}
              as="div"
              animationNum={4 + index}
              timelineRef={pricingRef}
              customVariants={revealVariants}
            >
              <Card
                className={`relative border-border h-full flex flex-col ${
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
                      ) : plan.price === null ? (
                        "Custom"
                      ) : (
                        <>
                          $
                          <NumberFlow
                            value={isYearly ? plan.yearlyPrice! : plan.price}
                            className="text-4xl font-semibold"
                          />
                        </>
                      )}
                    </span>
                    {plan.price !== 0 && plan.price !== null && (
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
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="h-6 w-6 bg-accent/10 border border-accent rounded-full grid place-content-center mt-0.5 mr-3 flex-shrink-0">
                          <CheckCheck className="h-4 w-4 text-accent" />
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TimelineContent>
          ))}
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default Membership;