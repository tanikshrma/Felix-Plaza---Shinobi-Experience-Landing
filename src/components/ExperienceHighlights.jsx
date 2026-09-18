import React from 'react';
import { ArrowUpRight, GraduationCap, Gamepad2, ShieldCheck, Trophy } from 'lucide-react';

export const ExperienceHighlights = ({ onSelectHighlight }) => {
  const highlights = [
    {
      id: 'workshops',
      number: '01',
      title: 'WORKSHOPS',
      subtitle: 'Hands-on Ninja Crafts & Stances',
      description: 'Master stealth stances, traditional headband and scroll-making, plus certified taijutsu footwork taught by experienced martial artists.',
      kanji: '修行',
      tags: ['Taijutsu Drills', 'Ninja Scrolls', 'Kunai Handling'],
      icon: GraduationCap,
    },
    {
      id: 'games',
      number: '02',
      title: 'FUN GAMES',
      subtitle: 'Anime Carnival & Reflex Trials',
      description: 'High-energy carnival ninja games, electronic reaction boards, target darts, and trivia quests designed for all ages and anime enthusiasts.',
      kanji: '遊技',
      tags: ['Shuriken Target', 'Chakra Balance', 'Reflex Board'],
      icon: Gamepad2,
    },
    {
      id: 'defence',
      number: '03',
      title: 'SELF DEFENCE',
      subtitle: 'Real-World Martial Awareness',
      description: 'Practical evasive manoeuvres, situational awareness tactics, and confidence-building self-defense routines for kids, teens, and families.',
      kanji: '護身',
      tags: ['Escape Drills', 'Balance & Posture', 'Confidence'],
      icon: ShieldCheck,
    },
    {
      id: 'challenges',
      number: '04',
      title: 'EXCITING CHALLENGES',
      subtitle: 'The Chunin Obstacle Circuit',
      description: 'Test your agility on the laser-mesh ninja obstacle course, timed rope scrambles, and squad-based shinobi team trials with winner certificates.',
      kanji: '試練',
      tags: ['Ninja Obstacle', 'Chunin Trials', 'Time Attack'],
      icon: Trophy,
    },
  ];

  const handleCardClick = (id) => {
    if (onSelectHighlight) {
      onSelectHighlight(id);
    }
    const regSection = document.getElementById('registration');
    if (regSection) {
      regSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className="relative py-20 sm:py-28 bg-[#090505] overflow-hidden">
      {/* Background Decorative Slash & Kanji */}
      <div className="absolute top-10 left-10 pointer-events-none select-none opacity-5 font-kanji text-[180px] text-[#FF6600] leading-none">
        忍術
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-[#5A0808]/60 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#FF6600]" />
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#FFB52E] uppercase">
                THE ROSTER OF ADVENTURE
              </span>
            </div>
            <h2 className="font-dela text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              WHAT AWAITS <span className="text-[#F04416]">YOU</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#FFF1D6]/70 max-w-md mt-4 md:mt-0">
            Four interactive pillars designed for all ages — from first-time young genin to seasoned anime fans.
          </p>
        </div>

        {/* 4 Visually Striking Japanese Poster Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => handleCardClick(item.id)}
                className="group relative cursor-pointer text-left transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Irregular Poster Card Container */}
                <div className="relative bg-gradient-to-b from-[#150707] to-[#0d0404] border-2 border-[#5A0808] group-hover:border-[#FF6600] p-6 sm:p-8 transition-colors duration-300 shadow-xl overflow-hidden">
                  {/* Subtle Japanese Kanji Watermark */}
                  <span className="absolute -bottom-4 -right-4 font-kanji text-8xl text-white/[0.03] group-hover:text-[#F04416]/10 transition-colors pointer-events-none select-none">
                    {item.kanji}
                  </span>

                  {/* Card Top: Number + Icon + Kanji Stamp */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      {/* Big Distressed Poster Number */}
                      <span className="font-dela text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-[#FFF1D6] via-[#FFB52E] to-[#F04416] leading-none">
                        {item.number}
                      </span>
                      <div className="p-2.5 bg-[#5A0808]/40 border border-[#890909] text-[#FF6600] group-hover:bg-[#F04416] group-hover:text-white transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-kanji text-[#FF6600] text-lg font-bold border border-[#5A0808] px-2 py-0.5 bg-[#090505]">
                        {item.kanji}
                      </span>
                      {/* Arrow with movement */}
                      <div className="w-10 h-10 rounded-none bg-[#090505] border border-[#5A0808] group-hover:border-[#FF6600] flex items-center justify-center text-[#FFF1D6] group-hover:text-[#FFB52E] transition-all duration-200">
                        <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-dela text-xl sm:text-2xl text-white uppercase tracking-wide group-hover:text-[#FFB52E] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#FF6600] mb-4">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#FFF1D6]/80 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Torn Paper Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-bold tracking-wider px-2.5 py-1 bg-[#200b0b] text-[#FFF1D6]/90 border-l-2 border-[#F04416]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Orange Accent Line at Bottom */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#F04416] to-[#FFB52E] group-hover:w-full transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
