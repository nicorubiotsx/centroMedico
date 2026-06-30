'use client';

import React, { useState, useCallback } from 'react';
import styles from './FAQAccordion.module.css';

export default function FAQAccordion() {
  const faqs = [
    {
      question: '¿Cómo puedo reservar una hora médica en línea?',
      answer: 'Puedes reservar de forma inmediata ingresando a la sección "Reservar Hora" en el menú superior. Solo debes seleccionar la especialidad, el médico de tu preferencia, y escoger el día y horario disponible que mejor se adapte a tu agenda.'
    },
    {
      question: '¿Con qué previsión de salud atienden en el Centro Médico?',
      answer: 'Atendemos a pacientes de FONASA (tramos B, C y D), Isapres (Colmena, Banmédica, Consalud, CruzBlanca, Vida Tres, Nueva Masvida) y de forma particular. Contamos con sistema de venta de bonos IMED directamente en nuestras sucursales.'
    },
    {
      question: '¿Qué documentos debo presentar el día de mi consulta?',
      answer: 'El día de tu cita debes presentar tu cédula de identidad física vigente (o pasaporte si eres extranjero). Te recomendamos llegar entre 10 y 15 minutos antes de tu hora programada para confirmar tus datos en la recepción.'
    },
    {
      question: '¿Puedo agendar una consulta médica para un familiar?',
      answer: 'Sí, puedes agendar para otra persona. Al momento de realizar la reserva, asegúrate de ingresar los datos personales del paciente (RUT, nombre completo y fecha de nacimiento) para que la cita y receta médica queden registradas a su nombre.'
    },
    {
      question: '¿Ofrecen atención de urgencias o solo consultas programadas?',
      answer: 'Nuestro portal está diseñado para agendar consultas médicas programadas en diversas especialidades. Si presentas una emergencia médica de gravedad, te recomendamos acudir de inmediato al servicio de urgencias más cercano o llamar al SAMU (131).'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = useCallback((index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  }, []);

  const handleKeyDown = useCallback((e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAccordion(index);
    }
  }, [toggleAccordion]);

  return (
    <div className={styles.accordion} role="list" aria-label="Preguntas frecuentes">
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;
        const questionId = `faq-question-${index}`;
        const answerId = `faq-answer-${index}`;
        return (
          <div
            key={index}
            className={`${styles.item} ${isOpen ? styles.open : ''} glass-effect`}
            role="listitem"
          >
            <button
              id={questionId}
              className={styles.questionButton}
              onClick={() => toggleAccordion(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              aria-expanded={isOpen}
              aria-controls={answerId}
            >
              <span className={styles.questionText}>{faq.question}</span>
              <span className={styles.icon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              className={styles.answerContainer}
              style={{ maxHeight: isOpen ? '300px' : '0' }}
              hidden={!isOpen}
            >
              <p className={styles.answerText}>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
