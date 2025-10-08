import { useState } from "react";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactDialog } from "@/components/ContactDialog";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const emailSchema = z.string().trim().email({ message: "Invalid email address" }).max(255);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      emailSchema.parse(email);
      setIsSubmitting(true);

      const { error } = await supabase
        .from('waitlist_submissions')
        .insert({
          name: "Newsletter Subscriber",
          email: email.trim(),
          source: "footer"
        });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });

      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid Email",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to subscribe. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const linkRoutes: Record<string, string> = {
    "Curated Platform": "/product/curated-platform",
    "Sophia AI": "/product/sophia-ai",
    "MarketGlide Academy": "/product/academy",
    "Privacy Policy": "/privacy-policy",
    "Terms of Service": "/terms-of-service",
  };

  const footerSections = [
    {
      title: "Product",
      links: [
        "Curated Platform",
        "Sophia AI",
        "MarketGlide Academy"
      ]
    },
    {
      title: "Company",
      links: [
        "About",
        "Partners",
        "Contact"
      ]
    },
    {
      title: "Legal",
      links: [
        "Privacy Policy",
        "Terms of Service"
      ]
    }
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1 - Brand */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-9 h-9 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">MG</span>
              </div>
              <span className="text-2xl font-bold text-foreground">MarketGlide</span>
            </div>

            <div className="space-y-2 mb-8">
              <p className="text-foreground/90 text-base leading-relaxed">
                The trusted discovery layer for global private markets.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Connecting elite investors, fund managers, and dealmakers worldwide.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.linkedin.com/company/marketglideofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/marketglide"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Product */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-4">
              {footerSections[0].links.map((link) => {
                const route = linkRoutes[link];
                return (
                  <li key={link}>
                    <Link
                      to={route}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base"
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-4">
              {footerSections[1].links.map((link) => {
                // Handle Contact link specially with dialog
                if (link === "Contact") {
                  return (
                    <li key={link}>
                      <ContactDialog>
                        <button className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base">
                          {link}
                        </button>
                      </ContactDialog>
                    </li>
                  );
                }
                
                return (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base"
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-4">
              {footerSections[2].links.map((link) => {
                const route = linkRoutes[link];
                return (
                  <li key={link}>
                    <Link
                      to={route}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base"
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">
              Stay in the Loop
            </h4>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Get early access to investor insights, new features, and exclusive MarketGlide updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                placeholder="Your email"
                className="w-full border-primary/40 focus-visible:border-primary"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                required
              />
              <InteractiveHoverButton 
                type="submit" 
                variant="hero" 
                size="sm" 
                icon={Mail} 
                showArrow={false}
                disabled={isSubmitting}
                className="w-full"
              >
                Subscribe
              </InteractiveHoverButton>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border/50" />

      {/* Bottom Section */}
      <div className="container mx-auto px-6 py-6">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 MarketGlide. All rights reserved.
          </p>
        </div>
      </div>

      {/* Regulatory Disclaimer */}
      <div className="bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-6 py-4">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            <strong>Important:</strong> MarketGlide is a trading name of Ventures Without Borders Limited (UK Reg. 15397290). "MarketGlide" and "Ventures Without Borders" are registered trademarks in the United Kingdom. Any financial promotions made through the platform are directed only at persons who are exempt under the UK Financial Services and Markets Act 2000 (Financial Promotion) Order 2005. All other content is provided for general information only and does not constitute investment advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;