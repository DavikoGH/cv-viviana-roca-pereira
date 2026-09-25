import React, { useState } from 'react';
import { skillsData, personalInfo } from '../data/cvData';
import { SkillItem } from '../types/cv';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = ['todos', 'Interpersonal', 'Modelaje & Pasarela', 'Gestión & Eventos'];

  const filteredSkills = selectedCategory === 'todos'
    ? skillsData
    : skillsData.filter(s => s.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="w-full min-h-full p-4 sm:p-6 md:p-8 lg:p-10 space-y-8 bg-[#070912] relative">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#00d2ff]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#ff007f]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-4 border-b border-white/10 pb-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-oswald tracking-widest uppercase mb-2">
            <span className="material-icons text-sm">psychology</span>
            <span>Competencias & Aptitudes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-montserrat tracking-tight text-white uppercase flex flex-wrap items-baseline gap-2 sm:gap-3">
            <span className="text-2xl sm:text-3xl md:text-4xl">Habilidades</span>
            <span className="font-script text-[28px] sm:text-3xl md:text-4xl text-[#00d2ff] font-normal normal-case neon-glow-blue">
              Profesionales
            </span>
          </h2>
        </div>

        {/* Filter */}
        <div className="hidden xl:flex flex-wrap gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-montserrat capitalize transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#ff007f] to-[#00d2ff] text-white font-semibold shadow-md shadow-pink-900/30'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {cat === 'todos' ? 'Todas' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Progress Bars & Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredSkills.map((skill: SkillItem, idx: number) => {
          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.015] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-lg group md:col-span-2 lg:col-span-1"
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#ff007f]/20 to-[#00d2ff]/20 border border-white/10 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:text-pink-300 transition-transform">
                    <span className="material-icons text-lg">{skill.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold font-montserrat text-white group-hover:text-cyan-200 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[12.7px] md:text-[10px] lg:text-[12.7px] xl:text-[10px] text-zinc-400 font-montserrat uppercase">
                      {skill.category}
                    </span>
                  </div>
                </div>

                {/* Percentage Badge */}
                <span className="font-oswald text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-300">
                  {skill.percentage}%
                </span>
              </div>

              {/* Progress Bar with glowing neon fill */}
              <div className="w-full h-2.5 rounded-full bg-black/60 border border-white/10 p-0.5 overflow-hidden my-2.5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#ff007f] via-[#d9006c] to-[#00d2ff] transition-all duration-1000 ease-out shadow-[0_0_10px_#00d2ff]"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-300 font-roboto leading-relaxed">
                {skill.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Languages & Core Strengths Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
        {/* Idiomas */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.015] border border-white/10 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-icons text-cyan-400 text-lg">translate</span>
            <h4 className="font-montserrat font-bold text-sm sm:text-base text-white uppercase tracking-wider">
              Idiomas & Comunicación
            </h4>
          </div>
          <div className="space-y-3">
            {personalInfo.languages.map((lang, lIdx) => (
              <div key={lIdx} className="flex flex-row md:flex-col lg:flex-row md:items-start lg:items-center justify-between gap-1.5 md:gap-2 lg:gap-1.5 p-2.5 rounded-xl bg-black/40 border border-white/5">
                <span className="font-montserrat text-xs sm:text-sm font-semibold text-white">
                  {lang.name}
                </span>
                <span className="text-xs md:text-[15px] lg:text-xs font-oswald text-cyan-300 bg-cyan-950/40 px-2.5 py-0.5 md:py-1 lg:py-0.5 rounded-md border border-cyan-500/30">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Aptitudes Interpersonales & Protocolo */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.015] border border-white/10 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-icons text-[#ff007f] text-lg">stars</span>
            <h4 className="font-montserrat font-bold text-sm sm:text-base text-white uppercase tracking-wider">
              Valores & Ética de Trabajo
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Puntualidad rigurosa',
              'Presencia y pulcritud impecable',
              'Manejo de situaciones de alta presión',
              'Discreción y confidencialidad',
              'Empatía comercial con el público',
              'Facilidad de aprendizaje de productos',
              'Excelente dicción y simpatía',
              'Trabajo colaborativo armónico'
            ].map((trait, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 hover:border-[#ff007f]/40 text-xs text-zinc-300 font-roboto flex items-center gap-1.5 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff]" />
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
