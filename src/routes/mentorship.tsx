import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { SpiralDivider } from "../components/Spiral";
import { PrimaryLink, GhostButton } from "../components/Buttons";
import { BackLink } from "../components/BackLink";
import pathMentorship from "../assets/path-mentorship.webp";

export const Route = createFileRoute("/mentorship")({
  head: () => ({
    meta: [
      { title: "Creative Mentorship — Wholly Creative" },
      {
        name: "description",
        content:
          "Long-form mentorship for writers, makers, and people in the middle of a meaningful project.",
      },
      { property: "og:title", content: "Creative Mentorship — Marya Summers" },
      {
        property: "og:description",
        content: "Long-form mentorship for writers, makers, and people becoming.",
      },
      { property: "og:image", content: pathMentorship },
    ],
  }),
  component: MentorshipPage,
});

const tiers = [
  {
    name: "Single Session",
    cadence: "90 minutes",
    price: "$195",
    for: "For a specific knot: a chapter that won't open, a decision that won't quiet, a project you can't quite name.",
    includes: ["A pre-call note from you", "90 minutes together", "A short written follow-up"],
    featured: false,
  },
  {
    name: "Season Container",
    cadence: "Three months",
    price: "$1,650",
    for: "For sustained work on a manuscript, a body of work, or a creative life that needs steady company.",
    includes: [
      "Six sessions, paced as you need",
      "Light reading & response between calls",
      "A closing ritual",
    ],
    featured: true,
  },
  {
    name: "The Spiral Circle",
    cadence: "Group · 6 months",
    price: "$2,400",
    for: "A small circle of six. For makers who do their best work in good company.",
    includes: ["Monthly group calls", "One private session per quarter", "A printed companion"],
    featured: false,
  },
];

const quotes: Array<[string, string]> = [
  [
    "Marya helped me hear the book I was actually writing, not the one I thought I was supposed to write.",
    "— S.M., novelist",
  ],
  [
    "The work was practical, literary, and surprisingly tender. I left every call with one true sentence.",
    "— J.K., essayist",
  ],
  [
    "She holds a room the way good editors hold a manuscript — with respect and with teeth.",
    "— A.R., visual artist",
  ],
];

function MentorshipPage() {
  return (
    <>
      <BackLink to="/work-with-me" label="Back to Work With Me" />
      <PageHeader
        eyebrow="Creative mentorship"
        title={
          <>
            Good company for
            <br />
            <em className="italic text-teal">the long, real work.</em>
          </>
        }
        intro="I mentor writers, artists, and makers on the projects they cannot quite do alone. The work is editorial, contemplative, and rigorous. It is not a course. It is a relationship."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`flex flex-col rounded-sm p-8 ring-1 ${t.featured ? "bg-forest text-cream ring-forest" : "bg-card text-ink ring-border/70"}`}
            >
              <div className={`eyebrow ${t.featured ? "text-gold-soft" : "text-gold"}`}>
                {t.cadence}
              </div>
              <h3
                className={`mt-4 font-display text-2xl ${t.featured ? "text-cream" : "text-forest"}`}
              >
                {t.name}
              </h3>
              <div
                className={`mt-2 font-display text-3xl ${t.featured ? "text-gold-soft" : "text-forest"}`}
              >
                {t.price}
              </div>
              <p
                className={`mt-4 text-sm leading-relaxed ${t.featured ? "text-cream/85" : "text-ink/75"}`}
              >
                {t.for}
              </p>
              <ul
                className={`mt-6 space-y-2 text-sm ${t.featured ? "text-cream/85" : "text-ink/75"}`}
              >
                {t.includes.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className={t.featured ? "text-gold-soft" : "text-gold"}>·</span>
                    {i}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                {t.featured ? (
                  <button className="inline-flex items-center gap-2 rounded-full border border-cream/70 px-5 py-2.5 text-[0.65rem] uppercase tracking-[0.22em] text-cream hover:bg-cream hover:text-forest">
                    Inquire →
                  </button>
                ) : (
                  <GhostButton size="sm">Inquire</GhostButton>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid items-stretch overflow-hidden md:grid-cols-2">
        <div
          className="min-h-[24rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${pathMentorship})` }}
          aria-hidden
        />
        <div className="bg-stone/60 px-8 py-20 md:px-16">
          <div className="eyebrow">In their words</div>
          <SpiralDivider className="mt-4 mb-10 justify-start" />
          <div className="space-y-10">
            {quotes.map(([q, who]) => (
              <figure key={who}>
                <blockquote className="font-display text-xl italic leading-snug text-forest md:text-2xl">
                  "{q}"
                </blockquote>
                <figcaption className="mt-3 text-xs uppercase tracking-[0.22em] text-ink/60">
                  {who}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-12">
        <p className="font-display text-3xl italic leading-snug text-forest md:text-4xl">
          If you're at a turning, write to me.
          <br />
          We'll see if we're a fit.
        </p>
        <div className="mt-10 flex justify-center">
          <PrimaryLink to="/contact">Begin a conversation</PrimaryLink>
        </div>
      </section>
    </>
  );
}
