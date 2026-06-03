import ImagePlaceholder from "../ui/ImagePlaceholder";
import Button from "../ui/Button";

export default function FeatureSection({
  title,
  subtitle,
  bullets = [],
  imageSrc,
  imageAlt,
  reverse = false,
  cta,
  className = "",
  aspectRatio = "aspect-[16/10]",
}) {
  const sectionId = title.replace(/\s+/g, "-").toLowerCase();

  const textBlock = (
    <div>
      <h2 className="text-2xl lg:text-3xl font-serif font-bold text-teal tracking-tight">
        {title}
      </h2>
      <p className="mt-4 text-muted leading-relaxed">{subtitle}</p>
      {bullets.length > 0 && (
        <ul className="mt-6 space-y-3">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm text-muted">
              <span
                className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-teal-bright"
                aria-hidden="true"
              />
              {bullet}
            </li>
          ))}
        </ul>
      )}
      {cta && (
        <div className="mt-6">
          <Button variant="primary" size="md" href={cta.href} pill>
            {cta.label}
          </Button>
        </div>
      )}
    </div>
  );

  const imageBlock = (
    <ImagePlaceholder
      src={imageSrc}
      alt={imageAlt}
      aspectRatio={aspectRatio}
      objectFit="cover"
    />
  );

  return (
    <section
      className={`py-16 lg:py-24 px-6 lg:px-8 ${className}`}
      aria-labelledby={sectionId}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className={`order-2 lg:order-none ${reverse ? "lg:order-2" : ""}`}>
            <div id={sectionId}>{textBlock}</div>
          </div>
          <div className={`order-1 lg:order-none ${reverse ? "lg:order-1" : ""}`}>
            {imageBlock}
          </div>
        </div>
      </div>
    </section>
  );
}
