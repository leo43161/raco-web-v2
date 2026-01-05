// src/data/actividades.ts

export type Categoria = "Todas" | "Trekking" | "Caminata" | "Cultura" | "Evento";

export interface Actividad {
  id: number;
  fecha: string;      // "02/01"
  dia: string;        // "02"
  mes: string;        // "ENE"
  nombreDia: string;  // "Viernes"
  titulo: string;
  lugar: string;
  hora: string;
  tipo: Categoria;    // Para el filtro
  dificultad?: string; // Opcional
}

export const DATA_ACTIVIDADES: Actividad[] = [
  // --- ENERO 2026 ---
  {
    id: 1, fecha: "02/01", dia: "02", mes: "ENE", nombreDia: "Viernes",
    titulo: "Caminata Villa de Raco",
    lugar: "Casa de la Cultura (Km 20)", hora: "07:00 AM",
    tipo: "Caminata", dificultad: "Baja"
  },
  {
    id: 2, fecha: "03/01", dia: "03", mes: "ENE", nombreDia: "Sábado",
    titulo: "Trekking Bosque de las Acacias",
    lugar: "Club Juventud Unida (Km 15)", hora: "07:00 AM",
    tipo: "Trekking", dificultad: "Media"
  },
  {
    id: 3, fecha: "06/01", dia: "06", mes: "ENE", nombreDia: "Martes",
    titulo: "Trekking Siambón / Cascada Río Noque",
    lugar: "Estación de Servicio (Km 25)", hora: "07:00 AM",
    tipo: "Trekking", dificultad: "Media"
  },
  {
    id: 4, fecha: "08/01", dia: "08", mes: "ENE", nombreDia: "Jueves",
    titulo: "Trekking Cumbres Chicas",
    lugar: "Casa de la Cultura (Km 20)", hora: "07:00 AM",
    tipo: "Trekking", dificultad: "Alta"
  },
  {
    id: 5, fecha: "09/01", dia: "09", mes: "ENE", nombreDia: "Viernes",
    titulo: "Caminata Doña Pastora",
    lugar: "Monasterio Benedictino (Km 27)", hora: "09:00 AM",
    tipo: "Caminata", dificultad: "Baja"
  },
  {
    id: 6, fecha: "10/01", dia: "10", mes: "ENE", nombreDia: "Sábado",
    titulo: "Trekking Raco / Cascada Río Noque",
    lugar: "Estación de Servicio (Km 25)", hora: "07:00 AM",
    tipo: "Trekking", dificultad: "Media"
  },
  {
    id: 7, fecha: "10/01", dia: "10", mes: "ENE", nombreDia: "Sábado",
    titulo: "Feria de Producción Local",
    lugar: "Casa de la Cultura / Club Juv. Unida", hora: "17:00 HS",
    tipo: "Cultura"
    // Sin dificultad
  },
  {
    id: 8, fecha: "29/01", dia: "29", mes: "ENE", nombreDia: "Jueves",
    titulo: "Fiesta del Caballo Cerreño (Inicio)",
    lugar: "Ruta 341, Km 26", hora: "Todo el día",
    tipo: "Evento"
  },
  
  // --- FEBRERO 2026 ---
  {
    id: 9, fecha: "24/02", dia: "24", mes: "FEB", nombreDia: "Martes",
    titulo: "Trekking Raco / Portezuelo",
    lugar: "Estación de Servicio (Km 25)", hora: "07:00 AM",
    tipo: "Trekking", dificultad: "Media"
  },
  {
    id: 10, fecha: "26/02", dia: "26", mes: "FEB", nombreDia: "Jueves",
    titulo: "Trekking Cruz de Yampa",
    lugar: "Casa de la Cultura (Km 20)", hora: "07:00 AM",
    tipo: "Trekking", dificultad: "Media"
  },
  {
    id: 11, fecha: "27/02", dia: "27", mes: "FEB", nombreDia: "Viernes",
    titulo: "Caminata Doña Pastora",
    lugar: "Monasterio Benedictino (Km 27)", hora: "09:00 AM",
    tipo: "Caminata", dificultad: "Baja"
  },
  {
    id: 12, fecha: "28/02", dia: "28", mes: "FEB", nombreDia: "Sábado",
    titulo: "Feria de Producción Local (Cierre)",
    lugar: "Club Juventud Unida", hora: "17:00 HS",
    tipo: "Cultura"
  },
  {
    id: 13, fecha: "28/02", dia: "28", mes: "FEB", nombreDia: "Sábado",
    titulo: "Trekking La Sala / Río Grande",
    lugar: "Escuela Carrone (Ruta 340)", hora: "07:00 AM",
    tipo: "Trekking", dificultad: "Alta"
  }
];