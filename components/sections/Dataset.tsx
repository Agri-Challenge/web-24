import { TreePine, Database } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

const species = [
  { english: 'Carob', scientific: 'Ceratonia siliqua' },
  { english: 'Oak', scientific: 'Quercus spp.' },
  { english: 'Peruvian Pepper', scientific: 'Schinus molle' },
  { english: 'Ash', scientific: 'Fraxinus spp.' },
  { english: 'Pistachio', scientific: 'Pistacia vera' },
  { english: 'Tipuana', scientific: 'Tipuana tipu' },
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
                key={sp.english}
                className="p-4 rounded-xl bg-[#F8FAFA] border border-[#E8EEEE] hover:border-[#94CCC6] hover:-translate-y-1 transition-all duration-200 text-center"
                style={{ boxShadow: '0 2px 12px rgba(16,36,61,0.05)' }}
              >
                <div className="w-10 h-10 rounded-full bg-[#94CCC6]/15 flex items-center justify-center mx-auto mb-3">
                  <TreePine size={18} className="text-[#10243D]" strokeWidth={1.5} />
                </div>
                <div className="font-semibold text-sm text-[#10243D] mb-0.5">{sp.english}</div>
                <div className="text-xs italic text-[#5A7A8A]">{sp.scientific}</div>
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
                    <th scope="col">Carob</th>
                    <th scope="col">Oak</th>
                    <th scope="col">Peruvian Pepper</th>
                    <th scope="col">Ash</th>
                    <th scope="col">Pistachio</th>
                    <th scope="col">Tipuana</th>
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
      </div>
    </section>
  );
}
