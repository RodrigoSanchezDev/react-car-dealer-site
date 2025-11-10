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
    caracteristicas: ["Toyota Safety Sense", "Pantalla táctil 8''", "Cámara de reversa", "Control crucero adaptativo"],
    fichaTecnica: {
      motor: "1.8L Híbrido",
      potencia: "122 HP",
      torque: "142 Nm",
      cilindros: "4 en línea",
      consumoCombinado: "4.5 L/100km",
      consumoCiudad: "4.2 L/100km",
      consumoCarretera: "4.8 L/100km",
      traccion: "Delantera",
      capacidadEstanque: "43 litros",
      aceleracion0a100: "10.5 segundos",
      velocidadMaxima: "180 km/h",
      dimensiones: "4,630 x 1,780 x 1,435 mm",
      peso: "1,395 kg",
      capacidadMaletero: "470 litros",
      pasajeros: "5 personas"
    }
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
    caracteristicas: ["MyLink", "Cámara 360°", "Sensores estacionamiento", "Climatizador automático"],
    fichaTecnica: {
      motor: "1.2L Turbo",
      potencia: "133 HP",
      torque: "210 Nm",
      cilindros: "3 en línea",
      consumoCombinado: "6.2 L/100km",
      consumoCiudad: "7.1 L/100km",
      consumoCarretera: "5.5 L/100km",
      traccion: "Delantera",
      capacidadEstanque: "50 litros",
      aceleracion0a100: "10.9 segundos",
      velocidadMaxima: "188 km/h",
      dimensiones: "4,406 x 1,788 x 1,660 mm",
      peso: "1,315 kg",
      capacidadMaletero: "430 litros",
      pasajeros: "5 personas"
    }
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
    caracteristicas: ["NissanConnect", "Freno de emergencia inteligente", "Luces LED", "Techo flotante"],
    fichaTecnica: {
      motor: "1.6L",
      potencia: "118 HP",
      torque: "149 Nm",
      cilindros: "4 en línea",
      consumoCombinado: "6.8 L/100km",
      consumoCiudad: "7.8 L/100km",
      consumoCarretera: "6.0 L/100km",
      traccion: "Delantera",
      capacidadEstanque: "41 litros",
      aceleracion0a100: "11.7 segundos",
      velocidadMaxima: "170 km/h",
      dimensiones: "4,295 x 1,760 x 1,590 mm",
      peso: "1,150 kg",
      capacidadMaletero: "432 litros",
      pasajeros: "5 personas"
    }
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
    caracteristicas: ["ALLGRIP 4x4", "Hill Hold Control", "Pantalla táctil 7''", "6 airbags"],
    fichaTecnica: {
      motor: "1.4L Turbo",
      potencia: "129 HP",
      torque: "220 Nm",
      cilindros: "4 en línea",
      consumoCombinado: "6.5 L/100km",
      consumoCiudad: "7.3 L/100km",
      consumoCarretera: "5.9 L/100km",
      traccion: "4x4 ALLGRIP",
      capacidadEstanque: "47 litros",
      aceleracion0a100: "10.2 segundos",
      velocidadMaxima: "190 km/h",
      dimensiones: "4,175 x 1,775 x 1,610 mm",
      peso: "1,240 kg",
      capacidadMaletero: "375 litros",
      pasajeros: "5 personas"
    }
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
    caracteristicas: ["SmartSense", "Bluelink", "Carga inalámbrica", "Techo panorámico"],
    fichaTecnica: {
      motor: "2.0L",
      potencia: "157 HP",
      torque: "192 Nm",
      cilindros: "4 en línea",
      consumoCombinado: "7.8 L/100km",
      consumoCiudad: "9.2 L/100km",
      consumoCarretera: "6.7 L/100km",
      traccion: "4WD",
      capacidadEstanque: "62 litros",
      aceleracion0a100: "10.5 segundos",
      velocidadMaxima: "185 km/h",
      dimensiones: "4,500 x 1,865 x 1,650 mm",
      peso: "1,620 kg",
      capacidadMaletero: "620 litros",
      pasajeros: "5 personas"
    }
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
    caracteristicas: ["SYNC 3", "FordPass", "Co-Pilot360", "Sensor de punto ciego"],
    fichaTecnica: {
      motor: "1.5L EcoBoost",
      potencia: "143 HP",
      torque: "225 Nm",
      cilindros: "3 en línea",
      consumoCombinado: "7.2 L/100km",
      consumoCiudad: "8.5 L/100km",
      consumoCarretera: "6.2 L/100km",
      traccion: "Delantera",
      capacidadEstanque: "50 litros",
      aceleracion0a100: "11.8 segundos",
      velocidadMaxima: "175 km/h",
      dimensiones: "4,580 x 1,936 x 1,674 mm",
      peso: "1,585 kg",
      capacidadMaletero: "448 litros",
      pasajeros: "5 personas"
    }
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