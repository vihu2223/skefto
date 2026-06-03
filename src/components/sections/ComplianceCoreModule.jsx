import { forwardRef } from "react";
import { ecosystemModules } from "../../data/ecosystem";
import SectionHeader from "../ui/SectionHeader";

const positionClasses = {
  "top-left": "lg:col-start-1 lg:row-start-1",
  "top-right": "lg:col-start-3 lg:row-start-1",
  "bottom-left": "lg:col-start-1 lg:row-start-3",
  "bottom-right": "lg:col-start-3 lg:row-start-3",
};

const linkColors = {
  incident: "text-primary",
  risk: "text-teal-bright",
  safety: "text-gold",
  planning: "text-blue-600",
};

function SatelliteCard({ module: mod }) {
  return (
    <a
      href={mod.href}
      className={`group block rounded-xl border-2 bg-white p-4 lg:p-5 shadow-[var(--shadow-card)] hover:-translate-y-1 hover:shadow-[var(--shadow-hover)] transition-all duration-200 ${mod.borderColor} ${positionClasses[mod.position]}`}
    >
      <img
        src={`/assets/icons/${mod.icon}.svg`}
        alt=""
        className="w-10 h-10 mb-3"
        aria-hidden="true"
      />
      <h4 className="text-sm font-semibold text-navy mb-1">{mod.title}</h4>
      <p className="text-xs text-muted leading-relaxed">{mod.description}</p>
      <span
        className={`inline-flex items-center gap-1 mt-3 text-xs font-semibold group-hover:gap-2 transition-all duration-200 ${linkColors[mod.id]}`}
      >
        {mod.linkLabel}
      </span>
    </a>
  );
}

function ConnectorLines() {
  const lines = [
    { path: "M300 200 L300 110 L480 110", color: "#9333EA" },
    { path: "M300 200 L300 110 L120 110", color: "#00A3C4" },
    { path: "M300 200 L300 290 L120 290", color: "#CA8A04" },
    { path: "M300 200 L300 290 L480 290", color: "#2563EB" },
  ];

  return (
    <svg
      className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid meet"
    >
      {lines.map((line) => (
        <path
          key={line.path}
          d={line.path}
          stroke={line.color}
          fill="none"
          strokeWidth="2"
          strokeOpacity="0.5"
          strokeLineCap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

const ComplianceCoreModule = forwardRef(function ComplianceCoreModule(
  { modules = ecosystemModules, className = "" },
  ref,
) {
  return (
    <section
      ref={ref}
      className={`py-20 lg:py-28 px-6 lg:px-8 bg-white ${className}`}
      aria-labelledby="ecosystem-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          id="ecosystem-heading"
          title="Compliance connected to your wider GRC platform"
          subtitle="Link compliance to risk, incidents, and safety without duplicating data."
        />

        <div className="relative max-w-4xl mx-auto">
          

          <div className="hidden lg:grid grid-cols-3 grid-rows-3 gap-6 items-center min-h-[420px]">
            {modules.map((mod) => (
              <SatelliteCard key={mod.id} module={mod} />
            ))}
            <div className="lg:col-start-2 lg:row-start-2 flex flex-col items-center justify-center z-10">
              <div className="bg-gradient-to-br from-primary-light to-white border-2 border-primary rounded-2xl px-8 py-6 text-center shadow-[var(--shadow-purple-glow)] ring-2 ring-primary/20 ring-offset-2">
                <p className="text-xl font-bold text-navy">Compliance</p>
                <p className="text-xs uppercase tracking-wider text-primary mt-1 font-semibold">
                  Skefto Core Module
                </p>
              </div>
              <p className="mt-4 text-xs text-teal-bright font-medium">Connected to</p>
            </div>
          </div>

          <div className="lg:hidden space-y-6">
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-primary-light to-white border-2 border-primary rounded-2xl px-8 py-6 text-center shadow-[var(--shadow-purple-glow)]">
                <p className="text-xl font-bold text-navy">Compliance</p>
                <p className="text-xs uppercase tracking-wider text-primary mt-1 font-semibold">
                  Skefto Core Module
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {modules.map((mod) => (
                <SatelliteCard key={mod.id} module={mod} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ComplianceCoreModule;
