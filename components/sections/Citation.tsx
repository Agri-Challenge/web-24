'use client';

import { useState } from 'react';
import { Copy, Check, FileText, Github, ArrowUpRight, Clock } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

const bibtex = `@article{agrichallenge2026,
  title   = {Cross-Team Validation: A Data-Centric Framework for Evaluating
             Model Generalization in Collaborative Agricultural
             Machine Learning},
  author  = {[Author Names]},
  journal = {arXiv preprint},
  year    = {2026},
  url     = {https://arxiv.org/abs/XXXX.XXXXX}
}`;

const apa = `[Author Names]. (2026). Cross-Team Validation: A Data-Centric Framework for Evaluating Model Generalization in Collaborative Agricultural Machine Learning. arXiv preprint. https://arxiv.org/abs/XXXX.XXXXX`;

export default function Citation() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
      const el = document.createElement('textarea');
      el.value = bibtex;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="citation"
      className="py-24 lg:py-32 bg-[#F8FAFA]"
      aria-labelledby="citation-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="Cite This Work"
            subtitle="If you use the AgrI Challenge dataset or the Cross-Team Validation framework in your research, please cite our paper."
          />
        </AnimatedSection>

        <div className="max-w-3xl">
          {/* Paper info card */}
          <AnimatedSection delay={100}>
            <div
              className="mb-6 p-6 rounded-2xl bg-[#F8FAFA] border border-[#E8EEEE]"
              style={{ boxShadow: '0 4px 24px rgba(16,36,61,0.06)' }}
            >
              <h3 className="font-bold text-[#10243D] text-base leading-snug mb-2">
                Cross-Team Validation: A Data-Centric Framework for Evaluating Model Generalization in Collaborative Agricultural Machine Learning
              </h3>
              <p className="text-sm text-[#5A7A8A] mb-2">
                [Author Names] · 2026 · arXiv preprint
              </p>
              <a
                href="#arxiv"
                className="inline-flex items-center gap-1.5 text-sm text-[#1CC9A9] font-medium hover:underline"
              >
                arXiv:XXXX.XXXXX
                <span className="text-[#5A7A8A] text-xs">(link available upon publication)</span>
              </a>
            </div>
          </AnimatedSection>

          {/* BibTeX block */}
          <AnimatedSection delay={150}>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#5A7A8A]">
                  BibTeX
                </span>
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    copied
                      ? 'bg-[#1CC9A9]/15 text-[#1CC9A9]'
                      : 'bg-[#10243D]/5 text-[#5A7A8A] hover:bg-[#1CC9A9]/10 hover:text-[#1CC9A9]'
                  }`}
                  aria-label="Copy BibTeX to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={13} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <div className="bibtex-block">
                {bibtex}
              </div>
            </div>
          </AnimatedSection>

          {/* APA citation */}
          <AnimatedSection delay={200}>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#5A7A8A] block mb-2">
                APA Format
              </span>
              <div
                className="p-5 rounded-xl bg-[#F8FAFA] border border-[#E8EEEE] text-sm text-[#5A7A8A] leading-relaxed"
                style={{ boxShadow: '0 2px 12px rgba(16,36,61,0.04)' }}
              >
                {apa}
              </div>
            </div>
          </AnimatedSection>

          {/* Note */}
          <AnimatedSection delay={250}>
            <p className="mt-5 text-xs text-[#5A7A8A]/70 italic">
              Author names and arXiv ID will be updated upon paper publication.
            </p>
          </AnimatedSection>

          {/* Paper & Repository links */}
          <AnimatedSection delay={300}>
            <div className="mt-10 pt-8 border-t border-[#E8EEEE]">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#5A7A8A] mb-5">
                Paper &amp; Repository
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: FileText,
                    label: 'arXiv Paper',
                    desc: 'Full paper with methodology, results, and supplementary material.',
                    href: '#arxiv',
                    cta: 'Read on arXiv',
                  },
                  {
                    icon: Github,
                    label: 'GitHub Repository',
                    desc: 'Data preparation scripts, CTV framework, and baseline training code.',
                    href: '#github',
                    cta: 'View on GitHub',
                  },
                ].map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="group flex items-start gap-4 p-5 rounded-xl bg-[#F8FAFA] border border-[#E8EEEE] hover:border-[#94CCC6] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(16,36,61,0.10)]"
                      aria-label={`${link.label} — available upon publication`}
                    >
                      <div className="p-2 rounded-lg bg-[#10243D] group-hover:bg-[#1CC9A9] transition-colors duration-200 shrink-0">
                        <Icon size={16} className="text-white" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-semibold text-sm text-[#10243D] group-hover:text-[#1CC9A9] transition-colors duration-200">
                            {link.label}
                          </span>
                          <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-[#5A7A8A] shrink-0">
                            <Clock size={10} />
                            Soon
                          </span>
                        </div>
                        <p className="text-xs text-[#5A7A8A] leading-relaxed mb-2">{link.desc}</p>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#5A7A8A] group-hover:text-[#1CC9A9] transition-colors duration-200">
                          {link.cta}
                          <ArrowUpRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
