import { useState } from 'react';
import './PreguntasFrecuentes.css';

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
    <div className="preguntas-frecuentes">
      {/* Hero Section */}
      <section className="hero-faq">
        <div className="container">
          <div className="hero-faq-content">
            <h1>Preguntas Frecuentes</h1>
            <p>Encuentra respuestas a las consultas más comunes de nuestros clientes</p>
          </div>
        </div>
      </section>

      {/* Búsqueda Rápida */}
      <section className="section">
        <div className="container">
          <div className="busqueda-faq">
            <h2 className="text-center">¿En qué podemos ayudarte?</h2>
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Busca tu pregunta aquí..." 
                className="search-input"
              />
              <button className="search-btn">🔍</button>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="section bg-light">
        <div className="container">
          <div className="categorias-faq">
            <h3 className="text-center">Selecciona una categoría</h3>
            <div className="categorias-grid">
              {categorias.map(categoria => (
                <button
                  key={categoria.id}
                  className={`categoria-btn ${categoriaActiva === categoria.id ? 'activa' : ''}`}
                  onClick={() => {
                    setCategoriaActiva(categoria.id);
                    setPreguntaActiva(null);
                  }}
                >
                  <span className="categoria-icono">{categoria.icono}</span>
                  <span className="categoria-nombre">{categoria.nombre}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas y Respuestas */}
      <section className="section">
        <div className="container">
          <div className="faq-container">
            <h3 className="faq-categoria-titulo">
              {categorias.find(c => c.id === categoriaActiva)?.icono} {' '}
              {categorias.find(c => c.id === categoriaActiva)?.nombre}
            </h3>
            
            <div className="faq-lista">
              {preguntas[categoriaActiva]?.map((item, index) => (
                <div key={index} className="faq-item">
                  <button
                    className={`faq-pregunta ${preguntaActiva === index ? 'activa' : ''}`}
                    onClick={() => togglePregunta(index)}
                  >
                    <span className="pregunta-texto">{item.pregunta}</span>
                    <span className="pregunta-icono">
                      {preguntaActiva === index ? '−' : '+'}
                    </span>
                  </button>
                  
                  <div className={`faq-respuesta ${preguntaActiva === index ? 'mostrar' : ''}`}>
                    <div className="respuesta-contenido">
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
      <section className="section bg-primary">
        <div className="container">
          <h2 className="text-center" style={{color: 'white'}}>Te Ayudamos a Decidir</h2>
          <div className="estadisticas-ayuda">
            <div className="stat-ayuda">
              <div className="stat-numero">95%</div>
              <div className="stat-texto">De consultas resueltas online</div>
            </div>
            <div className="stat-ayuda">
              <div className="stat-numero">24/7</div>
              <div className="stat-texto">Asistencia por WhatsApp</div>
            </div>
            <div className="stat-ayuda">
              <div className="stat-numero">15min</div>
              <div className="stat-texto">Tiempo promedio de respuesta</div>
            </div>
            <div className="stat-ayuda">
              <div className="stat-numero">5⭐</div>
              <div className="stat-texto">Calificación en atención</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Directo */}
      <section className="section">
        <div className="container">
          <div className="contacto-directo">
            <h2 className="text-center">¿No encontraste tu respuesta?</h2>
            <p className="text-center">
              Nuestro equipo de expertos está listo para ayudarte con cualquier consulta específica.
            </p>
            
            <div className="contacto-opciones">
              <div className="contacto-opcion">
                <div className="contacto-icono">📞</div>
                <h3>Llámanos</h3>
                <p>Atención inmediata con nuestros ejecutivos</p>
                <a href="tel:+56222345678" className="btn">
                  +56 2 2234 5678
                </a>
              </div>

              <div className="contacto-opcion">
                <div className="contacto-icono">💬</div>
                <h3>WhatsApp</h3>
                <p>Respuesta rápida por mensaje</p>
                <a href="https://wa.me/56922345678" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  Escribir Mensaje
                </a>
              </div>

              <div className="contacto-opcion">
                <div className="contacto-icono">📧</div>
                <h3>Email</h3>
                <p>Consultas detalladas por correo</p>
                <a href="mailto:info@autochile.cl" className="btn">
                  info@autochile.cl
                </a>
              </div>

              <div className="contacto-opcion">
                <div className="contacto-icono">🏪</div>
                <h3>Visítanos</h3>
                <p>Atención personalizada en nuestro showroom</p>
                <button className="btn btn-secondary">
                  Ver Ubicaciones
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Útiles */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-center">Tips Útiles Antes de Comprar</h2>
          <div className="tips-grid">
            <div className="tip-item">
              <div className="tip-icono">💡</div>
              <h3>Define tu Presupuesto</h3>
              <p>Considera no solo el precio del auto, sino también seguro, mantención y combustible. La cuota mensual no debería superar el 30% de tus ingresos.</p>
            </div>

            <div className="tip-item">
              <div className="tip-icono">🔍</div>
              <h3>Investiga el Modelo</h3>
              <p>Revisa opiniones, consumo de combustible, costos de mantención y valor de reventa. Esto te ayudará a tomar la mejor decisión.</p>
            </div>

            <div className="tip-item">
              <div className="tip-icono">🚗</div>
              <h3>Prueba Antes de Comprar</h3>
              <p>Realiza un test drive en diferentes condiciones: ciudad, carretera, estacionamiento. Verifica que te sientes cómodo al conducir.</p>
            </div>

            <div className="tip-item">
              <div className="tip-icono">📋</div>
              <h3>Revisa la Documentación</h3>
              <p>Asegúrate de que todos los papeles estén en orden: padrón, permisos, revisión técnica y que no tenga multas pendientes.</p>
            </div>

            <div className="tip-item">
              <div className="tip-icono">🛡️</div>
              <h3>Considera la Garantía</h3>
              <p>Evalúa las opciones de garantía extendida y servicios adicionales como asistencia en carretera y mantenciones incluidas.</p>
            </div>

            <div className="tip-item">
              <div className="tip-icono">💰</div>
              <h3>Compara Financiamiento</h3>
              <p>No solo mires la cuota mensual, sino también la tasa de interés, gastos asociados y condiciones de prepago.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section bg-primary">
        <div className="container">
          <div className="cta-faq text-center">
            <h2 style={{color: 'white'}}>¿Listo para Encontrar tu Auto Ideal?</h2>
            <p style={{color: 'var(--light-gray)'}}>
              Con toda esta información, ya estás preparado para tomar la mejor decisión. 
              ¡Nuestro equipo te está esperando!
            </p>
            <div className="cta-actions">
              <button className="btn btn-secondary">
                🚗 Ver Catálogo
              </button>
              <button className="btn">
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