import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Input } from "@/components/ui/input";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const linkRoutes: Record<string, string> = {
    "Privacy Policy": "/privacy-policy",
    "Terms of Service": "/terms-of-service",
    "Blog": "/blog",
    "FAQ": "/faq",
    "Market Reports": "/#community",
    "Webinars": "/#community"
  };

  const footerSections = [
    {
      title: "Platform",
      links: [
        "Deal Flow",
        "Member Network",
        "Advisory Services"
      ]
    },
    {
      title: "Resources",
      links: [
        "Market Reports",
        "Webinars",
        "Blog"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Press",
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
    <footer className="bg-muted/30 border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">MG</span>
              </div>
              <span className="text-xl font-bold text-foreground">MarketGlide</span>
            </div>

            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              The trusted discovery layer for global private markets. Connecting elite 
              investors, fund managers, and dealmakers worldwide.
            </p>

            {/* Newsletter Signup */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">
                Stay Updated
              </h4>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="flex-1"
                  type="email"
                />
                <InteractiveHoverButton variant="hero" size="sm" icon={Mail} showArrow={false}>
                  
                </InteractiveHoverButton>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Get exclusive market insights and opportunities.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => {
                  const route = linkRoutes[link];
                  return (
                    <li key={link}>
                      {route ? (
                        <Link
                          to={route}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                          {link}
                        </Link>
                      ) : (
                        <a
                          href="#"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                          {link}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2025 MarketGlide. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/company/marketglideofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/marketglide"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Regulatory Disclaimer */}
      <div className="bg-muted/50 border-t border-border">
        <div className="container mx-auto px-6 py-4">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            <strong>Important:</strong> MarketGlide is a trading name of Ventures Without Borders Limited (UK Reg. 15397290). “MarketGlide” and “Ventures Without Borders” are registered trademarks in the United Kingdom. Any financial promotions made through the platform are directed only at persons who are exempt under the UK Financial Services and Markets Act 2000 (Financial Promotion) Order 2005. All other content is provided for general information only and does not constitute investment advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;