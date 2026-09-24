import React from 'react';
import { SectionType, PersonalInfo } from '../types/cv';

interface SidebarProps {
  activeSection: SectionType;
  onSelectSection: (section: SectionType) => void;
  personalInfo: PersonalInfo;
  onOpenCvModal: () => void;
  onOpenContactModal: () => void;
}

interface MenuItem {
  id: SectionType;
  label: string;
  icon: string;
}

const MENU_ITEMS: MenuItem[] = [
  { id: 'home', label: 'HOME', icon: 'home' },
  { id: 'experiencia', label: 'Experiencia', icon: 'work' },
  { id: 'formacion', label: 'Formación', icon: 'school' },
  { id: 'cursos', label: 'Cursos', icon: 'menu_book' },
  { id: 'habilidades', label: 'Habilidades', icon: 'psychology' },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onSelectSection,
  personalInfo,
  onOpenCvModal,
  onOpenContactModal,
}) => {
  return (
    <aside
      aria-label="Barra lateral de navegación"
      className="h-full w-full flex flex-col justify-between py-5 px-3 md:px-4 bg-[#090b13]/95 border-r border-white/10 backdrop-blur-xl relative z-20 select-none overflow-y-auto custom-scrollbar"
    >
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#ff007f]/10 rounded-full blur-2xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-10 left-0 w-28 h-28 bg-[#00d2ff]/10 rounded-full blur-2xl pointer-events-none" />

      {/* TOP SECTION: Professional Square Face Portrait */}
      <div className="flex flex-col items-center pt-2">
        <div className="relative group cursor-pointer" onClick={() => onSelectSection('home')}>
          {/* Neon Glow Outer Frame */}
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#ff007f] via-[#7928ca] to-[#00d2ff] rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition duration-500 animate-pulse-slow" />

          {/* Square Photo Container */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl bg-[#121624]">
            <img
              src={personalInfo.portraitImg}
              alt={personalInfo.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            {/* Subtle gloss overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            
            {/* Live active beacon */}
            <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/70 backdrop-blur-md px-1.5 py-0.5 rounded-full border border-emerald-500/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
          </div>
        </div>

        {/* Name & Title snippet under photo */}
        <div className="mt-3 text-center">
          <span className="font-script text-2xl text-white neon-glow-pink tracking-wide block leading-none">
            {personalInfo.firstNameScript}
          </span>
          <span className="font-oswald text-xs uppercase tracking-widest text-cyan-300 font-semibold block mt-1">
            {personalInfo.lastNameSans}
          </span>
          <p className="text-[10px] text-zinc-400 font-montserrat tracking-wider uppercase mt-1">
            {personalInfo.title}
          </p>
        </div>
      </div>

      {/* MIDDLE SECTION: Navigation Menu (occupies ~20% of vertical space, perfectly centered) */}
      <nav aria-label="Menú principal" className="my-auto py-4 min-h-[22%] flex flex-col justify-center">
        <ul className="space-y-1.5 w-full">
          {MENU_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => onSelectSection(item.id)}
                  className={`w-full group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-r from-[#ff007f]/20 via-[#00d2ff]/15 to-transparent text-white border border-[#ff007f]/40 shadow-lg shadow-[#ff007f]/10'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.04] border border-transparent'
                  }`}
                >
                  {/* Left Active Glow Indicator Bar */}
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 h-7 w-1 rounded-r-full transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-b from-[#ff007f] to-[#00d2ff] opacity-100 shadow-[0_0_10px_#00d2ff]'
                        : 'opacity-0 group-hover:opacity-60 bg-white/40'
                    }`}
                  />

                  {/* Google Material Icon */}
                  <span
                    className={`material-icons text-xl transition-all duration-300 ${
                      isActive
                        ? 'text-[#00d2ff] scale-110 drop-shadow-[0_0_8px_#00d2ff]'
                        : 'text-zinc-400 group-hover:text-cyan-300 group-hover:scale-105'
                    }`}
                  >
                    {item.icon}
                  </span>

                  {/* Label */}
                  <span
                    className={`font-montserrat font-medium text-xs lg:text-sm tracking-wide transition-colors duration-300 ${
                      isActive
                        ? 'text-white font-semibold neon-glow-white'
                        : 'group-hover:text-zinc-200'
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Right small dot when active */}
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#ff007f] shadow-[0_0_8px_#ff007f]" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* BOTTOM SECTION: Quick Actions */}
      <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
        {/* Quick Contact Button */}
        <button
          type="button"
          onClick={onOpenContactModal}
          className="w-full py-2 px-2.5 rounded-lg bg-white/[0.03] hover:bg-gradient-to-r hover:from-[#ff007f]/20 hover:to-[#00d2ff]/20 border border-white/10 hover:border-cyan-400/40 text-zinc-300 hover:text-white text-xs font-montserrat font-medium transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm group"
        >
          <span className="material-icons text-sm text-cyan-400 group-hover:rotate-12 transition-transform">
            chat
          </span>
          <span>Contactar</span>
        </button>

        {/* Quick Download CV Button */}
        <button
          type="button"
          onClick={onOpenCvModal}
          className="w-full py-2 px-2.5 rounded-lg bg-gradient-to-r from-[#ff007f]/80 to-[#7928ca]/80 hover:from-[#ff007f] hover:to-[#00d2ff] border border-white/20 text-white text-xs font-montserrat font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md shadow-pink-900/30 group cursor-pointer"
        >
          <span className="material-icons text-sm group-hover:translate-y-0.5 transition-transform">
            download
          </span>
          <span>CV PDF</span>
        </button>

        {/* Social / City micro badge */}
        <div className="text-center text-[10px] text-zinc-500 font-roboto pt-1">
          Santa Cruz, Bolivia
        </div>
      </div>
    </aside>
  );
};
