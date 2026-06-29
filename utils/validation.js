/**
 * Valida un RUT chileno (con o sin puntos/guion).
 * @param {string} rut - El RUT a validar.
 * @returns {boolean} - Verdadero si es válido.
 */
export function validarRut(rut) {
  if (!rut || typeof rut !== 'string') return false;
  
  // Limpiar caracteres no deseados (quedar solo con números y K)
  const cleaned = rut.replace(/[^0-9kK]/g, '');
  if (cleaned.length < 8 || cleaned.length > 9) return false;
  
  const body = cleaned.slice(0, -1);
  const dv = cleaned.slice(-1).toLowerCase();
  
  let sum = 0;
  let multiplier = 2;
  
  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i], 10) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }
  
  const expectedDv = 11 - (sum % 11);
  let expectedDvChar = '';
  if (expectedDv === 11) expectedDvChar = '0';
  else if (expectedDv === 10) expectedDvChar = 'k';
  else expectedDvChar = expectedDv.toString();
  
  return dv === expectedDvChar;
}

/**
 * Formatea un RUT chileno sobre la marcha a formato XX.XXX.XXX-X.
 * @param {string} rut - El RUT en bruto.
 * @returns {string} - El RUT formateado.
 */
export function formatearRut(rut) {
  if (!rut) return '';
  let cleaned = rut.replace(/[^0-9kK]/g, '');
  if (cleaned.length === 0) return '';
  
  // Limitar longitud del RUT a 9 caracteres
  cleaned = cleaned.slice(0, 9);
  
  if (cleaned.length === 1) return cleaned;
  
  const body = cleaned.slice(0, -1);
  const dv = cleaned.slice(-1);
  
  let formatted = '';
  if (body.length > 6) {
    formatted = body.replace(/^(\d{1,2})(\d{3})(\d{3})$/, '$1.$2.$3');
  } else if (body.length > 3) {
    formatted = body.replace(/^(\d{1,3})(\d{3})$/, '$1.$2');
  } else {
    formatted = body;
  }
  
  return `${formatted}-${dv}`;
}

/**
 * Valida un número telefónico celular chileno (debe empezar con +569 o 9 y tener 9 dígitos en total tras el 56).
 * @param {string} telefono - El teléfono a validar.
 * @returns {boolean} - Verdadero si es válido.
 */
export function validarTelefono(telefono) {
  if (!telefono || typeof telefono !== 'string') return false;
  const cleaned = telefono.replace(/\s+/g, '').replace(/[^\d+]/g, '');
  
  // Formatos válidos: +569XXXXXXXX (12 caracteres) o 9XXXXXXXX (9 caracteres)
  const regexChileCompleto = /^\+569\d{8}$/;
  const regexChileCorto = /^9\d{8}$/;
  
  return regexChileCompleto.test(cleaned) || regexChileCorto.test(cleaned);
}

/**
 * Formatea un teléfono para que tenga el estándar +56 9 XXXX XXXX.
 * @param {string} val - El valor ingresado por el usuario.
 * @returns {string} - El teléfono formateado.
 */
export function formatearTelefono(val) {
  if (!val) return '';
  let cleaned = val.replace(/[^\d]/g, ''); // Solo números
  
  // Si empieza con 569 y tiene más de 3 dígitos, asumimos que tiene el prefijo de país
  if (cleaned.startsWith('56')) {
    cleaned = cleaned.slice(2); // Trabajamos con la base
  }
  
  // Limitar al largo máximo de un celular chileno (9 dígitos comenzando con 9)
  if (cleaned.length > 9) {
    cleaned = cleaned.slice(0, 9);
  }
  
  if (cleaned.length === 0) return '+56 ';
  if (cleaned.length === 1) return `+56 ${cleaned}`;
  if (cleaned.length <= 5) {
    return `+56 ${cleaned.slice(0, 1)} ${cleaned.slice(1)}`;
  }
  return `+56 ${cleaned.slice(0, 1)} ${cleaned.slice(1, 5)} ${cleaned.slice(5)}`;
}
