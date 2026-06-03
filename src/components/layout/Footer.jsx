export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-teal text-white/70 py-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p>&copy; {year} skeftó. All rights reserved.</p>
        <nav aria-label="Footer navigation" className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors duration-200">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            Terms
          </a>
        </nav>
      </div>
    </footer>
  );
}
