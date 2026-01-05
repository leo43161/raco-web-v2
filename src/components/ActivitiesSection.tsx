"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mountain, 
  MapPin, 
  ShoppingBag, 
  Footprints, 
  Music, 
  Filter
} from "lucide-react";
import { DATA_ACTIVIDADES, Categoria } from "@/data/actividades";

export default function ActivitiesSection() {
  const [filtro, setFiltro] = useState<Categoria | "Todas">("Todas");

  // Lógica de filtrado
  const actividadesFiltradas = DATA_ACTIVIDADES.filter(act => 
    filtro === "Todas" ? true : act.tipo === filtro
  );

  // Iconos dinámicos
  const getIcon = (tipo: string) => {
    if (tipo === "Cultura") return <ShoppingBag size={14} />;
    if (tipo === "Caminata") return <Footprints size={14} />;
    if (tipo === "Evento") return <Music size={14} />;
    return <Mountain size={14} />;
  };

  // Botones de categorías
  const categorias: (Categoria | "Todas")[] = ["Todas", "Trekking", "Caminata", "Cultura", "Evento"];

  return (
    <section id="agenda" className="container mx-auto px-6 mb-20">
      
      {/* HEADER + FILTROS */}
      <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-10 gap-6">
        <div>
          <span className="text-naranja font-bold tracking-widest text-xs uppercase block mb-2 text-center xl:text-left">
            Disfrutá Raco
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center xl:text-left">
            Cronograma <span className="text-primary underline decoration-secondary decoration-4 underline-offset-4">Oficial 2026</span>
          </h2>
        </div>

        {/* Selector de Filtros */}
        <div className="flex flex-wrap justify-center gap-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                filtro === cat
                  ? "bg-primary text-white border-primary shadow-lg shadow-green-900/20 scale-105"
                  : "bg-white text-gray-500 border-gray-200 hover:border-naranja hover:text-naranja"
              }`}
            >
              {cat === "Todas" ? "Ver Todo" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* GRILLA DE ACTIVIDADES */}
      <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {actividadesFiltradas.length > 0 ? (
            actividadesFiltradas.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={item.id}
                className="group bg-white rounded-[2rem] p-4 flex flex-col sm:flex-row gap-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-naranja-light transition-all"
              >
                {/* Bloque Fecha */}
                <div className={`rounded-3xl p-4 flex flex-col items-center justify-center min-w-[6rem] text-center border transition-colors ${
                    item.tipo === 'Evento' 
                    ? 'bg-naranja text-white border-naranja' // Destacado para Eventos grandes
                    : 'bg-background border-gray-200 text-foreground group-hover:bg-primary group-hover:text-white'
                }`}>
                  <span className="text-[10px] font-bold opacity-80 uppercase tracking-widest mb-1">{item.mes}</span>
                  <span className="text-4xl font-black leading-none mb-1">{item.dia}</span>
                  <span className="text-[10px] font-bold uppercase">{item.nombreDia.substring(0, 3)}</span>
                </div>

                {/* Bloque Info */}
                <div className="flex-1 py-1 pr-2 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-2">
                    {/* Badge Dificultad (Condicional) */}
                    {item.dificultad ? (
                      <span className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider ${
                        item.dificultad === 'Alta' ? 'bg-red-100 text-rojo' : 
                        item.dificultad === 'Media' ? 'bg-orange-100 text-naranja' : 
                        'bg-green-100 text-primary'
                      }`}>
                        {item.dificultad}
                      </span>
                    ) : (
                      // Si no tiene dificultad, mostramos el Tipo
                      <span className="text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider bg-gray-100 text-gray-500">
                        {item.tipo}
                      </span>
                    )}
                    
                    <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                      {getIcon(item.tipo)} {item.tipo}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors leading-tight">
                    {item.titulo}
                  </h4>
                  
                  <div className="space-y-1.5 mt-auto">
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <MapPin size={16} className="text-secondary shrink-0" />
                      <span className="truncate">{item.lugar}</span>
                    </p>
                    <p className="text-sm text-gray-800 font-bold flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px] shrink-0">
                        H
                      </span>
                      {item.hora}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-1 lg:col-span-2 text-center py-10 text-gray-400">
              No hay actividades de este tipo programadas.
            </div>
          )}
        </AnimatePresence>
      </motion.div>
      
      <div className="mt-10 text-center">
        <p className="text-sm text-gray-500 mb-4 bg-gray-50 inline-block px-4 py-2 rounded-full border border-gray-100">
          ⚠️ Actividades al aire libre sujetas a condiciones climáticas.
        </p>
      </div>
    </section>
  );
}