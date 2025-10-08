import { useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const waitlistSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" })
});

interface WaitlistDialogProps {
  children: ReactNode;
  title?: string;
  description?: string;
  source?: string;
}

export function WaitlistDialog({ 
  children, 
  title = "Join the Waitlist",
  description = "Be the first to know when we launch. Enter your details below.",
  source = "general"
}: WaitlistDialogProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate input
      waitlistSchema.parse({ name, email });

      // Save to database
      const { error: dbError } = await supabase
        .from('waitlist_submissions')
        .insert({
          name: name.trim(),
          email: email.trim(),
          source
        });

      if (dbError) {
        throw dbError;
      }

      toast({
        title: "Success!",
        description: "You've been added to the waitlist. We'll be in touch soon!",
      });

      setName("");
      setEmail("");
      setOpen(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription className="text-base">
            {description}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={100}
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                disabled={isSubmitting}
              />
            </div>
          </div>
          <InteractiveHoverButton
            type="submit"
            variant="accent"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Join Waitlist"}
          </InteractiveHoverButton>
        </form>
      </DialogContent>
    </Dialog>
  );
}
