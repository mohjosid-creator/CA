import React, { useState } from 'react';
import { X, Lock, Mail, User, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'login',
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  const handleDemoLogin = () => {
    setEmail('operator@dettack.com');
    setPassword('••••••••••••');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md rounded-2xl border border-[#27272a] bg-[#111114] p-6 sm:p-8 shadow-2xl">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-lg text-[#71717a] hover:text-[#fafafa] hover:bg-[#1f1f23] transition-colors"
        >
          <X size={18} />
        </button>

        {/* Modal Brand Header */}
        <div className="text-center">
          <img src="/dettack_logo.png" alt="Dettack" className="h-6 w-auto mx-auto mb-3" />
          <h3 className="text-lg font-bold text-[#fafafa]">
            {mode === 'login' ? 'Sign in to Dettack' : 'Create your account'}
          </h3>
          <p className="text-xs text-[#a1a1aa] mt-1">
            Continuous Attack Surface Management for Defenders
          </p>
        </div>

        {/* Mode Switch Tabs */}
        <div className="mt-5 grid grid-cols-2 p-1 rounded-xl bg-[#1a1a1d] border border-[#27272a] text-xs font-semibold">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`py-2 rounded-lg transition-all ${
              mode === 'login'
                ? 'bg-[#ef4444] text-white shadow-xs'
                : 'text-[#71717a] hover:text-[#fafafa]'
            }`}
          >
            Sign in
          </button>
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`py-2 rounded-lg transition-all ${
              mode === 'signup'
                ? 'bg-[#ef4444] text-white shadow-xs'
                : 'text-[#71717a] hover:text-[#fafafa]'
            }`}
          >
            Create account
          </button>
        </div>

        {submitted ? (
          <div className="mt-8 py-6 text-center space-y-3">
            <CheckCircle2 size={40} className="text-[#10b981] mx-auto animate-bounce" />
            <h4 className="text-sm font-semibold text-[#fafafa]">
              {mode === 'login' ? 'Welcome back, defender' : 'Account provisioned successfully'}
            </h4>
            <p className="text-xs text-[#a1a1aa]">Redirecting to operator console...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-3.5 text-xs">
            {mode === 'signup' && (
              <div>
                <label className="block text-[#a1a1aa] mb-1 font-medium">Full Name</label>
                <div className="relative">
                  <User size={14} className="absolute left-3 top-3 text-[#71717a]" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Raden Security"
                    className="w-full h-10 pl-9 pr-3 rounded-xl border border-[#27272a] bg-[#1a1a1d] text-[#fafafa] placeholder-[#52525b] focus:border-[#ef4444] outline-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-[#a1a1aa] mb-1 font-medium">Work Email</label>
              <div className="relative">
                <Mail size={14} className="absolute left-3 top-3 text-[#71717a]" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full h-10 pl-9 pr-3 rounded-xl border border-[#27272a] bg-[#1a1a1d] text-[#fafafa] placeholder-[#52525b] focus:border-[#ef4444] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#a1a1aa] mb-1 font-medium">Password</label>
              <div className="relative">
                <Lock size={14} className="absolute left-3 top-3 text-[#71717a]" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full h-10 pl-9 pr-3 rounded-xl border border-[#27272a] bg-[#1a1a1d] text-[#fafafa] placeholder-[#52525b] focus:border-[#ef4444] outline-none"
                />
              </div>
            </div>

            {mode === 'login' && (
              <div className="flex items-center justify-between text-[11px] text-[#71717a]">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-[#3f3f46] text-[#ef4444] focus:ring-0 bg-[#1a1a1d]"
                  />
                  <span>Keep me signed in for 7 days</span>
                </label>
                <a href="#" className="hover:text-[#a1a1aa]">Forgot password?</a>
              </div>
            )}

            <button
              type="submit"
              className="mt-4 w-full h-10 rounded-xl bg-[#ef4444] text-white font-semibold hover:bg-[#dc2626] transition-all shadow-md flex items-center justify-center gap-1.5"
            >
              <span>{mode === 'login' ? 'Sign in' : 'Create free account'}</span>
              <ArrowRight size={14} />
            </button>

            {mode === 'login' && (
              <button
                type="button"
                onClick={handleDemoLogin}
                className="w-full h-9 rounded-xl border border-[#3f3f46] bg-[#1a1a1d] text-[#a1a1aa] hover:text-[#fafafa] font-medium transition-colors"
              >
                Instant Operator Demo
              </button>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
