import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { SpiralDivider } from "../components/Spiral";
import { PrimaryLink, GhostButton } from "../components/Buttons";
import pathDivination from "../assets/path-divination.jpg";
import pathMentorship from "../assets/path-mentorship.jpg";

export const Route = createFileRoute("/work-with-me")({
  head: () => ({
    meta: [
      { title: "Work With Me — Wholly Creative" },
      { name: "description", content: "Divination sessions and creative mentorship with Marya Summers." },
      { property: "og:title", content: "Work With Me — Marya Summers" },
      { property: "og:description", content: "Tarot readings and long-form mentorship for writers, makers, and people becoming." },
      { property: "og:image", content: pathMentorship },
    ],
  }),
  component: WorkWithMePage,
});

const divinationOfferings = [
  { name: "The Single Question", duration: "45 minutes", price: "$95",
    desc: "Bring one honest question. We sit with it for the length of a small ritual and the cards answer in their own slow language." },
  { name: "The Crossroads Reading", duration: "75 minutes", price: "$155",
    desc: "For decisions with weight. A wider spread, room for two or three threads, and a written summary you can return to." },
  { name: "Year-Ahead Spread", duration: "90 minutes", price: "$210",
    desc: "Twelve cards, twelve months, one long conversation. Best taken at the turn of a season or year." },
];

const tiers = [
  {
    name: "Single Session", cadence: "90 minutes", price: "$195",
    for: "For a specific knot: a chapter that won't open, a decision that won't quiet, a project you can't quite name.",
    includes: ["A pre-call note from you", "90 minutes together", "A short written follow-up"],
    featured: false,
  },
  {
    name: "Season Container", cadence: "Three months", price: "$1,650",
    for: "For sustained work on a manuscript, a body of work, or a creative life that needs steady company.",
    includes: ["Six sessions, paced as you need", "Light reading & response between calls", "A closing ritual"],
    featured: true,
  },
  {
    name: "The Spiral Circle", cadence: "Group · 6 months", price: "$2,400",
    for: "A small circle of six. For makers who do their best work in good company.",
    includes: ["Monthly group calls", "One private session per quarter", "A printed companion"],
    featured: false,
  },
];

function WorkWithMePage() {
  return (
    <>
      <PageHeader
        eyebrow="Work with me"
        title={<>Two doorways<br /><em className="italic text-teal">into the same practice.</em></>}
        intro="Whether you come for a reading or for the long work of mentorship, the room is the same: quiet, attentive, and committed to what is actually here."
      />

      <section className="mx-auto max-w-6xl px-6 pb-12 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2">
          <Link to="/divination" className="group flex flex-col overflow-hidden rounded-sm bg-card ring-1 ring-border/70 transition hover:ring-gold">
            <img src={pathDivination} alt="Tarot cards" loading="lazy" className="h-56 w-full object-cover" />
            <div className="p-8">
              <div className="eyebrow text-gold">Divination</div>
              <h2 className="mt-3 font-display text-3xl text-forest">A grounded reading</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">Tarot and oracle for honest questions. 45 to 90 minutes, by video or in person.</p>
            </div>
          </Link>
          <Link to="/mentorship" className="group flex flex-col overflow-hidden rounded-sm bg-card ring-1 ring-border/70 transition hover:ring-gold">
            <img src={pathMentorship} alt="A writing desk" loading="lazy" className="h-56 w-full object-cover" />
            <div className="p-8">
              <div className="eyebrow text-gold">Mentorship</div>
              <h2 className="mt-3 font-display text-3xl text-forest">Good company for the long work</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">Single sessions, season-long containers, and a small circle for writers, makers, and seekers.</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
        <div className="eyebrow text-gold">Divination sessions</div>
        <SpiralDivider className="mt-4 mb-12 justify-start" />
        <div className="grid gap-6 md:grid-cols-3">
          {divinationOfferings.map((o) => (
            <article key={o.name} className="flex flex-col rounded-sm bg-card p-8 ring-1 ring-border/70">
              <div className="eyebrow text-gold">{o.duration}</div>
              <h3 className="mt-4 font-display text-2xl text-forest">{o.name}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">{o.desc}</p>
              <div className="mt-10 flex items-center justify-between gap-6 border-t border-border pt-8">
                <span className="font-display text-2xl text-forest">{o.price}</span>
                <GhostButton size="sm">Request a session</GhostButton>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-stone/40 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="eyebrow text-gold">Creative mentorship</div>
          <SpiralDivider className="mt-4 mb-12 justify-start" />
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((t) => (
              <article
                key={t.name}
                className={`flex flex-col rounded-sm p-8 ring-1 ${t.featured ? "bg-forest text-cream ring-forest" : "bg-card text-ink ring-border/70"}`}
              >
                <div className={`eyebrow ${t.featured ? "text-gold-soft" : "text-gold"}`}>{t.cadence}</div>
                <h3 className={`mt-4 font-display text-2xl ${t.featured ? "text-cream" : "text-forest"}`}>{t.name}</h3>
                <div className={`mt-2 font-display text-3xl ${t.featured ? "text-gold-soft" : "text-forest"}`}>{t.price}</div>
                <p className={`mt-4 text-sm leading-relaxed ${t.featured ? "text-cream/85" : "text-ink/75"}`}>{t.for}</p>
                <ul className={`mt-6 space-y-2 text-sm ${t.featured ? "text-cream/85" : "text-ink/75"}`}>
                  {t.includes.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className={t.featured ? "text-gold-soft" : "text-gold"}>·</span>
                      {i}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  {t.featured ? (
                    <button className="inline-flex items-center gap-3 rounded-full border border-cream/70 px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.24em] text-cream hover:bg-cream hover:text-forest">
                      Inquire →
                    </button>
                  ) : (
                    <GhostButton>Inquire</GhostButton>
                  )}
                </div>
              </article>
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
