import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { SpiralDivider } from "../components/Spiral";
import { GhostButton } from "../components/Buttons";
import { BackLink } from "../components/BackLink";
import pathDivination from "../assets/path-divination.jpg";

export const Route = createFileRoute("/divination")({
  head: () => ({
    meta: [
      { title: "Divination — Wholly Creative" },
      { name: "description", content: "Tarot, oracle, and intuitive sessions with Marya Summers." },
      { property: "og:title", content: "Divination — Marya Summers" },
      { property: "og:description", content: "Grounded tarot and oracle sessions for clarity and choice." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DivinationPage,
});

const offerings = [
  { name: "Oracle Reading", duration: "50 minutes", price: "$95",
    desc: "Six decks used in conversation. You present one question or area of your life you’re having difficulty with and leave with a practice, spell, or affirmation to anchor the oracle’s answer and let its wisdom blossom in your life." },
  { name: "Tarot Reading", duration: "50 minutes", price: "$95",
    desc: "One classic deck for deep insights on how the energies conspire to create the reality you have and how to shift them for the one you want. Bring your question or focus on a single area of your life you’d like guidance on." },
];

const faqs = [
  ["What if I need help forming a question?", "That’s actually common. In order to get a clear answer, you need to have a clearly worded question. I can help you craft your question."],
  ["Do I need to know anything about tarot or oracles?", "Not a thing. The reading is a conversation; the cards are a vocabulary I translate."],
  ["Is this fortune-telling?", "No. I read the present truthfully so you can choose the next thing well."],
  ["Where do sessions happen?", "Over a quiet phone call, which is recorded for you to keep. You will receive a photo of the cards as well to refer to."],
  ["What about Zoom?", "I hear spirit best when I am not distracted. The zoom camera is a distraction."],
];

const steps = [
  "We begin with a few minutes of quiet. You arrive; I make space.",
  "You speak your question in your own words. I will help you craft the language of the question to receive the clearest answer.",
  "I shuffle and lay the cards. I read them individually and in conversation with each other.",
  "We close with one small practice you can take with you to help root and grow the wisdom revealed in the reading.",
];

function DivinationPage() {
  return (
    <>
      <BackLink to="/work-with-me" label="Back to Work With Me" />
      <PageHeader
        eyebrow="Divination"
        title={<>A grounded reading<br /><em className="italic text-teal">for an honest question.</em></>}
        intro="The cards are a mirror, not a script. I read tarot and oracle the way I read a poem — slowly, attentively, and with a steady regard for what is actually here."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {offerings.map((o) => (
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

      <section className="bg-forest py-24 text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 lg:px-12">
          <img src={pathDivination} alt="A fan of tarot cards on linen" loading="lazy" className="w-full rounded-sm" />
          <div>
            <div className="eyebrow text-cream/80">How a session unfolds</div>
            <SpiralDivider className="mt-4 mb-8 justify-start text-gold-soft" />
            <ol className="space-y-6 text-sm leading-relaxed text-cream/85">
              {steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-display text-2xl text-gold-soft">{String(i + 1).padStart(2, "0")}</span>
                  <span className="pt-2">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 lg:px-12">
        <div className="eyebrow text-center">Honest Question, Honest Answers</div>
        <SpiralDivider className="mt-4 mb-12" />
        <dl className="space-y-8">
          {faqs.map(([q, a]) => (
            <div key={q}>
              <dt className="font-display text-xl text-forest">{q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink/75">{a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}