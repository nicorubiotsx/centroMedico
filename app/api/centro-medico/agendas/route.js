import { NextResponse } from 'next/server';

// Datos estáticos simulando la base de datos
const SUCURSALES = [
  { id: 1, nombre: 'Sucursal Las Cabras ', direccion: 'Av. Providencia 1240, Oficina 402' },

];

const PROFESIONALES = [
  { id: 101, nombre: 'Dr. Alejandro Silva', especialidad: 'Cardiología', sucursalId: 1, rating: 4.9, imagen: '/images/doctor-silva.jpg', diasTrabajo: [1, 2, 3, 4, 5] },
  { id: 102, nombre: 'Dra. Beatriz Fuentes', especialidad: 'Pediatría', sucursalId: 2, rating: 4.8, imagen: '/images/doctor-fuentes.jpg', diasTrabajo: [1, 3, 5] },
  { id: 103, nombre: 'Dr. Carlos Mendoza', especialidad: 'Medicina General', sucursalId: 1, rating: 4.7, imagen: '/images/doctor-mendoza.jpg', diasTrabajo: [2, 4, 5] },
  { id: 104, nombre: 'Dr. Roberto Díaz', especialidad: 'Traumatología', sucursalId: 2, rating: 4.9, imagen: '/images/doctor-diaz.jpg', diasTrabajo: [1, 2, 3] },
  { id: 105, nombre: 'Dra. Sofía Vergara', especialidad: 'Dermatología', sucursalId: 1, rating: 5.0, imagen: '/images/doctor-vergara.jpg', diasTrabajo: [3, 4, 5] },
  { id: 106, nombre: 'Dra. Camila Soto', especialidad: 'Ginecología', sucursalId: 2, rating: 4.8, imagen: '/images/doctor-soto.jpg', diasTrabajo: [1, 2, 4, 5] },
  { id: 107, nombre: 'Dr. Martín López', especialidad: 'Odontología', sucursalId: 1, rating: 4.6, imagen: '/images/doctor-lopez.jpg', diasTrabajo: [1, 3, 4] }
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const sucursalId = parseInt(searchParams.get('sucursalId'));
  const profesionalId = parseInt(searchParams.get('profesionalId'));

  // Si solo piden la info básica de sucursales y médicos (para los selectores)
  if (!sucursalId && !profesionalId) {
    const hoyDate = new Date();
    // Ajustar a zona horaria local de Chile para evitar saltos de día por UTC
    const diaActual = hoyDate.getDay(); 
    const horaActual = hoyDate.getHours();

    const profesionalesConDisponibilidad = PROFESIONALES.map(p => {
      // Disponible hoy si el dia actual está en sus días de trabajo y aún no son las 23:00 (última cita de prueba)
      const disponibleHoy = p.diasTrabajo.includes(diaActual) && horaActual < 23;
      return { ...p, disponibleHoy };
    });

    return NextResponse.json({
      sucursales: SUCURSALES,
      profesionales: profesionalesConDisponibilidad
    });
  }

  // Si se solicita la agenda específica de un médico en una sucursal
  const profesional = PROFESIONALES.find(p => p.id === profesionalId && p.sucursalId === sucursalId);

  if (!profesional) {
    return NextResponse.json({ error: 'Profesional no encontrado en esta sucursal' }, { status: 404 });
  }

  // Generamos horas disponibles de forma dinámica para los próximos 5 días hábiles
  const agendas = [];
  const hoy = new Date();

  // Lista de horas del día (incluimos las 23:00 para pruebas)
  const bloquesHorarios = ['09:00', '09:45', '10:30', '11:15', '12:00', '14:00', '14:45', '15:30', '16:15', '17:00', '23:00'];

  for (let i = 0; i < 5; i++) {
    const fecha = new Date(hoy);
    fecha.setDate(hoy.getDate() + i);

    // Saltamos fines de semana y días que el médico no trabaja
    if (fecha.getDay() === 0 || fecha.getDay() === 6 || !profesional.diasTrabajo.includes(fecha.getDay())) {
      continue;
    }

    const fechaStr = fecha.toISOString().split('T')[0];
    const hoyStr = hoy.toISOString().split('T')[0];

    // Seleccionar aleatoriamente algunos bloques horarios para simular disponibilidad
    let bloquesDisponibles = bloquesHorarios.filter(() => Math.random() > 0.4);

    // Si es hoy, forzamos siempre agregar las 23:00 para que se pueda testear de noche
    if (fechaStr === hoyStr && !bloquesDisponibles.includes('23:00')) {
      bloquesDisponibles.push('23:00');
      bloquesDisponibles.sort();
    }

    if (bloquesDisponibles.length > 0) {
      agendas.push({
        fecha: fechaStr,
        diaSemana: fecha.toLocaleDateString('es-ES', { weekday: 'long' }),
        diaMes: fecha.getDate(),
        mes: fecha.toLocaleDateString('es-ES', { month: 'short' }),
        horas: bloquesDisponibles
      });
    }
  }

  return NextResponse.json({
    profesional,
    agendas
  });
}
