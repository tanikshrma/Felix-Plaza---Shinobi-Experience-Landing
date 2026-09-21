import React, { useState, useEffect } from 'react';
import backgroundImg from '../assets/images/background.avif';
import { EmberParticles } from './EmberParticles';
import { Hero } from './Hero';
import { Registration } from './Registration';
import { EventCards } from './EventCards';
import { Venue } from './Venue';
import { Footer } from './Footer';
import { ConfirmationModal } from './ConfirmationModal';
import { registrationService } from '../services/registrationService';

export const ShinobiPosterLanding = () => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    numberOfParticipants: 1,
    city: '',
    whatsappNumber: '',
    sameAsMobile: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [confirmedPass, setConfirmedPass] = useState(null);
  const [showVenueModal, setShowVenueModal] = useState(false);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowVenueModal(false);
        setConfirmedPass(null);
        setIsGuestDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const validate = () => {
    const errs = {};
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

const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate form first
  if (!validate()) return;

  setIsLoading(true);

  try {
    // Submit registration
    const record = await registrationService.submitRegistration(formData);

    // Meta Pixel: Track successful registration
    if (
      typeof window !== 'undefined' &&
      typeof window.fbq === 'function'
    ) {
      window.fbq('track', 'CompleteRegistration');
    }

    // Show confirmation pass
    setConfirmedPass(record);

  } catch (err) {
    console.error(err);

    setErrors({
      fullName: 'Failed to confirm reservation. Please try again.',
    });

  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#FFF1D6] font-sans selection:bg-[#FF6A00] selection:text-white overflow-hidden pt-3 sm:pt-14 pb-0 px-3 sm:px-6 lg:px-8">
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
        {/* Cyan / Chakra highlight on lower left */}
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#18D5C5]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Floating Ember Particles (constrained above footer) */}
      <div className="absolute inset-x-0 top-0 bottom-48 overflow-hidden pointer-events-none z-10">
        <EmberParticles count={25} className="pointer-events-none" />
      </div>

      {/* Main Poster Container matching reference image centered width */}
      <div className="relative z-20 max-w-6xl mx-auto w-full">
        
        {/* 1. TOP HERO STACK */}
        <Hero />

        {/* 2. TWO-COLUMN CORE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* LEFT COLUMN: Registration Card */}
          <div className="lg:col-span-6 w-full">
            <Registration
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              setErrors={setErrors}
              isLoading={isLoading}
              onSubmit={handleSubmit}
              isGuestDropdownOpen={isGuestDropdownOpen}
              setIsGuestDropdownOpen={setIsGuestDropdownOpen}
            />
          </div>

          {/* RIGHT COLUMN: Framed Photo + "THE GATHERING AWAITS" Card */}
          <div className="lg:col-span-6 w-full">
            <EventCards />
          </div>
        </div>

        {/* 3. VENUE LOCATION TRIGGER & MODAL */}
        <Venue
          isOpen={showVenueModal}
          onOpen={() => setShowVenueModal(true)}
          onClose={() => setShowVenueModal(false)}
        />

      </div>

      {/* 4. POSTER FOOTER */}
      <Footer />

      {/* 5. CONFIRMATION MODAL / OFFICIAL PASS DIALOG */}
      <ConfirmationModal
        confirmedPass={confirmedPass}
        onClose={() => setConfirmedPass(null)}
      />
    </div>
  );
};
