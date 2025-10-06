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
    { label: "Membership", href: "#membership" },
    { label: "Blog", href: "#blog" },
    { label: "FAQ", href: "#faq" },
  ];

  const solutionsLinks = [
    { label: "Startups & Companies", href: "/apply/startups" },
    { label: "Emerging Fund Managers", href: "/apply/fund-managers" },
    { label: "PE & VC Firms", href: "/apply/pe-vc" },
    { label: "Family Offices", href: "/apply/family-offices" },
    { label: "Advisors & Partners", href: "/apply/advisors" },
  ];

  const applyLinks = [
    { 
      label: "Startups & Companies (Raising)", 
      description: "Founders, developers, and operators raising capital across sectors.",
      href: "https://stage.marketglide.io/app/registration/company?type=company" 
    },
    { 
      label: "Emerging Fund Managers (Raising)", 
      description: "First-time GPs and new strategies seeking LPs.",
      href: "https://stage.marketglide.io/app/registration/company?type=fund" 
    },
    { 
      label: "Venture Capital & Private Equity Firms", 
      description: "Established funds sourcing deals and co-investments.",
      href: "https://stage.marketglide.io/app/registration/investor?type=investor" 
    },
    { 
      label: "Private Investors & Institutional LPs", 
      description: "Family offices, UHNWIs, angels, syndicates, and LPs deploying capital.",
      href: "https://stage.marketglide.io/app/registration/investor?type=investor-private" 
    },
    { 
      label: "Advisors & Ecosystem Partners", 
      description: "Lawyers, consultants, fund admins, accelerators, and others supporting transactions.",
      href: "https://stage.marketglide.io/app/registration/investor?type=investor-advisors" 
    },
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
            <a
              href="/#product"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
            >
              Product
            </a>
            
            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium flex items-center gap-1">
                Solutions <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[280px] p-2">
                {solutionsLinks.map((link) => (
                  <DropdownMenuItem key={link.label} asChild>
                    <Link to={link.href} className="cursor-pointer">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={
                  link.href === "#membership" ? "/membership" :
                  link.href === "#blog" ? "/blog" :
                  link.href === "#faq" ? "/faq" :
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
            <a href="https://stage.marketglide.io/app/login" target="_blank" rel="noopener noreferrer">
              <InteractiveHoverButton variant="ghost" size="sm" showArrow={false}>
                Sign In
              </InteractiveHoverButton>
            </a>
            
            {/* Apply Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-accent text-accent-foreground hover:opacity-90 shadow-elegant h-9 px-4">
                  Apply <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[360px] p-2">
                {applyLinks.map((link) => (
                  <DropdownMenuItem key={link.label} asChild className="cursor-pointer p-3 flex-col items-start gap-1">
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <div className="font-medium text-foreground">{link.label}</div>
                      <div className="text-xs text-muted-foreground">{link.description}</div>
                    </a>
                  </DropdownMenuItem>
                ))}
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
              <a
                href="/#product"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Product
              </a>
              
              {/* Solutions Dropdown Mobile */}
              <div className="px-2">
                <div className="text-muted-foreground font-medium mb-2">Solutions</div>
                <div className="flex flex-col space-y-2 pl-4">
                  {solutionsLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={
                    link.href === "#membership" ? "/membership" :
                    link.href === "#blog" ? "/blog" :
                    link.href === "#faq" ? "/faq" :
                    link.href
                  }
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <a href="https://stage.marketglide.io/app/login" target="_blank" rel="noopener noreferrer">
                  <InteractiveHoverButton variant="ghost" size="sm" className="justify-start" showArrow={false}>
                    Sign In
                  </InteractiveHoverButton>
                </a>
                
                {/* Apply Dropdown Mobile */}
                <div className="px-2">
                  <div className="text-muted-foreground font-medium mb-2">Apply</div>
                  <div className="flex flex-col space-y-3 pl-2">
                    {applyLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col gap-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                          {link.label}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {link.description}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;