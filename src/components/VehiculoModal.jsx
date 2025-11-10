import { createPortal } from 'react-dom';
import { formatearPrecio, formatearKilometraje } from '../data/vehiculos';

const VehiculoModal = ({ vehiculo, isOpen, onClose }) => {
  if (!isOpen || !vehiculo) return null;

  const {
    marca,
    modelo,
    año,
    precio,
    imagen,
    combustible,
    transmision,
    kilometraje,
    color,
    ubicacion,
    descripcion,
    caracteristicas,
    fichaTecnica
  } = vehiculo;

  const modalContent = (
    <div className="fixed inset-0 z-50 overflow-y-auto" onClick={onClose}>
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Overlay */}
        <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" aria-hidden="true"></div>

        {/* Modal */}
        <div 
          className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header con imagen */}
          <div className="relative">
            <img 
              src={imagen} 
              alt={`${marca} ${modelo}`}
              className="w-full h-80 object-cover"
            />
            <div className="absolute top-4 right-4 bg-[#1a365d] text-white px-6 py-3 rounded-lg font-bold shadow-lg text-xl">
              {año}
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 left-4 bg-white text-gray-800 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-lg transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Contenido */}
          <div className="p-8">
            {/* Título y precio */}
            <div className="mb-6 pb-6 border-b-2 border-gray-200">
              <h2 className="text-4xl font-bold text-[#1a365d] mb-3">
                {marca} {modelo}
              </h2>
              <p className="text-[#27ae60] text-4xl font-bold mb-4">{formatearPrecio(precio)}</p>
              <p className="text-gray-700 text-lg">{descripcion}</p>
            </div>

            {/* Información básica */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">⛽</div>
                <div className="text-xs text-gray-600 mb-1">Combustible</div>
                <div className="font-semibold text-[#1a365d]">{combustible}</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">⚙️</div>
                <div className="text-xs text-gray-600 mb-1">Transmisión</div>
                <div className="font-semibold text-[#1a365d]">{transmision}</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🎨</div>
                <div className="text-xs text-gray-600 mb-1">Color</div>
                <div className="font-semibold text-[#1a365d]">{color}</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🏃‍♂️</div>
                <div className="text-xs text-gray-600 mb-1">Kilometraje</div>
                <div className="font-semibold text-[#1a365d]">{formatearKilometraje(kilometraje)}</div>
              </div>
            </div>

            {/* Características */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Características Destacadas</h3>
              <div className="flex flex-wrap gap-3">
                {caracteristicas.map((caracteristica, index) => (
                  <span 
                    key={index} 
                    className="bg-gradient-to-r from-[#1a365d] to-[#2d5f8d] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md"
                  >
                    ✓ {caracteristica}
                  </span>
                ))}
              </div>
            </div>

            {/* Ficha Técnica */}
            {fichaTecnica && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#1a365d] mb-4 pb-2 border-b-2 border-gray-200">
                  Ficha Técnica
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Motor:</span>
                      <span className="text-[#1a365d]">{fichaTecnica.motor}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Potencia:</span>
                      <span className="text-[#1a365d]">{fichaTecnica.potencia}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Torque:</span>
                      <span className="text-[#1a365d]">{fichaTecnica.torque}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Cilindros:</span>
                      <span className="text-[#1a365d]">{fichaTecnica.cilindros}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Tracción:</span>
                      <span className="text-[#1a365d]">{fichaTecnica.traccion}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">0-100 km/h:</span>
                      <span className="text-[#1a365d]">{fichaTecnica.aceleracion0a100}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Velocidad Máx:</span>
                      <span className="text-[#1a365d]">{fichaTecnica.velocidadMaxima}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Consumo Combinado:</span>
                      <span className="text-[#27ae60]">{fichaTecnica.consumoCombinado}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Consumo Ciudad:</span>
                      <span className="text-[#27ae60]">{fichaTecnica.consumoCiudad}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Consumo Carretera:</span>
                      <span className="text-[#27ae60]">{fichaTecnica.consumoCarretera}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Estanque:</span>
                      <span className="text-[#1a365d]">{fichaTecnica.capacidadEstanque}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Dimensiones:</span>
                      <span className="text-[#1a365d] text-sm">{fichaTecnica.dimensiones}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Peso:</span>
                      <span className="text-[#1a365d]">{fichaTecnica.peso}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Maletero:</span>
                      <span className="text-[#1a365d]">{fichaTecnica.capacidadMaletero}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Ubicación */}
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <div className="flex items-center justify-center gap-2 text-green-800">
                <span className="text-xl">📍</span>
                <span className="font-semibold">Disponible en: {ubicacion}</span>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex gap-4">
              <button 
                className="flex-1 bg-[#1a365d] text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-[#c53030] transition-colors shadow-md"
                onClick={onClose}
              >
                📞 Contactar Vendedor
              </button>
              <button 
                onClick={onClose}
                className="px-8 py-4 bg-gray-300 text-gray-800 rounded-lg font-bold text-lg hover:bg-gray-400 transition-colors shadow-md"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default VehiculoModal;
