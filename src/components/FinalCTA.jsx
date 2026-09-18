import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { EmberParticles } from './EmberParticles';

export const FinalCTA = ({ onRegisterClick }) => {
  return (
    <section className="relative py-24 sm:py-36 bg-[#090505] overflow-hidden border-t border-[#5A0808]">
      {/* Fiery Texture & Radial Ambient Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#150707] via-[#5A0808]/40 to-[#150707]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,68,22,0.25)_0,transparent_70%)]" />

      {/* Floating Ember Particles */}
      <EmberParticles count={25} className="z-10" />

      {/* Japanese Giant Kanji Background Motif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-kanji text-[200px] sm:text-[340px] text-white/[0.03] select-none pointer-events-none leading-none">
        火影
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#090505]/80 border border-[#FF6600]/60 shadow-xl backdrop-blur-sm mb-6">
          <Flame className="w-4 h-4 text-[#FFB52E] animate-pulse" />
          <span className="text-xs font-bold tracking-[0.25em] text-[#FFF1D6] uppercase">
            FELIX PLAZA • FINAL CALL TO ADVENTURE
          </span>
        </div>

        <h2 className="font-dela text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-none mb-6">
          READY TO BECOME <br />
          <span className="bg-gradient-to-r from-[#FFF1D6] via-[#FFB52E] to-[#F04416] bg-clip-text text-transparent">
            A SHINOBI?
          </span>
        </h2>

        <p className="text-lg sm:text-2xl text-[#FFF1D6]/90 font-medium max-w-xl mx-auto mb-10 leading-relaxed drop-shadow-md">
          &ldquo;Your ultimate shinobi experience awaits.&rdquo;
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onRegisterClick}
            id="final-cta-register-btn"
            className="w-full sm:w-auto relative group overflow-hidden bg-gradient-to-r from-[#F04416] via-[#FF6600] to-[#F04416] text-white font-dela text-lg sm:text-xl px-10 py-5 shadow-2xl shadow-[#F04416]/50 hover:shadow-[#F04416]/90 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer border border-[#FFB52E]/50 flame-glow"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span>REGISTER NOW</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

        <div className="mt-8 text-xs text-[#FFF1D6]/60 tracking-widest uppercase">
          LIMITED PASSES REMAINING • SECTOR 82 A, GURUGRAM
        </div>
      </div>
    </section>
  );
};
