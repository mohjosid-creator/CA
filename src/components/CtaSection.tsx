import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { TranslationType } from '../data/translations';

interface CtaSectionProps {
  t: TranslationType;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onOpenScan: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ t, onOpenAuth, onOpenScan }) => {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#27272a] bg-[#111114] p-8 sm:p-14 shadow-2xl">
          {/* Ambient red gradient glow in top right */}
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-35 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(239,68,68,0.4) 0%, transparent 70%)',
            }}
          />

          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#27272a] bg-[#1a1a1d] text-xs text-[#a1a1aa]">
              <ShieldCheck size={14} className="text-[#ef4444]" />
              <span>{t.cta.badge}</span>
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#fafafa]">
              {t.cta.title}
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
              {t.cta.sub}
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <button
                type="button"
                onClick={() => onOpenScan()}
                className="inline-flex h-12 items-center gap-2 px-6 rounded-xl bg-[#ef4444] text-white text-sm font-semibold hover:bg-[#dc2626] transition-all shadow-[0_4px_16px_rgba(239,68,68,0.35)] active:scale-95"
              >
                <span>{t.cta.primary}</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </button>

              <button
                type="button"
                onClick={() => onOpenAuth('login')}
                className="inline-flex h-12 items-center px-5 rounded-xl border border-[#27272a] bg-[#1a1a1d] text-sm font-medium text-[#fafafa] hover:bg-[#27272a] hover:border-[#3f3f46] transition-colors"
              >
                <span>{t.cta.secondary}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
