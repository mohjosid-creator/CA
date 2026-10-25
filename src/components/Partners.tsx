import React from 'react';
import { TranslationType } from '../data/translations';
import { PARTNERS } from '../data/mockData';

interface PartnersProps {
  t: TranslationType;
}

export const Partners: React.FC<PartnersProps> = ({ t }) => {
  // Triple the list to create a smooth, continuous looping marquee
  const marqueeItems = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="border-y border-[#27272a] bg-[#111114]/40 py-10 sm:py-12 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-[#71717a] font-medium">
          {t.trusted.heading}
        </p>

        <div
          className="group relative mt-7 overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)',
          }}
        >
          <div className="flex w-max items-center animate-marquee group-hover:[animation-play-state:paused]">
            {marqueeItems.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="mr-5 sm:mr-7 flex h-20 w-28 sm:h-24 sm:w-36 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-3 shadow-md hover:scale-105 transition-transform"
                title={partner.name}
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  loading="lazy"
                  className={`h-full w-full object-contain filter contrast-105 ${partner.imgClass}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
