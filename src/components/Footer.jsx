import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🚗 AutoChile</h3>
            <p>Tu concesionario de confianza en Chile. Más de 15 años conectando chilenos con su auto ideal.</p>
            <div className="social-links">
              <a href="#" className="social-link">📘 Facebook</a>
              <a href="#" className="social-link">📷 Instagram</a>
              <a href="#" className="social-link">🐦 Twitter</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Navegación</h4>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/quienes-somos">Quiénes Somos</a></li>
              <li><a href="/nuestras-tiendas">Nuestras Tiendas</a></li>
              <li><a href="/contactanos">Contáctanos</a></li>
              <li><a href="/como-comprar">Cómo Comprar</a></li>
              <li><a href="/preguntas-frecuentes">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#">Venta de Vehículos</a></li>
              <li><a href="#">Financiamiento</a></li>
              <li><a href="#">Seguros</a></li>
              <li><a href="#">Post-venta</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="contact-info">
              <p>📞 +56 2 2234 5678</p>
              <p>📧 info@autochile.cl</p>
              <p>📍 Av. Providencia 1234, Santiago</p>
              <p>🕒 Lun-Vie: 9:00-19:00, Sáb: 9:00-17:00</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 AutoChile. Todos los derechos reservados.</p>
            <div className="footer-links">
              <a href="#">Términos y Condiciones</a>
              <a href="#">Política de Privacidad</a>
              <a href="#">Garantía</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;