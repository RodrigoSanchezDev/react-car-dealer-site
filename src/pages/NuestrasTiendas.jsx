import { sucursales } from '../data/vehiculos';

const NuestrasTiendas = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a365d] to-[#2d3748] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">Nuestras Tiendas</h1>
            <p className="text-xl text-gray-200">Encuéntranos en las principales ciudades de Chile</p>
          </div>
        </div>
      </section>

      {/* Información General */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-center text-[#1a365d] mb-6">Presencia Nacional</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Con sucursales estratégicamente ubicadas desde Santiago hasta Concepción, 
              AutoChile está cerca de ti. Cada una de nuestras tiendas está equipada 
              con showroom moderno, área de servicio técnico y un equipo de profesionales 
              listos para ayudarte a encontrar tu próximo vehículo.
            </p>
          </div>
        </div>
      </section>

      {/* Sucursales */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {sucursales.map((sucursal) => (
              <div key={sucursal.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4 pb-4 border-b-2 border-gray-100">
                  <h3 className="text-2xl font-bold text-[#1a365d]">{sucursal.nombre}</h3>
                  <div className="bg-[#ffd700] text-[#1a365d] px-3 py-1 rounded-full text-sm font-semibold">
                    🏪 Sucursal Oficial
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3 items-start">
                    <span className="text-2xl flex-shrink-0">📍</span>
                    <div>
                      <strong className="block text-[#1a365d] font-semibold mb-1">Dirección:</strong>
                      <p className="text-gray-600 text-sm">{sucursal.direccion}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <span className="text-2xl flex-shrink-0">📞</span>
                    <div>
                      <strong className="block text-[#1a365d] font-semibold mb-1">Teléfono:</strong>
                      <p className="text-gray-600 text-sm">
                        <a href={`tel:${sucursal.telefono}`} className="text-[#1a365d] hover:text-[#c53030] transition-colors">{sucursal.telefono}</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <span className="text-2xl flex-shrink-0">🕒</span>
                    <div>
                      <strong className="block text-[#1a365d] font-semibold mb-1">Horario de Atención:</strong>
                      <p className="text-gray-600 text-sm">{sucursal.horario}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <span className="text-2xl flex-shrink-0">👨‍💼</span>
                    <div>
                      <strong className="block text-[#1a365d] font-semibold mb-1">Gerente:</strong>
                      <p className="text-gray-600 text-sm">{sucursal.gerente}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-[#1a365d] mb-3">Servicios Disponibles:</h4>
                  <div className="flex flex-wrap gap-2">
                    {sucursal.servicios.map((servicio, index) => (
                      <span key={index} className="bg-blue-100 text-[#1a365d] px-3 py-1 rounded-full text-sm">
                        {servicio}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 flex-wrap">
                  <a href={`tel:${sucursal.telefono}`} className="flex-1 px-6 py-3 bg-[#1a365d] text-white rounded-lg font-semibold hover:bg-[#c53030] hover:text-white transition-colors text-center">
                    📞 Llamar
                  </a>
                  <a 
                    href={`https://www.google.com/maps/search/${encodeURIComponent(sucursal.direccion)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gray-200 text-[#1a365d] rounded-lg font-semibold hover:bg-gray-300 transition-colors text-center"
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a365d] mb-12">Cobertura Nacional</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">🏙️</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">Región Metropolitana</h3>
              <p className="text-gray-600 mb-3">2 sucursales en Santiago</p>
              <ul className="text-left text-gray-700 space-y-1">
                <li>Santiago Centro - Providencia</li>
                <li>Las Condes - Sector Oriente</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">🌊</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">Región de Valparaíso</h3>
              <p className="text-gray-600 mb-3">1 sucursal en el puerto</p>
              <ul className="text-left text-gray-700 space-y-1">
                <li>Valparaíso Centro</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">🌲</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">Región del Biobío</h3>
              <p className="text-gray-600 mb-3">1 sucursal en el sur</p>
              <ul className="text-left text-gray-700 space-y-1">
                <li>Concepción Centro</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios por Sucursal */}
      <section className="py-16 bg-gradient-to-br from-[#1a365d] to-[#2d3748]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Servicios Completos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-white mb-3">Showroom</h3>
              <p className="text-gray-200 text-sm">Vehículos nuevos y usados en exhibición con información detallada y posibilidad de test drive.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">Financiamiento</h3>
              <p className="text-gray-200 text-sm">Asesoría personalizada y convenios con los principales bancos de Chile para el mejor financiamiento.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-3">Servicio Técnico</h3>
              <p className="text-gray-200 text-sm">Mantención preventiva, reparaciones y repuestos originales con técnicos certificados.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-3">Seguros</h3>
              <p className="text-gray-200 text-sm">Seguros vehiculares con las mejores compañías y cobertura adaptada a tus necesidades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Horarios Especiales */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#1a365d] mb-12">Información Importante</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-[#1a365d] mb-3">📅 Horarios Festivos</h3>
                <p className="text-gray-600">Durante días festivos operamos con horario reducido. Consulta horarios especiales llamando directamente a la sucursal.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-[#1a365d] mb-3">🚨 Emergencias</h3>
                <p className="text-gray-600">Para emergencias vehiculares fuera de horario, contacta nuestro servicio 24/7 al +56 2 2800 AUTO (2886).</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-[#1a365d] mb-3">📱 Cita Previa</h3>
                <p className="text-gray-600">Recomendamos agendar cita previa para test drives y servicios técnicos para garantizar disponibilidad.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-[#1a365d] mb-3">🎯 Visitas Comerciales</h3>
                <p className="text-gray-600">¿No puedes venir? Nuestros ejecutivos pueden visitarte en tu hogar u oficina. Agenda tu cita.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">¿Listo para Visitarnos?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Nuestro equipo está esperándote para ayudarte a encontrar el auto perfecto. 
              Agenda tu cita o visítanos directamente.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:+56222345678" className="px-8 py-4 bg-[#1a365d] text-white rounded-lg font-semibold hover:bg-[#c53030] hover:text-white transition-colors inline-block">
                📞 Llamar Ahora
              </a>
              <a href="https://wa.me/56922345678" className="px-8 py-4 bg-gray-200 text-[#1a365d] rounded-lg font-semibold hover:bg-gray-300 transition-colors inline-block" target="_blank" rel="noopener noreferrer">
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
