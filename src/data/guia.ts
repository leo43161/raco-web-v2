// src/data/guia.ts

export interface SeccionGuia {
  id: string;
  titulo: string;
  bajada?: string; // Texto introductorio corto
  contenido: string[]; // Párrafos principales
  destacado?: string; // Texto para resaltar (alertas, notas)
  items?: { label: string; valor: string }[]; // Para listas tipo clave-valor (ej: velocidades)
}

export interface CronogramaResiduos {
  dia: string;
  zona: string;
}

export interface InfoCAPS {
  nombre: string;
  ubicacion: string;
  horarios: string[];
  contacto?: string;
}

// --- 1. DATOS DE SALUD (CAPS) ---
export const DATA_CAPS: InfoCAPS[] = [
  {
    nombre: "CAPS Raco",
    ubicacion: "Ruta 341 km 22",
    horarios: [
      "Guardia de Enfermería: 24 hs.",
      "Médicos: Martes, Miércoles, Jueves y Fines de Semana (07:00 a 19:00 hs)."
    ]
  },
  {
    nombre: "CAPS Dominga Guerrero",
    ubicacion: "Ruta 340 km 14 (Valle de San Javier)",
    horarios: [
      "Pediatra: Lunes a Viernes (07:00 a 13:00 hs).",
      "Médico Clínico: Miércoles (Mañana y Tarde).",
      "Enfermería: Lunes a Viernes (Mañana y Tarde)."
    ],
    contacto: "3815662715"
  },
  {
    nombre: "CAPS Marga",
    ubicacion: "Ruta 341 km 30 (El Siambón)",
    horarios: [
      "Abierto: Lunes a Viernes (07:30 a 19:00 hs).",
      "Enfermería y Médico: Lunes a Viernes (08:00 a 13:00 hs)."
    ]
  }
];

export const DATA_AMBULANCIA = "Los 3 CAPS tienen servicio de ambulancia activo las 24 hs.";

// --- 2. RECOLECCIÓN DE RESIDUOS (CRONOGRAMA SECOS) ---
export const DATA_RESIDUOS_SECOS: CronogramaResiduos[] = [
  { dia: "Martes", zona: "Desde el Río Grande hasta la Estación de Servicio." },
  { dia: "Miércoles", zona: "Desde la Estación de Servicio hasta el Cementerio." },
  { dia: "Jueves", zona: "Desde el Cementerio hasta Las Tuquitas." },
  { dia: "Viernes", zona: "Valle de San Javier." }
];

export const NOTA_RESIDUOS = "Los residuos secos deben depositarse después de las 12:00 hs. Para residuos especiales (chatarra o escombros), comunicarse con la Comuna.";

// --- 3. TEXTOS NORMATIVOS Y CONVIVENCIA ---
export const DATA_NORMATIVAS: SeccionGuia[] = [
  {
    id: "transito",
    titulo: "Circulación Vehicular",
    bajada: "Es importante que al llegar a Raco hagas un 'cambio de chip'. Estás en un lugar de descanso.",
    contenido: [
      "En los caminos internos hay niños jugando y gente a caballo. Por favor, respetá las velocidades máximas.",
      "Las motos tienen prohibida la circulación con escapes libres y ausencia de luces."
    ],
    items: [
      { label: "Ruta", valor: "Máx 60 km/h" },
      { label: "Cruces con caminos", valor: "Máx 40 km/h" },
      { label: "Caminos internos", valor: "Máx 30 km/h" }
    ],
    destacado: "Cualquier anormalidad denunciada a la Comisaría: 0381 4925 266"
  },
  {
    id: "caballos",
    titulo: "Tenencia Responsable de Caballos",
    bajada: "Raco es la villa de los caballos y para preservarla debemos ser responsables.",
    contenido: [
      "El propietario tiene la obligación de enterrar a sus animales cuando mueren.",
      "En caso de dudas sobre cómo proceder, podés comunicarte con la Comuna para asesorarte sobre las distintas posibilidades de resolución."
    ]
  },
  {
    id: "plogging",
    titulo: "Hacé Plogging en Raco",
    contenido: [
      "Si te gusta ver a Raco limpio y salís a caminar, llevá una bolsa vacía y hacé Plogging (recoger botellas y residuos que veas en el camino).",
      "Nuestra comuna tiene más de 200 km de red vial y senderos. La única manera de mantenerla limpia es colaborando entre todos."
    ]
  },
  {
    id: "estafas",
    titulo: "Evitá Estafas Inmobiliarias",
    contenido: [
      "Antes de comprar un terreno, consultá en la Comuna sobre la regularidad de los lotes y la situación catastral.",
      "La Comuna NO proporciona agua ni luz, ni permite la construcción en loteos no autorizados."
    ],
    destacado: "Asesorate gratis en la Comuna antes de invertir."
  }
];

// --- 4. TELÉFONOS ÚTILES (Para botones rápidos) ---
export const TELEFONOS = {
  comisaria: "03814925266",
  bomberos: "3813398853",
  ambulancia: "107",
  comuna: "5493816908950"
};