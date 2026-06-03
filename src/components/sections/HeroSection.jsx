import Button from "../ui/Button";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-12 pb-8 lg:pt-20 lg:pb-12 px-6 lg:px-8 overflow-hidden" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>
              <span className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary border border-primary rounded-full">
                Compliance Management Software
              </span>
            </div>
            <h1
              id="hero-heading"
              className="text-4xl lg:text-5xl xl:text-[3.25rem] font-bold font-serif text-teal leading-[1.12] tracking-tight"
            >
              Compliance Management Software for Regulated Australian Organisations
            </h1>
            <p className="mt-5 text-lg text-muted leading-relaxed max-w-xl">
              Track obligations, manage regulatory change, and prove compliance in one platform
              built for Australian councils, care providers, and education.
            </p>
            <p className="mt-4 text-sm text-teal-bright">
              Australian-hosted data · Government-certified centres · ISO 27001 · Aligned to ISO 37301
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="lg" href="#demo" pill>
                Book a Demo
              </Button>
              <Button variant="outline-teal" size="lg" href="#demo" pill>
                Speak With a Compliance Specialist
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-mint/40 blur-sm hidden lg:block" aria-hidden="true" />
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-lg bg-pink-300/60 hidden lg:block" aria-hidden="true" />
            <div className="absolute top-1/4 -right-6 w-10 h-10 rounded-lg bg-navy border border-gold hidden lg:flex items-center justify-center" aria-hidden="true">
              <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-l-transparent border-r-transparent border-b-gold" />
            </div>
            <div className="absolute bottom-8 -left-10 w-10 h-10 rounded-lg bg-navy border border-teal-bright hidden lg:flex items-center justify-center" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-teal-bright" />
            </div>
            <div className="absolute bottom-4 -right-4 w-10 h-10 rounded-lg bg-navy border border-blue-500 hidden lg:flex items-center justify-center" aria-hidden="true">
              <div className="w-3 h-3 bg-blue-500 rotate-45" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
            </div>
            <ImagePlaceholder
              src="/assets/hero-dashboard.png"
              alt="Obligation registration dashboard"
              aspectRatio="aspect-[1425/657]"
              framed
              objectFit="cover"
              className="relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
