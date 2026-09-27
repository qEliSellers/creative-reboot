import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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

const categories = [
  { slug: "amulets", label: "Amulets" },
  { slug: "prayer-beads-mala-beads", label: "Prayer Beads / Mala Beads" },
] as const;

type CategorySlug = (typeof categories)[number]["slug"];

type Product = {
  id: string;
  category: CategorySlug;
  name: string;
  subtitle: string;
  price: string;
  image: string;
};

const products: Product[] = [];

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <div className="aspect-square overflow-hidden rounded-sm bg-stone">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-display text-lg text-forest">{product.name}</h3>
        <p className="mt-1 text-xs italic text-ink/60">{product.subtitle}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-display text-base text-forest">{product.price}</span>
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-forest/70">
            View piece
          </span>
        </div>
      </div>
    </article>
  );
}

function AmuletsPage() {
  const [activeCategory, setActiveCategory] = useState<CategorySlug>("amulets");
  const visibleProducts = products.filter((product) => product.category === activeCategory);
  const activeLabel = categories.find((category) => category.slug === activeCategory)?.label;

  return (
    <>
      <PageHeader
        eyebrow="Amulets & small sacred objects"
        title={<>Stone, crystal, metal, silk.<br />Intention held close.</>}
        intro="Each piece is made by hand in a small studio over the course of a week. Materials are sourced with well-being in mind. Nothing synthetic. Creations are wholly natural and fragrance-free to protect the most sensitive. While some designs may be similar, each amulet is one of a kind."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-12">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 text-[0.7rem] uppercase tracking-[0.22em] text-forest/70">
          <div className="flex flex-wrap gap-6" role="tablist" aria-label="Shop categories">
            {categories.map((category) => {
              const isActive = category.slug === activeCategory;
              return (
                <button
                  key={category.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category.slug)}
                  className={isActive ? "border-b border-gold pb-1 text-forest" : "pb-1 hover:text-gold"}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
          <div>{visibleProducts.length} pieces</div>
        </div>

        {visibleProducts.length > 0 ? (
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        ) : (
          <div className="border-y border-border py-16 text-center" role="tabpanel">
            <p className="font-display text-2xl italic text-forest">{activeLabel} are coming soon.</p>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink/65">
              New one-of-a-kind pieces will be added here as they become available.
            </p>
          </div>
        )}
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
            Commissioned creations designed uniquely for you are available upon request.{" "}
            <Link to="/contact" className="text-forest underline decoration-gold underline-offset-4 hover:text-gold">
              Contact Marya
            </Link>
            {" "}to begin. Shipping is slow and careful. Returns are simple — if the piece is not for
            you, send it back within two weeks.
          </p>
        </div>
      </section>
    </>
  );
}