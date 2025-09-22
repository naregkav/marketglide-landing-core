import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Linkedin, Twitter, Globe } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        "Deal Flow",
        "Member Network",
        "Advisory Services",
        "Analytics",
        "API Access"
      ]
    },
    {
      title: "Resources",
      links: [
        "Market Reports",
        "Research",
        "Webinars",
        "Documentation",
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
        "Terms of Service",
        "Compliance",
        "Security",
        "Cookie Policy"
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
                <Button variant="hero" size="sm">
                  <Mail className="w-4 h-4" />
                </Button>
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
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
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
              © 2024 MarketGlide. All rights reserved. | Regulated by Financial Conduct Authority
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Regulatory Disclaimer */}
      <div className="bg-muted/50 border-t border-border">
        <div className="container mx-auto px-6 py-4">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            <strong>Important:</strong> Private market investments carry significant risk and may not be 
            suitable for all investors. Past performance does not guarantee future results. 
            All investment opportunities are subject to regulatory approval and member verification.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;