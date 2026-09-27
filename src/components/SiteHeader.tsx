import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Logo";

const navLinks = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "MARYA" },
  { to: "/writing", label: "Writing" },
  { to: "/amulets", label: "Amulets" },
  { to: "/work-with-me", label: "Work with Me" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 pt-8 pb-6 lg:px-12">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-sans text-[0.72rem] uppercase tracking-[0.22em] text-forest/80 transition-colors hover:text-gold"
              activeProps={{ className: "text-forest border-b border-gold pb-1" }}
              activeOptions={{ exact: "exact" in l ? l.exact : false }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full border border-forest/70 px-5 py-2.5 font-sans text-[0.7rem] uppercase tracking-[0.22em] text-forest transition-colors hover:bg-forest hover:text-cream md:inline-flex"
        >
          Contact Me
          <svg viewBox="0 0 16 16" className="h-3 w-3 text-gold" aria-hidden="true">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <path d="M8 8 m-1 0 a1 1 0 1 1 2 0 a2.5 2.5 0 1 1 -5 0 a4.5 4.5 0 1 1 9 0" stroke="currentColor" strokeWidth="1.1" fill="none" />
          </svg>
        </Link>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest/40 text-forest lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border/70 bg-background/95">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4 lg:px-12">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 font-sans text-[0.75rem] uppercase tracking-[0.22em] text-forest/80 hover:text-gold"
                activeProps={{ className: "text-forest" }}
                activeOptions={{ exact: "exact" in l ? l.exact : false }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center gap-2 self-start rounded-full border border-forest/70 px-5 py-2.5 font-sans text-[0.7rem] uppercase tracking-[0.22em] text-forest hover:bg-forest hover:text-cream"
            >
              Contact Me
            </Link>
          </div>
        </nav>
      )}
      <div className="mx-auto h-px max-w-7xl bg-border/70" />
    </header>
  );
}