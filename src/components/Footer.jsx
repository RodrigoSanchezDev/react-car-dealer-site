const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1a365d] to-[#2d3748] text-white mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">🚗 AutoChile</h3>
            <p className="text-white mb-4">Tu concesionario de confianza en Chile. Más de 15 años conectando chilenos con su auto ideal.</p>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-[#ffd700] hover:text-white transition-colors">📘 Facebook</a>
              <a href="#" className="text-[#ffd700] hover:text-white transition-colors">📷 Instagram</a>
              <a href="#" className="text-[#ffd700] hover:text-white transition-colors">🐦 Twitter</a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xl font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-white hover:text-[#ffd700] transition-colors">Inicio</a></li>
              <li><a href="/quienes-somos" className="text-white hover:text-[#ffd700] transition-colors">Quiénes Somos</a></li>
              <li><a href="/nuestras-tiendas" className="text-white hover:text-[#ffd700] transition-colors">Nuestras Tiendas</a></li>
              <li><a href="/contactanos" className="text-white hover:text-[#ffd700] transition-colors">Contáctanos</a></li>
              <li><a href="/como-comprar" className="text-white hover:text-[#ffd700] transition-colors">Cómo Comprar</a></li>
              <li><a href="/preguntas-frecuentes" className="text-white hover:text-[#ffd700] transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-[#ffd700] transition-colors">Venta de Vehículos</a></li>
              <li><a href="#" className="text-white hover:text-[#ffd700] transition-colors">Financiamiento</a></li>
              <li><a href="#" className="text-white hover:text-[#ffd700] transition-colors">Seguros</a></li>
              <li><a href="#" className="text-white hover:text-[#ffd700] transition-colors">Post-venta</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-white">
              <p className="text-white">📞 +56 2 2234 5678</p>
              <p className="text-white">📧 info@autochile.cl</p>
              <p className="text-white">📍 Av. Providencia 1234, Santiago</p>
              <p className="text-white">🕒 Lun-Vie: 9:00-19:00, Sáb: 9:00-17:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">&copy; 2024 AutoChile. Todos los derechos reservados.</p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-white hover:text-[#ffd700] transition-colors">Términos y Condiciones</a>
              <a href="#" className="text-white hover:text-[#ffd700] transition-colors">Política de Privacidad</a>
              <a href="#" className="text-white hover:text-[#ffd700] transition-colors">Garantía</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;