import { NextResponse } from 'next/server';
import { validarRut, validarTelefono } from '@/utils/validation';

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, rut, email, telefono, fecha, hora, profesionalId, sucursalId } = body;

    // Validar campos obligatorios
    if (!nombre || !rut || !email || !telefono || !fecha || !hora || !profesionalId || !sucursalId) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios para registrar la cita' },
        { status: 400 }
      );
    }

    // Validar RUT chileno
    if (!validarRut(rut)) {
      return NextResponse.json(
        { error: 'El RUT ingresado no es válido. Verifique el formato y dígito verificador.' },
        { status: 400 }
      );
    }

    // Validar Teléfono chileno
    if (!validarTelefono(telefono)) {
      return NextResponse.json(
        { error: 'El teléfono ingresado no es válido. Debe tener el formato chileno (ej: +56 9 XXXX XXXX o 9XXXXXXXX).' },
        { status: 400 }
      );
    }

    // Generar un ID de cita ficticio y código de confirmación
    const citaId = Math.floor(Math.random() * 900000) + 100000;
    const codigoConfirmacion = `SF-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

    // Simulamos un retraso de red de 1 segundo para hacerlo realista
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      mensaje: 'Cita reservada con éxito en San Francisco',
      cita: {
        id: citaId,
        codigoConfirmacion,
        nombrePaciente: nombre,
        rutPaciente: rut,
        emailPaciente: email,
        telefonoPaciente: telefono,
        fecha,
        hora,
        profesionalId,
        sucursalId,
        estado: 'CONFIRMADA'
      }
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Error al procesar la reserva de la cita' },
      { status: 500 }
    );
  }
}
