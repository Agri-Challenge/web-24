import { TreePine, Database, Cpu, Shield } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

const species = [
  { common: 'Caroubier', scientific: 'Ceratonia siliqua', english: 'Carob tree' },
  { common: 'Chêne', scientific: 'Quercus spp.', english: 'Oak' },
  { common: 'Faux poivrier', scientific: 'Schinus molle', english: 'Peruvian pepper tree' },
  { common: 'Frêne', scientific: 'Fraxinus spp.', english: 'Ash' },
  { common: 'Pistachier', scientific: 'Pistacia vera', english: 'Pistachio' },
  { common: 'Tipu', scientific: 'Tipuana tipu', english: 'Tipuana' },
];

const tableData = [
  { team: 'AI-4o',              caroubier: 960,  chene: 1625, faux: 1221, frene: 934,  pist: 1111, tipu: 1493, total: 7344  },
  { team: 'AiGro',              caroubier: 686,  chene: 604,  faux: 595,  frene: 572,  pist: 541,  tipu: 635,  total: 3633  },
  { team: 'CACTUS',             caroubier: 400,  chene: 597,  faux: 694,  frene: 803,  pist: 755,  tipu: 552,  total: 3801  },
  { team: 'CHAJARA',            caroubier: 610,  chene: 549,  faux: 428,  frene: 308,  pist: 262,  tipu: 383,  total: 2540  },
  { team: 'GreenAI',            caroubier: 675,  chene: 705,  faux: 609,  frene: 559,  pist: 722,  tipu: 515,  total: 3785  },
  { team: 'PLT',                caroubier: 1089, chene: 1131, faux: 1000, frene: 1297, pist: 973,  tipu: 1066, total: 6556  },
  { team: 'RUSTICUS',           caroubier: 565,  chene: 625,  faux: 505,  frene: 500,  pist: 555,  tipu: 696,  total: 3446  },
  { team: 'SMART AGRICULTURES', caroubier: 638,  chene: 923,  faux: 1694, frene: 1214, pist: 1080, tipu: 772,  total: 6321  },
  { team: 'Scorpions',          caroubier: 422,  chene: 450,  faux: 407,  frene: 456,  pist: 620,  tipu: 440,  total: 2795  },
  { team: 'Condimenteum',       caroubier: 1048, chene: 1000, faux: 655,  frene: 1074, pist: 606,  tipu: 1121, total: 5504  },
  { team: 'The Neural Ninjas',  caroubier: 234,  chene: 262,  faux: 256,  frene: 236,  pist: 293,  tipu: 361,  total: 1642  },
  { team: 'Organization team',  caroubier: 552,  chene: 657,  faux: 727,  frene: 392,  pist: 368,  tipu: 610,  total: 3306  },
];

const totals = { caroubier: 7879, chene: 9128, faux: 8791, frene: 8345, pist: 7886, tipu: 8644, total: 50673 };

const pipelineSteps = [
  {
    step: '01',
    icon: Shield,
    title: 'Curation & Quality Assurance',
    description:
      'All 50,673 images were systematically catalogued with standardized metadata: file format, resolution, file size, acquisition device (from EXIF), and a 64-bit perceptual hash. Seven common image formats were documented.',
  },
  {
    step: '02',
    icon: Database,
    title: 'Duplicate Detection & Removal',
    description:
      '13,579 records were involved in 6,370 duplicate groups (sizes 2–7). A deterministic retention rule preserved the highest-quality image per group. Result: 7,209 duplicate images removed, recovering ~9.6 GB of storage.',
  },
  {
    step: '03',
    icon: Cpu,
    title: 'Resizing & Normalisation',
    description:
      'All retained images were resized to 336×336 px using bicubic interpolation with centre-crop for non-square images. Storage reduced from 121.7 GB to 2.9 GB (97.6% reduction). Final clean dataset: 47,367 images.',
  },
];

export default function Dataset() {
  return (
    <section
      id="dataset"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="dataset-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <SectionHeading
            title="Dataset"
            subtitle="50,673 field images spanning 6 tree species, collected by 12 independent teams and curated into a 47,367-image clean benchmark."
          />
        </AnimatedSection>

        {/* ── Species Cards ── */}
        <AnimatedSection delay={100}>
          <h3 className="text-lg font-semibold text-[#10243D] mb-6 flex items-center gap-2">
            <TreePine size={18} className="text-[#94CCC6]" strokeWidth={1.5} />
            Tree Species
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
            {species.map((sp) => (
              <div
                key={sp.common}
                className="p-4 rounded-xl bg-[#F8FAFA] border border-[#E8EEEE] hover:border-[#94CCC6] hover:-translate-y-1 transition-all duration-200 text-center"
                style={{ boxShadow: '0 2px 12px rgba(16,36,61,0.05)' }}
              >
                <div className="w-10 h-10 rounded-full bg-[#94CCC6]/15 flex items-center justify-center mx-auto mb-3">
                  <TreePine size={18} className="text-[#10243D]" strokeWidth={1.5} />
                </div>
                <div className="font-semibold text-sm text-[#10243D] mb-0.5">{sp.common}</div>
                <div className="text-xs italic text-[#5A7A8A] mb-1">{sp.scientific}</div>
                <div className="text-xs text-[#5A7A8A]/70">{sp.english}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Dataset Table ── */}
        <AnimatedSection delay={150}>
          <h3 className="text-lg font-semibold text-[#10243D] mb-6 flex items-center gap-2">
            <Database size={18} className="text-[#94CCC6]" strokeWidth={1.5} />
            Image Distribution by Team & Species
          </h3>
          <p className="text-sm text-[#5A7A8A] mb-4">
            Full image count breakdown across all 12 teams and 6 species classes (Table 2 from the paper).
          </p>
          <div
            className="rounded-2xl border border-[#E8EEEE] overflow-hidden mb-20"
            style={{ boxShadow: '0 4px 24px rgba(16,36,61,0.07)' }}
          >
            <div className="overflow-x-auto">
              <table className="data-table" aria-label="Dataset image distribution by team and species">
                <thead>
                  <tr>
                    <th scope="col" className="rounded-tl-2xl">Team</th>
                    <th scope="col">Caroubier</th>
                    <th scope="col">Chêne</th>
                    <th scope="col">Faux poivrier</th>
                    <th scope="col">Frêne</th>
                    <th scope="col">Pistachier</th>
                    <th scope="col">Tipu</th>
                    <th scope="col" className="total-cell rounded-tr-2xl">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => (
                    <tr key={row.team}>
                      <td className="font-medium text-[#10243D]">{row.team}</td>
                      <td>{row.caroubier.toLocaleString()}</td>
                      <td>{row.chene.toLocaleString()}</td>
                      <td>{row.faux.toLocaleString()}</td>
                      <td>{row.frene.toLocaleString()}</td>
                      <td>{row.pist.toLocaleString()}</td>
                      <td>{row.tipu.toLocaleString()}</td>
                      <td className="total-cell font-bold">{row.total.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="total-row">
                    <td className="font-bold text-[#10243D] uppercase text-xs tracking-wide">Total</td>
                    <td className="total-cell">{totals.caroubier.toLocaleString()}</td>
                    <td className="total-cell">{totals.chene.toLocaleString()}</td>
                    <td className="total-cell">{totals.faux.toLocaleString()}</td>
                    <td className="total-cell">{totals.frene.toLocaleString()}</td>
                    <td className="total-cell">{totals.pist.toLocaleString()}</td>
                    <td className="total-cell">{totals.tipu.toLocaleString()}</td>
                    <td className="total-cell font-extrabold text-base">{totals.total.toLocaleString()}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </AnimatedSection>

        {/* ── Preparation Pipeline ── */}
        <AnimatedSection delay={200}>
          <h3 className="text-lg font-semibold text-[#10243D] mb-8 flex items-center gap-2">
            <Cpu size={18} className="text-[#94CCC6]" strokeWidth={1.5} />
            Collection &amp; Preparation Pipeline
          </h3>
          <div className="relative mb-12">
            {/* Connecting line */}
            <div
              className="hidden md:block absolute left-8 top-8 bottom-8 w-px bg-[#E8EEEE]"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-6">
              {pipelineSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="relative flex gap-6 items-start">
                    {/* Step indicator */}
                    <div
                      className="relative z-10 shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center border-2 border-[#E8EEEE] bg-white"
                      style={{ boxShadow: '0 2px 12px rgba(16,36,61,0.06)' }}
                    >
                      <Icon size={22} className="text-[#10243D]" strokeWidth={1.5} />
                      <span
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#1CC9A9] text-white text-[10px] font-bold flex items-center justify-center"
                      >
                        {i + 1}
                      </span>
                    </div>
                    {/* Content */}
                    <div
                      className="flex-1 p-5 rounded-xl bg-[#F8FAFA] border border-[#E8EEEE]"
                      style={{ boxShadow: '0 2px 12px rgba(16,36,61,0.04)' }}
                    >
                      <h4 className="font-semibold text-[#10243D] mb-2">{step.title}</h4>
                      <p className="text-sm text-[#5A7A8A] leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary stats inline */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '50,673', label: 'Raw Images', sub: 'before curation' },
              { value: '7,209', label: 'Duplicates Removed', sub: 'via perceptual hashing' },
              { value: '47,367', label: 'Clean Images', sub: 'final dataset' },
              { value: '97.6%', label: 'Storage Reduction', sub: '121.7 GB → 2.9 GB' },
            ].map((item) => (
              <div
                key={item.label}
                className="stat-card-accent bg-[#F8FAFA] rounded-xl p-5"
                style={{ boxShadow: '0 2px 12px rgba(16,36,61,0.05)' }}
              >
                <div className="text-2xl font-extrabold text-[#1CC9A9] font-mono leading-none mb-1">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-[#10243D] mb-0.5">{item.label}</div>
                <div className="text-xs text-[#5A7A8A]">{item.sub}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
