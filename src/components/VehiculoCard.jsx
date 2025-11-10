import { useState } from 'react';
import { formatearPrecio, formatearKilometraje } from '../data/vehiculos';
import VehiculoModal from './VehiculoModal';
import { usePosiblesCompras } from '../context/PosiblesComprasContext';

const VehiculoCard = ({ vehiculo, showEliminar, onEliminar, showPosibleCompra = false, enCarrito = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { agregarAPosibleCompra, removerDePosibleCompra, esPosibleCompra } = usePosiblesCompras();
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
    caracteristicas
  } = vehiculo;

  const yaEnPosibleCompra = esPosibleCompra(vehiculo.id);

  const handleTogglePosibleCompra = () => {
    if (yaEnPosibleCompra) {
      removerDePosibleCompra(vehiculo.id);
    } else {
      agregarAPosibleCompra(vehiculo);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative overflow-hidden group">
        <img 
          src={imagen} 
          alt={`${marca} ${modelo}`}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-[#1a365d] text-white px-4 py-2 rounded-lg font-bold shadow-lg">
          {año}
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-[#1a365d] text-2xl font-bold mb-2">{marca} {modelo}</h3>
          <p className="text-[#27ae60] text-3xl font-bold">{formatearPrecio(precio)}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>⛽</span>
            <span>{combustible}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>⚙️</span>
            <span>{transmision}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>📍</span>
            <span>{ubicacion}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>🏃‍♂️</span>
            <span>{formatearKilometraje(kilometraje)}</span>
          </div>
        </div>
        
        <div className="mb-4 text-sm text-gray-700">
          <strong>Color:</strong> {color}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {caracteristicas.slice(0, 2).map((caracteristica, index) => (
            <span 
              key={index} 
              className="bg-blue-50 text-[#1a365d] px-3 py-1 rounded-full text-xs font-medium"
            >
              {caracteristica}
            </span>
          ))}
        </div>
        
        <div className="flex flex-col gap-3">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-[#1a365d] text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-[#c53030] transition-colors duration-300"
          >
            Ver Detalles
          </button>
          
          <div className="flex gap-3">
            {showEliminar ? (
              <button 
                onClick={() => onEliminar(vehiculo.id, vehiculo.marca, vehiculo.modelo)}
                className="flex-1 bg-red-500 text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
              >
                🗑️ Eliminar
              </button>
            ) : (
              <button className="flex-1 bg-[#ffd700] text-[#2d3748] py-2.5 px-4 rounded-lg font-semibold hover:bg-[#e6c200] transition-colors duration-300">
                📞 Contactar
              </button>
            )}
            
            {showPosibleCompra && (
              <button 
                onClick={handleTogglePosibleCompra}
                className={`flex-1 py-2.5 px-4 rounded-lg font-semibold transition-colors duration-300 ${
                  yaEnPosibleCompra 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                {yaEnPosibleCompra ? '✓ En Lista' : '⭐ Posible Compra'}
              </button>
            )}
            
            {enCarrito && (
              <button 
                onClick={handleTogglePosibleCompra}
                className="flex-1 bg-orange-500 text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
              >
                ✕ Remover
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <VehiculoModal 
        vehiculo={vehiculo} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default VehiculoCard;