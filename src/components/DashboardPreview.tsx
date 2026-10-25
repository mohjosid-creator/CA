import React, { useState } from 'react';
import {
  Radar,
  RefreshCw,
  AlertOctagon,
  ShieldAlert,
  Flame,
  Globe,
  ExternalLink,
  CheckCircle,
  Clock,
  Layers,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { MOCK_FINDINGS, MOCK_INCIDENTS } from '../data/mockData';
import { Finding, IncidentItem } from '../types';

export const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'findings' | 'incidents' | 'assets'>('findings');
  const [severityFilter, setSeverityFilter] = useState<string>('all');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedFinding, setSelectedFinding] = useState<Finding | null>(null);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  const filteredFindings = MOCK_FINDINGS.filter((f) => {
    if (severityFilter === 'all') return true;
    return f.severity === severityFilter;
  });

  return (
    <section className="py-6 sm:py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div
          className="relative rounded-2xl border border-[#27272a] bg-[#111114]/90 backdrop-blur-xl p-1.5 sm:p-2 shadow-2xl"
          style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.7)' }}
        >
          {/* Browser Chrome Header */}
          <div className="h-10 px-4 flex items-center justify-between gap-3 rounded-t-xl bg-[#0a0a0b]/60 border-b border-[#27272a]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/60" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 h-6 rounded-md border border-[#27272a] bg-[#1a1a1d] text-xs text-[#a1a1aa] font-mono">
              <Globe size={11} className="text-[#71717a]" />
              <span>dettack.com/dashboard</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#71717a]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="hidden sm:inline">Telemetry Active</span>
            </div>
          </div>

          {/* Real Live Dashboard Canvas */}
          <div className="rounded-xl border border-[#27272a] bg-[#0a0a0b] p-4 sm:p-6 space-y-5">
            {/* Operator Command Header */}
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className="flex items-center gap-2.5 text-base sm:text-lg font-semibold tracking-tight text-[#fafafa]">
                  <span className="w-8 h-8 rounded-xl grid place-items-center bg-[#ef4444]/15 text-[#ef4444]">
                    <Radar size={18} strokeWidth={2.25} />
                  </span>
                  <span>Attack Surface Overview</span>
                </h3>
                <div className="mt-1 ml-[42px] text-xs text-[#71717a]">
                  Operator command center · live perimeter telemetry
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#71717a]">
                <span>Last updated 12s ago</span>
                <button
                  type="button"
                  onClick={handleRefresh}
                  className="inline-flex items-center gap-1 rounded-md border border-[#27272a] bg-[#1a1a1d] px-2.5 py-1 text-xs text-[#a1a1aa] hover:text-[#fafafa] hover:border-[#3f3f46] transition-all"
                >
                  <RefreshCw size={11} className={isRefreshing ? 'animate-spin' : ''} />
                  <span>Refresh</span>
                </button>
              </div>
            </div>

            {/* Critical Exposure Banner */}
            <div className="flex items-center justify-between gap-3 rounded-xl border border-[#ef4444]/40 bg-[#ef4444]/10 px-4 py-2.5 text-xs text-[#ef4444]">
              <span className="flex items-center gap-2 font-medium">
                <AlertOctagon size={16} />
                <span>3 critical exposures need attention in vuln.com scope</span>
              </span>
              <span className="text-[11px] font-mono uppercase bg-[#ef4444]/20 px-2 py-0.5 rounded font-bold">
                Action Required
              </span>
            </div>

            {/* Summary Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-xl border border-[#27272a] bg-[#111114] p-3.5">
                <div className="text-[11px] uppercase tracking-wider text-[#71717a] font-medium">
                  Total Assets
                </div>
                <div className="mt-1 text-2xl font-bold font-mono text-[#fafafa]">
                  142
                </div>
                <div className="text-[10px] text-[#10b981] mt-1 flex items-center gap-1">
                  <span>+6 discovered today</span>
                </div>
              </div>

              <div className="rounded-xl border border-[#27272a] bg-[#111114] p-3.5">
                <div className="text-[11px] uppercase tracking-wider text-[#71717a] font-medium">
                  Security Rating
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-2xl font-black font-mono text-[#f59e0b]">
                    B
                  </span>
                  <span className="text-xs text-[#71717a]">74 / 100</span>
                </div>
                <div className="text-[10px] text-[#a1a1aa] mt-1">
                  Density weighted
                </div>
              </div>

              <div className="rounded-xl border border-[#27272a] bg-[#111114] p-3.5">
                <div className="text-[11px] uppercase tracking-wider text-[#71717a] font-medium">
                  Open Vulns
                </div>
                <div className="mt-1 text-2xl font-bold font-mono text-[#ef4444]">
                  28
                </div>
                <div className="text-[10px] text-[#ef4444] mt-1">
                  3 critical · 8 high
                </div>
              </div>

              <div className="rounded-xl border border-[#27272a] bg-[#111114] p-3.5">
                <div className="text-[11px] uppercase tracking-wider text-[#71717a] font-medium">
                  Incidents
                </div>
                <div className="mt-1 text-2xl font-bold font-mono text-[#ef4444] flex items-center gap-1.5">
                  <Flame size={18} />
                  <span>3</span>
                </div>
                <div className="text-[10px] text-[#a1a1aa] mt-1">
                  1 defacement · 2 slot spam
                </div>
              </div>
            </div>

            {/* Sub-view Navigation Tabs */}
            <div className="flex items-center justify-between border-b border-[#27272a] pt-2 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('findings')}
                  className={`pb-2.5 text-xs sm:text-sm font-semibold transition-colors border-b-2 flex items-center gap-1.5 ${
                    activeTab === 'findings'
                      ? 'border-[#ef4444] text-[#fafafa]'
                      : 'border-transparent text-[#71717a] hover:text-[#a1a1aa]'
                  }`}
                >
                  <ShieldAlert size={14} />
                  <span>Vulnerability Findings (28)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('incidents')}
                  className={`pb-2.5 text-xs sm:text-sm font-semibold transition-colors border-b-2 flex items-center gap-1.5 ${
                    activeTab === 'incidents'
                      ? 'border-[#ef4444] text-[#fafafa]'
                      : 'border-transparent text-[#71717a] hover:text-[#a1a1aa]'
                  }`}
                >
                  <Flame size={14} className="text-[#ef4444]" />
                  <span>Incident Queue (3)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('assets')}
                  className={`pb-2.5 text-xs sm:text-sm font-semibold transition-colors border-b-2 flex items-center gap-1.5 ${
                    activeTab === 'assets'
                      ? 'border-[#ef4444] text-[#fafafa]'
                      : 'border-transparent text-[#71717a] hover:text-[#a1a1aa]'
                  }`}
                >
                  <Globe size={14} />
                  <span>Asset Inventory (142)</span>
                </button>
              </div>

              {activeTab === 'findings' && (
                <div className="flex items-center gap-1 pb-2">
                  {['all', 'critical', 'high', 'medium'].map((sev) => (
                    <button
                      key={sev}
                      onClick={() => setSeverityFilter(sev)}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono capitalize transition-colors ${
                        severityFilter === sev
                          ? 'bg-[#27272a] text-[#fafafa] font-bold'
                          : 'text-[#71717a] hover:text-[#a1a1aa]'
                      }`}
                    >
                      {sev}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Findings Tab Content */}
            {activeTab === 'findings' && (
              <div className="space-y-2">
                <div className="divide-y divide-[#27272a] border border-[#27272a] rounded-xl overflow-hidden bg-[#111114]">
                  {filteredFindings.map((finding) => (
                    <div
                      key={finding.id}
                      onClick={() => setSelectedFinding(finding)}
                      className="p-3 sm:p-4 flex items-center justify-between gap-3 hover:bg-[#1a1a1d] transition-colors cursor-pointer"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase font-mono tracking-wider ${
                              finding.severity === 'critical'
                                ? 'bg-[#ef4444]/20 text-[#ef4444]'
                                : finding.severity === 'high'
                                ? 'bg-[#f59e0b]/20 text-[#f59e0b]'
                                : 'bg-[#fbbf24]/20 text-[#fbbf24]'
                            }`}
                          >
                            {finding.severity}
                          </span>
                          <span className="text-xs font-semibold text-[#fafafa] truncate">
                            {finding.title}
                          </span>
                          {finding.cve && (
                            <span className="font-mono text-[10px] text-[#71717a] bg-[#1f1f23] px-1.5 py-0.2 rounded border border-[#27272a]">
                              {finding.cve}
                            </span>
                          )}
                        </div>

                        <div className="text-[11px] font-mono text-[#a1a1aa] flex items-center gap-2">
                          <span className="text-[#71717a]">{finding.id}</span>
                          <span>·</span>
                          <span className="text-[#3b82f6]">{finding.host}</span>
                          <span>·</span>
                          <span className="text-[#71717a]">{finding.timeAgo}</span>
                        </div>
                      </div>

                      <ChevronRight size={16} className="text-[#71717a] shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Incident Queue Tab Content */}
            {activeTab === 'incidents' && (
              <div className="space-y-3">
                <div className="text-xs text-[#a1a1aa]">
                  Incidents are isolated from vulnerabilities and track live integrity breaches.
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {MOCK_INCIDENTS.map((inc) => (
                    <div
                      key={inc.id}
                      className="p-4 rounded-xl border border-[#ef4444]/30 bg-[#111114] space-y-2 relative"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ef4444]/20 text-[#ef4444] text-[10px] font-bold font-mono uppercase">
                          <Flame size={12} />
                          {inc.type}
                        </span>
                        <span className="text-xs text-[#71717a] font-mono">
                          {inc.caughtAt}
                        </span>
                      </div>

                      <h4 className="text-sm font-semibold text-[#fafafa]">
                        {inc.title}
                      </h4>
                      <p className="text-xs text-[#a1a1aa] bg-[#1a1a1d] p-2.5 rounded-lg border border-[#27272a] font-mono leading-relaxed">
                        {inc.snippet}
                      </p>
                      <div className="text-[11px] font-mono text-[#71717a]">
                        Target host: <span className="text-[#ef4444]">{inc.host}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Asset Inventory Tab Content */}
            {activeTab === 'assets' && (
              <div className="space-y-3">
                <div className="text-xs text-[#71717a]">
                  142 active hosts discovered across passive DNS, TLS logs, and HTTP probing.
                </div>
                <div className="divide-y divide-[#27272a] border border-[#27272a] rounded-xl overflow-hidden bg-[#111114] font-mono text-xs">
                  {[
                    { host: 'api.vuln.com', ip: '103.28.14.92', ports: '80, 443', tech: 'Nginx, Express, Node' },
                    { host: 'portal.vuln.com', ip: '103.28.14.93', ports: '80, 443', tech: 'Cloudflare, Next.js' },
                    { host: 'db-admin.internal.vuln.com', ip: '103.28.14.100', ports: '8080 (phpMyAdmin)', tech: 'Apache 2.4, PHP 8.1' },
                    { host: 'mail.vuln.com', ip: '103.28.14.98', ports: '25, 587, 993', tech: 'Postfix, Dovecot' },
                    { host: 'dev-cluster.vuln.com', ip: '103.28.15.12', ports: '8161, 6443', tech: 'Kubernetes, ActiveMQ' },
                  ].map((asset, i) => (
                    <div key={i} className="p-3 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[#fafafa] font-semibold">{asset.host}</div>
                        <div className="text-[11px] text-[#71717a] mt-0.5">{asset.tech}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[#a1a1aa]">{asset.ip}</div>
                        <div className="text-[10px] text-[#ef4444]">{asset.ports}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
