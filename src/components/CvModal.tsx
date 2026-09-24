import React from 'react';
import { personalInfo, experiencesData, educationData, coursesData, skillsData } from '../data/cvData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0e17] border border-cyan-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Toolbar (hidden when printing) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#090b13] print:hidden">
          <div className="flex items-center gap-2">
            <span className="material-icons text-cyan-400">description</span>
            <span className="font-montserrat font-bold text-sm text-white uppercase tracking-wider">
              Curriculum Vitae Oficial &middot; Viviana Roca Pereira
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff007f] to-[#00d2ff] text-white font-montserrat font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-pink-900/30 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              <span className="material-icons text-sm">print</span>
              <span>Imprimir / PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <span className="material-icons text-base">close</span>
            </button>
          </div>
        </div>

        {/* Printable / Viewable CV Document Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-10 space-y-8 bg-[#090b14] text-zinc-200 print:bg-white print:text-black">
          
          {/* Header of the CV Document */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-white/10 print:border-black/20">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-cyan-400/40 shrink-0 shadow-lg bg-black">
              <img
                src={personalInfo.portraitImg}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="text-center sm:text-left space-y-1">
              <h1 className="text-2xl sm:text-3xl font-black font-montserrat tracking-tight text-white print:text-black">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-oswald text-cyan-300 print:text-blue-700 tracking-wider font-bold uppercase">
                {personalInfo.title} &middot; {personalInfo.subtitle}
              </p>
              
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-zinc-400 print:text-zinc-700 font-roboto pt-2">
                <span className="flex items-center gap-1">
                  <span className="material-icons text-xs text-pink-400 print:text-pink-600">mail</span>
                  {personalInfo.email}
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-icons text-xs text-cyan-400 print:text-blue-600">call</span>
                  {personalInfo.phoneFormatted}
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-icons text-xs text-purple-400">location_on</span>
                  {personalInfo.city}, {personalInfo.country}
                </span>
              </div>

              {/* Vital Measurements */}
              <div className="text-[11px] font-montserrat text-zinc-400 print:text-zinc-600 pt-1">
                Estatura: <strong className="text-white print:text-black">{personalInfo.height}</strong> | 
                Medidas: <strong className="text-white print:text-black">{personalInfo.measurements}</strong> | 
                Calzado: <strong className="text-white print:text-black">{personalInfo.shoeSize}</strong> | 
                Ojos: <strong className="text-white print:text-black">{personalInfo.eyeColor}</strong>
              </div>
            </div>
          </div>

          {/* Perfil */}
          <div>
            <h2 className="text-xs font-oswald uppercase tracking-widest text-cyan-300 print:text-blue-700 font-bold mb-2">
              Perfil Profesional
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 print:text-zinc-800 font-roboto leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Experiencia */}
          <div>
            <h2 className="text-xs font-oswald uppercase tracking-widest text-cyan-300 print:text-blue-700 font-bold mb-3">
              Experiencia Laboral Destacada
            </h2>
            <div className="space-y-4">
              {experiencesData.map((exp) => (
                <div key={exp.id} className="border-l-2 border-[#ff007f] pl-3 py-0.5">
                  <div className="flex justify-between items-center text-xs font-montserrat">
                    <span className="font-bold text-white print:text-black text-sm">
                      {exp.role} — {exp.company}
                    </span>
                    <span className="font-oswald text-cyan-300 print:text-zinc-600 font-semibold">
                      {exp.year}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 print:text-zinc-700 font-roboto mt-1">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Formación y Cursos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xs font-oswald uppercase tracking-widest text-cyan-300 print:text-blue-700 font-bold mb-3">
                Formación Académica
              </h2>
              <div className="space-y-3">
                {educationData.map((edu) => (
                  <div key={edu.id} className="text-xs">
                    <span className="font-bold text-white print:text-black block font-montserrat">
                      {edu.degree}
                    </span>
                    <span className="text-cyan-400 print:text-blue-700 font-oswald">
                      {edu.institution} — {edu.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-oswald uppercase tracking-widest text-cyan-300 print:text-blue-700 font-bold mb-3">
                Habilidades Clave
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {skillsData.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-white/[0.04] print:bg-gray-200 border border-white/10 print:border-gray-300 text-[11px] text-zinc-300 print:text-black font-roboto"
                  >
                    {s.name} ({s.percentage}%)
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Cursos list preview */}
          <div>
            <h2 className="text-xs font-oswald uppercase tracking-widest text-cyan-300 print:text-blue-700 font-bold mb-2">
              Capacitaciones & Cursos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300 print:text-zinc-800 font-roboto">
              {coursesData.slice(0, 6).map((c) => (
                <div key={c.id} className="p-2 rounded bg-black/30 print:bg-gray-100">
                  <strong className="block text-white print:text-black font-montserrat text-[11px]">
                    {c.name}
                  </strong>
                  <span className="text-[10px] text-zinc-400 print:text-zinc-600">
                    {c.institution} ({c.year})
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
