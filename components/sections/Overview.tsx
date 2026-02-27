import { Users, Brain } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

const phases = [
  {
    number: '01',
    title: 'Data Collection Phase',
    duration: '2 days',
    location: 'ENSA, El Harrach, Algiers',
    description:
      'Teams independently collected field images of 6 tree species at the experimental facilities of École Nationale Supérieure Agronomique. Each team had full freedom over their collection devices, sampling strategies, environmental coverage, and imaging protocols, generating authentic domain diversity.',
    accent: '#1CC9A9',
  },
  {
    number: '02',
    title: 'Model Development Phase',
    duration: '2 days',
    location: 'ENSIA, Algiers',
    description:
      'Teams preprocessed, annotated, and trained machine learning models using only their own collected data at École Nationale Supérieure d\'Intelligence Artificielle. AI specialists mentored teams on data preparation, model design, training, and evaluation.',
    accent: '#94CCC6',
  },
];

export default function Overview() {
  return (
    <section
      id="overview"
      className="py-24 lg:py-32 bg-[#F8FAFA]"
      aria-labelledby="overview-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <SectionHeading
            title="What is AgrI Challenge?"
            subtitle="A participant-led AI competition where each team independently collects their own field data — generating authentic, real-world distributional diversity."
          />
        </AnimatedSection>

        {/* Interdisciplinary requirement */}
        <AnimatedSection delay={100}>
          <div className="mb-16 p-6 rounded-2xl border border-[#E8EEEE] bg-white flex gap-5 items-start"
            style={{ boxShadow: '0 4px 24px rgba(16,36,61,0.06)' }}>
            <div className="p-2.5 rounded-xl bg-[#94CCC6]/15 shrink-0 mt-0.5">
              <Users size={22} className="text-[#10243D]" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-semibold text-[#10243D] mb-2">Interdisciplinary Teams</h3>
              <p className="text-[#5A7A8A] leading-relaxed text-sm">
                Each of the 12 teams combined students from computing backgrounds (computer science, AI, data science) with students from ecological or agronomic backgrounds (agriculture, forestry, plant sciences). This mixed composition guaranteed high-quality species labeling grounded in domain expertise while supporting effective ML system design.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Two phases timeline */}
        <AnimatedSection delay={150}>
          <h3 className="text-xl font-semibold text-[#10243D] mb-8 flex items-center gap-3">
            <Brain size={20} className="text-[#94CCC6]" strokeWidth={1.5} />
            Competition Phases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="relative p-7 rounded-2xl bg-white border border-[#E8EEEE] hover:border-[#94CCC6] transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 4px 24px rgba(16,36,61,0.07)' }}
              >
                {/* Phase number accent */}
                <div
                  className="text-[4rem] font-extrabold leading-none mb-4 select-none"
                  style={{ color: `${phase.accent}1A` }}
                  aria-hidden="true"
                >
                  {phase.number}
                </div>
                <div
                  className="absolute top-7 left-7 text-xs font-bold uppercase tracking-widest"
                  style={{ color: phase.accent }}
                >
                  Phase {phase.number}
                </div>

                <h4 className="text-lg font-bold text-[#10243D] mb-1 mt-2">
                  {phase.title}
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#F8FAFA] border border-[#E8EEEE] text-[#5A7A8A] font-medium">
                    ⏱ {phase.duration}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#F8FAFA] border border-[#E8EEEE] text-[#5A7A8A] font-medium">
                    📍 {phase.location}
                  </span>
                </div>
                <p className="text-sm text-[#5A7A8A] leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
