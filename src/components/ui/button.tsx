import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neonCyan/60",
        variant === "primary" &&
          "bg-gradient-to-r from-neonPurple via-neonBlue to-neonCyan text-white shadow-neon hover:scale-[1.02] hover:shadow-[0_0_55px_rgba(59,130,246,.5)]",
        variant === "secondary" &&
          "border border-white/20 bg-white/5 text-white hover:border-neonCyan/50 hover:bg-white/10",
        variant === "ghost" && "text-white/80 hover:text-white",
        className
      )}
      {...props}
    />
  );
}
