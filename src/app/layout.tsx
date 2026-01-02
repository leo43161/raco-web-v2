import type { Metadata } from "next";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raco - Portal Turístico Oficial",
  description: "Descubrí Raco: Excursiones, trekking, cabalgatas e información útil para veraneantes.",
  openGraph: {
    title: "Raco - Naturaleza y Aventura",
    images: ["/v2/og-image.jpg"], // Imagen para cuando compartan por WhatsApp
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}