import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.footer} glass-effect`}>
      <div className={styles.container}>
        <div className={styles.brandSection}>
          <Link href="/" className={styles.logo}>
            <svg className={styles.logoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 10.5V13.5C19 17.366 15.866 20.5 12 20.5C8.13401 20.5 5 17.366 5 13.5V10.5M12 3.5V6.5M12 6.5C8.13401 6.5 5 8.13401 5 10.5V13.5M12 6.5C15.866 6.5 19 8.13401 19 10.5V13.5M12 11.5V15.5M10 13.5H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className={styles.logoText}><span className={styles.logoAccent}>Centro</span> Medico</span>
          </Link>
          <p className={styles.description}>
            Cuidamos de ti y de tu familia con tecnología de punta y un equipo médico de excelencia. Agenda tu hora de manera rápida y segura.
          </p>
          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.linksSection}>
          <h4 className={styles.sectionTitle}>Enlaces Rápidos</h4>
          <ul className={styles.linksList}>
            <li>
              <Link href="/" className={styles.link}>Inicio</Link>
            </li>
            <li>
              <Link href="/nosotros" className={styles.link}>Sobre Nosotros</Link>
            </li>
            <li>
              <Link href="/equipo" className={styles.link}>Equipo Médico</Link>
            </li>
            <li>
              <Link href="/reserva" className={styles.link}>Reservar Hora</Link>
            </li>
            <li>
              <Link href="/preparacion" className={styles.link}>Tu Consulta</Link>
            </li>
            <li>
              <Link href="/blog" className={styles.link}>Blog de Salud</Link>
            </li>
          </ul>
        </div>

        <div className={styles.contactSection}>
          <h4 className={styles.sectionTitle}>Contacto</h4>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Las Cabras, VI Región</span>
            </li>
            <li className={styles.contactItem}>
              <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+56 2 2789 5400</span>
            </li>
            <li className={styles.contactItem}>
              <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>contacto@centromedico.cl</span>
            </li>
          </ul>
        </div>

        <div className={styles.hoursSection}>
          <h4 className={styles.sectionTitle}>Horario de Atención</h4>
          <ul className={styles.hoursList}>
            <li>
              <span className={styles.day}>Lunes - Viernes:</span>
              <span className={styles.time}>08:00 - 20:00</span>
            </li>
            <li>
              <span className={styles.day}>Sábado:</span>
              <span className={styles.time}>09:00 - 14:00</span>
            </li>
            <li>
              <span className={styles.day}>Domingo:</span>
              <span className={styles.time} style={{ color: 'var(--foreground-muted)' }}>Cerrado</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Centro Médico. Todos los derechos reservados.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>Términos de Servicio</a>
            <a href="#" className={styles.bottomLink}>Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
