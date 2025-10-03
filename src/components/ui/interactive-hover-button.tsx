import React from "react";
import { ArrowRight } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const interactiveHoverButtonVariants = cva(
  "group relative cursor-pointer overflow-hidden rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 inline-flex items-center justify-center gap-2",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground hover:text-primary-foreground",
        cta: "border bg-gradient-accent text-accent-foreground hover:text-primary-foreground",
        hero: "border bg-primary text-primary-foreground hover:text-primary-foreground",
        outline: "border border-input bg-background text-foreground hover:text-primary-foreground",
        ghost: "border border-transparent bg-transparent text-foreground hover:text-primary-foreground",
        accent: "border bg-accent text-accent-foreground hover:text-primary-foreground",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-10 px-6 text-sm",
        lg: "h-11 px-8 text-base",
        xl: "h-12 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof interactiveHoverButtonVariants> {
  asChild?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  showArrow?: boolean;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ 
  children, 
  className, 
  variant, 
  size, 
  asChild = false, 
  icon: Icon, 
  showArrow = true,
  ...props 
}, ref) => {
  const Comp = asChild ? Slot : "button";
  const content = children || "Button";
  const DisplayIcon = Icon || (showArrow ? ArrowRight : null);

  return (
    <Comp
      ref={ref}
      className={cn(interactiveHoverButtonVariants({ variant, size }), className)}
      {...props}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {content}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{content}</span>
        {DisplayIcon && <DisplayIcon className="w-4 h-4" />}
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-primary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary"></div>
    </Comp>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton, interactiveHoverButtonVariants };