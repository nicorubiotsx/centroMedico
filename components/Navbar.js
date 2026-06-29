'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeSwitcher from './ThemeSwitcher';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={`${styles.header} glass-effect`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <svg className={styles.logoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 10.5V13.5C19 17.366 15.866 20.5 12 20.5C8.13401 20.5 5 17.366 5 13.5V10.5M12 3.5V6.5M12 6.5C8.13401 6.5 5 8.13401 5 10.5V13.5M12 6.5C15.866 6.5 19 8.13401 19 10.5V13.5M12 11.5V15.5M10 13.5H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className={styles.logoText}>San<span className={styles.logoAccent}> Francisco</span> App</span>
        </Link>

        <nav className={styles.nav}>
          <Link 
            href="/" 
            className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
          >
            Inicio
          </Link>
          <Link 
            href="/reserva" 
            className={`${styles.navLink} ${pathname === '/reserva' ? styles.active : ''}`}
          >
            Reservar Hora
          </Link>
        </nav>

        <div className={styles.actions}>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
