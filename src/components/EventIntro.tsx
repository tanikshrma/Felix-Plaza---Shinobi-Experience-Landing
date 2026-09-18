import React from 'react';
import { Target, Zap, Award } from 'lucide-react';

export const EventIntro: React.FC = () => {
  return (
    <section
      id="intro"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-[#090505] via-[#150707] to-[#090505] border-t border-b border-[#5A0808]/50 overflow-hidden"
    >
      {/* Background Japanese Watermark Kanji */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none select-none opacity-5 font-kanji text-9xl md:text-[240px] text-[#F04416] leading-none">
        覚悟
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Large "01" Poster Element */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="relative">
              {/* Distressed Number Stamp */}
              <div className="font-dela text-8xl sm:text-9xl lg:text-[140px] leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#FF6600] via-[#F04416] to-[#5A0808] drop-shadow-[0_8px_20px_rgba(240,68,22,0.3)]">
                01
              </div>

              {/* Japanese Seal Overlay */}
              <div className="absolute -bottom-2 -right-4 bg-[#890909] text-[#FFF1D6] font-kanji text-xs px-3 py-1 border border-[#FFB52E]/40 rotate-6 shadow-lg">
                巻物 • 壱
              </div>
            </div>

            <div className="w-16 h-1 bg-gradient-to-r from-[#F04416] to-transparent mt-3" />
            <span className="text-xs font-bold tracking-[0.3em] text-[#FFB52E] uppercase mt-2">
              CHAPTER I : AWAKENING
            </span>
          </div>

          {/* Right: Content + Japanese Graphic */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Small Label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#F04416]" />
              <span className="text-xs font-extrabold tracking-[0.25em] text-[#FF6600] uppercase">
                THE EXPERIENCE
              </span>
            </div>

            {/* Large Heading */}
            <h2 className="font-dela text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none mb-6">
              ENTER THE WORLD <br />
              <span className="text-[#FFB52E]">OF THE SHINOBI</span>
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl text-[#FFF1D6]/90 font-medium leading-relaxed mb-8 max-w-2xl">
              Get ready to step into an action-packed shinobi world where skill, strategy and adventure come together.
            </p>

            {/* Micro Highlights Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#5A0808]/70">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#5A0808]/40 border border-[#890909] text-[#FFB52E]">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide">PRECISION</h3>
                  <p className="text-xs text-[#FFF1D6]/70 mt-0.5">Shuriken targets & agility drills</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#5A0808]/40 border border-[#890909] text-[#FF6600]">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide">CHAKRA ENERGY</h3>
                  <p className="text-xs text-[#FFF1D6]/70 mt-0.5">Interactive live shinobi games</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#5A0808]/40 border border-[#890909] text-[#F04416]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide">DISCIPLINE</h3>
                  <p className="text-xs text-[#FFF1D6]/70 mt-0.5">Guided self defence workshops</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
