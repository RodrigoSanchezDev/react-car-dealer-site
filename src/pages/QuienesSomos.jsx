import './QuienesSomos.css';

const QuienesSomos = () => {
  return (
    <div className="quienes-somos">
      {/* Hero Section */}
      <section className="hero-about">
        <div className="container">
          <div className="hero-about-content">
            <h1>Nuestra Historia</h1>
            <p>Más de 15 años conectando a las familias chilenas con su auto ideal</p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>¿Quiénes Somos?</h2>
              <p>
                AutoChile nació en 2009 con el sueño de democratizar el acceso a vehículos 
                de calidad en Chile. Fundada por un grupo de emprendedores chilenos que 
                identificaron la necesidad de un servicio más transparente y confiable en 
                el mercado automotriz nacional.
              </p>
              <p>
                Desde nuestros humildes comienzos en una pequeña oficina en Providencia, 
                hemos crecido hasta convertirnos en una de las concesionarias más respetadas 
                del país, con presencia en las principales ciudades de Chile.
              </p>
              <p>
                Nuestro compromiso va más allá de la venta: acompañamos a nuestros clientes 
                en todo el proceso, desde la búsqueda del vehículo perfecto hasta el servicio 
                post-venta, garantizando una experiencia excepcional en cada etapa.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=400&fit=crop" 
                alt="Equipo AutoChile"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-center">Nuestros Principios</h2>
          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-icon">🎯</div>
              <h3>Misión</h3>
              <p>
                Facilitar el acceso a vehículos de calidad para todas las familias chilenas, 
                ofreciendo un servicio transparente, confiable y adaptado a las necesidades 
                específicas de cada cliente.
              </p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">👁️</div>
              <h3>Visión</h3>
              <p>
                Ser la concesionaria líder en Chile, reconocida por nuestra excelencia en 
                servicio al cliente, innovación en procesos y compromiso con la movilidad 
                sustentable del país.
              </p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">💎</div>
              <h3>Valores</h3>
              <ul>
                <li>🤝 <strong>Transparencia:</strong> Información clara y honesta</li>
                <li>⭐ <strong>Excelencia:</strong> Calidad en cada servicio</li>
                <li>🛡️ <strong>Confianza:</strong> Relaciones duraderas</li>
                <li>🌱 <strong>Compromiso:</strong> Con Chile y el medio ambiente</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">Nuestro Equipo Directivo</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
                  alt="Carlos Rodriguez"
                />
              </div>
              <h4>Carlos Rodriguez</h4>
              <p className="member-role">CEO & Fundador</p>
              <p className="member-description">
                Ingeniero Comercial con más de 20 años en la industria automotriz. 
                Visionario detrás de AutoChile y apasionado por la innovación.
              </p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=200&h=200&fit=crop&crop=face" 
                  alt="María González"
                />
              </div>
              <h4>María González</h4>
              <p className="member-role">Directora Comercial</p>
              <p className="member-description">
                MBA con especialización en marketing automotriz. Lidera nuestras 
                estrategias de venta y experiencia del cliente.
              </p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" 
                  alt="Juan Silva"
                />
              </div>
              <h4>Juan Silva</h4>
              <p className="member-role">Director de Operaciones</p>
              <p className="member-description">
                Experto en logística y procesos automotrices. Garantiza la calidad 
                operacional en todas nuestras sucursales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logros */}
      <section className="section bg-primary">
        <div className="container">
          <h2 className="text-center" style={{color: 'white'}}>Nuestros Logros</h2>
          <div className="achievements-grid">
            <div className="achievement-item">
              <div className="achievement-icon">🏆</div>
              <h3>Premio Excelencia 2023</h3>
              <p>Reconocimiento a la mejor experiencia del cliente en el sector automotriz</p>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">🌟</div>
              <h3>5,000+ Clientes Satisfechos</h3>
              <p>Más de cinco mil familias han confiado en nosotros para su próximo auto</p>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">🌱</div>
              <h3>Carbono Neutral 2024</h3>
              <p>Primera concesionaria en Chile en alcanzar la neutralidad de carbono</p>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">📈</div>
              <h3>15 Años de Crecimiento</h3>
              <p>Crecimiento sostenido año tras año, expandiéndonos por todo Chile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso Social */}
      <section className="section">
        <div className="container">
          <div className="social-commitment">
            <div className="commitment-text">
              <h2>Compromiso con Chile</h2>
              <p>
                En AutoChile creemos en retribuir a la comunidad que nos ha permitido crecer. 
                Por eso, desarrollamos iniciativas que impactan positivamente en la sociedad chilena:
              </p>
              <ul className="commitment-list">
                <li>🎓 <strong>Programa de Becas:</strong> Financiamos estudios técnicos automotrices</li>
                <li>🌳 <strong>Reforestación:</strong> Plantamos un árbol por cada auto vendido</li>
                <li>🚗 <strong>Movilidad Social:</strong> Facilitamos acceso vehicular a organizaciones sociales</li>
                <li>♻️ <strong>Reciclaje:</strong> Programa de reciclaje de vehículos al final de su vida útil</li>
              </ul>
            </div>
            <div className="commitment-image">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop" 
                alt="Compromiso social AutoChile"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuienesSomos;