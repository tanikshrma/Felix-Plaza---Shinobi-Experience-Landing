import React from 'react';
import { MapPin, X, Navigation, ExternalLink, CalendarDays, Clock } from 'lucide-react';

export const Venue = ({ isOpen, onClose, onOpen }) => {
  return (
    <>
      {/* 1. VENUE LOCATION TRIGGER (Pill Button) */}
      <div className="mt-12 sm:mt-16 flex justify-center px-4">
        <button
          type="button"
          onClick={onOpen}
          id="open-venue-modal-btn"
          className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#E5AB3A] via-[#E1A738] to-[#D5982C] text-[#0D1E16] font-extrabold text-xs sm:text-sm tracking-[0.22em] uppercase shadow-[0_12px_28px_rgba(225,167,56,0.30)] hover:shadow-[0_16px_36px_rgba(225,167,56,0.45)] hover:brightness-105 active:scale-[0.98] transition-all duration-200 cursor-pointer border border-[#FFD21F]/50"
        >
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#0D1E16] shrink-0 stroke-[2.4]" />
          <span className="font-sans font-black tracking-[0.2em]">SECTOR 82A, GURUGRAM</span>
        </button>
      </div>

      {/* 2. VENUE LOCATION POPUP (Google Maps & Venue Details) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={onClose}
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
                onClick={onClose}
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
    </>
  );
};
