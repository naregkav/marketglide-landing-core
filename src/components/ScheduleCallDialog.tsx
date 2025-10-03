import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";
import { z } from "zod";

const scheduleCallSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  companyName: z.string().trim().min(1, "Company name is required").max(200),
  interest: z.string().min(1, "Please select an interest"),
  agreedToTerms: z.boolean().refine((val) => val === true, "You must agree to the terms"),
});

interface ScheduleCallDialogProps {
  children: React.ReactNode;
}

export const ScheduleCallDialog = ({ children }: ScheduleCallDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    interest: "",
    agreedToTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form
    const result = scheduleCallSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          newErrors[error.path[0].toString()] = error.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with your Airtable API endpoint
      const airtableWebhook = "https://hooks.airtable.com/workflows/v1/genericWebhook/appJwJyDaTSMvbhNF/wfl9oUSac6PiY080c/wtrMgAQUksNe3BNeQ";
      
      const response = await fetch(airtableWebhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          companyName: formData.companyName,
          interest: formData.interest,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast({
        title: "Success!",
        description: "Your request has been submitted. We'll be in touch soon.",
      });

      // Reset form and close dialog
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        interest: "",
        agreedToTerms: false,
      });
      setOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <DialogTitle className="text-3xl font-bold text-center mb-4">
            Schedule a Call
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="text-center space-y-3">
            <p className="text-muted-foreground">
              Our friendly team is excited to show you how MarketGlide membership can help you raise
              capital, discover exclusive opportunities, and expand your network.
            </p>
            <p className="text-muted-foreground">
              Schedule a personalized call to explore how the platform can support your goals.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="h-12 rounded-full border-border/50 bg-background"
              />
              {errors.firstName && (
                <p className="text-destructive text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <Input
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="h-12 rounded-full border-border/50 bg-background"
              />
              {errors.lastName && (
                <p className="text-destructive text-sm mt-1">{errors.lastName}</p>
              )}
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 rounded-full border-border/50 bg-background"
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <Input
                placeholder="Company Name"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="h-12 rounded-full border-border/50 bg-background"
              />
              {errors.companyName && (
                <p className="text-destructive text-sm mt-1">{errors.companyName}</p>
              )}
            </div>

            <div>
              <Select value={formData.interest} onValueChange={(value) => setFormData({ ...formData, interest: value })}>
                <SelectTrigger className="h-12 rounded-full border-border/50 bg-background">
                  <SelectValue placeholder="I'm interested in:" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="raising-capital">Raising Capital</SelectItem>
                  <SelectItem value="investment-opportunities">
                    Exploring Investment Opportunities
                  </SelectItem>
                  <SelectItem value="strategic-partners">
                    Connecting with Strategic Partners
                  </SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.interest && (
                <p className="text-destructive text-sm mt-1">{errors.interest}</p>
              )}
            </div>

            <div className="flex items-start space-x-3 pt-2">
              <Checkbox
                id="terms"
                checked={formData.agreedToTerms}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, agreedToTerms: checked as boolean })
                }
                className="mt-1"
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                By submitting, you agree to MarketGlide's Terms of Service and Privacy Policy. You
                can opt out anytime.{" "}
                <a href="#" className="text-accent hover:underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="text-accent hover:underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
            {errors.agreedToTerms && (
              <p className="text-destructive text-sm">{errors.agreedToTerms}</p>
            )}

            <div className="pt-4 border-t">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-muted hover:bg-muted/80 text-foreground rounded-full"
              >
                {isSubmitting ? "Submitting..." : "Submit →"}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
