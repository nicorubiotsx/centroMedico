import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { citaId, codigo } = await request.json();

    if (!citaId || !codigo) {
      return NextResponse.json({ error: 'Faltan datos de la cita' }, { status: 400 });
    }

    const medilinkToken = process.env.MEDILINK_API_TOKEN;

    if (medilinkToken) {
      // Llamada real a la API de Medilink para cambiar el estado de la cita a Cancelada
      // Nota: El id_estado para "Cancelado" depende de la clínica (se obtiene con GET /citas/estados). 
      // Por defecto, asumiremos un cambio de estado estándar.
      const medilinkRes = await fetch(`https://api.medilink2.healthatom.com/citas/${citaId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Token ${medilinkToken}`,
          'Content-Type': 'application/json'
        },
        // Enviamos el ID de estado correspondiente a "Anulado/Cancelado" por el paciente
        body: JSON.stringify({ id_estado: 3 }) // 3 suele ser el estándar para cancelado, ajusta según GET /citas/estados
      });

      if (!medilinkRes.ok) {
        console.error("Error de la API de Medilink al cancelar:", await medilinkRes.text());
        return NextResponse.json({ error: 'No se pudo cancelar la cita en Medilink' }, { status: 502 });
      }
    } else {
      // Simulamos latencia de red de 800ms solo si no hay token configurado (modo pruebas local)
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    return NextResponse.json({ success: true, mensaje: 'Cita cancelada con éxito' });
  } catch (error) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
