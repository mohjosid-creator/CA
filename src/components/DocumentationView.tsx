import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Rocket,
  UserPlus,
  LayoutDashboard,
  Layers,
  ScanSearch,
  Radar,
  ListChecks,
  AlertTriangle,
  AlertOctagon,
  CheckCircle2,
  FileClock,
  Activity,
  Gauge,
  Bot,
  SlidersHorizontal,
  Bell,
  Users,
  KeyRound,
  LogIn,
  Building2,
  LifeBuoy,
  Settings,
  Play,
  Search,
  ChevronRight,
  ArrowLeft,
  ExternalLink,
  ShieldAlert,
  Zap,
  Terminal,
  Copy,
  Check,
} from 'lucide-react';
import { DOC_NAV_GROUPS, DOC_PAGES } from '../data/docsData';
import { Language } from '../data/translations';

interface DocumentationViewProps {
  lang: Language;
  setLang: (l: Language) => void;
  onBackToApp: () => void;
  onOpenScan: (target?: string) => void;
  initialPageId?: string;
}

const ICON_MAP: Record<string, React.ElementType> = {
  BookOpen,
  Rocket,
  UserPlus,
  LayoutDashboard,
  Layers,
  ScanSearch,
  Radar,
  ListChecks,
  AlertTriangle,
  AlertOctagon,
  CheckCircle2,
  FileClock,
  Activity,
  Gauge,
  Bot,
  SlidersHorizontal,
  Bell,
  Users,
  KeyRound,
  LogIn,
  Building2,
  LifeBuoy,
  Settings,
  Play,
};

export const DocumentationView: React.FC<DocumentationViewProps> = ({
  lang,
  setLang,
  onBackToApp,
  onOpenScan,
  initialPageId = 'introduction',
}) => {
  const [currentPageId, setCurrentPageId] = useState<string>(initialPageId);
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  // Filter navigation based on search query
  const filteredGroups = useMemo(() => {
    if (!searchQuery.trim()) return DOC_NAV_GROUPS;
    const q = searchQuery.toLowerCase();
    return DOC_NAV_GROUPS.map((group) => {
      const filteredItems = group.items.filter(
        (item) =>
          item.label.toLowerCase().includes(q) ||
          item.id.toLowerCase().includes(q) ||
          (DOC_PAGES[item.id] &&
            (DOC_PAGES[item.id].title.toLowerCase().includes(q) ||
              DOC_PAGES[item.id].lede.toLowerCase().includes(q)))
      );
      return {
        ...group,
        items: filteredItems,
      };
    }).filter((group) => group.items.length > 0);
  }, [searchQuery]);

  const currentPage = DOC_PAGES[currentPageId] || DOC_PAGES['introduction'];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + '#/docs/' + currentPageId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-[#fafafa] flex flex-col selection:bg-red-500/30">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#0a0a0b]/90 border-b border-[#27272a] h-16 flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onBackToApp}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#a1a1aa] hover:text-[#fafafa] bg-[#111114] border border-[#27272a] hover:border-[#3f3f46] px-3 py-1.5 rounded-lg transition-colors"
          >
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Back to App</span>
          </button>

          <div className="h-5 w-px bg-[#27272a]" />

          <a href="#" onClick={(e) => { e.preventDefault(); onBackToApp(); }} className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#ef4444] text-white font-black grid place-items-center text-sm shadow-[0_0_12px_rgba(239,68,68,0.5)]">
              CA
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-extrabold text-base tracking-tight text-[#fafafa]">
                CounterAttack
              </span>
              <span className="text-[11px] font-mono text-[#ef4444] font-bold">
                Docs
              </span>
            </div>
          </a>
        </div>

        {/* Header Right */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="inline-flex items-center rounded-lg border border-[#27272a] bg-[#111114] p-0.5">
            {(['en', 'id'] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`px-2.5 h-7 rounded-md text-[11px] font-bold uppercase transition-all ${
                  lang === l
                    ? 'bg-[#1f1f23] text-white shadow-xs'
                    : 'text-[#71717a] hover:text-[#a1a1aa]'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onOpenScan('vuln.com')}
            className="inline-flex h-9 items-center gap-1.5 px-3.5 rounded-lg bg-[#ef4444] text-white text-xs font-semibold hover:bg-[#dc2626] transition-all shadow-md"
          >
            <Zap size={13} />
            <span className="hidden sm:inline">Test 100x Scanner</span>
            <span className="sm:hidden">Scan</span>
          </button>
        </div>
      </header>

      {/* Docs Body Layout: Sidebar + Main Content */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Left Sidebar */}
        <aside className="w-72 shrink-0 border-r border-[#27272a] bg-[#0d0d10] p-4 hidden md:flex md:flex-col gap-4 overflow-y-auto max-h-[calc(100vh-4rem)] sticky top-16">
          {/* Search Bar */}
          <div className="relative">
            <Search size={14} className="absolute left-3 top-2.5 text-[#71717a]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documentation..."
              className="w-full h-9 pl-8 pr-3 rounded-lg border border-[#27272a] bg-[#111114] text-xs text-[#fafafa] placeholder-[#71717a] focus:border-[#ef4444] outline-none"
            />
          </div>

          {/* Navigation Groups */}
          <nav className="space-y-6 text-xs">
            {filteredGroups.map((group, gIdx) => (
              <div key={gIdx} className="space-y-1.5">
                <div className="px-2 text-[10px] font-mono uppercase tracking-[0.16em] text-[#71717a] font-bold">
                  {lang === 'id' ? group.titleId : group.title}
                </div>
                <div className="space-y-0.5">
                  {group.items.map((item) => {
                    const IconComponent = ICON_MAP[item.icon] || BookOpen;
                    const isActive = currentPageId === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setCurrentPageId(item.id);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg font-medium transition-colors text-left ${
                          isActive
                            ? 'bg-[#ef4444]/15 text-[#ef4444] font-semibold border border-[#ef4444]/30'
                            : 'text-[#a1a1aa] hover:text-[#fafafa] hover:bg-[#1a1a1d]'
                        }`}
                      >
                        <IconComponent size={14} className={isActive ? 'text-[#ef4444]' : 'text-[#71717a]'} />
                        <span className="truncate">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          <div className="mt-auto pt-4 border-t border-[#27272a] text-[11px] text-[#71717a]">
            <span>CounterAttack Engine v4.2</span>
            <div className="text-[10px] text-[#52525b]">100x Accelerated Recon</div>
          </div>
        </aside>

        {/* Main Content Article */}
        <main className="flex-1 p-5 sm:p-8 lg:p-12 max-w-4xl min-w-0">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-[#71717a] font-mono mb-4">
            <span>Docs</span>
            <ChevronRight size={12} />
            <span className="text-[#a1a1aa]">Chapter</span>
            <ChevronRight size={12} />
            <span className="text-[#ef4444] capitalize">{currentPageId}</span>
          </div>

          {/* Article Header */}
          <div className="pb-6 border-b border-[#27272a] space-y-3">
            {currentPage.eyebrow && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ef4444]/10 border border-[#ef4444]/30 text-[11px] font-mono text-[#ef4444] font-medium">
                {currentPage.eyebrow}
              </div>
            )}
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#fafafa]">
                {currentPage.title}
              </h1>

              <button
                type="button"
                onClick={handleCopyLink}
                className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#27272a] bg-[#111114] text-xs text-[#71717a] hover:text-[#fafafa] hover:border-[#3f3f46] transition-colors"
                title="Copy section link"
              >
                {copied ? <Check size={13} className="text-[#10b981]" /> : <Copy size={13} />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Share'}</span>
              </button>
            </div>

            {currentPage.lede && (
              <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
                {currentPage.lede}
              </p>
            )}
          </div>

          {/* 100x HyperScan Highlight Callout Banner for scanning docs */}
          {(currentPageId === 'introduction' || currentPageId === 'scans' || currentPageId === 'quickstart') && (
            <div className="my-6 p-4 rounded-xl border border-[#ef4444]/40 bg-[#ef4444]/10 flex items-start gap-3">
              <Zap size={20} className="text-[#ef4444] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-[#fafafa] flex items-center gap-2">
                  <span>CounterAttack 100x Supercharged Scanner Active</span>
                  <span className="text-[10px] font-mono bg-[#ef4444] text-white px-1.5 py-0.5 rounded">
                    PRO ENGINE
                  </span>
                </h4>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  Now evaluating over <strong>1,425,400+ detection rules</strong> in parallel, covering full 65,535 ports, deep passive DNS, and continuous Indonesia &amp; SEA localized defacement / slot gacor signature sweeps.
                </p>
              </div>
            </div>
          )}

          {/* Rendered HTML Documentation Article with Styled Tailwind typography */}
          <div
            className="prose prose-invert max-w-none mt-8 text-sm text-[#d4d4d8] leading-relaxed space-y-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#fafafa] [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-[#fafafa] [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-[#a1a1aa] [&_code]:text-[#ef4444] [&_code]:bg-[#1a1a1d] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:font-mono [&_pre]:bg-[#111114] [&_pre]:p-4 [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-[#27272a] [&_pre]:overflow-x-auto [&_table]:w-full [&_table]:border [&_table]:border-[#27272a] [&_th]:bg-[#1a1a1d] [&_th]:p-2.5 [&_th]:text-left [&_th]:text-xs [&_th]:font-mono [&_td]:p-2.5 [&_td]:border-t [&_td]:border-[#27272a] [&_td]:text-xs [&_blockquote]:border-l-2 [&_blockquote]:border-[#ef4444] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-[#a1a1aa]"
            dangerouslySetInnerHTML={{ __html: currentPage.html }}
          />

          {/* Chapter Navigation Footer */}
          <div className="mt-14 pt-8 border-t border-[#27272a] flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={onBackToApp}
              className="inline-flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
            >
              <ArrowLeft size={13} />
              <span>Return to Overview</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenScan('vuln.com')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ef4444] text-white text-xs font-semibold hover:bg-[#dc2626] transition-all shadow-md"
            >
              <span>Launch 100x Scan</span>
              <Terminal size={14} />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
