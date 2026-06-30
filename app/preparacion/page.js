import React from 'react';
import Link from 'next/link';
import styles from './preparacion.module.css';

export const metadata = {
  title: 'Preparación para tu Consulta - Centro Médico Las Cabras',
  description: 'Información práctica para tu visita al Centro Médico: qué traer, cómo llegar a Las Cabras, instrucciones pre-examen y el paso a paso del día de tu cita.',
};

export default function PreparacionPage() {
  const documentos = [
    { item: 'Cédula de identidad vigente', detail: 'Original, no se aceptan fotocopias.' },
    { item: 'Bono de atención o credencial FONASA/Isapre', detail: 'Puedes comprar tu bono IMED en nuestra recepción.' },
    { item: 'Orden médica (si corresponde)', detail: 'Si fue derivado por otro profesional, traiga la orden vigente.' },
    { item: 'Exámenes previos relacionados', detail: 'Resultados de laboratorio, imágenes o informes de consultas anteriores.' },
    { item: 'Listado de medicamentos actuales', detail: 'Nombre y dosis de cada medicamento que esté tomando actualmente.' },
  ];

  const instrucciones = [
    {
      especialidad: 'Medicina General y Cardiología',
      icon: '🩺',
      items: [
        'Si se realizará exámenes de sangre, acuda con al menos 8 horas de ayuno.',
        'Si toma medicamentos para la presión, tómelos normalmente con un poco de agua.',
        'Use ropa cómoda que permita tomar la presión arterial fácilmente.',
      ]
    },
    {
      especialidad: 'Dermatología',
      icon: '✨',
      items: [
        'Acuda sin maquillaje ni cremas en la zona a evaluar.',
        'Si tiene lunares que desea revisar, no los depile ni cubra antes de la consulta.',
        'Traiga fotos de lesiones previas si ha notado cambios recientes.',
      ]
    },
    {
      especialidad: 'Ginecología',
      icon: '🌸',
      items: [
        'Idealmente programe su consulta fuera del período menstrual (salvo urgencias).',
        'Lleve registro de su última menstruación (fecha exacta).',
        'Si es su primera consulta, prepare una lista de sus antecedentes ginecológicos.',
      ]
    },
    {
      especialidad: 'Traumatología',
      icon: '🦴',
      items: [
        'Use ropa holgada que permita examinar la zona afectada.',
        'Traiga radiografías o resonancias previas si las tiene.',
        'Si usa vendajes o férulas, no los retire antes de la consulta.',
      ]
    },
    {
      especialidad: 'Pediatría',
      icon: '🧸',
      items: [
        'Traiga el carnet de vacunas y el carnet de control del niño sano.',
        'Anote cualquier síntoma o cambio de comportamiento reciente.',
        'Si el menor toma medicamentos, lleve el listado actualizado.',
      ]
    },
  ];

  const pasos = [
    { num: '1', title: 'Llegada al Centro', desc: 'Te recomendamos llegar entre 10 y 15 minutos antes de tu hora programada para confirmar tus datos en recepción.' },
    { num: '2', title: 'Registro en Recepción', desc: 'Presenta tu cédula de identidad y bono de atención. Nuestro personal verificará tu cita y te asignará la consulta correspondiente.' },
    { num: '3', title: 'Espera en Sala', desc: 'Toma asiento en la sala de espera designada. Te llamarán por tu nombre cuando el especialista esté listo para atenderte.' },
    { num: '4', title: 'Consulta Médica', desc: 'Tu especialista te recibirá, revisará tu historial y realizará la evaluación correspondiente. No dudes en hacer todas tus preguntas.' },
    { num: '5', title: 'Indicaciones y Seguimiento', desc: 'Al finalizar, recibirás recetas, órdenes de exámenes o derivaciones según corresponda. Podrás agendar tu próxima cita antes de retirarte.' },
  ];

  return (
    <div className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <span className={styles.tag}>Tu Consulta</span>
        <h1 className={styles.title}>
          Prepárate para tu <span className={styles.accentText}>visita médica</span>
        </h1>
        <p className={styles.subtitle}>
          Toda la información práctica que necesitas para que tu experiencia en el Centro Médico sea fluida y sin contratiempos.
        </p>
      </section>

      {/* Documentos */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>¿Qué debo traer a mi consulta?</h2>
          <p className={styles.sectionSubtitle}>
            Asegúrate de tener estos documentos listos antes de tu visita para agilizar el proceso de atención.
          </p>
        </div>
        <div className={styles.checklistGrid}>
          {documentos.map((doc, i) => (
            <div key={i} className={`${styles.checkItem} glass-effect`}>
              <div className={styles.checkIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h3 className={styles.checkTitle}>{doc.item}</h3>
                <p className={styles.checkDetail}>{doc.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo Llegar */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>¿Cómo llegar a Las Cabras?</h2>
          <p className={styles.sectionSubtitle}>
            Nuestro centro médico se encuentra en la comuna de Las Cabras, Región del Libertador Bernardo O'Higgins.
          </p>
        </div>
        <div className={styles.routesGrid}>
          <div className={`${styles.routeCard} glass-effect`}>
            <div className={styles.routeHeader}>
              <span className={styles.routeEmoji}>🚗</span>
              <h3>Desde Santiago</h3>
            </div>
            <p>Toma la Ruta 5 Sur hasta la salida a Rancagua, luego sigue por la Ruta H-30 en dirección a Las Cabras. El trayecto toma aproximadamente 2 horas. El centro se ubica en la zona céntrica de la comuna, con estacionamientos disponibles.</p>
          </div>
          <div className={`${styles.routeCard} glass-effect`}>
            <div className={styles.routeHeader}>
              <span className={styles.routeEmoji}>🚌</span>
              <h3>Desde Rancagua</h3>
            </div>
            <p>Existen buses interurbanos frecuentes desde el Terminal de Rancagua hacia Las Cabras con un recorrido de aproximadamente 45 minutos. Los buses pasan cada 30 minutos durante el día.</p>
          </div>
          <div className={`${styles.routeCard} glass-effect`}>
            <div className={styles.routeHeader}>
              <span className={styles.routeEmoji}>📍</span>
              <h3>Ubicación Local</h3>
            </div>
            <p>Nos encontramos en el centro de Las Cabras, a pasos de la plaza principal. Contamos con estacionamientos habilitados para pacientes y acceso para personas con movilidad reducida.</p>
          </div>
        </div>
      </section>

      {/* Instrucciones Pre-Examen */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Instrucciones Pre-Consulta por Especialidad</h2>
          <p className={styles.sectionSubtitle}>
            Cada especialidad tiene indicaciones específicas. Revisa la tuya para llegar preparado.
          </p>
        </div>
        <div className={styles.instruccionesGrid}>
          {instrucciones.map((inst, i) => (
            <div key={i} className={`${styles.instruccionCard} glass-effect`}>
              <div className={styles.instruccionHeader}>
                <span className={styles.instruccionEmoji}>{inst.icon}</span>
                <h3>{inst.especialidad}</h3>
              </div>
              <ul className={styles.instruccionList}>
                {inst.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* El Día de tu Cita */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>El Día de tu Cita</h2>
          <p className={styles.sectionSubtitle}>
            Sigue estos sencillos pasos para que tu visita sea lo más fluida posible.
          </p>
        </div>
        <div className={styles.pasosGrid}>
          {pasos.map((paso, i) => (
            <div key={i} className={`${styles.pasoCard} glass-effect`}>
              <div className={styles.pasoNum}>{paso.num}</div>
              <div>
                <h3 className={styles.pasoTitle}>{paso.title}</h3>
                <p className={styles.pasoDesc}>{paso.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={`${styles.ctaCard} glass-effect`}>
          <h2>¿Ya estás listo?</h2>
          <p>Agenda tu cita médica ahora y asegura tu horario de preferencia.</p>
          <Link href="/reserva" className={styles.ctaBtn}>
            Reservar mi Hora
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
