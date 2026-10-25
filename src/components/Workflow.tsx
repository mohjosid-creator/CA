import React, { useState, useEffect } from 'react';
import { Globe, Wifi, Camera, ShieldAlert, Flame, ChevronRight } from 'lucide-react';
import { TranslationType } from '../data/translations';

interface WorkflowProps {
  t: TranslationType;
}

export const Workflow: React.FC<WorkflowProps> = ({ t }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const stages = [
    {
      n: '01',
      title: t.workflow.s1t,
      body: t.workflow.s1b,
      icon: Globe,
      meta: t.workflow.s1m,
    },
    {
      n: '02',
      title: t.workflow.s2t,
      body: t.workflow.s2b,
      icon: Wifi,
      meta: t.workflow.s2m,
    },
    {
      n: '03',
      title: t.workflow.s3t,
      body: t.workflow.s3b,
      icon: Camera,
      meta: t.workflow.s3m,
    },
    {
      n: '04',
      title: t.workflow.s4t,
      body: t.workflow.s4b,
      icon: ShieldAlert,
      meta: t.workflow.s4m,
    },
    {
      n: '05',
      title: t.workflow.s5t,
      body: t.workflow.s5b,
      icon: Flame,
      meta: t.workflow.s5m,
    },
  ];

  return (
    <section id="workflow" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.22em] text-[#ef4444] font-semibold">
            {t.workflow.eyebrow}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-[#fafafa]">
            {t.workflow.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
            {t.workflow.subtitle}
          </p>
        </div>

        {/* 5 Stages Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3.5">
          {stages.map((stage, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={stage.n}
                onClick={() => setActiveStep(idx)}
                className={`relative rounded-2xl border p-4 sm:p-5 overflow-hidden transition-all cursor-pointer ${
                  isActive
                    ? 'border-[#ef4444] bg-[#ef4444]/10 shadow-[0_8px_24px_rgba(239,68,68,0.2)]'
                    : 'border-[#27272a] bg-[#111114]/80 hover:border-[#3f3f46]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-[#ef4444]' : 'text-[#71717a]'
                    }`}
                  >
                    {stage.n}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg grid place-items-center transition-colors ${
                      isActive
                        ? 'bg-[#ef4444] text-white shadow-xs'
                        : 'bg-[#1a1a1d] text-[#a1a1aa] border border-[#27272a]'
                    }`}
                  >
                    <stage.icon size={16} />
                  </div>
                </div>

                <h3 className="mt-4 text-sm sm:text-base font-bold text-[#fafafa]">
                  {stage.title}
                </h3>
                <p className="mt-1 text-xs text-[#a1a1aa] leading-relaxed">
                  {stage.body}
                </p>

                <div className="mt-4 pt-3 border-t border-[#27272a] flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#ef4444] font-medium">{stage.meta}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] animate-ping" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
