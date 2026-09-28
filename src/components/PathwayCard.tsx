import { Link } from "@tanstack/react-router";
import { Spiral } from "./Spiral";

export function PathwayCard({
  to,
  image,
  title,
  blurb,
}: {
  to: string;
  image: string;
  title: string;
  blurb: string;
}) {
  return (
    <Link
      to={to}
      className="group flex flex-col rounded-sm bg-card p-5 shadow-[0_1px_0_rgba(151,121,60,0.15)] ring-1 ring-border/60 transition-all hover:shadow-md hover:ring-gold/40"
    >
      <div className="aspect-[4/5] overflow-hidden rounded-sm bg-stone">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-6 flex items-center justify-center text-gold">
        <Spiral className="h-6 w-6" />
      </div>
      <h3 className="mt-3 text-center font-display text-xl uppercase tracking-[0.18em] text-forest">
        {title}
      </h3>
      <p className="mx-auto mt-3 max-w-[22ch] text-center text-sm leading-relaxed text-ink/70">
        {blurb}
      </p>
      <div className="mt-6 flex items-center justify-center gap-2 font-sans text-[0.65rem] uppercase tracking-[0.28em] text-forest/80 transition-colors group-hover:text-gold">
        Learn more <span aria-hidden>→</span>
      </div>
    </Link>
  );
}
