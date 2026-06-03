export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
  id,
  className = "",
  wide = false,
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = dark ? "text-white" : "text-teal";
  const subtitleColor = dark ? "text-white/70" : "text-muted";
  const maxWidth = wide ? "max-w-4xl" : "max-w-3xl";

  return (
    <div className={`${maxWidth} mb-12 lg:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary-light rounded-full">
          {eyebrow}
        </span>
      )}
      {id ? (
        <h2
          id={id}
          className={`text-3xl lg:text-4xl font-bold font-serif tracking-tight ${titleColor}`}
        >
          {title}
        </h2>
      ) : (
        <h2 className={`text-3xl lg:text-4xl font-bold font-serif tracking-tight ${titleColor}`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${subtitleColor}`}>{subtitle}</p>
      )}
    </div>
  );
}
