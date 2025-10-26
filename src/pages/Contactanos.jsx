import { useState } from 'react';
import './Contactanos.css';

const Contactanos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    vehiculoInteres: '',
    mensaje: '',
    tipoConsulta: 'general'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="contactanos">
      {/* Hero Section */}
      <section className="hero-contacto">
        <div className="container">
          <div className="hero-contacto-content">
            <h1>Contáctanos</h1>
            <p>Estamos aquí para ayudarte a encontrar tu auto ideal</p>
          </div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="section">
        <div className="container">
          <div className="contacto-info-grid">
            <div className="contacto-principal">
              <h2>¿Cómo podemos ayudarte?</h2>
              <p>
                Nuestro equipo de expertos está disponible para responder todas tus consultas 
                sobre vehículos, financiamiento, garantías y servicios post-venta.
              </p>
              
              <div className="canales-contacto">
                <div className="canal-item">
                  <div className="canal-icon">📞</div>
                  <div className="canal-info">
                    <h3>Llámanos</h3>
                    <p><a href="tel:+56222345678">+56 2 2234 5678</a></p>
                    <span>Lun-Vie: 9:00-19:00, Sáb: 9:00-17:00</span>
                  </div>
                </div>

                <div className="canal-item">
                  <div className="canal-icon">💬</div>
                  <div className="canal-info">
                    <h3>WhatsApp</h3>
                    <p><a href="https://wa.me/56922345678" target="_blank" rel="noopener noreferrer">+56 9 2234 5678</a></p>
                    <span>Respuesta inmediata</span>
                  </div>
                </div>

                <div className="canal-item">
                  <div className="canal-icon">📧</div>
                  <div className="canal-info">
                    <h3>Email</h3>
                    <p><a href="mailto:info@autochile.cl">info@autochile.cl</a></p>
                    <span>Respuesta en 24 hrs</span>
                  </div>
                </div>

                <div className="canal-item">
                  <div className="canal-icon">📍</div>
                  <div className="canal-info">
                    <h3>Visítanos</h3>
                    <p>Av. Providencia 1234, Santiago</p>
                    <span>Showroom principal</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="formulario-contacto">
              <div className="form-container">
                <h3>Envíanos un Mensaje</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre Completo *</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Ingresa tu nombre completo"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="telefono">Teléfono *</label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        placeholder="+56 9 1234 5678"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="tipoConsulta">Tipo de Consulta</label>
                      <select
                        id="tipoConsulta"
                        name="tipoConsulta"
                        value={formData.tipoConsulta}
                        onChange={handleChange}
                      >
                        <option value="general">Consulta General</option>
                        <option value="vehiculo">Información de Vehículo</option>
                        <option value="financiamiento">Financiamiento</option>
                        <option value="postventa">Post-venta</option>
                        <option value="garantia">Garantía</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="vehiculoInteres">Vehículo de Interés</label>
                      <select
                        id="vehiculoInteres"
                        name="vehiculoInteres"
                        value={formData.vehiculoInteres}
                        onChange={handleChange}
                      >
                        <option value="">Selecciona un vehículo</option>
                        <option value="toyota-corolla">Toyota Corolla</option>
                        <option value="chevrolet-tracker">Chevrolet Tracker</option>
                        <option value="nissan-kicks">Nissan Kicks</option>
                        <option value="suzuki-vitara">Suzuki Vitara</option>
                        <option value="hyundai-tucson">Hyundai Tucson</option>
                        <option value="ford-territory">Ford Territory</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensaje">Mensaje *</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-form">
                    📤 Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horarios de Atención */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-center">Horarios de Atención</h2>
          <div className="horarios-grid">
            <div className="horario-card">
              <h3>📞 Atención Telefónica</h3>
              <div className="horario-detalle">
                <p><strong>Lunes a Viernes:</strong> 9:00 - 19:00</p>
                <p><strong>Sábados:</strong> 9:00 - 17:00</p>
                <p><strong>Domingos:</strong> 10:00 - 14:00</p>
              </div>
            </div>

            <div className="horario-card">
              <h3>🏪 Showroom</h3>
              <div className="horario-detalle">
                <p><strong>Lunes a Viernes:</strong> 9:00 - 19:00</p>
                <p><strong>Sábados:</strong> 9:00 - 17:00</p>
                <p><strong>Domingos:</strong> Cerrado</p>
              </div>
            </div>

            <div className="horario-card">
              <h3>🔧 Servicio Técnico</h3>
              <div className="horario-detalle">
                <p><strong>Lunes a Viernes:</strong> 8:00 - 18:00</p>
                <p><strong>Sábados:</strong> 8:00 - 13:00</p>
                <p><strong>Domingos:</strong> Cerrado</p>
              </div>
            </div>

            <div className="horario-card">
              <h3>💬 WhatsApp</h3>
              <div className="horario-detalle">
                <p><strong>Lunes a Sábado:</strong> 8:00 - 20:00</p>
                <p><strong>Domingos:</strong> 10:00 - 18:00</p>
                <p><strong>Emergencias:</strong> 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes Rápidas */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">Consultas Frecuentes</h2>
          <div className="faq-rapidas">
            <div className="faq-item">
              <h4>¿Hacen entrega a domicilio?</h4>
              <p>Sí, entregamos tu vehículo en tu hogar u oficina sin costo adicional en la Región Metropolitana.</p>
            </div>
            <div className="faq-item">
              <h4>¿Qué documentos necesito?</h4>
              <p>RUT, Licencia de Conducir vigente, y comprobante de ingresos para el financiamiento.</p>
            </div>
            <div className="faq-item">
              <h4>¿Aceptan vehículos en parte de pago?</h4>
              <p>Sí, evaluamos tu vehículo actual y lo consideramos como parte de pago para tu nuevo auto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Emergencias */}
      <section className="section bg-primary">
        <div className="container">
          <div className="emergencia-cta text-center">
            <h2 style={{color: 'white'}}>¿Necesitas Ayuda Urgente?</h2>
            <p style={{color: 'var(--light-gray)'}}>
              Para emergencias vehiculares las 24 horas, contacta nuestro servicio de asistencia.
            </p>
            <div className="emergencia-actions">
              <a href="tel:+562280028862" className="btn btn-secondary">
                🚨 Asistencia 24/7
              </a>
              <a href="https://wa.me/56922345678?text=Emergencia%20vehicular" className="btn" target="_blank" rel="noopener noreferrer">
                💬 WhatsApp Urgente
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactanos;