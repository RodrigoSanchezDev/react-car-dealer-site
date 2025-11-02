import { useState } from 'react';
import VehiculoCard from '../components/VehiculoCard';
import { useVehiculos } from '../context/VehiculosContext';

const Home = () => {
  const { vehiculos } = useVehiculos();
  const [filtroMarca, setFiltroMarca] = useState('');
  const [filtroTipo, setFiltroTipo] = useState('');

  // Obtener marcas únicas
  const marcasUnicas = [...new Set(vehiculos.map(v => v.marca))];

  // Filtrar vehículos
  const vehiculosFiltrados = vehiculos.filter(vehiculo => {
    const cumpleMarca = !filtroMarca || vehiculo.marca === filtroMarca;
    const cumpleTipo = !filtroTipo || 
      (filtroTipo === 'suv' && ['Tracker', 'Kicks', 'Vitara', 'Tucson', 'Territory'].includes(vehiculo.modelo)) ||
      (filtroTipo === 'sedan' && ['Corolla'].includes(vehiculo.modelo));
    
    return cumpleMarca && cumpleTipo;
  });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=800&fit=crop)',
      }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Encuentra Tu Auto Ideal en Chile</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Más de 15 años conectando a chilenos con el vehículo perfecto. 
              Financiamiento, garantía y el mejor servicio post-venta del país.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-8 py-4 bg-[#c53030] text-white rounded-lg font-semibold hover:bg-[#a02020] transition-colors">
                Ver Vehículos
              </button>
              <button className="px-8 py-4 bg-white text-[#1a365d] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Financiamiento
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#1a365d] hover:shadow-xl transition-all">
              <h3 className="text-5xl font-bold text-[#1a365d] mb-2">15+</h3>
              <p className="text-gray-600">Años de experiencia</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#1a365d] hover:shadow-xl transition-all">
              <h3 className="text-5xl font-bold text-[#1a365d] mb-2">5,000+</h3>
              <p className="text-gray-600">Clientes satisfechos</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#1a365d] hover:shadow-xl transition-all">
              <h3 className="text-5xl font-bold text-[#1a365d] mb-2">10</h3>
              <p className="text-gray-600">Marcas disponibles</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#1a365d] hover:shadow-xl transition-all">
              <h3 className="text-5xl font-bold text-[#1a365d] mb-2">4</h3>
              <p className="text-gray-600">Sucursales en Chile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a365d] mb-6">Nuestros Vehículos Disponibles</h2>
          <div className="flex gap-4 justify-center flex-wrap max-w-4xl mx-auto">
            <select 
              value={filtroMarca} 
              onChange={(e) => setFiltroMarca(e.target.value)}
              className="px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors min-w-[200px]"
            >
              <option value="">Todas las marcas</option>
              {marcasUnicas.map(marca => (
                <option key={marca} value={marca}>{marca}</option>
              ))}
            </select>

            <select 
              value={filtroTipo} 
              onChange={(e) => setFiltroTipo(e.target.value)}
              className="px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors min-w-[200px]"
            >
              <option value="">Todos los tipos</option>
              <option value="sedan">Sedán</option>
              <option value="suv">SUV/Crossover</option>
            </select>

            <button 
              onClick={() => {
                setFiltroMarca('');
                setFiltroTipo('');
              }}
              className="px-6 py-3 bg-gray-200 text-[#1a365d] rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Limpiar Filtros
            </button>
          </div>
        </div>
      </section>

      {/* Catálogo de Vehículos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {vehiculosFiltrados.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No se encontraron vehículos</h3>
              <p className="text-gray-600">Intenta ajustar los filtros para ver más opciones.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vehiculosFiltrados.map(vehiculo => (
                <VehiculoCard key={vehiculo.id} vehiculo={vehiculo} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a365d] mb-12">¿Por Qué Elegir AutoChile?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Financiamiento Flexible</h3>
              <p className="text-gray-600">Planes de financiamiento adaptados a tu presupuesto. Trabaja con los principales bancos de Chile.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Garantía Extendida</h3>
              <p className="text-gray-600">Todos nuestros vehículos incluyen garantía de fábrica más opciones de garantía extendida.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Servicio Técnico</h3>
              <p className="text-gray-600">Red de talleres autorizados en todo Chile. Mantención y reparaciones con repuestos originales.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="text-5xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Documentación</h3>
              <p className="text-gray-600">Nos encargamos de todos los trámites. Transferencia, seguro obligatorio y permisos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2d3748]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">¿Listo para tu próximo auto?</h2>
            <p className="text-xl mb-8 text-gray-200">Nuestro equipo de expertos está listo para ayudarte a encontrar el vehículo perfecto.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:+56222345678" className="px-8 py-4 bg-white text-[#1a365d] rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                📞 Llamar Ahora
              </a>
              <a href="https://wa.me/56922345678" className="px-8 py-4 bg-[#c53030] text-white rounded-lg font-semibold hover:bg-[#a02020] transition-colors inline-block" target="_blank" rel="noopener noreferrer">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
