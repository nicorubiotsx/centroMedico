import React from 'react';
import Link from 'next/link';
import styles from './equipo.module.css';

export const metadata = {
  title: 'Equipo Médico - Centro Médico Las Cabras',
  description: 'Conoce a nuestro equipo de especialistas médicos calificados. Cardiólogos, pediatras, traumatólogos y más profesionales al servicio de tu salud.',
};

export default function EquipoPage() {
  const medicos = [
    {
      id: 101,
      nombre: 'Dr. Alejandro Silva',
      especialidad: 'Cardiología',
      bio: 'Especialista en prevención y tratamiento de patologías cardiovasculares con más de 12 años de trayectoria en medicina interna y cardiología clínica.',
      formacion: 'Universidad de Chile, Especialización Hospital Clínico de la PUC',
      experiencia: '12 años',
      horario: 'Lunes a Viernes',
      rating: 4.9,
      avatar: 'AS'
    },
    {
      id: 102,
      nombre: 'Dra. Beatriz Fuentes',
      especialidad: 'Pediatría',
      bio: 'Dedicada al desarrollo infantil integral y cuidado del adolescente con un enfoque cálido, empático y humano. Especialista en neonatología y medicina adolescente.',
      formacion: 'Universidad de Concepción, Subespecialidad Hospital Roberto del Río',
      experiencia: '9 años',
      horario: 'Lunes, Miércoles y Viernes',
      rating: 4.8,
      avatar: 'BF'
    },
    {
      id: 103,
      nombre: 'Dr. Carlos Mendoza',
      especialidad: 'Medicina General',
      bio: 'Atención primaria familiar, chequeos preventivos generales y manejo integral de enfermedades crónicas como hipertensión y diabetes.',
      formacion: 'Universidad de Santiago, Diplomado en Salud Familiar UDP',
      experiencia: '15 años',
      horario: 'Martes, Jueves y Viernes',
      rating: 4.7,
      avatar: 'CM'
    },
    {
      id: 104,
      nombre: 'Dr. Roberto Díaz',
      especialidad: 'Traumatología',
      bio: 'Subespecialidad en medicina deportiva y lesiones articulares. Experto en cirugía mínimamente invasiva y rehabilitación de fracturas complejas.',
      formacion: 'Universidad de Valparaíso, Fellowship en Traumatología Deportiva',
      experiencia: '11 años',
      horario: 'Lunes, Martes y Miércoles',
      rating: 4.9,
      avatar: 'RD'
    },
    {
      id: 105,
      nombre: 'Dra. Sofía Vergara',
      especialidad: 'Dermatología',
      bio: 'Diagnóstico precoz de cáncer de piel, tratamientos estéticos y dermatología clínica. Especialista en fotodermatosis y alergias cutáneas.',
      formacion: 'Pontificia Universidad Católica de Chile, Certificación SOCHED',
      experiencia: '8 años',
      horario: 'Miércoles, Jueves y Viernes',
      rating: 5.0,
      avatar: 'SV'
    },
    {
      id: 106,
      nombre: 'Dra. Camila Soto',
      especialidad: 'Ginecología',
      bio: 'Control del embarazo, menopausia y patología cervical. Trato cercano, resolutivo y enfocado en el acompañamiento integral de la mujer.',
      formacion: 'Universidad de los Andes, Especialización Hospital San Borja Arriarán',
      experiencia: '10 años',
      horario: 'Lunes, Martes, Jueves y Viernes',
      rating: 4.8,
      avatar: 'CS'
    },
    {
      id: 107,
      nombre: 'Dr. Martín López',
      especialidad: 'Odontología',
      bio: 'Odontología integral, rehabilitación oral y diseño de sonrisa. Experto en endodoncia, implantología y odontología estética.',
      formacion: 'Universidad de Talca, Diplomado en Implantología Oral',
      experiencia: '7 años',
      horario: 'Lunes, Miércoles y Jueves',
      rating: 4.6,
      avatar: 'ML'
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <span className={styles.tag}>Equipo Médico</span>
        <h1 className={styles.title}>
          Profesionales <span className={styles.accentText}>comprometidos</span> con tu salud
        </h1>
        <p className={styles.subtitle}>
          Nuestro equipo está conformado por especialistas calificados con años de experiencia y formación en las mejores instituciones del país.
        </p>
      </section>

      {/* Doctors Grid */}
      <section className={styles.doctorsSection}>
        <div className={styles.doctorsGrid}>
          {medicos.map((doc) => (
            <article key={doc.id} className={`${styles.doctorCard} glass-effect`}>
              <div className={styles.cardTop}>
                <div className={styles.avatarLarge}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className={styles.cardMeta}>
                  <h2 className={styles.doctorName}>{doc.nombre}</h2>
                  <span className={styles.badge}>{doc.especialidad}</span>
                  <div className={styles.ratingBadge}>
                    <span className={styles.star}>★</span> {doc.rating}
                  </div>
                </div>
              </div>

              <p className={styles.doctorBio}>{doc.bio}</p>

              <div className={styles.detailsGrid}>
                <div className={styles.detailItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.detailIcon} aria-hidden="true">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  <div>
                    <span className={styles.detailLabel}>Formación</span>
                    <span className={styles.detailValue}>{doc.formacion}</span>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.detailIcon} aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div>
                    <span className={styles.detailLabel}>Experiencia</span>
                    <span className={styles.detailValue}>{doc.experiencia}</span>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.detailIcon} aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <div>
                    <span className={styles.detailLabel}>Horario</span>
                    <span className={styles.detailValue}>{doc.horario}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/reserva?especialidad=${encodeURIComponent(doc.especialidad)}&profesionalId=${doc.id}`}
                className={styles.reserveBtn}
              >
                Reservar con {doc.nombre.split(' ')[0]}. {doc.nombre.split(' ').slice(1).join(' ')}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
