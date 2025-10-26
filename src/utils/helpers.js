// Funciones de utilidad adicionales para la aplicación

// Función para formatear fechas en español
export const formatearFecha = (fecha) => {
  return new Intl.DateTimeFormat('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(fecha));
};

// Función para validar RUT chileno (básica)
export const validarRUT = (rut) => {
  // Implementación básica para validación de RUT
  if (!rut) return false;
  
  // Remover puntos y guión
  const rutLimpio = rut.replace(/[.-]/g, '');
  
  // Verificar que tenga al menos 8 caracteres
  if (rutLimpio.length < 8) return false;
  
  return true; // Implementación simplificada
};

// Función para generar números de contacto WhatsApp
export const generarLinkWhatsApp = (numero, mensaje = '') => {
  const numeroLimpio = numero.replace(/[^0-9]/g, '');
  const mensajeCodificado = encodeURIComponent(mensaje);
  return `https://wa.me/56${numeroLimpio}?text=${mensajeCodificado}`;
};

// Función para calcular cuota aproximada (simulación)
export const calcularCuotaAproximada = (precio, pie = 0, cuotas = 60) => {
  const montoFinanciar = precio - pie;
  const tasaAnual = 0.12; // 12% anual aproximado
  const tasaMensual = tasaAnual / 12;
  
  if (tasaMensual === 0) return montoFinanciar / cuotas;
  
  const cuota = montoFinanciar * (tasaMensual * Math.pow(1 + tasaMensual, cuotas)) / 
                (Math.pow(1 + tasaMensual, cuotas) - 1);
  
  return Math.round(cuota);
};

// Constantes útiles
export const REGIONES_CHILE = [
  'Arica y Parinacota',
  'Tarapacá',
  'Antofagasta',
  'Atacama',
  'Coquimbo',
  'Valparaíso',
  'Metropolitana',
  'O\'Higgins',
  'Maule',
  'Ñuble',
  'Biobío',
  'Araucanía',
  'Los Ríos',
  'Los Lagos',
  'Aysén',
  'Magallanes'
];

export const MARCAS_POPULARES = [
  'Toyota',
  'Chevrolet',
  'Nissan',
  'Hyundai',
  'Ford',
  'Suzuki',
  'Kia',
  'Volkswagen',
  'Peugeot',
  'Renault'
];