import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "../../lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "gradient" | "cyber" | "neon" | "royal"
  size?: "default" | "sm" | "lg"
}

const gradientStyles = {
  gradient: "bg-gradient-to-r from-[#2962FF] via-[#0091EA] to-[#00E5FF] hover:opacity-90 hover:scale-[1.02] shadow-lg",
  cyber: "bg-gradient-to-r from-[#1E3A8A] via-[#2962FF] to-[#00E5FF] shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_40px_rgba(0,229,255,0.5)] hover:scale-[1.03] transition-all duration-300",
  neon: "bg-gradient-to-r from-[#7928CA] via-[#FF0080] to-[#FF4D4D] shadow-[0_0_30px_rgba(255,0,128,0.3)] hover:shadow-[0_0_40px_rgba(255,0,128,0.5)] hover:scale-[1.03] transition-all duration-300",
  royal: "bg-gradient-to-r from-[#059669] via-[#0D9488] to-[#0891B2] shadow-[0_0_30px_rgba(8,145,178,0.3)] hover:shadow-[0_0_40px_rgba(8,145,178,0.5)] hover:scale-[1.03] transition-all duration-300"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",
            "border border-input hover:bg-accent hover:text-accent-foreground": variant === "outline",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            [gradientStyles.gradient]: variant === "gradient",
            [gradientStyles.cyber]: variant === "cyber",
            [gradientStyles.neon]: variant === "neon",
            [gradientStyles.royal]: variant === "royal",
            "h-10 px-4 py-2": size === "default",
            "h-9 px-3": size === "sm",
            "h-11 px-8": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {props.children}
        <div className="absolute inset-0 w-[200%] translate-x-[-100%] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shine_0.75s_ease-in-out]" />
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
