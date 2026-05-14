"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-ink/80 backdrop-blur-xl border-b border-white/5"
          : "py-7"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-800 text-lg tracking-tight text-paper"
        >
          em<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm text-paper/60 hover:text-accent transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:emzzyoluwole@gmail.com"
          className="hidden md:inline-flex items-center gap-2 bg-accent text-ink font-display font-700 text-sm px-5 py-2.5 rounded-full hover:bg-accent/80 transition-colors duration-200"
        >
          Hire me
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-paper"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-ink/95 backdrop-blur-xl border-b border-white/5 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl font-600 text-paper/80 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:emzzyoluwole@gmail.com"
            className="inline-flex w-fit items-center gap-2 bg-accent text-ink font-display font-700 text-sm px-5 py-2.5 rounded-full"
          >
            Hire me
          </a>
        </div>
      )}
    </header>
  );
}
