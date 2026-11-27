"use client";
/* @/components/AvisoFeriadoResiduos.tsx */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trash2, CalendarDays, MessageCircle } from "lucide-react";
import { AVISO_FERIADO_RESIDUOS, FECHA_FIN_FERIADO, TELEFONOS } from "@/data/guia";

// Placa de reprogramación de recolección por feriado.
// Se renderiza en el HTML estático y, ya en el navegador, se oculta sola
// si la fecha actual pasó FECHA_FIN_FERIADO (no depende de la fecha de build).
export default function AvisoFeriadoResiduos({ className = "" }: { className?: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(new Date() < FECHA_FIN_FERIADO);
  }, []);

  if (!visible) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 ${className}`}
    >
      <div className="bg-zinc-900 px-6 py-4 text-white text-center">
        <div className="flex items-center justify-center gap-4">
          <Trash2 size={32} className="shrink-0" />
          <h3 className="text-xl md:text-3xl font-black italic uppercase mb-0">Información · Recolección</h3>
        </div>
      </div>

      <div className="p-6 md:p-10">
        {/* Franja naranja: motivo del feriado */}
        <div className="bg-naranja text-white rounded-t-2xl px-6 py-4 flex items-center justify-center gap-4 text-center">
          <CalendarDays size={32} className="shrink-0" />
          <div>
            <p className="text-sm md:text-base font-semibold leading-tight">{AVISO_FERIADO_RESIDUOS.motivo}</p>
            <p className="text-lg md:text-2xl font-black uppercase leading-tight">{AVISO_FERIADO_RESIDUOS.diaFeriado}</p>
          </div>
        </div>

        {/* Franja verde: nueva fecha */}
        <div className="bg-primary text-white rounded-b-2xl px-6 py-6 text-center">
          <p className="text-base md:text-xl font-bold uppercase tracking-tight mb-3">{AVISO_FERIADO_RESIDUOS.leyenda}</p>
          <div className="bg-white text-primary rounded-full px-6 py-3 inline-block">
            <span className="text-2xl md:text-4xl font-black uppercase italic leading-none">{AVISO_FERIADO_RESIDUOS.diaReprogramado}</span>
          </div>
        </div>

        {/* Contacto */}
        <div className="mt-6 flex flex-col items-center gap-3 text-center">
          <p className="text-sm md:text-base font-semibold text-gray-600">{AVISO_FERIADO_RESIDUOS.contacto}</p>
          <a
            href={`https://wa.me/${TELEFONOS.comuna}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-3 bg-green-50 rounded-2xl border border-green-200 text-green-800 hover:bg-green-100 hover:scale-[1.02] transition-all shadow-sm group"
          >
            <MessageCircle size={24} className="text-green-600 group-hover:scale-110 transition-transform" />
            <span className="text-lg md:text-xl font-black italic">3816908950</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
