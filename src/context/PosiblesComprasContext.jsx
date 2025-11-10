import { createContext, useContext, useState, useEffect } from 'react';

const PosiblesComprasContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const usePosiblesCompras = () => {
  const context = useContext(PosiblesComprasContext);
  if (!context) {
    throw new Error('usePosiblesCompras debe usarse dentro de PosiblesComprasProvider');
  }
  return context;
};

export const PosiblesComprasProvider = ({ children }) => {
  const [posiblesCompras, setPosiblesCompras] = useState(() => {
    // Cargar desde localStorage al iniciar
    const guardados = localStorage.getItem('posiblesCompras');
    return guardados ? JSON.parse(guardados) : [];
  });

  // Guardar en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('posiblesCompras', JSON.stringify(posiblesCompras));
  }, [posiblesCompras]);

  const agregarAPosibleCompra = (vehiculo) => {
    setPosiblesCompras(prev => {
      // Verificar si ya existe
      if (prev.find(v => v.id === vehiculo.id)) {
        return prev;
      }
      return [...prev, vehiculo];
    });
  };

  const removerDePosibleCompra = (vehiculoId) => {
    setPosiblesCompras(prev => prev.filter(v => v.id !== vehiculoId));
  };

  const esPosibleCompra = (vehiculoId) => {
    return posiblesCompras.some(v => v.id === vehiculoId);
  };

  const limpiarPosiblesCompras = () => {
    setPosiblesCompras([]);
  };

  const value = {
    posiblesCompras,
    agregarAPosibleCompra,
    removerDePosibleCompra,
    esPosibleCompra,
    limpiarPosiblesCompras,
    cantidadPosiblesCompras: posiblesCompras.length
  };

  return (
    <PosiblesComprasContext.Provider value={value}>
      {children}
    </PosiblesComprasContext.Provider>
  );
};
