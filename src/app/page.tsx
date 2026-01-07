"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Trash2,
  Bus,
  Sun,
  Info,
  Phone,
  Flame,
  ShieldAlert,
  MessageCircle,
  AlertTriangle,
  Leaf,
  Store,
  ArrowRight // Importamos la flecha para los botones
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ActivitiesSection from "@/components/ActivitiesSection";
import { TELEFONOS } from "@/data/guia";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground font-sans selection:bg-naranja-light selection:text-white pb-20">

      {/* --- 1. HERO INSTITUCIONAL --- */}
      <section className="relative h-min-[85vh] flex items-center justify-center overflow-hidden shadow-2xl mx-0 mt-0 pb-14 rounded-b-[3rem] border-b-8 border-naranja">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/home/hero.jpg"
            alt="Paisaje de Raco"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/50 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10" />
        </div>

        <div className="container relative z-20 px-6 text-center text-white mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-naranja text-white px-6 py-2 rounded-full font-bold shadow-lg mb-6 transform -rotate-2 hover:rotate-0 transition-transform cursor-default border border-white/20">
              <Sun size={18} fill="currentColor" className="text-yellow-200" />
              TEMPORADA 2026
            </div>

            <div className="flex justify-center items-center">
              <Image
                src="/img/home/raco_isologo.png"
                alt="Paisaje de Raco"
                className="object-contain"
                priority
                height={300}
                width={300}
              />
            </div>

            {/* <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg leading-tight">
              Bienvenidos a la<br />
              <span className="text-secondary font-black italic">Comuna de Raco</span>
            </h1> */}

            {/* TEXTO CON MÁS ONDA Y GRANDE */}
            <p className="text-2xl md:text-3xl max-w-2xl mx-auto text-white font-medium italic mb-8 md:mb-12 text-shadow-md tracking-wide">
              "Naturaleza, cultura y tranquilidad"
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#agenda"
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-green-800 text-white rounded-2xl font-bold transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 border-b-4 border-green-900"
              >
                <Calendar size={20} />
                Actividades Verano 2026
              </Link>
              <Link
                href="/veraneantes"
                className="w-full sm:w-auto px-8 py-4 bg-white text-primary hover:bg-gray-50 rounded-2xl font-bold transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 border-b-4 border-gray-300"
              >
                <Info size={20} />
                Guía del Vecino y Veraneante
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. ZONA DE ACCIÓN (TABLERO DE SERVICIOS) --- */}
      <section className="container mx-auto px-4 mt-4 relative z-30 mb-20">

        {/* GRUPO 1: SERVICIOS DIARIOS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <Link href="/veraneantes#residuos" className="bg-white p-4 rounded-3xl shadow-lg border-b-4 border-naranja hover:scale-105 transition-all flex flex-col items-center text-center gap-2">
            <div className="bg-orange-100 p-3 rounded-full text-naranja">
              <Trash2 size={24} />
            </div>
            <span className="text-sm font-bold text-gray-700 leading-tight">Recolección<br />de Residuos</span>
          </Link>

          <Link href="/veraneantes#transito" className="bg-white p-4 rounded-3xl shadow-lg border-b-4 border-blue-400 hover:scale-105 transition-all flex flex-col items-center text-center gap-2">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
              <Bus size={24} />
            </div>
            <span className="text-sm font-bold text-gray-700 leading-tight">Horarios<br />Colectivo</span>
          </Link>

          <a href={`https://wa.me/${TELEFONOS.comuna}`} target="_blank" className="bg-white p-4 rounded-3xl shadow-lg border-b-4 border-green-500 hover:scale-105 transition-all flex flex-col items-center text-center gap-2">
            <div className="bg-green-100 p-3 rounded-full text-green-600">
              <MessageCircle size={24} />
            </div>
            <span className="text-sm font-bold text-gray-700 leading-tight">Contacto<br />Comuna</span>
          </a>

          <Link href="#catalogo" className="bg-white p-4 rounded-3xl shadow-lg border-b-4 border-purple-400 hover:scale-105 transition-all flex flex-col items-center text-center gap-2">
            <div className="bg-purple-100 p-3 rounded-full text-purple-600">
              <Store size={24} />
            </div>
            <span className="text-sm font-bold text-gray-700 leading-tight">Catálogo<br />Servicios</span>
          </Link>
        </div>

        {/* GRUPO 2: EMERGENCIAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <a href={`tel:${TELEFONOS.ambulancia}`} className="flex items-center gap-4 bg-red-50 p-4 rounded-2xl border border-red-100 hover:bg-red-100 transition-colors">
            <div className="bg-red-500 text-white p-3 rounded-xl shadow-md">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-bold text-red-700">Emergencias (CAPS)</h3>
              <p className="text-xs text-red-600 font-medium">Llamar al 107</p>
            </div>
          </a>

          <a href={`tel:${TELEFONOS.bomberos}`} className="flex items-center gap-4 bg-red-50 p-4 rounded-2xl border border-red-100 hover:bg-red-100 transition-colors">
            <div className="bg-red-500 text-white p-3 rounded-xl shadow-md">
              <Flame size={24} />
            </div>
            <div>
              <h3 className="font-bold text-red-700">Bomberos</h3>
              <p className="text-xs text-red-600 font-medium">Llamar Ahora</p>
            </div>
          </a>

          <div className="flex flex-col gap-2">
            <a href={`tel:${TELEFONOS.comisaria}`} className="flex items-center gap-4 bg-blue-50 p-4 rounded-2xl border border-blue-100 hover:bg-blue-100 transition-colors">
              <div className="bg-blue-600 text-white p-3 rounded-xl shadow-md">
                <ShieldAlert size={24} />
              </div>
              <div>
                <h3 className="font-bold text-blue-800">Comisaría Raco</h3>
                <p className="text-xs text-blue-600 font-medium">Llamar al Fijo</p>
              </div>
            </a>
          </div>
        </div>

        {/* GRUPO 3: CONCIENTIZACIÓN (Ahora "A prueba de tontos") */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <Link href="/veraneantes#estafas" className="group flex items-center justify-between bg-yellow-50 px-5 py-4 rounded-xl border border-yellow-200 text-yellow-900 hover:bg-yellow-100 transition-colors shadow-sm">
            <div className="flex items-center gap-3">
              <AlertTriangle size={24} className="text-yellow-600 shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold leading-tight">Evitá Estafas</span>
                <span className="text-xs opacity-80">Loteos irregulares</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-yellow-700 uppercase group-hover:translate-x-1 transition-transform">
              Leer más <ArrowRight size={14} />
            </div>
          </Link>

          <Link href="/veraneantes#plogging" className="group flex items-center justify-between bg-green-50 px-5 py-4 rounded-xl border border-green-200 text-green-900 hover:bg-green-100 transition-colors shadow-sm">
            <div className="flex items-center gap-3">
              <Leaf size={24} className="text-green-600 shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold leading-tight">Hacé Plogging</span>
                <span className="text-xs opacity-80">Raco Limpio</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-green-700 uppercase group-hover:translate-x-1 transition-transform">
              Ver info <ArrowRight size={14} />
            </div>
          </Link>

          <Link href="/veraneantes#caballos" className="group flex items-center justify-between bg-gray-50 px-5 py-4 rounded-xl border border-gray-200 text-gray-800 hover:bg-gray-100 transition-colors shadow-sm">
            <div className="flex items-center gap-3">
              <Info size={24} className="text-gray-500 shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold leading-tight">Caballos</span>
                <span className="text-xs opacity-80">Gestión animal</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-gray-600 uppercase group-hover:translate-x-1 transition-transform">
              Leer más <ArrowRight size={14} />
            </div>
          </Link>

        </div>

      </section>

      {/* --- 3. AGENDA (COMENTADA POR AHORA) --- */}
      {/* <ActivitiesSection />
      */}

    </main>
  );
}