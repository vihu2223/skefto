import { trustLogos } from "../../data/faqs";

export default function TrustBar() {
  return (
    <section className="bg-white py-10 lg:py-14 px-6 lg:px-8 border-b border-border/50" aria-label="Trusted organisations">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <p className="text-xs lg:text-sm font-semibold uppercase tracking-wider text-muted text-center lg:text-left lg:max-w-xs">
            Trusted by Australian councils, care providers, and education institutions
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 flex-1">
            {trustLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-8 lg:h-10 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>

          <div className="shrink-0 px-5 py-4 rounded-2xl bg-primary-light border border-primary/10 text-center lg:text-left mx-auto lg:mx-0">
            <p className="text-3xl font-serif font-bold text-primary">20+</p>
            <p className="text-xs text-muted mt-1 leading-snug max-w-[140px]">
              years supporting regulated Australian organisations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
