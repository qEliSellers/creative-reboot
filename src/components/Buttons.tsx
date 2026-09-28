import { Link } from "@tanstack/react-router";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const base = "inline-flex items-center rounded-full font-sans uppercase transition-all";
const sizeMd = "gap-3 px-7 py-3.5 text-[0.72rem] tracking-[0.24em]";
const sizeSm = "gap-2 px-5 py-2.5 text-[0.65rem] tracking-[0.22em]";

function MarkSpiral() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 opacity-80" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.1" fill="none" />
      <path
        d="M8 8 m-1 0 a1 1 0 1 1 2 0 a2.5 2.5 0 1 1 -5 0 a4.5 4.5 0 1 1 9 0"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

type LinkAnyProps = React.ComponentProps<typeof Link>;

export function PrimaryLink({ children, ...props }: LinkAnyProps & { children: ReactNode }) {
  return (
    <Link {...props} className={`${base} ${sizeMd} bg-forest text-cream hover:bg-forest-deep`}>
      {children}
      <MarkSpiral />
    </Link>
  );
}

export function OutlineLink({ children, ...props }: LinkAnyProps & { children: ReactNode }) {
  return (
    <Link
      {...props}
      className={`${base} ${sizeMd} border border-cream/70 text-cream hover:bg-cream hover:text-forest`}
    >
      {children}
      <MarkSpiral />
    </Link>
  );
}

export function GhostButton({
  children,
  size = "md",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode; size?: "sm" | "md" }) {
  const sizing = size === "sm" ? sizeSm : sizeMd;
  return (
    <button
      {...props}
      className={`${base} ${sizing} border border-forest/60 text-forest hover:bg-forest hover:text-cream`}
    >
      {children}
      <MarkSpiral />
    </button>
  );
}
