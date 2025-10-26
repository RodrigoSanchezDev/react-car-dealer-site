import { formatearPrecio, formatearKilometraje } from '../data/vehiculos';
import './VehiculoCard.css';

const VehiculoCard = ({ vehiculo }) => {
  const {
    marca,
    modelo,
    año,
    precio,
    imagen,
    combustible,
    transmision,
    kilometraje,
    color,
    ubicacion,
    caracteristicas
  } = vehiculo;

  return (
    <div className="vehiculo-card">
      <div className="vehiculo-image">
        <img src={imagen} alt={`${marca} ${modelo}`} />
        <div className="vehiculo-badge">
          {año}
        </div>
      </div>
      
      <div className="vehiculo-content">
        <div className="vehiculo-header">
          <h3>{marca} {modelo}</h3>
          <p className="vehiculo-price">{formatearPrecio(precio)}</p>
        </div>
        
        <div className="vehiculo-details">
          <div className="detail-item">
            <span className="detail-icon">⛽</span>
            <span>{combustible}</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">⚙️</span>
            <span>{transmision}</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">📍</span>
            <span>{ubicacion}</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">🏃‍♂️</span>
            <span>{formatearKilometraje(kilometraje)}</span>
          </div>
        </div>
        
        <div className="vehiculo-color">
          <strong>Color:</strong> {color}
        </div>
        
        <div className="vehiculo-features">
          {caracteristicas.slice(0, 2).map((caracteristica, index) => (
            <span key={index} className="feature-tag">
              {caracteristica}
            </span>
          ))}
        </div>
        
        <div className="vehiculo-actions">
          <button className="btn">
            Ver Detalles
          </button>
          <button className="btn btn-secondary">
            📞 Contactar
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehiculoCard;