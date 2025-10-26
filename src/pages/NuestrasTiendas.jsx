import { sucursales } from '../data/vehiculos';
import './NuestrasTiendas.css';

const NuestrasTiendas = () => {
  return (
    <div className="nuestras-tiendas">
      {/* Hero Section */}
      <section className="hero-tiendas">
        <div className="container">
          <div className="hero-tiendas-content">
            <h1>Nuestras Tiendas</h1>
            <p>Encuéntranos en las principales ciudades de Chile</p>
          </div>
        </div>
      </section>

      {/* Información General */}
      <section className="section">
        <div className="container">
          <div className="tiendas-intro">
            <h2 className="text-center">Presencia Nacional</h2>
            <p className="intro-text">
              Con sucursales estratégicamente ubicadas desde Santiago hasta Concepción, 
              AutoChile está cerca de ti. Cada una de nuestras tiendas está equipada 
              con showroom moderno, área de servicio técnico y un equipo de profesionales 
              listos para ayudarte a encontrar tu próximo vehículo.
            </p>
          </div>
        </div>
      </section>

      {/* Sucursales */}
      <section className="section bg-light">
        <div className="container">
          <div className="sucursales-grid">
            {sucursales.map((sucursal) => (
              <div key={sucursal.id} className="sucursal-card">
                <div className="sucursal-header">
                  <h3>{sucursal.nombre}</h3>
                  <div className="sucursal-badge">
                    🏪 Sucursal Oficial
                  </div>
                </div>
                
                <div className="sucursal-info">
                  <div className="info-item">
                    <span className="info-icon">📍</span>
                    <div>
                      <strong>Dirección:</strong>
                      <p>{sucursal.direccion}</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <span className="info-icon">📞</span>
                    <div>
                      <strong>Teléfono:</strong>
                      <p>
                        <a href={`tel:${sucursal.telefono}`}>{sucursal.telefono}</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <span className="info-icon">🕒</span>
                    <div>
                      <strong>Horario de Atención:</strong>
                      <p>{sucursal.horario}</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <span className="info-icon">👨‍💼</span>
                    <div>
                      <strong>Gerente:</strong>
                      <p>{sucursal.gerente}</p>
                    </div>
                  </div>
                </div>
                
                <div className="servicios-disponibles">
                  <h4>Servicios Disponibles:</h4>
                  <div className="servicios-tags">
                    {sucursal.servicios.map((servicio, index) => (
                      <span key={index} className="servicio-tag">
                        {servicio}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="sucursal-actions">
                  <a href={`tel:${sucursal.telefono}`} className="btn">
                    📞 Llamar
                  </a>
                  <a 
                    href={`https://www.google.com/maps/search/${encodeURIComponent(sucursal.direccion)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    📍 Ver en Mapa
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa Conceptual */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">Cobertura Nacional</h2>
          <div className="mapa-coverage">
            <div className="coverage-item">
              <div className="coverage-icon">🏙️</div>
              <h3>Región Metropolitana</h3>
              <p>2 sucursales en Santiago</p>
              <ul>
                <li>Santiago Centro - Providencia</li>
                <li>Las Condes - Sector Oriente</li>
              </ul>
            </div>
            
            <div className="coverage-item">
              <div className="coverage-icon">🌊</div>
              <h3>Región de Valparaíso</h3>
              <p>1 sucursal en el puerto</p>
              <ul>
                <li>Valparaíso Centro</li>
              </ul>
            </div>
            
            <div className="coverage-item">
              <div className="coverage-icon">🌲</div>
              <h3>Región del Biobío</h3>
              <p>1 sucursal en el sur</p>
              <ul>
                <li>Concepción Centro</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios por Sucursal */}
      <section className="section bg-primary">
        <div className="container">
          <h2 className="text-center" style={{color: 'white'}}>Servicios Completos</h2>
          <div className="servicios-completos">
            <div className="servicio-completo">
              <div className="servicio-icon">🚗</div>
              <h3>Showroom</h3>
              <p>Vehículos nuevos y usados en exhibición con información detallada y posibilidad de test drive.</p>
            </div>
            
            <div className="servicio-completo">
              <div className="servicio-icon">💰</div>
              <h3>Financiamiento</h3>
              <p>Asesoría personalizada y convenios con los principales bancos de Chile para el mejor financiamiento.</p>
            </div>
            
            <div className="servicio-completo">
              <div className="servicio-icon">🔧</div>
              <h3>Servicio Técnico</h3>
              <p>Mantención preventiva, reparaciones y repuestos originales con técnicos certificados.</p>
            </div>
            
            <div className="servicio-completo">
              <div className="servicio-icon">🛡️</div>
              <h3>Seguros</h3>
              <p>Seguros vehiculares con las mejores compañías y cobertura adaptada a tus necesidades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Horarios Especiales */}
      <section className="section">
        <div className="container">
          <div className="horarios-especiales">
            <h2 className="text-center">Información Importante</h2>
            <div className="info-especial-grid">
              <div className="info-especial-card">
                <h3>📅 Horarios Festivos</h3>
                <p>Durante días festivos operamos con horario reducido. Consulta horarios especiales llamando directamente a la sucursal.</p>
              </div>
              
              <div className="info-especial-card">
                <h3>🚨 Emergencias</h3>
                <p>Para emergencias vehiculares fuera de horario, contacta nuestro servicio 24/7 al +56 2 2800 AUTO (2886).</p>
              </div>
              
              <div className="info-especial-card">
                <h3>📱 Cita Previa</h3>
                <p>Recomendamos agendar cita previa para test drives y servicios técnicos para garantizar disponibilidad.</p>
              </div>
              
              <div className="info-especial-card">
                <h3>🎯 Visitas Comerciales</h3>
                <p>¿No puedes venir? Nuestros ejecutivos pueden visitarte en tu hogar u oficina. Agenda tu cita.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-light">
        <div className="container">
          <div className="cta-tiendas text-center">
            <h2>¿Listo para Visitarnos?</h2>
            <p>
              Nuestro equipo está esperándote para ayudarte a encontrar el auto perfecto. 
              Agenda tu cita o visítanos directamente.
            </p>
            <div className="cta-actions">
              <a href="tel:+56222345678" className="btn">
                📞 Llamar Ahora
              </a>
              <a href="https://wa.me/56922345678" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NuestrasTiendas;