import React from 'react';
import { PlusCircle, Cpu, CheckSquare } from 'lucide-react';
import { TranslationType } from '../data/translations';

interface HowItWorksProps {
  t: TranslationType;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ t }) => {
  const steps = [
    {
      n: '01',
      icon: PlusCircle,
      title: t.how.s1t,
      desc: t.how.s1b,
    },
    {
      n: '02',
      icon: Cpu,
      title: t.how.s2t,
      desc: t.how.s2b,
    },
    {
      n: '03',
      icon: CheckSquare,
      title: t.how.s3t,
      desc: t.how.s3b,
    },
  ];

  return (
    <section id="how" className="py-16 sm:py-24 lg:py-32 bg-[#111114]/40 border-y border-[#27272a]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.22em] text-[#ef4444] font-semibold">
            {t.how.eyebrow}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-[#fafafa]">
            {t.how.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
            {t.how.subtitle}
          </p>
        </div>

        {/* 3 Steps */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.n}
              className="relative rounded-2xl border border-[#27272a] bg-[#1a1a1d]/60 p-6 sm:p-7 hover:border-[#3f3f46] transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#ef4444]">
                  {step.n}
                </span>
                <div className="w-10 h-10 rounded-xl grid place-items-center bg-[#ef4444]/10 text-[#ef4444] border border-[#ef4444]/20">
                  <step.icon size={20} />
                </div>
              </div>

              <h3 className="mt-5 text-base sm:text-lg font-bold tracking-tight text-[#fafafa]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[#a1a1aa] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
