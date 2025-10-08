import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactDialog } from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqSections = [
    {
      title: "General",
      questions: [
        {
          q: "What is MarketGlide?",
          a: "MarketGlide is a curated platform that connects investors, funds, and companies seeking capital through a trusted, high-quality private investment network. We streamline discovery, enable strategic introductions, and support relationship-driven capital flow, without the noise of traditional fundraising channels.",
        },
        {
          q: "Is MarketGlide a fundraising platform?",
          a: "No. MarketGlide does not facilitate fundraising transactions. We provide a digital space for companies and investors to connect, exchange insights, and explore potential opportunities. All engagement happens off-platform between consenting parties.",
        },
        {
          q: "Who is MarketGlide for?",
          a: "MarketGlide is built for: Investors (family offices, fund managers, PE/VC firms, angel syndicates, and HNWIs), Companies & Funds (startups, established businesses, and emerging fund managers seeking capital or strategic partnerships), and Advisors (domain experts, legal professionals, and ecosystem enablers who add value across transactions).",
        },
      ],
    },
    {
      title: "For Investors",
      questions: [
        {
          q: "What kind of investment opportunities can I discover on MarketGlide?",
          a: "You'll gain access to curated listings across multiple asset classes, including startups, private companies, early-stage funds, and co-investment opportunities. All listings are vetted for quality, clarity, and relevance to our professional investor base.",
        },
        {
          q: "Is there a cost to join as an investor?",
          a: "We offer both free and premium membership tiers. Premium members receive full access to the platform, exclusive visibility into new listings, participation in private events, and access to our expert advisory network.",
        },
        {
          q: "How are investment opportunities vetted?",
          a: "Each company or fund undergoes a multi-step onboarding and review process, including basic legal checks and quality screening. We do not conduct full due diligence but aim to ensure every profile meets a baseline of professionalism.",
        },
        {
          q: "Can I list my fund or investment vehicle on MarketGlide?",
          a: "Yes, subject to approval. We welcome LP-GP connections, emerging fund listings, and private credit or co-investment structures that align with our investor community.",
        },
      ],
    },
    {
      title: "For Companies & Funds",
      questions: [
        {
          q: "What kinds of companies or funds are accepted?",
          a: "We accept startups, growth-stage companies, established businesses, and investment vehicles (such as new funds or SPVs) that are investor-ready and have a clear thesis. All applicants are reviewed to ensure alignment with our standards and community.",
        },
        {
          q: "Can I raise capital directly through MarketGlide?",
          a: "MarketGlide is not a broker or fundraising intermediary. You may present your profile and connect with interested parties, but all capital discussions and transactions happen outside the platform.",
        },
        {
          q: "What is the process to get listed?",
          a: "After registration, you'll complete a short application, certification declaration, and onboarding form. Our team will review your materials, and once approved, your profile will be activated and discoverable by relevant investors.",
        },
        {
          q: "What happens if I don't qualify under UK investment promotion exemptions?",
          a: "You can still use MarketGlide to network, connect with investors, and access non-promotional features. However, you won't be able to view active investment opportunities. You may update this certification at any time in your settings.",
        },
      ],
    },
    {
      title: "Compliance & Eligibility",
      questions: [
        {
          q: "Is MarketGlide FCA-authorised?",
          a: "No. MarketGlide is not regulated by the Financial Conduct Authority or any other regulatory authority. Importantly, MarketGlide does not provide investment advice or intermediation services. All financial promotions on the platform are made in accordance with exemptions under the UK Financial Promotion Order (FPO).",
        },
        {
          q: "How do you ensure compliance with UK investment promotion laws?",
          a: "Users are required to complete a self-certification process to confirm that they are eligible to view investment-related content under UK law. This includes categories such as: Certified High Net Worth Individuals, Self-Certified Sophisticated Investors, Investment Professionals, and High Net Worth Companies/Trusts.",
        },
        {
          q: "What data do you store for compliance?",
          a: "For legal purposes, we store the self-certification declaration, investor category, timestamp, and email. This ensures traceability and accountability if required by law.",
        },
      ],
    },
    {
      title: "Membership & Pricing",
      questions: [
        {
          q: "What are the membership options on MarketGlide?",
          a: "We offer three tiers to match your goals and level of engagement: Basic (Free access with limited views and filters), Standard (A more active tier with monthly messaging, advanced filters, and limited events), and Premium (Full platform access, unlimited messaging, priority event invites, and expert advisory sessions). For full benefits and pricing, visit our Membership page.",
        },
        {
          q: "Can I upgrade or downgrade my plan?",
          a: "Yes, you can cancel or downgrade at any time from your account settings. If you're on a paid plan, your subscription will remain active until the end of your billing cycle.",
        },
        {
          q: "Are there discounts for early members or partners?",
          a: "Yes. Founding members and strategic ecosystem partners may be eligible for custom pricing or extended benefits. Please reach out directly to concierge@marketglide.io to inquire.",
        },
        {
          q: "Do you offer institutional or group access?",
          a: "We do. Reach out to concierge@marketglide.io to explore custom options.",
        },
      ],
    },
    {
      title: "Network & Events",
      questions: [
        {
          q: "What kind of community engagement does MarketGlide offer?",
          a: "We host online and offline events, deal previews, expert AMAs, and LP/GP roundtables. Members are invited based on relevance and contribution to the community.",
        },
        {
          q: "Can I access the expert network?",
          a: "Yes, Premium members receive two hours of advisory time per year and can request additional time at discounted rates. Our expert network includes legal, investment, and fundraising professionals.",
        },
      ],
    },
    {
      title: "Other Questions",
      questions: [
        {
          q: "Can I refer someone to MarketGlide?",
          a: "Yes, and we encourage it. Approved referral partners may be eligible for a commission. Contact us to learn more.",
        },
        {
          q: "How is MarketGlide different from other platforms?",
          a: "We are built around curation, credibility, and connection, not lead volume. Our focus is on quality over scale, helping serious investors and credible ventures connect with purpose.",
        },
        {
          q: "Can I remove my profile?",
          a: "Yes. You can delete your profile at any time from your settings. Please email our team at concierge@marketglide.io should you require further help.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about MarketGlide. Can't find what you're looking for? 
            Reach out to us at{" "}
            <a href="mailto:concierge@marketglide.io" className="text-primary hover:underline">
              concierge@marketglide.io
            </a>
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl space-y-16">
          {faqSections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-12 bg-primary rounded-full" />
                <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {section.questions.map((item, qIdx) => (
                  <AccordionItem
                    key={qIdx}
                    value={`${idx}-${qIdx}`}
                    className="border border-border rounded-lg px-6 bg-card/50 hover:bg-card transition-colors"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-8">
            Our team is here to help. Get in touch and we'll respond as soon as possible.
          </p>
          <ContactDialog>
            <Button className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold shadow-lg hover:bg-primary/90">
              Contact Support
            </Button>
          </ContactDialog>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
