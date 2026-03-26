import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-borderGlass bg-glass/80 p-6 shadow-glass backdrop-blur-xl transition-all duration-300 hover:border-neonCyan/40 hover:bg-white/[0.08]",
        className
      )}
      {...props}
    />
  );
}
