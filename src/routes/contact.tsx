import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode, type FormEvent } from "react";
import { PageHeader } from "../components/PageHeader";
import { SpiralDivider } from "../components/Spiral";
import { GhostButton } from "../components/Buttons";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Wholly Creative" },
      {
        name: "description",
        content: "Write to Marya Summers about mentorship, divination, amulets, or speaking.",
      },
      { property: "og:title", content: "Contact Marya Summers" },
      { property: "og:description", content: "Write to Marya. She reads every letter." },
    ],
  }),
  component: ContactPage,
});

const inputCls =
  "w-full border-b border-border bg-transparent py-3 font-sans text-base text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow block">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [doorway, setDoorway] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please share your name, email, and a message before sending.");
      return;
    }
    setError(null);
    const subject = doorway ? `Wholly Creative — ${doorway}` : "Wholly Creative — a letter";
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:marya@whollycreative.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <PageHeader
        eyebrow="Write to me"
        title={
          <>
            Tell me what
            <br />
            <em className="italic text-teal">you're carrying.</em>
          </>
        }
        intro="I read every letter. I answer most within the week. If your message is urgent, say so — and forgive me for taking the time the work deserves."
      />

      <section className="mx-auto grid max-w-6xl gap-16 px-6 pb-28 md:grid-cols-[3fr_2fr] lg:px-12">
        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-sm bg-card p-8 ring-1 ring-border/70 md:p-12"
        >
          <Field label="Your name">
            <input
              type="text"
              required
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputCls}
              placeholder="As you'd like to be called"
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              required
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputCls}
              placeholder="you@somewhere"
            />
          </Field>
          <Field label="What brings you here?">
            <select
              className={inputCls}
              value={doorway}
              onChange={(e) => setDoorway(e.target.value)}
            >
              <option value="" disabled>
                Choose a doorway
              </option>
              <option>A divination session</option>
              <option>Creative mentorship</option>
              <option>A custom amulet</option>
              <option>Speaking or teaching</option>
              <option>Something else entirely</option>
            </select>
          </Field>
          <Field label="Your message">
            <textarea
              rows={6}
              required
              maxLength={4000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={inputCls + " resize-none"}
              placeholder="There's no wrong way to begin. Tell me what's true."
            />
          </Field>
          {error && (
            <p className="text-sm text-red-700" role="alert">
              {error}
            </p>
          )}
          <div className="flex items-center justify-between gap-4 pt-2">
            <p className="text-xs italic text-ink/55">
              Opens your email app so you can send — a real person reads every one.
            </p>
            <GhostButton type="submit">Send your letter</GhostButton>
          </div>
        </form>

        <aside className="space-y-10">
          <div>
            <div className="eyebrow">Direct</div>
            <SpiralDivider className="mt-4 mb-6 justify-start" />
            <a
              href="mailto:marya@whollycreative.com"
              className="font-display text-2xl text-forest hover:text-gold"
            >
              marya@whollycreative.com
            </a>
          </div>
          <div>
            <div className="eyebrow">Where</div>
            <p className="mt-4 text-sm leading-relaxed text-ink/75">
              Sessions happen by phone or video; correspondence occurs through email; sacred items
              arrive by USPS; the occasional retreat will be held among rocks, trees, stars, and
              wildlife.
            </p>
          </div>
          <div>
            <div className="eyebrow">Rhythm</div>
            <p className="mt-4 text-sm leading-relaxed text-ink/75">
              I keep office hours Tuesday through Friday. Mondays are for reading and reflection;
              weekends are for dreaming, playing, and adventuring with those I love.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
