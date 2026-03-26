import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-white/90 backdrop-blur-xl",
        className
      )}
      {...props}
    />
  );
}
