"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Ver Cardápio", href: "#cardapio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-opaque py-3" : "py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="relative">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-neon-red transition-colors duration-300">
              Os Brothers
            </span>
            <span className="block text-[10px] sm:text-xs tracking-[0.3em] uppercase text-neon-yellow/80 font-medium">
              Pizzaria & Esfiharia
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-neon-red to-neon-orange group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#cardapio"
            className="btn-primary px-6 py-2.5 rounded-full text-sm font-semibold text-white relative z-10"
          >
            <span className="relative z-10">Ver Cardápio</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2 hover:text-neon-red transition-colors"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 space-y-4 bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg text-zinc-300 hover:text-neon-red transition-colors duration-300 py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cardapio"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary block text-center px-6 py-3 rounded-full text-sm font-semibold text-white mt-4"
          >
            <span className="relative z-10">Ver Cardápio</span>
          </a>
        </div>
      </div>
    </header>
  );
}
