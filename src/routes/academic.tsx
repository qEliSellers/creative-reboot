import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { SpiralDivider } from "../components/Spiral";

export const Route = createFileRoute("/academic")({
  head: () => ({
    meta: [
      { title: "Marya Summers Complete CV — Wholly Creative" },
      { name: "description", content: "Academic writing, teaching, publications, and professional experience from Marya Summers." },
      { property: "og:title", content: "Marya Summers Complete CV" },
      { property: "og:description", content: "Academic writing, teaching, publications, and professional experience from Marya Summers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AcademicPage,
});

function AcademicPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academic Writing"
        title="Marya Summers Complete CV"
        intro="A complete record of academic work, teaching, publications, and professional experience."
      />

      <section className="mx-auto max-w-3xl px-6 pb-28 text-center lg:px-12">
        <div className="border-y border-border py-14">
          <div className="eyebrow">Corrected edition forthcoming</div>
          <SpiralDivider className="mt-4 mb-8" />
          <p className="mx-auto max-w-xl font-display text-2xl italic leading-snug text-forest md:text-3xl">
            Marya’s corrected CV will be available to read and download here soon.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-ink/65">
            The PDF link will be added when the final document is ready.
          </p>
        </div>

        <Link
          to="/writing"
          className="mt-10 inline-flex font-sans text-[0.7rem] uppercase tracking-[0.22em] text-forest hover:text-gold"
        >
          ← Back to Writing
        </Link>
      </section>
    </>
  );
}