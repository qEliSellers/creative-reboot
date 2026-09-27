import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { SpiralDivider } from "../components/Spiral";
import pathAmulets from "../assets/path-amulets.jpg";

export const Route = createFileRoute("/amulets")({
  head: () => ({
    meta: [
      { title: "Amulets — Wholly Creative" },
      { name: "description", content: "Handcrafted talismans and small sacred objects by Marya Summers." },
      { property: "og:title", content: "Amulets — Marya Summers" },
      { property: "og:description", content: "Handcrafted talismans and small sacred objects." },
      { property: "og:image", content: pathAmulets },
    ],
  }),
  component: AmuletsPage,
});

const products: Array<[string, string, string]> = [
  ["Labradorite Keeper", "For seeing in the dark", "$148"],
  ["River Pearl Pendant", "For listening", "$96"],
  ["Hawthorn Knot", "For the threshold", "$72"],
  ["Smoky Quartz Anchor", "For staying", "$124"],
  ["Bee & Honey Locket", "For sweetness held", "$184"],
  ["Iron & Rosemary Charm", "For protection", "$88"],
  ["Moonstone Drop", "For tides and turning", "$132"],
  ["Oak Gall Talisman", "For the slow worker", "$68"],
];

function AmuletsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Amulets & small sacred objects"
        title={<>Stone, crystal, metal, silk.<br />Intention held close.</>}
        intro="Each piece is made by hand in a small studio over the course of a week. Materials are sourced with well-being in mind. Nothing synthetic. Creations are wholly natural and fragrance-free to protect the most sensitive. While some designs may be similar, each amulet is one of a kind."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-12">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 text-[0.7rem] uppercase tracking-[0.22em] text-forest/70">
          <div className="flex gap-6">
            <button className="border-b border-gold pb-1 text-forest">All</button>
            <button className="hover:text-gold">Amulets</button>
            <button className="hover:text-gold">Prayer Beads</button>
          </div>
          <div>Sort: Newest first</div>
        </div>

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(([name, sub, price], i) => (
            <article key={name} className="group">
              <div className="aspect-square overflow-hidden rounded-sm bg-stone">
                <img
                  src={pathAmulets}
                  alt={name}
                  loading="lazy"
                  style={{ filter: `hue-rotate(${i * 22}deg) saturate(${0.75 + (i % 3) * 0.15})` }}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-display text-lg text-forest">{name}</h3>
                <p className="mt-1 text-xs italic text-ink/60">{sub}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-display text-base text-forest">{price}</span>
                  <button
                    type="button"
                    className="text-[0.65rem] uppercase tracking-[0.25em] text-forest/70 hover:text-gold"
                  >
                    Add to basket →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-stone/50 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <div className="eyebrow">About the craft</div>
          <SpiralDivider className="mt-4 mb-8" />
          <p className="font-display text-2xl italic leading-snug text-forest md:text-3xl">
            Each amulet is named, blessed, and packed in a small burlap pouch with a handwritten card
            explaining its materials and how they support you.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-ink/75">
            Commissioned creations designed uniquely for you available upon request (link to contact
            me page). Shipping is slow and careful. Returns are simple — if the piece is not for
            you, send it back within two weeks.
          </p>
        </div>
      </section>
    </>
  );
}