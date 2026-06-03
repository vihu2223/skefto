import { faqs } from "../../data/faqs";
import SectionHeader from "../ui/SectionHeader";
import Accordion from "../ui/Accordion";
import Button from "../ui/Button";

export default function VideoFaqSection() {
  return (
    <section id="video" className="py-20 lg:py-28 px-6 lg:px-8 bg-white" aria-labelledby="video-heading">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          id="video-heading"
          title="See skeftó software in action"
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <button
              type="button"
              className="group relative w-full aspect-[16/10] rounded-2xl bg-teal overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label="Play product overview video"
            >
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.2),transparent_70%)]"
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-white group-hover:bg-primary group-hover:scale-110 transition-all duration-200">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </div>
              </div>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/60 font-medium whitespace-nowrap">
                2-minute product overview
              </span>
            </button>
            <div className="mt-6">
              <Button variant="primary" size="md" href="#demo" pill>
                Book a Demo
              </Button>
            </div>
          </div>

          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
