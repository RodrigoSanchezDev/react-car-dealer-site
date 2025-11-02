import { useState } from 'react';

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
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a365d] to-[#2d3748] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">Contáctanos</h1>
            <p className="text-xl text-gray-200">Estamos aquí para ayudarte a encontrar tu auto ideal</p>
          </div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#1a365d] mb-4">¿Cómo podemos ayudarte?</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nuestro equipo de expertos está disponible para responder todas tus consultas 
                sobre vehículos, financiamiento, garantías y servicios post-venta.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-4xl flex-shrink-0">📞</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a365d] mb-2">Llámanos</h3>
                    <p className="text-gray-700 mb-1"><a href="tel:+56222345678" className="text-[#1a365d] hover:text-[#c53030] font-semibold transition-colors">+56 2 2234 5678</a></p>
                    <span className="text-sm text-gray-500">Lun-Vie: 9:00-19:00, Sáb: 9:00-17:00</span>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-4xl flex-shrink-0">💬</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a365d] mb-2">WhatsApp</h3>
                    <p className="text-gray-700 mb-1"><a href="https://wa.me/56922345678" target="_blank" rel="noopener noreferrer" className="text-[#1a365d] hover:text-[#c53030] font-semibold transition-colors">+56 9 2234 5678</a></p>
                    <span className="text-sm text-gray-500">Respuesta inmediata</span>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-4xl flex-shrink-0">📧</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a365d] mb-2">Email</h3>
                    <p className="text-gray-700 mb-1"><a href="mailto:info@autochile.cl" className="text-[#1a365d] hover:text-[#c53030] font-semibold transition-colors">info@autochile.cl</a></p>
                    <span className="text-sm text-gray-500">Respuesta en 24 hrs</span>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-4xl flex-shrink-0">📍</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a365d] mb-2">Visítanos</h3>
                    <p className="text-gray-700 mb-1">Av. Providencia 1234, Santiago</p>
                    <span className="text-sm text-gray-500">Showroom principal</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white">
              <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-[#1a365d] mb-6">Envíanos un Mensaje</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="nombre" className="block font-semibold text-[#2c3e50] mb-2">Nombre Completo *</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Ingresa tu nombre completo"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="email" className="block font-semibold text-[#2c3e50] mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block font-semibold text-[#2c3e50] mb-2">Teléfono *</label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        placeholder="+56 9 1234 5678"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="tipoConsulta" className="block font-semibold text-[#2c3e50] mb-2">Tipo de Consulta</label>
                      <select
                        id="tipoConsulta"
                        name="tipoConsulta"
                        value={formData.tipoConsulta}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
                      >
                        <option value="general">Consulta General</option>
                        <option value="vehiculo">Información de Vehículo</option>
                        <option value="financiamiento">Financiamiento</option>
                        <option value="postventa">Post-venta</option>
                        <option value="garantia">Garantía</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="vehiculoInteres" className="block font-semibold text-[#2c3e50] mb-2">Vehículo de Interés</label>
                      <select
                        id="vehiculoInteres"
                        name="vehiculoInteres"
                        value={formData.vehiculoInteres}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
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

                  <div className="mb-6">
                    <label htmlFor="mensaje" className="block font-semibold text-[#2c3e50] mb-2">Mensaje *</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors resize-y"
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full px-6 py-4 bg-[#1a365d] text-white rounded-lg font-semibold hover:bg-[#c53030] transition-colors">
                    📤 Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horarios de Atención */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a365d] mb-12">Horarios de Atención</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#1a365d] mb-4 text-center">📞 Atención Telefónica</h3>
              <div className="space-y-2">
                <p className="text-gray-700 text-sm"><strong className="text-[#1a365d] font-semibold">Lunes a Viernes:</strong> 9:00 - 19:00</p>
                <p className="text-gray-700 text-sm"><strong className="text-[#1a365d] font-semibold">Sábados:</strong> 9:00 - 17:00</p>
                <p className="text-gray-700 text-sm"><strong className="text-[#1a365d] font-semibold">Domingos:</strong> 10:00 - 14:00</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#1a365d] mb-4 text-center">🏪 Showroom</h3>
              <div className="space-y-2">
                <p className="text-gray-700 text-sm"><strong className="text-[#1a365d] font-semibold">Lunes a Viernes:</strong> 9:00 - 19:00</p>
                <p className="text-gray-700 text-sm"><strong className="text-[#1a365d] font-semibold">Sábados:</strong> 9:00 - 17:00</p>
                <p className="text-gray-700 text-sm"><strong className="text-[#1a365d] font-semibold">Domingos:</strong> Cerrado</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#1a365d] mb-4 text-center">🔧 Servicio Técnico</h3>
              <div className="space-y-2">
                <p className="text-gray-700 text-sm"><strong className="text-[#1a365d] font-semibold">Lunes a Viernes:</strong> 8:00 - 18:00</p>
                <p className="text-gray-700 text-sm"><strong className="text-[#1a365d] font-semibold">Sábados:</strong> 8:00 - 13:00</p>
                <p className="text-gray-700 text-sm"><strong className="text-[#1a365d] font-semibold">Domingos:</strong> Cerrado</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#1a365d] mb-4 text-center">💬 WhatsApp</h3>
              <div className="space-y-2">
                <p className="text-gray-700 text-sm"><strong className="text-[#1a365d] font-semibold">Lunes a Sábado:</strong> 8:00 - 20:00</p>
                <p className="text-gray-700 text-sm"><strong className="text-[#1a365d] font-semibold">Domingos:</strong> 10:00 - 18:00</p>
                <p className="text-gray-700 text-sm"><strong className="text-[#1a365d] font-semibold">Emergencias:</strong> 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes Rápidas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a365d] mb-12">Consultas Frecuentes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-bold text-[#1a365d] mb-3">¿Hacen entrega a domicilio?</h4>
              <p className="text-gray-600">Sí, entregamos tu vehículo en tu hogar u oficina sin costo adicional en la Región Metropolitana.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-bold text-[#1a365d] mb-3">¿Qué documentos necesito?</h4>
              <p className="text-gray-600">RUT, Licencia de Conducir vigente, y comprobante de ingresos para el financiamiento.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-bold text-[#1a365d] mb-3">¿Aceptan vehículos en parte de pago?</h4>
              <p className="text-gray-600">Sí, evaluamos tu vehículo actual y lo consideramos como parte de pago para tu nuevo auto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Emergencias */}
      <section className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2d3748]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">¿Necesitas Ayuda Urgente?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Para emergencias vehiculares las 24 horas, contacta nuestro servicio de asistencia.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:+562280028862" className="px-8 py-4 bg-white text-[#1a365d] rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                🚨 Asistencia 24/7
              </a>
              <a href="https://wa.me/56922345678?text=Emergencia%20vehicular" className="px-8 py-4 bg-[#c53030] text-white rounded-lg font-semibold hover:bg-[#a02020] transition-colors inline-block" target="_blank" rel="noopener noreferrer">
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
