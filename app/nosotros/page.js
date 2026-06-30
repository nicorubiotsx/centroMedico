import React from 'react';
import Link from 'next/link';
import styles from './nosotros.module.css';

export const metadata = {
  title: 'Sobre Nosotros - Centro Médico Las Cabras',
  description: 'Conoce la historia, misión, visión y valores del Centro Médico Las Cabras. Comprometidos con la salud y el bienestar de la comunidad de la VI Región.',
};

export default function NosotrosPage() {
  const valores = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
      title: 'Compromiso Humano',
      desc: 'Ponemos a las personas en el centro de todo. Cada paciente es tratado con calidez, empatía y respeto por su dignidad.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Excelencia Clínica',
      desc: 'Mantenemos los más altos estándares de calidad en diagnóstico, tratamiento y seguimiento de cada caso médico.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: 'Accesibilidad',
      desc: 'Creemos que la salud de calidad debe estar al alcance de toda la comunidad, sin importar la previsión o condición económica.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Trabajo en Equipo',
      desc: 'Nuestros profesionales colaboran de forma interdisciplinaria para ofrecer una atención integral a cada paciente.'
    },
  ];

  const hitos = [
    { year: '2008', title: 'Fundación', desc: 'Nace el Centro Médico Las Cabras con el objetivo de acercar la medicina especializada a la comunidad rural de la VI Región.' },
    { year: '2012', title: 'Ampliación de Especialidades', desc: 'Incorporamos las áreas de Cardiología, Ginecología y Traumatología, consolidando un equipo multidisciplinario.' },
    { year: '2017', title: 'Modernización Tecnológica', desc: 'Renovamos la infraestructura clínica e implementamos sistemas digitales de ficha clínica y gestión de agendas.' },
    { year: '2022', title: 'Portal de Autogestión', desc: 'Lanzamos nuestra plataforma digital para que los pacientes puedan agendar, modificar y consultar sus citas en línea.' },
    { year: '2024', title: 'Reconocimiento Regional', desc: 'Somos reconocidos como uno de los centros de atención primaria mejor evaluados por la comunidad de la Región de O\'Higgins.' },
  ];

  return (
    <div className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.tag}>Sobre Nosotros</span>
          <h1 className={styles.title}>
            Más de <span className={styles.accentText}>15 años</span> cuidando la salud de Las Cabras
          </h1>
          <p className={styles.subtitle}>
            Somos un centro médico comprometido con brindar atención de calidad, cercana y humana a cada familia de la comuna de Las Cabras y la VI Región.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className={styles.missionSection}>
        <div className={`${styles.missionCard} glass-effect`}>
          <div className={styles.missionIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>
          <h2>Nuestra Misión</h2>
          <p>
            Proporcionar servicios de salud integrales, oportunos y de alta calidad a la comunidad de Las Cabras y localidades aledañas, con un enfoque centrado en el paciente, fomentando la prevención y el bienestar de las familias a través de un equipo humano comprometido y tecnología médica actualizada.
          </p>
        </div>
        <div className={`${styles.missionCard} glass-effect`}>
          <div className={styles.missionIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <h2>Nuestra Visión</h2>
          <p>
            Ser el centro de salud referente de la VI Región, reconocido por la excelencia de nuestro servicio, la calidez humana de nuestro equipo y la innovación constante en la gestión de la salud, garantizando que cada persona tenga acceso a una atención médica digna y oportuna.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className={styles.valoresSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
          <p className={styles.sectionSubtitle}>
            Los principios que guían cada decisión y acción en nuestro centro médico.
          </p>
        </div>
        <div className={styles.valoresGrid}>
          {valores.map((val, i) => (
            <div key={i} className={`${styles.valorCard} glass-effect hover-glow`}>
              <div className={styles.valorIcon}>{val.icon}</div>
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Nuestra Historia</h2>
          <p className={styles.sectionSubtitle}>
            Un recorrido por los hitos más importantes de nuestro crecimiento y compromiso con la comunidad.
          </p>
        </div>
        <div className={styles.timeline}>
          {hitos.map((hito, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineDot}>
                <span className={styles.timelineYear}>{hito.year}</span>
              </div>
              <div className={`${styles.timelineContent} glass-effect`}>
                <h3>{hito.title}</h3>
                <p>{hito.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={`${styles.ctaCard} glass-effect`}>
          <h2>¿Quieres conocer a nuestro equipo?</h2>
          <p>Descubre a los profesionales que hacen posible nuestra misión de cuidar tu salud día a día.</p>
          <Link href="/equipo" className={styles.ctaBtn}>
            Ver Equipo Médico
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
