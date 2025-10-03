import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Product", href: "#product" },
    { label: "Solutions", href: "#solutions" },
    { label: "Membership", href: "#membership" },
    { label: "Blog", href: "#blog" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-medium"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">MG</span>
            </div>
            <span className="text-xl font-bold text-foreground">MarketGlide</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href === "#membership" ? "/membership" : link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="cta" size="sm">
                  Apply <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 bg-background border-border">
                <DropdownMenuItem asChild>
                  <a href="/apply/startups" className="flex flex-col items-start py-3 cursor-pointer">
                    <span className="font-semibold text-foreground">Startups & Companies (Raising)</span>
                    <span className="text-sm text-muted-foreground">Founders, developers, and operators raising capital across sectors.</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/apply/emerging-fund-managers" className="flex flex-col items-start py-3 cursor-pointer">
                    <span className="font-semibold text-foreground">Emerging Fund Managers (Raising)</span>
                    <span className="text-sm text-muted-foreground">First-time GPs and new strategies seeking LPs.</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/apply/vc-pe-firms" className="flex flex-col items-start py-3 cursor-pointer">
                    <span className="font-semibold text-foreground">Venture Capital & Private Equity Firms</span>
                    <span className="text-sm text-muted-foreground">Established funds sourcing deals and co-investments.</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/apply/private-investors" className="flex flex-col items-start py-3 cursor-pointer">
                    <span className="font-semibold text-foreground">Private Investors & Institutional LPs</span>
                    <span className="text-sm text-muted-foreground">Family offices, UHNWIs, angels, syndicates, and LPs deploying capital.</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/apply/advisors" className="flex flex-col items-start py-3 cursor-pointer">
                    <span className="font-semibold text-foreground">Advisors & Ecosystem Partners</span>
                    <span className="text-sm text-muted-foreground">Lawyers, consultants, fund admins, accelerators, and others supporting transactions.</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href === "#membership" ? "/membership" : link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="ghost" size="sm" className="justify-start">
                  Sign In
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="cta" size="sm" className="w-full">
                      Apply <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80 bg-background border-border">
                    <DropdownMenuItem asChild>
                      <a href="/apply/startups" className="flex flex-col items-start py-3 cursor-pointer">
                        <span className="font-semibold text-foreground">Startups & Companies (Raising)</span>
                        <span className="text-sm text-muted-foreground">Founders, developers, and operators raising capital across sectors.</span>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="/apply/emerging-fund-managers" className="flex flex-col items-start py-3 cursor-pointer">
                        <span className="font-semibold text-foreground">Emerging Fund Managers (Raising)</span>
                        <span className="text-sm text-muted-foreground">First-time GPs and new strategies seeking LPs.</span>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="/apply/vc-pe-firms" className="flex flex-col items-start py-3 cursor-pointer">
                        <span className="font-semibold text-foreground">Venture Capital & Private Equity Firms</span>
                        <span className="text-sm text-muted-foreground">Established funds sourcing deals and co-investments.</span>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="/apply/private-investors" className="flex flex-col items-start py-3 cursor-pointer">
                        <span className="font-semibold text-foreground">Private Investors & Institutional LPs</span>
                        <span className="text-sm text-muted-foreground">Family offices, UHNWIs, angels, syndicates, and LPs deploying capital.</span>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="/apply/advisors" className="flex flex-col items-start py-3 cursor-pointer">
                        <span className="font-semibold text-foreground">Advisors & Ecosystem Partners</span>
                        <span className="text-sm text-muted-foreground">Lawyers, consultants, fund admins, accelerators, and others supporting transactions.</span>
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;