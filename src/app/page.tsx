"use client";

import { motion } from "framer-motion";
import { Mountain, Calendar, BookOpen, Phone, Instagram, Facebook } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 selection:bg-green-100 dark:bg-zinc-950 dark:text-zinc-50">
      
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-green-500/5 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-orange-500/5 blur-[120px]" />
      </div>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-6 py-20">
        
        {/* Badge de Estado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700 dark:border-green-900/30 dark:bg-green-900/20 dark:text-green-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Nueva Plataforma Digital en Desarrollo
        </motion.div>

        {/* Hero Section */}
        <section className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold tracking-tight sm:text-7xl"
          >
            Raco <span className="text-green-600">2026</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400"
          >
            Estamos renovando el portal oficial de la Comuna. Una herramienta diseñada para potenciar el turismo y facilitar la convivencia de todos nuestros vecinos.
          </motion.p>
        </section>

        {/* Features - Grid de Avances */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {/* Card 1 */}
          <div className="rounded-2xl border border-zinc-200 bg-white/50 p-8 backdrop-blur-sm transition-all hover:border-green-200 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-green-900/30">
            <Calendar className="mb-4 h-8 w-8 text-green-600" />
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Agenda Verano</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Cronograma actualizado de ferias, talleres y eventos culturales de la temporada.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-zinc-200 bg-white/50 p-8 backdrop-blur-sm transition-all hover:border-green-200 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-green-900/30">
            <Mountain className="mb-4 h-8 w-8 text-green-600" />
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Turismo Activo</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Catálogo de senderos, trekking y cabalgatas con fichas técnicas y prestadores.
            </p>
          </div>

          {/* Card 3 - ACTUALIZADA */}
          <div className="rounded-2xl border border-zinc-200 bg-white/50 p-8 backdrop-blur-sm transition-all hover:border-green-200 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-green-900/30">
            <BookOpen className="mb-4 h-8 w-8 text-green-600" />
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Guía de Veraniegos</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Información logística esencial: recolección de residuos, horarios de colectivos y servicios de mantenimiento.
            </p>
          </div>
        </motion.div>

        {/* Footer / Redes */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 flex flex-col items-center gap-8 border-t border-zinc-200 pt-10 dark:border-zinc-800"
        >
          <div className="flex gap-8 text-zinc-400">
            <a href="https://instagram.com/comunaderaco" target="_blank" className="transition-all hover:scale-110 hover:text-green-600"><Instagram size={22} /></a>
            <a href="#" className="transition-all hover:scale-110 hover:text-green-600"><Facebook size={22} /></a>
            <a href="tel:+5493816908950" className="transition-all hover:scale-110 hover:text-green-600"><Phone size={22} /></a>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-zinc-500">
              © 2026 Comuna de Raco.
            </p>
            <p className="text-xs text-zinc-400 mt-1">
              Desarrollado por Leonardo Palavecino
            </p>
          </div>
        </motion.footer>

      </main>
    </div>
  );
}