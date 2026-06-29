'use client';

import React from 'react';
import { useTheme } from './ThemeContext';
import styles from './ThemeSwitcher.module.css';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const themes = [
    { id: 'vanguardista', name: 'Vanguardista', color: '#00f2fe' },
    { id: 'confianza', name: 'Confianza', color: '#0284c7' },
    { id: 'sanacion', name: 'Sanación', color: '#0d9488' },
  ];

  return (
    <div className={`${styles.container} glass-effect`}>
      <span className={styles.label}>Tema:</span>
      <div className={styles.buttons}>
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => toggleTheme(t.id)}
            className={`${styles.button} ${theme === t.id ? styles.active : ''}`}
            title={`Cambiar a tema ${t.name}`}
          >
            <span 
              className={styles.colorDot} 
              style={{ backgroundColor: t.color }}
            />
            <span className={styles.name}>{t.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
