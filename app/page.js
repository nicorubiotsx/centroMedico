import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: 'Disponibilidad 24/7',
      desc: 'Agenda tu hora en cualquier momento, desde cualquier dispositivo de forma inmediata.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Seguridad y Privacidad',
      desc: 'Tus datos clínicos y personales están protegidos con los más altos estándares de cifrado.'
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
      title: 'Profesionales Calificados',
      desc: 'Contamos con un equipo de especialistas de primer nivel dedicados a tu bienestar integral.'
    }
  ];

  const stats = [
    { value: '15k+', label: 'Pacientes Satisfechos' },
    { value: '45+', label: 'Especialistas Médicos' },
    { value: '99.8%', label: 'Disponibilidad de Servicio' },
    { value: '4.9/5', label: 'Calificación Promedio' }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.tag}>Plataforma Médica Integrada</div>
          <h1 className={styles.title}>
            Tu salud en manos <span className={styles.accentText}>expertas</span>, a un click de distancia.
          </h1>
          <p className={styles.subtitle}>
            Bienvenido al portal de autogestión de Centro Médico San Francisco. Consulta agendas en tiempo real y reserva tu cita médica de manera rápida, transparente y segura.
          </p>
          <div className={styles.ctas}>
            <Link href="/reserva" className={styles.primaryCta}>
              Reservar una Hora
              <svg className={styles.ctaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <a href="#especialidades" className={styles.secondaryCta}>
              Conocer Especialistas
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={`${styles.visualCard} glass-effect`}>
            <div className={styles.cardHeader}>
              <div className={styles.pulseDot}></div>
              <span>Agendamiento en Línea Activo</span>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.placeholderRow}></div>
              <div className={styles.placeholderRow} style={{ width: '80%' }}></div>
              <div className={styles.placeholderRow} style={{ width: '60%' }}></div>
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.avatarGroup}>
                <div className={styles.avatar} style={{ backgroundColor: '#0284c7' }}>AS</div>
                <div className={styles.avatar} style={{ backgroundColor: '#0d9488' }}>BF</div>
                <div className={styles.avatar} style={{ backgroundColor: '#0f172a' }}>CM</div>
              </div>
              <span className={styles.avatarText}>Médicos disponibles hoy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`${styles.stats} glass-effect`}>
        {stats.map((stat, i) => (
          <div key={i} className={styles.statCard}>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section id="especialidades" className={styles.features}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>¿Por qué elegir San Francisco?</h2>
          <p className={styles.sectionSubtitle}>
            Diseñamos una experiencia ágil pensada en el cuidado y la comodidad de cada uno de nuestros pacientes.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feat, i) => (
            <div key={i} className={`${styles.featureCard} glass-effect hover-glow`}>
              <div className={styles.featIcon}>{feat.icon}</div>
              <h3 className={styles.featTitle}>{feat.title}</h3>
              <p className={styles.featDesc}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className={styles.banner}>
        <div className={`${styles.bannerCard} glass-effect`}>
          <div className={styles.bannerContent}>
            <h2>¿Listo para agendar tu consulta?</h2>
            <p>Selecciona tu especialidad, médico de preferencia y el horario que mejor se adapte a tu día. Recibirás confirmación inmediata.</p>
          </div>
          <Link href="/reserva" className={styles.bannerButton}>
            Reservar Hora Ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
