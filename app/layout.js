import { Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeContext';
import { Analytics } from "@vercel/analytics/next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Centro Médico - Reserva de Horas',
  description: 'Gestiona tus citas médicas de forma rápida, segura y moderna con nuestro sistema integrado de agendamiento.',
  keywords: 'centro medico, reserva de horas, citas medicas, medicos, salud',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={outfit.className} style={{ colorScheme: 'dark light' }}>
      <body>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
          <Navbar />
          <main id="main-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
