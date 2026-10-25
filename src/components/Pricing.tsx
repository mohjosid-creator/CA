import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { TranslationType } from '../data/translations';

interface PricingProps {
  t: TranslationType;
  onOpenAuth: (mode: 'login' | 'signup') => void;
}

export const Pricing: React.FC<PricingProps> = ({ t, onOpenAuth }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [currency, setCurrency] = useState<'IDR' | 'USD'>('IDR');

  return (
    <section id="pricing" className="py-16 sm:py-24 lg:py-28 border-y border-[#27272a] bg-[#111114]/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#27272a] bg-[#111114]/80 backdrop-blur text-xs text-[#a1a1aa]">
              <Sparkles size={13} className="text-[#ef4444]" />
              <span>{t.nav.pricing}</span>
            </div>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-[#fafafa]">
            Clear pricing.{' '}
            <span className="text-[#a1a1aa]">
              {currency === 'IDR' ? 'In Rupiah. No surprises.' : 'Simple & transparent.'}
            </span>
          </h2>

          {/* Toggle controls */}
          <div className="mt-8 flex flex-col items-center gap-3">
            {/* Monthly / Yearly Switcher */}
            <div
              role="tablist"
              className="inline-flex items-center gap-1 rounded-full border border-[#27272a] bg-[#1a1a1d] p-1"
            >
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`h-9 px-4 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-[#ef4444] text-white shadow-md'
                    : 'text-[#71717a] hover:text-[#fafafa]'
                }`}
              >
                {billingCycle === 'monthly' && <Check size={13} strokeWidth={2.5} />}
                <span>Monthly</span>
              </button>

              <button
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={`h-9 px-4 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-[#ef4444] text-white shadow-md'
                    : 'text-[#71717a] hover:text-[#fafafa]'
                }`}
              >
                {billingCycle === 'yearly' && <Check size={13} strokeWidth={2.5} />}
                <span>Yearly</span>
                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                  2 mo free
                </span>
              </button>
            </div>

            {/* Currency Switcher */}
            <div className="inline-flex items-center gap-1 rounded-full border border-[#27272a] bg-[#1a1a1d] p-1">
              <button
                type="button"
                onClick={() => setCurrency('IDR')}
                className={`h-7 px-3 rounded-full text-[11px] font-bold transition-all ${
                  currency === 'IDR'
                    ? 'bg-[#27272a] text-white'
                    : 'text-[#71717a] hover:text-[#a1a1aa]'
                }`}
              >
                IDR (Rp)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`h-7 px-3 rounded-full text-[11px] font-bold transition-all ${
                  currency === 'USD'
                    ? 'bg-[#27272a] text-white'
                    : 'text-[#71717a] hover:text-[#a1a1aa]'
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Plan 1: Free */}
          <div className="rounded-2xl border border-[#27272a] bg-[#1a1a1d]/60 p-6 flex flex-col justify-between hover:border-[#3f3f46] transition-colors">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-emerald-400 text-lg">Free</h3>
              </div>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-3xl font-black font-mono tracking-tight text-[#fafafa]">
                  {currency === 'IDR' ? 'Rp 0' : '$0'}
                </span>
                <span className="text-xs text-[#71717a]">forever</span>
              </div>
              <p className="mt-2 text-xs text-[#a1a1aa] leading-relaxed">
                The whole workflow on one domain, up to 20 assets.
              </p>

              <button
                type="button"
                onClick={() => onOpenAuth('signup')}
                className="mt-6 w-full h-10 rounded-xl text-xs font-semibold inline-flex items-center justify-center gap-2 border border-[#3f3f46] text-[#fafafa] hover:bg-[#27272a] transition-colors"
              >
                <span>Start free</span>
                <ArrowRight size={13} />
              </button>

              <ul className="mt-6 space-y-2.5 text-xs text-[#a1a1aa] border-t border-[#27272a] pt-5">
                {[
                  '1 root domain',
                  'Max 20 assets / domain',
                  'Full 5-stage scan workflow',
                  'Vulnerability scan',
                  'Incident check (defacement & SEO)',
                  'Asset screenshots',
                  'Historical data 7 days',
                  'Security rating (A to F)',
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Plan 2: Starter (Most Popular) */}
          <div className="relative rounded-2xl border-2 border-[#ef4444] bg-[#111114] p-6 flex flex-col justify-between shadow-[0_12px_36px_rgba(239,68,68,0.2)]">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#ef4444] text-white text-[10px] font-bold uppercase tracking-wider">
              Most Popular
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-[#fafafa] text-lg">Starter</h3>
              </div>
              <div className="mt-4">
                <div className="text-xs line-through text-[#71717a] font-mono">
                  {currency === 'IDR' ? 'Rp 3,999,999' : '$249'}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-black font-mono tracking-tight text-[#ef4444]">
                    {currency === 'IDR'
                      ? billingCycle === 'monthly'
                        ? 'Rp 1,489k'
                        : 'Rp 14.8M'
                      : billingCycle === 'monthly'
                      ? '$99'
                      : '$990'}
                  </span>
                  <span className="text-xs text-[#71717a]">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
              </div>

              <p className="mt-2 text-xs text-[#a1a1aa] leading-relaxed">
                Continuous scanning, PDF/CSV reports, room to grow.
              </p>

              <button
                type="button"
                onClick={() => onOpenAuth('signup')}
                className="mt-6 w-full h-10 rounded-xl text-xs font-semibold inline-flex items-center justify-center gap-2 bg-[#ef4444] text-white hover:bg-[#dc2626] transition-all shadow-md"
              >
                <span>Upgrade to Starter</span>
                <ArrowRight size={13} />
              </button>

              <ul className="mt-6 space-y-2.5 text-xs text-[#a1a1aa] border-t border-[#27272a] pt-5">
                {[
                  'Up to 100 assets',
                  'Continuous perimeter scanning',
                  'Incident Check (defacement / slot)',
                  'PDF & CSV export reports',
                  'Dedicated scanner node',
                  'Priority support + SLA',
                  'Density-aware security rating',
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={14} className="text-[#ef4444] mt-0.5 shrink-0" />
                    <span className="text-[#fafafa]">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Plan 3: Professional */}
          <div className="rounded-2xl border border-[#27272a] bg-[#1a1a1d]/60 p-6 flex flex-col justify-between hover:border-[#3f3f46] transition-colors">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-[#f59e0b] text-lg">Professional</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#f59e0b]/15 text-[#f59e0b]">
                  Best Value
                </span>
              </div>
              <div className="mt-4">
                <div className="text-xs line-through text-[#71717a] font-mono">
                  {currency === 'IDR' ? 'Rp 9,999,999' : '$599'}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-black font-mono tracking-tight text-[#fafafa]">
                    {currency === 'IDR'
                      ? billingCycle === 'monthly'
                        ? 'Rp 3,989k'
                        : 'Rp 39.8M'
                      : billingCycle === 'monthly'
                      ? '$269'
                      : '$2,690'}
                  </span>
                  <span className="text-xs text-[#71717a]">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
              </div>

              <p className="mt-2 text-xs text-[#a1a1aa] leading-relaxed">
                Same workflow, room for a much wider portfolio.
              </p>

              <button
                type="button"
                onClick={() => onOpenAuth('signup')}
                className="mt-6 w-full h-10 rounded-xl text-xs font-semibold inline-flex items-center justify-center gap-2 border border-[#3f3f46] text-[#fafafa] hover:bg-[#27272a] transition-colors"
              >
                <span>Upgrade to Professional</span>
                <ArrowRight size={13} />
              </button>

              <ul className="mt-6 space-y-2.5 text-xs text-[#a1a1aa] border-t border-[#27272a] pt-5">
                {[
                  'Up to 500 assets',
                  '10 team seats with RBAC',
                  'Hourly scheduled rescans',
                  'Full API access & Webhooks',
                  'Dedicated scanning nodes',
                  'Custom SLA guarantees',
                  'Incident & defacement notifications',
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={14} className="text-[#f59e0b] mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Plan 4: Enterprise / MSSP */}
          <div className="rounded-2xl border border-[#27272a] bg-[#1a1a1d]/60 p-6 flex flex-col justify-between hover:border-[#3f3f46] transition-colors">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-[#8b5cf6] text-lg">Enterprise</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#8b5cf6]/15 text-[#8b5cf6]">
                  Managed
                </span>
              </div>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-3xl font-black font-mono tracking-tight text-[#fafafa]">
                  Custom
                </span>
              </div>

              <p className="mt-2 text-xs text-[#a1a1aa] leading-relaxed">
                Unlimited scale with dedicated infrastructure.
              </p>

              <a
                href="https://wa.me/6282299996445"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full h-10 rounded-xl text-xs font-semibold inline-flex items-center justify-center gap-2 border border-[#8b5cf6]/40 bg-[#8b5cf6]/10 text-[#8b5cf6] hover:bg-[#8b5cf6]/20 transition-colors"
              >
                <span>Contact sales</span>
                <ArrowRight size={13} />
              </a>

              <ul className="mt-6 space-y-2.5 text-xs text-[#a1a1aa] border-t border-[#27272a] pt-5">
                {[
                  'Unlimited assets & domains',
                  'Custom seats & MSSP tenancy',
                  'Free Penetration Test included',
                  'Free Threat Intel Data Feed',
                  'On-premise / isolated agents',
                  'Custom rule authoring on demand',
                  'Dedicated account security engineer',
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={14} className="text-[#8b5cf6] mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-[#71717a]">
          Prices in {currency}. Need something custom for your organization?{' '}
          <a
            href="https://wa.me/6282299996445"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ef4444] hover:underline font-medium"
          >
            Talk to our engineering team
          </a>
        </p>
      </div>
    </section>
  );
};
