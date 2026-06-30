import { NextResponse } from 'next/server';
import { validarRut, validarTelefono } from '@/utils/validation';
import nodemailer from 'nodemailer';

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

    // Enviar correo de confirmación de forma asíncrona (no bloqueante)
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS
        }
      });

      const mailOptions = {
        from: `"Centro Médico San Francisco" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `Confirmación de Cita Médica - Código ${codigoConfirmacion}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
            <div style="background-color: #0284c7; padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Confirmación de Reserva</h1>
            </div>
            <div style="padding: 30px; background-color: #ffffff;">
              <p style="font-size: 16px; color: #333;">Hola <strong>${nombre}</strong>,</p>
              <p style="font-size: 16px; color: #333;">Tu cita en el Centro Médico San Francisco ha sido confirmada exitosamente.</p>
              
              <div style="background-color: #f8fafc; border-left: 4px solid #0284c7; padding: 15px; margin: 25px 0;">
                <p style="margin: 5px 0; color: #333;"><strong>Código de Reserva:</strong> <span style="color: #0284c7; font-size: 18px;">${codigoConfirmacion}</span></p>
                <p style="margin: 5px 0; color: #333;"><strong>Fecha:</strong> ${fecha}</p>
                <p style="margin: 5px 0; color: #333;"><strong>Hora:</strong> ${hora}</p>
              </div>
              
              <p style="font-size: 14px; color: #666; margin-top: 30px;">
                Por favor, preséntate 15 minutos antes de tu cita en recepción.<br>
                Si necesitas cancelar o reagendar, por favor contáctanos con al menos 24 horas de anticipación.
              </p>
            </div>
            <div style="background-color: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #64748b;">
              © ${new Date().getFullYear()} Centro Médico San Francisco. Todos los derechos reservados.
            </div>
          </div>
        `
      };

      // Disparamos el correo sin hacer await para no retrasar la respuesta al frontend
      transporter.sendMail(mailOptions).catch(err => console.error("Error enviando email:", err));
      
    } catch (emailError) {
      console.error("Error configurando nodemailer:", emailError);
    }

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
