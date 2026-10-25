import React, { useState } from 'react';
import { Globe, Shield, AlertTriangle, Layers, ChevronRight, Activity, Terminal } from 'lucide-react';
import { TranslationType } from '../data/translations';

interface ProductSectionProps {
  t: TranslationType;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ t }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'critical' | 'high'>('all');

  return (
    <section id="product" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.22em] text-[#ef4444] font-semibold">
            {t.product.eyebrow}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-[#fafafa]">
            {t.product.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
            {t.product.subtitle}
          </p>
        </div>

        {/* Side-by-side Dual Browser Mockups */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mockup 1: Vulnerabilities */}
          <div className="rounded-2xl border border-[#27272a] bg-[#111114]/80 p-1.5 shadow-xl overflow-hidden">
            {/* Browser topbar */}
            <div className="h-9 px-4 flex items-center gap-2 rounded-t-xl bg-[#0a0a0b]/60 border-b border-[#27272a]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]" />
              <div className="ml-3 inline-flex items-center gap-1.5 px-2.5 h-6 rounded-md border border-[#27272a] bg-[#1a1a1d] text-[11px] text-[#a1a1aa] font-mono">
                <Globe size={11} className="text-[#71717a]" />
                <span>dettack.com/vulnerabilities?group_id=vuln</span>
              </div>
            </div>

            {/* Inner Content */}
            <div className="rounded-xl border border-[#27272a] bg-[#0a0a0b] p-5 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <div className="text-sm font-semibold tracking-tight font-mono text-[#fafafa]">
                    vuln.com
                  </div>
                  <div className="text-[11px] text-[#71717a]">
                    Findings · 28 open across 142 assets
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  {(['all', 'critical', 'high'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-2.5 py-1 rounded text-xs font-mono capitalize transition-colors ${
                        activeTab === tab
                          ? 'bg-[#ef4444]/20 border border-[#ef4444] text-white'
                          : 'bg-[#1a1a1d] border border-[#27272a] text-[#71717a]'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-2">
                <div className="p-3 rounded-xl border border-[#ef4444]/30 bg-[#111114] flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase font-mono bg-[#ef4444]/20 text-[#ef4444]">
                        CRITICAL
                      </span>
                      <span className="text-xs font-semibold text-[#fafafa]">
                        Apache ActiveMQ RCE (CVE-2023-46604)
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-[#71717a] mt-1">
                      mq.vuln.com:8161 · Jolokia API RCE trigger
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-[#71717a]" />
                </div>

                <div className="p-3 rounded-xl border border-[#ef4444]/30 bg-[#111114] flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase font-mono bg-[#ef4444]/20 text-[#ef4444]">
                        CRITICAL
                      </span>
                      <span className="text-xs font-semibold text-[#fafafa]">
                        Exposed phpMyAdmin with default root access
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-[#71717a] mt-1">
                      db-admin.internal.vuln.com:8080 · Auth bypass
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-[#71717a]" />
                </div>

                <div className="p-3 rounded-xl border border-[#f59e0b]/30 bg-[#111114] flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase font-mono bg-[#f59e0b]/20 text-[#f59e0b]">
                        HIGH
                      </span>
                      <span className="text-xs font-semibold text-[#fafafa]">
                        Public .git directory readable
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-[#71717a] mt-1">
                      api-stage.vuln.com/.git/config
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-[#71717a]" />
                </div>
              </div>
            </div>
          </div>

          {/* Mockup 2: Asset Groups */}
          <div className="rounded-2xl border border-[#27272a] bg-[#111114]/80 p-1.5 shadow-xl overflow-hidden">
            {/* Browser topbar */}
            <div className="h-9 px-4 flex items-center gap-2 rounded-t-xl bg-[#0a0a0b]/60 border-b border-[#27272a]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]" />
              <div className="ml-3 inline-flex items-center gap-1.5 px-2.5 h-6 rounded-md border border-[#27272a] bg-[#1a1a1d] text-[11px] text-[#a1a1aa] font-mono">
                <Globe size={11} className="text-[#71717a]" />
                <span>dettack.com/groups/vuln-com</span>
              </div>
            </div>

            {/* Inner Content */}
            <div className="rounded-xl border border-[#27272a] bg-[#0a0a0b] p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#71717a] font-medium">
                    Asset Group Scope
                  </div>
                  <div className="text-base font-bold text-[#fafafa] font-mono mt-0.5">
                    vuln.com Primary Perimeter
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-lg bg-[#ef4444]/20 border border-[#ef4444] text-[#ef4444] text-xs font-mono font-bold">
                    Grade B (74)
                  </span>
                </div>
              </div>

              {/* Discovery stats summary */}
              <div className="grid grid-cols-3 gap-2.5 text-center">
                <div className="p-3 rounded-xl border border-[#27272a] bg-[#111114]">
                  <div className="text-lg font-black font-mono text-[#fafafa]">142</div>
                  <div className="text-[10px] text-[#71717a] uppercase tracking-wider">Subdomains</div>
                </div>
                <div className="p-3 rounded-xl border border-[#27272a] bg-[#111114]">
                  <div className="text-lg font-black font-mono text-[#10b981]">128</div>
                  <div className="text-[10px] text-[#71717a] uppercase tracking-wider">TLS Valid</div>
                </div>
                <div className="p-3 rounded-xl border border-[#27272a] bg-[#111114]">
                  <div className="text-lg font-black font-mono text-[#ef4444]">3</div>
                  <div className="text-[10px] text-[#71717a] uppercase tracking-wider">Incidents</div>
                </div>
              </div>

              {/* Topology / Discovery progress bar */}
              <div className="p-3.5 rounded-xl border border-[#27272a] bg-[#111114] space-y-2">
                <div className="flex justify-between text-xs text-[#a1a1aa]">
                  <span>Passive & Active Recon Coverage</span>
                  <span className="font-mono text-[#fafafa]">100% Complete</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#1f1f23] overflow-hidden flex">
                  <div className="h-full bg-[#10b981]" style={{ width: '70%' }} />
                  <div className="h-full bg-[#f59e0b]" style={{ width: '18%' }} />
                  <div className="h-full bg-[#ef4444]" style={{ width: '12%' }} />
                </div>
                <div className="flex justify-between text-[10px] text-[#71717a] font-mono">
                  <span>99 Clean Hosts</span>
                  <span>26 Warnings</span>
                  <span>17 High/Crit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
