import React, { useState } from 'react';
import { coursesData } from '../data/cvData';
import { CourseItem } from '../types/cv';

export const CoursesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = ['todos', 'Protocolo', 'Modelaje', 'Comunicación', 'Marketing'];

  const filteredCourses = activeCategory === 'todos'
    ? coursesData
    : coursesData.filter(c => c.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="w-full min-h-full p-4 sm:p-6 md:p-8 lg:p-10 space-y-8 bg-[#070912] relative">
      {/* Background Glow */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#ff007f]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00d2ff]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-oswald tracking-widest uppercase mb-2">
            <span className="material-icons text-sm">menu_book</span>
            <span>Capacitaciones Continuas</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-black font-montserrat tracking-tight text-white uppercase flex flex-wrap items-baseline gap-2 sm:gap-3">
            <span className="text-xl sm:text-3xl md:text-4xl">Cursos y</span>
            <span className="font-script text-2xl sm:text-3xl md:text-4xl text-[#ff007f] font-normal normal-case neon-glow-pink">
              Certificaciones
            </span>
          </h2>
        </div>

        {/* Categories */}
        <div className="hidden sm:flex flex-wrap gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-montserrat capitalize transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#00d2ff] to-[#7928ca] text-white font-semibold shadow-md shadow-cyan-950/40'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {cat === 'todos' ? 'Todos' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Course List Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {filteredCourses.map((course: CourseItem, idx: number) => {
          return (
            <div
              key={course.id}
              className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.015] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-lg hover:shadow-cyan-950/20 group flex flex-col justify-between"
            >
              <div>
                {/* Header with Date and Category */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="px-2.5 py-0.5 rounded-md bg-black/60 border border-white/10 text-xs font-oswald font-semibold text-cyan-300 flex items-center gap-1">
                    <span className="material-icons text-xs text-cyan-400">event</span>
                    {course.year}
                  </span>

                  <span className="px-2 py-0.5 rounded-full text-[10px] font-montserrat font-medium uppercase bg-[#ff007f]/15 border border-[#ff007f]/30 text-pink-300">
                    {course.category}
                  </span>
                </div>

                {/* Course Name */}
                <h3 className="text-base sm:text-lg font-bold font-montserrat text-white group-hover:text-cyan-200 transition-colors leading-snug">
                  {course.name}
                </h3>

                {/* Institution */}
                <p className="mt-1.5 text-xs font-oswald text-zinc-300 tracking-wide flex items-center gap-1.5 font-medium">
                  <span className="material-icons text-xs text-[#00d2ff]">verified</span>
                  {course.institution}
                </p>

                {/* Description */}
                <p className="mt-2.5 text-xs text-zinc-400 font-roboto leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Footer info: duration / certificate */}
              {course.duration && (
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400 font-roboto">
                  <span className="flex items-center gap-1">
                    <span className="material-icons text-xs text-emerald-400">schedule</span>
                    {course.duration}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-montserrat">
                    Aprobado con Certificación
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
