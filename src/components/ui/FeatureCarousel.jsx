import { useRef, useState, useEffect, useCallback } from "react";
import { carouselCards } from "../../data/features";

const iconMap = {
  calendar: "/assets/icons/calendar.svg",
  document: "/assets/icons/document.svg",
  audit: "/assets/icons/audit.svg",
  workflows: "/assets/icons/workflows.svg",
  reporting: "/assets/icons/reporting.svg",
};

const GAP_PX = 24;

export default function FeatureCarousel({ selectedIndex, onSelect }) {
  const scrollRef = useRef(null);
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(33);
  const [isDraggingState, setIsDraggingState] = useState(false);

  const measureLayout = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const progress = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
    setScrollProgress(progress);

    const card = el.firstElementChild;
    const cardWidth = card?.offsetWidth ?? 1;
    const thumbPct = el.scrollWidth > 0 ? (el.clientWidth / el.scrollWidth) * 100 : 100;
    setThumbWidth(Math.min(100, Math.max(thumbPct, 20)));

    setActiveIndex(
      Math.min(carouselCards.length - 1, Math.round(el.scrollLeft / (cardWidth + GAP_PX)))
    );
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    measureLayout();
    el.addEventListener("scroll", measureLayout, { passive: true });
    window.addEventListener("resize", measureLayout);

    const ro = new ResizeObserver(measureLayout);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", measureLayout);
      window.removeEventListener("resize", measureLayout);
      ro.disconnect();
    };
  }, [measureLayout]);

  // Click a card: notify parent + smooth-scroll it into center view
  const handleCardClick = useCallback(
    (index) => {
      onSelect(index);
      const el = scrollRef.current;
      if (!el) return;
      const card = el.children[index];
      if (!card) return;
      const scrollTarget =
        card.offsetLeft - el.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
      el.scrollTo({ left: Math.max(0, scrollTarget), behavior: "smooth" });
    },
    [onSelect]
  );

  // ── Pointer events for the scrollbar track ────────────────────────────────
  const handleTrackPointerDown = useCallback(
    (e) => {
      const el = scrollRef.current;
      const track = trackRef.current;
      if (!el || !track) return;

      e.preventDefault();

      const trackRect = track.getBoundingClientRect();
      const clickX = e.clientX - trackRect.left;
      const trackWidth = trackRect.width;
      const thumbWidthPx = (thumbWidth / 100) * trackWidth;
      const thumbLeftPx = ((scrollProgress * (100 - thumbWidth)) / 100) * trackWidth;

      if (clickX >= thumbLeftPx && clickX <= thumbLeftPx + thumbWidthPx) {
        isDragging.current = true;
        setIsDraggingState(true);
        dragStartX.current = e.clientX;
        dragStartScrollLeft.current = el.scrollLeft;
        track.setPointerCapture(e.pointerId);
      } else {
        const maxScroll = el.scrollWidth - el.clientWidth;
        const ratio = (clickX - thumbWidthPx / 2) / (trackWidth - thumbWidthPx);
        el.scrollLeft = Math.max(0, Math.min(maxScroll, ratio * maxScroll));
      }
    },
    [scrollProgress, thumbWidth]
  );

  const handleTrackPointerMove = useCallback(
    (e) => {
      if (!isDragging.current) return;
      const el = scrollRef.current;
      const track = trackRef.current;
      if (!el || !track) return;

      const trackWidth = track.getBoundingClientRect().width;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const scrollableTrack = trackWidth - (thumbWidth / 100) * trackWidth;
      const dx = e.clientX - dragStartX.current;
      const scrollDelta = scrollableTrack > 0 ? (dx / scrollableTrack) * maxScroll : 0;

      el.scrollLeft = Math.max(0, Math.min(maxScroll, dragStartScrollLeft.current + scrollDelta));
    },
    [thumbWidth]
  );

  const handleTrackPointerUp = useCallback(() => {
    isDragging.current = false;
    setIsDraggingState(false);
  }, []);

  const thumbLeft = scrollProgress * (100 - thumbWidth);

  return (
    <div>
      {/* Card strip */}
      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-6 overflow-x-auto pt-4 pb-4 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0"
        role="region"
        aria-label="Product features carousel"
        tabIndex={0}
      >
        {carouselCards.map((card, index) => {
          const isSelected = index === selectedIndex;
          const isVisible = index === activeIndex;

          return (
            <article
              key={card.title}
              role="button"
              tabIndex={0}
              aria-pressed={isSelected}
              onClick={() => handleCardClick(index)}
              onKeyDown={(e) => e.key === "Enter" && handleCardClick(index)}
              className={`snap-start shrink-0 min-w-0 flex-[0_0_calc(100%-1.5rem)] md:flex-[0_0_calc((100%-3rem)/3)] rounded-2xl bg-white p-6 transition-all duration-300 cursor-pointer select-none ${isSelected
                  ? "border-[3px] border-primary shadow-[var(--shadow-purple-glow)] -translate-y-1.5"
                  : isVisible && !isSelected
                    ? "border border-primary/30 shadow-[var(--shadow-card)] hover:border-primary/50 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
                    : "border border-border shadow-[var(--shadow-card)] hover:border-primary/40 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
                }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={iconMap[card.icon]}
                  alt=""
                  className={`w-10 h-10 shrink-0 transition-all duration-300 ${isSelected ? "scale-110" : ""
                    }`}
                  aria-hidden="true"
                />
                <h3
                  className={`text-base font-serif font-bold leading-snug transition-colors duration-200 ${isSelected ? "text-primary" : "text-teal"
                    }`}
                >
                  {card.title}
                </h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">{card.description}</p>

              {/* Active indicator dot */}
              {isSelected && (
                <div className="mt-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  <span className="text-xs font-semibold text-primary">Selected</span>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* Interactive scrollbar track */}
      <div
        ref={trackRef}
        role="scrollbar"
        aria-label="Scroll carousel"
        aria-valuenow={Math.round(scrollProgress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-orientation="horizontal"
        tabIndex={0}
        className={`mt-5 h-2.5 rounded-full bg-surface border border-border overflow-hidden w-full touch-none select-none ${isDraggingState ? "cursor-grabbing" : "cursor-grab"
          }`}
        onPointerDown={handleTrackPointerDown}
        onPointerMove={handleTrackPointerMove}
        onPointerUp={handleTrackPointerUp}
        onPointerCancel={handleTrackPointerUp}
      >
        <div
          className={`h-full rounded-full ${isDraggingState ? "bg-primary" : "bg-primary/60"}`}
          style={{
            width: `${thumbWidth}%`,
            marginLeft: `${thumbLeft}%`,
            transition: isDraggingState
              ? "none"
              : "margin-left 0.15s ease-out, background-color 0.2s ease",
          }}
        />
      </div>
    </div>
  );
}
