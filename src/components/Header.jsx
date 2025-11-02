import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-gradient-to-br from-[#1a365d] to-[#2d3748] shadow-lg sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between py-4 gap-8 flex-wrap md:flex-nowrap">
          <Link to="/" className="flex flex-col text-white no-underline">
            <h2 className="text-white m-0 text-3xl font-bold">
              🚗 AutoChile
            </h2>
            <span className="text-xs text-[#ffd700] font-medium -mt-1">
              Tu próximo auto te está esperando
            </span>
          </Link>
          
          <nav className="flex gap-6 flex-1 justify-center flex-wrap order-3 md:order-2 w-full md:w-auto">
            <Link 
              to="/" 
              className={`text-white font-medium px-3 py-2 rounded-md transition-all duration-300 text-sm whitespace-nowrap ${
                location.pathname === '/' 
                  ? 'bg-[#c53030] text-white' 
                  : 'hover:bg-white/10 hover:text-[#ffd700]'
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/quienes-somos" 
              className={`text-white font-medium px-3 py-2 rounded-md transition-all duration-300 text-sm whitespace-nowrap ${
                location.pathname === '/quienes-somos' 
                  ? 'bg-[#c53030] text-white' 
                  : 'hover:bg-white/10 hover:text-[#ffd700]'
              }`}
            >
              Quiénes Somos
            </Link>
            <Link 
              to="/nuestras-tiendas" 
              className={`text-white font-medium px-3 py-2 rounded-md transition-all duration-300 text-sm whitespace-nowrap ${
                location.pathname === '/nuestras-tiendas' 
                  ? 'bg-[#c53030] text-white' 
                  : 'hover:bg-white/10 hover:text-[#ffd700]'
              }`}
            >
              Nuestras Tiendas
            </Link>
            <Link 
              to="/inventario" 
              className={`text-white font-medium px-3 py-2 rounded-md transition-all duration-300 text-sm whitespace-nowrap ${
                location.pathname === '/inventario' 
                  ? 'bg-[#c53030] text-white' 
                  : 'hover:bg-white/10 hover:text-[#ffd700]'
              }`}
            >
              Inventario
            </Link>
            <Link 
              to="/agregar-vehiculo" 
              className={`text-white font-medium px-3 py-2 rounded-md transition-all duration-300 text-sm whitespace-nowrap ${
                location.pathname === '/agregar-vehiculo' 
                  ? 'bg-[#c53030] text-white' 
                  : 'hover:bg-white/10 hover:text-[#ffd700]'
              }`}
            >
              Agregar Vehículo
            </Link>
            <Link 
              to="/contactanos" 
              className={`text-white font-medium px-3 py-2 rounded-md transition-all duration-300 text-sm whitespace-nowrap ${
                location.pathname === '/contactanos' 
                  ? 'bg-[#c53030] text-white' 
                  : 'hover:bg-white/10 hover:text-[#ffd700]'
              }`}
            >
              Contáctanos
            </Link>
            <Link 
              to="/como-comprar" 
              className={`text-white font-medium px-3 py-2 rounded-md transition-all duration-300 text-sm whitespace-nowrap ${
                location.pathname === '/como-comprar' 
                  ? 'bg-[#c53030] text-white' 
                  : 'hover:bg-white/10 hover:text-[#ffd700]'
              }`}
            >
              Cómo Comprar
            </Link>
            <Link 
              to="/preguntas-frecuentes" 
              className={`text-white font-medium px-3 py-2 rounded-md transition-all duration-300 text-sm whitespace-nowrap ${
                location.pathname === '/preguntas-frecuentes' 
                  ? 'bg-[#c53030] text-white' 
                  : 'hover:bg-white/10 hover:text-[#ffd700]'
              }`}
            >
              FAQ
            </Link>
          </nav>

          <div className="flex gap-4 order-2 md:order-3">
            <a href="tel:+56222345678" className="btn btn-secondary text-sm px-4 py-2 whitespace-nowrap">
              📞 Llamar Ahora
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;