import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-glow",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary/50 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "relative overflow-hidden bg-gradient-hero text-white font-bold uppercase tracking-wider transition-all duration-500 hover:scale-105 hover:shadow-glow before:absolute before:inset-0 before:bg-gradient-premium before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        power: "relative overflow-hidden bg-gradient-bull text-white font-bold transition-all duration-700 hover:scale-110 hover:shadow-premium before:absolute before:inset-0 before:bg-gradient-premium before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-80 after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:-translate-x-full after:transition-transform after:duration-700 hover:after:translate-x-full",
        premium: "relative overflow-hidden bg-gradient-premium text-white font-bold border-2 border-bull-gold/50 transition-all duration-500 hover:border-bull-gold hover:scale-105 hover:shadow-premium hover:shadow-bull-gold/30",
        steel: "bg-gradient-steel text-white font-semibold hover:shadow-steel transform hover:scale-105 transition-all duration-300",
        gold: "bg-gradient-premium text-white font-bold hover:shadow-premium transform hover:scale-105 transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
