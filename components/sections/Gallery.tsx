import { Camera } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

const photos: { src: string; caption: string }[] = [
  { src: '/gallery/449283692_453840544078337_3062955274637159106_n.jpg', caption: '' },
  { src: '/gallery/449283952_453840444078347_9162789896486431683_n.jpg', caption: '' },
  { src: '/gallery/449284465_453840777411647_184891331937698134_n.jpg',  caption: '' },
  { src: '/gallery/449454377_453840700744988_3412690726136296149_n.jpg', caption: '' },
  { src: '/gallery/449454960_453840880744970_8303934576964858906_n.jpg', caption: '' },
  { src: '/gallery/449455194_453840417411683_8132243868666635351_n.jpg', caption: '' },
  { src: '/gallery/449457304_453840854078306_6860469379919546755_n.jpg', caption: '' },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="Event Gallery"
            subtitle="A look at the AgrI Challenge in action — 12 teams in the field, collecting real agricultural data and building AI models from the ground up."
          />
        </AnimatedSection>

        {photos.length > 0 ? (
          <AnimatedSection delay={100}>
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
              {photos.map((photo, idx) => (
                <figure
                  key={idx}
                  className="break-inside-avoid rounded-xl overflow-hidden border border-[#E8EEEE] group"
                  style={{ boxShadow: '0 2px 16px rgba(16,36,61,0.08)' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {photo.caption && (
                    <figcaption className="px-3 py-2 text-xs text-[#5A7A8A] bg-white">
                      {photo.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </AnimatedSection>
        ) : (
          /* Placeholder state — remove once photos are added */
          <AnimatedSection delay={100}>
            <div
              className="rounded-2xl border-2 border-dashed border-[#E8EEEE] bg-white flex flex-col items-center justify-center py-20 px-8 text-center"
              style={{ boxShadow: '0 2px 16px rgba(16,36,61,0.04)' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#94CCC6]/15 flex items-center justify-center mb-4">
                <Camera size={26} className="text-[#10243D]" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-[#10243D] mb-2">Event Photos Coming Soon</h3>
              <p className="text-sm text-[#5A7A8A] max-w-md leading-relaxed">
                Photos from the AgrI Challenge event will be published here. To add images, place them
                in <code className="font-mono text-xs bg-[#F8FAFA] px-1.5 py-0.5 rounded border border-[#E8EEEE]">/public/gallery/</code> and
                update the <code className="font-mono text-xs bg-[#F8FAFA] px-1.5 py-0.5 rounded border border-[#E8EEEE]">photos</code> array
                at the top of <code className="font-mono text-xs bg-[#F8FAFA] px-1.5 py-0.5 rounded border border-[#E8EEEE]">Gallery.tsx</code>.
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
