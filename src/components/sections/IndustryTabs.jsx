import { useState } from "react";
import { industryTabs } from "../../data/industries";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";

function ProgressVisual({ stats, statHighlight }) {
  return (
    <div className="rounded-2xl bg-white p-6 lg:p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 transition-all duration-300">
      <p className="text-xs uppercase tracking-wider text-teal-bright font-semibold">
        {statHighlight.label}
      </p>
      <p className="text-4xl font-bold text-navy mt-1">{statHighlight.value}</p>
      <p className="text-sm text-muted mt-1">{statHighlight.description}</p>
      <div className="mt-6 space-y-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted">{stat.label}</span>
              <span className="font-medium text-navy">{stat.value}%</span>
            </div>
            <div className="h-2 bg-surface rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-bright rounded-full transition-all duration-500"
                style={{ width: `${stat.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function IndustryTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industryTabs[activeIndex];

  return (
    <section id="industries" className="py-20 lg:py-28 px-6 lg:px-8 bg-white" aria-labelledby="industry-heading">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          id="industry-heading"
          title="Compliance built for your sector"
          subtitle="Preconfigured for the obligations and standards that apply to you."
        />

        <div className="bg-surface-blue rounded-t-3xl lg:rounded-t-[2rem] pt-8 lg:pt-10 px-6 lg:px-10 pb-10 lg:pb-14">
          {/* Desktop tabs */}
          <div className="hidden md:flex justify-center gap-3 mb-10 flex-wrap" role="tablist">
            {industryTabs.map((tab, index) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                  activeIndex === index
                    ? "bg-primary text-white border-2 border-primary shadow-[0_0_0_2px_white,0_0_0_4px_#9333EA]"
                    : "bg-white text-primary border-2 border-primary hover:bg-primary-light"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Mobile accordion */}
          <div className="md:hidden space-y-2 mb-6">
            {industryTabs.map((tab, index) => (
              <button
                key={tab.id}
                type="button"
                className={`w-full px-4 py-3 text-left text-sm font-medium rounded-full border-2 transition-all hover:scale-[1.01] active:scale-[0.99] ${
                  activeIndex === index
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-primary border-primary hover:bg-primary-light"
                }`}
                aria-expanded={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            id={`panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-teal mb-4">
                  {active.title}
                </h3>
                <p className="text-muted leading-relaxed">{active.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {active.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                      <span className="text-teal-bright shrink-0 mt-1" aria-hidden="true">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <ProgressVisual stats={active.stats} statHighlight={active.statHighlight} />
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button variant="primary" size="md" href="#demo" pill>
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
