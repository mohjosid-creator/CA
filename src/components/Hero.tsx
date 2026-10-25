import React, { useState } from 'react';
import { ArrowRight, Search, Shield, Zap, Sparkles, Terminal, Flame, Cpu } from 'lucide-react';
import { TranslationType } from '../data/translations';

interface HeroProps {
  t: TranslationType;
  onOpenScan: (domain?: string) => void;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onOpenDocs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onOpenScan, onOpenAuth, onOpenDocs }) => {
  const [domainInput, setDomainInput] = useState('');

  const handleQuickScan = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanDomain = domainInput.trim().replace(/^https?:\/\//, '').replace(/\/.*$/, '');
    onOpenScan(cleanDomain || 'target-domain.com');
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32">
      {/* Background radial ambient glow and grid accents */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[42rem] sm:w-[72rem] h-[34rem] pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(circle at 50% 18%, rgba(239, 68, 68, 0.28) 0%, rgba(239, 68, 68, 0.08) 45%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 right-10 w-96 h-96 rounded-full blur-3xl opacity-35 pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)' }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#27272a] bg-[#111114]/90 backdrop-blur text-xs text-[#a1a1aa] shadow-xs">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                background: '#ef4444',
                boxShadow: '0 0 12px rgba(239, 68, 68, 0.9)',
              }}
            />
            <span className="font-medium tracking-wide">{t.hero.eyebrow}</span>
            <span className="font-mono text-[10px] text-white bg-[#ef4444] px-1.5 py-0.2 rounded font-bold">
              100X ENGINE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#fafafa]">
            {t.hero.h1a}
            <br />
            <span className="text-[#ef4444] drop-shadow-[0_0_28px_rgba(239,68,68,0.4)]">
              {t.hero.h1b}
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-5 text-base sm:text-lg text-[#a1a1aa] max-w-2xl leading-relaxed">
            {t.hero.sub} 100x accelerated reconnaissance mapping <strong>1,425,400+ detection rules</strong> across all 65,535 ports and active defacement / gambling sweeps.
          </p>

          {/* Interactive domain quick search bar */}
          <form
            onSubmit={handleQuickScan}
            className="mt-8 max-w-xl flex flex-col sm:flex-row items-center gap-2.5 p-1.5 rounded-2xl border border-[#27272a] bg-[#111114]/95 backdrop-blur-md shadow-2xl focus-within:border-[#ef4444]/70 transition-colors"
          >
            <div className="flex items-center gap-2.5 w-full pl-3.5 text-[#71717a]">
              <Search size={18} className="text-[#ef4444] shrink-0" />
              <input
                type="text"
                value={domainInput}
                onChange={(e) => setDomainInput(e.target.value)}
                placeholder="Enter domain (e.g. acme.com or gov.id)"
                className="w-full bg-transparent text-sm text-[#fafafa] placeholder-[#71717a] outline-none font-mono"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto shrink-0 inline-flex h-11 items-center justify-center gap-2 px-5 rounded-xl bg-[#ef4444] text-white text-xs sm:text-sm font-semibold hover:bg-[#dc2626] transition-all shadow-md active:scale-95"
            >
              <Zap size={14} className="fill-current" />
              <span>100x Scan</span>
              <ArrowRight size={15} strokeWidth={2.5} />
            </button>
          </form>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenAuth('signup')}
              className="inline-flex h-11 items-center gap-2 px-5 rounded-xl bg-[#1f1f23] text-[#fafafa] text-sm font-semibold border border-[#3f3f46] hover:bg-[#27272a] hover:border-[#52525b] transition-all shadow-xs"
            >
              <Shield size={15} className="text-[#10b981]" />
              <span>{t.hero.ctaPrimary}</span>
            </button>

            <button
              type="button"
              onClick={onOpenDocs}
              className="inline-flex h-11 items-center gap-2 px-5 rounded-xl border border-[#27272a] bg-[#111114]/80 backdrop-blur text-sm font-medium text-[#fafafa] hover:bg-[#1a1a1d] transition-colors"
            >
              <Terminal size={15} className="text-[#ef4444]" />
              <span>Read Documentation</span>
            </button>

            <a
              href="#product"
              className="inline-flex h-11 items-center gap-2 px-4 rounded-xl text-xs font-mono text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
            >
              <span>{t.hero.ctaSecondary} ↓</span>
            </a>
          </div>

          {/* Trust and live indicators */}
          <div className="mt-7 text-xs text-[#71717a] flex items-center gap-2">
            <Cpu size={13} className="text-[#ef4444]" />
            <span>{t.hero.trust} · Powered by 100x Distributed Cluster</span>
          </div>

          {/* Used by sector tags */}
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#a1a1aa]">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#71717a] font-semibold">
              {t.hero.usedBy}
            </span>
            <span className="text-[#3f3f46]">·</span>
            <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-[#1a1a1d] border border-[#27272a]">SOC</span>
            <span className="text-[#3f3f46]">·</span>
            <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-[#1a1a1d] border border-[#27272a]">MSSP</span>
            <span className="text-[#3f3f46]">·</span>
            <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-[#1a1a1d] border border-[#27272a]">SMB</span>
            <span className="text-[#3f3f46]">·</span>
            <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-[#1a1a1d] border border-[#27272a]">GOV</span>
            <span className="text-[#3f3f46]">·</span>
            <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-[#1a1a1d] border border-[#27272a]">FINTECH</span>
          </div>
        </div>
      </div>
    </section>
  );
};
