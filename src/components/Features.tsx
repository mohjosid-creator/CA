import React from 'react';
import {
  Globe,
  ShieldAlert,
  Flame,
  Activity,
  CalendarClock,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { TranslationType } from '../data/translations';

interface FeaturesProps {
  t: TranslationType;
}

export const Features: React.FC<FeaturesProps> = ({ t }) => {
  const featureList = [
    {
      icon: Globe,
      title: t.features.f1t,
      desc: t.features.f1b,
      tone: 'text-[#3b82f6]',
      bg: 'bg-[#3b82f6]/10',
    },
    {
      icon: ShieldAlert,
      title: t.features.f2t,
      desc: t.features.f2b,
      tone: 'text-[#ef4444]',
      bg: 'bg-[#ef4444]/10',
    },
    {
      icon: Layers,
      title: t.features.f3t,
      desc: t.features.f3b,
      tone: 'text-[#f59e0b]',
      bg: 'bg-[#f59e0b]/10',
    },
    {
      icon: Flame,
      title: t.features.f4t,
      desc: t.features.f4b,
      tone: 'text-[#ef4444]',
      bg: 'bg-[#ef4444]/15',
      badge: 'Unique',
    },
    {
      icon: Activity,
      title: t.features.f5t,
      desc: t.features.f5b,
      tone: 'text-[#10b981]',
      bg: 'bg-[#10b981]/10',
    },
    {
      icon: CalendarClock,
      title: t.features.f6t,
      desc: t.features.f6b,
      tone: 'text-[#8b5cf6]',
      bg: 'bg-[#8b5cf6]/10',
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.22em] text-[#ef4444] font-semibold">
            {t.features.eyebrow}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-[#fafafa]">
            {t.features.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-[#27272a] bg-[#111114]/80 p-6 hover:border-[#3f3f46] hover:bg-[#1a1a1d]/60 transition-all shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-11 h-11 rounded-xl grid place-items-center ${item.bg} ${item.tone} border border-white/5`}
                >
                  <item.icon size={22} strokeWidth={2} />
                </div>
                {item.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wider font-mono px-2 py-0.5 rounded bg-[#ef4444]/20 text-[#ef4444] border border-[#ef4444]/30">
                    {item.badge}
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-base sm:text-lg font-bold tracking-tight text-[#fafafa] group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[#a1a1aa] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
