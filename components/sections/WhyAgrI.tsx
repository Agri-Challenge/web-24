import { AlertTriangle, Lightbulb, BarChart2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function WhyAgrI() {
  return (
    <section
      id="why-agri"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="why-agri-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <SectionHeading
            title="Why AgrI Challenge?"
            subtitle="Standard AI benchmarks fail in the field. AgrI Challenge was designed to close the gap between laboratory accuracy and real-world performance."
          />
        </AnimatedSection>

        {/* Problem + Approach — side by side */}
        <AnimatedSection delay={100}>
          <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div
              className="p-6 rounded-2xl bg-[#F8FAFA] border border-[#E8EEEE]"
              style={{ boxShadow: '0 4px 24px rgba(16,36,61,0.06)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-red-50 shrink-0">
                  <AlertTriangle size={18} className="text-red-400" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-[#10243D]">The Generalization Problem</h3>
              </div>
              <p className="text-sm text-[#5A7A8A] leading-relaxed">
                Models trained on controlled laboratory datasets achieve{' '}
                <span className="font-semibold text-[#10243D]">over 99% accuracy</span>{' '}
                on benchmarks, yet drop to{' '}
                <span className="font-semibold text-red-500">54% in real farm environments</span>.
                This is not a model problem — it is a data problem.
              </p>
            </div>

            <div
              className="p-6 rounded-2xl bg-[#F8FAFA] border border-[#E8EEEE]"
              style={{ boxShadow: '0 4px 24px rgba(16,36,61,0.06)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[#1CC9A9]/10 shrink-0">
                  <Lightbulb size={18} className="text-[#1CC9A9]" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-[#10243D]">The AgrI Challenge Approach</h3>
              </div>
              <p className="text-sm text-[#5A7A8A] leading-relaxed">
                Rather than providing a fixed dataset, each team independently collects their own field data — generating authentic distributional diversity across devices, environments, and sampling strategies that mirrors real deployment conditions.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* What the data shows */}
        <AnimatedSection delay={150}>
          <div
            className="p-6 rounded-2xl border border-[#94CCC6]/30 bg-[#94CCC6]/5 flex gap-5 items-start"
            style={{ boxShadow: '0 4px 24px rgba(148,204,198,0.12)' }}
          >
            <div className="p-2.5 rounded-xl bg-[#10243D]/8 shrink-0 mt-0.5">
              <BarChart2 size={22} className="text-[#10243D]" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-semibold text-[#10243D] mb-2">What the Results Show</h3>
              <p className="text-[#5A7A8A] leading-relaxed text-sm">
                Under single-team training (TOTO), models showed a mean validation-test gap of up to{' '}
                <span className="font-semibold text-[#10243D]">16.2 percentage points</span> — a direct
                consequence of narrow data diversity. When trained collaboratively across all 12 teams (LOTO),
                that gap collapsed by{' '}
                <span className="font-semibold text-[#1CC9A9]">82–84%</span>, confirming that data diversity
                is the primary driver of robust AI generalization.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
