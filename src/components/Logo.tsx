import logoAsset from "@/assets/wholly-creative-logo.webp";

export function Logo({ className = "" }: { className?: string }) {
  return <img src={logoAsset} alt="Wholly Creative" className={`h-14 w-auto ${className}`} />;
}
