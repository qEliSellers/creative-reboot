import { createFileRoute } from "@tanstack/react-router";
import maryaEarth from "../assets/marya-earth.webp";
import percevalMountain from "../assets/perceval-mountain.webp";
import { PageHeader } from "../components/PageHeader";
import { PrimaryLink } from "../components/Buttons";
import { SpiralDivider } from "../components/Spiral";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Marya — Wholly Creative" },
      {
        name: "description",
        content:
          "Marya Summers is a writer, diviner, and maker working at the meeting place of story, spirit, and craft.",
      },
      { property: "og:title", content: "About Marya Summers" },
      {
        property: "og:description",
        content:
          "Writer, diviner, and maker working at the meeting place of story, spirit, and craft.",
      },
      { property: "og:image", content: maryaEarth },
    ],
  }),
  component: About,
});

const values = [
  ["Slow attention", "Nothing meaningful is made in a hurry. I work at the pace of listening."],
  [
    "Practical mysticism",
    "Symbol and ritual are tools for clearer thinking, not escape from the world.",
  ],
  ["Devotion to craft", "Sentences, stones, and decks — each asks to be done with care."],
  ["Sovereignty of the seeker", "You already carry the answers. My work is to help you hear them."],
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="A little about me"
        title={
          <>
            I write. I read.
            <br />
            <em className="italic text-teal">I make sacred things.</em>
          </>
        }
      />

      <section className="mx-auto grid max-w-6xl items-start gap-12 px-6 pb-24 md:grid-cols-[5fr_6fr] lg:px-12">
        <div className="overflow-hidden rounded-sm bg-stone">
          <img
            src={maryaEarth}
            alt="Marya Summers, smiling outdoors among oaks"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6 text-base leading-[1.85] text-ink/80">
          <p className="font-display text-2xl italic leading-snug text-forest">
            My name is Marya (rhymes with papaya). I’m named for the wind. I live where galaxies
            spiral into ancient forests, at the edge of shifting rivers, in sacred spaces of stones,
            books, and other tools of divination.
          </p>
          <p>
            My work is built on wild faith and deep questions. I conjure wisdom from the invisible.
            I distill hidden patterns. I write with lightning. At threshold, my wonder cat Perceval
            keeps watch.
          </p>
          <p>
            I came to this work the long way around — through journalism and editing, through
            decades of teaching writers in college classrooms and community workshops, through
            losses that asked me to grow up and griefs that asked me to grow down. Along the
            journey, I stopped choosing between the literary and the spiritual life, and the two
            finally now sit at the same table.
          </p>
          <p className="whitespace-pre-line">
            Wholly Creative is what came of that truce. It is a practice in four parts that all turn
            on the same axis: the spiral, where possibility and authenticity are sourced from the
            center and grown outward into expression and expansion and where experience is gathered
            from outside and integrated back at the center. {"\n\n\n"}I work with writers, makers,
            and people in the middle of their own becoming. The work is quiet and particular. It
            does not promise transformation in thirty days. It promises company, rigor, and the kind
            of language that holds.
          </p>
          <div className="pt-4">
            <PrimaryLink to="/contact">Begin a conversation</PrimaryLink>
          </div>
        </div>
      </section>

      <section className="bg-stone/50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="text-center">
            <div className="eyebrow">What I carry</div>
            <SpiralDivider className="mt-5" />
          </div>
          <dl className="mt-14 grid gap-10 md:grid-cols-2">
            {values.map(([title, body]) => (
              <div key={title} className="border-l-2 border-gold/60 pl-6">
                <dt className="font-display text-2xl text-forest">{title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-ink/75">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1fr_5fr] lg:px-12">
        <div className="overflow-hidden rounded-sm bg-stone md:order-2">
          <img
            src={percevalMountain}
            alt="Perceval the wonder cat in a red vest, sitting on a rock with a mountain behind him"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="md:order-1 md:text-right">
          <div className="eyebrow">Off the page</div>
          <p className="mt-4 font-display text-2xl italic leading-snug text-forest">
            Most mornings you'll find me with cold coffee, a paperback, and a cat who is also a
            critic.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-ink/75">
            I keep bees badly and read tarot well. I am writing a book about attention. I believe in
            handwritten letters, long walks without a podcast, and the power of a single accurate
            word.
          </p>
        </div>
      </section>
    </>
  );
}
