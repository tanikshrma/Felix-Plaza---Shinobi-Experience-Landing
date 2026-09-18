import React from 'react';
import { ArrowRight, CheckCircle2, Flame, Users, Clock, Zap } from 'lucide-react';
import trainingImg from '../assets/images/shinobi_training_1789708824144.jpg';
import gamesImg from '../assets/images/ninja_games_1789708846056.jpg';
import challengesImg from '../assets/images/ultimate_challenges_1789708867687.jpg';

interface Props {
  onRegisterActivity: (activityTitle: string) => void;
}

export const Activities: React.FC<Props> = ({ onRegisterActivity }) => {
  const activities = [
    {
      id: 'training',
      title: 'SHINOBI TRAINING',
      japaneseTitle: '忍者鍛錬',
      subtitle: 'Technique • Stances • Weapon Safety',
      description:
        'A comprehensive training dojo for aspiring ninja. Learn proper shuriken throwing mechanics with soft training weapons, basic taijutsu evasion, and the philosophy of stealth.',
      image: trainingImg,
      badge: 'ALL SKILL LEVELS',
      badgeColor: 'border-[#FFB52E] text-[#FFB52E]',
      highlights: [
        'Foam shuriken & target precision drills',
        'Traditional headband & ninja scroll ritual',
        'Certified martial arts instructors guidance',
        'Exclusive Shinobi Trainee Badge on completion',
      ],
      stats: { duration: '45 Mins', team: 'Individual / Squads', intensity: 'Moderate' },
    },
    {
      id: 'games',
      title: 'NINJA GAMES',
      japaneseTitle: '遊技勝負',
      subtitle: 'Carnival Quests • Reflex Grid • Trivia',
      description:
        'Step onto the Japanese festival grounds packed with anime-inspired carnival booths. Test your reaction times on the chakra reflex board and participate in trivia tournaments with prizes.',
      image: gamesImg,
      badge: 'FAMILY & YOUTH FAVORITE',
      badgeColor: 'border-[#FF6600] text-[#FF6600]',
      highlights: [
        'Electronic reaction test wall (Chakra Strike)',
        'Anime trivia showdown with exclusive merch prizes',
        'Ninja scavenger hunt across Felix Plaza grounds',
        'Special photo-ops with oversized ninja scrolls',
      ],
      stats: { duration: 'Continuous', team: 'Solo or Family', intensity: 'Casual & Fun' },
    },
    {
      id: 'challenges',
      title: 'ULTIMATE CHALLENGES',
      japaneseTitle: '頂上試練',
      subtitle: 'The Gauntlet • Obstacle Sprint • Time Attack',
      description:
        'The centerpiece championship challenge. Navigate the obstacle grid, scale the balance beams, and race the clock to claim the title of Master Shinobi with a place on the leaderboard.',
      image: challengesImg,
      badge: 'HIGH ADRENALINE',
      badgeColor: 'border-[#F04416] text-[#F04416]',
      highlights: [
        'Multi-stage agility & rope maze obstacle course',
        'Live electronic leaderboard with instant rankings',
        'Top performers awarded the Hokage Medal of Felix Plaza',
        'Safety-first padded flooring & spotters at every stage',
      ],
      stats: { duration: 'Timed Runs', team: '1 - 4 Shinobi', intensity: 'High Adrenaline' },
    },
  ];

  return (
    <section
      id="activities"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#090505] via-[#150707] to-[#090505] border-t border-[#5A0808]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#5A0808]/40 border border-[#F04416]/40 mb-3">
            <Flame className="w-3.5 h-3.5 text-[#FFB52E]" />
            <span className="text-xs font-extrabold tracking-[0.25em] text-[#FFB52E] uppercase">
              SELECT YOUR ARENA
            </span>
          </div>

          <h2 className="font-dela text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight mb-4">
            CHOOSE YOUR <span className="text-[#F04416]">CHALLENGE</span>
          </h2>

          <p className="text-base sm:text-lg text-[#FFF1D6]/80 leading-relaxed">
            Every session is designed for immersive participation. Register once for full festival access to all three zones.
          </p>
        </div>

        {/* 3 Large Visual Feature Blocks */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {activities.map((act, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={act.id}
                className="relative bg-[#150707] border-2 border-[#5A0808] hover:border-[#FF6600] transition-colors duration-300 shadow-2xl overflow-hidden group"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Imagery Side */}
                  <div
                    className={`lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] overflow-hidden ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <img
                      src={act.image}
                      alt={act.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 brightness-90"
                    />
                    {/* Shadow Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#150707] via-transparent to-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#150707]/90 via-transparent to-transparent hidden lg:block" />

                    {/* Kanji Stamp Badge on Image */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="font-kanji text-xl font-bold bg-[#890909]/90 backdrop-blur-sm text-white px-3 py-1 border border-[#FFB52E]/50 shadow-md">
                        {act.japaneseTitle}
                      </span>
                      <span
                        className={`text-[11px] font-bold tracking-widest px-3 py-1 bg-[#090505]/90 border backdrop-blur-sm ${act.badgeColor}`}
                      >
                        {act.badge}
                      </span>
                    </div>

                    {/* Quick Stats Strip */}
                    <div className="absolute bottom-4 left-4 right-4 bg-[#090505]/90 backdrop-blur-md border border-[#5A0808] p-3 grid grid-cols-3 gap-2 text-center text-xs">
                      <div>
                        <span className="block text-[#FFB52E] font-bold">{act.stats.duration}</span>
                        <span className="text-[10px] text-[#FFF1D6]/60 uppercase">Duration</span>
                      </div>
                      <div className="border-x border-white/10">
                        <span className="block text-[#FF6600] font-bold">{act.stats.team}</span>
                        <span className="text-[10px] text-[#FFF1D6]/60 uppercase">Formation</span>
                      </div>
                      <div>
                        <span className="block text-[#F04416] font-bold">{act.stats.intensity}</span>
                        <span className="text-[10px] text-[#FFF1D6]/60 uppercase">Energy</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div
                    className={`lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      {/* Step Indicator */}
                      <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#FF6600] uppercase mb-2">
                        <span>STAGE 0{idx + 1}</span>
                        <span className="w-6 h-[1px] bg-[#FF6600]" />
                        <span>{act.subtitle}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-dela text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight mb-4 group-hover:text-[#FFB52E] transition-colors">
                        {act.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#FFF1D6]/85 leading-relaxed mb-6">
                        {act.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="space-y-2.5 mb-8">
                        {act.highlights.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#F04416] shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-[#FFF1D6]/90 font-medium">
                              {bullet}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action CTA */}
                    <div>
                      <button
                        onClick={() => onRegisterActivity(act.title)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-gradient-to-r from-[#890909] to-[#F04416] hover:from-[#A61B18] hover:to-[#FF6600] text-white font-dela text-sm tracking-wider border border-[#FFB52E]/30 shadow-lg shadow-black/60 transition-all duration-200 cursor-pointer"
                      >
                        <span>ENROLL IN {act.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
