import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { VehiculosProvider } from './context/VehiculosContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import NuestrasTiendas from './pages/NuestrasTiendas';
import Contactanos from './pages/Contactanos';
import ComoComprar from './pages/ComoComprar';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes';
import AgregarVehiculo from './pages/AgregarVehiculo';
import InventarioVehiculos from './pages/InventarioVehiculos';

function App() {
  return (
    <VehiculosProvider>
      <Router basename="/react-car-dealer-site">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quienes-somos" element={<QuienesSomos />} />
              <Route path="/nuestras-tiendas" element={<NuestrasTiendas />} />
              <Route path="/inventario" element={<InventarioVehiculos />} />
              <Route path="/agregar-vehiculo" element={<AgregarVehiculo />} />
              <Route path="/contactanos" element={<Contactanos />} />
              <Route path="/como-comprar" element={<ComoComprar />} />
              <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </VehiculosProvider>
  );
}

export default App;
