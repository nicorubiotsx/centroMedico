import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import FAQAccordion from '@/components/FAQAccordion';
import SpecialtiesSection from '@/components/SpecialtiesSection';

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



  const testimonials = [
    {
      name: 'Carlos Mendoza',
      specialty: 'Paciente de Cardiología',
      text: 'Excelente servicio. El agendamiento fue sumamente rápido y me llegó la confirmación al instante. La atención del cardiólogo superó mis expectativas.',
      rating: 5,
      avatar: 'CM'
    },
    {
      name: 'Sofía Rojas',
      specialty: 'Paciente de Pediatría',
      text: 'Me encanta la comodidad de poder reservar a cualquier hora para mis hijos. El portal funciona de manera impecable y las instalaciones son excelentes.',
      rating: 5,
      avatar: 'SR'
    },
    {
      name: 'Valentina Silva',
      specialty: 'Paciente de Ginecología',
      text: 'Un portal moderno y limpio. Pude revisar la disponibilidad de los médicos especialistas y agendar mi hora médica anual en menos de dos minutos.',
      rating: 5,
      avatar: 'VS'
    }
  ];

  const insurances = [
    'FONASA', 'Colmena', 'Banmédica', 'Consalud', 'CruzBlanca', 'Vida Tres', 'Nueva Masvida'
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
            Bienvenido al portal de autogestión de nuestro Centro Médico. Consulta agendas en tiempo real y reserva tu cita médica de manera rápida, transparente y segura.
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
              Conocer Especialidades
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

      {/* Specialties Section */}
      <SpecialtiesSection />

      {/* Why Choose Us Section */}
      <section className={styles.features}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>¿Por qué elegirnos?</h2>
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

      {/* Convenios Section */}
      <section className={styles.insurancesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Convenios de Salud</h2>
          <p className={styles.sectionSubtitle}>
            Trabajamos con una amplia red de previsiones de salud para que puedas atenderte con total comodidad y tranquilidad.
          </p>
        </div>
        <div className={styles.insurancesGrid}>
          {insurances.map((ins, i) => (
            <div key={i} className={`${styles.insuranceCard} glass-effect`}>
              <div className={styles.insuranceBadge}></div>
              <span className={styles.insuranceName}>{ins}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Lo que dicen nuestros pacientes</h2>
          <p className={styles.sectionSubtitle}>
            La opinión y satisfacción de nuestros pacientes es nuestro mayor logro y motivación diaria.
          </p>
        </div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((test, i) => (
            <div key={i} className={`${styles.testimonialCard} glass-effect`}>
              <div className={styles.stars}>
                {[...Array(test.rating)].map((_, index) => (
                  <svg key={index} viewBox="0 0 24 24" fill="currentColor" className={styles.starIcon}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className={styles.testimonialText}>"{test.text}"</p>
              <div className={styles.testimonialUser}>
                <div className={styles.testimonialAvatar}>{test.avatar}</div>
                <div>
                  <h4 className={styles.testimonialName}>{test.name}</h4>
                  <span className={styles.testimonialSpecialty}>{test.specialty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Preguntas Frecuentes</h2>
          <p className={styles.sectionSubtitle}>
            Resuelve tus dudas generales sobre el agendamiento de horas, documentos requeridos y cobertura médica.
          </p>
        </div>
        <FAQAccordion />
      </section>

      {/* Ubicación y Horarios Section */}
      <section className={styles.locationSection}>
        <div className={`${styles.locationCard} glass-effect`}>
          <div className={styles.locationInfo}>
            <span className={styles.locationTag}>Visítanos</span>
            <h2 className={styles.locationTitle}>Nuestra Ubicación</h2>
            <p className={styles.locationDesc}>
              Nos encontramos en una zona de fácil acceso y con amplios estacionamientos para tu mayor comodidad.
            </p>
            
            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.detailIcon}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <h4>Dirección</h4>
                  <p>Las Cabras, VI Región</p>
                </div>
              </div>

              <div className={styles.detailItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.detailIcon}>
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                <div>
                  <h4>Horario de Atención</h4>
                  <p>Lunes a Viernes: 08:00 - 20:00 hrs</p>
                  <p>Sábados: 09:00 - 14:00 hrs</p>
                </div>
              </div>

              <div className={styles.detailItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.detailIcon}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <h4>Contacto Telefónico</h4>
                  <p>+56 2 2789 5400</p>
                </div>
              </div>
            </div>

            <div className={styles.locationCtas}>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.mapButton}
              >
                Ver en Google Maps
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className={styles.mapVisual}>
            <iframe
              className={styles.mapIframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26622.54!2d-71.305!3d-34.287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966390c4be35c7b3%3A0x5024f0fa9d95d3e4!2sLas%20Cabras%2C%20O&#39;Higgins%2C%20Chile!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del Centro Médico en Las Cabras, VI Región"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className={styles.banner}>
        <div className={`${styles.bannerCard} glass-effect`}>
          <div className={styles.bannerContent}>
            <h2>¿Tienes dudas sobre tu visita?</h2>
            <p>Revisa qué documentos necesitas traer, cómo llegar y las indicaciones previas para cada tipo de examen médico.</p>
          </div>
          <Link href="/preparacion" className={styles.bannerButton}>
            Prepara tu visita
          </Link>
        </div>
      </section>
    </div>
  );
}
