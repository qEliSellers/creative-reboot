import logoAsset from "@/assets/wholly-creative-logo.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Wholly Creative"
      className={`h-14 w-auto ${className}`}
    />
  );
}