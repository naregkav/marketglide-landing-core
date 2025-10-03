import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Mail } from "lucide-react";
import { ScheduleCallDialog } from "@/components/ScheduleCallDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Access{" "}
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              Global Private Markets?
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of investors, fund managers, and advisors who trust 
            MarketGlide for their private market opportunities.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$2.5B+</div>
              <div className="text-white/70">Deal Flow Volume</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/70">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-white/70">Countries Covered</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <InteractiveHoverButton variant="cta" size="xl" className="bg-white text-primary">
                  Apply for Membership
                </InteractiveHoverButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-64">
                <DropdownMenuItem asChild>
                  <a
                    href="https://marketglide.io/app/registration/company?type=company"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <div>
                      <div className="font-semibold">Startups</div>
                      <div className="text-xs text-muted-foreground">Raise capital and grow</div>
                    </div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://marketglide.io/app/registration/company?type=fund"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <div>
                      <div className="font-semibold">Emerging Fund Managers</div>
                      <div className="text-xs text-muted-foreground">Launch and scale funds</div>
                    </div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://marketglide.io/app/registration/investor?type=investor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <div>
                      <div className="font-semibold">PE & Venture Capital</div>
                      <div className="text-xs text-muted-foreground">Access deal flow</div>
                    </div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://marketglide.io/app/registration/investor?type=investor-private"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <div>
                      <div className="font-semibold">Private Investors</div>
                      <div className="text-xs text-muted-foreground">Invest in opportunities</div>
                    </div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://marketglide.io/app/registration/investor?type=investor-advisors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <div>
                      <div className="font-semibold">Advisors</div>
                      <div className="text-xs text-muted-foreground">Connect and advise</div>
                    </div>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ScheduleCallDialog>
              <InteractiveHoverButton
                variant="outline"
                size="xl"
                icon={Mail}
                className="bg-white/10 border-white/20 text-white backdrop-blur-sm"
              >
                Schedule a Call
              </InteractiveHoverButton>
            </ScheduleCallDialog>
          </div>

          {/* Trust Message */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-white/80 text-sm">
              <strong className="text-white">Exclusive Access:</strong> Our membership is by invitation 
              and application only. We maintain high standards to ensure quality deal flow 
              and trusted network connections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;