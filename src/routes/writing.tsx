import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHeader } from "../components/PageHeader";
import { SpiralDivider } from "../components/Spiral";
import { PrimaryLink } from "../components/Buttons";
import writingMyselfCover from "../assets/writing-myself.jpg";
import aHardClimbCover from "../assets/a-hard-climb.webp";
import fivePointsJournal from "../assets/five-points-journal.webp";
import braidedWay from "../assets/braided-way.webp";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing & Publications — Wholly Creative" },
      {
        name: "description",
        content:
          "Poetry, essays, and the forthcoming collection Darkscapes with Indigenous Light, by Marya Summers.",
      },
      { property: "og:title", content: "Writing & Publications — Marya Summers" },
      {
        property: "og:description",
        content:
          "Poetry, essays, and the forthcoming collection Darkscapes with Indigenous Light, by Marya Summers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: WritingPage,
});

type Pub = {
  title: string;
  /** Subheadline shown under the title on cover cards (and inside typographic cards). */
  sub?: string;
  kind: string;
  note: string;
  /** External link. Entries without one (print-only / forthcoming) render no link. */
  href?: string;
  cover?: string;
  /** Human-readable publication credit shown on the card, e.g. "Pensive, Fall 2024". */
  dateLabel?: string;
};

/**
 * POETRY — order below is Marya's confirmed sequence (newest first), curated by
 * hand. Do NOT re-sort by date: republications and forthcoming pieces
 * intentionally sit where she placed them.
 */
const poetry: Pub[] = [
  {
    title: "Portrait",
    sub: "Forthcoming",
    kind: "Poem",
    note: "A new poem forthcoming in Artemis Journal's 50th Anniversary Issue.",
    dateLabel: "Artemis Journal, 50th Anniversary Issue, October 2026",
  },
  {
    title: "August Complex with Vehicular Homelessness",
    sub: "Wildfire and homelessness converge",
    kind: "Poem",
    note: "Published in Five Points: A Journal of Literature & Art.",
    href: "https://storage.googleapis.com/wzukusers/user-36551884/documents/c6ceffa551e340c783de0abfb4bb39da/August%20Complex%20with%20Vehicular%20Homelessness%20Five%20Points%20Journal.pdf",
    cover: fivePointsJournal,
    dateLabel: "Five Points, Spring 2026",
  },
  {
    title: "Shooting from the Lip",
    sub: "Words fly like bullets",
    kind: "Poem",
    note: "Published in Wayfarer Magazine.",
    href: "https://www.wayfarermagazine.com/p/shooting-from-the-lip",
    dateLabel: "Wayfarer Magazine, February 2026",
  },
  {
    title: "For Once In My Life",
    sub: "How far will you go to find what you've been looking for?",
    kind: "Poem",
    note: "Published in The Fourth River.",
    href: "https://storage.googleapis.com/wzukusers/user-36551884/documents/3118406443384015b1ffd3bb7b0c2999/IMG_9432.jpg",
    cover:
      "https://storage.googleapis.com/production-hostgator-v1-0-5/795/1999795/4dGRgZn1/666bfbfb06be464f96804b415053cdb1",
    dateLabel: "The Fourth River, 2025",
  },
  {
    title: "On the Dunes of Manchester Beach",
    kind: "Poem",
    note: "Published in Pensive: A Global Journal of Spirituality & the Arts.",
    href: "https://www.calameo.com/read/0064651467b168bf645fd",
    cover:
      "https://storage.googleapis.com/production-hostgator-v1-0-5/795/1999795/4dGRgZn1/0c61f68190a04a33a4c086c5b86df1e7",
    dateLabel: "Pensive, Spring 2025",
  },
  {
    title: "The Congregation",
    kind: "Poem",
    note: "Published in Pensive: A Global Journal of Spirituality & the Arts.",
    href: "https://storage.googleapis.com/wzukusers/user-36551884/documents/b3ca62f61f674ed79ef70d1c4e0aa8da/Screen%20Shot%202025-08-16%20at%202.02.24%20PM.png",
    cover:
      "https://storage.googleapis.com/production-hostgator-v1-0-5/795/1999795/4dGRgZn1/a44121effcbc4771a2b5c9a86cd49ac3",
    dateLabel: "Pensive, Fall 2024",
  },
  {
    title: "On this Post-Election Shore",
    sub: "Hope when history takes a dark turn",
    kind: "Poem",
    note: "Published in Dissident Voice, November 2024.",
    href: "https://thedissidentvoice.org/2024/11/on-this-post-election-shore-2024/",
    cover:
      "https://storage.googleapis.com/production-hostgator-v1-0-5/795/1999795/4dGRgZn1/bcd304dfcc51464f95b755ea6f3ec234",
    dateLabel: "Dissident Voice, November 2024",
  },
  {
    title: "A Begrudging Nomad",
    kind: "Poem",
    note: "Published in Rise Up Review.",
    href: "https://riseupreview.org/marya-summers",
    cover:
      "https://storage.googleapis.com/production-hostgator-v1-0-5/795/1999795/4dGRgZn1/df1a654e3304495fb9a08e4498fb5f3f",
    dateLabel: "Rise Up Review, Summer/Autumn 2024",
  },
  {
    title: "Love Poem for the Abandoned Child",
    kind: "Poem",
    note: "Published in Pleiades.",
    href: "https://storage.googleapis.com/wzukusers/user-36551884/documents/d00eb3a26e634a82b2bc44c6f1206db5/Love%20Poem%20for%20abandoned%20Child.pdf",
    cover:
      "https://storage.googleapis.com/production-hostgator-v1-0-8/048/1607048/Jn0mfjm8/c55231d0e5da4d43a0ed5857257e9188",
    dateLabel: "Pleiades, Spring 2024",
  },
  {
    title: "The Honest Word",
    sub: "3rd Place National Award, Social Critique",
    kind: "Poem",
    note: "Recognized by the National Federation of State Poetry Societies.",
    href: "https://storage.googleapis.com/wzukusers/user-36551884/documents/5a1734c2c75b4a498f7ec7e5b6281297/The%20Honest%20Word.pdf",
    cover:
      "https://storage.googleapis.com/production-hostgator-v1-0-8/048/1607048/Jn0mfjm8/e102ede92e964291ab00b9caaf65f048",
    dateLabel: "Encore: Prize Poems, 2023",
  },
  {
    title: "In This Landscape",
    kind: "Poem",
    note: "Published in the anthology All the Lives We Ever Lived.",
    dateLabel: "All the Lives We Ever Lived, 2023",
  },
  {
    title: "A Hard Climb",
    kind: "Poem",
    note: "Published in Kaleidoscope 87, pages 31–32.",
    href: "https://www.udsakron.org/wp-content/uploads/K87-FINAL.pdf",
    cover: aHardClimbCover,
    dateLabel: "Kaleidoscope 87, Summer/Fall 2023",
  },
  {
    title: "Where Wind Belongs",
    sub: "An embodied meditation on being and belonging",
    kind: "Poem",
    note: "Published in Tiferet.",
    href: "https://storage.googleapis.com/wzukusers/user-36551884/documents/06674d40ba2c453888e14d53a644ff7c/Where%20Wind%20Belongs%20Tiferet%20Fall%202017-2.pdf",
    cover:
      "https://storage.googleapis.com/production-hostgator-v1-0-8/048/1607048/Jn0mfjm8/b9c512a8f7d149e9914e7cc33baf8d7f",
    dateLabel: "Tiferet, Fall 2017",
  },
  {
    title: "Verbal Pointillism with Circular Line",
    kind: "Poem",
    note: "Originally published in Closer Magazine, 2002; republished in Ekphrastic Poetry, 2023.",
    cover:
      "https://storage.googleapis.com/production-hostgator-v1-0-8/048/1607048/Jn0mfjm8/e6efa9755b924e23af1a7bbfec6278e4",
    dateLabel: "Ekphrastic Poetry, 2023",
  },
];

/**
 * ESSAYS & ARTICLES — order is Marya's confirmed sequence.
 */
const essays: Pub[] = [
  {
    title: "Mapping a Path to the Divine",
    kind: "Essay",
    note: "Published in Braided Way Magazine.",
    href: "https://braidedway.org/mapping-a-path-to-the-divine/",
    cover: braidedWay,
    dateLabel: "Braided Way, September 2023",
  },
  {
    title: "Writing Myself: On Becoming a Real Writer",
    kind: "Essay",
    note: "Published by Women Who Submit.",
    href: "https://womenwhosubmitlit.org/2016/06/22/writing-myself-on-becoming-a-real-writer/",
    cover: writingMyselfCover,
    dateLabel: "Women Who Submit, June 2016",
  },
  {
    title: "Writing East to West and Back Again",
    sub: "Or Why Suffer? On practice & the call to write.",
    kind: "Book chapter",
    note: "Published as a chapter in an edited collection.",
    href: "https://storage.googleapis.com/wzukusers/user-36551884/documents/6142c9372beb4551a6168f71e807e7c6/Writing%20West%20to%20East%20and%20Back%20Again%20.pdf",
    cover:
      "https://storage.googleapis.com/production-hostgator-v1-0-8/048/1607048/Jn0mfjm8/d8fbeb8bcc69410bb9997b8b26349a46",
    dateLabel: "Cambridge Scholars Publishing, 2015",
  },
  {
    title: "A Body of Work",
    kind: "Blog",
    note: "An ongoing collection of essays on disability, creativity, and the body in time.",
    href: "https://abodyofwork.wordpress.com/",
    cover:
      "https://storage.googleapis.com/production-hostgator-v1-0-8/048/1607048/Jn0mfjm8/7fd61760738247c8aae3e7015506295e",
    dateLabel: "Ongoing",
  },
  {
    title: "New Times Nightlife & Art",
    kind: "Columnist",
    note: "Arts reviews and nightlife columns for South Florida's alternative press.",
    href: "https://www.browardpalmbeach.com/author/marya-summers/",
    cover:
      "https://storage.googleapis.com/production-hostgator-v1-0-8/048/1607048/Jn0mfjm8/402751f794114d169b926133c1fb845b",
    dateLabel: "New Times Broward Palm Beach, 2006–2008",
  },
];

const accents = ["bg-forest text-cream", "bg-gold/15 text-forest", "bg-sage/30 text-forest"];

function PubCard({ pub: b, index }: { pub: Pub; index: number }) {
  return (
    <article className="flex flex-col rounded-sm bg-card p-6 ring-1 ring-border/60">
      {b.cover ? (
        <>
          <div className="aspect-[3/4] overflow-hidden rounded-sm bg-stone/40">
            <img
              src={b.cover}
              alt={`${b.title} cover`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-5 font-display text-xl leading-tight text-forest">{b.title}</div>
          {b.sub && <div className="mt-1.5 text-sm italic leading-snug text-ink/70">{b.sub}</div>}
        </>
      ) : (
        <div
          className={`flex aspect-[3/4] flex-col justify-between rounded-sm p-6 ${accents[index % accents.length]}`}
        >
          <div className="font-display text-[0.6rem] uppercase tracking-[0.3em] opacity-70">
            Marya Summers
          </div>
          <div>
            <div className="font-display text-2xl leading-tight">{b.title}</div>
            {b.sub && (
              <div className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] opacity-80">
                {b.sub}
              </div>
            )}
          </div>
        </div>
      )}
      <div className="mt-3 text-[0.65rem] uppercase tracking-[0.22em] text-forest/70">
        {b.dateLabel ? `${b.kind} · ${b.dateLabel}` : b.kind}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">{b.note}</p>
      {b.href && (
        <a
          href={b.href}
          target="_blank"
          rel="noreferrer"
          className="mt-5 self-start font-sans text-[0.65rem] uppercase tracking-[0.28em] text-forest hover:text-gold"
        >
          Read →
        </a>
      )}
    </article>
  );
}

/**
 * Interim notify signup while the site has no backend: composes a prefilled
 * email to Marya (same pattern as the contact form). Swap for the planned
 * SureContact form during the WordPress migration.
 */
function NotifyForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    const subject = "Notify me — Darkscapes with Indigenous Light";
    const body = `Hi Marya,\n\nPlease let me know when Darkscapes with Indigenous Light is published.\n\nEmail: ${email}`;
    window.location.href = `mailto:marya@whollycreative.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="mx-auto mt-10 w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <label className="flex-1 text-left">
          <span className="sr-only">Email address</span>
          <input
            type="email"
            required
            maxLength={255}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@somewhere"
            className="w-full border-b border-cream/40 bg-transparent py-3 font-sans text-base text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
          />
        </label>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-3.5 font-sans text-[0.72rem] uppercase tracking-[0.24em] text-forest transition-colors hover:bg-cream"
        >
          Notify me!
        </button>
      </form>
      <p className="mt-4 text-xs italic text-cream/60" role={sent ? "status" : undefined}>
        {sent
          ? "Thank you — your email app should be opening. Just hit send to join the list."
          : "Opens your email app to send the request — a real person reads every one."}
      </p>
    </div>
  );
}

function WritingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Writing & publications"
        title={
          <>
            What is written <em className="italic text-teal">endures.</em>
          </>
        }
        intro="Poetry, essays, and books. My work explores life’s sharp, broken edges and soft, startling graces. Like a lantern, my writing lets you enter the darkness as it holds the light – sometimes breaking, sometimes hidden, and sometimes distant, but always present."
      />

      {/* Book tease — leads the page per Marya's preference. Reordering later is
          just moving this one <section> block. */}
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-12">
          <p className="font-display text-3xl italic leading-snug md:text-5xl">
            Coming Soon. Darkscapes with Indigenous Light. Currently under consideration with
            publishers.
          </p>
          <NotifyForm />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 lg:px-12">
        <div className="eyebrow">Poetry</div>
        <SpiralDivider className="mt-4 mb-12 justify-start" />
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {poetry.map((b, i) => (
            <PubCard key={b.title} pub={b} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-stone/50 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="eyebrow">Essays & Articles</div>
          <SpiralDivider className="mt-4 mb-12 justify-start" />
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {essays.map((b, i) => (
              <PubCard key={b.title} pub={b} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-12">
        <div className="eyebrow">Academic Writing</div>
        <SpiralDivider className="mt-4 mb-8 justify-start" />
        <div className="flex flex-col items-start justify-between gap-8 border-y border-border py-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl text-forest">Marya Summers Complete CV</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/70">
              Academic work, teaching, publications, and professional experience.
            </p>
          </div>
          <PrimaryLink to="/academic">View Academic Writing</PrimaryLink>
        </div>
      </section>
    </>
  );
}
