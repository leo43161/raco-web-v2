"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft, Trash2, Bus, Phone, ShieldAlert,
  Flame, AlertTriangle, Leaf, HeartPulse,
  Clock, MapPin, Info, CheckCircle2, Siren
} from "lucide-react";
import Link from "next/link";
import {
  DATA_CAPS,
  DATA_RESIDUOS_SECOS,
  DATA_RESIDUOS_HUMEDOS,
  NOTA_RESIDUOS_HUMEDOS,
  DATA_NORMATIVAS,
  TELEFONOS,
  NOTA_RESIDUOS,
  DATA_AMBULANCIA
} from "@/data/guia";

export default function GuiaVecino() {
  return (
    <main className="bg-background min-h-screen pb-20 font-sans selection:bg-naranja-light selection:text-white">

      {/* --- HEADER --- */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
            <ArrowLeft size={20} />
            Volver
          </Link>
          <h1 className="text-gray-800 font-black text-sm uppercase tracking-tighter text-right">Guía del Vecino y Veraneante</h1>
        </div>
      </header>

      {/* --- HERO DE SECCIÓN --- */}
      <section className="bg-primary py-12 px-6 text-center text-white rounded-b-[3rem] shadow-xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Información Oficial</h2>
          <p className="text-green-100 max-w-2xl mx-auto text-lg">
            Todo lo que necesitás saber para convivir y disfrutar en la Comuna de Raco.
          </p>
        </motion.div>
      </section>


      <div className="container mx-auto px-4 mt-5 space-y-6">
        <div className="bg-red-600 text-white p-4 rounded-2xl flex items-center justify-center shadow-lg">
          <h2 className="font-bold text-sm md:text-base uppercase tracking-tight">
            ESTIMADO VECINO, COMUNICAMOS QUE ES
            OBLIGATORIO SEPARAR LA BASURA (RES.N°004)
          </h2>
        </div>

        {/* --- RECOLECCIÓN DE RESIDUOS (ACORDEÓN ESTILO FICHA) --- */}
        <section className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100">
          <div id="residuos" className="bg-zinc-900 p-6 text-white">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-2">
              <Trash2 size={32} />
              <h3 className="text-xl md:text-3xl font-black italic uppercase text-center">Recolección de Residuos Humedos</h3>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <p className="text-gray-600 mb-8 font-bold">
              {NOTA_RESIDUOS_HUMEDOS}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DATA_RESIDUOS_HUMEDOS.map((item, idx) => (
                <div key={idx} className="bg-background p-5 rounded-2xl border-2 border-dashed border-naranja/30 text-center">
                  <span className="block text-naranja font-black text-xl mb-1 uppercase italic">{item.dia}</span>
                  <p className="text-lg font-bold text-gray-600 leading-snug">{item.zona}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-zinc-100 rounded-2xl border border-zinc-100 text-zinc-800 mt-4">
              <Info />
              <p className="text-lg font-bold italic">
                CANASTO NEGRO RESIDUOS HUMEDOS
              </p>
              <ul className="flex flex-col md:flex-row gap-4 w-full justify-center">
                <li className="flex gap-2 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-950/30 shrink-0" />
                  RESTOS DE COMIDA</li>
                <li className="flex gap-2 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-950/30 shrink-0" />
                  ENVOLTORIOS HUMEDOS</li>
                <li className="flex gap-2 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-950/30 shrink-0" />
                  PAÑALES</li>
                <li className="flex gap-2 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-950/30 shrink-0" />
                  INSUMOS SANITARIOS</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-secondary p-6 text-white">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-2">
              <Trash2 size={32} />
              <h3 className="text-xl md:text-3xl font-black italic uppercase text-center">Recolección de Residuos Secos</h3>
            </div>
            <p className="text-orange-100 font-medium text-center md:text-left md:ml-12">Cronograma detallado de Residuos Secos</p>
          </div>

          <div className="p-6 md:p-10">
            <p className="text-gray-600 mb-8 font-bold">
              {NOTA_RESIDUOS}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DATA_RESIDUOS_SECOS.map((item, idx) => (
                <div key={idx} className="bg-background p-5 rounded-2xl border-2 border-dashed border-naranja/30 text-center">
                  <span className="block text-naranja font-black text-xl mb-1 uppercase italic">{item.dia}</span>
                  <p className="text-xs font-bold text-gray-600 leading-snug">{item.zona}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-green-100 rounded-2xl border border-green-100 text-green-800 mt-4">
              <Info />
              <p className="text-lg font-bold italic">
                CANASTO NEGRO RESIDUOS SECOS
              </p>
              <ul className="flex flex-col md:flex-row gap-4 w-full justify-center">
                <li className="flex gap-2 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/30 shrink-0" />
                  PAPEL/CARTÓN</li>
                <li className="flex gap-2 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/30 shrink-0" />
                  PLÁSTICO</li>
                <li className="flex gap-2 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/30 shrink-0" />
                  METAL</li>
                <li className="flex gap-2 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/30 shrink-0" />
                  VIDRIO</li>
              </ul>
            </div>

          </div>
        </section>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl border border-green-100">
            <CheckCircle2 className="text-primary" />
            <p className="text-sm font-bold text-gray-700">Mantener frentes y cunetas limpias es obligación del vecino.</p>
          </div>
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100 text-blue-800">
            <Info />
            <p className="text-sm font-bold italic">Chatarra/Escombros: Pedir retiro al WhatsApp Comunal.</p>
          </div>
        </div>

        {/* --- SALUD Y EMERGENCIAS (TARJETAS GRANDES) --- */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 px-2 mb-4">
            <Siren className="text-rojo" size={28} />
            <h3 className="text-xl font-black text-gray-800 italic uppercase">Salud y Emergencias</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DATA_CAPS.map((caps, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-md border-t-4 border-rojo">
                <h4 className="font-black text-rojo text-xl mb-2 italic uppercase">{caps.nombre}</h4>
                <p className="text-xs font-bold text-gray-400 mb-4 flex items-center gap-1">
                  <MapPin size={14} /> {caps.ubicacion}
                </p>
                <ul className="space-y-2">
                  {caps.horarios.map((h, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rojo/30 mt-1.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-red-600 text-white p-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg">
            <HeartPulse size={24} className="animate-pulse" />
            <p className="font-bold text-sm md:text-base uppercase tracking-tight">{DATA_AMBULANCIA}</p>
          </div>
        </section>

        {/* --- NORMAS Y CONVIVENCIA (TARJETAS DETALLADAS) --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DATA_NORMATIVAS.map((norma) => (
            <div key={norma.id} id={norma.id} className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col">
              <h3 className="text-xl font-black text-gray-800 mb-4 italic uppercase flex items-center gap-3">
                {norma.id === 'transito' && <Bus className="text-primary" />}
                {norma.id === 'caballos' && <Info className="text-naranja" />}
                {norma.id === 'plogging' && <Leaf className="text-secondary" />}
                {norma.id === 'estafas' && <AlertTriangle className="text-rojo" />}
                {norma.titulo}
              </h3>

              {norma.bajada && <p className="text-primary font-bold text-sm mb-4 italic">{norma.bajada}</p>}

              <div className="space-y-4 mb-6">
                {norma.contenido.map((p, i) => (
                  <p key={i} className="text-gray-600 text-sm leading-relaxed">{p}</p>
                ))}
              </div>

              {norma.items && (
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {norma.items.map((it, i) => (
                    <div key={i} className="bg-background p-2 rounded-xl text-center border border-gray-100">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{it.label}</span>
                      <span className="block text-xs font-black text-primary uppercase italic">{it.valor}</span>
                    </div>
                  ))}
                </div>
              )}

              {norma.destacado && (
                <div className="mt-auto bg-gray-900 text-white p-4 rounded-2xl text-xs font-bold text-center italic tracking-wide">
                  {norma.destacado}
                </div>
              )}
            </div>
          ))}
        </section>

      </div>

      {/* --- FOOTER CONTACTO --- */}
      <footer className="mt-20 py-12 bg-white border-t border-gray-100 text-center">
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Comuna de Raco - Gestión Oficial</p>
        <div className="flex justify-center gap-4">
          <a href={`tel:${TELEFONOS.comisaria}`} className="p-3 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors">
            <ShieldAlert size={24} />
          </a>
          <a href={`tel:${TELEFONOS.bomberos}`} className="p-3 bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition-colors">
            <Flame size={24} />
          </a>
        </div>
      </footer>

    </main>
  );
}