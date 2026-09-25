import React from 'react';
import { PersonalInfo } from '../types/cv';

interface HomeSectionProps {
  personalInfo: PersonalInfo;
  onOpenCvModal: () => void;
  onOpenContactModal: () => void;
  onNavigateTo: (section: 'experiencia' | 'formacion' | 'cursos' | 'habilidades') => void;
}

// Reusable Glamour Photo Card for both Mobile Vertical placement and Desktop column
const GlamourPhotoCard: React.FC<{ personalInfo: PersonalInfo; isMobile?: boolean }> = ({
  personalInfo,
  isMobile,
}) => (
  <div
    className={`relative w-full ${
      isMobile
        ? 'max-w-[290px] sm:max-w-[340px] md:max-w-[391px]'
        : 'max-w-[320px] sm:max-w-[360px] lg:max-w-[290px] xl:max-w-[400px] 2xl:max-w-[440px] max-h-[calc(90vh-80px)]'
    } aspect-[3/4] rounded-3xl overflow-hidden p-2 border-2 border-white/15 bg-gradient-to-b from-[#111628] via-[#090b14] to-[#150a1c] shadow-2xl neon-box-blue group`}
  >
    {/* Background dual-lighting atmosphere: Cobalt Blue on left, Hot Magenta on right */}
    <div className="absolute inset-0 bg-gradient-to-tr from-[#0038a8]/80 via-[#0a0f24]/50 to-[#ff007f]/70 mix-blend-screen opacity-90 pointer-events-none" />

    {/* Electric Blue back flare on left side */}
    <div className="absolute top-1/3 -left-12 w-48 h-48 bg-[#00d2ff] rounded-full filter blur-[70px] opacity-70 pointer-events-none animate-pulse-slow" />

    {/* Vivid Magenta lens flare on right side */}
    <div className="absolute top-1/4 -right-12 w-52 h-52 bg-[#ff007f] rounded-full filter blur-[80px] opacity-75 pointer-events-none" />

    {/* Circular decorative neon ring behind the model */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] h-[88%] rounded-full border border-cyan-400/30 border-dashed animate-[spin_40s_linear_infinite] pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[76%] h-[76%] rounded-full border-2 border-pink-500/25 pointer-events-none" />

    {/* THE FULL BODY PHOTOGRAPH */}
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/40 flex items-center justify-center">
      <img
        src={personalInfo.fullBodyImg}
        alt={`${personalInfo.name} - Modelo Independiente`}
        className="w-full h-full object-cover object-center filter contrast-105 brightness-105 group-hover:scale-105 transition-transform duration-700"
        loading="eager"
      />

      {/* Gradient Vignette over feet for soft blending */}
      <div className="absolute inset-x-0 bottom-0 h-44 sm:h-48 bg-gradient-to-t from-[#090b14] via-[#090b14]/80 to-transparent z-10" />

      {/* OVERLAY NEON SIGNATURE ON THE PHOTO (Viviana in handwritten neon script font) */}
      <div className="absolute bottom-[10%] sm:bottom-[12%] inset-x-2 sm:inset-x-4 z-20 text-center select-none">
        <span className="font-script text-[62px] sm:text-[78px] md:text-[89px] xl:text-[90px] text-white neon-glow-pink inline-block origin-left -rotate-[10deg] leading-none drop-shadow-[0_0_25px_#ff007f]">
          Viviana
        </span>
        <span className="font-oswald text-[24px] sm:text-[30px] md:text-[34.5px] xl:text-[33px] tracking-[0.18em] font-bold text-cyan-300 uppercase neon-glow-blue block mt-1 leading-tight">
          ROCA PEREIRA
        </span>
      </div>
    </div>
  </div>
);

export const HomeSection: React.FC<HomeSectionProps> = ({
  personalInfo,
  onOpenCvModal,
  onOpenContactModal,
  onNavigateTo,
}) => {
  return (
    <div className="relative w-full min-h-full lg:h-full flex flex-col justify-start lg:justify-center p-3.5 sm:p-5 lg:px-8 lg:py-3 pb-10 lg:pb-3 bg-[#070912] overflow-x-hidden overflow-y-auto">
      {/* Dynamic Background Atmosphere - Inspired by Image 1 Party / Neon Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Electric Blue stage glow top-left / center */}
        <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[#0066ff]/25 to-[#00d2ff]/10 blur-[100px] animate-pulse-slow" />

        {/* Intense Neon Magenta glow right / center behind model */}
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#ff007f]/30 via-[#d9006c]/20 to-transparent blur-[110px]" />

        {/* Deep Violet & Cyber Indigo base */}
        <div className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] rounded-full bg-[#7928ca]/20 blur-[120px]" />

        {/* Large atmospheric watermark typography inspired by Image 1 "PARTY TIME" */}
        <div className="absolute inset-0 flex flex-col justify-center items-end opacity-[0.035] select-none font-oswald text-right pr-6 pointer-events-none">
          <span className="text-8xl sm:text-9xl md:text-[14rem] font-black uppercase tracking-tighter leading-none text-cyan-400">
            FASHION
          </span>
          <span className="text-8xl sm:text-9xl md:text-[13rem] font-black uppercase tracking-tighter leading-none text-pink-500">
            MODEL
          </span>
        </div>

        {/* Subtle grid texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* MAIN HERO CONTENT */}
      <div className="relative z-10 flex flex-col justify-center flex-1 min-h-0 w-full h-full">
        {/* UPPER ROW: PERFIL PROFESIONAL & SPECS (LEFT) AND FOTOGRAFÍA (RIGHT) */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 items-start lg:items-stretch justify-between w-full flex-1 min-h-0">
          {/* LEFT COLUMN: STATUS, CARGO, BIO, MEDIDAS, BOTONES, ESPECIALIDADES */}
          <div className="flex-1 min-w-0 flex flex-col space-y-3 sm:space-y-3.5 w-full lg:justify-between">
            {/* 1. TOP STATUS BADGE: "Disponible para Campañas 2025 - 2026" */}
            <div className="flex items-center justify-center border-b border-white/10 pb-2 w-full">
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/40 backdrop-blur-md text-emerald-400 text-[11.5px] sm:text-[13px] lg:text-[12.7px] xl:text-[14px] font-montserrat shadow-sm shadow-emerald-500/20 max-w-full">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="font-semibold tracking-wide whitespace-nowrap">
                  Disponible para Campañas 2025 - 2026
                </span>
              </div>
            </div>

            {/* 2. MOBILE VERTICAL ONLY: GLAMOUR PHOTOGRAPHY PLACED RIGHT AFTER "DISPONIBLE..." */}
            <div className="flex lg:hidden justify-center items-center py-2 sm:py-3 w-full">
              <GlamourPhotoCard personalInfo={personalInfo} isMobile />
            </div>

            {/* 3. CARGO: "Modelo Independiente" (BELOW PHOTO IN MOBILE & TABLET, BELOW DISPONIBLE IN DESKTOP) */}
            <div className="flex flex-col xl:flex-row items-center justify-center text-center gap-2 sm:gap-2.5 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r from-[#ff007f]/25 to-[#00d2ff]/20 border border-[#ff007f]/50 shadow-md shadow-[#ff007f]/20">
                <span className="material-icons text-sm text-[#ff007f]">
                  stars
                </span>
                <span className="font-montserrat font-bold text-xs sm:text-sm tracking-wider uppercase text-white">
                  {personalInfo.title}
                </span>
              </div>
              <span className="text-xs sm:text-sm text-cyan-300/80 font-montserrat text-center">
                {personalInfo.subtitle}
              </span>
            </div>

            {/* 4. PERFIL PROFESIONAL DEL PDF / BIO */}
            <div className="relative p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-2 mb-1.5 text-cyan-400 font-oswald text-xs uppercase tracking-widest font-semibold">
                <span className="material-icons text-base">person</span>
                <span>Perfil Profesional</span>
              </div>
              <p className="text-[13.5px] sm:text-[14.5px] text-zinc-200 font-roboto leading-relaxed text-justify">
                {personalInfo.bio}
              </p>
            </div>

            {/* 5. SECCIÓN DE MEDIDAS, BOTONES Y ESPECIALIDADES (COLOCADA DEBAJO DEL PERFIL PROFESIONAL) */}
            <div className="w-full flex-1 flex flex-col gap-2.5 sm:gap-3 pt-1">
              {/* MEDIDAS Y ESPECIFICACIONES */}
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2.5 text-center">
                <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-center items-center shadow-md hover:border-cyan-400/30 transition-colors">
                  <span className="text-[11px] sm:text-[12px] text-zinc-300 uppercase font-montserrat font-medium block">Estatura</span>
                  <span className="text-[20px] sm:text-[23.5px] xl:text-[25px] font-oswald font-bold text-cyan-300 leading-tight mt-0.5">{personalInfo.height}</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-center items-center shadow-md hover:border-pink-400/30 transition-colors">
                  <span className="text-[11px] sm:text-[12px] text-zinc-300 uppercase font-montserrat font-medium block">Medidas</span>
                  <span className="text-[20px] sm:text-[23.5px] xl:text-[25px] font-oswald font-bold text-pink-300 leading-tight mt-0.5">{personalInfo.measurements}</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-center items-center shadow-md hover:border-cyan-400/30 transition-colors">
                  <span className="text-[11px] sm:text-[12px] text-zinc-300 uppercase font-montserrat font-medium block">Calzado</span>
                  <span className="text-[20px] sm:text-[23.5px] xl:text-[25px] font-oswald font-bold text-cyan-300 leading-tight mt-0.5">{personalInfo.shoeSize}</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-center items-center shadow-md hover:border-purple-400/30 transition-colors">
                  <span className="text-[11px] sm:text-[12px] text-zinc-300 uppercase font-montserrat font-medium block truncate">Ojos / Cabello</span>
                  <span className="text-[17px] sm:text-[20px] xl:text-[23px] font-oswald font-bold text-white leading-tight mt-0.5 truncate block">{personalInfo.eyeColor}</span>
                </div>
              </div>

              {/* BOTONES DE ACCIÓN: CONTACTAR Y CV PDF CENTRADOS */}
              <div className="w-full flex items-center justify-center gap-3 sm:gap-4 mt-0.5 lg:mt-auto">
                <button
                  type="button"
                  onClick={onOpenContactModal}
                  className="py-2 px-5 sm:px-6 rounded-xl bg-white/[0.04] hover:bg-gradient-to-r hover:from-[#ff007f]/20 hover:to-[#00d2ff]/20 border border-cyan-400/40 hover:border-cyan-300 text-cyan-300 hover:text-white text-xs sm:text-sm font-montserrat font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-cyan-500/20 cursor-pointer group"
                >
                  <span className="material-icons text-base sm:text-lg text-cyan-400 group-hover:rotate-12 transition-transform">
                    chat
                  </span>
                  <span>Contactar</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenCvModal}
                  className="py-2 px-5 sm:px-6 rounded-xl bg-gradient-to-r from-[#ff007f] via-[#c026d3] to-[#7928ca] hover:from-[#ff007f] hover:to-[#00d2ff] border border-white/20 text-white text-xs sm:text-sm font-montserrat font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-pink-900/30 hover:shadow-pink-500/30 cursor-pointer group"
                >
                  <span className="material-icons text-base sm:text-lg group-hover:translate-y-0.5 transition-transform">
                    download
                  </span>
                  <span>CV PDF</span>
                </button>
              </div>

              {/* SECTOR DE ESPECIALIDADES AL FINAL */}
              <div className="w-full pt-2.5 pb-1 border-t border-white/10 flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-[13.5px] sm:text-[14px] text-zinc-400 font-montserrat">
                <span className="text-zinc-500 font-semibold uppercase tracking-wider text-[12.5px] sm:text-[13px]">Especialidades:</span>
                <span className="text-zinc-300 font-medium hover:text-cyan-300 cursor-pointer transition-colors" onClick={() => onNavigateTo('experiencia')}>
                  Ferias Internacionales
                </span>
                <span className="text-zinc-600">&bull;</span>
                <span className="text-zinc-300 font-medium hover:text-pink-300 cursor-pointer transition-colors" onClick={() => onNavigateTo('experiencia')}>
                  Pasarela de Moda
                </span>
                <span className="text-zinc-600">&bull;</span>
                <span className="text-zinc-300 font-medium hover:text-cyan-300 cursor-pointer transition-colors" onClick={() => onNavigateTo('experiencia')}>
                  Comerciales BTL
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: DESKTOP & TABLET HORIZONTAL FULL BODY GLAMOUR PHOTOGRAPH (NO ELEMENTS UNDER IT) */}
          <div className="hidden lg:flex flex-shrink-0 relative justify-end items-center self-center">
            <GlamourPhotoCard personalInfo={personalInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};
