'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('vanguardista'); // 'vanguardista' (default), 'confianza', 'sanacion'

  useEffect(() => {
    // Cargar el tema inicial desde localStorage si existe
    const savedTheme = localStorage.getItem('centro-medico-theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Quitar todas las clases de tema del html
    const htmlEl = document.documentElement;
    htmlEl.classList.remove('theme-vanguardista', 'theme-confianza', 'theme-sanacion');
    
    // Añadir el nuevo tema
    htmlEl.classList.add(`theme-${theme}`);
    
    // Guardar en localStorage
    localStorage.setItem('centro-medico-theme', theme);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider');
  }
  return context;
}
