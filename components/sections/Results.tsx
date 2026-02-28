import { Cpu, TrendingUp, Zap } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Results() {
  return (
    <section
      id="results"
      className="py-24 lg:py-32 bg-[#F8FAFA]"
      aria-labelledby="results-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <SectionHeading
            title="Baseline Results"
            subtitle="Dual architecture baselines evaluated under TOTO and LOTO protocols, providing benchmarks for future researchers using the dataset."
          />
        </AnimatedSection>

        {/* Models */}
        <AnimatedSection delay={100}>
          <h3 className="text-lg font-semibold text-[#10243D] mb-6 flex items-center gap-2">
            <Cpu size={18} className="text-[#94CCC6]" strokeWidth={1.5} />
            Baseline Architectures
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {[
              {
                name: 'DenseNet121',
                type: 'CNN',
                params: '8M parameters',
                role: 'Efficient backbone',
                desc: 'Uses dense connections between layers for efficient feature reuse. Pretrained on ImageNet-1K.',
              },
              {
                name: 'Swin Transformer',
                type: 'Vision Transformer',
                params: '28M parameters',
                role: 'Attention-based baseline',
                desc: 'Computes self-attention within local windows with shifted windowing. Pretrained on ImageNet-1K.',
              },
            ].map((model) => (
              <div
                key={model.name}
                className="p-6 rounded-2xl bg-[#F8FAFA] border border-[#E8EEEE]"
                style={{ boxShadow: '0 4px 24px rgba(16,36,61,0.06)' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-[#10243D] text-base">{model.name}</h4>
                    <span className="text-xs text-[#5A7A8A]">{model.type}</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#94CCC6]/15 border border-[#94CCC6]/30 text-[#10243D] font-medium">
                    {model.params}
                  </span>
                </div>
                <p className="text-sm text-[#5A7A8A] leading-relaxed">{model.desc}</p>
                <div className="mt-3 text-xs text-[#1CC9A9] font-medium">
                  {model.role}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Training config note */}
        <AnimatedSection delay={120}>
          <div className="mb-16 p-4 rounded-xl bg-[#10243D]/5 border border-[#10243D]/10 text-xs text-[#5A7A8A] leading-relaxed font-mono">
            Training: AdamW (lr=1e-4, wd=1e-4) · Cosine annealing · Batch 32 · 20 epochs · 224×224px input · NVIDIA H100 NVL GPU
          </div>
        </AnimatedSection>

        {/* TOTO Results */}
        <AnimatedSection delay={150}>
          <h3 className="text-lg font-semibold text-[#10243D] mb-6 flex items-center gap-2">
            <TrendingUp size={18} className="text-[#94CCC6]" strokeWidth={1.5} />
            TOTO Protocol — Validation vs. Test Gap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {[
              {
                model: 'DenseNet121',
                valAcc: '97.40%',
                testAcc: '81.19%',
                gap: '16.20%',
                color: '#10243D',
              },
              {
                model: 'Swin Transformer',
                valAcc: '98.59%',
                testAcc: '87.21%',
                gap: '11.37%',
                color: '#1CC9A9',
              },
            ].map((r) => (
              <div
                key={r.model}
                className="p-6 rounded-2xl bg-white border border-[#E8EEEE]"
                style={{ boxShadow: '0 4px 24px rgba(16,36,61,0.07)' }}
              >
                <h4 className="font-bold text-[#10243D] mb-5">{r.model}</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 rounded-xl bg-[#F8FAFA]">
                    <div className="text-lg font-extrabold text-[#10243D] font-mono">{r.valAcc}</div>
                    <div className="text-xs text-[#5A7A8A] mt-1">Val Accuracy</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-[#F8FAFA]">
                    <div className="text-lg font-extrabold text-[#1CC9A9] font-mono">{r.testAcc}</div>
                    <div className="text-xs text-[#5A7A8A] mt-1">Test Accuracy</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-red-50">
                    <div className="text-lg font-extrabold text-red-500 font-mono">−{r.gap}</div>
                    <div className="text-xs text-[#5A7A8A] mt-1">Val–Test Gap</div>
                  </div>
                </div>
                <p className="text-xs text-[#5A7A8A] mt-4 leading-relaxed">
                  The gap between validation and test accuracy emerged by epoch 5 and remained stable throughout training, indicating distributional shift rather than overfitting.
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* LOTO Results — Improvement */}
        <AnimatedSection delay={200}>
          <h3 className="text-lg font-semibold text-[#10243D] mb-6 flex items-center gap-2 mt-10">
            <Zap size={18} className="text-[#1CC9A9]" strokeWidth={1.5} />
            LOTO Protocol — Collaborative Training Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {[
              {
                model: 'DenseNet121',
                totoTest: '81.19%',
                lotoTest: '95.31%',
                improvement: '+14.12pp',
                gapBefore: '16.20%',
                gapAfter: '2.82%',
                gapReduction: '−82%',
                varReduction: '−40%',
              },
              {
                model: 'Swin Transformer',
                totoTest: '87.21%',
                lotoTest: '97.04%',
                improvement: '+9.83pp',
                gapBefore: '11.37%',
                gapAfter: '1.78%',
                gapReduction: '−84%',
                varReduction: '−54%',
              },
            ].map((r) => (
              <div
                key={r.model}
                className="p-6 rounded-2xl bg-white border-2 border-[#1CC9A9]/20"
                style={{ boxShadow: '0 4px 24px rgba(28,201,169,0.08)' }}
              >
                <h4 className="font-bold text-[#10243D] mb-5">{r.model}</h4>
                {/* Test accuracy before → after */}
                <div className="flex items-center gap-3 mb-5 p-4 rounded-xl bg-[#F8FAFA]">
                  <div className="text-center flex-1">
                    <div className="text-xs text-[#5A7A8A] mb-1 uppercase tracking-wide">TOTO</div>
                    <div className="text-xl font-extrabold text-[#5A7A8A] font-mono">{r.totoTest}</div>
                  </div>
                  <div className="text-[#1CC9A9] font-bold text-lg">→</div>
                  <div className="text-center flex-1">
                    <div className="text-xs text-[#5A7A8A] mb-1 uppercase tracking-wide">LOTO</div>
                    <div className="text-xl font-extrabold text-[#1CC9A9] font-mono">{r.lotoTest}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-[#5A7A8A] mb-1 uppercase tracking-wide">Gain</div>
                    <div className="text-sm font-bold text-[#1CC9A9]">{r.improvement}</div>
                  </div>
                </div>
                {/* Gap reduction */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center p-2.5 rounded-lg bg-red-50">
                    <div className="text-sm font-bold text-red-400 font-mono">{r.gapBefore}</div>
                    <div className="text-[10px] text-[#5A7A8A]">Gap (TOTO)</div>
                  </div>
                  <div className="text-center p-2.5 rounded-lg bg-[#1CC9A9]/10">
                    <div className="text-sm font-bold text-[#1CC9A9] font-mono">{r.gapAfter}</div>
                    <div className="text-[10px] text-[#5A7A8A]">Gap (LOTO)</div>
                  </div>
                  <div className="text-center p-2.5 rounded-lg bg-[#1CC9A9]/15">
                    <div className="text-sm font-bold text-[#1CC9A9] font-mono">{r.gapReduction}</div>
                    <div className="text-[10px] text-[#5A7A8A]">Gap reduction</div>
                  </div>
                </div>
                <div className="mt-3 text-xs text-[#5A7A8A] text-center">
                  Performance variance reduced by{' '}
                  <span className="font-semibold text-[#1CC9A9]">{r.varReduction}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>


      </div>
    </section>
  );
}
