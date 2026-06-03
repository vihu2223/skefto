import { useState } from "react";
import { metrics, carouselCards } from "../../data/features";
import SectionHeader from "../ui/SectionHeader";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import FeatureCarousel from "../ui/FeatureCarousel";
import Button from "../ui/Button";

const metricColors = {
  primary: "text-primary",
  blue: "text-blue-600",
};

// Map each carousel card to a preview image (falls back to the register image)
const cardImageMap = {
  calendar: "/assets/compliance-calendar.png",
  document: "/assets/obligations-register.png",
  audit: "/assets/obligations-register.png",
  workflows: "/assets/obligations-feature.png",
  reporting: "/assets/obligations-feature.png",
};

export default function FeaturesOverview() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = carouselCards[selectedIndex];

  return (
    <section id="features" className="py-20 lg:py-28 px-6 lg:px-8 bg-white" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          id="features-heading"
          title="Everything you need to manage compliance in one place"
          subtitle="Replace spreadsheets and scattered registers with a single, auditable source of truth."
          wide
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 max-w-2xl mx-auto">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className={`text-4xl font-serif font-bold ${metricColors[metric.color]}`}>
                {metric.value}
              </p>
              <p className="text-sm text-navy mt-1 font-medium">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Dynamic preview panel — updates when a carousel card is selected */}
        <div
          key={selected.icon}
          className="rounded-2xl border border-border bg-white p-6 lg:p-10 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] hover:-translate-y-0.5 transition-all duration-300 mb-12 overflow-hidden"
          style={{ animation: "fadeSlideIn 0.25s ease-out" }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                  <img
                    src={`/assets/icons/${selected.icon}.svg`}
                    alt=""
                    className="w-6 h-6 brightness-0 invert"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl lg:text-2xl font-serif font-bold text-navy transition-all duration-300">
                  {selected.title}
                </h3>
              </div>
              <p className="text-muted leading-relaxed transition-all duration-300">
                {selected.description}
              </p>

              {/* Card selector dots */}
              <div className="flex items-center gap-2 mt-6" aria-label="Select feature">
                {carouselCards.map((card, i) => (
                  <button
                    key={card.title}
                    type="button"
                    aria-label={`View ${card.title}`}
                    aria-pressed={i === selectedIndex}
                    onClick={() => setSelectedIndex(i)}
                    className={`rounded-full transition-all duration-200 ${
                      i === selectedIndex
                        ? "w-6 h-2 bg-primary"
                        : "w-2 h-2 bg-border hover:bg-primary/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="lg:-mr-8">
              <ImagePlaceholder
                src={cardImageMap[selected.icon]}
                alt={`${selected.title} dashboard`}
                aspectRatio="aspect-[920/420]"
                framed
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <FeatureCarousel selectedIndex={selectedIndex} onSelect={setSelectedIndex} />

        <div className="mt-12 text-center">
          <Button variant="primary" size="lg" href="#demo" pill>
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
