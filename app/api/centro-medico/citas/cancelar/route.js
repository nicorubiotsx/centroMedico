import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { citaId, codigo } = await request.json();

    if (!citaId || !codigo) {
      return NextResponse.json({ error: 'Faltan datos de la cita' }, { status: 400 });
    }

    // Aquí conectaríamos con la API de Medilink usando el token para hacer un DELETE o anular la cita.
    // Ej: fetch(`https://api.medilink2.healthatom.com/citas/${citaId}`, { method: 'DELETE', headers: ... })

    // Simulamos latencia de red de 800ms
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({ success: true, mensaje: 'Cita cancelada con éxito' });
  } catch (error) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
