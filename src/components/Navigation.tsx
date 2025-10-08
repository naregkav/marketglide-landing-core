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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface MobileDropdownProps {
  title: string;
  links: { label: string; href: string }[];
  onLinkClick: () => void;
  isRouterLink?: boolean;
}

const MobileDropdown = ({ title, links, onLinkClick, isRouterLink = false }: MobileDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border-b border-border/50">
      <CollapsibleTrigger className="flex items-center justify-between w-full text-foreground hover:text-primary font-semibold py-3.5 px-4 transition-all duration-200 group">
        <span className="text-base">{title}</span>
        <ChevronDown className={`h-4 w-4 transition-all duration-300 ease-out group-hover:text-primary ${isOpen ? 'rotate-180' : ''}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-muted/30">
        <div className="py-2 px-4 space-y-1">
          {links.map((link) => 
            isRouterLink ? (
              <Link
                key={link.label}
                to={link.href}
                className="block text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 py-2.5 px-3 rounded-lg"
                onClick={onLinkClick}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 py-2.5 px-3 rounded-lg"
                onClick={onLinkClick}
              >
                {link.label}
              </a>
            )
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

interface MobileDropdownDetailedProps {
  title: string;
  links: { label: string; href: string; description: string }[];
  onLinkClick: () => void;
}

const MobileDropdownDetailed = ({ title, links, onLinkClick }: MobileDropdownDetailedProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border-b border-border/50">
      <CollapsibleTrigger className="flex items-center justify-between w-full text-foreground hover:text-primary font-semibold py-3.5 px-4 transition-all duration-200 group">
        <span className="text-base">{title}</span>
        <ChevronDown className={`h-4 w-4 transition-all duration-300 ease-out group-hover:text-primary ${isOpen ? 'rotate-180' : ''}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-muted/30">
        <div className="py-2 px-4 space-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-lg hover:bg-muted/60 transition-all duration-200 group/item"
              onClick={onLinkClick}
            >
              <div className="text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors">
                {link.label}
              </div>
              <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                {link.description}
              </div>
            </a>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

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

  const productLinks = [
    { label: "Curated Platform", href: "/product/curated-platform" },
    { label: "Sophia AI", href: "/product/sophia-ai" },
    { label: "MarketGlide Academy", href: "/product/academy" },
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
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <div className="flex items-center justify-between h-16 lg:h-20 w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">MG</span>
            </div>
            <span className="text-xl font-bold text-foreground">MarketGlide</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Product Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium flex items-center gap-1">
                Product <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[240px] p-2">
                {productLinks.map((link) => (
                  <DropdownMenuItem key={link.label} asChild>
                    <a href={link.href} className="cursor-pointer">
                      {link.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
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
          <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex flex-col py-2">
              {/* Product Dropdown Mobile */}
              <MobileDropdown title="Product" links={productLinks} onLinkClick={() => setIsMobileMenuOpen(false)} />
              
              {/* Solutions Dropdown Mobile */}
              <MobileDropdown title="Solutions" links={solutionsLinks} onLinkClick={() => setIsMobileMenuOpen(false)} isRouterLink />

              {/* Standard Links */}
              <div className="border-b border-border/50">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={
                      link.href === "#membership" ? "/membership" :
                      link.href === "#blog" ? "/blog" :
                      link.href === "#faq" ? "/faq" :
                      link.href
                    }
                    className="block text-foreground hover:text-primary hover:bg-muted/30 transition-all duration-200 font-medium px-4 py-3.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              
              {/* Sign In Button */}
              <div className="px-4 py-3 border-b border-border/50">
                <a href="https://stage.marketglide.io/app/login" target="_blank" rel="noopener noreferrer">
                  <InteractiveHoverButton variant="outline" size="sm" className="w-full justify-center" showArrow={false}>
                    Sign In
                  </InteractiveHoverButton>
                </a>
              </div>
              
              {/* Apply Dropdown Mobile */}
              <MobileDropdownDetailed 
                title="Apply" 
                links={applyLinks} 
                onLinkClick={() => setIsMobileMenuOpen(false)} 
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;