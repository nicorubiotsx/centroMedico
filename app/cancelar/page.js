'use client';
import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

function CancelarCitaContent() {
  const searchParams = useSearchParams();
  const citaId = searchParams.get('id');
  const codigo = searchParams.get('codigo');
  
  const [status, setStatus] = useState('confirming'); // confirming, loading, success, error

  if (!citaId || !codigo) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Enlace inválido</h1>
        <p className={styles.text}>No se encontraron los datos de la cita a cancelar.</p>
        <Link href="/" className={styles.btnKeep}>Volver al inicio</Link>
      </div>
    );
  }

  const handleCancel = async () => {
    setStatus('loading');
    try {
      const res = await fetch('/api/centro-medico/citas/cancelar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ citaId, codigo })
      });
      
      if (!res.ok) throw new Error('Error al cancelar');
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className={styles.container}>
      {status === 'confirming' || status === 'loading' || status === 'error' ? (
        <>
          <h1 className={styles.title}>¿Cancelar Cita?</h1>
          <p className={styles.text}>
            Estás a punto de cancelar la cita con el código <span className={styles.highlight}>{codigo}</span>. 
            Esta acción no se puede deshacer.
          </p>
          {status === 'error' && (
            <p style={{ color: '#ef4444', marginBottom: '1rem' }}>Hubo un problema al cancelar. Por favor, intenta de nuevo.</p>
          )}
          <div className={styles.actions}>
            <Link href="/" className={styles.btnKeep}>No, mantener cita</Link>
            <button 
              onClick={handleCancel} 
              className={styles.btnCancel}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Cancelando...' : 'Sí, cancelar cita'}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.successIcon}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className={styles.title}>Cita Cancelada</h1>
          <p className={styles.text}>
            Tu cita ha sido anulada exitosamente. La agenda ha sido liberada.
          </p>
          <Link href="/reserva" className={styles.btnKeep}>Agendar nueva cita</Link>
        </>
      )}
    </div>
  );
}

export default function CancelarCitaPage() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', padding: '1rem' }}>
      <Suspense fallback={<div style={{textAlign: 'center'}}>Cargando datos de la cita...</div>}>
        <CancelarCitaContent />
      </Suspense>
    </div>
  );
}
