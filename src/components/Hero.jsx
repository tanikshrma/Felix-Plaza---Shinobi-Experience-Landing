import React from 'react';
import { Flame, CalendarDays, MapPin, Clock } from 'lucide-react';
import logoImg from '../assets/images/logo.avif';
import narutoSagaImg from '../assets/images/naruto-saga.avif';
import crunchyrollLogoImg from '../assets/images/Crunchyroll-logo.avif';
import sonyLogoImg from '../assets/images/Sony.avif';

const TORN_PAPER_TAGS = [
  {
    title: 'Workshops',
    clip: 'polygon(0% 0%, 100% 0%, 100% 90%, 97% 95%, 94% 89%, 91% 94%, 87% 88%, 84% 95%, 80% 89%, 76% 94%, 72% 88%, 68% 95%, 64% 89%, 60% 94%, 56% 88%, 52% 95%, 47% 89%, 43% 94%, 39% 89%, 35% 95%, 30% 88%, 26% 95%, 22% 89%, 18% 94%, 14% 89%, 10% 95%, 6% 89%, 3% 94%, 0% 90%)',
  },
  {
    title: 'Fun games',
    clip: 'polygon(0% 0%, 100% 0%, 100% 91%, 98% 88%, 95% 95%, 91% 89%, 88% 94%, 84% 89%, 80% 95%, 77% 89%, 73% 94%, 69% 89%, 65% 94%, 61% 88%, 57% 95%, 53% 89%, 49% 94%, 45% 88%, 41% 95%, 37% 89%, 33% 94%, 29% 89%, 25% 94%, 21% 88%, 17% 95%, 13% 89%, 9% 94%, 5% 88%, 2% 94%, 0% 90%)',
  },
  {
    title: 'Self defence',
    clip: 'polygon(0% 0%, 100% 0%, 100% 89%, 97% 95%, 94% 89%, 90% 94%, 86% 88%, 82% 94%, 78% 89%, 75% 95%, 71% 89%, 67% 94%, 63% 88%, 59% 95%, 55% 89%, 50% 94%, 46% 89%, 42% 95%, 38% 89%, 34% 94%, 30% 88%, 26% 95%, 22% 89%, 18% 94%, 14% 89%, 10% 95%, 6% 89%, 3% 94%, 0% 90%)',
  },
  {
    title: 'Exciting Challenges',
    clip: 'polygon(0% 0%, 100% 0%, 100% 90%, 98% 88%, 95% 95%, 92% 89%, 88% 94%, 85% 89%, 81% 95%, 77% 89%, 73% 94%, 69% 89%, 65% 95%, 61% 89%, 57% 94%, 53% 88%, 49% 95%, 45% 89%, 41% 94%, 37% 89%, 33% 95%, 29% 89%, 25% 94%, 21% 88%, 17% 95%, 13% 89%, 9% 94%, 5% 89%, 2% 94%, 0% 90%)',
  },
];

export const Hero = () => {
  return (
    <header className="flex flex-col items-center text-center mb-8 sm:mb-10 w-full">
      {/* Top Header Banner Row: Centered Felix Plaza Logo + Top Right Crunchyroll & Sony Logos (No background, larger) */}
      <div className="relative w-full flex flex-col sm:flex-row items-center justify-center pt-1 pb-3 mb-2">
        {/* Center: Felix Plaza Logo & Presents */}
        <div className="flex flex-col items-center justify-center text-center mx-auto">
          <img
            src={logoImg}
            alt="Felix Plaza"
            className="h-12 sm:h-16 md:h-20 w-auto object-contain drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] mx-auto"
          />
          <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.45em] text-[#FFD21F] uppercase mt-1.5 drop-shadow">
            P R E S E N T S
          </span>
        </div>

        {/* Top Right: Crunchyroll Logo & Sony Logo (Stacked Vertically on Desktop) */}
        <div className="sm:absolute sm:top-0 sm:right-0 flex flex-row sm:flex-col items-center sm:items-end justify-center gap-3 sm:gap-2.5 mt-4 sm:mt-0">
          {/* Crunchyroll Logo */}
          <div className="flex items-center justify-center sm:justify-end shrink-0">
            <img
              src={crunchyrollLogoImg}
              alt="Crunchyroll"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain brightness-110 drop-shadow-xl"
            />
          </div>

          {/* Sony Logo */}
          <div className="flex items-center justify-center sm:justify-end shrink-0">
            <img
              src={sonyLogoImg}
              alt="Sony"
              className="h-9 sm:h-12 md:h-14 w-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* ANIME × NINJA × JAPANESE × ADVENTURE Banner Line */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-3 w-full max-w-[340px] min-[380px]:max-w-md sm:max-w-xl my-2 opacity-95 px-1">
        <div className="h-[1.5px] flex-1 min-w-[12px] bg-gradient-to-r from-transparent via-[#F50087] to-[#FFD21F]" />
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF6A00] shrink-0" />
          <span className="text-[8.5px] min-[360px]:text-[9.5px] min-[400px]:text-[10px] sm:text-xs font-bold tracking-[0.12em] min-[360px]:tracking-[0.18em] sm:tracking-[0.25em] text-[#FFF1D6] uppercase whitespace-nowrap">
            ANIME <span className="text-[#18D5C5]">×</span> NINJA <span className="text-[#F50087]">×</span> JAPANESE <span className="text-[#FFD21F]">×</span> ADVENTURE
          </span>
          <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF8A00] shrink-0" />
        </div>
        <div className="h-[1.5px] flex-1 min-w-[12px] bg-gradient-to-l from-transparent via-[#18D5C5] to-[#FFD21F]" />
      </div>

      {/* Naruto Saga Logo Image */}
      <div className="my-2 relative flex items-center justify-center">
        <img
          src={narutoSagaImg}
          alt="Naruto Saga Experience"
          referrerPolicy="no-referrer"
          className="h-16 sm:h-20 md:h-24 w-auto max-w-[280px] sm:max-w-[360px] object-contain drop-shadow-[0_4px_24px_rgba(255,106,0,0.35)]"
        />
      </div>

      {/* Main Title & Experience Stack */}
      <div className="my-3">
        {/* MEET & GREET Text (Serif italic style, no background, no fire icons) */}
        <div id="meet-and-greet-title" className="my-2.5 text-center">
          <span className="font-serif italic font-medium text-xl sm:text-3xl md:text-4xl text-[#FFF1D6] tracking-wider uppercase drop-shadow-md select-none">
            MEET &amp; GREET
          </span>
        </div>

        <div className="font-bebas text-lg sm:text-2xl tracking-[0.3em] text-[#FFD21F] uppercase mb-1 drop-shadow-sm">
          THE ULTIMATE
        </div>
        <h1 className="font-dela text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white uppercase leading-[0.95] drop-shadow-[0_6px_28px_rgba(0,0,0,0.95)]">
          SHINOBI
        </h1>
        <div className="font-dela text-2xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] via-[#FF8A00] to-[#FFD21F] tracking-[0.25em] uppercase mt-1 drop-shadow-md">
          EXPERIENCE
        </div>
      </div>

      {/* Torn Paper Feature Tags matching Reference Image */}
      <div className="my-3.5 w-full max-w-4xl mx-auto px-2">
        <div className="grid grid-cols-2 sm:flex sm:flex-nowrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3.5 max-w-sm sm:max-w-none mx-auto">
          {TORN_PAPER_TAGS.map((item) => (
            <div
              key={item.title}
              className="w-full sm:w-auto filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.65)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div
                style={{ clipPath: item.clip }}
                className="relative w-full px-1.5 min-[380px]:px-2.5 sm:px-4 md:px-5 pt-2.5 pb-3.5 sm:pt-3 sm:pb-5 bg-[#FAF4E8] bg-gradient-to-b from-[#FFFDF8] via-[#FAF4E8] to-[#EFE2CE] border-t border-x border-white/80 flex items-center justify-center text-center shadow-inner"
              >
                <span
                  style={{ fontFamily: "'Shojumaru', 'Plus Jakarta Sans', system-ui, sans-serif" }}
                  className="relative z-10 text-[#2B0505] font-black text-[10.5px] min-[360px]:text-[11.5px] min-[400px]:text-xs sm:text-[13px] md:text-[15px] tracking-tight whitespace-nowrap block select-none uppercase"
                >
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtitle Quote */}
      <p className="font-serif italic text-base sm:text-lg text-[#FFF1D6]/90 max-w-xl mx-auto mt-2 mb-3 leading-relaxed drop-shadow">
        &ldquo;Your ultimate shinobi experience awaits.&rdquo;
      </p>

      {/* Horizontal Info Pill Bar with Updated Date & Time from Poster (25-27 SEP '26 | 1PM - 8PM | Sector 82 A, Gurugram) */}
      <div className="mt-4 mb-3 w-full max-w-2xl mx-auto px-4 flex justify-center">
        <div className="w-full sm:w-auto inline-flex flex-col sm:flex-row items-center justify-center p-3 sm:px-6 sm:py-2.5 rounded-xl sm:rounded-full bg-[#090909]/95 border border-white/[0.10] shadow-[0_12px_32px_rgba(0,0,0,0.6)] backdrop-blur-md">
          {/* Mobile View (< sm): Stacked neatly */}
          <div className="flex flex-col items-center gap-1.5 sm:hidden w-full text-center">
            <div className="flex items-center justify-center gap-1.5 font-bold tracking-wider text-xs text-[#FFD21F]">
              <CalendarDays className="w-3.5 h-3.5 text-[#FFD21F] shrink-0" />
              <span>25-27 SEP &apos;26</span>
            </div>

            <div className="flex items-center justify-center gap-1.5 font-bold tracking-wider text-xs text-white">
              <Clock className="w-3.5 h-3.5 text-[#FF6A00] shrink-0" />
              <span>1PM - 8PM</span>
            </div>
            
            <div className="flex items-center justify-center gap-1.5 font-bold tracking-wider text-xs text-[#16C7B7]">
              <MapPin className="w-3.5 h-3.5 text-[#16C7B7] shrink-0" />
              <span>SECTOR 82 A, GURUGRAM</span>
            </div>
          </div>

          {/* Desktop / Tablet View (>= sm): Horizontal pill */}
          <div className="hidden sm:flex items-center justify-center gap-3 md:gap-4 text-xs md:text-sm">
            <div className="flex items-center gap-1.5 font-bold tracking-wider text-[#FFD21F] whitespace-nowrap">
              <CalendarDays className="w-3.5 h-3.5 text-[#FFD21F] shrink-0" />
              <span>25-27 SEP &apos;26</span>
            </div>

            <span className="text-white/20">•</span>

            <div className="flex items-center gap-1.5 font-bold tracking-wider text-white whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-[#FF6A00] shrink-0" />
              <span>1PM - 8PM</span>
            </div>

            <span className="text-white/20">•</span>

            <div className="flex items-center gap-1.5 font-bold tracking-wider text-[#16C7B7] whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-[#16C7B7] shrink-0" />
              <span>SECTOR 82 A, GURUGRAM</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

