import { useState } from "react";

export default function ImagePlaceholder({
  src,
  alt,
  label = "Dashboard mockup",
  aspectRatio = "aspect-[4/3]",
  className = "",
  framed = false,
  objectFit = "cover",
}) {
  const [hasError, setHasError] = useState(false);

  const frameClass = framed
    ? "border-4 border-white shadow-[var(--shadow-hero-frame)] ring-2 ring-primary/20"
    : "border border-border shadow-[var(--shadow-card)]";

  const fitClass = objectFit === "contain" ? "object-contain" : "object-cover";

  if (!src || hasError) {
    return (
      <div
        className={`${aspectRatio} w-full rounded-2xl border border-border bg-gradient-to-br from-surface to-white flex flex-col items-center justify-center gap-3 shadow-[var(--shadow-card)] ${className}`}
        role="img"
        aria-label={alt || label}
      >
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        <p className="text-sm text-muted text-center px-6 max-w-xs">{label}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={`${aspectRatio} w-full rounded-2xl ${fitClass} ${frameClass} ${className}`}
    />
  );
}
