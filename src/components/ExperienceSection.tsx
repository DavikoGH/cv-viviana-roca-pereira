import React, { useState } from 'react';
import { experiencesData } from '../data/cvData';
import { ExperienceItem } from '../types/cv';

export const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('todos');

  const categories = ['todos', 'Feria Internacional', 'Campaña BTL & Publicidad', 'Moda & Pasarela'];

  const filteredExperiences = filter === 'todos'
    ? experiencesData
    : experiencesData.filter(exp => exp.type.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="w-full min-h-full p-4 sm:p-6 md:p-8 lg:p-10 space-y-8 bg-[#070912] relative">
      {/* Decorative neon ambient glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#00d2ff]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#ff007f]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-4 border-b border-white/10 pb-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-oswald tracking-widest uppercase mb-2">
            <span className="material-icons text-sm">work</span>
            <span>Trayectoria Profesional</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-montserrat tracking-tight text-white uppercase flex flex-wrap items-baseline gap-2 sm:gap-3">
            <span className="text-2xl sm:text-3xl md:text-4xl">Experiencia</span>
            <span className="font-script text-[28px] sm:text-3xl md:text-4xl text-[#ff007f] font-normal normal-case neon-glow-pink">
              Laboral
            </span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="hidden xl:flex flex-wrap gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-montserrat capitalize transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? 'bg-gradient-to-r from-[#ff007f] to-[#00d2ff] text-white font-semibold shadow-md shadow-pink-900/30'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {cat === 'todos' ? 'Todas' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Professional Timeline / Card Grid */}
      <div className="relative z-10 space-y-6">
        {filteredExperiences.map((exp: ExperienceItem, idx: number) => {
          const isFexpo = exp.role.includes('FEXPO');
          const isCocaCola = exp.company.includes('COCA COLA');
          const isPontaGrosa = exp.company.includes('PONTA GROSA');

          return (
            <div
              key={exp.id}
              className="group relative p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.015] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-xl hover:shadow-cyan-950/30"
            >
              {/* Left timeline neon accent bar */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl transition-all duration-300 ${
                  isFexpo
                    ? 'bg-gradient-to-b from-[#ff007f] via-[#d9006c] to-[#00d2ff] shadow-[0_0_12px_#ff007f]'
                    : isCocaCola
                    ? 'bg-gradient-to-b from-red-500 to-[#ff007f]'
                    : isPontaGrosa
                    ? 'bg-gradient-to-b from-[#00d2ff] to-[#7928ca]'
                    : 'bg-white/20 group-hover:bg-[#00d2ff]'
                }`}
              />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                {/* Role and Company */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    {/* Badge Year */}
                    <span className="px-3 py-1 rounded-lg bg-black/60 border border-white/15 text-xs sm:text-sm font-oswald font-bold tracking-wider text-cyan-300 flex items-center gap-1.5">
                      <span className="material-icons text-xs text-cyan-400">calendar_today</span>
                      {exp.year}
                    </span>

                    {/* Category tag */}
                    <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[13px] lg:text-[14.3px] xl:text-[13px] text-zinc-300 font-montserrat font-medium">
                      {exp.type}
                    </span>
                  </div>

                  {/* Main Job Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-white group-hover:text-cyan-200 transition-colors pt-1">
                    {exp.role}
                    <span className="text-zinc-400 font-normal"> — </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-300 font-extrabold font-oswald tracking-wide">
                      {exp.company}
                    </span>
                  </h3>

                  {/* Location */}
                  <p className="text-xs text-zinc-400 font-roboto flex items-center gap-1">
                    <span className="material-icons text-xs text-purple-400">location_on</span>
                    {exp.location}
                  </p>
                </div>

                {/* Index / Counter */}
                <div className="hidden md:flex flex-col items-end">
                  <span className="font-oswald text-4xl font-black text-white/5 group-hover:text-[#00d2ff]/20 transition-colors select-none">
                    0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-sm text-zinc-300 font-roboto leading-relaxed">
                {exp.description}
              </p>

              {/* Bullet highlights */}
              <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                <span className="text-[11px] lg:text-[13px] xl:text-[11px] font-montserrat uppercase tracking-wider text-zinc-400 font-semibold block mb-2">
                  Logros y Funciones Principales:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs lg:text-[13.5px] xl:text-xs text-zinc-300 font-roboto">
                      <span className="material-icons text-sm lg:text-base xl:text-sm text-[#00d2ff] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
