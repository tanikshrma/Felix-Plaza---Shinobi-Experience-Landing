import React, { useState, useEffect, useRef } from 'react';
import {
  CalendarDays,
  MapPin,
  CheckCircle2,
  Check,
  Ticket,
  User,
  Phone,
  Mail,
  Users,
  UserPlus,
  Compass,
  MessageSquare,
  ArrowRight,
  GraduationCap,
  Gamepad2,
  ShieldCheck,
  Trophy,
  Download,
  Building2,
  X,
  Flame,
  AlertCircle,
  ChevronDown,
  Navigation,
  ExternalLink,
  Clock,
} from 'lucide-react';
import logoImg from '../assets/images/logo.avif';
import narutoSagaImg from '../assets/images/naruto-saga.avif';
import backgroundImg from '../assets/images/background.avif';
import heroBannerImg from '../assets/images/shinobi_hero_banner_1789708801266.jpg';
import { EmberParticles } from './EmberParticles';
import { RegistrationFormData, RegistrationRecord } from '../types';
import { registrationService } from '../services/registrationService';

interface ShinobiPosterLandingProps {
  onExploreMore?: () => void;
}

export const ShinobiPosterLanding: React.FC<ShinobiPosterLandingProps> = () => {
  // Form State matching the 6 fields from the reference image layout
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    numberOfParticipants: 1,
    city: '',
    whatsappNumber: '',
    sameAsMobile: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [confirmedPass, setConfirmedPass] = useState<RegistrationRecord | null>(null);
  const [showVenueModal, setShowVenueModal] = useState(false);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
  const guestDropdownRef = useRef<HTMLDivElement>(null);

  // Close guest dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        guestDropdownRef.current &&
        !guestDropdownRef.current.contains(event.target as Node)
      ) {
        setIsGuestDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowVenueModal(false);
        setConfirmedPass(null);
        setIsGuestDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle WhatsApp same-as-mobile checkbox toggle
  const handleSameAsMobileToggle = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      sameAsMobile: checked,
      whatsappNumber: checked ? prev.phoneNumber : prev.whatsappNumber,
    }));
  };

  const handlePhoneChange = (val: string) => {
    setFormData((prev) => ({
      ...prev,
      phoneNumber: val,
      whatsappNumber: prev.sameAsMobile ? val : prev.whatsappNumber,
    }));
  };

  const validate = (): boolean => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    }
    const cleanPhone = formData.phoneNumber.replace(/\D/g, '');
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Mobile number is required';
    } else if (cleanPhone.length < 10) {
      errs.phoneNumber = 'Enter a valid 10-digit mobile number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    try {
      const record = await registrationService.submitRegistration(formData);
      setConfirmedPass(record);
    } catch (err) {
      console.error(err);
      setErrors({ fullName: 'Failed to confirm reservation. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#FFF1D6] font-sans selection:bg-[#FF6A00] selection:text-white overflow-hidden pt-10 sm:pt-14 pb-0 px-4 sm:px-6 lg:px-8">
      {/* Background Graphic & Poster Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={backgroundImg}
          alt="The Ultimate Shinobi Experience Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-[0.85] contrast-105 scale-100"
        />
        {/* Soft anime atmospheric wash allowing the background to remain visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-[#050505]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(5,5,5,0.6)_100%)]" />
        
        {/* Naruto Orange & Yellow energy glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#FF6A00]/15 via-[#FFD21F]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        {/* Hot Pink / Magenta subtle secondary accent wash */}
        <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-[#F50087]/10 rounded-full blur-3xl pointer-events-none" />
        {/* Cyan / Aqua chakra highlight on lower left */}
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#18D5C5]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Floating Ember Particles (constrained above footer so no particles float over the footer) */}
      <div className="absolute inset-x-0 top-0 bottom-48 overflow-hidden pointer-events-none z-10">
        <EmberParticles count={25} className="pointer-events-none" />
      </div>

      {/* Main Poster Container matching reference image centered width */}
      <div className="relative z-20 max-w-6xl mx-auto w-full">
        
        {/* ======================================================== */}
        {/* 1. TOP HERO STACK (Centered layout matching Reference)    */}
        {/* ======================================================== */}
        <header className="flex flex-col items-center text-center mb-10 sm:mb-12">
          
          {/* Logo (Felix Plaza) */}
          <div className="mb-2.5">
            <img
              src={logoImg}
              alt="Felix Plaza"
              className="h-12 sm:h-16 md:h-20 w-auto object-contain drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] mx-auto"
            />
          </div>

          {/* PRESENTS */}
          <div className="text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.45em] text-[#FFD21F] uppercase mb-2 drop-shadow">
            P R E S E N T S
          </div>

          {/* ANIME × NINJA × JAPANESE × ADVENTURE (Before the logo of Naruto) */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-3 w-full max-w-[340px] min-[380px]:max-w-md sm:max-w-xl my-2.5 opacity-95 px-1">
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

          {/* Grand Shinobi Display Title with Naruto Orange/Yellow & Dela Gothic */}
          <div className="my-3">
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

          {/* Subtitle Quote in Italic */}
          <p className="font-serif italic text-base sm:text-lg text-[#FFF1D6]/90 max-w-xl mx-auto mt-2 mb-3 leading-relaxed drop-shadow">
            &ldquo;Your ultimate shinobi experience awaits.&rdquo;
          </p>

          {/* Horizontal Info Pill Bar (Date • Location • Feature) */}
          <div className="mt-4 mb-3 w-full max-w-xl mx-auto px-4 flex justify-center">
            <div className="w-full sm:w-auto inline-flex flex-col sm:flex-row items-center justify-center p-3 sm:px-6 sm:py-2.5 rounded-xl sm:rounded-full bg-[#090909]/95 border border-white/[0.10] shadow-[0_12px_32px_rgba(0,0,0,0.6)] backdrop-blur-md">
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
        </header>

        {/* ======================================================== */}
        {/* 2. TWO-COLUMN CORE LAYOUT (Exact match to Reference Image) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* -------------------------------------------------------- */}
          {/* LEFT COLUMN: Spacious Shinobi Registration Card          */}
          {/* -------------------------------------------------------- */}
          <div className="lg:col-span-6 w-full">
            <div
              id="registration-card"
              className="relative bg-[#090909]/92 backdrop-blur-md border border-white/[0.08] rounded-xl shadow-[0_24px_60px_rgba(0,0,0,0.65),0_1px_0_rgba(255,255,255,0.06)_inset] px-3.5 py-5 sm:p-8 lg:p-10 overflow-hidden transition-colors"
            >
              {/* Minimal Orange/Gold Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent pointer-events-none" />

              <div className="relative z-10">
                {/* Header Metadata Marker */}
                <div className="flex justify-center mb-3">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#FFD21F] text-[11px] font-semibold tracking-[0.2em] uppercase">
                    <Ticket className="w-3.5 h-3.5 text-[#FF6A00]" />
                    COMPLIMENTARY ENTRY PASS
                  </span>
                </div>

                {/* Heading & Subtitle */}
                <div className="text-center mb-7">
                  <h2 className="font-dela text-2xl sm:text-3xl text-white tracking-wide uppercase">
                    RESERVE YOUR PLACE
                  </h2>
                  <p className="text-xs sm:text-sm text-white/70 mt-2 leading-relaxed max-w-md mx-auto">
                    Join us for an epic gathering of ninja workshops, fun games, self defence, and exciting challenges.
                  </p>
                </div>

                {/* Form with clean editorial spacing and pixel-perfect inputs */}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 items-start">
                    
                    {/* Row 1, Col 1: Full Name */}
                    <div className="flex flex-col">
                      <div className="h-6 flex items-center justify-between mb-1.5">
                        <label className="text-[11px] font-bold tracking-wider text-white/90 flex items-center gap-1.5 uppercase">
                          <User className="w-3.5 h-3.5 text-[#FFD21F] shrink-0" />
                          <span>FULL NAME</span>
                          <span className="text-[#FF6A00]">*</span>
                        </label>
                      </div>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) {
                            const next = { ...errors };
                            delete next.fullName;
                            setErrors(next);
                          }
                        }}
                        placeholder="Full name or alias"
                        className="h-11 w-full bg-[#0F0F14] border border-white/[0.10] hover:border-white/[0.18] focus:border-[#FFD21F] rounded-lg px-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#FFD21F]/40 transition-colors"
                      />
                      {errors.fullName && (
                        <p className="text-xs text-[#F21F26] mt-1.5 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Row 1, Col 2: Email Address (optional) */}
                    <div className="flex flex-col">
                      <div className="h-6 flex items-center justify-between mb-1.5">
                        <label className="text-[11px] font-bold tracking-wider text-white/90 flex items-center gap-1.5 uppercase">
                          <Mail className="w-3.5 h-3.5 text-[#FFD21F] shrink-0" />
                          <span>EMAIL ADDRESS</span>
                          <span className="text-[10px] lowercase text-white/40 font-normal">(optional)</span>
                        </label>
                      </div>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) {
                            const next = { ...errors };
                            delete next.email;
                            setErrors(next);
                          }
                        }}
                        placeholder="you@example.com"
                        className="h-11 w-full bg-[#0F0F14] border border-white/[0.10] hover:border-white/[0.18] focus:border-[#FFD21F] rounded-lg px-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#FFD21F]/40 transition-colors"
                      />
                      {errors.email && (
                        <p className="text-xs text-[#F21F26] mt-1.5 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Row 2, Col 1: Mobile Number */}
                    <div className="flex flex-col">
                      <div className="h-6 flex items-center justify-between mb-1.5">
                        <label className="text-[11px] font-bold tracking-wider text-white/90 flex items-center gap-1.5 uppercase">
                          <Phone className="w-3.5 h-3.5 text-[#FFD21F] shrink-0" />
                          <span>MOBILE NUMBER</span>
                          <span className="text-[#FF6A00]">*</span>
                        </label>
                      </div>
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        placeholder="10-digit mobile number"
                        maxLength={10}
                        className="h-11 w-full bg-[#0F0F14] border border-white/[0.10] hover:border-white/[0.18] focus:border-[#FFD21F] rounded-lg px-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#FFD21F]/40 transition-colors"
                      />
                      {errors.phoneNumber && (
                        <p className="text-xs text-[#F21F26] mt-1.5 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phoneNumber}</span>
                        </p>
                      )}
                    </div>

                    {/* Row 2, Col 2: WhatsApp Number + Same as Mobile */}
                    <div className="flex flex-col">
                      <div className="h-6 flex items-center justify-between mb-1.5">
                        <label className="text-[11px] font-bold tracking-wider text-white/90 flex items-center gap-1.5 uppercase">
                          <MessageSquare className="w-3.5 h-3.5 text-[#FFD21F] shrink-0" />
                          <span>WHATSAPP</span>
                          <span className="text-[10px] lowercase text-white/40 font-normal">(optional)</span>
                        </label>
                        <label className="flex items-center gap-1.5 text-[11px] text-white/70 hover:text-white cursor-pointer select-none font-medium">
                          <input
                            type="checkbox"
                            checked={formData.sameAsMobile || false}
                            onChange={(e) => handleSameAsMobileToggle(e.target.checked)}
                            className="rounded border-white/20 bg-[#0F0F14] text-[#FFD21F] focus:ring-0 w-3.5 h-3.5 cursor-pointer accent-[#FFD21F]"
                          />
                          <span>Same as mobile</span>
                        </label>
                      </div>
                      <input
                        type="tel"
                        value={formData.whatsappNumber || ''}
                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                        placeholder="WhatsApp number"
                        maxLength={10}
                        className="h-11 w-full bg-[#0F0F14] border border-white/[0.10] hover:border-white/[0.18] focus:border-[#FFD21F] rounded-lg px-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#FFD21F]/40 transition-colors"
                      />
                    </div>

                    {/* Row 3, Col 1: Number of Guests (Custom Premium Naruto-Themed Dropdown) */}
                    <div className="flex flex-col relative" ref={guestDropdownRef}>
                      <div className="h-6 flex items-center justify-between mb-1.5">
                        <label className="text-[11px] font-bold tracking-wider text-white/90 flex items-center gap-1.5 uppercase">
                          <Users className="w-3.5 h-3.5 text-[#FFD21F] shrink-0" />
                          <span>NUMBER OF GUESTS</span>
                          <span className="text-[#FF6A00]">*</span>
                        </label>
                      </div>

                      {/* Dropdown Trigger Button */}
                      <div className="relative">
                        <button
                          type="button"
                          id="guest-count-dropdown-trigger"
                          onClick={() => setIsGuestDropdownOpen((prev) => !prev)}
                          className={`h-11 w-full flex items-center justify-between bg-[#0F0F14] rounded-lg pl-3.5 pr-3 text-sm text-left transition-all duration-200 cursor-pointer select-none border ${
                            isGuestDropdownOpen
                              ? 'border-[#FFD21F] shadow-[0_0_12px_rgba(255,210,31,0.22)] ring-1 ring-[#FFD21F]/40'
                              : 'border-white/[0.10] hover:border-[#FF6A00]/60'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 overflow-hidden">
                            <UserPlus className="w-4 h-4 text-[#FF6A00] shrink-0" />
                            <span className="truncate text-white font-medium">
                              {formData.numberOfParticipants === 1 && (
                                <>
                                  1 Guest <span className="text-white/45 font-normal text-xs">(Solo Shinobi)</span>
                                </>
                              )}
                              {formData.numberOfParticipants === 2 && (
                                <>
                                  2 Guests <span className="text-white/45 font-normal text-xs">(Shinobi Duo)</span>
                                </>
                              )}
                              {formData.numberOfParticipants === 3 && (
                                <>
                                  3 Guests <span className="text-white/45 font-normal text-xs">(Genin Trio)</span>
                                </>
                              )}
                              {formData.numberOfParticipants === 4 && (
                                <>
                                  4 Guests <span className="text-white/45 font-normal text-xs">(Squad of 4)</span>
                                </>
                              )}
                              {formData.numberOfParticipants === 5 && (
                                <>
                                  5 Guests <span className="text-white/45 font-normal text-xs">(Family Clan)</span>
                                </>
                              )}
                              {formData.numberOfParticipants === 6 && (
                                <>
                                  6+ Guests <span className="text-white/45 font-normal text-xs">(Full Clan)</span>
                                </>
                              )}
                            </span>
                          </div>

                          <ChevronDown
                            className={`w-4 h-4 text-[#FFD21F] shrink-0 transition-transform duration-200 ${
                              isGuestDropdownOpen ? 'rotate-180 text-[#FF6A00]' : ''
                            }`}
                          />
                        </button>

                        {/* Custom Dropdown Menu Panel */}
                        {isGuestDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1.5 z-50 bg-[#090909] border border-[#FFD21F]/30 rounded-xl shadow-[0_16px_36px_rgba(0,0,0,0.9),0_0_20px_rgba(255,106,0,0.15)] py-1.5 backdrop-blur-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                            {/* Subtle top amber glow line */}
                            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD21F] to-transparent pointer-events-none" />

                            {[
                              { value: 1, label: '1 Guest', role: 'Solo Shinobi' },
                              { value: 2, label: '2 Guests', role: 'Shinobi Duo' },
                              { value: 3, label: '3 Guests', role: 'Genin Trio' },
                              { value: 4, label: '4 Guests', role: 'Squad of 4' },
                              { value: 5, label: '5 Guests', role: 'Family Clan' },
                              { value: 6, label: '6+ Guests', role: 'Full Clan' },
                            ].map((option) => {
                              const isSelected = formData.numberOfParticipants === option.value;
                              return (
                                <button
                                  key={option.value}
                                  type="button"
                                  onClick={() => {
                                    setFormData({ ...formData, numberOfParticipants: option.value });
                                    setIsGuestDropdownOpen(false);
                                  }}
                                  className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-sm transition-all duration-150 cursor-pointer ${
                                    isSelected
                                      ? 'bg-gradient-to-r from-[#FF6A00]/25 via-[#FFD21F]/15 to-transparent text-white font-medium border-l-2 border-[#FFD21F]'
                                      : 'text-white/85 hover:bg-[#FF6A00]/12 hover:text-white hover:pl-4'
                                  }`}
                                >
                                  <div className="flex items-center gap-2">
                                    <span
                                      className={`text-sm ${
                                        isSelected ? 'text-[#FFD21F] font-bold' : 'text-white'
                                      }`}
                                    >
                                      {option.label}
                                    </span>
                                    <span className="text-xs text-white/45">
                                      ({option.role})
                                    </span>
                                  </div>

                                  {isSelected && (
                                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#FFD21F]/20 text-[#FFD21F] shrink-0">
                                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Row 3, Col 2: City / Location (optional) */}
                    <div className="flex flex-col">
                      <div className="h-6 flex items-center justify-between mb-1.5">
                        <label className="text-[11px] font-bold tracking-wider text-white/90 flex items-center gap-1.5 uppercase">
                          <Compass className="w-3.5 h-3.5 text-[#FFD21F] shrink-0" />
                          <span>CITY / LOCATION</span>
                          <span className="text-[10px] lowercase text-white/40 font-normal">(optional)</span>
                        </label>
                      </div>
                      <input
                        type="text"
                        value={formData.city || ''}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Gurugram, Delhi NCR"
                        className="h-11 w-full bg-[#0F0F14] border border-white/[0.10] hover:border-white/[0.18] focus:border-[#FFD21F] rounded-lg px-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#FFD21F]/40 transition-colors"
                      />
                    </div>

                  </div>

                  {/* Refined CTA Button: Matched to Sector 82 A Button Theme */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      id="confirm-reservation-btn"
                      className="w-full group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 py-3.5 sm:py-4 px-6 sm:px-10 rounded-full bg-gradient-to-r from-[#E5AB3A] via-[#E1A738] to-[#D5982C] text-[#0D1E16] font-extrabold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.22em] uppercase shadow-[0_12px_28px_rgba(225,167,56,0.30)] hover:shadow-[0_16px_36px_rgba(225,167,56,0.45)] hover:brightness-105 active:scale-[0.98] transition-all duration-200 cursor-pointer border border-[#FFD21F]/50"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-[#0D1E16] border-t-transparent rounded-full animate-spin" />
                          <span className="font-sans font-black tracking-[0.2em]">CONFIRMING ENTRY PASS...</span>
                        </span>
                      ) : (
                        <span className="relative z-10 flex items-center justify-center gap-2 font-sans font-black tracking-[0.18em] sm:tracking-[0.2em]">
                          <span>CONFIRM RESERVATION</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0D1E16] stroke-[2.4]" />
                        </span>
                      )}
                    </button>
                  </div>

                  {/* Reassurance Footer Bullets under button - Kept on ONE LINE cleanly with zero truncation */}
                  <div className="pt-2.5 w-full">
                    <div className="flex items-center justify-center gap-1.5 min-[360px]:gap-2 sm:gap-3 md:gap-4 text-[10px] min-[360px]:text-[11px] min-[400px]:text-[11.5px] sm:text-xs text-white/75 text-center w-full max-w-full">
                      <div className="flex items-center gap-1 whitespace-nowrap shrink-0">
                        <Ticket className="w-3 h-3 min-[360px]:w-3.5 min-[360px]:h-3.5 sm:w-4 sm:h-4 text-[#FF6A00] shrink-0" />
                        <span className="font-semibold text-white/95">Free Entry Pass</span>
                      </div>
                      <span className="text-white/30 shrink-0 select-none">•</span>
                      <div className="flex items-center gap-1 whitespace-nowrap shrink-0">
                        <CalendarDays className="w-3 h-3 min-[360px]:w-3.5 min-[360px]:h-3.5 sm:w-4 sm:h-4 text-[#FFD21F] shrink-0" />
                        <span className="font-medium text-white/90">05 Sept 2026</span>
                      </div>
                      <span className="text-white/30 shrink-0 select-none">•</span>
                      <div className="flex items-center gap-1 whitespace-nowrap shrink-0">
                        <MapPin className="w-3 h-3 min-[360px]:w-3.5 min-[360px]:h-3.5 sm:w-4 sm:h-4 text-[#16C7B7] shrink-0" />
                        <span className="font-medium text-white/90">Sector 82 A</span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* RIGHT COLUMN: Framed Photo + "THE GATHERING AWAITS" Card */}
          {/* -------------------------------------------------------- */}
          <div className="lg:col-span-6 w-full space-y-6">
            
            {/* 1. TOP RIGHT: Feature Image Card (Editorial Poster Focus) */}
            <div className="relative rounded-xl overflow-hidden bg-[#090909] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.65)] group">
              {/* Minimal Orange/Gold Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#FF6A00] via-[#FFD21F] to-transparent z-10" />

              {/* Photo Container with subtle editorial vignette */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black">
                <img
                  src={heroBannerImg}
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

        </div>

        {/* ======================================================== */}
        {/* 3. VENUE LOCATION TRIGGER (Image 1 Pill Button)          */}
        {/* ======================================================== */}
        <div className="mt-12 sm:mt-16 flex justify-center px-4">
          <button
            type="button"
            onClick={() => setShowVenueModal(true)}
            id="open-venue-modal-btn"
            className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#E5AB3A] via-[#E1A738] to-[#D5982C] text-[#0D1E16] font-extrabold text-xs sm:text-sm tracking-[0.22em] uppercase shadow-[0_12px_28px_rgba(225,167,56,0.30)] hover:shadow-[0_16px_36px_rgba(225,167,56,0.45)] hover:brightness-105 active:scale-[0.98] transition-all duration-200 cursor-pointer border border-[#FFD21F]/50"
          >
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#0D1E16] shrink-0 stroke-[2.4]" />
            <span className="font-sans font-black tracking-[0.2em]">SECTOR 82A, GURUGRAM</span>
          </button>
        </div>

        {/* ======================================================== */}
        {/* 4. POSTER FOOTER (Full-width gradient from dark at bottom to transparent at top, zero bottom spacing) */}
        {/* ======================================================== */}
        <footer className="mt-12 sm:mt-16 -mx-4 sm:-mx-6 lg:-mx-8 relative z-30 pt-8 pb-1.5 sm:pb-2 bg-gradient-to-t from-[#050505] via-[#090909]/80 to-transparent">
          <div className="max-w-4xl mx-auto text-center px-4">
            <p className="text-xs sm:text-sm font-medium text-white/80 tracking-wide select-none">
              © 2026 Felix Plaza. All rights reserved. | Designed and Marketed by <span className="text-[#FF6A00] font-semibold hover:text-[#FFD21F] transition-colors">Creative Monk</span>.
            </p>
          </div>
        </footer>

      </div>

      {/* ======================================================== */}
      {/* 5. VENUE LOCATION POPUP (Image 2 Matching Website Theme) */}
      {/* ======================================================== */}
      {showVenueModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setShowVenueModal(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#090909]/98 text-white rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-white/[0.12] overflow-hidden animate-scale-up flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Multi-Tone Accent Line */}
            <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-[#16C7B7] via-[#FF6A00] to-[#FFD21F] z-30" />

            {/* Modal Header */}
            <div className="relative z-20 flex items-center justify-between px-5 sm:px-6 py-4 bg-[#0D120F]/90 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#E5AB3A]/20 border border-[#E5AB3A]/40 flex items-center justify-center text-[#FFD21F] shrink-0">
                  <MapPin className="w-4 h-4 text-[#FFD21F] stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-dela text-sm sm:text-base text-white tracking-wider uppercase">
                    FELIX PLAZA • VENUE LOCATION
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/65 mt-0.5">
                    Sector 82A, Rampura, Gurugram (NH-48)
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowVenueModal(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Map Body with Floating Venue Card */}
            <div className="relative w-full h-[320px] sm:h-[400px] md:h-[440px] bg-[#0c0c10] overflow-hidden">
              {/* Google Map Embed */}
              <iframe
                title="Felix Plaza Google Map"
                src="https://maps.google.com/maps?q=Felix+Plaza,+Sector+82A,+Rampura,+Gurugram,+Haryana+122004&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-[1.05] brightness-[0.96]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Venue Card (Top Left of Map) */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 max-w-[270px] sm:max-w-xs bg-[#090909]/95 backdrop-blur-md border border-white/[0.14] rounded-xl p-3.5 sm:p-4 shadow-[0_16px_36px_rgba(0,0,0,0.85)] text-left">
                <div className="flex items-start gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.12] flex items-center justify-center shrink-0 text-[#16C7B7]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-dela text-xs sm:text-sm text-white tracking-wide">
                      FELIX PLAZA
                    </h4>
                    <p className="text-[11px] text-white/70 leading-snug mt-1 font-sans">
                      Sector 82A, Rampura, Gurugram, Haryana 122004
                    </p>
                    <p className="text-[10px] font-semibold text-[#16C7B7] mt-1 font-sans">
                      Near AapnoGhar &amp; Hyatt Regency (NH-48)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-white/[0.08]">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Felix+Plaza+Sector+82A+Gurugram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-[#11261D] hover:bg-[#183928] border border-[#16C7B7]/40 text-[#16C7B7] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>DIRECTIONS</span>
                  </a>
                  <a
                    href="https://maps.google.com/?q=Felix+Plaza+Sector+82A+Gurugram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] border border-white/[0.10] text-white/75 hover:text-white transition-colors"
                    title="Open in Google Maps"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Modal Footer Bar */}
            <div className="relative z-20 px-5 sm:px-6 py-3.5 bg-[#0D120F]/90 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-xs text-white/80">
                <div className="flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5 text-[#FFD21F] shrink-0" />
                  <span><strong className="text-white">Date:</strong> 05 September 2026</span>
                </div>
                <span className="text-white/25 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#FF6A00] shrink-0" />
                  <span>6:30 PM Onwards</span>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Felix+Plaza+Sector+82A+Gurugram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#E5AB3A] to-[#D5982C] text-[#0A1812] font-bold text-xs tracking-wider uppercase hover:brightness-105 active:scale-[0.98] transition-all shadow flex items-center justify-center gap-2 cursor-pointer font-sans"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#0A1812] stroke-[2.2]" />
                <span>OPEN FULL GOOGLE MAP</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 5. CONFIRMATION MODAL / OFFICIAL PASS DIALOG             */}
      {/* ======================================================== */}
      {confirmedPass && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md bg-[#090909]/98 text-white rounded-xl p-6 sm:p-8 shadow-2xl border border-white/[0.12] animate-scale-up overflow-hidden">
            {/* Minimal Top Accent Line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#16C7B7] via-[#FF6A00] to-[#FFD21F]" />

            {/* Close button */}
            <button
              onClick={() => setConfirmedPass(null)}
              className="absolute top-4 right-4 p-1.5 rounded-md text-white/60 hover:text-white hover:bg-white/10 cursor-pointer z-10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Status Header with Coordinates */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-3 mb-5">
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#16C7B7]">
                <span className="w-2 h-2 rounded-full bg-[#16C7B7]" />
                <span>COORDINATES: 28.3842° N, 76.9691° E</span>
              </div>
              <span className="text-[10px] font-bold text-[#FFD21F] tracking-widest uppercase font-mono">
                SECTOR 82 A
              </span>
            </div>

            {/* Success Icon & Heading */}
            <div className="relative z-10 text-center mb-5">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#16C7B7]/10 border border-[#16C7B7]/40 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-6 h-6 text-[#16C7B7]" />
              </div>

              <span className="text-[10px] font-dela tracking-widest uppercase text-[#16C7B7] bg-[#16C7B7]/10 px-3 py-1 rounded-full border border-[#16C7B7]/30">
                RESERVATION CONFIRMED
              </span>
              <h3 className="font-dela text-2xl text-white mt-2.5">
                ENTRY PASS ISSUED
              </h3>
              <p className="text-xs text-white/70 mt-1">
                Your complimentary admission pass is ready. Please present this at Felix Plaza.
              </p>
            </div>

            {/* The Ticket Badge */}
            <div className="relative z-10 bg-white/[0.03] border border-white/[0.08] rounded-lg p-4 mb-5 text-left space-y-2.5">
              <div className="flex justify-between items-center border-b border-white/[0.06] pb-2">
                <span className="text-[10px] font-bold text-[#FF8A00] uppercase tracking-wider">Pass Holder</span>
                <span className="font-bold text-sm text-white">{confirmedPass.fullName}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/[0.06] pb-2">
                <span className="text-[10px] font-bold text-[#FF8A00] uppercase tracking-wider">Pass Code</span>
                <span className="font-mono font-bold text-xs text-[#FFD21F]">{confirmedPass.passCode}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/[0.06] pb-2">
                <span className="text-[10px] font-bold text-[#FF8A00] uppercase tracking-wider">Guest Count</span>
                <span className="font-bold text-xs text-white">{confirmedPass.numberOfParticipants} Person(s)</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/[0.06] pb-2">
                <span className="text-[10px] font-bold text-[#FF8A00] uppercase tracking-wider">Event Date</span>
                <span className="font-bold text-xs text-white">05 September 2026</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-[#FF8A00] uppercase tracking-wider">Venue</span>
                <span className="font-bold text-xs text-white">Felix Plaza, Sector 82 A</span>
              </div>
            </div>

            {/* Actions */}
            <div className="relative z-10 space-y-2">
              <button
                onClick={() => window.print()}
                className="w-full py-3.5 px-4 rounded-lg bg-gradient-to-r from-[#FF6A00] to-[#FFD21F] text-[#090909] font-dela text-xs uppercase tracking-wider hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md font-bold"
              >
                <Download className="w-4 h-4 text-[#090909]" />
                <span>Save / Print Pass</span>
              </button>
              <button
                onClick={() => setConfirmedPass(null)}
                className="w-full py-2.5 text-xs text-white/60 hover:text-white font-semibold cursor-pointer transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
