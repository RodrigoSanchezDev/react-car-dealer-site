import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import NuestrasTiendas from './pages/NuestrasTiendas';
import Contactanos from './pages/Contactanos';
import ComoComprar from './pages/ComoComprar';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes';
import './App.css';

function App() {
  return (
    <Router basename="/react-car-dealer-site">
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/nuestras-tiendas" element={<NuestrasTiendas />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/como-comprar" element={<ComoComprar />} />
            <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
