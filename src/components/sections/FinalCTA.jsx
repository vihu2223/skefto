import Button from "../ui/Button";

export default function FinalCTA() {
  return (
    <section
      id="demo"
      className="py-20 lg:py-28 px-6 lg:px-8 bg-primary"
      aria-labelledby="final-cta-heading"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          id="final-cta-heading"
          className="text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight"
        >
          See skeftó software in action
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Join organisations across Australia managing compliance with skeftó
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="white" size="lg" href="#" pill className="shadow-[var(--shadow-purple-glow)]">
            Book a Demo
          </Button>
          <Button variant="white-outline" size="lg" href="#video" pill>
            Register for a webinar
          </Button>
        </div>
      </div>
    </section>
  );
}
