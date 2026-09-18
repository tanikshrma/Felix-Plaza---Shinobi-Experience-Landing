import React from 'react';
import { MapPin, Navigation, Car, Train, Clock, Compass, Shield } from 'lucide-react';

export const Location = () => {
  const directionsUrl =
    'https://www.google.com/maps/search/?api=1&query=Felix+Plaza+Sector+82A+Gurugram';

  return (
    <section
      id="location"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#090505] via-[#150707] to-[#090505] border-t border-[#5A0808]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#5A0808]/40 border border-[#F04416]/40 mb-3">
            <Compass className="w-3.5 h-3.5 text-[#FFB52E]" />
            <span className="text-xs font-extrabold tracking-[0.25em] text-[#FFB52E] uppercase">
              STRATEGIC RENDEZVOUS
            </span>
          </div>

          <h2 className="font-dela text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight mb-4">
            YOUR MISSION <br />
            <span className="text-[#F04416]">STARTS HERE</span>
          </h2>

          <p className="text-base sm:text-lg text-[#FFF1D6]/80 leading-relaxed">
            Conveniently situated at the heart of New Gurugram with spacious parking and seamless connectivity.
          </p>
        </div>

        {/* Visual Tactical Poster Map Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Stylized Japanese Tactical Map Canvas */}
          <div className="lg:col-span-7 bg-[#090505] border-2 border-[#5A0808] p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-2xl">
            {/* Tactical Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#5A080815_1px,transparent_1px),linear-gradient(to_bottom,#5A080815_1px,transparent_1px)] bg-[size:28px_28px]" />

            {/* Kanji Watermark */}
            <span className="absolute top-4 right-4 font-kanji text-7xl sm:text-9xl text-white/[0.04] pointer-events-none select-none">
              拠点
            </span>

            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-[#5A0808] pb-3 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF6600]">
                  <span className="w-2 h-2 rounded-full bg-[#FF6600] animate-ping" />
                  <span>COORDINATES: 28.3842° N, 76.9691° E</span>
                </div>
                <span className="text-[11px] font-bold text-[#FFB52E] tracking-widest uppercase">
                  SECTOR 82 A ZONE
                </span>
              </div>

              {/* Stylized Tactical Node Layout */}
              <div className="my-6 p-6 bg-[#150707]/90 border border-[#890909] relative shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F04416] to-[#890909] text-white flex items-center justify-center shrink-0 shadow-lg border border-[#FFB52E]/40">
                    <MapPin className="w-6 h-6 animate-bounce" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-[#FF6600] uppercase block">
                      MISSION DESTINATION
                    </span>
                    <h3 className="font-dela text-2xl sm:text-3xl text-white uppercase mt-0.5">
                      FELIX PLAZA
                    </h3>
                    <p className="text-sm font-semibold text-[#FFB52E] mt-1">
                      Sector 82 A, Gurugram, Haryana 122004
                    </p>
                    <p className="text-xs text-[#FFF1D6]/70 mt-1 leading-relaxed">
                      Opposite Sapphire 83 corridor, easily accessible via NH-48 & CPR Dwarka Expressway.
                    </p>
                  </div>
                </div>

                {/* Tactical Waypoint Pins */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-4 border-t border-white/10 text-xs">
                  <div className="bg-[#090505] p-2.5 border border-[#5A0808]">
                    <span className="block text-[10px] text-[#FF6600] uppercase font-bold">Entry Gate</span>
                    <span className="text-white font-semibold">Shinobi Grand Torii</span>
                  </div>
                  <div className="bg-[#090505] p-2.5 border border-[#5A0808]">
                    <span className="block text-[10px] text-[#FFB52E] uppercase font-bold">Parking Deck</span>
                    <span className="text-white font-semibold">Basement 1 & 2 Free</span>
                  </div>
                  <div className="bg-[#090505] p-2.5 border border-[#5A0808] col-span-2 sm:col-span-1">
                    <span className="block text-[10px] text-emerald-400 uppercase font-bold">Registration</span>
                    <span className="text-white font-semibold">Plaza Atrium Main</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tactical Directions CTA */}
            <div className="relative z-10 pt-4">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#F04416] to-[#FF6600] text-white font-dela text-sm sm:text-base tracking-wider shadow-lg hover:shadow-[#F04416]/50 transition-all duration-200 border border-[#FFB52E]/40"
              >
                <Navigation className="w-5 h-5" />
                <span>GET DIRECTIONS VIA GOOGLE MAPS</span>
              </a>
            </div>
          </div>

          {/* Access & Logistics Details Card */}
          <div className="lg:col-span-5 bg-[#150707] border-2 border-[#5A0808] p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-[#FFB52E]" />
                <h3 className="font-dela text-xl sm:text-2xl text-white uppercase tracking-wider">
                  VISITOR BRIEFING
                </h3>
              </div>

              <div className="space-y-6">
                {/* Transit Option 1 */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#5A0808]/40 border border-[#890909] text-[#FF6600] shrink-0">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                      BY CAR & TAXI
                    </h4>
                    <p className="text-xs text-[#FFF1D6]/75 mt-1 leading-relaxed">
                      Direct 5-minute drive from NH-48 Kherki Daula toll exit or Dwarka Expressway connector. Designated valet and visitor self-parking available on site.
                    </p>
                  </div>
                </div>

                {/* Transit Option 2 */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#5A0808]/40 border border-[#890909] text-[#FFB52E] shrink-0">
                    <Train className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                      BY METRO & FEEDER
                    </h4>
                    <p className="text-xs text-[#FFF1D6]/75 mt-1 leading-relaxed">
                      Nearest metro is Millennium City Centre / Huda City Centre on Yellow Line or IFFCO Chowk, with quick 15-minute cab connect directly to Felix Plaza.
                    </p>
                  </div>
                </div>

                {/* Transit Option 3 */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#5A0808]/40 border border-[#890909] text-[#F04416] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                      OPERATIONAL HOURS
                    </h4>
                    <p className="text-xs text-[#FFF1D6]/75 mt-1 leading-relaxed">
                      Gates open at 10:00 AM. Live workshops start at 11:30 AM, 2:30 PM, and 4:30 PM. Final obstacle challenge tournament finals at 6:00 PM.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mt-8 pt-4 border-t border-[#5A0808] text-xs text-[#FFF1D6]/60">
              <span className="text-[#FF6600] font-bold">Pro Tip: </span>
              Cosplay attendees enjoy express priority check-in queue at Gate 2!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
