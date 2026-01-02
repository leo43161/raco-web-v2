"use client";

import { motion } from "framer-motion";
import { Mountain, BookOpen, Phone, Instagram, Facebook, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-green-100 dark:bg-zinc-950 dark:text-zinc-50">
      
      {/* Fondo con sutil gradiente institucional */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-[#5a8b5e]/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-[#e67e22]/5 blur-[120px]" />
      </div>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-6 py-20">
        
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 text-xs font-medium dark:border-zinc-800 dark:bg-zinc-900/50"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5a8b5e]"></span>
          </span>
          PROYECTO EN DESARROLLO · FASE 1: VERANO 2026
        </motion.div>

        {/* Hero Section */}
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl font-extrabold tracking-tight sm:text-8xl"
          >
            Raco <span className="text-[#5a8b5e]">Digital</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-8 max-w-xl text-lg text-zinc-600 dark:text-zinc-400"
          >
            Estamos preparando la nueva plataforma oficial. Todo lo que necesitás para vivir Raco este verano, en un solo lugar.
          </motion.p>
        </div>

        {/* Las dos tarjetas solicitadas por el cliente */}
        <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          
          {/* Tarjeta 1: Excursiones */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-[#5a8b5e] dark:bg-green-900/20">
              <Mountain size={24} />
            </div>
            <h3 className="text-2xl font-bold">Excursiones</h3>
            <p className="mt-3 text-zinc-500 dark:text-zinc-400">
              Agenda completa de trekking, cabalgatas y actividades de montaña para esta temporada.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#5a8b5e]">
              PRÓXIMAMENTE <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </div>
          </motion.div>

          {/* Tarjeta 2: Guía de Veraniegos */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#e67e22] dark:bg-orange-900/20">
              <BookOpen size={24} />
            </div>
            <h3 className="text-2xl font-bold">Guía de Veraniegos</h3>
            <p className="mt-3 text-zinc-500 dark:text-zinc-400">
              Información útil: horarios de colectivos, recolección de residuos y servicios esenciales.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#e67e22]">
              EN PREPARACIÓN <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </div>
          </motion.div>

        </div>

        {/* Footer simple */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-col items-center gap-6"
        >
          <div className="flex gap-6 text-zinc-400">
            <a href="https://instagram.com/comunaderaco" className="hover:text-[#5a8b5e] transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-[#5a8b5e] transition-colors"><Facebook size={20} /></a>
            <a href="tel:+5493816908950" className="hover:text-[#5a8b5e] transition-colors"><Phone size={20} /></a>
          </div>
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
            Comuna de Raco · 2026
          </p>
        </motion.footer>

      </main>
    </div>
  );
}