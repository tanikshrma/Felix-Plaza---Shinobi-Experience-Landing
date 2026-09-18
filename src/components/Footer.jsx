import React from 'react';

export const Footer = () => {
  return (
    <footer className="mt-12 sm:mt-16 -mx-4 sm:-mx-6 lg:-mx-8 relative z-30 pt-8 pb-4 sm:pb-6 bg-gradient-to-t from-[#050505] via-[#090909]/80 to-transparent">
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="text-xs sm:text-sm font-medium text-white/80 tracking-wide select-none">
          © 2026 Felix Plaza. All rights reserved. | Designed and Marketed by{' '}
          <span className="text-[#FF6A00] font-semibold hover:text-[#FFD21F] transition-colors">
            Creative Monk
          </span>
          .
        </p>
      </div>
    </footer>
  );
};
