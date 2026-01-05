"use client";

import { motion } from "framer-motion";
import {
    Trash2,
    Recycle,
    Shovel,
    Home,
    AlertTriangle,
    CheckCircle2,
    Clock,
    ArrowLeft,
    Phone
} from "lucide-react";
import Link from "next/link";

export default function Veraneantes() {
    return (
        <main className="bg-background min-h-screen pb-20 font-sans selection:bg-naranja-light selection:text-white">
            {/* --- HEADER SIMPLE CON VOLVER --- */}
            <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-bold text-sm">
                        <ArrowLeft size={18} />
                        Volver al Inicio
                    </Link>
                    <span className="text-primary font-bold tracking-widest uppercase text-xs">Comuna de Raco</span>
                </div>
            </header>

            {/* --- HERO: TÍTULO AMIGABLE --- */}
            <section className="container mx-auto px-6 py-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-wider mb-4">
                        Normas de Convivencia
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Guía del <span className="text-naranja">Veraneante</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Para que todos disfrutemos de Raco, necesitamos de tu colaboración.
                        Estas son las pautas obligatorias para el mantenimiento de tu propiedad y el manejo de residuos.
                    </p>
                </motion.div>
            </section>

            {/* --- SECCIÓN 1: RESIDUOS (CRÍTICO) --- */}
            <section className="container mx-auto px-6 mb-12">
                <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">

                    <div className="bg-primary text-white py-7 px-8 text-center relative overflow-hidden flex items-center gap-5">
                        <Trash2 size={48} className="text-green-200" />
                        <div className="text-left">
                            <h2 className="text-3xl font-bold">Recolección de Residuos</h2>
                            <p className="text-green-100 text-lg">Cronograma oficial Temporada 2026</p>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        {/* DÍAS Y HORARIOS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-3xl border border-green-100">
                                <Clock size={32} className="text-primary mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Días de Recolección</h3>
                                <p className="text-gray-600 font-medium">Lunes • Miércoles • Viernes</p>
                                <div className="mt-4 px-4 py-1 bg-white rounded-full text-sm font-bold text-primary shadow-sm">
                                    Horario: 07:00 AM a 09:00 AM
                                </div>
                            </div>

                            <div className="flex flex-col items-center text-center p-6 bg-orange-50 rounded-3xl border border-orange-100">
                                <Recycle size={32} className="text-naranja mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Separación Obligatoria</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Es obligatorio separar tus residuos en dos categorías para facilitar el reciclaje.
                                </p>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-500">Húmedos</span>
                                    <span className="px-3 py-1 bg-naranja text-white rounded-lg text-xs font-bold shadow-sm">Secos (Reciclables)</span>
                                </div>
                            </div>
                        </div>

                        {/* DETALLE DE SEPARACIÓN */}
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <CheckCircle2 className="text-primary" /> ¿Cómo debo separarlos?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border-l-4 border-naranja pl-4 py-2 bg-gray-50 rounded-r-xl">
                                <h4 className="font-bold text-naranja">RESIDUOS SECOS</h4>
                                <p className="text-sm text-gray-600 mt-1">Papel, cartón, plástico, vidrio, latas. <br /><strong>Deben estar limpios y secos.</strong></p>
                            </div>
                            <div className="border-l-4 border-gray-400 pl-4 py-2 bg-gray-50 rounded-r-xl">
                                <h4 className="font-bold text-gray-600">RESIDUOS HÚMEDOS</h4>
                                <p className="text-sm text-gray-600 mt-1">Restos de comida, yerba, cáscaras, papeles sucios.</p>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-xl flex items-start gap-3">
                            <AlertTriangle className="text-yellow-600 shrink-0 mt-1" size={20} />
                            <p className="text-sm text-yellow-800">
                                <strong>Importante:</strong> Los residuos secos se recolectan los mismos días, pero deben estar identificados o separados del cesto de húmedos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECCIÓN 2: MANTENIMIENTO DEL TERRENO --- */}
            <section className="container mx-auto px-6 mb-20">
                <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                    Obligaciones del Propietario
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* FRENTE DEL TERRENO */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-4xl shadow-lg border border-gray-100"
                    >
                        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                            <Home size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Mantenimiento de Frente</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Es responsabilidad del propietario mantener el frente de su terreno <strong>desmalezado, limpio y libre de escombros</strong>. Esto ayuda a la seguridad visual y previene la proliferación de alimañas.
                        </p>
                    </motion.div>

                    {/* CUNETAS Y ACCESO */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-4xl shadow-lg border border-gray-100"
                    >
                        <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center text-primary mb-6">
                            <Shovel size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Cunetas y Acceso Vehicular</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-gray-600">
                                <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
                                <span><strong>Limpieza:</strong> Las cunetas deben estar libres de hojas, basura y obstrucciones para permitir el paso del agua de lluvia.</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-600">
                                <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
                                <span><strong>Acceso Vehicular:</strong> Es obligatorio instalar un <strong>caño o tubo de desagüe</strong> en el acceso vehicular (sobre la cuneta) para no bloquear el flujo del agua.</span>
                            </li>
                        </ul>
                    </motion.div>

                </div>
            </section>

            {/* --- FOOTER DE CONTACTO RÁPIDO --- */}
            <section className="bg-gray-900 text-white py-12 rounded-t-[3rem] mx-2">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-2xl font-bold mb-4">¿Dudas sobre normativas?</h3>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                        Evitá multas y ayudanos a mantener Raco ordenado. Comunicate con la Comuna para asesoramiento técnico.
                    </p>
                    <a
                        href="https://wa.me/5493816908950"
                        className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-secondary transition-colors"
                    >
                        <Phone size={18} /> Contactar a la Comuna
                    </a>
                </div>
            </section>

        </main>
    );
}