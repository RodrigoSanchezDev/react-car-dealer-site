import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVehiculos } from '../context/VehiculosContext';
import { formatearPrecio, formatearKilometraje } from '../data/vehiculos';

const InventarioVehiculos = () => {
  const navigate = useNavigate();
  const { vehiculos, eliminarVehiculo } = useVehiculos();
  const [busqueda, setBusqueda] = useState('');
  const [filtroMarca, setFiltroMarca] = useState('');

  // Obtener marcas únicas
  const marcasUnicas = [...new Set(vehiculos.map(v => v.marca))].sort();

  // Filtrar vehículos
  const vehiculosFiltrados = vehiculos.filter(vehiculo => {
    const cumpleBusqueda = 
      vehiculo.marca.toLowerCase().includes(busqueda.toLowerCase()) ||
      vehiculo.modelo.toLowerCase().includes(busqueda.toLowerCase()) ||
      vehiculo.ubicacion.toLowerCase().includes(busqueda.toLowerCase());
    
    const cumpleMarca = !filtroMarca || vehiculo.marca === filtroMarca;
    
    return cumpleBusqueda && cumpleMarca;
  });

  const handleEliminar = (id, marca, modelo) => {
    if (window.confirm(`¿Estás seguro de que deseas eliminar el ${marca} ${modelo}?`)) {
      eliminarVehiculo(id);
    }
  };

  const handleAgregarNuevo = () => {
    navigate('/agregar-vehiculo');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="flex justify-between items-start mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-4xl font-bold text-[#1a365d] mb-2">Inventario de Vehículos</h1>
            <p className="text-gray-600">Gestiona todos los vehículos disponibles en el sistema</p>
          </div>
          <button 
            onClick={handleAgregarNuevo} 
            className="px-6 py-3 bg-[#c53030] text-white rounded-lg font-semibold hover:bg-[#1a365d] transition-colors flex items-center gap-2"
          >
            ➕ Agregar Nuevo Vehículo
          </button>
        </div>

        {/* Controles de filtrado y búsqueda */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="text"
                placeholder="🔍 Buscar por marca, modelo o ubicación..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
              />
            </div>
            
            <div className="flex gap-3">
              <select
                value={filtroMarca}
                onChange={(e) => setFiltroMarca(e.target.value)}
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
              >
                <option value="">Todas las marcas</option>
                {marcasUnicas.map(marca => (
                  <option key={marca} value={marca}>{marca}</option>
                ))}
              </select>

              <button
                onClick={() => {
                  setBusqueda('');
                  setFiltroMarca('');
                }}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors whitespace-nowrap"
              >
                Limpiar Filtros
              </button>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <span className="block text-4xl font-bold text-[#1a365d] mb-2">{vehiculos.length}</span>
            <span className="text-gray-600">Total Vehículos</span>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <span className="block text-4xl font-bold text-[#c53030] mb-2">{vehiculosFiltrados.length}</span>
            <span className="text-gray-600">Resultados</span>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <span className="block text-4xl font-bold text-[#1a365d] mb-2">{marcasUnicas.length}</span>
            <span className="text-gray-600">Marcas</span>
          </div>
        </div>

        {/* Tabla de vehículos */}
        {vehiculosFiltrados.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-4">No se encontraron vehículos</h3>
            <p className="text-gray-600 mb-6">
              {vehiculos.length === 0 
                ? 'Comienza agregando tu primer vehículo al inventario.' 
                : 'Intenta ajustar los filtros de búsqueda.'}
            </p>
            {vehiculos.length === 0 && (
              <button 
                onClick={handleAgregarNuevo} 
                className="px-8 py-4 bg-[#1a365d] text-white rounded-lg font-semibold hover:bg-[#c53030] transition-colors"
              >
                Agregar Primer Vehículo
              </button>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1a365d] text-white">
                  <tr>
                    <th className="px-4 py-4 text-left text-sm font-semibold">ID</th>
                    <th className="px-4 py-4 text-left text-sm font-semibold">Marca</th>
                    <th className="px-4 py-4 text-left text-sm font-semibold">Modelo</th>
                    <th className="px-4 py-4 text-left text-sm font-semibold">Año</th>
                    <th className="px-4 py-4 text-left text-sm font-semibold">Precio</th>
                    <th className="px-4 py-4 text-left text-sm font-semibold">Kilometraje</th>
                    <th className="px-4 py-4 text-left text-sm font-semibold">Combustible</th>
                    <th className="px-4 py-4 text-left text-sm font-semibold">Transmisión</th>
                    <th className="px-4 py-4 text-left text-sm font-semibold">Color</th>
                    <th className="px-4 py-4 text-left text-sm font-semibold">Ubicación</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {vehiculosFiltrados.map(vehiculo => (
                    <tr key={vehiculo.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-sm text-gray-700">{vehiculo.id}</td>
                      <td className="px-4 py-4 text-sm font-semibold text-[#1a365d]">{vehiculo.marca}</td>
                      <td className="px-4 py-4 text-sm text-gray-700">{vehiculo.modelo}</td>
                      <td className="px-4 py-4 text-sm text-gray-700">{vehiculo.año}</td>
                      <td className="px-4 py-4 text-sm font-bold text-[#c53030]">{formatearPrecio(vehiculo.precio)}</td>
                      <td className="px-4 py-4 text-sm text-gray-700">{formatearKilometraje(vehiculo.kilometraje)}</td>
                      <td className="px-4 py-4">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                          {vehiculo.combustible}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">{vehiculo.transmision}</td>
                      <td className="px-4 py-4 text-sm text-gray-700">{vehiculo.color}</td>
                      <td className="px-4 py-4">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                          📍 {vehiculo.ubicacion}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button
                          onClick={() => handleEliminar(vehiculo.id, vehiculo.marca, vehiculo.modelo)}
                          className="inline-flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                          title="Eliminar vehículo"
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InventarioVehiculos;
