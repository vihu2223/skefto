import { caseStudy } from "../../data/testimonials";
import Button from "../ui/Button";

const steps = [
  { label: "Challenge", value: caseStudy.challenge, color: "text-gold" },
  { label: "Solution", value: caseStudy.solution, color: "text-teal-bright" },
  { label: "Result", value: caseStudy.result, color: "text-primary" },
];

export default function CaseStudySection() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-8 bg-surface" aria-labelledby="case-study-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
            Case Study
          </p>
          <h2
            id="case-study-heading"
            className="text-3xl lg:text-4xl font-serif font-bold text-teal tracking-tight"
          >
            {caseStudy.headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={step.label} className="relative">
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-6 -right-3 text-muted/30 z-10"
                  aria-hidden="true"
                >
                  →
                </div>
              )}
              <div className="rounded-2xl border border-border bg-white p-6 h-full shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 transition-all duration-300">
                <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${step.color}`}>
                  {step.label}
                </p>
                <p className="text-sm text-muted leading-relaxed">{step.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 p-6 rounded-2xl border-2 border-teal-bright/20 bg-white">
            <div className="px-5 py-3 rounded-full bg-surface border border-border text-sm font-medium text-muted">
              Manual Processes
            </div>
            <svg width="32" height="16" viewBox="0 0 32 16" fill="none" className="text-primary shrink-0" aria-hidden="true">
              <path d="M0 8h28M22 3l6 5-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="px-5 py-3 rounded-full bg-primary text-white text-sm font-semibold shadow-[var(--shadow-purple-glow)]">
              skeftó
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button variant="primary" size="md" href="#demo" pill>
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
