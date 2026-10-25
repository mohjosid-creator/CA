import React from 'react';
import { Check, Shield } from 'lucide-react';
import { TranslationType } from '../data/translations';

interface WhyDettackProps {
  t: TranslationType;
}

export const WhyDettack: React.FC<WhyDettackProps> = ({ t }) => {
  const points = [t.why.b1, t.why.b2, t.why.b3, t.why.b4];

  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Why statement */}
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-[#ef4444] font-semibold">
            {t.why.eyebrow}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-[#fafafa]">
            {t.why.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
            {t.why.subtitle}
          </p>

          <ul className="mt-8 space-y-3.5 text-sm">
            {points.map((point, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <div className="mt-0.5 w-5 h-5 rounded-md grid place-items-center shrink-0 bg-[#ef4444]/15 text-[#ef4444]">
                  <Check size={13} strokeWidth={3} />
                </div>
                <span className="text-[#a1a1aa] leading-relaxed text-sm">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Security Rating Showcase Card */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 blur-3xl opacity-40 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 60% 40%, rgba(239,68,68,0.35), transparent 70%)',
            }}
          />

          <div className="rounded-2xl border border-[#27272a] bg-[#111114] p-6 sm:p-7 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#27272a]">
              <div className="text-xs uppercase tracking-[0.18em] text-[#71717a] font-medium">
                {t.why.ratingLabel}
              </div>
              <div className="text-xs text-[#a1a1aa] font-mono">
                target: vuln.com
              </div>
            </div>

            <div className="mt-6 flex items-center gap-6">
              {/* Big B Grade Badge */}
              <div
                className="w-24 h-24 rounded-2xl grid place-items-center text-5xl font-black shrink-0"
                style={{
                  background: 'rgba(239,68,68,0.15)',
                  color: '#ef4444',
                  border: '1px solid #ef4444',
                  boxShadow: '0 0 24px rgba(239,68,68,0.25)',
                }}
              >
                B
              </div>

              {/* Severity breakdown bars */}
              <div className="flex-1 space-y-2 text-xs">
                {[
                  { label: 'Critical', val: 1, max: 8, color: '#ef4444' },
                  { label: 'High', val: 3, max: 8, color: '#f59e0b' },
                  { label: 'Medium', val: 6, max: 8, color: '#fbbf24' },
                  { label: 'Low', val: 4, max: 8, color: '#3b82f6' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-16 text-[#71717a]">{s.label}</span>
                    <div className="flex-1 h-2 rounded-full bg-[#1f1f23] overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(s.val / s.max) * 100}%`,
                          backgroundColor: s.color,
                        }}
                      />
                    </div>
                    <span className="w-6 text-right font-mono text-[#fafafa]">
                      {s.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom 3 mini stat cards */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl border border-[#27272a] bg-[#1a1a1d] py-3">
                <div className="text-lg font-bold font-mono text-[#fafafa]">142</div>
                <div className="text-[10px] uppercase tracking-wider text-[#71717a] mt-0.5">
                  {t.why.statAssets}
                </div>
              </div>

              <div className="rounded-xl border border-[#27272a] bg-[#1a1a1d] py-3">
                <div className="text-lg font-bold font-mono text-[#ef4444]">14</div>
                <div className="text-[10px] uppercase tracking-wider text-[#71717a] mt-0.5">
                  {t.why.statOpen}
                </div>
              </div>

              <div className="rounded-xl border border-[#27272a] bg-[#1a1a1d] py-3">
                <div className="text-lg font-bold font-mono text-[#10b981]">88</div>
                <div className="text-[10px] uppercase tracking-wider text-[#71717a] mt-0.5">
                  {t.why.statResolved}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
