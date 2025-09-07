import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Enterprise variants using design system
        enterprise: "bg-gradient-primary text-primary-foreground hover:bg-primary-dark shadow-primary transition-all duration-300 hover:shadow-elevated",
        "uk-client": "bg-uk-client text-white hover:bg-uk-client/90 border border-uk-client/20",
        admin: "bg-admin text-white hover:bg-admin/90 border border-admin/20",
        supplier: "bg-supplier text-white hover:bg-supplier/90 border border-supplier/20",
        "delivery-manager": "bg-delivery-manager text-white hover:bg-delivery-manager/90 border border-delivery-manager/20",
        "india-ops": "bg-india-ops text-white hover:bg-india-ops/90 border border-india-ops/20",
        "uk-coordinator": "bg-uk-coordinator text-white hover:bg-uk-coordinator/90 border border-uk-coordinator/20",
        success: "bg-success text-white hover:bg-success/90",
        warning: "bg-warning text-white hover:bg-warning/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
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
