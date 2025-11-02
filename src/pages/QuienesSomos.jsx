const QuienesSomos = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a365d] to-[#2d3748] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">Nuestra Historia</h1>
            <p className="text-xl text-gray-200">Más de 15 años conectando a las familias chilenas con su auto ideal</p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1a365d] mb-4">¿Quiénes Somos?</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                AutoChile nació en 2009 con el sueño de democratizar el acceso a vehículos 
                de calidad en Chile. Fundada por un grupo de emprendedores chilenos que 
                identificaron la necesidad de un servicio más transparente y confiable en 
                el mercado automotriz nacional.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Desde nuestros humildes comienzos en una pequeña oficina en Providencia, 
                hemos crecido hasta convertirnos en una de las concesionarias más respetadas 
                del país, con presencia en las principales ciudades de Chile.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nuestro compromiso va más allá de la venta: acompañamos a nuestros clientes 
                en todo el proceso, desde la búsqueda del vehículo perfecto hasta el servicio 
                post-venta, garantizando una experiencia excepcional en cada etapa.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=400&fit=crop" 
                alt="Equipo AutoChile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a365d] mb-12">Nuestros Principios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">🎯</div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4 text-center">Misión</h3>
              <p className="text-gray-600 text-center">
                Facilitar el acceso a vehículos de calidad para todas las familias chilenas, 
                ofreciendo un servicio transparente, confiable y adaptado a las necesidades 
                específicas de cada cliente.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">👁️</div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4 text-center">Visión</h3>
              <p className="text-gray-600 text-center">
                Ser la concesionaria líder en Chile, reconocida por nuestra excelencia en 
                servicio al cliente, innovación en procesos y compromiso con la movilidad 
                sustentable del país.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">💎</div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4 text-center">Valores</h3>
              <ul className="space-y-2 text-gray-600">
                <li>🤝 <strong className="text-[#1a365d]">Transparencia:</strong> Información clara y honesta</li>
                <li>⭐ <strong className="text-[#1a365d]">Excelencia:</strong> Calidad en cada servicio</li>
                <li>🛡️ <strong className="text-[#1a365d]">Confianza:</strong> Relaciones duraderas</li>
                <li>🌱 <strong className="text-[#1a365d]">Compromiso:</strong> Con Chile y el medio ambiente</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a365d] mb-12">Nuestro Equipo Directivo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
                  alt="Carlos Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-[#1a365d] mb-2">Carlos Rodriguez</h4>
              <p className="text-sm text-[#c53030] font-semibold mb-3">CEO & Fundador</p>
              <p className="text-gray-600 text-sm">
                Ingeniero Comercial con más de 20 años en la industria automotriz. 
                Visionario detrás de AutoChile y apasionado por la innovación.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face" 
                  alt="María González"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-[#1a365d] mb-2">María González</h4>
              <p className="text-sm text-[#c53030] font-semibold mb-3">Directora Comercial</p>
              <p className="text-gray-600 text-sm">
                MBA con especialización en marketing automotriz. Lidera nuestras 
                estrategias de venta y experiencia del cliente.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" 
                  alt="Juan Silva"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-[#1a365d] mb-2">Juan Silva</h4>
              <p className="text-sm text-[#c53030] font-semibold mb-3">Director de Operaciones</p>
              <p className="text-gray-600 text-sm">
                Experto en logística y procesos automotrices. Garantiza la calidad 
                operacional en todas nuestras sucursales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logros */}
      <section className="py-16 bg-gradient-to-br from-[#1a365d] to-[#2d3748]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Nuestros Logros</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-white text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-[#ffd700] mb-2">Premio Excelencia 2023</h3>
              <p className="text-sm text-white">Reconocimiento a la mejor experiencia del cliente en el sector automotriz</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-white text-center">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-[#ffd700] mb-2">5,000+ Clientes Satisfechos</h3>
              <p className="text-sm text-white">Más de cinco mil familias han confiado en nosotros para su próximo auto</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-white text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-[#ffd700] mb-2">Carbono Neutral 2024</h3>
              <p className="text-sm text-white">Primera concesionaria en Chile en alcanzar la neutralidad de carbono</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-white text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-[#ffd700] mb-2">15 Años de Crecimiento</h3>
              <p className="text-sm text-white">Crecimiento sostenido año tras año, expandiéndonos por todo Chile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso Social */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Compromiso con Chile</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                En AutoChile creemos en retribuir a la comunidad que nos ha permitido crecer. 
                Por eso, desarrollamos iniciativas que impactan positivamente en la sociedad chilena:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span>🎓</span>
                  <div>
                    <strong className="text-[#1a365d]">Programa de Becas:</strong> Financiamos estudios técnicos automotrices
                  </div>
                </li>
                <li className="flex gap-3">
                  <span>🌳</span>
                  <div>
                    <strong className="text-[#1a365d]">Reforestación:</strong> Plantamos un árbol por cada auto vendido
                  </div>
                </li>
                <li className="flex gap-3">
                  <span>🚗</span>
                  <div>
                    <strong className="text-[#1a365d]">Movilidad Social:</strong> Facilitamos acceso vehicular a organizaciones sociales
                  </div>
                </li>
                <li className="flex gap-3">
                  <span>♻️</span>
                  <div>
                    <strong className="text-[#1a365d]">Reciclaje:</strong> Programa de reciclaje de vehículos al final de su vida útil
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop" 
                alt="Compromiso social AutoChile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuienesSomos;
