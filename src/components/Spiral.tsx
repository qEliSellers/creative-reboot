import type { SVGProps } from "react";

export function Spiral({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} {...props} aria-hidden="true">
      <path
        d="M32 32 m-2 0 a2 2 0 1 1 4 0 a4 4 0 1 1 -8 0 a6 6 0 1 1 12 0 a9 9 0 1 1 -18 0 a13 13 0 1 1 26 0 a18 18 0 1 1 -36 0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function SpiralDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-gold ${className}`}>
      <span className="h-px w-12 bg-current opacity-50" />
      <Spiral className="h-4 w-4" />
      <span className="h-px w-12 bg-current opacity-50" />
    </div>
  );
}
