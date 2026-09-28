import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Logo } from "./Logo";

const navLinks = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "MARYA" },
  { to: "/writing", label: "Writing" },
  { to: "/amulets", label: "Amulets" },
  { to: "/work-with-me", label: "Work with Me" },
] as const;

const menuPages = [
  { to: "/", label: "Home", desc: "Where story, spirit & creativity meet", exact: true },
  { to: "/about", label: "Marya", desc: "The person behind Wholly Creative" },
  { to: "/writing", label: "Writing", desc: "Poetry, essays & publications" },
  { to: "/amulets", label: "Amulets", desc: "Handcrafted talismans & sacred objects" },
  { to: "/divination", label: "Divination", desc: "Tarot & oracle for honest questions" },
  { to: "/mentorship", label: "Mentorship", desc: "Mentoring for writers & seekers" },
  { to: "/academic", label: "Academic", desc: "Teaching, CV & scholarly work" },
  { to: "/work-with-me", label: "Work with Me", desc: "Readings, mentorship & offerings" },
  { to: "/contact", label: "Contact", desc: "Begin a conversation" },
] as const;

export function SiteHeader() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (detailsRef.current?.open && !detailsRef.current.contains(e.target as Node)) {
        detailsRef.current.removeAttribute("open");
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") detailsRef.current?.removeAttribute("open");
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const closeMenu = () => detailsRef.current?.removeAttribute("open");

  return (
    <header className="relative z-50 w-full bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 pt-8 pb-6 lg:px-12">
        <Link to="/" className="shrink-0" aria-label="Wholly Creative — home">
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
        <div className="flex shrink-0 items-center gap-3">
          {/* Universal one-click menu — works on every screen size (native <details>, no JS required) */}
          <details ref={detailsRef} className="group relative">
            <summary
              className="inline-flex cursor-pointer list-none items-center gap-2 rounded-full border border-forest/70 px-5 py-2.5 font-sans text-[0.7rem] uppercase tracking-[0.22em] text-forest transition-colors hover:bg-forest hover:text-cream [&::-webkit-details-marker]:hidden"
              aria-label="Open site menu"
            >
              Menu
              <svg
                viewBox="0 0 12 8"
                className="h-2 w-3 transition-transform group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M1 1.5 6 6.5 11 1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <div className="absolute right-0 top-full z-50 mt-3 max-h-[70vh] w-72 overflow-y-auto rounded-sm border border-border bg-background shadow-xl shadow-forest/10 sm:w-80">
              <div className="px-5 pt-4 pb-2">
                <span className="font-sans text-[0.6rem] uppercase tracking-[0.28em] text-gold">
                  Wander the site
                </span>
              </div>
              <nav className="flex flex-col pb-2" aria-label="Site pages">
                {menuPages.map((p) => (
                  <Link
                    key={p.to}
                    to={p.to}
                    onClick={closeMenu}
                    className="flex flex-col gap-0.5 px-5 py-2.5 transition-colors hover:bg-stone/60"
                    activeProps={{ className: "bg-stone/60" }}
                    activeOptions={{ exact: "exact" in p ? p.exact : false }}
                  >
                    <span className="font-sans text-[0.72rem] uppercase tracking-[0.22em] text-forest">
                      {p.label}
                    </span>
                    <span className="text-xs text-ink/60">{p.desc}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </details>
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full border border-forest/70 px-5 py-2.5 font-sans text-[0.7rem] uppercase tracking-[0.22em] text-forest transition-colors hover:bg-forest hover:text-cream md:inline-flex"
          >
            Contact Me
            <svg viewBox="0 0 16 16" className="h-3 w-3 text-gold" aria-hidden="true">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" fill="none" />
              <path
                d="M8 8 m-1 0 a1 1 0 1 1 2 0 a2.5 2.5 0 1 1 -5 0 a4.5 4.5 0 1 1 9 0"
                stroke="currentColor"
                strokeWidth="1.1"
                fill="none"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="mx-auto h-px max-w-7xl bg-border/70" />
    </header>
  );
}
