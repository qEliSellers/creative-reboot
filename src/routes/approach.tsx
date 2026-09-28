import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { SpiralDivider } from "../components/Spiral";
import { PrimaryLink } from "../components/Buttons";
import { BackLink } from "../components/BackLink";
import heroSpiral from "../assets/hero-spiral-clean.webp";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "My Approach — Wholly Creative" },
      {
        name: "description",
        content:
          "The Wholly Creative Method: how revelation becomes creation, and creation becomes revelation. Writing, divination, mentorship, and sacred objects with Marya Summers.",
      },
      { property: "og:title", content: "My Approach — Marya Summers" },
      {
        property: "og:description",
        content: "In service of revelation — the heart of the Wholly Creative spiral.",
      },
      { property: "og:image", content: heroSpiral },
    ],
  }),
  component: ApproachPage,
});

function ApproachPage() {
  return (
    <>
      <BackLink to="/" label="Back to Home" />
      <PageHeader
        eyebrow="My approach"
        title={
          <>
            Everything I offer is in service of <em className="italic text-teal">revelation.</em>
          </>
        }
      />

      <section className="mx-auto max-w-2xl px-6 pb-24 lg:px-12">
        <p className="text-base leading-[1.9] text-ink/80 md:text-lg">
          Everything I offer is in service of revelation. Whether through writing, intuitive card
          readings, creative consulting and mentorship, teaching, or the sacred objects I make by
          hand, my work is about helping people see what has always been there but has not yet been
          fully recognized.
        </p>
        <p className="mt-8 text-base leading-[1.9] text-ink/80 md:text-lg">
          Revelation is sometimes a single flash of insight. Often, however, it is a living,
          recursive process. We see something that was previously hidden. That new understanding
          invites us to integrate what once seemed contradictory. From that integration, we create—a
          poem, a decision, a relationship, a business, a life. Through the very act of creation,
          new truths reveal themselves that could not have been seen before.
        </p>

        <div className="my-14 flex justify-center">
          <img
            src={heroSpiral}
            alt="A spiral of vines, blossoms, and teal water with a golden thread — the emblem of the Wholly Creative method"
            width={420}
            height={386}
            loading="lazy"
            className="w-full max-w-[420px]"
          />
        </div>

        <p className="text-center font-display text-2xl italic leading-snug text-forest md:text-3xl">
          The spiral begins again.
        </p>
        <SpiralDivider className="mt-8" />

        <p className="mt-14 text-base leading-[1.9] text-ink/80 md:text-lg">
          This spiral is the heart of Wholly Creative. It is the pattern through which insight
          becomes transformation and transformation becomes a way of life.
        </p>

        <figure className="my-14 rounded-sm bg-stone/60 px-8 py-12 text-center md:px-12">
          <blockquote className="font-display text-xl italic leading-snug text-forest md:text-2xl">
            "I don't believe transformation is about becoming someone else. I believe it is about
            uncovering who you already are and aligning your life with that deeper truth."
          </blockquote>
          <figcaption className="mt-5 text-xs uppercase tracking-[0.22em] text-ink/60">
            — after Michelangelo, who saw the figure already waiting in the marble
          </figcaption>
        </figure>

        <p className="text-base leading-[1.9] text-ink/80 md:text-lg">
          Michelangelo famously said that when he sculpted, he merely liberated the figure already
          waiting inside the marble. That image has always resonated with me.
        </p>
        <p className="mt-8 text-base leading-[1.9] text-ink/80 md:text-lg">
          My work is to reveal the patterns beneath what appears confusing, making visible the
          answers that were always there but could not yet be seen. Sometimes those answers are
          practical. Sometimes they are creative. Sometimes they are deeply personal. Whether you
          are navigating a life transition, seeking direction for a meaningful project, or longing
          to understand yourself more fully, I help illuminate what has been difficult to see and
          offer guidance rooted in that revelation.
        </p>

        <SpiralDivider className="mt-16" />
        <p className="mt-14 text-center font-display text-2xl italic leading-snug text-forest md:text-3xl">
          Often a single session is enough to restore clarity, dissolve what has been keeping you
          stuck, and reveal the next meaningful step.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <PrimaryLink to="/contact">Schedule a Session</PrimaryLink>
          <Link
            to="/work-with-me"
            className="inline-flex items-center gap-2 font-sans text-[0.72rem] uppercase tracking-[0.24em] text-forest transition-colors hover:text-gold"
          >
            Explore Ways to Work With Me
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
