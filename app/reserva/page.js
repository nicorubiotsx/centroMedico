'use client';

import React, { useState, useEffect } from 'react';
import styles from './reserva.module.css';
import { validarRut, validarTelefono, formatearRut, formatearTelefono } from '@/utils/validation';

export default function ReservaPage() {
  const [step, setStep] = useState(1); // 1: Selector, 2: Calendario, 3: Formulario, 4: Confirmación
  const [sucursales, setSucursales] = useState([]);
  const [profesionales, setProfesionales] = useState([]);
  
  // Selecciones
  const [selectedSucursal, setSelectedSucursal] = useState(null);
  const [selectedProfesional, setSelectedProfesional] = useState(null);
  const [selectedFecha, setSelectedFecha] = useState(null);
  const [selectedHora, setSelectedHora] = useState(null);
  
  // Datos de disponibilidad
  const [agendaData, setAgendaData] = useState([]);
  const [loadingAgenda, setLoadingAgenda] = useState(false);
  const [agendaError, setAgendaError] = useState('');
  
  // Filtro de horario (all, morning, afternoon)
  const [timeFilter, setTimeFilter] = useState('all');

  // Formulario, validaciones e interacciones
  const [rutVal, setRutVal] = useState('');
  const [telefonoVal, setTelefonoVal] = useState('+56 ');
  const [rutError, setRutError] = useState('');
  const [telefonoError, setTelefonoError] = useState('');
  const [rutStatus, setRutStatus] = useState('idle'); // idle, valid, invalid
  const [telefonoStatus, setTelefonoStatus] = useState('idle'); // idle, valid, invalid
  const [shakeForm, setShakeForm] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [bookingResult, setBookingResult] = useState(null);

  // Cargar sucursales y médicos inicialmente
  useEffect(() => {
    async function loadInitialData() {
      try {
        const res = await fetch('/api/san-francisco/agendas');
        if (!res.ok) throw new Error('Error al cargar datos iniciales');
        const data = await res.json();
        setSucursales(data.sucursales);
        
        // Agregar biografías enriquecidas a los profesionales
        const bios = {
          101: 'Especialista en prevención y tratamiento de patologías cardiovasculares. 12 años de trayectoria en medicina interna.',
          102: 'Dedicada al desarrollo infantil integral y cuidado del adolescente con enfoque cálido, empático y humano.',
          103: 'Atención primaria familiar, chequeos preventivos generales y manejo integral de enfermedades crónicas.'
        };
        const enriquecidos = data.profesionales.map(p => ({
          ...p,
          bio: bios[p.id] || 'Profesional de la salud calificado.'
        }));
        
        setProfesionales(enriquecidos);
      } catch (err) {
        console.error(err);
      }
    }
    loadInitialData();
  }, []);

  // Cargar agenda cuando cambia médico o sucursal
  useEffect(() => {
    if (selectedSucursal && selectedProfesional) {
      async function loadAgenda() {
        setLoadingAgenda(true);
        setAgendaError('');
        try {
          const res = await fetch(
            `/api/san-francisco/agendas?sucursalId=${selectedSucursal.id}&profesionalId=${selectedProfesional.id}`
          );
          if (!res.ok) throw new Error('No se pudo cargar la agenda del profesional');
          const data = await res.json();
          
          // Simulamos retardo de 1.2 segundos para mostrar el Skeleton Loader
          await new Promise(resolve => setTimeout(resolve, 1200));
          setAgendaData(data.agendas);
        } catch (err) {
          setAgendaError(err.message);
        } finally {
          setLoadingAgenda(false);
        }
      }
      loadAgenda();
    }
  }, [selectedSucursal, selectedProfesional]);

  const handleSelectProfesional = (prof) => {
    setSelectedProfesional(prof);
    const suc = sucursales.find(s => s.id === prof.sucursalId);
    setSelectedSucursal(suc);
    setStep(2);
  };

  const handleSelectHora = (fecha, hora) => {
    setSelectedFecha(fecha);
    setSelectedHora(hora);
    setStep(3);
  };

  const handleStepClick = (targetStep) => {
    // Reglas de navegación por pasos
    if (targetStep === 1) {
      setStep(1);
    } else if (targetStep === 2 && selectedProfesional) {
      setStep(2);
    } else if (targetStep === 3 && selectedProfesional && selectedFecha && selectedHora) {
      setStep(3);
    }
  };

  const handleBookingSubmit = async (formData) => {
    const isRutValid = validarRut(rutVal);
    const isTelefonoValid = validarTelefono(telefonoVal);

    if (!isRutValid) {
      setRutError('RUT inválido. Verifique dígito verificador.');
      setRutStatus('invalid');
    }
    if (!isTelefonoValid) {
      setTelefonoError('Número celular inválido. Formato: +56 9 XXXX XXXX');
      setTelefonoStatus('invalid');
    }

    if (!isRutValid || !isTelefonoValid) {
      // Activar efecto de vibración en el formulario
      setShakeForm(true);
      setTimeout(() => setShakeForm(false), 500);
      return;
    }

    setLoadingSubmit(true);
    try {
      const res = await fetch('/api/san-francisco/citas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          rut: rutVal,
          telefono: telefonoVal,
          fecha: selectedFecha,
          hora: selectedHora,
          profesionalId: selectedProfesional.id,
          sucursalId: selectedSucursal.id
        })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al agendar la cita');
      
      setBookingResult(data.cita);
      setStep(4);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoadingSubmit(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedSucursal(null);
    setSelectedProfesional(null);
    setSelectedFecha(null);
    setSelectedHora(null);
    setBookingResult(null);
    setRutVal('');
    setTelefonoVal('+56 ');
    setRutError('');
    setTelefonoError('');
    setRutStatus('idle');
    setTelefonoStatus('idle');
    setTimeFilter('all');
  };

  // Filtrado de horas
  const filterHours = (horas) => {
    if (timeFilter === 'all') return horas;
    return horas.filter(h => {
      const horaNum = parseInt(h.split(':')[0], 10);
      if (timeFilter === 'morning') return horaNum < 13;
      if (timeFilter === 'afternoon') return horaNum >= 13;
      return true;
    });
  };

  return (
    <div className={styles.container}>
      {/* Indicador de Pasos Interactivo */}
      <div className={`${styles.stepsContainer} glass-effect`}>
        {[
          { num: 1, label: 'Especialista', enabled: true },
          { num: 2, label: 'Horario', enabled: !!selectedProfesional },
          { num: 3, label: 'Datos', enabled: !!(selectedProfesional && selectedFecha && selectedHora) },
          { num: 4, label: 'Confirmación', enabled: false }
        ].map((s) => (
          <div 
            key={s.num} 
            onClick={() => s.enabled && step !== 4 && handleStepClick(s.num)}
            className={`${styles.stepWrapper} ${step >= s.num ? styles.stepActive : ''} ${s.enabled && step !== s.num && step !== 4 ? styles.stepClickable : ''}`}
          >
            <div className={styles.stepNumber}>{s.num}</div>
            <div className={styles.stepLabel}>{s.label}</div>
            {s.num < 4 && <div className={styles.stepConnector}></div>}
          </div>
        ))}
      </div>

      {/* Flujo de Reserva */}
      <div className={styles.flowContent}>
        
        {/* PASO 1: Selección de Profesional */}
        {step === 1 && (
          <div className={styles.section}>
            <div className={styles.header}>
              <h2>Selecciona tu Especialista</h2>
              <p>Elige el médico con el que deseas agendar tu consulta.</p>
            </div>
            
            <div className={styles.doctorGrid}>
              {profesionales.map((prof) => {
                const suc = sucursales.find(s => s.id === prof.sucursalId);
                return (
                  <div key={prof.id} className={`${styles.doctorCard} glass-effect hover-glow`}>
                    <div className={styles.doctorAvatar}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <div className={styles.doctorInfo}>
                      <h3>{prof.nombre}</h3>
                      <span className={styles.badge}>{prof.especialidad}</span>
                      <p className={styles.doctorBio}>{prof.bio}</p>
                      
                      <div className={styles.divider}></div>

                      <p className={styles.sucursalText}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.smallIcon}>
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {suc ? suc.nombre : ''}
                      </p>
                      <div className={styles.rating}>
                        <span className={styles.star}>★</span> {prof.rating}
                      </div>
                    </div>
                    <button 
                      onClick={() => handleSelectProfesional(prof)}
                      className={styles.selectBtn}
                    >
                      Ver Disponibilidad
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* PASO 2: Selección de Horario */}
        {step === 2 && (
          <div className={styles.section}>
            <div className={styles.backNav}>
              <button onClick={() => setStep(1)} className={styles.backBtn}>
                ← Volver a especialistas
              </button>
            </div>

            <div className={styles.header}>
              <h2>Selecciona Fecha y Hora</h2>
              <p>Horas disponibles para el <strong>{selectedProfesional?.nombre}</strong> en <strong>{selectedSucursal?.nombre}</strong>.</p>
            </div>

            {/* Filtros de Horario */}
            {!loadingAgenda && !agendaError && agendaData.length > 0 && (
              <div className={styles.filtersContainer}>
                <span className={styles.filtersLabel}>Filtrar horario:</span>
                <div className={styles.filterGroup}>
                  <button 
                    onClick={() => setTimeFilter('all')} 
                    className={`${styles.filterBtn} ${timeFilter === 'all' ? styles.filterActive : ''}`}
                  >
                    Todos
                  </button>
                  <button 
                    onClick={() => setTimeFilter('morning')} 
                    className={`${styles.filterBtn} ${timeFilter === 'morning' ? styles.filterActive : ''}`}
                  >
                    🌅 Mañana
                  </button>
                  <button 
                    onClick={() => setTimeFilter('afternoon')} 
                    className={`${styles.filterBtn} ${timeFilter === 'afternoon' ? styles.filterActive : ''}`}
                  >
                    🌇 Tarde
                  </button>
                </div>
              </div>
            )}

            {/* Carga con Skeleton Loaders */}
            {loadingAgenda ? (
              <div className={styles.daysGrid}>
                {[1, 2, 3, 4, 5].map((idx) => (
                  <div key={idx} className={`${styles.skeletonColumn} glass-effect`}>
                    <div className={styles.skeletonHeader}>
                      <div className={styles.skeletonPulse} style={{ width: '60%', height: '10px', margin: '0 auto 6px' }}></div>
                      <div className={styles.skeletonPulse} style={{ width: '80%', height: '14px', margin: '0 auto' }}></div>
                    </div>
                    <div className={styles.skeletonHours}>
                      {[1, 2, 3, 4].map((slotIdx) => (
                        <div key={slotIdx} className={`${styles.skeletonSlot} ${styles.skeletonPulse}`}></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : agendaError ? (
              <div className={styles.errorCard}>
                <p>{agendaError}</p>
              </div>
            ) : (
              <div className={styles.agendaContainer}>
                {agendaData.length === 0 ? (
                  <p className={styles.noHours}>No hay horas disponibles registradas para los próximos días.</p>
                ) : (
                  <div className={styles.daysGrid}>
                    {agendaData.map((dia) => {
                      const horasFiltradas = filterHours(dia.horas);
                      return (
                        <div key={dia.fecha} className={`${styles.dayColumn} glass-effect`}>
                          <div className={styles.dayHeader}>
                            <span className={styles.dayOfWeek}>{dia.diaSemana}</span>
                            <span className={styles.dayOfMonth}>{dia.diaMes} {dia.mes}</span>
                          </div>
                          <div className={styles.hoursList}>
                            {horasFiltradas.length === 0 ? (
                              <span className={styles.noSlotsText}>Sin horas</span>
                            ) : (
                              horasFiltradas.map((hora) => (
                                <button
                                  key={hora}
                                  onClick={() => handleSelectHora(dia.fecha, hora)}
                                  className={styles.hourBtn}
                                >
                                  {hora}
                                </button>
                              ))
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* PASO 3: Formulario de Registro */}
        {step === 3 && (
          <div className={styles.section}>
            <div className={styles.backNav}>
              <button onClick={() => setStep(2)} className={styles.backBtn}>
                ← Volver a horarios
              </button>
            </div>

            <div className={styles.header}>
              <h2>Confirma tus Datos</h2>
              <p>Por favor ingresa la información del paciente para finalizar la reserva.</p>
            </div>

            <div className={styles.formLayout}>
              {/* Resumen de cita */}
              <div className={`${styles.summaryCard} glass-effect`}>
                <h3>Resumen de Reserva</h3>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Médico:</span>
                  <span className={styles.summaryVal}>{selectedProfesional?.nombre} ({selectedProfesional?.especialidad})</span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Lugar:</span>
                  <span className={styles.summaryVal}>{selectedSucursal?.nombre}</span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Fecha:</span>
                  <span className={styles.summaryVal}>{selectedFecha}</span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Hora:</span>
                  <span className={styles.summaryVal} style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{selectedHora}</span>
                </div>
              </div>

              {/* Formulario */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.target);
                  handleBookingSubmit({
                    nombre: data.get('nombre'),
                    email: data.get('email')
                  });
                }}
                className={`${styles.bookingForm} glass-effect ${shakeForm ? styles.shakeAnimation : ''}`}
              >
                <div className={styles.inputGroup}>
                  <label htmlFor="nombre">Nombre Completo</label>
                  <input type="text" id="nombre" name="nombre" required placeholder="Ej. Juan Pérez González" />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="rut">RUT / Identificación</label>
                  <div className={styles.inputWrapper}>
                    <input 
                      type="text" 
                      id="rut" 
                      name="rut" 
                      value={rutVal}
                      className={rutStatus === 'valid' ? styles.validInput : rutStatus === 'invalid' ? styles.invalidInput : ''}
                      onChange={(e) => {
                        const val = formatearRut(e.target.value);
                        setRutVal(val);
                        if (validarRut(val)) {
                          setRutStatus('valid');
                          setRutError('');
                        } else {
                          setRutStatus('idle');
                        }
                      }}
                      onBlur={() => {
                        if (rutVal) {
                          if (validarRut(rutVal)) {
                            setRutStatus('valid');
                            setRutError('');
                          } else {
                            setRutStatus('invalid');
                            setRutError('RUT inválido. Verifique dígito verificador.');
                          }
                        } else {
                          setRutStatus('idle');
                          setRutError('');
                        }
                      }}
                      required 
                      placeholder="Ej. 12.345.678-9" 
                    />
                    {rutStatus === 'valid' && (
                      <span className={styles.feedbackIcon} style={{ color: 'var(--success)' }}>✓</span>
                    )}
                    {rutStatus === 'invalid' && (
                      <span className={styles.feedbackIcon} style={{ color: '#ef4444' }}>✗</span>
                    )}
                  </div>
                  {rutError && <span className={styles.errorMessage}>{rutError}</span>}
                </div>

                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" id="email" name="email" required placeholder="ejemplo@correo.com" />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label htmlFor="telefono">Teléfono de Contacto</label>
                    <div className={styles.inputWrapper}>
                      <input 
                        type="tel" 
                        id="telefono" 
                        name="telefono" 
                        value={telefonoVal}
                        className={telefonoStatus === 'valid' ? styles.validInput : telefonoStatus === 'invalid' ? styles.invalidInput : ''}
                        onChange={(e) => {
                          const val = formatearTelefono(e.target.value);
                          setTelefonoVal(val);
                          if (validarTelefono(val)) {
                            setTelefonoStatus('valid');
                            setTelefonoError('');
                          } else {
                            setTelefonoStatus('idle');
                          }
                        }}
                        onBlur={() => {
                          const numOnly = telefonoVal.replace(/[^\d]/g, '');
                          if (numOnly.length > 2) {
                            if (validarTelefono(telefonoVal)) {
                              setTelefonoStatus('valid');
                              setTelefonoError('');
                            } else {
                              setTelefonoStatus('invalid');
                              setTelefonoError('Número inválido. Formato: +56 9 XXXX XXXX');
                            }
                          } else {
                            setTelefonoStatus('idle');
                            setTelefonoError('');
                          }
                        }}
                        required 
                        placeholder="Ej. +56 9 1234 5678" 
                      />
                      {telefonoStatus === 'valid' && (
                        <span className={styles.feedbackIcon} style={{ color: 'var(--success)' }}>✓</span>
                      )}
                      {telefonoStatus === 'invalid' && (
                        <span className={styles.feedbackIcon} style={{ color: '#ef4444' }}>✗</span>
                      )}
                    </div>
                    {telefonoError && <span className={styles.errorMessage}>{telefonoError}</span>}
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={styles.submitBtn}
                  disabled={loadingSubmit}
                >
                  {loadingSubmit ? 'Confirmando con San Francisco...' : 'Confirmar Reserva de Cita'}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* PASO 4: Confirmación Exitosa */}
        {step === 4 && bookingResult && (
          <div className={`${styles.successCard} glass-effect`}>
            <div className={styles.successIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h2>¡Cita Confirmada con Éxito!</h2>
            <p className={styles.successIntro}>Su cita ha sido registrada exitosamente en el sistema de gestión clínica San Francisco.</p>
            
            <div className={styles.ticket}>
              <div className={styles.ticketRow}>
                <span>Código de Cita:</span>
                <strong className={styles.ticketCode}>{bookingResult.codigoConfirmacion}</strong>
              </div>
              <div className={styles.ticketRow}>
                <span>Paciente:</span>
                <span>{bookingResult.nombrePaciente}</span>
              </div>
              <div className={styles.ticketRow}>
                <span>RUT:</span>
                <span>{bookingResult.rutPaciente}</span>
              </div>
              <div className={styles.ticketRow}>
                <span>Médico:</span>
                <span>{selectedProfesional?.nombre}</span>
              </div>
              <div className={styles.ticketRow}>
                <span>Sucursal:</span>
                <span>{selectedSucursal?.nombre} ({selectedSucursal?.direccion})</span>
              </div>
              <div className={styles.ticketRow}>
                <span>Fecha y Hora:</span>
                <span className={styles.ticketDateTime}>{bookingResult.fecha} a las {bookingResult.hora}</span>
              </div>
            </div>

            <p className={styles.ticketWarning}>Hemos enviado un correo electrónico con los detalles y las instrucciones para la cita médica.</p>

            <button onClick={handleReset} className={styles.finishBtn}>
              Agendar otra cita
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
