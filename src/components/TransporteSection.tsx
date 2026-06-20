"use client";
/* @/components/TransporteSection.tsx */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bus, MapPin, Clock, ArrowRight, CalendarDays, CreditCard, QrCode, Wallet, Banknote, Phone, MessageCircle } from "lucide-react";

// --- DATA PROVISTA POR EL USUARIO ---
const DATA_TRANSPORTE = [
  {
    id: "simoqueno",
    lineName: "El Simoqueño",
    route: "Raco - Siambón",
    platform: "Plataforma 13 (Terminal)",
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    schedules: [
      {
        days: "Lunes a Viernes",
        departures: [
          { time: "06:00", destination: "Garcia - Baudillo", direction: "Sale de Terminal" },
          { time: "05:45", origin: "Nogalito", direction: "Regreso de Vuelta" },
          { time: "09:30", destination: "Nogalito", direction: "Sale de Terminal" },
          { time: "06:30", origin: "Refinor", direction: "Regreso de Vuelta" },
          { time: "11:00", destination: "Caps Siambón", direction: "Sale de Terminal" },
          { time: "07:20", origin: "Garcia - Baudillo", direction: "Regreso de Vuelta" },
          { time: "12:25", destination: "Nogalito", direction: "Sale de Terminal" },
          { time: "09:00", origin: "Garcia - Baudillo", direction: "Regreso de Vuelta" },
          { time: "14:00", destination: "Garcia - Baudillo", direction: "Sale de Terminal" },
          { time: "12:00", origin: "Nogalito", direction: "Regreso de Vuelta" },
          { time: "17:00", destination: "Nogalito - Duraznillo", direction: "Sale de Terminal" },
          { time: "14:30", origin: "Nogalito", direction: "Regreso de Vuelta" },
          { time: "19:30", destination: "Garcia - Baudillo", direction: "Sale de Terminal" },
          { time: "17:00", origin: "Garcia - Baudillo", direction: "Regreso de Vuelta" },
          { time: "21:00", destination: "Caps Siambón", direction: "Sale de Terminal" },
          { time: "19:00", origin: "Nogalito - Duraznillo", direction: "Regreso de Vuelta" }
        ]
      },
      {
        days: "Sábados",
        departures: [
          { time: "07:00", destination: "Garcia - Baudillo", direction: "Sale de Terminal" },
          { time: "06:00", origin: "Nogalito", direction: "Regreso de Vuelta" },
          { time: "09:00", destination: "Garcia - Baudillo", direction: "Sale de Terminal" },
          { time: "09:00", origin: "Garcia - Baudillo", direction: "Regreso de Vuelta" },
          { time: "11:00", destination: "Nogalito - Duraznillo", direction: "Sale de Terminal" },
          { time: "11:00", origin: "Garcia - Baudillo", direction: "Regreso de Vuelta" },
          { time: "14:00", destination: "Garcia - Baudillo", direction: "Sale de Terminal" },
          { time: "14:00", origin: "Nogalito - Duraznillo", direction: "Regreso de Vuelta" },
          { time: "17:00", destination: "Nogalito - Duraznillo", direction: "Sale de Terminal" },
          { time: "17:00", origin: "Garcia - Baudillo", direction: "Regreso de Vuelta" },
          { time: "19:30", destination: "Garcia - Baudillo", direction: "Sale de Terminal" },
          { time: "19:00", origin: "Nogalito - Duraznillo", direction: "Regreso de Vuelta" },
          { time: "21:00", destination: "Caps Siambón", direction: "Sale de Terminal" }
        ]
      },
      {
        days: "Domingos",
        departures: [
          { time: "07:00", destination: "Garcia - Baudillo", direction: "Sale de Terminal" },
          { time: "07:00", origin: "Esc. de El Siambón", direction: "Regreso de Vuelta" },
          { time: "09:00", destination: "Garcia - Baudillo", direction: "Sale de Terminal" },
          { time: "09:00", origin: "Garcia - Baudillo", direction: "Regreso de Vuelta" },
          { time: "11:00", destination: "Nogalito - Duraznillo", direction: "Sale de Terminal" },
          { time: "11:00", origin: "Garcia - Baudillo", direction: "Regreso de Vuelta" },
          { time: "13:00", destination: "Caps Siambón", direction: "Sale de Terminal" },
          { time: "14:00", origin: "Nogalito - Duraznillo", direction: "Regreso de Vuelta" },
          { time: "17:00", destination: "Nogalito - Duraznillo", direction: "Sale de Terminal" },
          { time: "17:00", origin: "Garcia - Baudillo", direction: "Regreso de Vuelta" },
          { time: "19:30", destination: "Garcia - Baudillo", direction: "Sale de Terminal" },
          { time: "19:00", origin: "Nogalito - Duraznillo", direction: "Regreso de Vuelta" }
        ]
      }
    ]
  },
  {
    id: "linea118",
    lineName: "Línea 118",
    route: "San Javier - Portezuelo",
    company: "El Portezuelo SRL",
    color: "bg-green-600",
    lightColor: "bg-green-50",
    contacts: { phone: "4257361", whatsapp: "3816408267" },
    payments: {
      subtitle: "Ya podés pagar con todos los medios de pago tu viaje",
      methods: [
        { icon: "card", label: "Tarjetas bancarias", detail: "Visa o Mastercard" },
        { icon: "qr", label: "QR Virtual", detail: "Independencia" },
        { icon: "wallet", label: "Billeteras virtuales", detail: "" }
      ],
      note: "Continúa también la opción de pago con efectivo"
    },
    schedules: [
      {
        days: "Lunes a Viernes",
        validFrom: "09/03/26",
        trips: [
          { origin: "Portezuelo", time: "06:00", destination: "Terminal" },
          { origin: "Terminal", time: "12:45", destination: "Portezuelo" },
          { origin: "Portezuelo", time: "14:30", destination: "Terminal" },
          { origin: "Terminal", time: "16:15", destination: "Portezuelo" },
          { origin: "Portezuelo", time: "18:00", destination: "Terminal" },
          { origin: "Terminal", time: "20:00", destination: "Portezuelo" }
        ]
      },
      {
        days: "Sábados",
        validFrom: "02/03/26",
        trips: [
          { origin: "Portezuelo", time: "07:00", destination: "Terminal" },
          { origin: "Terminal", time: "12:00", destination: "Portezuelo" },
          { origin: "Portezuelo", time: "14:00", destination: "Terminal" },
          { origin: "Terminal", time: "16:00", destination: "Portezuelo" },
          { origin: "Portezuelo", time: "18:00", destination: "Terminal" }
        ]
      },
      {
        days: "Domingos y Feriados",
        validFrom: "02/03/26",
        trips: [
          { origin: "Terminal", time: "08:00", destination: "Portezuelo" },
          { origin: "Portezuelo", time: "10:00", destination: "Terminal" },
          { origin: "Terminal", time: "12:00", destination: "Portezuelo" },
          { origin: "Portezuelo", time: "14:00", destination: "Terminal" },
          { origin: "Terminal", time: "16:00", destination: "Portezuelo" },
          { origin: "Portezuelo", time: "18:00", destination: "Terminal" }
        ]
      }
    ]
  }
];

export default function TransporteSection() {
  const [activeLineIdx, setActiveLineIdx] = useState(0);
  const [activeDayIdx, setActiveDayIdx] = useState(0);

  const activeLine = DATA_TRANSPORTE[activeLineIdx];
  // Aseguramos que el índice del día no se rompa al cambiar de línea
  const currentSchedule = activeLine.schedules[activeDayIdx] || activeLine.schedules[0];
  // "validFrom" solo está presente en las líneas que lo informan (ej: 118)
  const validFrom = (currentSchedule as { validFrom?: string }).validFrom;

  // LOGICA DE FILTRADO (IDA vs VUELTA)
  let ida: any[] = [];
  let vuelta: any[] = [];

  if (activeLine.id === "simoqueno") {
    // @ts-ignore
    ida = currentSchedule.departures.filter((d) => d.direction === "Sale de Terminal").sort((a,b) => a.time.localeCompare(b.time));
    // @ts-ignore
    vuelta = currentSchedule.departures.filter((d) => d.direction === "Regreso de Vuelta").sort((a,b) => a.time.localeCompare(b.time));
  } else {
    // Linea 118
    // @ts-ignore
    ida = currentSchedule.trips.filter((t) => t.origin === "Terminal").sort((a,b) => a.time.localeCompare(b.time));
    // @ts-ignore
    vuelta = currentSchedule.trips.filter((t) => t.origin !== "Terminal").sort((a,b) => a.time.localeCompare(b.time));
  }

  return (
    <section id="colectivos" className={`rounded-[2.5rem] shadow-xl overflow-hidden border-l-8 ${activeLineIdx === 0 ? 'border-blue-500' : 'border-green-500'} bg-white transition-colors duration-500`}>
      
      {/* --- HEADER --- */}
      <div className="p-8 pb-4">
        <div className="flex items-center gap-4 mb-6">
          <div className={`${activeLine.lightColor} p-3 rounded-2xl ${activeLineIdx === 0 ? 'text-blue-600' : 'text-green-600'}`}>
            <Bus size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-black text-gray-800 italic uppercase">Transporte Público</h3>
            <p className="text-sm text-gray-500 font-medium">Horarios de Verano 2026</p>
          </div>
        </div>

        {/* --- SELECTOR DE LINEA (TABS GRANDES) --- */}
        <div className="flex bg-gray-100 p-1.5 rounded-2xl mb-6">
          {DATA_TRANSPORTE.map((line, idx) => (
            <button
              key={line.id}
              onClick={() => { setActiveLineIdx(idx); setActiveDayIdx(0); }}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-black uppercase tracking-wide transition-all ${
                activeLineIdx === idx 
                  ? 'bg-white text-gray-800 shadow-md transform scale-[1.02]' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {line.lineName}
            </button>
          ))}
        </div>

        {/* --- INFO EXTRA (PLATAFORMA) --- */}
        <div className="flex items-center gap-2 mb-6 text-xs font-bold text-gray-400 uppercase tracking-wider">
           <MapPin size={14} />
           {activeLine.route}
           {activeLine.platform && <span className="ml-auto bg-gray-100 px-2 py-1 rounded text-gray-600">{activeLine.platform}</span>}
        </div>

        {/* --- SELECTOR DE DIAS (PILLS) --- */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {activeLine.schedules.map((sch, idx) => (
            <button
              key={idx}
              onClick={() => setActiveDayIdx(idx)}
              className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors border ${
                activeDayIdx === idx
                  ? `${activeLine.color} text-white border-transparent`
                  : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
              }`}
            >
              {sch.days}
            </button>
          ))}
        </div>

        {/* --- VIGENCIA DEL HORARIO --- */}
        {validFrom && (
          <p className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            <CalendarDays size={13} /> Vigente desde {validFrom}
          </p>
        )}
      </div>

      {/* --- GRILLA DE HORARIOS (IDA Y VUELTA) --- */}
      <div className="bg-gray-50/50 p-6 md:p-8 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* COLUMNA 1: IDA (SALE DE TERMINAL) */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4 text-gray-400">
              <div className={`p-1.5 rounded-full ${activeLine.lightColor}`}>
                <ArrowRight size={16} className={activeLineIdx === 0 ? 'text-blue-600' : 'text-green-600'} />
              </div>
              <span className="text-xs font-black uppercase tracking-widest">Ida (Desde Capital)</span>
            </div>
            
            <div className="space-y-3">
              {ida.map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                  <span className="text-2xl font-black text-gray-800">{item.time}</span>
                  <div className="text-right">
                    <span className="block text-[10px] font-bold text-gray-400 uppercase">Destino</span>
                    <span className={`text-xs font-bold ${activeLineIdx === 0 ? 'text-blue-600' : 'text-green-600'}`}>
                      {item.destination}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMNA 2: VUELTA (REGRESO) */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
             <div className="flex items-center gap-2 mb-4 text-gray-400">
              <div className={`p-1.5 rounded-full ${activeLine.lightColor} rotate-180`}>
                <ArrowRight size={16} className={activeLineIdx === 0 ? 'text-blue-600' : 'text-green-600'} />
              </div>
              <span className="text-xs font-black uppercase tracking-widest">Vuelta (Hacia Capital)</span>
            </div>

            <div className="space-y-3">
              {vuelta.map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                  <span className="text-2xl font-black text-gray-800">{item.time}</span>
                  <div className="text-right">
                    <span className="block text-[10px] font-bold text-gray-400 uppercase">Sale desde</span>
                    <span className={`text-xs font-bold ${activeLineIdx === 0 ? 'text-blue-600' : 'text-green-600'}`}>
                      {item.origin}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* --- MEDIOS DE PAGO Y CONTACTO (solo líneas que lo informan) --- */}
        {activeLine.payments && (
          <div className="mt-6 bg-white rounded-3xl p-5 md:p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-xl ${activeLine.lightColor} text-green-600`}>
                <CreditCard size={20} />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-wide text-gray-800">Medios de Pago</h4>
                <p className="text-[11px] font-medium text-gray-400 leading-tight">{activeLine.payments.subtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {activeLine.payments.methods.map((m: { icon: string; label: string; detail: string }, i: number) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3 border border-gray-100">
                  <div className={`${activeLine.color} text-white p-2 rounded-lg shrink-0`}>
                    {m.icon === "card" && <CreditCard size={16} />}
                    {m.icon === "qr" && <QrCode size={16} />}
                    {m.icon === "wallet" && <Wallet size={16} />}
                  </div>
                  <div className="leading-tight">
                    <span className="block text-xs font-black text-gray-800">{m.label}</span>
                    {m.detail && <span className="block text-[11px] font-medium text-gray-500">{m.detail}</span>}
                  </div>
                </div>
              ))}
            </div>

            {activeLine.payments.note && (
              <div className="mt-3 flex items-center gap-2 text-xs font-bold text-gray-500">
                <Banknote size={16} className="text-green-600 shrink-0" />
                {activeLine.payments.note}
              </div>
            )}

            {/* Contacto de la empresa */}
            {activeLine.contacts && (
              <div className="mt-5 pt-5 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center gap-3">
                {activeLine.company && (
                  <span className="text-xs font-black uppercase tracking-wider text-gray-400">{activeLine.company}</span>
                )}
                <div className="flex flex-wrap gap-3 sm:ml-auto">
                  <a href={`tel:${activeLine.contacts.phone}`} className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 transition-colors px-4 py-2 rounded-xl border border-gray-100 text-gray-700 font-bold text-sm">
                    <Phone size={16} className="text-green-600" /> {activeLine.contacts.phone}
                  </a>
                  <a href={`https://wa.me/549${activeLine.contacts.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-50 hover:bg-green-100 transition-colors px-4 py-2 rounded-xl border border-green-200 text-green-700 font-bold text-sm">
                    <MessageCircle size={16} className="text-green-600" /> {activeLine.contacts.whatsapp}
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-6 flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-100 text-xs text-gray-400 shadow-sm">
           <Clock size={16} className="shrink-0 mt-0.5" />
           <p>Los horarios pueden sufrir demoras o modificaciones por parte de la empresa. Se recomienda estar en la parada 10 minutos antes.</p>
        </div>
      </div>

    </section>
  );
}