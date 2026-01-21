"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import IconWhatsapp from "../icon/whatsapp.svg";
import { ReactSVG } from "react-svg";
console.log(IconWhatsapp);
export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-8 border-naranja-light">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* 1. Identidad */}
          <div>
            <h3 className="text-2xl font-black italic mb-4">COMUNA DE RACO</h3>
            <p className="text-white-400 text-sm leading-relaxed mb-6">
              Trabajando juntos por el bienestar de nuestros vecinos y la preservación de nuestro patrimonio natural.
            </p>
            <div className="flex gap-4">
              {/* Redes Sociales (Placeholders) */}
              <a href="https://www.instagram.com/comunaderaco/" className="p-2 bg-naranja-light rounded-full hover:bg-primary transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="https://web.facebook.com/comunaraco" className="p-2 bg-naranja-light rounded-full hover:bg-blue-600 transition-colors text-white">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/5493816908950" className="p-2 bg-naranja-light rounded-full hover:bg-blue-600 transition-colors text-white">
                <ReactSVG
                  beforeInjection={(svg) => {
                    svg.setAttribute('style', 'fill: #ffffff');
                    svg.setAttribute('width', '20px');
                    svg.setAttribute('height', '20px');
                  }}
                  src={"img/icon/whatsapp.svg"}
                />
              </a>
            </div>
          </div>

          {/* 2. Enlaces Rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white-200">Accesos Rápidos</h4>
            <ul className="space-y-3 text-sm text-white-400">
              <li>
                <Link href="/" className="hover:text-naranja-light transition-colors">Inicio</Link>
              </li>
              <li>
                <Link href="/veraneantes" className="hover:text-naranja-light transition-colors">Guía del Vecino</Link>
              </li>
              <li>
                <Link href="/#agenda" className="hover:text-naranja-light transition-colors">Agenda 2026</Link>
              </li>
              <li>
                <Link href="/#catalogo" className="hover:text-naranja-light transition-colors">Comercios y Servicios</Link>
              </li>
            </ul>
          </div>

          {/* 3. Contacto Oficial */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white-200">Contacto Oficial</h4>
            <ul className="space-y-4 text-sm text-white-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-naranja-light mt-0.5 shrink-0" />
                <span>Ruta 341 Km 24<br />Raco, Tucumán</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-naranja-light shrink-0" />
                <a href="https://wa.me/5493816908950" className="hover:text-white">381 690-8950</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-naranja-light shrink-0" />
                <a href="mailto:comunaderaco@gmail.com" className="hover:text-white">comunaderaco@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-naranja-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white-500">
          <p>© 2026 Comuna de Raco. Todos los derechos reservados.</p>
          {/* <div className="flex gap-1">
             <span>Desarrollado por</span>
             <a href="https://github.com/leo43161" target="_blank" className="text-white-300 hover:text-naranja-light font-bold transition-colors">
               Leonardo Palavecino
             </a>
          </div> */}
        </div>

      </div>
    </footer>
  );
}