import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePosiblesCompras } from '../context/PosiblesComprasContext';
import { formatearPrecio } from '../data/vehiculos';

const IconoPosiblesCompras = () => {
  const navigate = useNavigate();
  const { posiblesCompras, removerDePosibleCompra, cantidadPosiblesCompras } = usePosiblesCompras();
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  // Cerrar popup al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  if (cantidadPosiblesCompras === 0) {
    return null; // No mostrar si no hay items
  }

  const togglePopup = (e) => {
    e.stopPropagation();
    setShowPopup(!showPopup);
  };

  const irAlCarrito = (e) => {
    e.stopPropagation();
    setShowPopup(false);
    navigate('/carrito');
  };

  return (
    <div className="fixed bottom-8 right-8 z-40" ref={popupRef}>
      {/* Icono Flotante */}
      <div className="relative">
        <button 
          className="bg-[#1a365d] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl hover:bg-[#c53030] transition-all duration-300 hover:scale-110"
          onClick={togglePopup}
          title="Ver posibles compras"
        >
          <div className="relative">
            <span className="text-3xl">🛒</span>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {cantidadPosiblesCompras}
            </span>
          </div>
        </button>

        {/* Popup al hacer hover */}
        {showPopup && (
          <div className="absolute bottom-20 right-0 w-96 bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-[#1a365d] animate-fade-in">
            {/* Header del popup */}
            <div className="bg-[#1a365d] p-4">
              <h3 className="font-bold text-lg text-white">Posibles Compras</h3>
              <p className="text-sm text-white opacity-90">{cantidadPosiblesCompras} vehículo{cantidadPosiblesCompras !== 1 ? 's' : ''} seleccionado{cantidadPosiblesCompras !== 1 ? 's' : ''}</p>
            </div>

            {/* Lista de vehículos */}
            <div className="max-h-96 overflow-y-auto">
              {posiblesCompras.map((vehiculo) => (
                <div 
                  key={vehiculo.id} 
                  className="flex items-center gap-3 p-3 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <img 
                    src={vehiculo.imagen} 
                    alt={`${vehiculo.marca} ${vehiculo.modelo}`}
                    className="w-20 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#1a365d] text-sm truncate">
                      {vehiculo.marca} {vehiculo.modelo}
                    </h4>
                    <p className="text-xs text-gray-600">{vehiculo.año}</p>
                    <p className="text-[#27ae60] font-bold text-sm">
                      {formatearPrecio(vehiculo.precio)}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removerDePosibleCompra(vehiculo.id);
                    }}
                    className="text-red-500 hover:text-red-700 transition-colors p-2"
                    title="Remover"
                  >
                    <span className="text-xl">✕</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Footer con botón */}
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <button
                onClick={irAlCarrito}
                className="w-full bg-[#c53030] text-white py-3 rounded-lg font-bold hover:bg-[#1a365d] transition-colors"
              >
                Ver Todas las Posibles Compras
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IconoPosiblesCompras;
