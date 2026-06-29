import { Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeContext';
import Navbar from '@/components/Navbar';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Centro Médico San Francisco - Reserva de Horas',
  description: 'Gestiona tus citas médicas de forma rápida, segura y moderna con nuestro sistema integrado de agendamiento.',
  keywords: 'centro medico, reserva de horas, citas medicas, medicos, salud, san-francisco',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={outfit.className} style={{ colorScheme: 'dark light' }}>
      <body>
        <ThemeProvider>
          <Navbar />
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
