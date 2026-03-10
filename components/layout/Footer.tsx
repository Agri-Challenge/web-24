import Image from 'next/image';
import { withBasePath } from '@/lib/basePath';

const quickLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Dataset', href: '#dataset' },
  { label: 'Results', href: '#results' },
  { label: 'Cite', href: '#citation' },
  { label: 'Contact', href: '#team' },
];

const externalLinks = [
  { label: 'arXiv Paper', href: 'https://arxiv.org/abs/2603.07356' },
  { label: 'GitHub Repository', href: 'https://github.com/Agri-Challenge/agri-challenge-scripts-2024' },
];

export default function Footer() {
  return (
    <footer className="bg-[#10243D]" aria-label="Site footer">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={withBasePath("/logo/agriChallenge-logo.svg")}
                alt="AgrI Challenge icon"
                width={32}
                height={32}
              />
              <div className="relative h-6 w-[140px]">
                <Image
                  src={withBasePath("/logo/agrichallenge-title-white.svg")}
                  alt="AgrI Challenge"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              A data-centric competition framework for agricultural machine learning.
              Presented by ENSA &amp; ENSIA, Algiers, Algeria.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#94CCC6] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Resources
            </h3>
            <ul className="flex flex-col gap-2 mb-6">
              {externalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#94CCC6] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {['ENSA', 'ENSIA'].map((inst) => (
                <span
                  key={inst}
                  className="text-xs px-2.5 py-1 rounded-full border border-white/20 text-white/50"
                >
                  {inst}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © 2026 AgrI Challenge. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            An academic initiative by ENSA &amp; ENSIA, Algiers, Algeria
          </p>
        </div>
      </div>
    </footer>
  );
}
