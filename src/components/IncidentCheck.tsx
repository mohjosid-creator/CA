import React from 'react';
import { Flame, ShieldCheck, AlertOctagon, Terminal, Eye, Dices, SearchCheck } from 'lucide-react';
import { TranslationType } from '../data/translations';

interface IncidentCheckProps {
  t: TranslationType;
}

export const IncidentCheck: React.FC<IncidentCheckProps> = ({ t }) => {
  return (
    <section
      id="incident-check"
      className="relative py-16 sm:py-24 lg:py-32 border-y border-[#27272a] bg-[#111114]/50 overflow-hidden"
    >
      {/* Background ambient red glow */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(239,68,68,0.3) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column Description */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ef4444]/40 bg-[#ef4444]/10 text-xs text-[#ef4444] font-semibold">
            <Flame size={13} />
            <span>{t.incident.eyebrow}</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-[#fafafa]">
            {t.incident.titleA}
            <br />
            <span className="text-[#ef4444]">{t.incident.titleB}</span>
          </h2>

          <p className="mt-5 text-base text-[#a1a1aa] leading-relaxed">
            {t.incident.body}
          </p>

          <div className="mt-8 space-y-4 text-sm">
            {/* Defacement item */}
            <div className="flex gap-3.5 items-start p-3.5 rounded-xl border border-[#27272a] bg-[#1a1a1d]/60">
              <div className="w-8 h-8 rounded-lg grid place-items-center bg-[#ef4444]/15 text-[#ef4444] shrink-0 mt-0.5">
                <Flame size={16} />
              </div>
              <div>
                <strong className="text-[#fafafa] font-semibold">
                  {t.incident.b1s}
                </strong>
                <span className="text-[#a1a1aa] block text-xs sm:text-sm mt-0.5">
                  {t.incident.b1}
                </span>
              </div>
            </div>

            {/* Gambling injection item */}
            <div className="flex gap-3.5 items-start p-3.5 rounded-xl border border-[#27272a] bg-[#1a1a1d]/60">
              <div className="w-8 h-8 rounded-lg grid place-items-center bg-[#f59e0b]/15 text-[#f59e0b] shrink-0 mt-0.5">
                <Dices size={16} />
              </div>
              <div>
                <strong className="text-[#fafafa] font-semibold">
                  {t.incident.b2s}
                </strong>
                <span className="text-[#a1a1aa] block text-xs sm:text-sm mt-0.5">
                  {t.incident.b2}
                </span>
              </div>
            </div>

            {/* SEO spam item */}
            <div className="flex gap-3.5 items-start p-3.5 rounded-xl border border-[#27272a] bg-[#1a1a1d]/60">
              <div className="w-8 h-8 rounded-lg grid place-items-center bg-[#3b82f6]/15 text-[#3b82f6] shrink-0 mt-0.5">
                <SearchCheck size={16} />
              </div>
              <div>
                <strong className="text-[#fafafa] font-semibold">
                  {t.incident.b3s}
                </strong>
                <span className="text-[#a1a1aa] block text-xs sm:text-sm mt-0.5">
                  {t.incident.b3}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-[#10b981] bg-[#10b981]/10 px-3 py-1.5 rounded-lg border border-[#10b981]/20">
            <ShieldCheck size={14} />
            <span>{t.incident.guarantee}</span>
          </div>
        </div>

        {/* Right Column: Comparison Matrix */}
        <div className="relative">
          <div className="rounded-2xl border border-[#27272a] bg-[#111114] p-6 shadow-2xl space-y-4">
            <div className="text-xs uppercase tracking-wider text-[#71717a] font-mono">
              Detection Matrix
            </div>

            <div className="divide-y divide-[#27272a] text-xs">
              {/* Row 1 */}
              <div className="py-3 flex items-center justify-between gap-4">
                <div className="text-[#fafafa] font-medium">Standard CVE / Port Scanners</div>
                <div className="text-right text-[#ef4444] flex items-center gap-1 font-mono">
                  <span>Blind to Content Tampering</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="py-3 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[#fafafa] font-medium">Slot Gacor / Gambling Mirrors</div>
                  <div className="text-[11px] text-[#71717a]">Injected in legacy WordPress or subdomains</div>
                </div>
                <div className="text-right text-[#10b981] font-mono font-semibold flex items-center gap-1">
                  <ShieldCheck size={14} />
                  <span>Dettack Caught</span>
                </div>
              </div>

              {/* Row 3 */}
              <div className="py-3 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[#fafafa] font-medium">Website Defacement Pages</div>
                  <div className="text-[11px] text-[#71717a]">IndoSec &amp; hacker greetz takeover</div>
                </div>
                <div className="text-right text-[#10b981] font-mono font-semibold flex items-center gap-1">
                  <ShieldCheck size={14} />
                  <span>Dettack Caught</span>
                </div>
              </div>

              {/* Row 4 */}
              <div className="py-3 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[#fafafa] font-medium">Googlebot SEO Cloaking</div>
                  <div className="text-[11px] text-[#71717a]">Spam visible only to search crawlers</div>
                </div>
                <div className="text-right text-[#10b981] font-mono font-semibold flex items-center gap-1">
                  <ShieldCheck size={14} />
                  <span>Dettack Caught</span>
                </div>
              </div>
            </div>

            {/* Live signature sample preview */}
            <div className="mt-4 p-3.5 rounded-xl border border-[#ef4444]/30 bg-[#0a0a0b] font-mono text-[11px] text-[#ef4444] space-y-1">
              <div className="text-[#71717a] flex items-center justify-between">
                <span>[Signature Engine v4]</span>
                <span className="text-[#10b981]">MATCH CONFIRMED</span>
              </div>
              <div className="text-[#fafafa]">
                Pattern: <span className="text-[#f59e0b]">/(slot\s*gacor|maxwin|judi\s*online|zeus\s*olympus)/i</span>
              </div>
              <div className="text-[#a1a1aa]">
                Status: <span className="text-[#ef4444]">Integrity Compromise · Severity Critical</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
