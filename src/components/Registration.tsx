import React, { useState } from 'react';
import {
  ClipboardCheck,
  Flame,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Phone,
  Users,
  Calendar,
  MapPin,
  QrCode,
  Download,
  PlusCircle,
  ShieldAlert,
} from 'lucide-react';
import { RegistrationFormData, RegistrationRecord, AgeGroup } from '../types';
import { registrationService } from '../services/registrationService';
import { EmberParticles } from './EmberParticles';

interface Props {
  selectedActivity?: string;
}

export const Registration: React.FC<Props> = ({ selectedActivity }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    numberOfParticipants: 1,
    ageGroup: 'Teens (13-17)',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData, string>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<RegistrationRecord | null>(null);

  const ageGroups: AgeGroup[] = ['Kids (6-12)', 'Teens (13-17)', 'Adults (18+)', 'Family Squad'];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof RegistrationFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full ninja name';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    if (!formData.email?.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    const cleanPhone = formData.phoneNumber.replace(/[^0-9]/g, '');
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required for entry pass SMS';
    } else if (cleanPhone.length < 10) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.numberOfParticipants || formData.numberOfParticipants < 1) {
      newErrors.numberOfParticipants = 'Must have at least 1 participant';
    } else if (formData.numberOfParticipants > 12) {
      newErrors.numberOfParticipants = 'Maximum 12 participants per squad pass';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsLoading(true);
    try {
      const record = await registrationService.submitRegistration(formData);
      setSubmissionSuccess(record);
      // scroll to success card
      const formElement = document.getElementById('registration');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (err) {
      console.error('Registration failed:', err);
      setErrors({ fullName: 'Something went wrong. Please retry in a moment.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSubmissionSuccess(null);
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      numberOfParticipants: 1,
      ageGroup: 'Teens (13-17)',
    });
    setErrors({});
  };

  return (
    <section
      id="registration"
      className="relative py-20 sm:py-32 bg-[#090505] overflow-hidden scroll-mt-12"
    >
      {/* Visual Ambiance */}
      <div className="absolute inset-0 bg-radial from-[#5A0808]/20 via-[#090505]/95 to-[#090505] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#F04416]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FF6600]/10 rounded-full blur-3xl pointer-events-none" />
      <EmberParticles count={15} className="z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#150707] border border-[#F04416]/50 shadow-lg mb-4">
            <ClipboardCheck className="w-4 h-4 text-[#FFB52E]" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#FFF1D6] uppercase">
              CONFIRM YOUR ATTENDANCE
            </span>
          </div>

          <h2 className="font-dela text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
            READY TO ENTER <br />
            <span className="bg-gradient-to-r from-[#FFF1D6] via-[#FFB52E] to-[#F04416] bg-clip-text text-transparent">
              THE SHINOBI WORLD?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#FFF1D6]/80 leading-relaxed">
            Secure your spot and experience the ultimate shinobi adventure.
          </p>

          {selectedActivity && (
            <div className="mt-4 inline-block px-4 py-1.5 bg-[#890909]/40 border border-[#FF6600]/40 text-xs font-bold text-[#FFB52E]">
              Selected Activity Focus: {selectedActivity}
            </div>
          )}
        </div>

        {/* Main Box: Either Success Shinobi Pass OR Conversion Form */}
        {submissionSuccess ? (
          /* SUCCESS STATE */
          <div className="bg-[#150707] border-2 border-[#FFB52E] shadow-2xl p-6 sm:p-10 relative overflow-hidden">
            {/* Japanese Watermark */}
            <span className="absolute -bottom-6 -right-6 font-kanji text-9xl text-white/[0.04] pointer-events-none select-none">
              忍道
            </span>

            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="w-16 h-16 bg-[#200b0b] border-2 border-[#FFB52E] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#F04416]/30">
                <CheckCircle className="w-8 h-8 text-[#FFB52E]" />
              </div>
              <span className="text-xs font-bold tracking-[0.3em] text-[#FF6600] uppercase block mb-1">
                PASS CONFIRMED
              </span>
              <h3 className="font-dela text-3xl sm:text-4xl text-white uppercase tracking-wide">
                REGISTRATION SUCCESSFUL
              </h3>
              <p className="text-base text-[#FFF1D6]/90 mt-2 font-medium">
                &ldquo;Your shinobi journey begins here.&rdquo;
              </p>
            </div>

            {/* Shinobi Digital Event Pass */}
            <div className="bg-[#090505] border border-[#5A0808] p-6 sm:p-8 max-w-2xl mx-auto shadow-inner relative">
              {/* Torn Edge Effect Decorative Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#5A0808] pb-4 mb-6 gap-3">
                <div>
                  <span className="text-[11px] font-extrabold tracking-widest text-[#FF6600] uppercase">
                    FELIX PLAZA • OFFICIAL ENTRY PASS
                  </span>
                  <div className="font-dela text-xl text-white tracking-wider">
                    THE ULTIMATE SHINOBI EXPERIENCE
                  </div>
                </div>

                <div className="px-3 py-1 bg-[#890909] text-[#FFF1D6] font-mono text-xs font-bold border border-[#FFB52E]/40">
                  {submissionSuccess.passCode}
                </div>
              </div>

              {/* Pass Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6">
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#FFF1D6]/60">
                    Lead Shinobi
                  </span>
                  <span className="font-bold text-[#FFF1D6] text-base">
                    {submissionSuccess.fullName}
                  </span>
                </div>

                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#FFF1D6]/60">
                    Registered Email
                  </span>
                  <span className="font-bold text-[#FFF1D6] text-base break-all">
                    {submissionSuccess.email}
                  </span>
                </div>

                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#FFF1D6]/60">
                    Squad Size
                  </span>
                  <span className="font-bold text-[#FFB52E] text-base">
                    {submissionSuccess.numberOfParticipants}{' '}
                    {submissionSuccess.numberOfParticipants > 1 ? 'Participants' : 'Participant'}
                  </span>
                </div>

                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#FFF1D6]/60">
                    Age Group
                  </span>
                  <span className="font-bold text-[#FFF1D6] text-base">
                    {submissionSuccess.ageGroup || 'General Squad'}
                  </span>
                </div>

                <div className="sm:col-span-2 pt-2 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#FFF1D6]/80">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#F04416]" />
                    <span>Felix Plaza, Sector 82A, Gurugram</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#FFB52E]" />
                    <span>Entry Window: 10:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Pass Verification Simulation */}
              <div className="bg-[#150707] p-4 flex items-center justify-between border border-[#5A0808]/80">
                <div className="flex items-center gap-3">
                  <QrCode className="w-10 h-10 text-[#FFB52E]" />
                  <div>
                    <span className="block text-xs font-bold text-white">QR ADMIT CODE ACTIVE</span>
                    <span className="text-[10px] text-[#FFF1D6]/60">
                      Present at Felix Plaza registration desk
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold tracking-widest uppercase">
                  VERIFIED
                </span>
              </div>
            </div>

            {/* Post-Registration Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto px-6 py-3 bg-[#5A0808] hover:bg-[#890909] text-white font-dela text-xs tracking-wider border border-[#FFB52E]/30 flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>SAVE / PRINT PASS</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 bg-transparent hover:bg-white/5 text-[#FFF1D6] font-dela text-xs tracking-wider border border-white/20 flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <PlusCircle className="w-4 h-4" />
                <span>REGISTER ANOTHER PARTICIPANT</span>
              </button>
            </div>
          </div>
        ) : (
          /* REGISTRATION FORM */
          <div className="bg-[#150707] border-2 border-[#5A0808] hover:border-[#890909] transition-colors p-6 sm:p-10 lg:p-12 shadow-2xl relative">
            {/* Torn Paper Header Seal */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="torn-paper px-6 py-1.5 shadow-md">
                <span className="font-bebas text-sm sm:text-base tracking-widest text-[#090505] font-bold">
                  OFFICIAL ADMISSION FORM • FREE REGISTRATION
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 pt-4" noValidate>
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs sm:text-sm font-bold tracking-wider text-[#FFF1D6] uppercase mb-2"
                >
                  FULL NAME <span className="text-[#F04416]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#FFF1D6]/40">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="Enter your full name or ninja alias"
                    className={`w-full pl-11 pr-4 py-3.5 bg-[#090505] border ${
                      errors.fullName ? 'border-[#F04416] ring-1 ring-[#F04416]' : 'border-[#5A0808]'
                    } text-white placeholder-[#FFF1D6]/30 text-sm sm:text-base focus:outline-none focus:border-[#FF6600] transition-colors`}
                    disabled={isLoading}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-[#F04416] flex items-center gap-1.5 font-medium">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-bold tracking-wider text-[#FFF1D6] uppercase mb-2"
                  >
                    EMAIL ADDRESS <span className="text-[#F04416]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#FFF1D6]/40">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="ninja@example.com"
                      className={`w-full pl-11 pr-4 py-3.5 bg-[#090505] border ${
                        errors.email ? 'border-[#F04416] ring-1 ring-[#F04416]' : 'border-[#5A0808]'
                      } text-white placeholder-[#FFF1D6]/30 text-sm sm:text-base focus:outline-none focus:border-[#FF6600] transition-colors`}
                      disabled={isLoading}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-[#F04416] flex items-center gap-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-xs sm:text-sm font-bold tracking-wider text-[#FFF1D6] uppercase mb-2"
                  >
                    PHONE NUMBER <span className="text-[#F04416]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#FFF1D6]/40">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={(e) => {
                        setFormData({ ...formData, phoneNumber: e.target.value });
                        if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                      }}
                      placeholder="10-digit mobile number"
                      className={`w-full pl-11 pr-4 py-3.5 bg-[#090505] border ${
                        errors.phoneNumber
                          ? 'border-[#F04416] ring-1 ring-[#F04416]'
                          : 'border-[#5A0808]'
                      } text-white placeholder-[#FFF1D6]/30 text-sm sm:text-base focus:outline-none focus:border-[#FF6600] transition-colors`}
                      disabled={isLoading}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="mt-1.5 text-xs text-[#F04416] flex items-center gap-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.phoneNumber}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Number of Participants */}
              <div>
                <label
                  htmlFor="numberOfParticipants"
                  className="block text-xs sm:text-sm font-bold tracking-wider text-[#FFF1D6] uppercase mb-2"
                >
                  NUMBER OF PARTICIPANTS <span className="text-[#F04416]">*</span>
                </label>
                <div className="flex items-center gap-3">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#FFF1D6]/40">
                      <Users className="w-5 h-5" />
                    </div>
                    <select
                      id="numberOfParticipants"
                      name="numberOfParticipants"
                      value={formData.numberOfParticipants}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          numberOfParticipants: parseInt(e.target.value, 10),
                        })
                      }
                      className="w-full pl-11 pr-4 py-3.5 bg-[#090505] border border-[#5A0808] text-white text-sm sm:text-base focus:outline-none focus:border-[#FF6600] transition-colors appearance-none cursor-pointer"
                      disabled={isLoading}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Participant (Solo Shinobi)' : `Participants (Squad of ${num})`}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {errors.numberOfParticipants && (
                  <p className="mt-1.5 text-xs text-[#F04416] flex items-center gap-1.5 font-medium">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.numberOfParticipants}</span>
                  </p>
                )}
              </div>

              {/* Age Group (Optional) */}
              <div>
                <label className="block text-xs sm:text-sm font-bold tracking-wider text-[#FFF1D6] uppercase mb-2">
                  AGE GROUP <span className="text-xs text-[#FFF1D6]/50 font-normal">(OPTIONAL)</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {ageGroups.map((group) => {
                    const isSelected = formData.ageGroup === group;
                    return (
                      <button
                        type="button"
                        key={group}
                        onClick={() => setFormData({ ...formData, ageGroup: group })}
                        className={`py-3 px-3 text-xs sm:text-sm font-bold tracking-wider uppercase border transition-all text-center cursor-pointer ${
                          isSelected
                            ? 'bg-[#890909] text-[#FFF1D6] border-[#FFB52E] shadow-lg shadow-[#890909]/40'
                            : 'bg-[#090505] text-[#FFF1D6]/70 border-[#5A0808] hover:border-white/20'
                        }`}
                        disabled={isLoading}
                      >
                        {group}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Guarantee / Privacy note */}
              <div className="pt-2 flex items-center gap-2 text-xs text-[#FFF1D6]/60">
                <ShieldAlert className="w-4 h-4 text-[#FFB52E] shrink-0" />
                <span>Instant confirmation QR pass sent via email & SMS. No payment required.</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  id="submit-registration-btn"
                  disabled={isLoading}
                  className="w-full relative group overflow-hidden bg-gradient-to-r from-[#F04416] via-[#FF6600] to-[#F04416] text-white font-dela text-lg sm:text-xl py-4 sm:py-5 shadow-2xl shadow-[#F04416]/50 hover:shadow-[#F04416]/80 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-[#FFB52E]/50 flame-glow disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>SEALING SHINOBI SCROLL...</span>
                      </>
                    ) : (
                      <>
                        <Flame className="w-6 h-6 text-[#FFF1D6] animate-pulse" />
                        <span>REGISTER NOW</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
