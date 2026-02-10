"use client";

import { motion } from "framer-motion";
import TransporteSection from "@/components/TransporteSection";
import {
  ArrowLeft, Trash2, Bus, Phone, ShieldAlert,
  Flame, AlertTriangle, Leaf, HeartPulse,
  Clock, MapPin, Info, CheckCircle2, Siren, CreditCard
} from "lucide-react";
import Link from "next/link";
import {
  DATA_CAPS,
  DATA_RESIDUOS_SECOS,
  DATA_RESIDUOS_HUMEDOS, // Aunque lo importamos, voy a hardcodear el texto que pidió Marcos para Húmedos
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
        <div className="container mx-auto px-6 h-10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
            <ArrowLeft size={20} />
            Volver
          </Link>
          <h1 className="text-gray-800 font-black text-sm uppercase tracking-tighter text-right">Guía del Vecino y Veraneante</h1>
        </div>
      </header>

      {/* --- HERO DE SECCIÓN --- */}
      <section className="bg-primary py-5 px-6 text-center text-white shadow-xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl md:text-5xl font-black mb-2">Información Oficial</h2>
          <p className="text-green-100 max-w-2xl mx-auto text-lg">
            Todo lo que necesitás saber para convivir y disfrutar en la Comuna de Raco.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 mt-5 space-y-6">

        {/* Banner Obligatorio (Pedido: Mantenerlo) */}
        <div className="bg-red-600 text-white p-4 rounded-2xl flex items-center justify-center shadow-lg text-center">
          <h2 className="font-bold text-sm md:text-base uppercase tracking-tight">
            ESTIMADO VECINO, COMUNICAMOS QUE ES
            OBLIGATORIO SEPARAR LA BASURA (RES.N°004)
          </h2>
        </div>

        {/* --- RECOLECCIÓN DE RESIDUOS HÚMEDOS (Modificado según Marcos) --- */}
        <section className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100">
          <div id="residuos" className="bg-zinc-900 px-6 py-4 text-white text-center">
            <div className="flex flex-row md:flex-row items-center justify-center gap-4">
              <Trash2 size={32} />
              <h3 className="text-xl md:text-3xl font-black italic uppercase mb-0">Recolección de Residuos Húmedos</h3>
            </div>
          </div>
          <div className="p-6 md:p-10">
            {/* Placa Grande de Horario */}
            <div className="bg-background p-8 rounded-2xl border-2 border-dashed border-naranja/30 text-center mb-6">
              <span className="block text-naranja font-black text-2xl md:text-4xl mb-2 uppercase italic">
                Lunes - Miercoles - Viernes
              </span>
              <p className="text-xl md:text-2xl font-bold text-gray-700 leading-snug">
                Antes de las 07:00 AM
              </p>
            </div>

            {/* Advertencia Pedida */}
            <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500">
              <p className="text-red-800 font-bold text-center italic text-sm md:text-base">
                "Fuera de este horario te recomendamos no sacar tus residuos para evitar basurales y multas."
              </p>
            </div>
          </div>
        </section>

        {/* --- RECOLECCIÓN DE RESIDUOS SECOS --- */}
        <section className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-secondary p-6 text-white">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-2">
              <Trash2 size={32} />
              <h3 className="text-xl md:text-3xl font-black italic uppercase text-center">Recolección de Residuos Secos</h3>
            </div>
            <p className="text-orange-100 font-medium text-center md:text-left md:ml-12">
              Sacar los días correspondientes después de las 12:00 hs
            </p>
          </div>

          <div className="p-6 md:p-10">
            <p className="text-gray-600 mb-8 font-bold text-center md:text-left">
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

            <div className="mt-6 flex items-center justify-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100 text-blue-800">
              <Info />
              <p className="text-sm font-bold italic">Chatarra/Escombros: Pedir retiro al WhatsApp Comunal.</p>
            </div>
          </div>
        </section>

        {/* --- FRENTES Y CUNETAS (SECCIÓN GRANDE - Pedido Marcos) --- */}
        <section className="bg-white p-8 rounded-[2.5rem] shadow-xl border-l-8 border-primary">
          <div className="flex items-center gap-4 mb-6 flex-col md:flex-row">
            <div className="bg-green-100 p-3 rounded-2xl text-primary">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl text-center md:text-left font-black text-gray-800 italic uppercase">Limpieza de Frentes y Cunetas</h3>
          </div>

          <p className="text-lg text-gray-700 font-medium mb-6 leading-relaxed">
            Es obligación del propietario mantener las condiciones de higiene y seguridad de su frente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background p-6 rounded-3xl border border-gray-100">
              <h4 className="text-primary font-black uppercase italic mb-2">Propiedades Desmalezadas</h4>
              <p className="text-gray-600 text-sm">Los frentes deben estar libres de malezas altas para evitar la proliferación de alimañas y mantener la seguridad visual.</p>
            </div>
            <div className="bg-background p-6 rounded-3xl border border-gray-100">
              <h4 className="text-primary font-black uppercase italic mb-2">Circulación del Agua</h4>
              <p className="text-gray-600 text-sm">Las cunetas deben estar limpias, sin basura ni obstrucciones que impidan que circule el agua correctamente.</p>
            </div>
          </div>
        </section>

        {/* --- SALUD Y EMERGENCIAS --- */}
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
          <div className="bg-red-600 text-white p-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg text-center">
            <HeartPulse size={24} className="animate-pulse shrink-0" />
            <p className="font-bold text-sm md:text-base uppercase tracking-tight">
              {DATA_AMBULANCIA} - <a href="tel:107" className="underline decoration-white decoration-2 underline-offset-4 hover:text-red-200 transition-colors">LLAMANDO AL 107</a>
            </p>
          </div>
        </section>

        {/* --- LICENCIA DE MANEJO (Sección Nueva - Pedido Marcos) --- */}
        <section className="bg-white p-8 rounded-[2.5rem] shadow-xl border-l-8 border-blue-500">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-100 p-3 rounded-2xl text-blue-600">
              <CreditCard size={32} />
            </div>
            <h3 className="text-2xl font-black text-gray-800 italic uppercase">Licencia de Manejo</h3>
          </div>
          <p className="text-gray-600 font-medium mb-6">
            En la Comuna también ayudamos a que puedas gestionar tu licencia de manejo.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 p-5 bg-blue-50 rounded-2xl border border-blue-100 w-full md:w-fit">
            <div className="flex items-center gap-2 text-blue-800">
              <Phone size={20} />
              <span className="font-bold uppercase text-xs tracking-wider">Teléfono de Contacto:</span>
            </div>
            <a href="tel:3815285225" className="text-2xl font-black text-blue-600 tracking-widest hover:scale-105 transition-transform">
              381 528-5225
            </a>
          </div>
        </section>

        {/* --- NORMAS Y CONVIVENCIA --- */}
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
        <TransporteSection />
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