import React from 'react';
import { Flame, ArrowUp } from 'lucide-react';
import logoImg from '../assets/images/logo.avif';

interface Props {
  onRegisterClick: () => void;
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<Props> = ({ onRegisterClick, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-[#FFF1D6] border-t-2 border-[#FFD21F] relative overflow-hidden">
      {/* Top Accent Strip with Naruto Orange, Magenta, Cyan */}
      <div className="h-1 bg-gradient-to-r from-[#FF6A00] via-[#F50087] via-[#18D5C5] to-[#FFD21F]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <img
                src={logoImg}
                alt="Felix Plaza"
                className="h-11 sm:h-14 w-auto max-w-[220px] object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-xs text-[#FFF1D6]/70 mt-3 max-w-sm tracking-wide">
              THE ULTIMATE SHINOBI EXPERIENCE • SECTOR 82 A, GURUGRAM
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6" aria-label="Footer Navigation">
            {[
              { label: 'WORKSHOPS', id: 'experience' },
              { label: 'FUN GAMES', id: 'experience' },
              { label: 'SELF DEFENCE', id: 'experience' },
              { label: 'EXCITING CHALLENGES', id: 'experience' },
              { label: 'LOCATION', id: 'location' },
            ].map((link, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(link.id)}
                className="text-xs sm:text-sm font-semibold tracking-wider text-[#FFF1D6]/80 hover:text-[#FFD21F] transition-colors focus:outline-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Footer CTA */}
          <div>
            <button
              onClick={onRegisterClick}
              className="px-6 py-3 bg-gradient-to-r from-[#FF6A00] via-[#FF8A00] to-[#FFD21F] text-[#050505] font-dela text-xs tracking-wider border border-[#FFD21F] flex items-center gap-2 cursor-pointer shadow-lg shadow-[#FF6A00]/30 transition-all duration-200 hover:brightness-110"
            >
              <Flame className="w-4 h-4 text-[#050505]" />
              <span>REGISTER NOW</span>
            </button>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF1D6]/60">
          <div className="flex items-center gap-3">
            <span>© 2026 Felix Plaza. All rights reserved. | Designed and Marketed by <span className="text-[#FF6A00] font-semibold">Creative Monk</span>.</span>
            <span className="text-[#F50087]">•</span>
            <span className="font-kanji text-[#FF6A00]">火の意志</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#18D5C5]">FAN & COMMUNITY CELEBRATION EVENT</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#0D0D12] hover:bg-[#160A18] border border-[#FFD21F]/40 text-[#FFD21F] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
