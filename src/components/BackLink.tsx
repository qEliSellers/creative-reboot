import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function BackLink({ to, label }: { to: string; label: string }) {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-8 lg:px-12">
      <Link
        to={to}
        className="eyebrow inline-flex items-center gap-2 text-ink/60 transition-colors hover:text-forest"
      >
        <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
        {label}
      </Link>
    </div>
  );
}