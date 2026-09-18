import React, { useRef, useEffect } from 'react';
import { Users, UserPlus, ChevronDown, Check } from 'lucide-react';

const GUEST_OPTIONS = [
  { value: 1, label: '1 Guest', role: 'Solo Shinobi' },
  { value: 2, label: '2 Guests', role: 'Shinobi Duo' },
  { value: 3, label: '3 Guests', role: 'Genin Trio' },
  { value: 4, label: '4 Guests', role: 'Squad of 4' },
  { value: 5, label: '5 Guests', role: 'Family Clan' },
  { value: 6, label: '6+ Guests', role: 'Full Clan' },
];

export const GuestSelector = ({
  value,
  onChange,
  isOpen,
  onToggle,
  onClose,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const currentOption = GUEST_OPTIONS.find((opt) => opt.value === value) || GUEST_OPTIONS[0];

  return (
    <div className="flex flex-col relative" ref={containerRef}>
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
          onClick={onToggle}
          className={`h-11 w-full flex items-center justify-between bg-[#0F0F14] rounded-lg pl-3.5 pr-3 text-sm text-left transition-all duration-200 cursor-pointer select-none border ${
            isOpen
              ? 'border-[#FFD21F] shadow-[0_0_12px_rgba(255,210,31,0.22)] ring-1 ring-[#FFD21F]/40'
              : 'border-white/[0.10] hover:border-[#FF6A00]/60'
          }`}
        >
          <div className="flex items-center gap-2.5 overflow-hidden">
            <UserPlus className="w-4 h-4 text-[#FF6A00] shrink-0" />
            <span className="truncate text-white font-medium">
              {currentOption.label}{' '}
              <span className="text-white/45 font-normal text-xs">({currentOption.role})</span>
            </span>
          </div>

          <ChevronDown
            className={`w-4 h-4 text-[#FFD21F] shrink-0 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-[#FF6A00]' : ''
            }`}
          />
        </button>

        {/* Custom Dropdown Menu Panel */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1.5 z-50 bg-[#090909] border border-[#FFD21F]/30 rounded-xl shadow-[0_16px_36px_rgba(0,0,0,0.9),0_0_20px_rgba(255,106,0,0.15)] py-1.5 backdrop-blur-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Subtle top amber glow line */}
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD21F] to-transparent pointer-events-none" />

            {GUEST_OPTIONS.map((option) => {
              const isSelected = value === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    onClose();
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
  );
};
