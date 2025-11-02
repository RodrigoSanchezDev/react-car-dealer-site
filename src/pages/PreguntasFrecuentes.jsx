import { useState } from 'react';

const PreguntasFrecuentes = () => {
  const [preguntaActiva, setPreguntaActiva] = useState(null);
  const [categoriaActiva, setCategoriaActiva] = useState('general');

  const togglePregunta = (index) => {
    setPreguntaActiva(preguntaActiva === index ? null : index);
  };

  const preguntas = {
    general: [
      {
        pregunta: "¿Cuáles son los horarios de atención?",
        respuesta: "Atendemos de lunes a viernes de 9:00 a 19:00 horas, sábados de 9:00 a 17:00 horas. Los domingos nuestro showroom permanece cerrado, pero puedes contactarnos por WhatsApp de 10:00 a 18:00 horas."
      },
      {
        pregunta: "¿Realizan entregas a domicilio?",
        respuesta: "Sí, entregamos tu vehículo nuevo sin costo adicional en la Región Metropolitana. Para otras regiones, coordinamos la entrega con un costo preferencial que varía según la distancia."
      },
      {
        pregunta: "¿Qué garantía tienen los vehículos?",
        respuesta: "Todos nuestros vehículos nuevos incluyen la garantía de fábrica (generalmente 3 años o 100,000 km). Además, ofrecemos garantía extendida opcional hasta 5 años. Los vehículos usados incluyen garantía mínima de 6 meses."
      },
      {
        pregunta: "¿Puedo hacer test drive?",
        respuesta: "Por supuesto. Ofrecemos test drives de todos nuestros vehículos disponibles. Solo necesitas presentar tu licencia de conducir vigente y coordinar una cita con nuestros ejecutivos."
      },
      {
        pregunta: "¿Aceptan vehículos en parte de pago?",
        respuesta: "Sí, evaluamos tu vehículo actual y lo consideramos como parte de pago. Nuestros tasadores certificados realizan una evaluación completa y te ofrecemos el mejor precio del mercado."
      }
    ],
    financiamiento: [
      {
        pregunta: "¿Qué documentos necesito para el financiamiento?",
        respuesta: "Para personas naturales: RUT, licencia de conducir, últimas 3 liquidaciones de sueldo, cartola bancaria de 3 meses y certificado de AFP. Para empresas se requiere documentación adicional como escritura de constitución y estados financieros."
      },
      {
        pregunta: "¿Cuál es el monto mínimo de pie?",
        respuesta: "El pie mínimo varía según el tipo de financiamiento. Para crédito bancario tradicional es desde 10%, para leasing desde 15%. En algunos casos especiales podemos evaluar financiamiento con menor pie."
      },
      {
        pregunta: "¿En cuánto tiempo se aprueba el crédito?",
        respuesta: "La pre-aprobación puede ser inmediata (15 minutos) con documentación completa. La aprobación final del banco generalmente toma entre 24 a 48 horas hábiles."
      },
      {
        pregunta: "¿Puedo cancelar anticipadamente sin penalización?",
        respuesta: "Sí, todos nuestros créditos permiten prepago total o parcial sin penalización. Esto te permite ahorrar en intereses si decides cancelar antes del plazo acordado."
      },
      {
        pregunta: "¿Qué pasa si no puedo pagar una cuota?",
        respuesta: "Contacta inmediatamente a nuestro equipo de créditos. Ofrecemos planes de refinanciamiento y renegociación. Es importante comunicarse antes del vencimiento para evitar gastos adicionales."
      }
    ],
    vehiculos: [
      {
        pregunta: "¿Los precios publicados son finales?",
        respuesta: "Los precios publicados incluyen IVA pero no incluyen gastos de transferencia, permiso de circulación y seguro obligatorio. Estos costos adicionales rondan los $200,000 - $300,000 pesos."
      },
      {
        pregunta: "¿Puedo reservar un vehículo?",
        respuesta: "Sí, puedes reservar cualquier vehículo con una señal de $500,000 pesos. La reserva tiene validez de 15 días para completar la compra y la documentación."
      },
      {
        pregunta: "¿Cómo sé si un vehículo usado está en buen estado?",
        respuesta: "Todos nuestros vehículos usados pasan por una inspección técnica de 120 puntos. Incluimos informe detallado del estado mecánico y estético, además de la historia del vehículo."
      },
      {
        pregunta: "¿Puedo cambiar mi vehículo después de comprarlo?",
        respuesta: "Ofrecemos garantía de satisfacción de 7 días. Si no estás conforme con tu compra, puedes cambiarlo por otro vehículo de valor similar o superior (pagando la diferencia)."
      },
      {
        pregunta: "¿Incluyen el primer tanque de combustible?",
        respuesta: "Sí, todos los vehículos se entregan con el estanque lleno de combustible, además del kit de emergencia reglamentario y manual de usuario."
      }
    ],
    servicio: [
      {
        pregunta: "¿Dónde puedo hacer la mantención de mi vehículo?",
        respuesta: "Contamos con talleres autorizados en Santiago, Valparaíso y Concepción. También tenemos convenios con la red de talleres oficiales de cada marca en todo Chile."
      },
      {
        pregunta: "¿La mantención anula la garantía?",
        respuesta: "No, siempre que realices las mantenciones en talleres autorizados y con repuestos originales. Mantener el plan de mantención es requisito para conservar la garantía."
      },
      {
        pregunta: "¿Ofrecen servicio de grúa?",
        respuesta: "Sí, incluimos servicio de asistencia en carretera 24/7 durante el primer año. Esto incluye grúa, auxilio mecánico básico y combustible de emergencia."
      },
      {
        pregunta: "¿Puedo agendar mi mantención online?",
        respuesta: "Sí, a través de nuestra app AutoChile o sitio web puedes agendar mantenciones, consultar historial de servicios y recibir recordatorios automáticos."
      },
      {
        pregunta: "¿Qué incluye la primera mantención gratuita?",
        respuesta: "La primera mantención incluye cambio de aceite y filtros, revisión de 30 puntos, diagnóstico computarizado y lavado básico. Generalmente se realiza a los 5,000 km o 6 meses."
      }
    ],
    legal: [
      {
        pregunta: "¿Quién se encarga de la transferencia del vehículo?",
        respuesta: "Nosotros nos encargamos de todos los trámites de transferencia. Solo debes firmar los documentos y esperar que llegue el padrón a tu domicilio en 15-20 días hábiles."
      },
      {
        pregunta: "¿Qué pasa si el vehículo tiene multas pendientes?",
        respuesta: "Verificamos que todos los vehículos estén libres de multas antes de la venta. Si aparece alguna multa posterior a la fecha de transferencia, no es responsabilidad del comprador."
      },
      {
        pregunta: "¿Necesito seguro antes de retirar el vehículo?",
        respuesta: "Sí, es obligatorio contar con seguro automotriz antes de retirar el vehículo. Te ayudamos a cotizar y contratar el seguro que mejor se adapte a tus necesidades."
      },
      {
        pregunta: "¿Puedo manejar el auto antes de que llegue el padrón?",
        respuesta: "Sí, te entregamos un permiso de circulación temporal válido por 30 días mientras tramitamos el padrón definitivo. Este documento te permite circular normalmente."
      },
      {
        pregunta: "¿Qué pasa si hay problemas con el financiamiento después de retirar el auto?",
        respuesta: "El vehículo se entrega solo con financiamiento 100% aprobado y documentado. Una vez entregado, el crédito está garantizado según las condiciones pactadas."
      }
    ]
  };

  const categorias = [
    { id: 'general', nombre: 'General', icono: '❓' },
    { id: 'financiamiento', nombre: 'Financiamiento', icono: '💰' },
    { id: 'vehiculos', nombre: 'Vehículos', icono: '🚗' },
    { id: 'servicio', nombre: 'Servicio', icono: '🔧' },
    { id: 'legal', nombre: 'Legal', icono: '📄' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a365d] to-[#2d3748] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">Preguntas Frecuentes</h1>
            <p className="text-xl text-gray-200">Encuentra respuestas a las consultas más comunes de nuestros clientes</p>
          </div>
        </div>
      </section>

      {/* Búsqueda Rápida */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6 text-center">¿En qué podemos ayudarte?</h2>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Busca tu pregunta aquí..." 
                className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:border-[#1a365d] transition-colors"
              />
              <button className="px-8 py-4 bg-[#1a365d] text-white rounded-lg font-semibold hover:bg-[#c53030] transition-colors">
                🔍
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-6 text-center">Selecciona una categoría</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categorias.map(categoria => (
                <button
                  key={categoria.id}
                  className={`bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all flex flex-col items-center gap-2 border-2 ${
                    categoriaActiva === categoria.id 
                      ? 'border-[#1a365d] bg-blue-50' 
                      : 'border-transparent'
                  }`}
                  onClick={() => {
                    setCategoriaActiva(categoria.id);
                    setPreguntaActiva(null);
                  }}
                >
                  <span className="text-3xl">{categoria.icono}</span>
                  <span className="text-sm font-semibold text-[#2c3e50]">{categoria.nombre}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas y Respuestas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">
              {categorias.find(c => c.id === categoriaActiva)?.icono} {' '}
              {categorias.find(c => c.id === categoriaActiva)?.nombre}
            </h3>
            
            <div className="space-y-4">
              {preguntas[categoriaActiva]?.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <button
                    className={`w-full text-left p-6 flex justify-between items-center gap-4 transition-colors ${
                      preguntaActiva === index ? 'bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => togglePregunta(index)}
                  >
                    <span className="text-lg font-semibold text-[#2c3e50] flex-1">{item.pregunta}</span>
                    <span className="text-2xl font-bold text-[#1a365d] flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      {preguntaActiva === index ? '−' : '+'}
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      preguntaActiva === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                      <p>{item.respuesta}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas de Ayuda */}
      <section className="py-16 bg-[#1a365d]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-white mb-12">Te Ayudamos a Decidir</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-200">De consultas resueltas online</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-200">Asistencia por WhatsApp</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">15min</div>
              <div className="text-gray-200">Tiempo promedio de respuesta</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">5⭐</div>
              <div className="text-gray-200">Calificación en atención</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Directo */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4 text-center">¿No encontraste tu respuesta?</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Nuestro equipo de expertos está listo para ayudarte con cualquier consulta específica.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-[#1a365d] mb-2">Llámanos</h3>
                <p className="text-gray-600 mb-4">Atención inmediata con nuestros ejecutivos</p>
                <a 
                  href="tel:+56222345678" 
                  className="inline-block px-6 py-3 bg-[#1a365d] text-white rounded-lg font-semibold hover:bg-[#c53030] transition-colors"
                >
                  +56 2 2234 5678
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-[#1a365d] mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Respuesta rápida por mensaje</p>
                <a 
                  href="https://wa.me/56922345678" 
                  className="inline-block px-6 py-3 bg-[#c53030] text-white rounded-lg font-semibold hover:bg-[#1a365d] transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Escribir Mensaje
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-[#1a365d] mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Consultas detalladas por correo</p>
                <a 
                  href="mailto:info@autochile.cl" 
                  className="inline-block px-6 py-3 bg-[#1a365d] text-white rounded-lg font-semibold hover:bg-[#c53030] transition-colors"
                >
                  info@autochile.cl
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">🏪</div>
                <h3 className="text-xl font-bold text-[#1a365d] mb-2">Visítanos</h3>
                <p className="text-gray-600 mb-4">Atención personalizada en nuestro showroom</p>
                <button className="px-6 py-3 bg-[#c53030] text-white rounded-lg font-semibold hover:bg-[#1a365d] transition-colors">
                  Ver Ubicaciones
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Útiles */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-[#1a365d] mb-12">Tips Útiles Antes de Comprar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Define tu Presupuesto</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Considera no solo el precio del auto, sino también seguro, mantención y combustible. La cuota mensual no debería superar el 30% de tus ingresos.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Investiga el Modelo</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Revisa opiniones, consumo de combustible, costos de mantención y valor de reventa. Esto te ayudará a tomar la mejor decisión.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Prueba Antes de Comprar</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Realiza un test drive en diferentes condiciones: ciudad, carretera, estacionamiento. Verifica que te sientes cómodo al conducir.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Revisa la Documentación</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Asegúrate de que todos los papeles estén en orden: padrón, permisos, revisión técnica y que no tenga multas pendientes.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Considera la Garantía</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Evalúa las opciones de garantía extendida y servicios adicionales como asistencia en carretera y mantenciones incluidas.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Compara Financiamiento</h3>
              <p className="text-gray-600 text-sm leading-relaxed">No solo mires la cuota mensual, sino también la tasa de interés, gastos asociados y condiciones de prepago.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#1a365d]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">¿Listo para Encontrar tu Auto Ideal?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Con toda esta información, ya estás preparado para tomar la mejor decisión. 
              ¡Nuestro equipo te está esperando!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-8 py-4 bg-[#c53030] text-white rounded-lg font-semibold hover:bg-[#ffd700] hover:text-[#1a365d] transition-colors text-lg">
                🚗 Ver Catálogo
              </button>
              <button className="px-8 py-4 bg-white text-[#1a365d] rounded-lg font-semibold hover:bg-[#ffd700] transition-colors text-lg">
                📞 Hablar con Experto
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreguntasFrecuentes;
