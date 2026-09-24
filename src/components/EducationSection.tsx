import React from 'react';
import { educationData } from '../data/cvData';
import { EducationItem } from '../types/cv';

export const EducationSection: React.FC = () => {
  return (
    <div className="w-full min-h-full p-4 sm:p-6 md:p-8 lg:p-10 space-y-8 bg-[#070912] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#7928ca]/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#00d2ff]/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="border-b border-white/10 pb-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-oswald tracking-widest uppercase mb-2">
          <span className="material-icons text-sm">school</span>
          <span>Educación & Títulos</span>
        </div>
        <h2 className="text-xl sm:text-3xl md:text-4xl font-black font-montserrat tracking-tight text-white uppercase flex flex-wrap items-baseline gap-2 sm:gap-3">
          <span className="text-xl sm:text-3xl md:text-4xl">Formación</span>
          <span className="font-script text-2xl sm:text-3xl md:text-4xl text-cyan-400 font-normal normal-case neon-glow-blue">
            Académica
          </span>
        </h2>
      </div>

      {/* Education Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((edu: EducationItem, idx: number) => {
          const isCeicom = edu.institution.includes('CEICOM');
          const isAmericano = edu.institution.includes('Americano');

          return (
            <div
              key={edu.id}
              className={`p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.015] border border-white/10 hover:border-pink-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between ${
                idx === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                {/* Year and degree type */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-lg bg-black/60 border border-white/15 text-xs font-oswald font-bold tracking-wider text-pink-400 flex items-center gap-1.5">
                    <span className="material-icons text-xs text-[#ff007f]">verified</span>
                    {edu.year}
                  </span>
                  <span className="text-xs font-montserrat text-cyan-300/80 bg-cyan-950/30 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                    {edu.type}
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-white">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p className="text-sm font-oswald text-cyan-300 tracking-wide font-medium mt-1 flex items-center gap-1.5">
                  <span className="material-icons text-sm text-[#00d2ff]">account_balance</span>
                  {edu.institution}
                </p>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-zinc-300 font-roboto leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {/* Skills acquired during study */}
              <div className="mt-5 pt-4 border-t border-white/5">
                <span className="text-[11px] font-montserrat uppercase tracking-wider text-zinc-400 font-semibold block mb-2">
                  Competencias Adquiridas:
                </span>
                <div className="flex flex-wrap gap-2">
                  {edu.skillsAcquired.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-zinc-300 font-roboto flex items-center gap-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff007f]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Distinction Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#ff007f]/15 via-[#7928ca]/20 to-[#00d2ff]/15 border border-white/15 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#ff007f] to-[#00d2ff] flex items-center justify-center text-white shadow-lg shrink-0">
            <span className="material-icons text-2xl">workspace_premium</span>
          </div>
          <div>
            <h4 className="font-montserrat font-bold text-sm sm:text-base text-white">
              Perfil Integral &middot; Gestión + Presencia Escénica
            </h4>
            <p className="text-xs text-zinc-300 font-roboto">
              La formación técnica en secretariado administrativo sumada al modelaje profesional confiere un alto estándar de organización, dicción y protocolo comercial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
