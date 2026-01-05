// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Poppins, Caveat } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

// Optimizamos la carga de fuentes (Self-hosted por Next.js)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const viewport: Viewport = {
  themeColor: "#5a8b5e", // El verde de tu favicon
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://raco.gob.ar"),
  title: "Comuna de Raco - Portal Oficial 2026",
  description: "Agenda de Verano, servicios al veraneante y gestión comunal. Viví Raco.",
  authors: [{ name: "Leonardo Palavecino" }],
  openGraph: {
    title: "Comuna de Raco - Portal Oficial",
    description: "Información útil, servicios y actividades de verano 2026.",
    url: "/",
    siteName: "Comuna de Raco",
    images: "/imagenes/raco_isologo.png", // Asegúrate de tener esta imagen en public
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comuna de Raco",
    description: "Gestión y Turismo en Raco.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} ${caveat.variable}`}>
      <body className="antialiased bg-[#fcfcfc] text-zinc-900 overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}