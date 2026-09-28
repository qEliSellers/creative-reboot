import { Link } from "@tanstack/react-router";
import { SpiralDivider } from "./Spiral";

export function SiteFooter() {
  return (
    <footer className="bg-forest text-cream/90">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <SpiralDivider className="mb-12 text-gold-soft" />
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl tracking-wide text-cream">Wholly Creative</div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              Story, symbol, intention, creation. A practice of writing, divination, and handcraft
              with Marya Summers.
            </p>
          </div>
          <div>
            <div className="eyebrow text-cream/60">Wander</div>
            <div className="mt-5 grid grid-cols-2 gap-x-8">
              {[
                [
                  ["/about", "About"],
                  ["/writing", "Writing"],
                  ["/amulets", "Amulets"],
                ],
                [
                  ["/work-with-me", "Work with Me"],
                  ["/approach", "My Approach"],
                  ["/contact", "Contact"],
                ],
              ].map((col, i) => (
                <ul key={i} className="space-y-3 text-sm">
                  {col.map(([to, label]) => (
                    <li key={to}>
                      <Link
                        to={to}
                        className="text-cream/80 transition-colors hover:text-gold-soft"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div>
            <div className="eyebrow text-cream/60">Stay in touch</div>
            <p className="mt-5 text-sm text-cream/75">
              Occasional letters on writing, ritual, and the slow work of becoming. Write to say
              you'd like them and I'll add you to the list.
            </p>
            <a
              href="mailto:marya@whollycreative.com?subject=Add%20me%20to%20your%20letters"
              className="mt-5 inline-block font-sans text-[0.65rem] uppercase tracking-[0.25em] text-gold-soft hover:text-cream"
            >
              marya@whollycreative.com →
            </a>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-cream/15 pt-6 text-xs text-cream/55 md:flex-row">
          <div>© {new Date().getFullYear()} Marya Summers · Wholly Creative</div>
          <div className="italic">Be rooted. Be imaginative. Be wholly yourself.</div>
        </div>
      </div>
    </footer>
  );
}
