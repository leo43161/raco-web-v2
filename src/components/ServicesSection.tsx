"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Utensils,
    Hammer,
    ShoppingBag,
    Home,
    Sparkles,
    MoreHorizontal,
    Phone,
    MapPin,
    ChevronDown,
    Search
} from "lucide-react";

interface ServiceItem {
    name: string;
    contactName?: string; // El ? significa que es opcional
    phone?: string;
    location?: string;
    description?: string;
}

interface ServiceCategory {
    category: string;
    icon: any; // Para los iconos de Lucide
    color: string;
    items: ServiceItem[];
}

// --- DATA (Tu JSON) ---
const DATA_SERVICIOS: ServiceCategory[] = [
    {
        category: "Gastronomía",
        icon: Utensils,
        color: "bg-orange-100 text-orange-600",
        items: [
            { name: "Food and Beer Truck", contactName: "Miguel Matulich", phone: "+54 11 38481926" },
            { name: "Repostería", contactName: "Rocío Toranzo", phone: "3813025365" },
            { name: "Restaurante Andino", contactName: "Juan Andino", phone: "3815479515", location: "Raco Km 24 (Restobar Lo de Andino)" },
            { name: "Dorita Comidas", contactName: "Benita Dora Alderete", phone: "3816322082" },
            { name: "Sanguchería La Esquina Delivery", phone: "3816376896" },
            { name: "Parador 341", phone: "3813002335" },
            { name: "Los Acacios Resto Bar", phone: "3812144158" },
            { name: "El Patio de Gómez Comidas", phone: "3816397419" },
            { name: "Pastas Artesanales Rosita", phone: "3815500068" },
            { name: "Dulce Antojo", description: "Tortas, tartas, desayunos y más", phone: "3815500068" },
            { name: "Tortillas a la Parrilla", contactName: "Gisella", phone: "3815406736" },
            { name: "La Pedrera de Raco", phone: "3815179486" },
            { name: "Stella Maris Alimentos", phone: "3812225206" },
            { name: "Carnicería Santi", location: "El Siambón Km 27" },
            { name: "Yanay Bar-Cafetería", location: "Raco Km 24" },
            { name: "Almacén Alderete", location: "Raco Km 18" },
            { name: "Almacén Don Goyo", location: "El Siambón Km 27" },
            { name: "Almacén Chocobar", location: "Raco Km 23" },
            { name: "Despensa Rosita", location: "Raco Km 23" },
            { name: "Lo de Marisa", location: "Raco Km 24" },
            { name: "Almacén Valverde", location: "Raco Km 22" },
            { name: "Almacén Avellaneda", location: "Raco Km 18" },
            { name: "Kiosko Santa Rita", location: "El Siambón Km 29" },
            { name: "Almacén Lo de Titi", location: "El Siambón Km 26" },
            { name: "Almacén y Carnicería Los Sirios", location: "Raco Km 23" },
            { name: "Kiosco El Cruce", location: "Raco Km 16" },
            { name: "Bar Movil", location: "Raco Km 17" },
            { name: "Almacén Raco", location: "Raco Km 22" },
            { name: "Panadería", location: "Raco Km 23" },
            { name: "Almacén Monica", location: "El Siambón Km 27" },
            { name: "Almacén La Morenita", location: "Ruta 340 Barrio Nueva Esperanza" },
            { name: "Almacén Dina", location: "El Siambón Km 30" },
            { name: "Restaurante Latitud Siambón", location: "El Siambón Km 27" },
            { name: "Almacén Don Felix", location: "San Jose de Raco Km 23,5" },
            { name: "Estación de Servicio Atahualpa Yupanki", location: "Raco Km 24" },
            { name: "Kiosko Lopez", location: "Raco Km 16" }
        ]
    },
    {
        category: "Hospedajes",
        icon: Home,
        color: "bg-blue-100 text-blue-600",
        items: [
            { name: "Willkay Glamping", location: "Km 22, Ruta 341, calle La Pobrecita", phone: "3813485491" },
            { name: "Camping Río Grande", contactName: "Noemí del Valle Díaz", phone: "3815789659" },
            { name: "Cabañas Colores de la Tierra", contactName: "Claudia", phone: "3814446136" },
            { name: "Cabañas Dos Teros", phone: "3816903185" },
            { name: "Alquiler Temporario de Casas", contactName: "Marina de Heredia", phone: "3814562666" },
            { name: "La Pedrera de Raco", phone: "3815179486" },
            { name: "Hotel Del Valle", location: "Raco Km 24 Valle Hermoso" }
        ]
    },
    {
        category: "Oficios y Mantenimiento",
        icon: Hammer,
        color: "bg-gray-100 text-gray-700",
        items: [
            { name: "Bicicleteria: cambio de piñones, caja pedalera, frentos...", phone: "3812453025" },
            { name: "Servicio de Poda de Árboles y Leña", contactName: "Lorenzo Herrera", phone: "3814143368" },
            { name: "Electricista, Maestro Mayor de Obras, Plomero y Herrero", contactName: "José Bazán", phone: "3812064101" },
            { name: "Mecánica del Automotor", contactName: "Nicolás Castillo", phone: "3815100838" },
            { name: "Chófer y Lavado de Vehículos", contactName: "Lautaro Valverde", phone: "3814697328" },
            { name: "Trabajos de Pintura, Plomería, Gas y Electricidad", contactName: "Juan Carlos Córdoba", phone: "3814888722" },
            { name: "Asesoría de Seguros y Gestoría del Automotor", contactName: "Karina Escobar Gálvez", phone: "3814488272" },
            { name: "Trabajo de Albañilería y Jardinería", contactName: "Héctor Orlando Cruz", phone: "3815697856" },
            { name: "Trabajos de Albañilería y Mantenimiento de Jardines", contactName: "Jorge Delgado", phone: "3812452997" },
            { name: "Trabajos de Albañilería y Jardinería", phone: "3812453025" },
            { name: "Lavado y Aspirado de Autos, Camionetas y Motos", phone: "3812093935" },
            { name: "Jardinería", phone: "3815706162" }
        ]
    },
    {
        category: "Artesanía y Regalería",
        icon: ShoppingBag,
        color: "bg-pink-100 text-pink-600",
        items: [
            { name: "Deco en Raco", contactName: "Mónica Denegri", phone: "3816819760" },
            { name: "Karsus Artesanías Raqueñas", contactName: "Susana Paz Posse", phone: "3814570580" },
            { name: "Agendas Personalizadas y Tarjetas Nuevas Raíces", contactName: "Cristian Avila", phone: "3816592755" },
            { name: "Venta y Talleres de Artesanías en Hilos de Algodón", contactName: "Patricia", phone: "3815242223" },
            { name: "Venta de Ornamentación, Cotillón y Arreglos Florales", contactName: "Alicia", phone: "3812064101" },
            { name: "Artesanías Raqueñas", contactName: "Mónica Herrera", phone: "3813441840" },
            { name: "El Castorcito de Cucu", location: "Raco Km 18 detrás de la Escuela 107" }
        ]
    },
    {
        category: "Servicio de Limpieza",
        icon: Sparkles,
        color: "bg-teal-100 text-teal-600",
        items: [
            { name: "Liliana Romano", phone: "3816592940" },
            { name: "Fernanda Olea", phone: "3813459984" },
            { name: "Joana Arce", phone: "3816409061" },
            { name: "Elsa Gabry", phone: "3813355952" },
            { name: "Mónica Herrera", phone: "3813441840" },
            { name: "Noelia Cornejo", phone: "3815589934" },
            { name: "Limpieza de Frente de Viviendas y Alambrados", contactName: "Goyito Vargas", phone: "3815697727" },
            { name: "Claudia Lencina", phone: "3816593047" },
            { name: "Limpieza de Vivienda y Administrativa Contable", contactName: "Delgado Rosa Patricia", phone: "3814785860" },
            { name: "Cristina Arce", phone: "3816639580" },
            { name: "Stella Maris Arce", phone: "3812225206" }
        ]
    },
    {
        category: "Otros Servicios",
        icon: MoreHorizontal,
        color: "bg-purple-100 text-purple-600",
        items: [
            { name: "Tecno Raco", description: "Art. Tecnológicos", location: "Raco Km 24" },
            { name: "Pilchas Gauchas", location: "Raco Km 24 sobre ruta" },
            { name: "Repuestos de Moto", location: "Raco Km 24 sobre ruta" },
            { name: "Pago Facil", location: "Raco Km 24 sobre ruta" },
            { name: "Salón de Belleza Azu", location: "El Siambón Km 26" },
            { name: "La Ropería", location: "Raco Km 23 sobre ruta" },
            { name: "Peluquería Analia", location: "Raco Km 23 frente a la Comuna" },
            { name: "Cumbres de Raco", description: "Venta de Ladrillos, chapas, áridos, etc.", location: "Raco Km 18" }
        ]
    }
];

export default function ServicesSection() {
    const [openCategory, setOpenCategory] = useState<string | null>(null); // Gastronomía abierta por defecto
    const [searchTerm, setSearchTerm] = useState("");

    const toggleCategory = (category: string) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    // Filtrado simple por búsqueda
    const filteredData = DATA_SERVICIOS.map(cat => ({
        ...cat,
        items: cat.items.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.contactName && item.contactName.toLowerCase().includes(searchTerm.toLowerCase()))
        )
    })).filter(cat => cat.items.length > 0);

    return (
        <section id="catalogo" className="container mx-auto px-4 mb-24 scroll-mt-24">

            {/* HEADER + BUSCADOR */}
            <div className="text-center mb-10">
                <span className="text-naranja font-bold tracking-widest text-xs uppercase block mb-2">
                    Guía de Servicios
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Comercios y <span className="text-primary">Oficios</span>
                </h2>

                <div className="relative max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="Buscar por nombre (ej: 'Pizza', 'Plomero')..."
                        className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                </div>
            </div>

            {/* LISTA DE CATEGORÍAS (ACORDEÓN) */}
            <div className="flex flex-col gap-4 max-w-3xl mx-auto">
                {filteredData.map((cat) => {
                    const Icon = cat.icon;
                    const isOpen = openCategory === cat.category || searchTerm.length > 0; // Si busca, abre todo

                    return (
                        <motion.div
                            key={cat.category}
                            initial={false}
                            className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => toggleCategory(cat.category)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-2xl ${cat.color}`}>
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800">{cat.category}</h3>
                                        <p className="text-xs text-gray-400 font-medium">{cat.items.length} opciones</p>
                                    </div>
                                </div>
                                <ChevronDown
                                    className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-5 pb-5 pt-0 grid grid-cols-1 gap-3">
                                            <div className="h-px bg-gray-100 mb-2 mx-2" /> {/* Separador */}

                                            {cat.items.map((item, idx) => (
                                                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                                    <div>
                                                        <h4 className="font-bold text-gray-800">{item.name}</h4>
                                                        {item.description && <p className="text-xs text-gray-500 italic">{item.description}</p>}
                                                        {item.contactName && <p className="text-xs text-gray-400">Contacto: {item.contactName}</p>}
                                                        {item.location && (
                                                            <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                                                                <MapPin size={12} className="shrink-0" /> {item.location}
                                                            </p>
                                                        )}
                                                    </div>

                                                    {item.phone && (
                                                        <a
                                                            href={`https://wa.me/${item.phone.replace(/[^0-9]/g, '')}`}
                                                            target="_blank"
                                                            className="shrink-0 inline-flex items-center justify-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-xl text-xs font-bold hover:bg-green-100 transition-colors"
                                                        >
                                                            <Phone size={14} />
                                                            Contactar
                                                        </a>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}

                {filteredData.length === 0 && (
                    <div className="text-center py-10 text-gray-400">
                        No encontramos servicios con ese nombre.
                    </div>
                )}
            </div>

        </section>
    );
}