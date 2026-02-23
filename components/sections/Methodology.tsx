import { GitBranch, Layers, AlertCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Methodology() {
  return (
    <section
      id="methodology"
      className="py-24 lg:py-32 bg-[#F8FAFA]"
      aria-labelledby="methodology-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <SectionHeading
            title="Cross-Team Validation"
            subtitle="A novel evaluation paradigm that treats each team's independently collected dataset as a distinct domain, revealing how models actually generalize."
          />
        </AnimatedSection>

        {/* CTV explanation */}
        <AnimatedSection delay={100}>
          <div className="mb-16 p-7 rounded-2xl bg-white border border-[#E8EEEE]"
            style={{ boxShadow: '0 4px 24px rgba(16,36,61,0.07)' }}>
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[#10243D]/5 shrink-0">
                <GitBranch size={22} className="text-[#10243D]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-[#10243D] mb-3 text-lg">What is CTV?</h3>
                <p className="text-[#5A7A8A] leading-relaxed mb-3">
                  Cross-Team Validation (CTV) treats datasets collected by different teams as distinct domains for training and testing. Unlike traditional cross-validation that splits data randomly, CTV preserves natural domain boundaries created by different collection methodologies, environmental contexts, and device characteristics.
                </p>
                <p className="text-[#5A7A8A] leading-relaxed">
                  Each team&apos;s dataset represents a unique combination of factors, capturing authentic inter-domain variation that simulates real-world deployment scenarios.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* TOTO vs LOTO cards */}
        <AnimatedSection delay={150} stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

            {/* TOTO */}
            <div
              className="rounded-2xl bg-white border-2 border-[#10243D]/10 hover:border-[#10243D]/25 p-7 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 4px 24px rgba(16,36,61,0.07)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#10243D] text-white">
                  <Layers size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#5A7A8A]">Protocol A</div>
                  <h3 className="font-bold text-[#10243D] text-lg leading-tight">TOTO</h3>
                </div>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#94CCC6] mb-3">
                Train-on-One-Team-Only
              </p>
              <p className="text-[#5A7A8A] text-sm leading-relaxed mb-6">
                A model is trained on a single team&apos;s collected data (70% train / 30% val split) and then evaluated on every other team&apos;s data independently. Measures single-source generalization.
              </p>

              {/* Visual diagram */}
              <div className="rounded-xl bg-[#F8FAFA] border border-[#E8EEEE] p-4">
                <div className="text-xs font-mono text-[#5A7A8A] mb-3">For each team i:</div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 rounded bg-[#10243D] text-white font-mono text-[10px]">Train</span>
                    <span className="text-[#5A7A8A]">→ Team i data (70%)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 rounded bg-[#94CCC6]/30 text-[#10243D] font-mono text-[10px]">Val</span>
                    <span className="text-[#5A7A8A]">→ Team i data (30%)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 rounded bg-[#1CC9A9]/20 text-[#10243D] font-mono text-[10px]">Test</span>
                    <span className="text-[#5A7A8A]">→ All other teams j ≠ i</span>
                  </div>
                </div>
              </div>
            </div>

            {/* LOTO */}
            <div
              className="rounded-2xl bg-white border-2 border-[#1CC9A9]/20 hover:border-[#1CC9A9]/40 p-7 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 4px 24px rgba(28,201,169,0.08)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#1CC9A9] text-white">
                  <Layers size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#5A7A8A]">Protocol B</div>
                  <h3 className="font-bold text-[#10243D] text-lg leading-tight">LOTO</h3>
                </div>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1CC9A9] mb-3">
                Leave-One-Team-Out
              </p>
              <p className="text-[#5A7A8A] text-sm leading-relaxed mb-6">
                A model is trained on the combined data of all teams except one, then evaluated on the held-out team&apos;s data. Measures collaborative multi-source generalization.
              </p>

              {/* Visual diagram */}
              <div className="rounded-xl bg-[#F8FAFA] border border-[#E8EEEE] p-4">
                <div className="text-xs font-mono text-[#5A7A8A] mb-3">For each team i:</div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 rounded bg-[#10243D] text-white font-mono text-[10px]">Train</span>
                    <span className="text-[#5A7A8A]">→ All teams except i (70%)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 rounded bg-[#94CCC6]/30 text-[#10243D] font-mono text-[10px]">Val</span>
                    <span className="text-[#5A7A8A]">→ 30% of training set</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 rounded bg-[#1CC9A9]/20 text-[#10243D] font-mono text-[10px]">Test</span>
                    <span className="text-[#5A7A8A]">→ Held-out team i</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Why CTV matters */}
        <AnimatedSection delay={200}>
          <div
            className="p-7 rounded-2xl border border-[#E8EEEE] bg-white flex gap-5 items-start"
            style={{ boxShadow: '0 4px 24px rgba(16,36,61,0.06)' }}
          >
            <div className="p-2.5 rounded-xl bg-amber-50 shrink-0 mt-0.5">
              <AlertCircle size={22} className="text-amber-500" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-semibold text-[#10243D] mb-3">Why Standard Validation Is Not Enough</h3>
              <p className="text-[#5A7A8A] leading-relaxed text-sm mb-4">
                Standard cross-validation with random data splits does not expose a model&apos;s true generalization ability across genuinely different domains. CTV specifically reveals the validation–test gap that standard metrics miss.
              </p>
              <blockquote className="border-l-4 border-[#1CC9A9] pl-4 italic text-sm text-[#5A7A8A]">
                &ldquo;Validation accuracy was remarkably stable (≈98%) across all LOTO folds, while test accuracy varied by over 11 percentage points, confirming that validation accuracy alone is not a reliable proxy for real-world generalization.&rdquo;
              </blockquote>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
