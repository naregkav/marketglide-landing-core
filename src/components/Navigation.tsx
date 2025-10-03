import { useState, useEffect } from "react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          ? "bg-background/98 backdrop-blur-lg shadow-medium border-b border-border/20"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">MG</span>
            </div>
            <span className="text-xl font-bold text-foreground">MarketGlide</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={
                  link.href === "#membership" ? "/membership" :
                  link.href === "#blog" ? "/blog" :
                  link.href
                }
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <InteractiveHoverButton variant="ghost" size="sm" showArrow={false}>
              Sign In
            </InteractiveHoverButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <InteractiveHoverButton variant="cta" size="sm">
                  Apply <ChevronDown className="ml-1 h-4 w-4" />
                </InteractiveHoverButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[420px] p-2">
                <DropdownMenuItem asChild>
                  <Link to="/apply/startups" className="flex flex-col items-start gap-1 cursor-pointer">
                    <span className="font-semibold">Startups & Companies (Raising)</span>
                    <span className="text-xs text-muted-foreground">Founders, developers, and operators raising capital across sectors.</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/apply/fund-managers" className="flex flex-col items-start gap-1 cursor-pointer">
                    <span className="font-semibold">Emerging Fund Managers (Raising)</span>
                    <span className="text-xs text-muted-foreground">First-time GPs and new strategies seeking LPs.</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/apply/vc-pe" className="flex flex-col items-start gap-1 cursor-pointer">
                    <span className="font-semibold">Venture Capital & Private Equity Firms</span>
                    <span className="text-xs text-muted-foreground">Established funds sourcing deals and co-investments.</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/apply/investors" className="flex flex-col items-start gap-1 cursor-pointer">
                    <span className="font-semibold">Private Investors & Institutional LPs</span>
                    <span className="text-xs text-muted-foreground">Family offices, UHNWIs, angels, syndicates, and LPs deploying capital.</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/apply/advisors" className="flex flex-col items-start gap-1 cursor-pointer">
                    <span className="font-semibold">Advisors & Ecosystem Partners</span>
                    <span className="text-xs text-muted-foreground">Lawyers, consultants, fund admins, accelerators, and others supporting transactions.</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <InteractiveHoverButton
            variant="ghost"
            size="icon"
            className="lg:hidden"
            showArrow={false}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </InteractiveHoverButton>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={
                    link.href === "#membership" ? "/membership" :
                    link.href === "#blog" ? "/blog" :
                    link.href
                  }
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <InteractiveHoverButton variant="ghost" size="sm" className="justify-start" showArrow={false}>
                  Sign In
                </InteractiveHoverButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <InteractiveHoverButton variant="cta" size="sm" className="w-full">
                      Apply <ChevronDown className="ml-1 h-4 w-4" />
                    </InteractiveHoverButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[calc(100vw-3rem)] max-w-[420px] p-2">
                    <DropdownMenuItem asChild>
                      <Link to="/apply/startups" className="flex flex-col items-start gap-1 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="font-semibold">Startups & Companies (Raising)</span>
                        <span className="text-xs text-muted-foreground">Founders, developers, and operators raising capital across sectors.</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/apply/fund-managers" className="flex flex-col items-start gap-1 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="font-semibold">Emerging Fund Managers (Raising)</span>
                        <span className="text-xs text-muted-foreground">First-time GPs and new strategies seeking LPs.</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/apply/vc-pe" className="flex flex-col items-start gap-1 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="font-semibold">Venture Capital & Private Equity Firms</span>
                        <span className="text-xs text-muted-foreground">Established funds sourcing deals and co-investments.</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/apply/investors" className="flex flex-col items-start gap-1 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="font-semibold">Private Investors & Institutional LPs</span>
                        <span className="text-xs text-muted-foreground">Family offices, UHNWIs, angels, syndicates, and LPs deploying capital.</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/apply/advisors" className="flex flex-col items-start gap-1 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="font-semibold">Advisors & Ecosystem Partners</span>
                        <span className="text-xs text-muted-foreground">Lawyers, consultants, fund admins, accelerators, and others supporting transactions.</span>
                      </Link>
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