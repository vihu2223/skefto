import { testimonials } from "../../data/testimonials";
import SectionHeader from "../ui/SectionHeader";

const shapes = [
  { className: "top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[40px] border-r-[40px] border-b-[60px] border-l-transparent border-r-transparent border-b-yellow-200/60", type: "triangle" },
  { className: "bottom-8 left-8 w-16 h-16 rounded-lg bg-pink-200/50", type: "square" },
  { className: "bottom-4 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-mint/50", type: "circle" },
  { className: "top-1/3 right-8 w-14 h-14 bg-blue-200/50 rotate-45", type: "hex" },
];

export default function TestimonialSection() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-8 bg-white relative overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {shapes.map((shape) => (
          <div key={shape.type} className={`absolute ${shape.className}`} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          id="testimonials-heading"
          title="Trusted by organisations that take compliance seriously"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((item) => (
            <blockquote
              key={item.author}
              className="rounded-2xl border border-border bg-white p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-5xl text-teal-bright leading-none font-serif" aria-hidden="true">
                &ldquo;
              </span>
              <p className="mt-2 text-sm text-teal leading-relaxed">{item.quote}</p>
              <footer className="mt-6 text-right">
                <cite className="not-italic">
                  <p className="text-sm font-semibold text-navy">{item.author}, {item.role}</p>
                  <p className="text-xs text-muted mt-0.5">{item.organisation}</p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
