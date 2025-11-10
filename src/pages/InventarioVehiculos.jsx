import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVehiculos } from '../context/VehiculosContext';
import { usePosiblesCompras } from '../context/PosiblesComprasContext';
import VehiculoCard from '../components/VehiculoCard';

const InventarioVehiculos = () => {
  const navigate = useNavigate();
  const { vehiculos, eliminarVehiculo } = useVehiculos();
  const { posiblesCompras } = usePosiblesCompras();
  const [busqueda, setBusqueda] = useState('');
  const [filtros, setFiltros] = useState({
    marca: '',
    modelo: '',
    añoMin: '',
    añoMax: '',
    precioMin: '',
    precioMax: ''
  });

  // Obtener valores únicos para los filtros
  const marcasUnicas = [...new Set(vehiculos.map(v => v.marca))].sort();
  const modelosUnicos = [...new Set(vehiculos.map(v => v.modelo))].sort();
  const añosUnicos = [...new Set(vehiculos.map(v => v.año))].sort((a, b) => b - a);

  // Obtener IDs de posibles compras para filtrarlos
  const idsPosiblesCompras = posiblesCompras.map(v => v.id);

  // Filtrar vehículos (excluir los que están en posibles compras)
  const vehiculosFiltrados = vehiculos.filter(vehiculo => {
    // Excluir vehículos que ya están en posibles compras
    if (idsPosiblesCompras.includes(vehiculo.id)) {
      return false;
    }
    const cumpleBusqueda = 
      vehiculo.marca.toLowerCase().includes(busqueda.toLowerCase()) ||
      vehiculo.modelo.toLowerCase().includes(busqueda.toLowerCase()) ||
      vehiculo.ubicacion.toLowerCase().includes(busqueda.toLowerCase());
    
    const cumpleMarca = !filtros.marca || vehiculo.marca === filtros.marca;
    const cumpleModelo = !filtros.modelo || vehiculo.modelo === filtros.modelo;
    
    const cumpleAñoMin = !filtros.añoMin || vehiculo.año >= parseInt(filtros.añoMin);
    const cumpleAñoMax = !filtros.añoMax || vehiculo.año <= parseInt(filtros.añoMax);
    
    const cumplePrecioMin = !filtros.precioMin || vehiculo.precio >= parseInt(filtros.precioMin);
    const cumplePrecioMax = !filtros.precioMax || vehiculo.precio <= parseInt(filtros.precioMax);
    
    return cumpleBusqueda && cumpleMarca && cumpleModelo && cumpleAñoMin && cumpleAñoMax && cumplePrecioMin && cumplePrecioMax;
  });

  const handleEliminar = (id, marca, modelo) => {
    if (window.confirm(`¿Estás seguro de que deseas eliminar el ${marca} ${modelo}?`)) {
      eliminarVehiculo(id);
    }
  };

  const handleAgregarNuevo = () => {
    navigate('/agregar-vehiculo');
  };

  const handleFiltroChange = (campo, valor) => {
    setFiltros(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const limpiarFiltros = () => {
    setBusqueda('');
    setFiltros({
      marca: '',
      modelo: '',
      añoMin: '',
      añoMax: '',
      precioMin: '',
      precioMax: ''
    });
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
          <h3 className="text-xl font-bold text-[#1a365d] mb-4">Filtros de Búsqueda</h3>
          
          {/* Búsqueda general */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="🔍 Buscar por marca, modelo o ubicación..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
            />
          </div>

          {/* Filtros específicos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {/* Marca */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Marca</label>
              <select
                value={filtros.marca}
                onChange={(e) => handleFiltroChange('marca', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
              >
                <option value="">Todas las marcas</option>
                {marcasUnicas.map(marca => (
                  <option key={marca} value={marca}>{marca}</option>
                ))}
              </select>
            </div>

            {/* Modelo */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Modelo</label>
              <select
                value={filtros.modelo}
                onChange={(e) => handleFiltroChange('modelo', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
              >
                <option value="">Todos los modelos</option>
                {modelosUnicos.map(modelo => (
                  <option key={modelo} value={modelo}>{modelo}</option>
                ))}
              </select>
            </div>

            {/* Año Mínimo */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Año Mínimo</label>
              <select
                value={filtros.añoMin}
                onChange={(e) => handleFiltroChange('añoMin', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
              >
                <option value="">Sin mínimo</option>
                {añosUnicos.map(año => (
                  <option key={`min-${año}`} value={año}>{año}</option>
                ))}
              </select>
            </div>

            {/* Año Máximo */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Año Máximo</label>
              <select
                value={filtros.añoMax}
                onChange={(e) => handleFiltroChange('añoMax', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
              >
                <option value="">Sin máximo</option>
                {añosUnicos.map(año => (
                  <option key={`max-${año}`} value={año}>{año}</option>
                ))}
              </select>
            </div>

            {/* Precio Mínimo */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Precio Mínimo (CLP)</label>
              <input
                type="number"
                placeholder="Ej: 10000000"
                value={filtros.precioMin}
                onChange={(e) => handleFiltroChange('precioMin', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
                min="0"
              />
            </div>

            {/* Precio Máximo */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Precio Máximo (CLP)</label>
              <input
                type="number"
                placeholder="Ej: 30000000"
                value={filtros.precioMax}
                onChange={(e) => handleFiltroChange('precioMax', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
                min="0"
              />
            </div>
          </div>

          {/* Botón Limpiar */}
          <div className="flex justify-end">
            <button
              onClick={limpiarFiltros}
              className="px-8 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors flex items-center gap-2"
            >
              🔄 Limpiar Filtros
            </button>
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

        {/* Grid de vehículos con cards */}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehiculosFiltrados.map(vehiculo => (
              <VehiculoCard 
                key={vehiculo.id} 
                vehiculo={vehiculo} 
                showEliminar={true}
                onEliminar={handleEliminar}
                showPosibleCompra={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InventarioVehiculos;
