"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mountain,
  MapPin,
  ShoppingBag,
  Footprints,
  Music,
  Calendar,
  Clock,
  Filter
} from "lucide-react";

// --- DATA PROCESADA ---
// (He pegado tu JSON aquí para que funcione directo. 
// Idealmente esto iría en un archivo aparte, pero para este componente lo dejo autocontenido)
const RAW_DATA = [
  { category: "trekking", date: "30/12/2025", activity: "Trekking Raco / Portezuelo", location: "Estación de Servicio Ruta 341 Km 25", time: "07:00 AM" },
  { category: "caminata", date: "02/01/2026", activity: "Caminata Villa de Raco", location: "Casa de la Cultura, Ruta 341 Km 20", time: "07:00 AM" },
  { category: "trekking", date: "03/01/2026", activity: "Trekking Bosque de las Acacias", location: "Club Juventud Unida, Ruta 340 Km 15", time: "07:00 AM" },
  { category: "trekking", date: "06/01/2026", activity: "Trekking Siambón Cascada Río Noque", location: "Estación de Servicio Ruta 341 Km 25", time: "07:00 AM" },
  { category: "trekking", date: "08/01/2026", activity: "Trekking Cumbres Chicas", location: "Casa de la Cultura, Ruta 341 Km 20", time: "07:00 AM" },
  { category: "caminata", date: "09/01/2026", activity: "Caminata Doña Pastora", location: "Monasterio Benedictino Ruta 341 Km 27", "time": "09:00 AM" },
  { category: "trekking", date: "10/01/2026", activity: "Trekking Raco / Cascada Río Noque", location: "Estación de Servicio Ruta 341 Km 25", "time": "07:00 AM" },
  { category: "feria", date: "10/01/2026", activity: "Feria de Producción Local", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "17:00 PM" },
  { category: "feria", date: "10/01/2026", activity: "Feria de Producción Local", location: "Club Juventud Unida, Ruta 340 Km 15", "time": "17:00 PM" },
  { category: "feria", date: "11/01/2026", activity: "Feria de Producción Local", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "09:00 AM" },
  { category: "feria", date: "11/01/2026", activity: "Feria de Producción Local", location: "Club Juventud Unida, Ruta 340 Km 15", "time": "09:00 AM" },
  { category: "trekking", date: "13/01/2026", activity: "Vuelta al Maciel", location: "Estación de Servicio Ruta 341 Km 25", "time": "07:00 AM" },
  { category: "caminata", date: "15/01/2026", activity: "Caminata Villa de Raco", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "09:00 AM" },
  { category: "caminata", date: "16/01/2026", activity: "Caminata Doña Pastora", location: "Monasterio Benedictino Ruta 341 Km 27", "time": "09:00 AM" },
  { category: "trekking", date: "17/01/2026", activity: "Trekking Portezuelo / Raco", location: "Bo. Privado El Portezuelo", "time": "07:00 AM" },
  { category: "feria", date: "17/01/2026", activity: "Feria de Producción Local", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "17:00 PM" },
  { category: "feria", date: "17/01/2026", activity: "Feria de Producción Local", location: "Club Juventud Unida, Ruta 340 Km 15", "time": "17:00 PM" },
  { category: "feria", date: "18/01/2026", activity: "Feria de Producción Local", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "09:00 AM" },
  { category: "feria", date: "18/01/2026", activity: "Feria de Producción Local", location: "Club Juventud Unida, Ruta 340 Km 15", "time": "09:00 AM" },
  { category: "trekking", date: "20/01/2026", activity: "Trekking Cumbres Chicas", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "07:00 AM" },
  { category: "trekking", date: "22/01/2026", activity: "Trekking Cruz de Yampa", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "07:00 AM" },
  { category: "caminata", date: "23/01/2026", activity: "Caminata Villa de Raco", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "09:00 AM" },
  { category: "feria", date: "24/01/2026", activity: "Feria de Producción Local", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "17:00 PM" },
  { category: "feria", date: "24/01/2026", activity: "Feria de Producción Local", location: "Club Juventud Unida, Ruta 340 Km 15", "time": "17:00 PM" },
  { category: "trekking", date: "24/01/2026", activity: "Trekking La Sala / Río Grande", location: "Escuela Carrone, Ruta 340 Km 13", "time": "07:00 AM" },
  { category: "feria", date: "25/01/2026", activity: "Feria de Producción Local", location: "Club Juventud Unida, Ruta 340 Km 15", "time": "17:00 PM" },
  { category: "feria", date: "25/01/2026", activity: "Feria de Producción Local", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "17:00 PM" },
  { category: "trekking", date: "27/01/2026", activity: "Trekking Vuelta al Maciel", location: "Estación de Servicio Ruta 341 Km 25", "time": "07:00 AM" },
  { category: "caminata", date: "29/01/2026", activity: "Caminata Villa / Rancho de Atahualpa", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "09:00 AM" },
  { category: "fiesta", date: "29/01/2026", activity: "Fiesta del Caballo Cerreño", location: "Ruta 341 Km 26", "time": "07:00 AM - 09:00 PM" },
  { category: "caminata", date: "30/01/2026", activity: "Caminata Doña Pastora", location: "Monasterio Benedictino Ruta 341 Km 27", "time": "09:00 AM" },
  { category: "fiesta", date: "30/01/2026", activity: "Fiesta del Caballo Cerreño", location: "Ruta 341 Km 26", "time": "07:00 AM - 09:00 PM" },
  { category: "trekking", date: "31/01/2026", activity: "Trekking Raco / Portezuelo", location: "Estación de Servicio Ruta 341 Km 25", "time": "07:00 AM" },
  { category: "fiesta", date: "31/01/2026", activity: "Fiesta del Caballo Cerreño", location: "Ruta 341 Km 26", "time": "07:00 AM - 04:00 AM" },
  { category: "feria", date: "31/01/2026", activity: "Feria de Producción Local", location: "Club Juventud Unida, Ruta 340 Km 15", "time": "17:00 PM" },
  { category: "feria", date: "01/02/2026", activity: "Feria de Producción Local", location: "Club Juventud Unida, Ruta 340 Km 15", "time": "09:00 AM" },
  { category: "trekking", date: "03/02/2026", activity: "Trekking Portezuelo / Raco", location: "Bo. Privado El Portezuelo", "time": "07:00 AM" },
  { category: "trekking", date: "05/02/2026", activity: "Trekking Cumbres Chicas", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "07:00 AM" },
  { category: "caminata", date: "06/02/2026", activity: "Caminata Villa de Raco", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "09:00 AM" },
  { category: "feria", date: "07/02/2026", activity: "Feria de Producción Local", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "17:00 PM" },
  { category: "feria", date: "07/02/2026", activity: "Feria de Producción Local", location: "Club Juventud Unida, Ruta 340 Km 15", "time": "17:00 PM" },
  { category: "trekking", date: "07/02/2026", activity: "Trekking Bosque de las Acacias", location: "Club Juventud Unida, Ruta 340 Km 15", "time": "07:00 AM" },
  { category: "feria", date: "08/02/2026", activity: "Feria de Producción Local", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "09:00 AM" },
  { category: "feria", date: "08/02/2026", activity: "Feria de Producción Local", location: "Club Juventud Unida, Ruta 340 Km 15", "time": "09:00 AM" },
  { category: "trekking", date: "10/02/2026", activity: "Trekking Siambón / Cascada del Río Noque", location: "Estación de Servicio Ruta 341 Km 25", "time": "07:00 AM" },
  { category: "caminata", date: "12/02/2026", activity: "Caminata Rancho Atahualpa", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "09:00 AM" },
  { category: "caminata", date: "13/02/2026", activity: "Caminata Doña Pastora", location: "Monasterio Benedictino Ruta 341 Km 27", "time": "09:00 AM" },
  { category: "feria", date: "14/02/2026", activity: "Feria de Producción Local", location: "Club Juventud Unida, Ruta 340 Km 15", "time": "17:00 PM" },
  { category: "feria", date: "14/02/2026", activity: "Feria de Producción Local", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "17:00 PM" },
  { category: "trekking", date: "14/02/2026", activity: "Trekking Cascada Escondida", location: "Club Juventud Unida, Ruta 340 Km 15", "time": "07:00 AM" },
  { category: "feria", date: "15/02/2026", activity: "Feria de Producción Local", location: "Club Juventud Unida, Ruta 340 Km 15", "time": "09:00 AM" },
  { category: "feria", date: "15/02/2026", activity: "Feria de Producción Local", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "09:00 AM" },
  { category: "trekking", date: "17/02/2026", activity: "Trekking Vuelta al Maciel", location: "Estación de Servicio Ruta 341 Km 25", "time": "07:00 AM" },
  { category: "trekking", date: "19/02/2026", activity: "Trekking Cumbres Chicas", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "07:00 AM" },
  { category: "caminata", date: "20/02/2026", activity: "Caminata Villa de Raco", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "09:00 AM" },
  { category: "feria", date: "21/02/2026", activity: "Feria de Producción Local", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "17:00 PM" },
  { category: "feria", date: "21/02/2026", activity: "Feria de Producción Local", location: "Club Juventud Unida, Ruta 340 Km 15", "time": "17:00 PM" },
  { category: "trekking", date: "21/02/2026", activity: "Trekking Portezuelo / Raco", location: "Bo. Privado El Portezuelo", "time": "07:00 AM" },
  { category: "feria", date: "22/02/2026", activity: "Feria de Producción Local", location: "Club Juventud Unida, Ruta 340 Km 15", "time": "09:00 AM" },
  { category: "feria", date: "22/02/2026", activity: "Feria de Producción Local", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "09:00 AM" },
  { category: "trekking", date: "24/02/2026", activity: "Trekking Raco / Portezuelo", location: "Estación de Servicio Ruta 341 Km 25", "time": "07:00 AM" },
  { category: "trekking", date: "26/02/2026", activity: "Trekking Cruz de Yampa", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "07:00 AM" },
  { category: "caminata", date: "27/02/2026", activity: "Caminata Doña Pastora", location: "Monasterio Benedictino Ruta 341 Km 27", "time": "09:00 AM" },
  { category: "feria", date: "28/02/2026", activity: "Feria de Producción Local", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "17:00 PM" },
  { category: "feria", date: "28/02/2026", activity: "Feria de Producción Local", location: "Club Juventud Unida, Ruta 340 Km 15", "time": "17:00 PM" },
  { category: "trekking", date: "28/02/2026", activity: "Trekking La Sala / Río Grande", location: "Escuela Carrone, Ruta 340 Km 13", "time": "07:00 AM" },
  { category: "feria", date: "01/03/2026", activity: "Feria de Producción Local", location: "Club Juventud Unida, Ruta 340 Km 15", "time": "17:00 PM" },
  { category: "feria", date: "01/03/2026", activity: "Feria de Producción Local", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "17:00 PM" },
  { category: "trekking", date: "03/03/2026", activity: "Trekking Siambón Cascada Río Noque", location: "Estación de Servicio Ruta 341 Km 25", "time": "07:00 AM" },
  { category: "trekking", date: "05/03/2026", activity: "Trekking Raco / Portezuelo", location: "Estación de Servicio Ruta 341 Km 25", "time": "07:00 AM" },
  { category: "caminata", date: "06/03/2026", activity: "Caminata Villa de Raco", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "09:00 AM" },
  { category: "feria", date: "07/03/2026", activity: "Feria de Producción Local", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "09:00 AM" },
  { category: "feria", date: "07/03/2026", activity: "Feria de Producción Local", location: "Club Juventud Unida, Ruta 340 Km 15", "time": "09:00 AM" },
  { category: "trekking", date: "07/03/2026", activity: "Trekking Cascada Escondida", location: "Club Juventud Unida, Ruta 340 Km 15", "time": "07:00 AM" },
  { category: "trekking", date: "07/03/2026", activity: "Trekking Cruz de Yampa", location: "Casa de la Cultura, Ruta 341 Km 20", "time": "07:00 AM" }
];

export default function ActivitiesSection() {
  const [filtro, setFiltro] = useState<string>("todos");

  // Filtros disponibles
  const filtros = [
    { id: "todos", label: "Ver Todo", color: "bg-gray-800", text: "text-white" },
    { id: "trekking", label: "Trekking", color: "bg-green-100", text: "text-green-800", icon: Mountain },
    { id: "caminata", label: "Caminatas", color: "bg-orange-100", text: "text-orange-800", icon: Footprints },
    { id: "feria", label: "Ferias", color: "bg-purple-100", text: "text-purple-800", icon: ShoppingBag },
    { id: "fiesta", label: "Eventos", color: "bg-red-100", text: "text-red-800", icon: Music },
  ];

  // Helper para convertir string "DD/MM/YYYY" a objeto Date
  const parseDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
  };

  // Helper para obtener mes y año (Ej: "ENERO 2026")
  const getMonthYear = (dateStr: string) => {
    const date = parseDate(dateStr);
    return date.toLocaleDateString("es-AR", { month: "long", year: "numeric" }).toUpperCase();
  };

  // Helper para nombre del día y número (Ej: "SÁB 10")
  const getDayDisplay = (dateStr: string) => {
    const date = parseDate(dateStr);
    const dayName = date.toLocaleDateString("es-AR", { weekday: "short" }).toUpperCase().replace('.', '');
    const dayNumber = date.getDate();
    return { dayName, dayNumber };
  };
  const isAfter = (dateAtivity: Date) => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    return dateAtivity >= hoy
  }

  // 1. Filtrar
  const filteredData = RAW_DATA.filter(
    item => filtro === "todos" ?
      true :
      item.category === filtro
  ).filter(value => isAfter(parseDate(value.date)));

  // 2. Agrupar por Mes
  const groupedData = useMemo(() => {
    const groups: Record<string, typeof RAW_DATA> = {};
    filteredData.forEach(item => {
      const monthYear = getMonthYear(item.date);
      if (!groups[monthYear]) groups[monthYear] = [];
      groups[monthYear].push(item);
    });
    return groups;
  }, [filteredData]);

  // Colores por categoría (para la barrita lateral)
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'trekking': return 'bg-green-600';
      case 'caminata': return 'bg-orange-500';
      case 'feria': return 'bg-purple-600';
      case 'fiesta': return 'bg-red-600';
      default: return 'bg-gray-400';
    }
  };

  const handleActivityClick = (actividad: typeof RAW_DATA[0]) => {
    const numero = "5493816908950"; // Formato internacional para Argentina
    const mensaje = `Hola! Quisiera más información sobre la actividad "${actividad.activity}" del día ${actividad.date}.`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
  };

  return (
    <section id="agenda" className="container mx-auto px-4 md:px-6 mb-20">

      {/* --- HEADER COMPACTO --- */}
      <div className="mb-4">
        <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-6 flex items-center gap-2">
          <Calendar className="text-naranja" />
          Agenda 2026
        </h2>

        {/* --- FILTROS HORIZONTALES (Scrollable en móvil) --- */}
        <div className="flex gap-3 overflow-x-auto py-2 scrollbar-hide snap-x overflow-y-visible pl-4">
          {filtros.map((f) => {
            const Icon = f.icon;
            const isActive = filtro === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFiltro(f.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all border snap-start z-10 ${isActive
                  ? "bg-primary text-white border-primary shadow-lg scale-105"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                  }`}
              >
                {Icon && <Icon size={16} className={isActive ? "text-white" : f.text.replace("text-", "text-opacity-70 text-")} />}
                {f.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* --- LISTA TIPO AGENDA --- */}
      <div className="flex flex-col gap-8">
        <AnimatePresence mode="wait">
          {Object.keys(groupedData).length > 0 ? (
            Object.keys(groupedData).map((month) => (
              <motion.div
                key={month}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                {/* CABECERA DE MES (Sticky) */}
                <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm py-3 border-b border-gray-100 mb-2">
                  <h3 className="font-black text-gray-400 tracking-widest uppercase text-xl">{month}</h3>
                </div>

                {/* ITEMS DEL MES */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {groupedData[month].map((item, idx) => {
                    const { dayName, dayNumber } = getDayDisplay(item.date);
                    const catColor = getCategoryColor(item.category);

                    return (
                      <div
                        key={idx}
                        onClick={() => handleActivityClick(item)}
                        className="group flex bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all relative overflow-hidden cursor-pointer"
                      >

                        {/* Indicador de Color Lateral */}
                        <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${catColor}`} />

                        {/* Columna FECHA (Izquierda) */}
                        <div className="flex flex-col items-center justify-center pr-4 border-r border-gray-100 min-w-14 pl-2">
                          <span className="text-xs font-bold text-gray-400 uppercase">{dayName}</span>
                          <span className="text-2xl font-black text-gray-800 leading-none">{dayNumber}</span>
                        </div>

                        {/* Columna INFO (Centro) */}
                        <div className="flex-1 pl-4 flex flex-col justify-center">
                          {/* Categoría pequeña */}
                          <span className={`text-[10px] font-bold uppercase tracking-wider mb-1 w-fit px-2 py-0.5 rounded-md ${item.category === 'fiesta' ? 'bg-red-50 text-red-600' :
                            item.category === 'trekking' ? 'bg-green-50 text-green-600' :
                              item.category === 'feria' ? 'bg-purple-50 text-purple-600' :
                                'bg-orange-50 text-orange-600'
                            }`}>
                            {item.category}
                          </span>

                          <h4 className="font-bold text-gray-800 leading-tight mb-1.5 line-clamp-2">
                            {item.activity}
                          </h4>

                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                              <Clock size={12} className="shrink-0" />
                              {item.time}
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-gray-400">
                              <MapPin size={12} className="shrink-0" />
                              <span className="truncate">{item.location}</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-400 font-medium">No se encontraron actividades con este filtro.</p>
              <button onClick={() => setFiltro("todos")} className="mt-4 text-sm font-bold text-primary underline">
                Ver todas las actividades
              </button>
            </div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
}