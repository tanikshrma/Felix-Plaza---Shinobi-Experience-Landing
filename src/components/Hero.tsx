import React from 'react';
import {
  ArrowRight,
  MapPin,
  CalendarDays,
  GraduationCap,
  Gamepad2,
  ShieldCheck,
  Trophy,
  Flame,
} from 'lucide-react';
import { EmberParticles } from './EmberParticles';
import heroBannerImg from '../assets/images/shinobi_hero_banner_1789708801266.jpg';
import logoImg from '../assets/images/logo.avif';

interface HeroProps {
  onRegisterClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick, onExploreClick }) => {
  // Exact 4 tags from the reference image 1
  const eventTags = [
    { label: 'Workshops', icon: GraduationCap },
    { label: 'Fun games', icon: Gamepad2 },
    { label: 'Self defence', icon: ShieldCheck },
    { label: 'Exciting Challenges', icon: Trophy },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-10 pb-12 sm:pt-14 sm:pb-16 bg-[#090505]"
    >
      {/* Background Graphic & Poster Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBannerImg}
          alt="The Ultimate Shinobi Experience Naruto Saga Event Artwork"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-75 contrast-115 scale-100 lg:scale-102"
        />
        {/* Layered cinematic gradients to ensure high legibility while highlighting artwork */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090505] via-[#090505]/60 to-[#090505]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(9,5,5,0.4)_0,rgba(9,5,5,0.85)_100%)]" />
        {/* Warm amber radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#F04416]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Floating Ember Particles */}
      <EmberParticles count={25} className="z-10" />

      {/* Hero Content Stack - Positioned and Centered matching Reference Image 2 */}
      <div className="relative z-20 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center text-center">
        
        {/* 1. Felix Plaza Centered Logo */}
        <div className="flex flex-col items-center justify-center mb-3">
          <img
            src={logoImg}
            alt="Felix Plaza"
            className="h-12 sm:h-16 md:h-20 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
          />
          {/* PRESENTS */}
          <div className="text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.4em] text-[#FFB52E] uppercase mt-2.5 drop-shadow">
            P R E S E N T S
          </div>
        </div>

        {/* 2. Divider line with theme motif matching Reference Image 2 */}
        <div className="w-full max-w-md sm:max-w-lg flex items-center justify-center gap-3 my-3">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#FF6600]/70 to-[#FFB52E]" />
          <div className="flex items-center gap-2 text-[#FFB52E]">
            <Flame className="w-3.5 h-3.5 text-[#F04416]" />
            <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#FFF1D6]/90 uppercase font-semibold">
              ANIME × NINJA × JAPANESE × ADVENTURE
            </span>
            <Flame className="w-3.5 h-3.5 text-[#F04416]" />
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#FF6600]/70 to-[#FFB52E]" />
        </div>

        {/* 3. Centerpiece Shinobi Crest (similar to the ornamental crest in Reference Image 2) */}
        <div className="my-2 relative flex items-center justify-center">
          <div className="relative px-6 py-2.5 bg-gradient-to-b from-[#5A0808] to-[#150707] border-2 border-[#FFB52E] shadow-2xl shadow-[#F04416]/30 flex items-center gap-2.5">
            <span className="font-kanji text-[#FFB52E] text-2xl font-bold">忍</span>
            <div className="flex flex-col items-center">
              <span className="font-dela text-xs sm:text-sm text-white tracking-widest uppercase">
                SHINOBI SAGA
              </span>
              <span className="text-[9px] tracking-[0.2em] text-[#FFB52E] uppercase font-bold">
                EXPERIENCE
              </span>
            </div>
            <span className="font-kanji text-[#FFB52E] text-2xl font-bold">火</span>
            {/* Corner diamond accents */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#FFB52E] rotate-45" />
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#FFB52E] rotate-45" />
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#FFB52E] rotate-45" />
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#FFB52E] rotate-45" />
          </div>
        </div>

        {/* 4. Giant Main Title - Exact Wording From Reference Image 1 & Centered Layout From Image 2 */}
        <div className="my-4">
          <div className="text-sm sm:text-lg md:text-xl font-medium tracking-[0.3em] text-[#FFF1D6]/90 uppercase mb-1">
            The Ultimate
          </div>

          <h1 className="font-dela text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white uppercase leading-[0.95] drop-shadow-[0_6px_24px_rgba(0,0,0,0.95)]">
            <span className="bg-gradient-to-r from-[#FFF1D6] via-[#FFB52E] to-[#FF6600] bg-clip-text text-transparent">
              SHINOBI
            </span>
          </h1>

          <div className="font-dela text-2xl sm:text-4xl md:text-5xl text-[#F04416] tracking-[0.25em] uppercase mt-1 drop-shadow-md">
            EXPERIENCE
          </div>

          {/* Torn Paper Feature Tags matching Reference (Workshops, Fun games, Self defence, Exciting Challenges) */}
          <div className="my-3.5 w-full max-w-4xl mx-auto px-2">
            <div className="grid grid-cols-2 sm:flex sm:flex-nowrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3.5 max-w-sm sm:max-w-none mx-auto">
              {[
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
              ].map((item) => (
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
        </div>

        {/* 5. Subtitle Quote */}
        <p className="italic font-serif text-base sm:text-xl text-[#FFF1D6]/90 max-w-xl mx-auto my-3 leading-relaxed drop-shadow">
          &ldquo;Your ultimate shinobi experience awaits.&rdquo;
        </p>

        {/* 6. Info Pill Bar - Mobile perfected editorial structure */}
        <div className="mt-4 mb-6 w-full max-w-xl mx-auto px-4 flex justify-center">
          <div className="w-full sm:w-auto inline-flex flex-col sm:flex-row items-center justify-center p-3 sm:px-6 sm:py-2.5 rounded-xl sm:rounded-full bg-[#090909]/95 border border-white/[0.10] shadow-2xl backdrop-blur-md text-xs sm:text-sm text-[#FFF1D6]">
            {/* Mobile View (< sm): Stacked neatly with zero overflow */}
            <div className="flex flex-col items-center gap-1.5 sm:hidden w-full text-center">
              <div className="flex items-center justify-center gap-1.5 font-bold tracking-wider text-xs text-white">
                <CalendarDays className="w-3.5 h-3.5 text-[#FFD21F] shrink-0" />
                <span>05 SEPTEMBER 2026</span>
              </div>
              
              <div className="flex items-center justify-center gap-1.5 font-bold tracking-wider text-xs text-[#16C7B7]">
                <MapPin className="w-3.5 h-3.5 text-[#16C7B7] shrink-0" />
                <span>SECTOR 82 A, GURUGRAM</span>
              </div>

              <div className="w-full max-w-[180px] h-px bg-white/[0.08] my-0.5" />

              <div className="flex items-center justify-center gap-1.5 text-xs">
                <span className="text-[10px] font-semibold tracking-wider uppercase text-white/50">FEATURING</span>
                <span className="font-bold text-[#FF6A00] tracking-wide">Shinobi Trials</span>
              </div>
            </div>

            {/* Desktop / Tablet View (>= sm): Single continuous horizontal pill */}
            <div className="hidden sm:flex items-center justify-center gap-3 md:gap-4 text-xs md:text-sm">
              <div className="flex items-center gap-1.5 font-bold tracking-wider text-white whitespace-nowrap">
                <CalendarDays className="w-3.5 h-3.5 text-[#FFD21F] shrink-0" />
                <span>05 SEPTEMBER 2026</span>
              </div>

              <span className="text-white/20">•</span>

              <div className="flex items-center gap-1.5 font-bold tracking-wider text-[#16C7B7] whitespace-nowrap">
                <MapPin className="w-3.5 h-3.5 text-[#16C7B7] shrink-0" />
                <span>SECTOR 82 A, GURUGRAM</span>
              </div>

              <span className="text-white/20">•</span>

              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-white/50">FEATURING</span>
                <span className="font-bold text-[#FF6A00] tracking-wide">Shinobi Trials</span>
              </div>
            </div>
          </div>
        </div>

        {/* 7. The 4 Torn-Paper Badges from Reference Image 1 */}
        <div className="w-full max-w-2xl mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {eventTags.map((tag) => {
              const IconComponent = tag.icon;
              return (
                <div
                  key={tag.label}
                  className="relative group transition-transform hover:-translate-y-1 duration-200"
                >
                  <div className="torn-paper px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-center gap-2 shadow-lg transform -rotate-1 group-even:rotate-1">
                    <IconComponent className="w-3.5 h-3.5 text-[#890909] shrink-0" />
                    <span className="font-bebas text-sm sm:text-base tracking-wider text-[#090505] whitespace-nowrap font-bold">
                      {tag.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 8. Conversion CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
          <button
            onClick={onRegisterClick}
            id="hero-register-btn"
            className="w-full sm:w-auto relative group overflow-hidden bg-gradient-to-r from-[#F04416] via-[#FF6600] to-[#F04416] text-white font-dela text-base sm:text-lg px-9 py-4 shadow-2xl shadow-[#F04416]/50 hover:shadow-[#F04416]/90 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-[#FFB52E]/50 flame-glow"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span>REGISTER NOW</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          <button
            onClick={onExploreClick}
            id="hero-explore-btn"
            className="w-full sm:w-auto px-7 py-4 bg-[#150707]/90 hover:bg-[#5A0808]/80 text-[#FFF1D6] font-dela text-sm sm:text-base tracking-wider border border-[#890909] hover:border-[#FF6600] transition-all duration-200 backdrop-blur-sm cursor-pointer"
          >
            EXPLORE EXPERIENCE
          </button>
        </div>

      </div>

      {/* Bottom Sub-Bar: Clean Location Status */}
      <div className="relative z-20 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex items-center justify-between text-xs text-[#FFF1D6]/60 border-t border-[#5A0808]/60 pt-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>REGISTRATION OPEN • LIMITED CAPACITY PASSES</span>
          </div>
          <div className="font-mono text-[#FFB52E]">
            SECTOR 82 A, GURUGRAM
          </div>
        </div>
      </div>
    </section>
  );
};
