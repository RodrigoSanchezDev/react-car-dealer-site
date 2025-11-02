import { createContext, useContext, useState } from 'react';
import { vehiculos as vehiculosIniciales } from '../data/vehiculos';

// Crear el contexto
const VehiculosContext = createContext();

// Hook personalizado para usar el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const useVehiculos = () => {
  const context = useContext(VehiculosContext);
  if (!context) {
    throw new Error('useVehiculos debe usarse dentro de un VehiculosProvider');
  }
  return context;
};

// Provider del contexto
export const VehiculosProvider = ({ children }) => {
  const [vehiculos, setVehiculos] = useState(vehiculosIniciales);

  // Función para agregar un nuevo vehículo
  const agregarVehiculo = (nuevoVehiculo) => {
    const vehiculoConId = {
      ...nuevoVehiculo,
      id: vehiculos.length > 0 ? Math.max(...vehiculos.map(v => v.id)) + 1 : 1,
    };
    setVehiculos([...vehiculos, vehiculoConId]);
    return vehiculoConId;
  };

  // Función para eliminar un vehículo
  const eliminarVehiculo = (id) => {
    setVehiculos(vehiculos.filter(v => v.id !== id));
  };

  // Función para actualizar un vehículo
  const actualizarVehiculo = (id, datosActualizados) => {
    setVehiculos(vehiculos.map(v => 
      v.id === id ? { ...v, ...datosActualizados } : v
    ));
  };

  const value = {
    vehiculos,
    agregarVehiculo,
    eliminarVehiculo,
    actualizarVehiculo
  };

  return (
    <VehiculosContext.Provider value={value}>
      {children}
    </VehiculosContext.Provider>
  );
};
