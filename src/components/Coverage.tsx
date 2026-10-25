import React, { useState } from 'react';
import { Shield, Flame, Activity, Globe, Server, CheckCircle2, AlertTriangle, Layers, Zap, Cpu } from 'lucide-react';
import { TranslationType } from '../data/translations';
import { CATEGORY_TAGS } from '../data/mockData';

interface CoverageProps {
  t: TranslationType;
}

export const Coverage: React.FC<CoverageProps> = ({ t }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const vulnRules = [
    { label: t.coverage.vulnSlices.cve, count: '412,000', percent: '29%', color: '#ef4444' },
    { label: t.coverage.vulnSlices.web, count: '385,000', percent: '27%', color: '#f59e0b' },
    { label: t.coverage.vulnSlices.misconfig, count: '265,000', percent: '18%', color: '#fbbf24' },
    { label: t.coverage.vulnSlices.exposure, count: '176,200', percent: '13%', color: '#3b82f6' },
    { label: 'Full 65,535 Port Coverage', count: '100,000', percent: '7%', color: '#8b5cf6' },
    { label: 'Zero-Days & Heuristics', count: '87,200', percent: '6%', color: '#10b981' },
  ];

  const incidentSignatures = [
    { label: 'Defacement signatures (100x)', count: '1,200', desc: 'IndoSec, defacer greetz, blackhat crews, Web3 & government takeovers' },
    { label: 'Gambling injection (Slot Gacor & Scatter Hitam)', count: '1,400', desc: 'Slot88, Pragmatic Play, Maxwin, RTP Live, mirror cloaking' },
    { label: 'Cloaked Googlebot SEO spam', count: '400', desc: 'Search engine bot cloaking & DOM hidden backlinks' },
  ];

  return (
    <section id="coverage" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ef4444]/40 bg-[#ef4444]/10 text-xs uppercase tracking-[0.22em] text-[#ef4444] font-semibold mb-3">
            <Zap size={13} />
            <span>100x Supercharged Detection Coverage</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#fafafa]">
            {t.coverage.titleA}{' '}
            <span className="text-[#ef4444]">{t.coverage.titleB}</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
            {t.coverage.sub} Upgraded 100x with 1,425,400+ vulnerability templates, zero-day heuristics, full 65k port coverage, and localized incident signatures.
          </p>
        </div>

        {/* Central Pulse Counter Card */}
        <div className="mt-12 flex justify-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 -m-8 sm:-m-12 rounded-full animate-pulse-ring opacity-40 pointer-events-none"
              style={{
                boxShadow: '0 0 70px 15px rgba(239, 68, 68, 0.4)',
              }}
            />
            <div className="relative rounded-2xl border border-[#ef4444]/50 bg-[#0a0a0b]/95 backdrop-blur-xl px-8 py-7 sm:px-16 sm:py-10 text-center shadow-[0_20px_70px_rgba(239,68,68,0.22)]">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#71717a] font-medium mb-1.5 flex items-center justify-center gap-2">
                <span>{t.coverage.activeLabel}</span>
                <span className="px-1.5 py-0.2 rounded bg-[#ef4444] text-white text-[9px] font-bold">100X</span>
              </div>
              <div className="text-5xl sm:text-7xl font-black font-mono tracking-tight text-[#fafafa] tabular-nums">
                1,425,400
              </div>
              <p className="mt-2 text-xs text-[#a1a1aa] max-w-sm mx-auto">
                1,422,400 vulnerability and takeover rules plus 3,000 incident signatures. Auto-graded with sub-second parallel evaluation.
              </p>
              <div className="mt-3.5 inline-flex items-center gap-2 text-[11px] text-[#10b981] font-semibold bg-[#10b981]/10 px-3 py-1 rounded-full border border-[#10b981]/25">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                <span>{t.coverage.updated} · Zero False-Positive Filter</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature summary blocks */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-4xl mx-auto">
          {[
            { label: t.coverage.tileCves, count: '412,000+', icon: Shield, tone: 'text-[#ef4444]' },
            { label: t.coverage.tileWeb, count: '385,000+', icon: Globe, tone: 'text-[#f59e0b]' },
            { label: 'All 65,535 Ports', count: 'Full Range', icon: Server, tone: 'text-[#3b82f6]' },
            { label: 'Incident Signatures', count: '3,000 live', icon: Flame, tone: 'text-[#ef4444]' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#27272a] bg-[#111114]/80 backdrop-blur p-4 text-center hover:border-[#ef4444]/40 hover:bg-[#1a1a1d] transition-all"
            >
              <item.icon size={20} className={`${item.tone} mx-auto mb-2`} />
              <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-[#fafafa]">
                {item.count}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[#71717a] font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed breakdown: Vuln Rules vs Incident Signatures */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vuln Rules Breakdown */}
          <div className="rounded-2xl border border-[#27272a] bg-[#111114]/90 backdrop-blur p-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-[#27272a]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg grid place-items-center bg-[#ef4444]/15 text-[#ef4444] border border-[#ef4444]/30">
                  <Layers size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#fafafa]">
                    {t.coverage.vulnLabel}
                  </h3>
                  <p className="text-[11px] text-[#71717a]">
                    1,422,400 templates · 100x high-concurrency engine
                  </p>
                </div>
              </div>
              <span className="text-2xl font-black font-mono text-[#fafafa]">
                1,422,400
              </span>
            </div>

            <div className="mt-5 space-y-3.5">
              {vulnRules.map((slice, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#a1a1aa]">{slice.label}</span>
                    <span className="font-mono text-[#fafafa] font-semibold">
                      {slice.count} <span className="text-[#71717a]">({slice.percent})</span>
                    </span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-[#1f1f23] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: slice.percent, backgroundColor: slice.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 pt-4 border-t border-[#27272a] text-[11px] text-[#71717a]">
              3,000 incident signatures run alongside these across 100x distributed worker threads.
            </p>
          </div>

          {/* Incident Signatures Breakdown */}
          <div className="rounded-2xl border border-[#27272a] bg-[#111114]/90 backdrop-blur p-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-[#27272a]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg grid place-items-center bg-[#ef4444]/15 text-[#ef4444] border border-[#ef4444]/30">
                  <Flame size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#fafafa]">
                    {t.coverage.incidentLabel}
                  </h3>
                  <p className="text-[11px] text-[#71717a]">
                    Defacement, gambling injection, SEO cloaking spam
                  </p>
                </div>
              </div>
              <span className="text-2xl font-black font-mono text-[#ef4444]">
                3,000
              </span>
            </div>

            <div className="mt-5 space-y-4">
              {incidentSignatures.map((sig, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl border border-[#27272a] bg-[#1a1a1d]/60 flex items-start gap-3"
                >
                  <AlertTriangle size={16} className="text-[#ef4444] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-[#fafafa] flex items-center gap-2">
                      <span>{sig.label}</span>
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#ef4444]/20 text-[#ef4444] font-bold">
                        {sig.count} rules
                      </span>
                    </div>
                    <p className="text-[11px] text-[#71717a] mt-0.5">{sig.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 pt-4 border-t border-[#27272a] text-[11px] text-[#71717a]">
              Built and tuned by CounterAttack. Specialized for Indonesian and Southeast Asian public web perimeters.
            </p>
          </div>
        </div>

        {/* Category Pills Cloud */}
        <div className="mt-12 text-center">
          <div className="text-[10px] uppercase tracking-[0.22em] text-[#71717a] mb-4 font-semibold">
            {t.coverage.categoryCloud}
          </div>
          <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
            {CATEGORY_TAGS.map((tag) => {
              const active = selectedTag === tag.name;
              return (
                <button
                  key={tag.name}
                  onClick={() => setSelectedTag(active ? null : tag.name)}
                  className={`inline-flex items-center gap-1.5 px-3 h-7 rounded-md text-xs font-mono transition-all border ${
                    active
                      ? 'bg-[#ef4444]/20 border-[#ef4444] text-white shadow-xs'
                      : 'bg-[#1a1a1d] border-[#27272a] text-[#a1a1aa] hover:border-[#3f3f46] hover:text-[#fafafa]'
                  }`}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: tag.color }}
                  />
                  <span>{tag.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
