import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { SpiralDivider } from "../components/Spiral";
import { PrimaryLink } from "../components/Buttons";
import writingMyselfCover from "../assets/writing-myself.jpg.asset.json";
import aHardClimbCover from "../assets/a-hard-climb.png.asset.json";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing & Publications — Wholly Creative" },
      { name: "description", content: "Books, essays, and poems by Marya Summers." },
      { property: "og:title", content: "Writing & Publications — Marya Summers" },
      { property: "og:description", content: "Books, essays, and poems by Marya Summers." },
    ],
  }),
  component: WritingPage,
});

const accents = [
  "bg-forest text-cream",
  "bg-gold/15 text-forest",
  "bg-sage/30 text-forest",
];

const books: {
  title: string;
  sub: string;
  kind: string;
  note: string;
  href: string;
  cover?: string;
}[] = [
  {
    title: "Writing East to West and Back Again",
    sub: "A Yogic Approach to Life Writing",
    kind: "Essay",
    note: "On practice, breath, and the long return to the page.",
    href: "https://storage.googleapis.com/wzukusers/user-36551884/documents/6142c9372beb4551a6168f71e807e7c6/Writing%20West%20to%20East%20and%20Back%20Again%20.pdf",
    cover: "https://storage.googleapis.com/production-hostgator-v1-0-8/048/1607048/Jn0mfjm8/d8fbeb8bcc69410bb9997b8b26349a46",
  },
  {
    title: "Love Poem for the Abandoned Child",
    sub: "Poem",
    kind: "Poem",
    note: "A tender address to the self that was left waiting.",
    href: "https://storage.googleapis.com/wzukusers/user-36551884/documents/d00eb3a26e634a82b2bc44c6f1206db5/Love%20Poem%20for%20abandoned%20Child.pdf",
    cover: "https://storage.googleapis.com/production-hostgator-v1-0-8/048/1607048/Jn0mfjm8/c55231d0e5da4d43a0ed5857257e9188",
  },
  {
    title: "Where Wind Belongs",
    sub: "Lyric Essay on Magic, Desire & Love",
    kind: "Lyric essay",
    note: "Published in Tiferet, Fall 2017.",
    href: "https://storage.googleapis.com/wzukusers/user-36551884/documents/06674d40ba2c453888e14d53a644ff7c/Where%20Wind%20Belongs%20Tiferet%20Fall%202017-2.pdf",
    cover: "https://storage.googleapis.com/production-hostgator-v1-0-8/048/1607048/Jn0mfjm8/b9c512a8f7d149e9914e7cc33baf8d7f",
  },
  {
    title: "Her Own Etymology",
    sub: "After Sue Williams' \"A Fine Line\"",
    kind: "Poem",
    note: "An ekphrastic response to the exhibit.",
    href: "https://storage.googleapis.com/wzukusers/user-36551884/documents/39b850105ee84b068f2f19094ca6241e/Her-Own-Etymology.pdf",
    cover: "https://storage.googleapis.com/production-hostgator-v1-0-8/048/1607048/Jn0mfjm8/82d6b06c434f48958a1cf180130083fe",
  },
  {
    title: "Writing Myself: On Becoming a Real Writer",
    sub: "Essay",
    kind: "Essay",
    note: "Published by Women Who Submit.",
    href: "https://womenwhosubmitlit.org/2016/06/22/writing-myself-on-becoming-a-real-writer/",
    cover: writingMyselfCover.url,
  },
  {
    title: "A Body of Work",
    sub: "Ongoing blog",
    kind: "Blog",
    note: "Notes on disability, creativity, and the body in time.",
    href: "https://abodyofwork.wordpress.com/",
    cover: "https://storage.googleapis.com/production-hostgator-v1-0-8/048/1607048/Jn0mfjm8/7fd61760738247c8aae3e7015506295e",
  },
  {
    title: "Verbal Pointillism with Circular Line",
    sub: "Poem",
    kind: "Poem",
    note: "From the ekphrastic series.",
    href: "https://storage.googleapis.com/wzukusers/user-36551884/documents/0e733ed0ce6141c4ac7e4b4c9375c7ed/closer%20poems.pdf",
    cover: "https://storage.googleapis.com/production-hostgator-v1-0-8/048/1607048/Jn0mfjm8/e6efa9755b924e23af1a7bbfec6278e4",
  },
  {
    title: "The Honest Word",
    sub: "Poem · 3rd Place National Award, Social Critique",
    kind: "Poem",
    note: "Recognized by the National Federation of State Poetry Societies.",
    href: "https://storage.googleapis.com/wzukusers/user-36551884/documents/5a1734c2c75b4a498f7ec7e5b6281297/The%20Honest%20Word.pdf",
    cover: "https://storage.googleapis.com/production-hostgator-v1-0-8/048/1607048/Jn0mfjm8/e102ede92e964291ab00b9caaf65f048",
  },
  {
    title: "A Hard Climb",
    sub: "Mapping a Path to the Divine",
    kind: "Poem",
    note: "Published in K87, pages 31–32.",
    href: "https://storage.googleapis.com/wzukusers/user-36551884/documents/1d02f106ae064e9483c5300136b78a5b/A%20Hard%20Climb.png",
    cover: aHardClimbCover.url,
  },
  {
    title: "The Congregation",
    sub: "Poem",
    kind: "Poem",
    note: "A small gathering, carried on the page.",
    href: "https://storage.googleapis.com/wzukusers/user-36551884/documents/b3ca62f61f674ed79ef70d1c4e0aa8da/Screen%20Shot%202025-08-16%20at%202.02.24%20PM.png",
    cover: "https://storage.googleapis.com/production-hostgator-v1-0-5/795/1999795/4dGRgZn1/a44121effcbc4771a2b5c9a86cd49ac3",
  },
  {
    title: "On the Dunes of Manchester Beach",
    sub: "Poem",
    kind: "Poem",
    note: "Published in Calameo.",
    href: "https://www.calameo.com/read/0064651467b168bf645fd",
    cover: "https://storage.googleapis.com/production-hostgator-v1-0-5/795/1999795/4dGRgZn1/0c61f68190a04a33a4c086c5b86df1e7",
  },
  {
    title: "A Begrudging Nomad",
    sub: "Poem",
    kind: "Poem",
    note: "Published in Rise Up Review.",
    href: "https://riseupreview.org/marya-summers",
    cover: "https://storage.googleapis.com/production-hostgator-v1-0-5/795/1999795/4dGRgZn1/df1a654e3304495fb9a08e4498fb5f3f",
  },
  {
    title: "On this Post-Election Shore",
    sub: "Poem",
    kind: "Poem",
    note: "Published in Dissident Voice, November 2024.",
    href: "https://dissidentvoice.org/2024/11/on-this-post-election-shore-2024/",
    cover: "https://storage.googleapis.com/production-hostgator-v1-0-5/795/1999795/4dGRgZn1/bcd304dfcc51464f95b755ea6f3ec234",
  },
  {
    title: "For Once In My Life",
    sub: "Poem",
    kind: "Poem",
    note: "A short lyric, held close.",
    href: "https://storage.googleapis.com/wzukusers/user-36551884/documents/3118406443384015b1ffd3bb7b0c2999/IMG_9432.jpg",
    cover: "https://storage.googleapis.com/production-hostgator-v1-0-5/795/1999795/4dGRgZn1/666bfbfb06be464f96804b415053cdb1",
  },
  {
    title: "Art Reviews & Nightlife Column",
    sub: "Broward / Palm Beach New Times",
    kind: "Column archive",
    note: "More than a decade of arts writing for South Florida's alternative press.",
    href: "https://www.browardpalmbeach.com/browardpalmbeach/ArticleArchives?author=6305179&sortType=recent",
    cover: "https://storage.googleapis.com/production-hostgator-v1-0-8/048/1607048/Jn0mfjm8/402751f794114d169b926133c1fb845b",
  },
];

const essays = [
  ["On Inspiration & Inner Listening", "Orion Magazine"],
  ["What the Cards Taught Me About Sentences", "The Sun"],
  ["A Small Defense of the Notebook", "Emergence Magazine"],
  ["Spiral Time, Spiral Practice", "Tricycle"],
  ["Reading the Year-Ahead Spread", "Mythic Magazine"],
];

function WritingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Writing & publications"
        title={<>What is written <em className="italic text-teal">endures.</em></>}
        intro="Poetry, essays, and books. My work explores life’s sharp, broken edges and soft, startling graces. Like a lantern, my writing lets you enter the darkness as it holds the light – sometimes breaking, sometimes hidden, and sometimes distant, but always present."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-12">
        <div className="eyebrow">Books</div>
        <SpiralDivider className="mt-4 mb-12 justify-start" />
        <div className="grid gap-6 md:grid-cols-3">
          {books.map((b, i) => (
            <article key={b.title} className="flex flex-col rounded-sm bg-card p-6 ring-1 ring-border/60">
              {b.cover ? (
                <div className="aspect-[3/4] overflow-hidden rounded-sm bg-stone/40">
                  <img
                    src={b.cover}
                    alt={`${b.title} cover`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className={`flex aspect-[3/4] flex-col justify-between rounded-sm p-6 ${accents[i % accents.length]}`}>
                  <div className="font-display text-[0.6rem] uppercase tracking-[0.3em] opacity-70">Marya Summers</div>
                  <div>
                    <div className="font-display text-2xl leading-tight">{b.title}</div>
                    <div className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] opacity-80">{b.sub}</div>
                  </div>
                </div>
              )}
              {b.cover && (
                <div className="mt-5 font-display text-xl leading-tight text-forest">{b.title}</div>
              )}
              <div className="mt-3 text-[0.65rem] uppercase tracking-[0.22em] text-forest/70">
                {b.kind}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{b.note}</p>
              <a
                href={b.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 self-start font-sans text-[0.65rem] uppercase tracking-[0.28em] text-forest hover:text-gold"
              >
                Read →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-stone/50 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <div className="eyebrow">SELECTED ESSAYS & ARTICLES</div>
          <SpiralDivider className="mt-4 mb-10 justify-start" />
          <ul className="divide-y divide-border">
            {essays.map(([title, where]) => (
              <li key={title} className="flex flex-col gap-1 py-5 md:flex-row md:items-baseline md:justify-between">
                <span className="font-display text-xl text-forest">{title}</span>
                <span className="text-[0.7rem] uppercase tracking-[0.22em] text-ink/60">{where}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-12">
        <div className="eyebrow">COMING SOON</div>
        <p className="mt-6 font-display text-3xl italic leading-snug text-forest md:text-4xl">
          Darkscapes with Indigenous Light<br />
          a collection of poems
        </p>
        <div className="mt-10 flex justify-center">
          <PrimaryLink to="/contact">NOTIFY ME!</PrimaryLink>
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.22em] text-ink/55">
          Or wander to{" "}
          <Link to="/mentorship" className="text-gold hover:text-forest">mentorship</Link>
        </p>
      </section>
    </>
  );
}