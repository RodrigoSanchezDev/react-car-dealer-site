import { useState } from 'react';
import { formatearPrecio } from '../data/vehiculos';
import './ComoComprar.css';

const ComoComprar = () => {
  const [calculadora, setCalculadora] = useState({
    precio: 18000000,
    pie: 3000000,
    cuotas: 60,
    tasa: 12
  });

  const calcularCuota = () => {
    const montoFinanciar = calculadora.precio - calculadora.pie;
    const tasaMensual = calculadora.tasa / 100 / 12;
    const cuota = montoFinanciar * (tasaMensual * Math.pow(1 + tasaMensual, calculadora.cuotas)) / 
                  (Math.pow(1 + tasaMensual, calculadora.cuotas) - 1);
    return Math.round(cuota);
  };

  const handleCalculadoraChange = (e) => {
    const { name, value } = e.target;
    setCalculadora(prev => ({
      ...prev,
      [name]: Number(value)
    }));
  };

  return (
    <div className="como-comprar">
      {/* Hero Section */}
      <section className="hero-comprar">
        <div className="container">
          <div className="hero-comprar-content">
            <h1>Cómo Comprar Tu Auto</h1>
            <p>Proceso simple y transparente en 5 pasos</p>
          </div>
        </div>
      </section>

      {/* Proceso de Compra */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">Tu Nuevo Auto en 5 Simples Pasos</h2>
          <div className="proceso-compra">
            <div className="paso-item">
              <div className="paso-numero">1</div>
              <div className="paso-content">
                <h3>🔍 Explora y Elige</h3>
                <p>
                  Navega por nuestro catálogo online o visita nuestro showroom. 
                  Usa nuestros filtros para encontrar el vehículo perfecto según 
                  tu presupuesto, marca y necesidades.
                </p>
                <ul>
                  <li>Catálogo online actualizado</li>
                  <li>Test drive disponible</li>
                  <li>Asesoría personalizada</li>
                  <li>Comparación de modelos</li>
                </ul>
              </div>
            </div>

            <div className="paso-item">
              <div className="paso-numero">2</div>
              <div className="paso-content">
                <h3>💰 Planifica tu Financiamiento</h3>
                <p>
                  Nuestros ejecutivos te ayudan a encontrar el plan de financiamiento 
                  que mejor se adapte a tu presupuesto. Trabajamos con los principales 
                  bancos de Chile.
                </p>
                <ul>
                  <li>Pre-aprobación en 15 minutos</li>
                  <li>Hasta 84 cuotas</li>
                  <li>Pie desde 10%</li>
                  <li>Tasa preferencial</li>
                </ul>
              </div>
            </div>

            <div className="paso-item">
              <div className="paso-numero">3</div>
              <div className="paso-content">
                <h3>📄 Prepara tu Documentación</h3>
                <p>
                  Reúne los documentos necesarios para agilizar el proceso. 
                  Nuestro equipo te guía en cada paso y verifica que todo 
                  esté en orden.
                </p>
                <ul>
                  <li>RUT vigente</li>
                  <li>Licencia de conducir</li>
                  <li>Liquidaciones de sueldo</li>
                  <li>Comprobante de ingresos</li>
                </ul>
              </div>
            </div>

            <div className="paso-item">
              <div className="paso-numero">4</div>
              <div className="paso-content">
                <h3>✍️ Firma y Formaliza</h3>
                <p>
                  Una vez aprobado el financiamiento, procedemos con la firma 
                  del contrato. Nos encargamos de todos los trámites legales 
                  y documentación.
                </p>
                <ul>
                  <li>Contrato de compraventa</li>
                  <li>Transferencia de dominio</li>
                  <li>Seguro obligatorio</li>
                  <li>Permiso de circulación</li>
                </ul>
              </div>
            </div>

            <div className="paso-item">
              <div className="paso-numero">5</div>
              <div className="paso-content">
                <h3>🚗 Recibe tu Auto</h3>
                <p>
                  ¡Felicidades! Tu nuevo auto está listo. Lo entregamos con 
                  estanque lleno, documentación completa y garantía activada. 
                  También incluye explicación de funciones.
                </p>
                <ul>
                  <li>Entrega a domicilio</li>
                  <li>Estanque lleno</li>
                  <li>Kit de emergencia</li>
                  <li>Manual de usuario</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculadora de Financiamiento */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-center">Calculadora de Financiamiento</h2>
          <div className="calculadora-container">
            <div className="calculadora-form">
              <h3>Simula tu Crédito Automotriz</h3>
              
              <div className="calc-group">
                <label>Precio del Vehículo</label>
                <input
                  type="range"
                  name="precio"
                  min="10000000"
                  max="40000000"
                  step="500000"
                  value={calculadora.precio}
                  onChange={handleCalculadoraChange}
                />
                <span className="calc-value">{formatearPrecio(calculadora.precio)}</span>
              </div>

              <div className="calc-group">
                <label>Pie (Inicial)</label>
                <input
                  type="range"
                  name="pie"
                  min="0"
                  max={calculadora.precio * 0.5}
                  step="100000"
                  value={calculadora.pie}
                  onChange={handleCalculadoraChange}
                />
                <span className="calc-value">{formatearPrecio(calculadora.pie)}</span>
              </div>

              <div className="calc-group">
                <label>Número de Cuotas</label>
                <select
                  name="cuotas"
                  value={calculadora.cuotas}
                  onChange={handleCalculadoraChange}
                  className="calc-select"
                >
                  <option value="12">12 meses</option>
                  <option value="24">24 meses</option>
                  <option value="36">36 meses</option>
                  <option value="48">48 meses</option>
                  <option value="60">60 meses</option>
                  <option value="72">72 meses</option>
                  <option value="84">84 meses</option>
                </select>
              </div>

              <div className="calc-group">
                <label>Tasa de Interés Anual (%)</label>
                <input
                  type="range"
                  name="tasa"
                  min="6"
                  max="20"
                  step="0.5"
                  value={calculadora.tasa}
                  onChange={handleCalculadoraChange}
                />
                <span className="calc-value">{calculadora.tasa}%</span>
              </div>
            </div>

            <div className="calculadora-resultado">
              <h3>Resumen de tu Crédito</h3>
              <div className="resultado-grid">
                <div className="resultado-item">
                  <span className="resultado-label">Precio del Vehículo</span>
                  <span className="resultado-valor">{formatearPrecio(calculadora.precio)}</span>
                </div>
                <div className="resultado-item">
                  <span className="resultado-label">Pie</span>
                  <span className="resultado-valor">{formatearPrecio(calculadora.pie)}</span>
                </div>
                <div className="resultado-item">
                  <span className="resultado-label">Monto a Financiar</span>
                  <span className="resultado-valor">{formatearPrecio(calculadora.precio - calculadora.pie)}</span>
                </div>
                <div className="resultado-item principal">
                  <span className="resultado-label">Cuota Mensual</span>
                  <span className="resultado-valor destacado">{formatearPrecio(calcularCuota())}</span>
                </div>
              </div>
              
              <div className="calc-actions">
                <button className="btn">
                  📞 Solicitar Pre-aprobación
                </button>
                <button className="btn btn-secondary">
                  💬 Consultar por WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opciones de Financiamiento */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">Opciones de Financiamiento</h2>
          <div className="financiamiento-grid">
            <div className="financiamiento-card">
              <div className="financiamiento-icon">🏦</div>
              <h3>Crédito Bancario</h3>
              <div className="financiamiento-features">
                <p><strong>Tasa desde:</strong> 6.9% anual</p>
                <p><strong>Plazo:</strong> Hasta 84 meses</p>
                <p><strong>Pie mínimo:</strong> 10%</p>
                <p><strong>Aprobación:</strong> 24-48 horas</p>
              </div>
              <ul>
                <li>✅ Mejores tasas del mercado</li>
                <li>✅ Flexibilidad en cuotas</li>
                <li>✅ Seguro incluido</li>
                <li>✅ Sin penalización por prepago</li>
              </ul>
            </div>

            <div className="financiamiento-card destacada">
              <div className="financiamiento-badge">⭐ Más Popular</div>
              <div className="financiamiento-icon">💳</div>
              <h3>Leasing Automotriz</h3>
              <div className="financiamiento-features">
                <p><strong>Tasa desde:</strong> 7.5% anual</p>
                <p><strong>Plazo:</strong> 24-60 meses</p>
                <p><strong>Pie mínimo:</strong> 15%</p>
                <p><strong>Aprobación:</strong> 15 minutos</p>
              </div>
              <ul>
                <li>✅ Beneficios tributarios</li>
                <li>✅ Renovación fácil</li>
                <li>✅ Mantención incluida</li>
                <li>✅ Ideal para empresas</li>
              </ul>
            </div>

            <div className="financiamiento-card">
              <div className="financiamiento-icon">💰</div>
              <h3>Pago al Contado</h3>
              <div className="financiamiento-features">
                <p><strong>Descuento:</strong> Hasta 5%</p>
                <p><strong>Entrega:</strong> Inmediata</p>
                <p><strong>Trámites:</strong> Mínimos</p>
                <p><strong>Garantía:</strong> Extendida gratis</p>
              </div>
              <ul>
                <li>✅ Mejor precio final</li>
                <li>✅ Sin intereses</li>
                <li>✅ Proceso más rápido</li>
                <li>✅ Garantía extendida gratuita</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documentos Necesarios */}
      <section className="section bg-primary">
        <div className="container">
          <h2 className="text-center" style={{color: 'white'}}>Documentos Necesarios</h2>
          <div className="documentos-grid">
            <div className="documento-categoria">
              <h3>👤 Persona Natural</h3>
              <ul>
                <li>📄 RUT vigente</li>
                <li>🚗 Licencia de conducir clase B</li>
                <li>💼 Últimas 3 liquidaciones de sueldo</li>
                <li>🏦 Cartola bancaria (3 meses)</li>
                <li>📋 Certificado de AFP</li>
                <li>🏠 Comprobante de domicilio</li>
              </ul>
            </div>

            <div className="documento-categoria">
              <h3>🏢 Empresa</h3>
              <ul>
                <li>📄 RUT de la empresa</li>
                <li>📋 Escritura de constitución</li>
                <li>💰 Estados financieros</li>
                <li>🧾 Declaración de IVA</li>
                <li>👨‍💼 Poder notarial del representante</li>
                <li>🏦 Cartola comercial</li>
              </ul>
            </div>

            <div className="documento-categoria">
              <h3>🔄 Vehículo en Parte de Pago</h3>
              <ul>
                <li>📜 Padrón original</li>
                <li>📋 Permiso de circulación</li>
                <li>🛡️ SOAP al día</li>
                <li>🔧 Revisión técnica vigente</li>
                <li>📸 Fotos del vehículo</li>
                <li>🔧 Informe mecánico (si aplica)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Adicionales */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">Beneficios Incluidos</h2>
          <div className="beneficios-grid">
            <div className="beneficio-item">
              <div className="beneficio-icon">🛡️</div>
              <h3>Garantía Extendida</h3>
              <p>Protección adicional hasta 5 años o 100,000 km en componentes principales.</p>
            </div>

            <div className="beneficio-item">
              <div className="beneficio-icon">🚚</div>
              <h3>Entrega a Domicilio</h3>
              <p>Llevamos tu auto nuevo hasta tu casa u oficina sin costo adicional.</p>
            </div>

            <div className="beneficio-item">
              <div className="beneficio-icon">🔧</div>
              <h3>Primera Mantención</h3>
              <p>Primera mantención gratuita incluida en nuestra red de talleres.</p>
            </div>

            <div className="beneficio-item">
              <div className="beneficio-icon">📱</div>
              <h3>App AutoChile</h3>
              <p>Gestiona tus pagos, mantenciones y garantía desde tu smartphone.</p>
            </div>

            <div className="beneficio-item">
              <div className="beneficio-icon">🆘</div>
              <h3>Asistencia 24/7</h3>
              <p>Servicio de asistencia en carretera las 24 horas durante el primer año.</p>
            </div>

            <div className="beneficio-item">
              <div className="beneficio-icon">🎓</div>
              <h3>Capacitación</h3>
              <p>Sesión de inducción completa sobre las funciones de tu nuevo vehículo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section bg-light">
        <div className="container">
          <div className="cta-comprar text-center">
            <h2>¿Listo para tu Nuevo Auto?</h2>
            <p>
              Nuestro equipo está preparado para guiarte en cada paso del proceso. 
              ¡Comienza hoy mismo!
            </p>
            <div className="cta-actions">
              <button className="btn">
                🚗 Ver Catálogo
              </button>
              <button className="btn btn-secondary">
                📞 Agendar Cita
              </button>
              <button className="btn">
                💬 Consultar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComoComprar;