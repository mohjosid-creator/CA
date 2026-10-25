import React from 'react';
import { MessageSquare, Github, Shield, Heart, Terminal, BookOpen } from 'lucide-react';
import { TranslationType } from '../data/translations';

interface FooterProps {
  t: TranslationType;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onOpenDocs: () => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onOpenAuth, onOpenDocs }) => {
  return (
    <footer className="border-t border-[#27272a] bg-[#0a0a0b]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-500 to-red-700 text-white font-black grid place-items-center text-sm shadow-[0_0_14px_rgba(239,68,68,0.5)]">
              CA
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-[#fafafa] font-mono">
                CounterAttack
              </span>
              <div className="text-[10px] font-mono text-[#ef4444] font-semibold">
                100x Attack Surface Management
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-sm leading-relaxed">
            {t.footer.blurb}
          </p>

          {/* Prominent By MasJoe badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#ef4444]/40 bg-[#ef4444]/10 text-xs text-[#ef4444] font-mono font-bold shadow-xs">
            <Heart size={13} className="fill-current text-[#ef4444]" />
            <span>Engineered By MasJoe</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#71717a]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span>CounterAttack 100x Edge Nodes Online</span>
          </div>
        </div>

        {/* Product Column */}
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-[#71717a] font-semibold">
            {t.footer.product}
          </div>
          <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
            <li>
              <button
                type="button"
                onClick={onOpenDocs}
                className="text-[#ef4444] hover:underline font-semibold flex items-center gap-1.5 text-left"
              >
                <BookOpen size={13} />
                <span>Documentation</span>
              </button>
            </li>
            <li>
              <a href="#features" className="text-[#a1a1aa] hover:text-[#fafafa] transition-colors">
                {t.footer.features}
              </a>
            </li>
            <li>
              <a href="#how" className="text-[#a1a1aa] hover:text-[#fafafa] transition-colors">
                {t.footer.how}
              </a>
            </li>
            <li>
              <a href="#coverage" className="text-[#a1a1aa] hover:text-[#fafafa] transition-colors">
                {t.nav.coverage}
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-[#a1a1aa] hover:text-[#fafafa] transition-colors">
                {t.nav.pricing}
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onOpenAuth('login')}
                className="text-[#a1a1aa] hover:text-[#fafafa] transition-colors text-left"
              >
                {t.footer.signin}
              </button>
            </li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-[#71717a] font-semibold">
            {t.footer.company}
          </div>
          <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
            <li>
              <a
                href="https://wa.me/6282299996445"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a1a1aa] hover:text-[#fafafa] inline-flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare size={13} className="text-[#10b981]" />
                <span>WhatsApp +62 822-9999-6445</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/redlimitid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a1a1aa] hover:text-[#fafafa] inline-flex items-center gap-1.5 transition-colors"
              >
                <Github size={13} />
                <span>GitHub redlimitid</span>
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-[#a1a1aa] hover:text-[#fafafa] transition-colors">
                {t.footer.terms}
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-[#a1a1aa] hover:text-[#fafafa] transition-colors">
                {t.footer.privacy}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Sub-footer with By MasJoe */}
      <div className="border-t border-[#27272a] bg-[#070708]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#71717a]">
          <div className="flex items-center gap-2 flex-wrap">
            <span>© {new Date().getFullYear()} CounterAttack.</span>
            <span className="text-[#ef4444] font-semibold font-mono">By MasJoe.</span>
            <span>{t.footer.rights}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🇮🇩</span>
            <span className="font-medium text-[#a1a1aa]">By MasJoe · Made in Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
