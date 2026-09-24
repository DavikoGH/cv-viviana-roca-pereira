import React, { useState } from 'react';
import { personalInfo } from '../data/cvData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [eventType, setEventType] = useState('Feria / Stand Corporativo');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Hola Viviana, te contacto desde tu página web CV.\n\n` +
      `*Nombre/Empresa:* ${name || 'Cliente'}\n` +
      `*Tipo de Evento:* ${eventType}\n` +
      `*Fecha tentativa:* ${date || 'A convenir'}\n` +
      `*Mensaje:* ${notes || 'Deseamos solicitar disponibilidad y cotización.'}`
    );
    window.open(`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`, '_blank');
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#0c0f1d] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff007f]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00d2ff]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
        >
          <span className="material-icons text-base">close</span>
        </button>

        <div className="relative z-10 space-y-5">
          <div>
            <span className="text-xs font-oswald uppercase tracking-widest text-cyan-300 font-bold block mb-1">
              Contacto & Contratación
            </span>
            <h3 className="text-2xl font-black font-montserrat text-white uppercase flex items-center gap-2">
              <span>Trabajemos</span>
              <span className="font-script text-2xl text-[#ff007f] font-normal normal-case neon-glow-pink">
                Juntos
              </span>
            </h3>
            <p className="text-xs text-zinc-400 font-roboto mt-1">
              Disponible para desfiles, ferias internacionales (Fexpocruz), producciones de imagen publicitaria y eventos de marca.
            </p>
          </div>

          {/* Direct channels */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-pink-500/40 flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
            >
              <span className="material-icons text-base text-[#ff007f]">mail</span>
              <span className="truncate">Enviar Correo</span>
            </a>
            <a
              href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-500/40 flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
            >
              <span className="material-icons text-base text-[#00d2ff]">chat</span>
              <span className="truncate">WhatsApp Directo</span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 pt-2">
            <div>
              <label className="block text-[11px] font-montserrat uppercase tracking-wider text-zinc-300 font-semibold mb-1">
                Tu Nombre o Empresa
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Productora / Marca BTL"
                className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/15 focus:border-[#00d2ff] text-white text-xs font-roboto outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-montserrat uppercase tracking-wider text-zinc-300 font-semibold mb-1">
                  Tipo de Requerimiento
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-black/80 border border-white/15 focus:border-[#00d2ff] text-white text-xs font-roboto outline-none transition-colors"
                >
                  <option value="Feria / Stand Corporativo">Feria / Stand Corporativo</option>
                  <option value="Pasarela & Desfile de Moda">Pasarela & Desfile de Moda</option>
                  <option value="Campaña Publicitaria BTL">Campaña Publicitaria BTL</option>
                  <option value="Sesión Fotográfica Editorial">Sesión Fotográfica Editorial</option>
                  <option value="Azafata de Protocolo VIP">Azafata de Protocolo VIP</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-montserrat uppercase tracking-wider text-zinc-300 font-semibold mb-1">
                  Fecha Tentativa
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/15 focus:border-[#00d2ff] text-white text-xs font-roboto outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-montserrat uppercase tracking-wider text-zinc-300 font-semibold mb-1">
                Detalles del Evento o Mensaje
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Indica la ubicación, cantidad de días u horarios requeridos..."
                className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/15 focus:border-[#00d2ff] text-white text-xs font-roboto outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff007f] via-[#7928ca] to-[#00d2ff] text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-lg shadow-pink-900/30 hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-icons text-base">send</span>
              <span>{sent ? 'Abriendo WhatsApp...' : 'Enviar Solicitud por WhatsApp'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
