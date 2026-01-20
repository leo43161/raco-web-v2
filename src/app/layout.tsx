import type { Metadata, Viewport } from "next";
import { Poppins, Caveat } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { GoogleAnalytics } from '@next/third-parties/google';
import Footer from "@/components/Footer";

// Optimizamos la carga de fuentes
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
  themeColor: "#5a8b5e",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://raco.gob.ar"),
  
  // 1. TÍTULO OPTIMIZADO: Incluye "Tucumán" y palabras clave de turismo
  title: {
    template: "%s | Comuna de Raco, Tucumán",
    default: "Comuna de Raco | Turismo y Naturaleza en Tucumán - Verano 2026",
  },
  
  // 2. DESCRIPCIÓN VENDEDORA: Ataca la intención de búsqueda "qué hacer" y "dónde queda"
  description: "Descubrí Raco, el paraíso de las Yungas a solo 50km de San Miguel de Tucumán. Guía oficial de turismo, trekking, alojamiento, gastronomía y agenda de verano 2026.",
  
  authors: [{ name: "Leonardo Palavecino" }],
  
  // 3. KEYWORDS: Mezcla de ubicación + intención
  keywords: [
    "Raco Tucumán",
    "Turismo en Tucumán",
    "Verano 2026 Tucumán",
    "Lugares para visitar en Tucumán",
    "Trekking Yungas",
    "Alojamiento en Raco",
    "Agenda Cultural Raco",
    "Comuna de Raco",
    "San Miguel de Tucumán escapadas",
    "El Siambón",
    "Villa de Raco"
  ],

  // 4. GEO-TAGS: Fundamental para SEO Local (Google Maps / Búsquedas "cerca de mi")
  other: {
    "geo.region": "AR-T", // Código ISO de Tucumán
    "geo.placename": "Raco",
    "geo.position": "-26.6333;-65.4167", // Coordenadas aproximadas de Raco
    "ICBM": "-26.6333, -65.4167"
  },

  icons: {
    icon: [
      { url: "/img/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/img/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/favicon/favicon.ico" },
    ],
    apple: [
      { url: "/img/favicon/apple-touch-icon.png" },
    ],
  },
  manifest: "/img/favicon/site.webmanifest",

  openGraph: {
    title: "Visitá Raco | Naturaleza y Cultura en Tucumán",
    description: "Tu guía oficial para el Verano 2026. Encontrá hospedaje, senderos y la mejor gastronomía de las Yungas.",
    url: "/",
    siteName: "Comuna de Raco Oficial",
    images: [
      {
        url: "/imagenes/raco_isologo.png", // Asegurate que esta imagen sea atractiva (idealmente una foto de paisaje + logo)
        width: 1200,
        height: 630,
        alt: "Paisaje de Raco, Tucumán",
      }
    ],
    locale: "es_AR",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Comuna de Raco | Tucumán",
    description: "Viví el verano 2026 en Raco. Trekking, ferias y naturaleza.",
    images: ["/imagenes/raco_isologo.png"], // Lo mismo acá
  },
  
  // Ayuda a Google a entender que esta es la versión principal
  alternates: {
    canonical: "https://raco.gob.ar",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = "G-97DP7XYX3X";
  
  // 5. STRUCTURED DATA (JSON-LD): Esto es ORO PURO para Google.
  // Le dice explícitamente a Google "Somos un Gobierno" y "Somos un Destino Turístico".
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    "name": "Comuna de Raco",
    "url": "https://raco.gob.ar",
    "logo": "https://raco.gob.ar/imagenes/raco_isologo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Raco",
      "addressRegion": "Tucumán",
      "addressCountry": "AR"
    },
    "description": "Organismo oficial de gestión de la Comuna de Raco, Tucumán. Información turística y servicios al vecino.",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Raco"
    }
  };

  return (
    <html lang="es" className={`${poppins.variable} ${caveat.variable}`}>
      <body className="antialiased bg-[#fcfcfc] text-zinc-900 overflow-x-hidden">
        
        {/* Inyectamos los Datos Estructurados */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <SmoothScroll>
          {children}
          <Footer />

          {/* Solo carga Analytics si hay un ID configurado */}
          {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
        </SmoothScroll>
      </body>
    </html>
  );
}