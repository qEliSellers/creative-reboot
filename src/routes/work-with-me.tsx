import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHeader } from "../components/PageHeader";
import { SpiralDivider } from "../components/Spiral";
import { PrimaryLink, GhostButton } from "../components/Buttons";
import pathDivination from "../assets/path-divination.webp";
import pathMentorship from "../assets/path-mentorship.webp";

export const Route = createFileRoute("/work-with-me")({
  head: () => ({
    meta: [
      { title: "Work With Me — Wholly Creative" },
      {
        name: "description",
        content: "Divination sessions and creative mentorship with Marya Summers.",
      },
      { property: "og:title", content: "Work With Me — Marya Summers" },
      {
        property: "og:description",
        content:
          "Tarot readings and long-form mentorship for writers, makers, and people becoming.",
      },
      { property: "og:image", content: pathMentorship },
    ],
  }),
  component: WorkWithMePage,
});

const divinationOfferings = [
  {
    name: "The Single Question",
    duration: "45 minutes",
    price: "$95",
    desc: "Bring one honest question. We sit with it for the length of a small ritual and the cards answer in their own slow language.",
  },
  {
    name: "The Crossroads Reading",
    duration: "75 minutes",
    price: "$155",
    desc: "For decisions with weight. A wider spread, room for two or three threads, and a written summary you can return to.",
  },
  {
    name: "Year-Ahead Spread",
    duration: "90 minutes",
    price: "$210",
    desc: "Twelve cards, twelve months, one long conversation. Best taken at the turn of a season or year.",
  },
];

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

const testimonials: { quote: string; name: string; role: ReactNode }[] = [
  {
    quote:
      "Her many years teaching writing as a college instructor combined with her experience as a journalist and creative writer are apparent in her intelligent and creative approaches to teaching.",
    name: "Kara Walker Tomé",
    role: "Education Director, Palm Beach Institute of Contemporary Art",
  },
  {
    quote:
      "If you combine the Socratic method with charisma and generosity, you get Professor Summers' teaching style!",
    name: "Eddie Vega",
    role: (
      <>
        Author of <em>Awake Now, Sailor!</em>
      </>
    ),
  },
  {
    quote:
      "If you're a novice, professional, or aspiring writer you will be inspired. If you have a connection to the earth (or want one), you will be inspired. Marya craftily and purposely leads you through a journey that subtly makes you want to write and to write better.",
    name: "Gretta Jacobs",
    role: "Writer & Yogi",
  },
  {
    quote:
      "You provided great encouragement and support in helping me connect to my writing. You met me where I was at and helped me see that I was doing okay. Now I write more and let myself play more. I feel like I am becoming the writer I want to be.",
    name: "Crystal Trowbridge",
    role: "Writer",
  },
  {
    quote:
      "For several years, I believed my butt was my most important writing tool — I believed if it was glued to my chair, and I beat myself hard enough, I could get my novel written. Then, Marya taught me how to live inside the triangle of magic, nature, and writing. I now harvest this energy from within, rather than wait for it, or tirelessly toil without it. Writing has become magical again.",
    name: "Paula Marshall",
    role: "Writer",
  },
  {
    quote:
      "Marya is a scholar, a deep thinker, and a free spirit. I have mad respect for her fresh ideas. You'll ponder, you'll write, and you'll go outside and experience nature. She'll poke you spiritually and mentally causing you to think and re-think your beliefs; I love that!",
    name: "Jeannine Smart",
    role: "Creative Entrepreneur",
  },
  {
    quote:
      "Marya and her courses and community are simply fabulous. She really knows her stuff, and how to share it in a personable and professional manner. She provides a safe space for creativity, exploration and learning. I learn something new every time I hear anything from Marya.",
    name: "Kathie Stamps",
    role: "Writer",
  },
  {
    quote:
      "Marya is so smart and funny! She helped guide and encourage my writing along into new spaces, which has been quite a journey!",
    name: "Devin Galaudet",
    role: (
      <>
        Author of <em>10,000 Miles with My Dead Father's Ashes</em> & Editor of
        InTheKnowTraveler.com
      </>
    ),
  },
  {
    quote:
      "Marya is a writing guru. The prompts and strategies she offers inspire me to engage fully with my writing in innovative ways that break through any blocks. She helped me get further into my novel.",
    name: "Marisa Whitney",
    role: "Writer & Educator",
  },
  {
    quote:
      "I was hoping to gain insight on the next round of novel revisions. I felt like it was almost there but something was missing. And I didn't know what it was. I hoped the course would help me figure it out. I did figure it out, and so much more! This course gave me the tools to create a relationship with my creativity and writing. I have been completely transformed as a writer.",
    name: "Lisa Martin",
    role: "Singer / Writer / Comedian",
  },
];

function WorkWithMePage() {
  return (
    <>
      <PageHeader
        eyebrow="Work with me"
        title={
          <>
            Two doorways
            <br />
            <em className="italic text-teal">into the same practice.</em>
          </>
        }
        intro="Whether you come for a reading or for the long work of mentorship, the room is the same: quiet, attentive, and committed to what is actually here."
      />

      <section className="mx-auto max-w-6xl px-6 pb-12 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            to="/divination"
            className="group flex flex-col overflow-hidden rounded-sm bg-card ring-1 ring-border/70 transition hover:ring-gold"
          >
            <img
              src={pathDivination}
              alt="Tarot cards"
              loading="lazy"
              className="h-56 w-full object-cover"
            />
            <div className="p-8">
              <div className="eyebrow text-gold">Divination</div>
              <h2 className="mt-3 font-display text-3xl text-forest">A grounded reading</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Tarot and oracle for honest questions. 45 to 90 minutes, by video or in person.
              </p>
            </div>
          </Link>
          <Link
            to="/mentorship"
            className="group flex flex-col overflow-hidden rounded-sm bg-card ring-1 ring-border/70 transition hover:ring-gold"
          >
            <img
              src={pathMentorship}
              alt="A writing desk"
              loading="lazy"
              className="h-56 w-full object-cover"
            />
            <div className="p-8">
              <div className="eyebrow text-gold">Mentorship</div>
              <h2 className="mt-3 font-display text-3xl text-forest">
                Good company for the long work
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Single sessions, season-long containers, and a small circle for writers, makers, and
                seekers.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
        <div className="eyebrow text-gold">Divination sessions</div>
        <SpiralDivider className="mt-4 mb-12 justify-start" />
        <div className="grid gap-6 md:grid-cols-3">
          {divinationOfferings.map((o) => (
            <article
              key={o.name}
              className="flex flex-col rounded-sm bg-card p-8 ring-1 ring-border/70"
            >
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

      <section className="bg-forest py-24 text-cream">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="eyebrow text-gold-soft">Testimonials</div>
          <SpiralDivider className="mt-4 mb-10 justify-start" />
          <h2 className="max-w-3xl font-display text-4xl leading-tight text-cream md:text-5xl">
            Kind words from writers, seekers &amp; fellow travelers.
          </h2>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col border-l border-cream/15 pl-6">
                <blockquote className="flex-1 text-sm leading-relaxed text-cream/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5">
                  <span className="font-sans text-[0.7rem] uppercase tracking-[0.22em] text-gold-soft">
                    — {t.name}
                  </span>
                  <span className="mt-1 block text-xs italic text-cream/65">{t.role}</span>
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
