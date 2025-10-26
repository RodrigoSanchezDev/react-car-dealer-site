// Datos de vehículos disponibles en Chile
export const vehiculos = [
  {
    id: 1,
    marca: "Toyota",
    modelo: "Corolla",
    año: 2024,
    precio: 16900000, // CLP
    imagen: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=400&h=300&fit=crop",
    combustible: "Híbrido",
    transmision: "CVT",
    kilometraje: 0,
    color: "Blanco Perla",
    ubicacion: "Santiago",
    descripcion: "El sedan más vendido en Chile. Tecnología híbrida de última generación con consumo excepcional.",
    caracteristicas: ["Toyota Safety Sense", "Pantalla táctil 8''", "Cámara de reversa", "Control crucero adaptativo"]
  },
  {
    id: 2,
    marca: "Chevrolet",
    modelo: "Tracker",
    año: 2024,
    precio: 18500000,
    imagen: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
    combustible: "Gasolina",
    transmision: "Automática",
    kilometraje: 0,
    color: "Rojo Velvet",
    ubicacion: "Valparaíso",
    descripcion: "SUV compacto ideal para la familia chilena. Equipamiento completo y diseño moderno.",
    caracteristicas: ["MyLink", "Cámara 360°", "Sensores estacionamiento", "Climatizador automático"]
  },
  {
    id: 3,
    marca: "Nissan",
    modelo: "Kicks",
    año: 2023,
    precio: 15200000,
    imagen: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
    combustible: "Gasolina",
    transmision: "CVT",
    kilometraje: 5000,
    color: "Azul Océano",
    ubicacion: "Concepción",
    descripcion: "Crossover urbano perfecto para navegar por las calles de Santiago. Económico y confiable.",
    caracteristicas: ["NissanConnect", "Freno de emergencia inteligente", "Luces LED", "Techo flotante"]
  },
  {
    id: 4,
    marca: "Suzuki",
    modelo: "Vitara",
    año: 2024,
    precio: 17800000,
    imagen: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop",
    combustible: "Gasolina",
    transmision: "Manual",
    kilometraje: 0,
    color: "Gris Metalizado",
    ubicacion: "La Serena",
    descripcion: "SUV compacto con tracción 4x4 ALLGRIP. Ideal para aventuras por el norte y sur de Chile.",
    caracteristicas: ["ALLGRIP 4x4", "Hill Hold Control", "Pantalla táctil 7''", "6 airbags"]
  },
  {
    id: 5,
    marca: "Hyundai",
    modelo: "Tucson",
    año: 2024,
    precio: 24900000,
    imagen: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
    combustible: "Gasolina",
    transmision: "Automática",
    kilometraje: 0,
    color: "Blanco Cristal",
    ubicacion: "Santiago",
    descripcion: "SUV premium con diseño Sensuous Sportiness. El equilibrio perfecto entre lujo y funcionalidad.",
    caracteristicas: ["SmartSense", "Bluelink", "Carga inalámbrica", "Techo panorámico"]
  },
  {
    id: 6,
    marca: "Ford",
    modelo: "Territory",
    año: 2023,
    precio: 19900000,
    imagen: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?w=400&h=300&fit=crop",
    combustible: "Gasolina",
    transmision: "Automática",
    kilometraje: 12000,
    color: "Negro Ébano",
    ubicacion: "Viña del Mar",
    descripcion: "SUV mediano con tecnología SYNC. Perfecto para familias que buscan espacio y conectividad.",
    caracteristicas: ["SYNC 3", "FordPass", "Co-Pilot360", "Sensor de punto ciego"]
  }
];

// Datos de sucursales en Chile
export const sucursales = [
  {
    id: 1,
    nombre: "AutoChile Santiago Centro",
    direccion: "Av. Providencia 1234, Providencia",
    telefono: "+56 2 2234 5678",
    horario: "Lunes a Viernes: 9:00 - 19:00, Sábados: 9:00 - 17:00",
    gerente: "Carlos Rodriguez",
    servicios: ["Venta", "Post-venta", "Financiamiento", "Seguros"]
  },
  {
    id: 2,
    nombre: "AutoChile Las Condes",
    direccion: "Av. Apoquindo 4567, Las Condes",
    telefono: "+56 2 2456 7890",
    horario: "Lunes a Viernes: 9:00 - 19:00, Sábados: 9:00 - 17:00",
    gerente: "María González",
    servicios: ["Venta", "Post-venta", "Financiamiento"]
  },
  {
    id: 3,
    nombre: "AutoChile Valparaíso",
    direccion: "Av. Brasil 890, Valparaíso",
    telefono: "+56 32 234 5678",
    horario: "Lunes a Viernes: 9:00 - 18:30, Sábados: 9:00 - 16:00",
    gerente: "Juan Silva",
    servicios: ["Venta", "Financiamiento", "Seguros"]
  },
  {
    id: 4,
    nombre: "AutoChile Concepción",
    direccion: "Av. O'Higgins 1567, Concepción",
    telefono: "+56 41 345 6789",
    horario: "Lunes a Viernes: 9:00 - 18:30, Sábados: 9:00 - 16:00",
    gerente: "Ana Morales",
    servicios: ["Venta", "Post-venta", "Financiamiento"]
  }
];

// Funciones de utilidad
export const formatearPrecio = (precio) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  }).format(precio);
};

export const formatearKilometraje = (km) => {
  if (km === 0) return 'Nuevo (0 km)';
  return `${km.toLocaleString('es-CL')} km`;
};