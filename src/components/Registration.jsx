import React from 'react';
import {
  Ticket,
  User,
  Mail,
  Phone,
  MessageSquare,
  Compass,
  ArrowRight,
  AlertCircle,
  CalendarDays,
  MapPin,
} from 'lucide-react';
import { GuestSelector } from './GuestSelector';

export const Registration = ({
  formData,
  setFormData,
  errors,
  setErrors,
  isLoading,
  onSubmit,
  isGuestDropdownOpen,
  setIsGuestDropdownOpen,
}) => {
  const handleSameAsMobileToggle = (checked) => {
    setFormData((prev) => ({
      ...prev,
      sameAsMobile: checked,
      whatsappNumber: checked ? prev.phoneNumber : prev.whatsappNumber,
    }));
  };

  const handlePhoneChange = (val) => {
    setFormData((prev) => ({
      ...prev,
      phoneNumber: val,
      whatsappNumber: prev.sameAsMobile ? val : prev.whatsappNumber,
    }));
  };

  return (
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
        <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
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
                value={formData.email || ''}
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

            {/* Row 3, Col 1: Custom Naruto-Themed Guest Selector */}
            <GuestSelector
              value={formData.numberOfParticipants}
              onChange={(val) => setFormData({ ...formData, numberOfParticipants: val })}
              isOpen={isGuestDropdownOpen}
              onToggle={() => setIsGuestDropdownOpen((prev) => !prev)}
              onClose={() => setIsGuestDropdownOpen(false)}
            />

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
  );
};
