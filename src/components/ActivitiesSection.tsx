"use client";
/* @/components/ActivitiesSection.tsx */
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Mountain,
  MapPin,
  ShoppingBag,
  Footprints,
  Music,
  PartyPopper,
  Calendar,
  Clock,
  Repeat
} from "lucide-react";

// --- TIPOS ---
type Categoria = "trekking" | "caminata" | "feria" | "cultura" | "fiesta";

interface EventoBase {
  category: Categoria;
  activity: string;
  location: string;
  municipio: string;
  time: string;
}

type Evento =
  // Fecha única: "DD/MM/YYYY"
  | (EventoBase & { kind: "puntual"; date: string })
  // Evento que dura varios días seguidos (ej: festival del 28/07 al 02/08)
  | (EventoBase & { kind: "rango"; start: string; end: string })
  // Periódico por día de semana (0=Dom, 1=Lun ... 6=Sáb), con vigencia
  | (EventoBase & {
      kind: "recurrente";
      weekdays: number[];
      frecuencia: string; // Etiqueta visible: "Todos los días", "Jue a Dom", etc.
      desde?: string;
      hasta: string;
    });

// Ocurrencia concreta (una tarjeta en la agenda)
interface Ocurrencia extends EventoBase {
  kind: Evento["kind"];
  fecha: Date;
  badge?: string;
}

// --- DATA: EVENTOS TEMPORADA DE INVIERNO 2026 ---
const RAW_DATA: Evento[] = [
  // ============ RECURRENTES (zona) ============
  {
    kind: "recurrente", category: "feria", municipio: "El Cadillal",
    activity: "Lagoferiantes", location: "Predio Lagoferiantes", time: "12:00 - 20:00 HS",
    weekdays: [0, 1, 2, 3, 4, 5, 6], frecuencia: "Todos los días", hasta: "31/07/2026"
  },
  {
    kind: "recurrente", category: "cultura", municipio: "San Javier",
    activity: "Mapping: Cristo Resplandeciente", location: "Explanada del Cristo Bendicente", time: "19:30 y 20:00 HS",
    weekdays: [0, 4, 5, 6], frecuencia: "Jue a Dom", hasta: "31/07/2026"
  },

  // ============ RANGOS (varios días seguidos) ============
  {
    kind: "rango", category: "cultura", municipio: "SMT",
    activity: "21° Festival Tucumán Cine", location: "Multisede", time: "Consultar horarios",
    start: "28/07/2026", end: "02/08/2026"
  },

  // ============ JULIO 2026 - RACO (Guías de Raco) ============
  { kind: "puntual", category: "trekking", municipio: "Raco", date: "09/07/2026", activity: "Trekking Cumbres Chicas", location: "Casa de la Cultura, Ruta 341 Km 20,5", time: "09:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "Raco", date: "10/07/2026", activity: "Paseo Huellas de Atahualpa", location: "Casa de la Cultura, Ruta 341 Km 20,5", time: "15:00 HS" },
  { kind: "puntual", category: "trekking", municipio: "Raco", date: "11/07/2026", activity: "Trekking Portezuelo / Raco", location: "Barrio Privado Portezuelo, Ruta 340 Km 15", time: "09:00 HS" },
  { kind: "puntual", category: "trekking", municipio: "Raco", date: "12/07/2026", activity: "Trekking Vuelta de los Miradores", location: "Estación de Servicio Atahualpa, Ruta 341 Km 25", time: "09:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "Raco", date: "13/07/2026", activity: "Caminata Huellas de Atahualpa", location: "Casa de la Cultura, Ruta 341 Km 20,5", time: "15:00 HS" },
  { kind: "puntual", category: "trekking", municipio: "Raco", date: "14/07/2026", activity: "Trekking Rancho de Atahualpa", location: "Casa de la Cultura, Ruta 341 Km 20,5", time: "11:00 HS" },
  { kind: "puntual", category: "trekking", municipio: "Raco", date: "15/07/2026", activity: "Trekking Bosque de las Acacias", location: "Club Juventud Unida, Ruta 340 Km 15", time: "10:00 HS" },
  { kind: "puntual", category: "trekking", municipio: "Raco", date: "16/07/2026", activity: "Trekking Raco / Portezuelo", location: "Estación de Servicio Atahualpa, Ruta 341 Km 25", time: "09:00 HS" },
  { kind: "puntual", category: "trekking", municipio: "Raco", date: "18/07/2026", activity: "Trekking Cruz de Yampa", location: "Casa de la Cultura, Ruta 341 Km 20,5", time: "08:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "Raco", date: "19/07/2026", activity: "Paseo Huellas de Atahualpa", location: "Casa de la Cultura, Ruta 341 Km 20,5", time: "15:00 HS" },
  { kind: "puntual", category: "trekking", municipio: "Raco", date: "20/07/2026", activity: "Trekking Cumbres Chicas", location: "Casa de la Cultura, Ruta 341 Km 20,5", time: "09:00 HS" },
  { kind: "puntual", category: "trekking", municipio: "Raco", date: "21/07/2026", activity: "Trekking Cascada Río Noque", location: "Bar Los Acacios, Ruta 340 Km 13", time: "14:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "Raco", date: "22/07/2026", activity: "Paseo Huellas de Atahualpa", location: "Casa de la Cultura, Ruta 341 Km 20,5", time: "15:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "Raco", date: "23/07/2026", activity: "Paseo Huellas de Atahualpa y Villa de Raco", location: "Casa de la Cultura, Ruta 341 Km 20,5", time: "14:00 HS" },

  // ============ EL CADILLAL ============
  { kind: "puntual", category: "fiesta", municipio: "El Cadillal", date: "26/07/2026", activity: "Aniversario Lagoferiantes", location: "Predio Lagoferiantes", time: "15:00 HS" },

  // ============ SAN JAVIER ============
  { kind: "puntual", category: "caminata", municipio: "San Javier", date: "24/07/2026", activity: "Caminata Guiada a la Virgen de Schoenstatt", location: "Salida desde el Complejo Polideportivo", time: "15:00 - 17:00 HS" },
  { kind: "puntual", category: "cultura", municipio: "San Javier", date: "26/07/2026", activity: "5º Ciclo de Música al Atardecer: Bandas en vivo", location: "Complejo Turístico Cristo Bendicente", time: "16:30 - 18:30 HS" },
  { kind: "puntual", category: "cultura", municipio: "San Javier", date: "01/08/2026", activity: "5º Ciclo de Música al Atardecer: Homenaje a la Pachamama", location: "Plaza Manos Unidas", time: "15:00 - 18:00 HS" },

  // ============ TAFÍ VIEJO ============
  { kind: "puntual", category: "caminata", municipio: "Tafí Viejo", date: "23/07/2026", activity: "Tour de los Museos", location: "Salida desde el Ente de Turismo", time: "09:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "Tafí Viejo", date: "24/07/2026", activity: "Monjes Benedictinos - El Cadillal", location: "Salida desde el Ente de Turismo", time: "09:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "Tafí Viejo", date: "25/07/2026", activity: "Salida al Monumento Nina Velárdez y Cruz Papa Francisco", location: "Hostería Atahualpa Yupanqui", time: "09:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "Tafí Viejo", date: "26/07/2026", activity: "City Tour - Tafí Viejo", location: "Salida desde el Ente de Turismo", time: "16:00 HS" },

  // ============ SAN MIGUEL DE TUCUMÁN ============
  { kind: "puntual", category: "caminata", municipio: "SMT", date: "23/07/2026", activity: "Circuito Histórico Cultural", location: "Parada del Bus Turístico (Laprida 50)", time: "11:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "SMT", date: "23/07/2026", activity: "City Tour", location: "Parada del Bus Turístico (Laprida 50)", time: "16:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "SMT", date: "24/07/2026", activity: "Guiado a pie", location: "Oficina de Turismo Municipal (Congreso y Crisóstomo Álvarez)", time: "10:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "SMT", date: "24/07/2026", activity: "Circuito de la Ruta de la Empanada", location: "Parada del Bus Turístico (Laprida 50)", time: "12:00 HS" },
  { kind: "puntual", category: "cultura", municipio: "SMT", date: "24/07/2026", activity: "Bus Recordar - Cementerio del Oeste", location: "Parada del Bus Turístico (Laprida 50)", time: "19:30 HS" },
  { kind: "puntual", category: "caminata", municipio: "SMT", date: "25/07/2026", activity: "Circuito de La Ciudadela", location: "Parada del Bus Turístico (Laprida 50)", time: "16:00 HS" },
  { kind: "puntual", category: "cultura", municipio: "SMT", date: "25/07/2026", activity: "Clase de Folclore", location: "Plaza Temática (Congreso y San Lorenzo)", time: "17:00 HS" },
  { kind: "puntual", category: "fiesta", municipio: "SMT", date: "25/07/2026", activity: "Festival de Folklore Electrónico", location: "Plaza Temática (Congreso y San Lorenzo)", time: "19:00 - 23:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "SMT", date: "26/07/2026", activity: "Circuito Histórico Cultural", location: "Parada del Bus Turístico (Laprida 50)", time: "11:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "SMT", date: "26/07/2026", activity: "Circuito del Sánguche de Milanesa", location: "Parada del Bus Turístico (Laprida 50)", time: "20:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "SMT", date: "27/07/2026", activity: "Guiado a pie", location: "Oficina de Turismo Municipal (Congreso y Crisóstomo Álvarez)", time: "10:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "SMT", date: "28/07/2026", activity: "Circuito Histórico Cultural", location: "Parada del Bus Turístico (Laprida 50)", time: "11:00 y 16:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "SMT", date: "29/07/2026", activity: "Circuito Histórico Cultural", location: "Parada del Bus Turístico (Laprida 50)", time: "11:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "SMT", date: "29/07/2026", activity: "City Tour", location: "Parada del Bus Turístico (Laprida 50)", time: "16:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "SMT", date: "30/07/2026", activity: "Circuito Histórico Cultural", location: "Parada del Bus Turístico (Laprida 50)", time: "11:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "SMT", date: "30/07/2026", activity: "City Tour", location: "Parada del Bus Turístico (Laprida 50)", time: "16:00 HS" },
  { kind: "puntual", category: "cultura", municipio: "SMT", date: "30/07/2026", activity: "Cocina con Identidad Tucumana", location: "Plaza Temática (Congreso y San Lorenzo)", time: "20:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "SMT", date: "31/07/2026", activity: "Guiado a pie", location: "Oficina de Turismo Municipal (Congreso y Crisóstomo Álvarez)", time: "10:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "SMT", date: "31/07/2026", activity: "Circuito de la Ruta de la Empanada", location: "Parada del Bus Turístico (Laprida 50)", time: "12:00 HS" },
  { kind: "puntual", category: "caminata", municipio: "SMT", date: "31/07/2026", activity: "Circuito Escultórico a Cielo Abierto", location: "Parada del Bus Turístico (Laprida 50)", time: "19:00 HS" },
];

// --- MOTOR DE OCURRENCIAS ---
const VENTANA_DIAS = 60; // Cuántos días hacia adelante expande los recurrentes

const parseDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day);
};

const fmtCorta = (dateStr: string) => dateStr.slice(0, 5); // "DD/MM"

function getOcurrencias(hoy: Date): Ocurrencia[] {
  const fin = new Date(hoy);
  fin.setDate(fin.getDate() + VENTANA_DIAS);

  const out: Ocurrencia[] = [];

  for (const ev of RAW_DATA) {
    const base = {
      kind: ev.kind,
      category: ev.category,
      activity: ev.activity,
      location: ev.location,
      municipio: ev.municipio,
      time: ev.time,
    };

    if (ev.kind === "puntual") {
      const fecha = parseDate(ev.date);
      if (fecha >= hoy) out.push({ ...base, fecha });

    } else if (ev.kind === "rango") {
      const start = parseDate(ev.start);
      const end = parseDate(ev.end);
      if (end >= hoy) {
        // Si ya empezó, se ancla en hoy con etiqueta "En curso"
        const enCurso = start < hoy;
        out.push({
          ...base,
          fecha: enCurso ? new Date(hoy) : start,
          badge: enCurso
            ? `En curso · hasta el ${fmtCorta(ev.end)}`
            : `Del ${fmtCorta(ev.start)} al ${fmtCorta(ev.end)}`,
        });
      }

    } else {
      // Recurrente: expandir cada día de semana dentro de la ventana y la vigencia
      const desde = ev.desde ? parseDate(ev.desde) : hoy;
      const hasta = parseDate(ev.hasta);
      const cursor = new Date(Math.max(hoy.getTime(), desde.getTime()));
      const limite = new Date(Math.min(fin.getTime(), hasta.getTime()));

      while (cursor <= limite) {
        if (ev.weekdays.includes(cursor.getDay())) {
          out.push({ ...base, fecha: new Date(cursor), badge: ev.frecuencia });
        }
        cursor.setDate(cursor.getDate() + 1);
      }
    }
  }

  out.sort((a, b) => a.fecha.getTime() - b.fecha.getTime() || a.time.localeCompare(b.time));
  return out;
}

export default function ActivitiesSection() {
  const [filtro, setFiltro] = useState<string>("todos");

  // Filtros disponibles
  const filtros = [
    { id: "todos", label: "Ver Todo", color: "bg-gray-800", text: "text-white" },
    { id: "trekking", label: "Trekking", color: "bg-green-100", text: "text-green-800", icon: Mountain },
    { id: "caminata", label: "Paseos", color: "bg-orange-100", text: "text-orange-800", icon: Footprints },
    { id: "feria", label: "Ferias", color: "bg-purple-100", text: "text-purple-800", icon: ShoppingBag },
    { id: "cultura", label: "Cultura", color: "bg-blue-100", text: "text-blue-800", icon: Music },
    { id: "fiesta", label: "Festivales", color: "bg-red-100", text: "text-red-800", icon: PartyPopper },
  ];

  // Ocurrencias futuras (puntuales + rangos activos + recurrentes expandidos)
  const ocurrencias = useMemo(() => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    return getOcurrencias(hoy);
  }, []);

  // Helper para obtener mes y año (Ej: "JULIO 2026")
  const getMonthYear = (date: Date) => {
    return date.toLocaleDateString("es-AR", { month: "long", year: "numeric" }).toUpperCase();
  };

  // Helper para nombre del día y número (Ej: "SÁB 10")
  const getDayDisplay = (date: Date) => {
    const dayName = date.toLocaleDateString("es-AR", { weekday: "short" }).toUpperCase().replace('.', '');
    const dayNumber = date.getDate();
    return { dayName, dayNumber };
  };

  // 1. Filtrar por categoría
  const filteredData = ocurrencias.filter(
    item => filtro === "todos" ? true : item.category === filtro
  );

  // 2. Agrupar por Mes
  const groupedData = useMemo(() => {
    const groups: Record<string, Ocurrencia[]> = {};
    filteredData.forEach(item => {
      const monthYear = getMonthYear(item.fecha);
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
      case 'cultura': return 'bg-blue-600';
      case 'fiesta': return 'bg-red-600';
      default: return 'bg-gray-400';
    }
  };

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'trekking': return 'bg-green-50 text-green-600';
      case 'caminata': return 'bg-orange-50 text-orange-600';
      case 'feria': return 'bg-purple-50 text-purple-600';
      case 'cultura': return 'bg-blue-50 text-blue-600';
      case 'fiesta': return 'bg-red-50 text-red-600';
      default: return 'bg-gray-50 text-gray-600';
    }
  };

  const handleActivityClick = (actividad: Ocurrencia) => {
    const numero = "5493816908950";
    const fechaStr = actividad.fecha.toLocaleDateString("es-AR");
    const mensaje = `Hola! Quisiera más información sobre la actividad "${actividad.activity}" del día ${fechaStr}.`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="agenda" className="container mx-auto px-4 md:px-6 mb-20">

      {/* --- HEADER COMPACTO --- */}
      <div className="mb-4">
        <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-6 flex items-center gap-2">
          <Calendar className="text-naranja" />
          Agenda Otoño - Invierno 2026
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
            );
          })}
        </div>
      </div>

      {/* --- LISTA TIPO AGENDA --- */}
      <div className="flex flex-col gap-8">
        {/* Sin AnimatePresence: con varios meses (varios hijos) los nodos salientes no se desmontan al cambiar de filtro */}
        {Object.keys(groupedData).length > 0 ? (
            Object.keys(groupedData).map((month) => (
              <motion.div
                key={`${filtro}-${month}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative"
              >
                {/* CABECERA DE MES (Sticky) */}
                <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm py-3 border-b border-gray-100 mb-2">
                  <h3 className="font-black text-gray-400 tracking-widest uppercase text-xl">{month}</h3>
                </div>

                {/* ITEMS DEL MES */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {groupedData[month].map((item, idx) => {
                    const { dayName, dayNumber } = getDayDisplay(item.fecha);
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
                          {/* Categoría + badge de recurrencia/rango */}
                          <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                            <span className={`text-[10px] font-bold uppercase tracking-wider w-fit px-2 py-0.5 rounded-md ${getCategoryBadge(item.category)}`}>
                              {item.category === 'caminata' ? 'paseo' : item.category === 'fiesta' ? 'festival' : item.category}
                            </span>
                            {item.badge && (
                              <span className="text-[10px] font-bold uppercase tracking-wider w-fit px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 flex items-center gap-1">
                                {item.kind === 'recurrente' && <Repeat size={10} className="shrink-0" />}
                                {item.badge}
                              </span>
                            )}
                          </div>

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
                              <span className="truncate">{item.municipio} · {item.location}</span>
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
      </div>

    </section>
  );
}
