import { advisoryCards } from "../../data/faqs";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";

const titleColors = {
  teal: "text-teal-bright",
  gold: "text-gold",
  purple: "text-primary",
};

export default function AdvisorySection() {
  return (
    <section id="advisory" className="py-20 lg:py-28 px-6 lg:px-8 bg-white" aria-labelledby="advisory-heading">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          id="advisory-heading"
          title="More than software — a compliance partner"
          subtitle="Software, advisory, and training from a team with 20+ years in Australian GRC."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {advisoryCards.map((card) => (
            <article
              key={card.title}
              className={`group rounded-2xl border border-border bg-white p-8 text-center ${card.glow} hover:-translate-y-1 hover:shadow-[var(--shadow-hover)] transition-all duration-300`}
            >
              <img
                src={`/assets/icons/services/${card.icon}.svg`}
                alt=""
                className="w-14 h-14 mx-auto mb-5"
                aria-hidden="true"
              />
              <h3 className={`text-lg font-bold mb-2 ${titleColors[card.color]}`}>
                {card.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{card.description}</p>
              {card.link && (
                <a
                  href={card.href}
                  className={`inline-block mt-5 text-xs font-bold uppercase tracking-wide ${titleColors[card.color]} hover:underline hover:opacity-80 transition-all duration-200`}
                >
                  {card.link}
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline-purple" size="lg" href="#demo" pill>
            Talk to Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}
