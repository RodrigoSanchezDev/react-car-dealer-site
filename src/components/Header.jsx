import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h2>🚗 AutoChile</h2>
            <span className="logo-tagline">Tu próximo auto te está esperando</span>
          </Link>
          
          <nav className="main-nav">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Inicio
            </Link>
            <Link 
              to="/quienes-somos" 
              className={`nav-link ${location.pathname === '/quienes-somos' ? 'active' : ''}`}
            >
              Quiénes Somos
            </Link>
            <Link 
              to="/nuestras-tiendas" 
              className={`nav-link ${location.pathname === '/nuestras-tiendas' ? 'active' : ''}`}
            >
              Nuestras Tiendas
            </Link>
            <Link 
              to="/contactanos" 
              className={`nav-link ${location.pathname === '/contactanos' ? 'active' : ''}`}
            >
              Contáctanos
            </Link>
            <Link 
              to="/como-comprar" 
              className={`nav-link ${location.pathname === '/como-comprar' ? 'active' : ''}`}
            >
              Cómo Comprar
            </Link>
            <Link 
              to="/preguntas-frecuentes" 
              className={`nav-link ${location.pathname === '/preguntas-frecuentes' ? 'active' : ''}`}
            >
              FAQ
            </Link>
          </nav>

          <div className="header-actions">
            <a href="tel:+56222345678" className="btn btn-secondary">
              📞 Llamar Ahora
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;