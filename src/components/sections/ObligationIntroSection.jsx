export default function ObligationIntroSection() {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-8 bg-white" aria-label="Obligation tracking intro">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center">
          <div className="border-2 border-mint rounded-2xl p-8 lg:p-10 hover:shadow-[var(--shadow-teal-glow)] hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-teal leading-tight">
              Track every obligation and deadline automatically
            </h2>
          </div>

          <div className="hidden lg:block w-16 h-px bg-mint shrink-0" aria-hidden="true" />

          <div className="relative flex items-center justify-center lg:justify-end">
            <div
              className="absolute w-56 h-56 rounded-full bg-mint/50 -z-0"
              aria-hidden="true"
            />
            <div className="relative z-10 bg-white rounded-2xl border border-border p-6 lg:p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 transition-all duration-300 max-w-sm">
              <p className="text-muted leading-relaxed">
                Know what is due, who owns it, and what evidence proves it — at any moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
