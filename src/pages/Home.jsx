import { useState } from 'react';
import VehiculoCard from '../components/VehiculoCard';
import { vehiculos } from '../data/vehiculos';
import './Home.css';

const Home = () => {
  const [filtroMarca, setFiltroMarca] = useState('');
  const [filtroTipo, setFiltroTipo] = useState('');

  // Obtener marcas únicas
  const marcasUnicas = [...new Set(vehiculos.map(v => v.marca))];

  // Filtrar vehículos
  const vehiculosFiltrados = vehiculos.filter(vehiculo => {
    const cumpleMarca = !filtroMarca || vehiculo.marca === filtroMarca;
    const cumpleTipo = !filtroTipo || 
      (filtroTipo === 'suv' && ['Tracker', 'Kicks', 'Vitara', 'Tucson', 'Territory'].includes(vehiculo.modelo)) ||
      (filtroTipo === 'sedan' && ['Corolla'].includes(vehiculo.modelo));
    
    return cumpleMarca && cumpleTipo;
  });

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Encuentra Tu Auto Ideal en Chile</h1>
            <p>
              Más de 15 años conectando a chilenos con el vehículo perfecto. 
              Financiamiento, garantía y el mejor servicio post-venta del país.
            </p>
            <div className="hero-actions">
              <button className="btn">Ver Vehículos</button>
              <button className="btn btn-secondary">Financiamiento</button>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>15+</h3>
              <p>Años de experiencia</p>
            </div>
            <div className="stat-item">
              <h3>5,000+</h3>
              <p>Clientes satisfechos</p>
            </div>
            <div className="stat-item">
              <h3>10</h3>
              <p>Marcas disponibles</p>
            </div>
            <div className="stat-item">
              <h3>4</h3>
              <p>Sucursales en Chile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="filters-section">
        <div className="container">
          <h2 className="text-center">Nuestros Vehículos Disponibles</h2>
          <div className="filters">
            <select 
              value={filtroMarca} 
              onChange={(e) => setFiltroMarca(e.target.value)}
              className="filter-select"
            >
              <option value="">Todas las marcas</option>
              {marcasUnicas.map(marca => (
                <option key={marca} value={marca}>{marca}</option>
              ))}
            </select>

            <select 
              value={filtroTipo} 
              onChange={(e) => setFiltroTipo(e.target.value)}
              className="filter-select"
            >
              <option value="">Todos los tipos</option>
              <option value="sedan">Sedán</option>
              <option value="suv">SUV/Crossover</option>
            </select>

            <button 
              onClick={() => {
                setFiltroMarca('');
                setFiltroTipo('');
              }}
              className="btn-reset"
            >
              Limpiar Filtros
            </button>
          </div>
        </div>
      </section>

      {/* Catálogo de Vehículos */}
      <section className="vehiculos-section">
        <div className="container">
          {vehiculosFiltrados.length === 0 ? (
            <div className="no-results">
              <h3>No se encontraron vehículos</h3>
              <p>Intenta ajustar los filtros para ver más opciones.</p>
            </div>
          ) : (
            <div className="vehiculos-grid">
              {vehiculosFiltrados.map(vehiculo => (
                <VehiculoCard key={vehiculo.id} vehiculo={vehiculo} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Servicios */}
      <section className="services-section bg-light">
        <div className="container">
          <h2 className="text-center">¿Por Qué Elegir AutoChile?</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Financiamiento Flexible</h3>
              <p>Planes de financiamiento adaptados a tu presupuesto. Trabaja con los principales bancos de Chile.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>Garantía Extendida</h3>
              <p>Todos nuestros vehículos incluyen garantía de fábrica más opciones de garantía extendida.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Servicio Técnico</h3>
              <p>Red de talleres autorizados en todo Chile. Mantención y reparaciones con repuestos originales.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📄</div>
              <h3>Documentación</h3>
              <p>Nos encargamos de todos los trámites. Transferencia, seguro obligatorio y permisos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-section bg-primary">
        <div className="container">
          <div className="cta-content text-center">
            <h2>¿Listo para tu próximo auto?</h2>
            <p>Nuestro equipo de expertos está listo para ayudarte a encontrar el vehículo perfecto.</p>
            <div className="cta-actions">
              <a href="tel:+56222345678" className="btn btn-secondary">
                📞 Llamar Ahora
              </a>
              <a href="https://wa.me/56922345678" className="btn" target="_blank" rel="noopener noreferrer">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;