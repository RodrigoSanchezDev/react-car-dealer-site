import { useContext } from 'react';
import { PosiblesComprasContext } from './PosiblesComprasContext';

export const usePosiblesCompras = () => {
  const context = useContext(PosiblesComprasContext);
  if (!context) {
    throw new Error('usePosiblesCompras debe usarse dentro de PosiblesComprasProvider');
  }
  return context;
};
