import { useEffect, useState } from "react";
import { navLinks } from "../../data/navigation";
import Button from "../ui/Button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-shadow duration-200 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-border shadow-sm"
          : "bg-white/80 backdrop-blur-md border-border/60"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-8 h-16 lg:h-[68px] flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a href="#" className="shrink-0" aria-label="skeftó home">
          <img
            src="/assets/brand/skefto-logo.svg"
            alt="skeftó"
            className="h-8 w-auto"
          />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-navy hover:text-teal transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" size="sm" href="#" pill>
            Login
          </Button>
          <Button variant="primary" size="sm" href="#demo" pill>
            Book a Demo
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-navy rounded-lg hover:bg-surface transition-colors"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white/95 backdrop-blur-md px-6 py-4">
          <ul className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block py-2.5 text-sm font-medium text-muted hover:text-navy"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2">
            <Button variant="outline" size="md" href="#" className="w-full" pill>
              Login
            </Button>
            <Button variant="primary" size="md" href="#demo" className="w-full" pill>
              Book a Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
