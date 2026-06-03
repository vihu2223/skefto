import { useState } from "react";

export default function Accordion({ items, className = "" }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="bg-white rounded-xl border border-border overflow-hidden shadow-[var(--shadow-card)] hover:shadow-md transition-shadow duration-200"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-teal hover:bg-surface transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="text-sm lg:text-base">{item.question}</span>
              <span
                className={`shrink-0 text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 8l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm text-muted leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
