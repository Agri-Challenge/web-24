'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'What is AgrI?', href: '#overview' },
  { label: 'Why AgrI?', href: '#why-agri' },
  { label: 'Organizers', href: '#team' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Results', href: '#results' },
  { label: 'Cite', href: '#citation' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#10243D]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.25)]'
          : 'bg-[#10243D]'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="flex items-center gap-3 group shrink-0"
          aria-label="AgrI Challenge — home"
        >
          <div className="relative w-8 h-8 shrink-0">
            <Image
              src="/logo/agriChallenge-logo.svg"
              alt="AgrI Challenge icon"
              width={32}
              height={32}
              className="transition-transform duration-200 group-hover:scale-105"
            />
          </div>
          <div className="relative h-6 w-[140px]">
            <Image
              src="/logo/agrichallenge-title-white.svg"
              alt="AgrI Challenge"
              fill
              className="object-contain object-left"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white relative group transition-colors duration-200"
            >
              {link.label}
              <span className="absolute bottom-1 left-3 right-3 h-px bg-[#1CC9A9] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </a>
          ))}
          <a
            href="#request-access"
            onClick={(e) => { e.preventDefault(); handleNavClick('#request-access'); }}
            className="ml-4 px-5 py-2 text-sm font-bold bg-[#1CC9A9] text-white rounded-lg hover:bg-[#17b396] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Request Access
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#10243D] border-t border-white/10 px-6 pb-4 pt-2">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-3 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#request-access"
              onClick={(e) => { e.preventDefault(); handleNavClick('#request-access'); }}
              className="mt-2 px-5 py-3 text-sm font-bold bg-[#1CC9A9] text-white rounded-lg hover:bg-[#17b396] text-center transition-colors duration-200"
            >
              Request Access
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
