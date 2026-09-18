import React, { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import logoImg from '../assets/images/logo.avif';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#150707]/95 backdrop-blur-md border-b border-[#5A0808] py-2.5 sm:py-3 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-[#090505]/95 via-[#090505]/60 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Felix Plaza Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center focus:outline-none"
          aria-label="Felix Plaza Home"
        >
          <img
            src={logoImg}
            alt="Felix Plaza"
            className="h-9 sm:h-11 w-auto max-w-[180px] sm:max-w-[220px] object-contain group-hover:scale-102 transition-transform duration-200"
          />
        </a>

        {/* Center Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {[
            { label: 'ABOUT', id: 'intro' },
            { label: 'EXPERIENCE', id: 'experience' },
            { label: 'ACTIVITIES', id: 'activities' },
            { label: 'LOCATION', id: 'location' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-semibold tracking-wider text-[#FFF1D6]/80 hover:text-[#FFB52E] transition-colors relative py-1 focus:outline-none group cursor-pointer"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#F04416] to-[#FFB52E] transition-all duration-200 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Right: Register Now CTA - Desktop */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollToSection('registration')}
            className="relative group overflow-hidden bg-gradient-to-r from-[#F04416] via-[#FF6600] to-[#F04416] text-white font-dela text-sm px-6 py-2.5 shadow-lg shadow-[#F04416]/30 hover:shadow-[#F04416]/60 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-[#FFB52E]/40"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#FFF1D6] animate-pulse" />
              REGISTER NOW
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => scrollToSection('registration')}
            className="bg-[#F04416] text-white text-xs font-dela px-3.5 py-2 border border-[#FFB52E]/30"
          >
            REGISTER
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#FFF1D6] hover:text-[#FF6600] focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#090505]/98 backdrop-blur-xl border-t border-[#5A0808] z-40 px-6 py-8 flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-[#5A0808]/60 pb-4">
              <img
                src={logoImg}
                alt="Felix Plaza"
                className="h-8 w-auto object-contain"
              />
              <span className="text-[10px] tracking-widest text-[#FF6600] uppercase font-bold">
                NAVIGATION
              </span>
            </div>

            {[
              { label: 'ABOUT THE EVENT', id: 'intro', kanji: '概要' },
              { label: 'EXPERIENCE HIGHLIGHTS', id: 'experience', kanji: '体験' },
              { label: 'CHOOSE ACTIVITIES', id: 'activities', kanji: '挑戦' },
              { label: 'EVENT VENUE & MAP', id: 'location', kanji: '場所' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center justify-between text-left py-3 border-b border-white/5 text-lg font-bebas tracking-wider text-[#FFF1D6] hover:text-[#FFB52E] transition-colors"
              >
                <span>{item.label}</span>
                <span className="font-kanji text-sm text-[#F04416]">{item.kanji}</span>
              </button>
            ))}
          </div>

          <div className="pt-8 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('registration')}
              className="w-full py-4 bg-gradient-to-r from-[#F04416] to-[#FF6600] text-white font-dela text-base text-center shadow-xl shadow-[#F04416]/40 flex items-center justify-center gap-2 border border-[#FFB52E]/50"
            >
              <Flame className="w-5 h-5 text-[#FFF1D6]" />
              REGISTER NOW - FREE ACCESS
            </button>

            <p className="text-center text-xs text-[#FFF1D6]/60 tracking-wider">
              FELIX PLAZA • SECTOR 82A, GURUGRAM
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
