import React from 'react';
import {
  Flame,
  Building2,
  GraduationCap,
  Gamepad2,
  ShieldCheck,
  Trophy,
} from 'lucide-react';
import naruto1920x1080Img from '../assets/images/Naruto - 1920x1080.avif';

export const EventCards = () => {
  return (
    <div className="w-full space-y-6">
      {/* 1. TOP RIGHT: Feature Image Card (Editorial Poster Focus) */}
      <div className="relative rounded-xl overflow-hidden bg-[#090909] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.65)] group">
        {/* Minimal Orange/Gold Top Accent Line */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#FF6A00] via-[#FFD21F] to-transparent z-10" />

        {/* Photo Container with subtle editorial vignette */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black">
          <img
            src={naruto1920x1080Img}
            alt="The Ultimate Shinobi Experience Featured Banner"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
          
          {/* Subtle editorial vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/20 to-black/40" />

          {/* Top-Right Badge: GENRE / Anime × Ninja × Adventure */}
          <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 text-right px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#090909]/85 border border-white/[0.12] backdrop-blur-md shadow-md">
            <div className="text-[8.5px] sm:text-[9px] uppercase tracking-[0.25em] text-[#16C7B7] font-bold">
              GENRE
            </div>
            <div className="font-bebas text-xs sm:text-sm md:text-base text-white/95 tracking-wider whitespace-nowrap mt-0.5">
              Anime × Ninja × Adventure
            </div>
          </div>

          {/* Bottom Bar on image: Clean Editorial Metadata Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-end justify-between text-xs text-white">
            <div>
              <div className="text-[9px] uppercase tracking-[0.25em] text-[#FFD21F] font-bold mb-1">
                FEATURED EXPERIENCE
              </div>
              <div className="font-dela text-base sm:text-lg text-white tracking-wide">
                Naruto Saga Experience
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. BOTTOM RIGHT: "THE GATHERING AWAITS" Card (Editorial Programme Grid) */}
      <div className="relative bg-[#090909]/92 backdrop-blur-md border border-white/[0.08] p-6 sm:p-7 rounded-xl shadow-[0_24px_50px_rgba(0,0,0,0.65),0_1px_0_rgba(255,255,255,0.06)_inset] overflow-hidden">
        {/* Minimal Orange Top Accent Line */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6A00]/80 to-transparent pointer-events-none" />

        {/* Card Header Line: CURATED GATHERING & FELIX PLAZA */}
        <div className="flex items-center justify-between text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase border-b border-white/[0.08] pb-3 mb-5">
          <div className="flex items-center gap-1.5 text-[#FF6A00]">
            <Flame className="w-3.5 h-3.5" />
            <span>CURATED GATHERING</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#16C7B7]">
            <Building2 className="w-3.5 h-3.5" />
            <span>FELIX PLAZA</span>
          </div>
        </div>

        {/* Heading */}
        <h3 className="font-dela text-xl sm:text-2xl text-white tracking-wider uppercase mb-5">
          THE GATHERING AWAITS
        </h3>

        {/* Clean Editorial Programme Grid (4 Items: 01, 02, 03, 04) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] rounded-lg overflow-hidden border border-white/[0.06]">
          
          {/* 01: Workshops */}
          <div className="p-4 sm:p-4.5 bg-[#090909]/95 hover:bg-[#111116] transition-colors duration-200 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <div className="w-7 h-7 rounded-md bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#FF6A00]">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <span className="font-bebas text-sm text-white/40 tracking-widest group-hover:text-[#FFD21F] transition-colors">01</span>
              </div>
              <h4 className="font-dela text-sm text-white tracking-wide mb-1">
                Workshops
              </h4>
              <p className="text-xs text-white/65 leading-relaxed font-sans">
                Master stealth footwork, ninja scrolls, and authentic taijutsu postures.
              </p>
            </div>
          </div>

          {/* 02: Fun Games */}
          <div className="p-4 sm:p-4.5 bg-[#090909]/95 hover:bg-[#111116] transition-colors duration-200 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <div className="w-7 h-7 rounded-md bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#F51BA7]">
                  <Gamepad2 className="w-3.5 h-3.5" />
                </div>
                <span className="font-bebas text-sm text-white/40 tracking-widest group-hover:text-[#F51BA7] transition-colors">02</span>
              </div>
              <h4 className="font-dela text-sm text-white tracking-wide mb-1">
                Fun games
              </h4>
              <p className="text-xs text-white/65 leading-relaxed font-sans">
                Target shuriken throwing, agility laser evasion, and clan trials.
              </p>
            </div>
          </div>

          {/* 03: Self Defence */}
          <div className="p-4 sm:p-4.5 bg-[#090909]/95 hover:bg-[#111116] transition-colors duration-200 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <div className="w-7 h-7 rounded-md bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#16C7B7]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span className="font-bebas text-sm text-white/40 tracking-widest group-hover:text-[#16C7B7] transition-colors">03</span>
              </div>
              <h4 className="font-dela text-sm text-white tracking-wide mb-1">
                Self defence
              </h4>
              <p className="text-xs text-white/65 leading-relaxed font-sans">
                Practical escape counters, spatial awareness, and reflex drills.
              </p>
            </div>
          </div>

          {/* 04: Exciting Challenges */}
          <div className="p-4 sm:p-4.5 bg-[#090909]/95 hover:bg-[#111116] transition-colors duration-200 group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <div className="w-7 h-7 rounded-md bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#FFD21F]">
                  <Trophy className="w-3.5 h-3.5" />
                </div>
                <span className="font-bebas text-sm text-white/40 tracking-widest group-hover:text-[#FFD21F] transition-colors">04</span>
              </div>
              <h4 className="font-dela text-sm text-white tracking-wide mb-1">
                Exciting Challenges
              </h4>
              <p className="text-xs text-white/65 leading-relaxed font-sans">
                Timed obstacle course gauntlets, stage duels, and certificate of valor.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Quote Line */}
        <div className="mt-5 pt-4 border-t border-white/[0.08] text-center">
          <p className="text-xs font-serif italic text-[#FFD21F]/90 tracking-wide">
            &ldquo;Come for the legend. Stay for the shinobi spirit.&rdquo;
          </p>
        </div>

      </div>
    </div>
  );
};
