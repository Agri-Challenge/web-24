import Image from 'next/image';
import { Mail, Users } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

const institutions = [
  {
    abbreviation: 'ENSA',
    fullName: 'École Nationale Supérieure Agronomique',
    role: 'Field data collection host, Data Collection Phase',
    description:
      'A long-established agronomic institution in Algeria, founded in 1905. The experimental and teaching facilities at ENSA, El Harrach, provided access to representative agro-ecosystems and well-maintained plant collections.',
    location: 'El Harrach, Algiers, Algeria',
    logo: '/logo/ensa_logo.jpg',
  },
  {
    abbreviation: 'ENSIA',
    fullName: 'École Nationale Supérieure d\'Intelligence Artificielle',
    role: 'Model development host, Model Development Phase',
    description:
      'A national center of excellence dedicated to education and research in artificial intelligence and data science. ENSIA specialists in AI and machine learning mentored teams throughout the modeling phase.',
    location: 'Algiers, Algeria',
    logo: '/logo/ensia_logo.png',
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="team-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="Team & Contact"
            subtitle="The AgrI Challenge was organized through a collaboration between two leading Algerian academic institutions."
          />
        </AnimatedSection>

        {/* Institutions */}
        <AnimatedSection delay={100} stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {institutions.map((inst) => (
              <div
                key={inst.abbreviation}
                className="p-7 rounded-2xl bg-[#F8FAFA] border border-[#E8EEEE] hover:border-[#94CCC6] transition-all duration-300"
                style={{ boxShadow: '0 4px 24px rgba(16,36,61,0.06)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-white border border-[#E8EEEE] flex items-center justify-center">
                    <Image
                      src={inst.logo}
                      alt={`${inst.abbreviation} logo`}
                      width={48}
                      height={48}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-[#10243D] leading-none">{inst.abbreviation}</div>
                    <div className="text-xs text-[#5A7A8A] mt-0.5">{inst.location}</div>
                  </div>
                </div>
                <h3 className="font-semibold text-[#10243D] text-sm mb-1">{inst.fullName}</h3>
                <div className="text-xs font-medium text-[#1CC9A9] mb-3">{inst.role}</div>
                <p className="text-sm text-[#5A7A8A] leading-relaxed">{inst.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Teams note */}
        <AnimatedSection delay={150}>
          <div
            className="mb-12 p-6 rounded-2xl bg-[#F8FAFA] border border-[#E8EEEE] flex gap-4 items-start"
            style={{ boxShadow: '0 2px 12px rgba(16,36,61,0.05)' }}
          >
            <div className="p-2.5 rounded-xl bg-[#94CCC6]/15 shrink-0">
              <Users size={20} className="text-[#10243D]" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-semibold text-[#10243D] mb-2">12 Interdisciplinary Teams</h3>
              <p className="text-sm text-[#5A7A8A] leading-relaxed">
                The challenge brought together 12 interdisciplinary teams, each combining students with computer science and AI backgrounds with students from agriculture, forestry, and plant science. This mixed composition was required to ensure both ecological validity of annotations and technical robustness of the machine learning systems.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact */}
        <AnimatedSection delay={200}>
          <div
            className="p-7 rounded-2xl border border-[#E8EEEE] bg-white flex gap-4 items-start"
            style={{ boxShadow: '0 4px 24px rgba(16,36,61,0.06)' }}
          >
            <div className="p-2.5 rounded-xl bg-[#1CC9A9]/10 shrink-0">
              <Mail size={20} className="text-[#1CC9A9]" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-semibold text-[#10243D] mb-1">Contact</h3>
              <p className="text-sm text-[#5A7A8A] mb-2">
                For questions about the dataset, access requests, or research collaboration:
              </p>
              <a
                href="mailto:contact@email.com"
                className="text-sm font-semibold text-[#1CC9A9] hover:underline"
              >
                contact@email.com
              </a>
              <p className="text-xs text-[#5A7A8A]/70 mt-3 italic">
                Full author names and affiliations will be listed here upon paper publication.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
