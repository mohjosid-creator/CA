import React, { useState } from 'react';
import { Flame, Globe, AlertTriangle, ShieldAlert, Sparkles, Terminal } from 'lucide-react';
import { TranslationType } from '../data/translations';

interface DefacementGalleryProps {
  t: TranslationType;
}

export const DefacementGallery: React.FC<DefacementGalleryProps> = ({ t }) => {
  const [activeItem, setActiveItem] = useState<string>('news-gambling');

  const incidents = [
    {
      id: 'news-gambling',
      host: 'news.vuln.com/archive/2019/',
      tag: 'gambling-injection',
      caught: '2 min ago',
      type: 'gambling',
      title: 'SLOT GACOR 88 MAXWIN RESMI',
      bodyText:
        'SITUS SLOT ONLINE TERPERCAYA DENGAN RTP TERTINGGI HARI INI. DAFTAR SEKARANG DAN KLAIM BONUS NEW MEMBER 100%!',
      footerWarning: 'Injected HTML tags overwrite real university press release header.',
    },
    {
      id: 'campus-seo',
      host: 'campus.vuln.com/post/welcome',
      tag: 'gambling-injection',
      caught: '14 min ago',
      type: 'seo',
      title: 'Hidden Googlebot Keyword Injection',
      bodyText:
        '<div style="opacity:0;position:absolute;left:-9999px"><a href="https://mirror-slot-xyz.net">Judi Bola Casino Rolet Togel</a> ... 480 hidden spam backlinks</div>',
      footerWarning: 'Cloaked text serves normal students clean page, but search engine crawlers see casino links.',
    },
    {
      id: 'news-hacked',
      host: 'news.vuln.com/2018/06/gov-statement',
      tag: 'defacement',
      caught: '48 min ago',
      type: 'hacked',
      title: 'HACKED BY INDO-CYBER-CREW',
      bodyText:
        'YOUR SECURITY IS AN ILLUSION! GREETZ TO ALL INDONESIAN DEFACERS. WE ARE HERE BECAUSE YOU FAILED TO PATCH.',
      footerWarning: 'Complete HTML body replaced by attacker index.html script.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.22em] text-[#ef4444] font-semibold">
            {t.gallery.eyebrow}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-[#fafafa]">
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {incidents.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`rounded-2xl border bg-[#111114]/80 p-1.5 shadow-xl overflow-hidden transition-all cursor-pointer ${
                activeItem === item.id
                  ? 'border-[#ef4444] shadow-[0_12px_36px_rgba(239,68,68,0.25)]'
                  : 'border-[#27272a] hover:border-[#3f3f46]'
              }`}
            >
              {/* Browser bar */}
              <div className="h-9 px-3 flex items-center gap-2 rounded-t-xl bg-[#0a0a0b]/80 border-b border-[#27272a]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]" />
                <div className="ml-2 truncate text-[11px] text-[#a1a1aa] font-mono">
                  {item.host}
                </div>
              </div>

              {/* Window Body */}
              <div className="relative rounded-xl border border-[#27272a] bg-[#0a0a0b] p-5 h-64 flex flex-col justify-between overflow-hidden">
                {/* Defacement Detected Badge */}
                <div
                  className="absolute top-2 right-2 z-10 inline-flex items-center gap-1.5 px-2.5 h-6 rounded-md text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    background: '#ef4444',
                    color: '#fff',
                    boxShadow: '0 4px 14px rgba(239,68,68,0.4)',
                  }}
                >
                  <Flame size={12} />
                  <span>{t.gallery.detected}</span>
                </div>

                {item.type === 'gambling' && (
                  <div className="space-y-3 mt-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-amber-600/30 to-red-600/30 border border-amber-500/40 text-amber-300 font-extrabold text-sm sm:text-base tracking-wider text-center font-mono">
                      🎰 {item.title} 🎰
                    </div>
                    <p className="text-[11px] font-mono text-[#a1a1aa] line-clamp-3 bg-[#111114] p-2.5 rounded border border-[#27272a]">
                      {item.bodyText}
                    </p>
                  </div>
                )}

                {item.type === 'seo' && (
                  <div className="space-y-3 mt-4">
                    <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-500/40 text-blue-400 font-bold text-xs font-mono">
                      🤖 User-Agent: Googlebot/2.1 Cloak
                    </div>
                    <p className="text-[11px] font-mono text-[#a1a1aa] bg-[#111114] p-2.5 rounded border border-[#27272a] break-all">
                      {item.bodyText}
                    </p>
                  </div>
                )}

                {item.type === 'hacked' && (
                  <div className="space-y-3 mt-4 text-center">
                    <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/50 text-red-500 font-black text-xs font-mono tracking-widest animate-pulse">
                      ☠️ {item.title} ☠️
                    </div>
                    <p className="text-[11px] font-mono text-[#ef4444] bg-[#111114] p-2 rounded border border-[#27272a]">
                      {item.bodyText}
                    </p>
                  </div>
                )}

                <div className="pt-3 border-t border-[#27272a] flex items-center justify-between text-[11px] text-[#71717a]">
                  <span className="font-mono text-[#ef4444]">tag: {item.tag}</span>
                  <span className="font-mono">{item.caught}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note */}
        <p className="mt-8 text-xs text-[#71717a] text-center max-w-2xl mx-auto">
          {t.gallery.note}
        </p>
      </div>
    </section>
  );
};
