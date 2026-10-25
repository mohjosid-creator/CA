import React, { useState } from 'react';
import { MessageSquare, Menu, X, ArrowRight, BookOpen, Zap } from 'lucide-react';
import { Language, TranslationType } from '../data/translations';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  t: TranslationType;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onOpenScan: () => void;
  onOpenDocs: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  t,
  onOpenAuth,
  onOpenScan,
  onOpenDocs,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#coverage', label: t.nav.coverage },
    { href: '#incident-check', label: t.nav.incident },
    { href: '#features', label: t.nav.features },
    { href: '#workflow', label: t.nav.workflow },
    { href: '#how', label: t.nav.how },
    { href: '#pricing', label: t.nav.pricing },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0b]/85 border-b border-[#27272a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* CounterAttack Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-500 to-red-700 text-white font-black grid place-items-center text-sm shadow-[0_0_16px_rgba(239,68,68,0.5)] group-hover:scale-105 transition-transform">
            CA
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-extrabold text-lg tracking-tight text-[#fafafa] font-mono">
                CounterAttack
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#ef4444]/20 text-[#ef4444] font-bold border border-[#ef4444]/30">
                100x
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.16em] text-[#71717a] font-mono mt-0.5">
              Attack Surface Management
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 text-sm text-[#a1a1aa] font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-md hover:text-[#fafafa] hover:bg-[#1a1a1d] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}

          {/* Integrated Documentation Link */}
          <button
            type="button"
            onClick={onOpenDocs}
            className="px-3 py-1.5 rounded-md hover:text-[#fafafa] hover:bg-[#1a1a1d] transition-colors whitespace-nowrap flex items-center gap-1.5 text-[#ef4444] font-semibold"
          >
            <BookOpen size={14} />
            <span>Docs</span>
          </button>
        </nav>

        {/* Right CTA actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Switcher */}
          <div
            className="inline-flex items-center rounded-lg border border-[#27272a] bg-[#111114] p-0.5"
            role="group"
            aria-label="Language Selector"
          >
            {(['en', 'id'] as const).map((l) => {
              const active = lang === l;
              return (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`px-2.5 h-7 rounded-md text-[11px] font-bold uppercase tracking-wider transition-all ${
                    active
                      ? 'bg-[#1f1f23] text-[#fafafa] shadow-xs'
                      : 'text-[#71717a] hover:text-[#a1a1aa]'
                  }`}
                >
                  {l}
                </button>
              );
            })}
          </div>

          {/* WhatsApp Direct Hotline */}
          <a
            href="https://wa.me/6282299996445"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex h-9 items-center gap-1.5 px-3 rounded-lg border border-[#27272a] bg-[#111114] text-xs font-medium text-[#a1a1aa] hover:text-[#fafafa] hover:border-[#3f3f46] hover:bg-[#1a1a1d] transition-colors"
            title="Chat via WhatsApp (+62 822-9999-6445)"
          >
            <MessageSquare size={13} className="text-[#10b981]" />
            <span>{t.nav.contact}</span>
          </a>

          {/* Sign In button */}
          <button
            type="button"
            onClick={() => onOpenAuth('login')}
            className="hidden sm:inline-flex h-9 items-center px-3.5 rounded-lg border border-[#27272a] bg-[#111114] text-xs font-semibold text-[#fafafa] hover:bg-[#1a1a1d] hover:border-[#3f3f46] transition-colors"
          >
            {t.nav.signin}
          </button>

          {/* 100x Scanner CTA */}
          <button
            type="button"
            onClick={onOpenScan}
            className="inline-flex h-9 items-center gap-1.5 px-3.5 sm:px-4 rounded-lg bg-[#ef4444] text-white text-xs sm:text-sm font-semibold hover:bg-[#dc2626] transition-all shadow-[0_2px_12px_rgba(239,68,68,0.4)]"
          >
            <Zap size={14} className="fill-current" />
            <span className="hidden sm:inline">100x Scanner</span>
            <span className="sm:hidden">Scan</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#a1a1aa] hover:text-[#fafafa] hover:bg-[#1a1a1d] border border-transparent hover:border-[#27272a]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#27272a] bg-[#0a0a0b]/98 backdrop-blur-xl px-5 py-5 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-[#a1a1aa] hover:text-[#fafafa] hover:bg-[#1a1a1d]"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDocs();
              }}
              className="px-3 py-2 rounded-lg text-[#ef4444] font-semibold hover:bg-[#1a1a1d] text-left flex items-center gap-1.5"
            >
              <BookOpen size={14} />
              <span>Documentation</span>
            </button>
          </div>

          <div className="pt-3 border-t border-[#27272a] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('login');
              }}
              className="w-full h-10 rounded-lg border border-[#27272a] bg-[#111114] text-sm font-semibold text-[#fafafa] flex items-center justify-center"
            >
              {t.nav.signin}
            </button>
            <a
              href="https://wa.me/6282299996445"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-10 rounded-lg border border-[#27272a] bg-[#111114] text-sm font-medium text-[#a1a1aa] flex items-center justify-center gap-2"
            >
              <MessageSquare size={14} className="text-[#10b981]" />
              <span>WhatsApp (+62 822-9999-6445)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
