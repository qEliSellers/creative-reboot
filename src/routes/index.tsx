import { createFileRoute, Link } from "@tanstack/react-router";
import heroSpiral from "../assets/hero-spiral-clean.webp";
import darkBand from "../assets/band-spiral-book.webp";
import pathWriting from "../assets/path-writing.webp";
import pathDivination from "../assets/path-divination.webp";
import pathAmulets from "../assets/path-amulets.webp";
import pathMentorship from "../assets/path-mentorship.webp";
import spiralWriting from "../assets/spiral_writing_trans.webp";
import spiralDivination from "../assets/spiral_divination_trans.webp";
import spiralAmulets from "../assets/spiral_amulets_trans.webp";
import spiralCreativity from "../assets/spiral_creativity_trans.webp";
import { PathwayCard } from "../components/PathwayCard";
import { PrimaryLink, OutlineLink } from "../components/Buttons";
import { SpiralDivider } from "../components/Spiral";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wholly Creative — Marya Summers" },
      {
        name: "description",
        content:
          "Where story, spirit, and creativity meet. Writing, divination, amulets, and creative mentorship with Marya Summers.",
      },
      { property: "og:title", content: "Wholly Creative — Marya Summers" },
      { property: "og:description", content: "Be rooted. Be expansive. Be wholly creative." },
    ],
  }),
  component: Home,
});

const pathways = [
  {
    to: "/writing",
    image: pathWriting,
    title: "Writing",
    blurb: "Books, essays, poetry & publications.",
  },
  {
    to: "/divination",
    image: pathDivination,
    title: "CONSULTING & TEACHING",
    blurb: "Tarot, oracle & intuitive guidance. (?)",
  },
  {
    to: "/amulets",
    image: pathAmulets,
    title: "CARD READINGS",
    blurb: "Handcrafted talismans & sacred objects. (?)",
  },
  {
    to: "/mentorship",
    image: pathMentorship,
    title: "SACRED OBJECTS",
    blurb: "Coaching for writers, artists & seekers. (?)",
  },
] as const;

const elements = [
  { name: "Writing", image: spiralWriting, line1: "Ink flows.", line2: "Stories take shape." },
  {
    name: "Divination",
    image: spiralDivination,
    line1: "Intuition moves.",
    line2: "Truth is revealed.",
  },
  { name: "Amulets", image: spiralAmulets, line1: "Intention roots.", line2: "Energy protects." },
  {
    name: "Creativity",
    image: spiralCreativity,
    line1: "Imagination ignites.",
    line2: "Expression transforms.",
  },
];

function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-12 pb-24 lg:grid-cols-[1.05fr_1fr] lg:px-12 lg:pt-20">
        <div>
          <div className="flex items-center gap-3 text-gold">
            <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
              <path d="M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5 Z" fill="currentColor" />
            </svg>
            <div className="eyebrow">Where story, spirit, and creativity meet.</div>
          </div>
          <h1 className="mt-8 font-display text-4xl leading-[1.05] text-forest md:text-5xl lg:text-[3.625rem]">
            Be rooted.
            <br />
            Be expansive.
            <br />
            Be <em className="font-display italic text-teal">wholly</em> creative.
          </h1>
          <SpiralDivider className="my-8 justify-start" />
          <p className="max-w-md text-base leading-[1.85] text-ink/75">
            I help creative souls reconnect with their inner wisdom, tell their stories, and bring
            meaningful ideas to life through writing, intuitive guidance, handcrafted amulets, and
            creative mentorship.
          </p>
          <div className="mt-10">
            <PrimaryLink to="/about">Explore my work</PrimaryLink>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroSpiral}
            alt="A spiral of vines, blossoms, and teal water with a golden thread"
            width={1024}
            height={1024}
            className="w-full"
          />
        </div>
      </section>

      <section className="bg-stone/50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <div className="eyebrow">Four pathways. One purpose.</div>
            <SpiralDivider className="mt-5" />
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pathways.map((p) => (
              <PathwayCard key={p.to} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="grid items-stretch overflow-hidden md:grid-cols-2">
        <div className="bg-forest px-8 py-20 text-cream md:px-16 lg:py-28">
          <div className="mx-auto max-w-md">
            <div className="eyebrow text-cream/80">Story. Symbol. Intention. Creation.</div>
            <SpiralDivider className="my-7 justify-start text-gold-soft" />
            <h2 className="font-display text-4xl leading-tight text-cream md:text-5xl">
              Different expressions.
              <br />
              The same dynamic.
              <br />
              <em className="italic text-gold-soft">Truth & transformation.</em>
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-cream/75">
              Whatever path you choose — the page, the cards, the stone, the conversation — you are
              met by the same spiral. It is the shape of becoming.
            </p>
            <div className="mt-10">
              <OutlineLink to="/about">Discover the whole</OutlineLink>
            </div>
          </div>
        </div>
        <div
          className="min-h-[28rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${darkBand})` }}
          aria-hidden
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="flex items-center gap-6">
          <div className="eyebrow whitespace-nowrap">The spiral in everything</div>
          <div className="h-px flex-1 bg-gold/60" />
        </div>
        <div className="mt-14 grid grid-cols-2 gap-10 text-center sm:grid-cols-4">
          {elements.map((el) => (
            <div key={el.name} className="flex flex-col items-center">
              <img
                src={el.image}
                alt={`${el.name} spiral motif`}
                loading="lazy"
                className="aspect-square w-full max-w-[180px] object-contain"
              />
              <div className="mt-6 font-display text-xs uppercase tracking-[0.22em] text-forest">
                {el.name}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-ink/70 md:text-sm">
                {el.line1}
                <br />
                {el.line2}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 text-center lg:px-12">
        <div className="eyebrow">Revelation changes everything</div>
        <SpiralDivider className="mt-5" />
        <p className="mt-12 font-display text-2xl italic leading-snug text-teal md:text-3xl">
          Sometimes an answer is missing.
          <br />
          Sometimes a pattern is.
        </p>
        <p className="mx-auto mt-8 max-w-xl text-base leading-[1.85] text-ink/75">
          Whether you're navigating a creative project, a life transition, or a question that
          refuses to resolve itself, revelation changes not only what you see—but what becomes
          possible.
        </p>
      </section>

      <section className="bg-stone/50 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <h2 className="font-display text-4xl leading-tight text-forest md:text-5xl">
            The Wholly Creative Spiral
          </h2>
          <SpiralDivider className="mt-6" />
          <p className="mt-12 text-base leading-[1.85] text-ink/75 md:text-lg">
            Every revelation changes the way we create.
            <br />
            Every act of creation reveals something new.
            <br />
            <em className="font-display text-xl italic text-gold md:text-2xl">
              The spiral continues.
            </em>
          </p>
          <Link
            to="/approach"
            className="mt-10 inline-flex items-center gap-2 font-sans text-[0.72rem] uppercase tracking-[0.24em] text-forest transition-colors hover:text-gold"
          >
            Learn about the Wholly Creative Method
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-forest py-24 text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <div className="eyebrow text-cream/80">A closing invitation</div>
          <SpiralDivider className="mt-5 text-gold-soft" />
          <p className="mt-12 text-base leading-[1.85] text-cream/85 md:text-lg">
            The answers you seek may not be somewhere else.
            <br />
            They may already be waiting beneath the surface of what you know.
          </p>
          <p className="mt-8 font-display text-2xl italic text-gold-soft md:text-3xl">
            Let's uncover them together.
          </p>
          <div className="mt-10">
            <OutlineLink to="/contact">Schedule a Session</OutlineLink>
          </div>
        </div>
      </section>
    </>
  );
}
