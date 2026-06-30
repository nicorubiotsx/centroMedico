'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './SpecialtiesSection.module.css';

export default function SpecialtiesSection() {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedSpecialty) {
        setSelectedSpecialty(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedSpecialty]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedSpecialty) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedSpecialty]);

  const specialties = [
    {
      id: 'medicina-general',
      title: 'Medicina General',
      desc: 'Tu primera línea de atención para diagnósticos precisos, derivaciones oportunas y controles preventivos de salud.',
      longDesc: 'Nuestros médicos generales son tu primer punto de contacto. Están capacitados para diagnosticar, tratar y derivar una amplia gama de patologías, con un enfoque fuerte en la medicina preventiva y el seguimiento del paciente a lo largo del tiempo.',
      tratamientos: ['Controles de salud preventivos', 'Manejo de enfermedades crónicas (Hipertensión, Diabetes)', 'Infecciones respiratorias y digestivas', 'Derivación a subespecialistas'],
      procedimientos: ['Examen físico completo', 'Orden de exámenes preventivos', 'Emisión de licencias y certificados'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      )
    },
    {
      id: 'cardiologia',
      title: 'Cardiología',
      desc: 'Prevención, diagnóstico y tratamiento avanzado de patologías cardíacas e hipertensión por especialistas dedicados.',
      longDesc: 'Contamos con tecnología avanzada y especialistas enfocados en el cuidado de tu corazón. Desde la prevención de factores de riesgo cardiovascular hasta el manejo de patologías complejas.',
      tratamientos: ['Hipertensión arterial', 'Arritmias cardíacas', 'Insuficiencia cardíaca', 'Enfermedad coronaria'],
      procedimientos: ['Electrocardiograma de reposo', 'Holter de presión (MAPA)', 'Holter de ritmo (24hrs)', 'Test de esfuerzo'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      )
    },
    {
      id: 'pediatria',
      title: 'Pediatría',
      desc: 'Cuidado médico integral y acompañamiento empático en el crecimiento y desarrollo de los más pequeños de la casa.',
      longDesc: 'Nuestros pediatras ofrecen una atención cálida y profesional, enfocada tanto en curar enfermedades como en guiar a los padres en el desarrollo sano, nutrición y calendario de vacunas de sus hijos.',
      tratamientos: ['Control sano infantil', 'Enfermedades respiratorias agudas', 'Alergias infantiles', 'Trastornos del desarrollo'],
      procedimientos: ['Evaluación antropométrica', 'Revisión del calendario de vacunas', 'Test visual y auditivo básico'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      )
    },
    {
      id: 'ginecologia',
      title: 'Ginecología',
      desc: 'Atención personalizada para el cuidado preventivo y clínico de la mujer en todas las etapas de su vida.',
      longDesc: 'Brindamos un espacio seguro, confidencial y respetuoso para el cuidado de la salud femenina, abarcando desde la adolescencia hasta la menopausia, el control del embarazo y la prevención oncológica.',
      tratamientos: ['Control prenatal y embarazo', 'Menopausia y climaterio', 'Alteraciones del ciclo menstrual', 'Planificación familiar'],
      procedimientos: ['Toma de Papanicolau (PAP)', 'Ecografía ginecológica y obstétrica', 'Inserción y retiro de DIU/Implanon'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 6v12M6 12h12" />
        </svg>
      )
    },
    {
      id: 'traumatologia',
      title: 'Traumatología',
      desc: 'Diagnóstico y rehabilitación de lesiones del aparato locomotor, huesos y articulaciones en deportistas y adultos.',
      longDesc: 'Evaluamos y tratamos afecciones del sistema músculo-esquelético, ofreciendo soluciones para lesiones agudas, desgaste articular y patologías crónicas que afectan la movilidad y calidad de vida.',
      tratamientos: ['Artrosis de rodilla y cadera', 'Lesiones deportivas (esguinces, desgarros)', 'Lumbago y patología de columna', 'Tendinitis y epicondilitis'],
      procedimientos: ['Infiltraciones articulares', 'Inmovilizaciones y yesos', 'Órdenes de kinesioterapia y rehabilitación'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
        </svg>
      )
    },
    {
      id: 'dermatologia',
      title: 'Dermatología',
      desc: 'Cuidado experto para patologías de la piel, cabello y uñas, con tratamientos clínicos y estéticos de vanguardia.',
      longDesc: 'Dedicados al cuidado integral del órgano más grande del cuerpo. Nuestros especialistas combinan la dermatología médica, quirúrgica y cosmética para asegurar la salud y apariencia de tu piel.',
      tratamientos: ['Acné y rosácea', 'Dermatitis atópica y alergias', 'Alopecia (caída del cabello)', 'Control de lunares y prevención de cáncer de piel'],
      procedimientos: ['Biopsias de piel', 'Crioterapia (nitrógeno líquido)', 'Extirpación de lesiones cutáneas benignas'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="3" />
        </svg>
      )
    }
  ];

  return (
    <>
      <section id="especialidades" className={styles.specialties}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Nuestras Especialidades</h2>
          <p className={styles.sectionSubtitle}>
            Contamos con profesionales altamente capacitados en las principales ramas de la medicina para brindarte una atención integral.
          </p>
        </div>
        
        <div className={styles.specialtiesGrid}>
          {specialties.map((spec) => (
            <div 
              key={spec.id} 
              className={`${styles.specialtyCard} glass-effect hover-glow`}
              onClick={() => setSelectedSpecialty(spec)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedSpecialty(spec)}
            >
              <div className={styles.specIcon}>{spec.icon}</div>
              <h3 className={styles.specTitle}>{spec.title}</h3>
              <p className={styles.specDesc}>{spec.desc}</p>
              <span className={styles.specLink}>
                Ver detalle y agendar
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL GIGANTE (Tarjeta Detalle) */}
      {selectedSpecialty && (
        <div className={styles.modalOverlay} onClick={() => setSelectedSpecialty(null)}>
          <div 
            className={styles.modalContent} 
            onClick={(e) => e.stopPropagation()} // Evita cerrar si clickea dentro del modal
            role="dialog"
            aria-labelledby="modal-title"
            aria-modal="true"
          >
            <button 
              className={styles.closeButton} 
              onClick={() => setSelectedSpecialty(null)}
              aria-label="Cerrar modal"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className={styles.modalHeader}>
              <div className={styles.modalIcon}>{selectedSpecialty.icon}</div>
              <h2 id="modal-title" className={styles.modalTitle}>{selectedSpecialty.title}</h2>
            </div>

            <div className={styles.modalBody}>
              <p className={styles.modalLongDesc}>{selectedSpecialty.longDesc}</p>
              
              <div className={styles.modalListsGrid}>
                <div className={styles.modalListColumn}>
                  <h3>Enfermedades y Tratamientos</h3>
                  <ul>
                    {selectedSpecialty.tratamientos.map((item, idx) => (
                      <li key={`t-${idx}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.modalListColumn}>
                  <h3>Procedimientos Comunes</h3>
                  <ul>
                    {selectedSpecialty.procedimientos.map((item, idx) => (
                      <li key={`p-${idx}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="16"></line>
                          <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <Link 
                href={`/reserva?especialidad=${encodeURIComponent(selectedSpecialty.title)}`}
                className={styles.modalCtaBtn}
              >
                Agendar Consulta en {selectedSpecialty.title}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
