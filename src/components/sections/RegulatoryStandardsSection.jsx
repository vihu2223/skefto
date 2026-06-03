import { regulatoryCards, regulatoryTags } from "../../data/features";
import SectionHeader from "../ui/SectionHeader";

const cardStyles = {
  purple: {
    border: "border-primary/30",
    glow: "shadow-[var(--shadow-purple-glow)]",
    numberBg: "bg-primary-light text-primary",
    title: "text-primary",
  },
  green: {
    border: "border-green-accent/30",
    glow: "shadow-[var(--shadow-green-glow)]",
    numberBg: "bg-green-100 text-green-accent",
    title: "text-green-accent",
  },
  gold: {
    border: "border-gold/30",
    glow: "shadow-[var(--shadow-gold-glow)]",
    numberBg: "bg-yellow-100 text-gold",
    title: "text-gold",
  },
};

export default function RegulatoryStandardsSection() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-8 bg-white" aria-labelledby="regulatory-heading">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          id="regulatory-heading"
          title="Stay ahead of regulatory change, aligned to Australian standards"
          subtitle="Built around the obligations Australian regulators actually hold you to."
          wide
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {regulatoryCards.map((card) => {
            const style = cardStyles[card.color];
            return (
              <article
                key={card.number}
                className={`rounded-2xl border bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-hover ${style.border} ${style.glow}`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-4 text-lg font-bold ${style.numberBg}`}
                >
                  {card.number}
                </div>
                <h3 className={`text-base font-semibold mb-3 ${style.title}`}>{card.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{card.description}</p>
              </article>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {regulatoryTags.map((tag) => (
            <span
              key={tag}
              className="px-5 py-2 text-sm font-medium text-white bg-teal hover:bg-teal-bright hover:scale-105 rounded-full transition-all duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
