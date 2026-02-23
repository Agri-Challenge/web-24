import { FileText, Github, ArrowUpRight, Clock } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

const links = [
  {
    icon: FileText,
    label: 'arXiv Paper',
    description: 'Read the full paper on Cross-Team Validation: A Data-Centric Framework for Evaluating Model Generalization in Collaborative Agricultural Machine Learning.',
    href: '#arxiv',
    cta: 'Read on arXiv',
    badge: 'Coming Soon',
  },
  {
    icon: Github,
    label: 'GitHub Repository',
    description: 'Explore the full codebase: data preparation scripts, CTV evaluation framework, baseline training pipelines, and reproducibility resources.',
    href: '#github',
    cta: 'View on GitHub',
    badge: 'Coming Soon',
  },
];

export default function Links() {
  return (
    <section
      id="links"
      className="py-24 lg:py-32 bg-[#F8FAFA]"
      aria-labelledby="links-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="Paper & Repository"
            subtitle="The full paper and complete codebase will be publicly available upon publication."
          />
        </AnimatedSection>

        <AnimatedSection delay={100} stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative p-8 rounded-2xl bg-white border border-[#E8EEEE] hover:border-[#94CCC6] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(16,36,61,0.12)] flex flex-col"
                  style={{ boxShadow: '0 4px 24px rgba(16,36,61,0.07)' }}
                  aria-label={`${link.label} — ${link.badge}`}
                >
                  {/* Badge */}
                  <div className="absolute top-5 right-5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F8FAFA] border border-[#E8EEEE]">
                    <Clock size={11} className="text-[#5A7A8A]" />
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-[#5A7A8A]">
                      {link.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-5 w-12 h-12 rounded-2xl bg-[#10243D] flex items-center justify-center group-hover:bg-[#1CC9A9] transition-colors duration-300">
                    <Icon size={22} className="text-white" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-[#10243D] text-lg mb-2 group-hover:text-[#1CC9A9] transition-colors duration-200">
                    {link.label}
                  </h3>
                  <p className="text-sm text-[#5A7A8A] leading-relaxed mb-6 flex-1">
                    {link.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-[#5A7A8A] group-hover:text-[#1CC9A9] transition-colors duration-200">
                    <span>{link.cta}</span>
                    <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="mt-8 text-sm text-[#5A7A8A]/70 italic">
            Links will be activated upon arXiv submission. The design is final — only the URLs need to be updated.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
