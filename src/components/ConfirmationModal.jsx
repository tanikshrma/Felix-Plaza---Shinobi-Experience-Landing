import React from 'react';
import { Download, CheckCircle2, X } from 'lucide-react';

export const ConfirmationModal = ({
  confirmedPass,
  onClose,
}) => {
  if (!confirmedPass) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-[#090909]/98 text-white rounded-xl p-6 sm:p-8 shadow-2xl border border-white/[0.12] animate-scale-up overflow-hidden">
        {/* Minimal Top Accent Line */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#16C7B7] via-[#FF6A00] to-[#FFD21F]" />

        {/* Close button */}
        <button
          onClick={onClose}
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
            onClick={onClose}
            className="w-full py-2.5 text-xs text-white/60 hover:text-white font-semibold cursor-pointer transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
