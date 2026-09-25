import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionType } from './types/cv';
import { personalInfo } from './data/cvData';
import { Sidebar } from './components/Sidebar';
import { HomeSection } from './components/HomeSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { CoursesSection } from './components/CoursesSection';
import { SkillsSection } from './components/SkillsSection';
import { CvModal } from './components/CvModal';
import { ContactModal } from './components/ContactModal';

const ALL_MENU_SECTIONS: SectionType[] = [
  'home',
  'experiencia',
  'formacion',
  'cursos',
  'habilidades',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  // Limpiar cualquier residuo previo en almacenamiento del navegador
  useEffect(() => {
    try {
      sessionStorage.removeItem('vr_visited_sections');
      sessionStorage.removeItem('vr_clicked_sections');
      localStorage.removeItem('vr_visited_sections');
      localStorage.removeItem('vr_clicked_sections');
    } catch {
      // Ignorar fallback
    }
  }, []);

  // Rastreo de opciones del menú visitadas por el usuario:
  // Inicia con 'home' ya que el usuario ya está visualizando HOME al entrar a la app.
  // De este modo, en cuanto el usuario hace clic en las demás opciones (Experiencia, Formación, Cursos y Habilidades),
  // el logo aparece de inmediato sin tener que volver a pulsar la opción HOME.
  const [clickedSections, setClickedSections] = useState<Set<SectionType>>(() => new Set<SectionType>(['home']));

  const hasVisitedAll = ALL_MENU_SECTIONS.every((sec) => clickedSections.has(sec));

  const handleSelectSection = (section: SectionType) => {
    setActiveSection(section);
    setClickedSections((prev) => {
      const next = new Set(prev);
      next.add(section);
      return next;
    });
    setMobileMenuOpen(false);
  };

  const navMenuItems: { id: SectionType; label: string; icon: string }[] = [
    { id: 'home', label: 'HOME', icon: 'home' },
    { id: 'experiencia', label: 'Experiencia', icon: 'work' },
    { id: 'formacion', label: 'Formación', icon: 'school' },
    { id: 'cursos', label: 'Cursos', icon: 'menu_book' },
    { id: 'habilidades', label: 'Habilidades', icon: 'psychology' },
  ];

  return (
    <div className="w-screen h-screen bg-[#04050a] text-white flex items-center justify-center p-1 sm:p-3 md:p-5 lg:p-7 overflow-hidden relative selection:bg-[#ff007f] selection:text-white">
      
      {/* AMBIENT BACKGROUND GLOWS (Dual-tone Electric Blue & Magenta inspired by Reference Poster) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0066ff]/15 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[650px] h-[650px] bg-[#ff007f]/15 rounded-full blur-[150px] pointer-events-none translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#00d2ff]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* MAIN CONTAINER: Exactly 90% Viewport Height (h-[90vh]), Fixed, No Global Scroll */}
      <div className="relative w-full max-w-[1550px] h-[90vh] bg-[#080a13]/90 border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl backdrop-blur-2xl flex flex-col md:flex-row overflow-hidden z-10 neon-border-glow">
        
        {/* ========================================================================= */}
        {/* MOBILE VIEW: TOP BAR with Square Photo, Name & Hamburger Menu Toggle      */}
        {/* ========================================================================= */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#0a0d18] border-b border-white/10 shrink-0 z-30">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleSelectSection('home')}
          >
            {/* Square Face Portrait at top */}
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-pink-500/50 shadow-md bg-black">
              <img
                src={personalInfo.portraitImg}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <span className="font-script text-xl text-white neon-glow-pink block leading-tight">
                {personalInfo.firstNameScript}
              </span>
              <span className="font-oswald text-[10px] text-cyan-300 uppercase tracking-widest block font-bold">
                {personalInfo.lastNameSans}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsCvModalOpen(true)}
              className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-[#ff007f] to-[#00d2ff] text-white text-[11px] font-montserrat font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm cursor-pointer"
            >
              <span className="material-icons text-xs">download</span>
              <span>CV</span>
            </button>

            {/* Hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Abrir menú de navegación"
            >
              <span className="material-icons text-xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN OVERLAY */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="md:hidden absolute top-[58px] inset-x-0 bottom-0 bg-[#080a13]/98 backdrop-blur-2xl z-40 p-5 flex flex-col justify-between border-b border-white/10 overflow-y-auto"
            >
              <div className="space-y-3 pt-2">
                <nav className="space-y-2">
                  {navMenuItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSelectSection(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-[#ff007f]/25 to-[#00d2ff]/20 text-white border border-[#ff007f]/50'
                            : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                        }`}
                      >
                        <span
                          className={`material-icons text-xl ${
                            isActive ? 'text-[#00d2ff]' : 'text-zinc-400'
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span className="font-montserrat font-semibold text-sm">
                          {item.label}
                        </span>
                        {isActive && (
                          <span className="ml-auto w-2 h-2 rounded-full bg-[#ff007f] shadow-[0_0_8px_#ff007f]" />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Bloque especial móvil cuando ha visitado todas las secciones: solo logo vinculado */}
              {hasVisitedAll && (
                <div className="my-3 flex items-center justify-center">
                  <a
                    href="https://cuvidig.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform duration-300 hover:scale-110 cursor-pointer p-1"
                    title="Ir a https://cuvidig.netlify.app/"
                    aria-label="Ir a CuviDig"
                  >
                    <img
                      src="/cv_logo_blanco.svg"
                      alt="Logo CV"
                      className="h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                    />
                  </a>
                </div>
              )}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsContactModalOpen(true);
                  }}
                  className="w-full py-2.5 rounded-xl bg-white/[0.05] border border-cyan-400/40 text-cyan-300 font-montserrat font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                >
                  <span className="material-icons text-sm">chat</span>
                  <span>Contactar a Viviana</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================================= */}
        {/* DESKTOP COLUMN 1: LEFT COLUMN (15% WIDTH, FIXED, SQUARE PHOTO + MENU)     */}
        {/* ========================================================================= */}
        <div className="hidden md:block w-[18%] lg:w-[15%] min-w-[170px] max-w-[230px] shrink-0 h-full">
          <Sidebar
            activeSection={activeSection}
            onSelectSection={handleSelectSection}
            personalInfo={personalInfo}
            hasVisitedAll={hasVisitedAll}
            onOpenCvModal={() => setIsCvModalOpen(true)}
            onOpenContactModal={() => setIsContactModalOpen(true)}
          />
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP COLUMN 2: RIGHT COLUMN (85% WIDTH, INDEPENDENT SCROLL)            */}
        {/* ========================================================================= */}
        <main
          id="cv-main-panel"
          aria-label="Contenido principal del Currículum"
          className="flex-1 h-full overflow-hidden flex flex-col relative"
        >
          {/* Top header navigation breadcrumb strip inside right column */}
          <div className="hidden md:flex items-center justify-between px-8 py-2.5 bg-[#080b15]/60 border-b border-white/10 backdrop-blur-md shrink-0 select-none">
            <div className="flex items-center gap-2 text-xs font-montserrat">
              <span className="text-zinc-500 uppercase tracking-widest font-semibold">CV</span>
              <span className="text-zinc-600">/</span>
              <span className="text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff]" />
                {activeSection}
              </span>
            </div>
          </div>

          {/* INDEPENDENT SCROLLING CONTAINER FOR ACTIVE SECTION */}
          <div className={`flex-1 ${activeSection === 'home' ? 'overflow-y-auto lg:overflow-hidden' : 'overflow-y-auto'} custom-scrollbar relative`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className={activeSection === 'home' ? 'min-h-full lg:h-full lg:min-h-0 flex flex-col' : 'min-h-full'}
              >
                {activeSection === 'home' && (
                  <HomeSection
                    personalInfo={personalInfo}
                    onOpenCvModal={() => setIsCvModalOpen(true)}
                    onOpenContactModal={() => setIsContactModalOpen(true)}
                    onNavigateTo={(sec) => handleSelectSection(sec)}
                  />
                )}

                {activeSection === 'experiencia' && (
                  <ExperienceSection />
                )}

                {activeSection === 'formacion' && (
                  <EducationSection />
                )}

                {activeSection === 'cursos' && (
                  <CoursesSection />
                )}

                {activeSection === 'habilidades' && (
                  <SkillsSection />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

      </div>

      {/* MODALS */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

    </div>
  );
}
