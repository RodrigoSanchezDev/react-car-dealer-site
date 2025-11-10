import { useNavigate } from 'react-router-dom';
import { usePosiblesCompras } from '../context/PosiblesComprasContext';
import VehiculoCard from '../components/VehiculoCard';
import { formatearPrecio } from '../data/vehiculos';

const CarritoPosiblesCompras = () => {
  const navigate = useNavigate();
  const { posiblesCompras, limpiarPosiblesCompras, cantidadPosiblesCompras } = usePosiblesCompras();

  // Calcular total
  const precioTotal = posiblesCompras.reduce((total, vehiculo) => total + vehiculo.precio, 0);

  const handleLimpiarTodo = () => {
    if (window.confirm('¿Estás seguro de que deseas limpiar todas las posibles compras?')) {
      limpiarPosiblesCompras();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold text-[#1a365d] mb-2">Posibles Compras</h1>
              <p className="text-gray-600">Vehículos que has marcado como posible compra</p>
            </div>
            <button 
              onClick={() => navigate('/inventario')} 
              className="px-6 py-3 bg-[#1a365d] text-white rounded-lg font-semibold hover:bg-[#c53030] transition-colors flex items-center gap-2"
            >
              ← Volver al Inventario
            </button>
          </div>
        </div>

        {/* Estadísticas y Resumen */}
        {cantidadPosiblesCompras > 0 && (
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <span className="block text-4xl font-bold text-[#1a365d] mb-2">
                {cantidadPosiblesCompras}
              </span>
              <span className="text-gray-600">Vehículos Seleccionados</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <span className="block text-4xl font-bold text-[#27ae60] mb-2">
                {formatearPrecio(precioTotal)}
              </span>
              <span className="text-gray-600">Valor Total</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <span className="block text-4xl font-bold text-[#c53030] mb-2">
                {formatearPrecio(Math.round(precioTotal / cantidadPosiblesCompras))}
              </span>
              <span className="text-gray-600">Promedio por Vehículo</span>
            </div>
          </div>
        )}

        {/* Contenido Principal */}
        {cantidadPosiblesCompras === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <div className="text-8xl mb-6">🛒</div>
            <h3 className="text-2xl font-bold text-[#1a365d] mb-4">
              No hay vehículos en tu lista de posibles compras
            </h3>
            <p className="text-gray-600 mb-8">
              Explora nuestro inventario y marca los vehículos que te interesen
            </p>
            <button 
              onClick={() => navigate('/inventario')} 
              className="px-8 py-4 bg-[#1a365d] text-white rounded-lg font-semibold hover:bg-[#c53030] transition-colors inline-flex items-center gap-2"
            >
              🚗 Explorar Inventario
            </button>
          </div>
        ) : (
          <>
            {/* Barra de acciones */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-bold text-[#1a365d]">
                    Gestiona tus Vehículos de Interés
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Puedes remover vehículos individuales o limpiar toda la lista
                  </p>
                </div>
                <button 
                  onClick={handleLimpiarTodo}
                  className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
                >
                  🗑️ Limpiar Todo
                </button>
              </div>
            </div>

            {/* Grid de vehículos */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {posiblesCompras.map(vehiculo => (
                <VehiculoCard 
                  key={vehiculo.id} 
                  vehiculo={vehiculo}
                  enCarrito={true}
                />
              ))}
            </div>

            {/* Panel de contacto */}
            <div className="bg-gradient-to-r from-[#1a365d] to-[#2d5f8d] rounded-xl shadow-xl p-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-white">¿Listo para dar el siguiente paso?</h2>
                <p className="text-lg mb-6 text-white opacity-90">
                  Nuestro equipo de ventas está listo para ayudarte a encontrar el vehículo perfecto y responder todas tus preguntas
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <button 
                    onClick={() => navigate('/contactanos')}
                    className="px-8 py-4 bg-white text-[#1a365d] rounded-lg font-bold hover:bg-[#ffd700] transition-colors"
                  >
                    📞 Contactar Asesor
                  </button>
                  <button 
                    onClick={() => navigate('/como-comprar')}
                    className="px-8 py-4 bg-[#c53030] text-white rounded-lg font-bold hover:bg-[#a02828] transition-colors"
                  >
                    ℹ️ Cómo Comprar
                  </button>
                </div>
              </div>
            </div>

            {/* Información adicional */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-3">🔒</div>
                <h4 className="font-bold text-[#1a365d] mb-2">Compra Segura</h4>
                <p className="text-gray-600 text-sm">
                  Todos nuestros vehículos cuentan con garantía y documentación en regla
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-3">💰</div>
                <h4 className="font-bold text-[#1a365d] mb-2">Financiamiento</h4>
                <p className="text-gray-600 text-sm">
                  Ofrecemos opciones de financiamiento flexibles adaptadas a tu presupuesto
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-3">🚗</div>
                <h4 className="font-bold text-[#1a365d] mb-2">Test Drive</h4>
                <p className="text-gray-600 text-sm">
                  Agenda un test drive y experimenta el vehículo antes de decidir
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CarritoPosiblesCompras;
