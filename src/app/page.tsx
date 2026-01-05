"use client";

import { motion } from "framer-motion";
import { 
  Calendar, 
  Phone, 
  Trash2, 
  Bus, 
  Sun,
  Info,
  Shovel,
  AlertTriangle,
  CheckCircle2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ActivitiesSection from "@/components/ActivitiesSection"; // <--- Importación nueva

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground font-sans selection:bg-naranja-light selection:text-white pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden shadow-2xl mx-0 mt-0 pb-14 rounded-b-[3rem] border-b-8 border-naranja">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/home/hero.jpg"
            alt="Paisaje de Raco"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent z-10" />
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

            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg leading-tight">
              Bienvenidos a<br/><span className="text-secondary font-black italic">Raco</span>
            </h1>
            
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100 font-medium mb-10 text-shadow-sm">
              Naturaleza, cultura y tranquilidad. Tu guía oficial para disfrutar de los cerros tucumanos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="#agenda" 
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-green-800 text-white rounded-2xl font-bold transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 border-b-4 border-green-900"
              >
                <Calendar size={22} />
                Agenda 2026
              </Link>
              <Link 
                href="/veraneantes" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-primary hover:bg-gray-50 rounded-2xl font-bold transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 border-b-4 border-gray-300"
              >
                <Info size={22} />
                Guía del Veraneante
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECCIÓN URGENTE: Notas adhesivas --- */}
      <section className="container mx-auto px-4 -mt-16 relative z-30 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-3xl shadow-xl border-l-8 border-naranja hover:shadow-2xl transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-orange-100 p-3 rounded-2xl text-naranja">
                <Trash2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 leading-tight">Residuos<br/>Domiciliarios</h3>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-sm font-medium text-gray-600 space-y-3">
              <p className="flex justify-between font-bold text-gray-800 border-b border-gray-200 pb-2">
                <span>Lun - Mié - Vie</span>
                <span>07:00 - 09:00</span>
              </p>
              <div className="space-y-1">
                <p className="text-naranja font-bold text-xs uppercase flex items-center gap-2">
                  <CheckCircle2 size={14}/> Separá: Secos y Húmedos
                </p>
                <p className="text-gray-500 text-xs">Usá los cestos correspondientes.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-3xl shadow-xl border-l-8 border-primary hover:shadow-2xl transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded-2xl text-primary">
                <Shovel size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 leading-tight">Frentes y<br/>Cunetas</h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-2 mb-2 pl-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                <span>Mantener frente desmalezado.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle size={16} className="text-naranja mt-0.5 shrink-0" />
                <span><strong>Obligatorio:</strong> Tubo de desagüe en acceso vehicular.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-3xl shadow-xl border-l-8 border-rojo hover:shadow-2xl transition-all flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-red-50 p-3 rounded-2xl text-rojo">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 leading-tight">Emergencias<br/>y Guardia</h3>
            </div>
            <p className="text-gray-500 text-sm mb-4">CAPS Raco y Comuna Rural.<br/>Atención las 24hs.</p>
            <a href="tel:3816908950" className="mt-auto w-full py-3 rounded-xl bg-rojo text-white font-bold text-sm hover:bg-red-700 transition-colors flex justify-center items-center gap-2 shadow-md">
              Llamar Ahora
            </a>
          </motion.div>

        </div>
      </section>

      {/* --- SECCIÓN AGENDA (COMPONENTE NUEVO) --- */}
      {/* <ActivitiesSection /> */}

      {/* <section className="container mx-auto px-6 text-center mb-10">
        <div className="bg-primary rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-naranja opacity-20 rounded-full -ml-10 -mb-10 blur-2xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Tenés dudas?</h2>
            <p className="text-green-100 mb-8 max-w-xl mx-auto text-lg">
              Escribinos para consultar sobre el estado de las rutas, horarios de colectivo o trámites comunales.
            </p>
            <a 
              href="https://wa.me/5493816908950" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              <Phone size={20} fill="currentColor" className="text-primary" />
              Chat Oficial Comuna
            </a>
          </div>
        </div>
      </section> */}

    </main>
  );
}