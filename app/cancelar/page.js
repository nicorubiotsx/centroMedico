import { Suspense } from 'react';
import CancelarCitaContent from '@/components/CancelarCitaContent';

export default function CancelarCitaPage() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', padding: '1rem' }}>
      <Suspense fallback={<div style={{textAlign: 'center'}}>Cargando datos de la cita...</div>}>
        <CancelarCitaContent />
      </Suspense>
    </div>
  );
}
