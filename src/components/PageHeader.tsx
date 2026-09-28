import type { ReactNode } from "react";
import { SpiralDivider } from "./Spiral";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-20 pb-12 text-center lg:pt-28">
      <div className="eyebrow">{eyebrow}</div>
      <h1 className="mt-6 font-display text-5xl leading-[1.05] text-forest md:text-6xl lg:text-7xl">
        {title}
      </h1>
      {intro ? (
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ink/75 md:text-lg">
          {intro}
        </p>
      ) : null}
      <SpiralDivider className="mt-10 text-gold" />
    </section>
  );
}
