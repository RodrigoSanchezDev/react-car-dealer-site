import { useState } from 'react';
import { formatearPrecio } from '../data/vehiculos';

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
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a365d] to-[#2d3748] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">Cómo Comprar Tu Auto</h1>
            <p className="text-xl text-gray-200">Proceso simple y transparente en 5 pasos</p>
          </div>
        </div>
      </section>

      {/* Proceso de Compra */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a365d] mb-8">Tu Nuevo Auto en 5 Simples Pasos</h2>
          <div className="space-y-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-md flex gap-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#1a365d] text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="text-2xl font-bold text-[#1a365d] mb-3">🔍 Explora y Elige</h3>
                <p className="text-gray-600 mb-4">
                  Navega por nuestro catálogo online o visita nuestro showroom. 
                  Usa nuestros filtros para encontrar el vehículo perfecto según 
                  tu presupuesto, marca y necesidades.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Catálogo online actualizado</li>
                  <li>Test drive disponible</li>
                  <li>Asesoría personalizada</li>
                  <li>Comparación de modelos</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md flex gap-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#1a365d] text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="text-2xl font-bold text-[#1a365d] mb-3">💰 Planifica tu Financiamiento</h3>
                <p className="text-gray-600 mb-4">
                  Nuestros ejecutivos te ayudan a encontrar el plan de financiamiento 
                  que mejor se adapte a tu presupuesto. Trabajamos con los principales 
                  bancos de Chile.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Pre-aprobación en 15 minutos</li>
                  <li>Hasta 84 cuotas</li>
                  <li>Pie desde 10%</li>
                  <li>Tasa preferencial</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md flex gap-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#1a365d] text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="text-2xl font-bold text-[#1a365d] mb-3">📄 Prepara tu Documentación</h3>
                <p className="text-gray-600 mb-4">
                  Reúne los documentos necesarios para agilizar el proceso. 
                  Nuestro equipo te guía en cada paso y verifica que todo 
                  esté en orden.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>RUT vigente</li>
                  <li>Licencia de conducir</li>
                  <li>Liquidaciones de sueldo</li>
                  <li>Comprobante de ingresos</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md flex gap-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#1a365d] text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="text-2xl font-bold text-[#1a365d] mb-3">✍️ Firma y Formaliza</h3>
                <p className="text-gray-600 mb-4">
                  Una vez aprobado el financiamiento, procedemos con la firma 
                  del contrato. Nos encargamos de todos los trámites legales 
                  y documentación.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Contrato de compraventa</li>
                  <li>Transferencia de dominio</li>
                  <li>Seguro obligatorio</li>
                  <li>Permiso de circulación</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md flex gap-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#1a365d] text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">5</div>
              <div>
                <h3 className="text-2xl font-bold text-[#1a365d] mb-3">🚗 Recibe tu Auto</h3>
                <p className="text-gray-600 mb-4">
                  ¡Felicidades! Tu nuevo auto está listo. Lo entregamos con 
                  estanque lleno, documentación completa y garantía activada. 
                  También incluye explicación de funciones.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a365d] mb-8">Calculadora de Financiamiento</h2>
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-6">Simula tu Crédito Automotriz</h3>
              
              <div className="mb-6">
                <label className="block font-semibold text-[#2c3e50] mb-2">Precio del Vehículo</label>
                <input
                  type="range"
                  name="precio"
                  min="10000000"
                  max="40000000"
                  step="500000"
                  value={calculadora.precio}
                  onChange={handleCalculadoraChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#1a365d] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <span className="block mt-2 text-lg font-bold text-[#1a365d]">{formatearPrecio(calculadora.precio)}</span>
              </div>

              <div className="mb-6">
                <label className="block font-semibold text-[#2c3e50] mb-2">Pie (Inicial)</label>
                <input
                  type="range"
                  name="pie"
                  min="0"
                  max={calculadora.precio * 0.5}
                  step="100000"
                  value={calculadora.pie}
                  onChange={handleCalculadoraChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#1a365d] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <span className="block mt-2 text-lg font-bold text-[#1a365d]">{formatearPrecio(calculadora.pie)}</span>
              </div>

              <div className="mb-6">
                <label className="block font-semibold text-[#2c3e50] mb-2">Número de Cuotas</label>
                <select
                  name="cuotas"
                  value={calculadora.cuotas}
                  onChange={handleCalculadoraChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
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

              <div className="mb-6">
                <label className="block font-semibold text-[#2c3e50] mb-2">Tasa de Interés Anual (%)</label>
                <input
                  type="range"
                  name="tasa"
                  min="6"
                  max="20"
                  step="0.5"
                  value={calculadora.tasa}
                  onChange={handleCalculadoraChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#1a365d] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <span className="block mt-2 text-lg font-bold text-[#1a365d]">{calculadora.tasa}%</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#1a365d] mb-6">Resumen de tu Crédito</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Precio del Vehículo</span>
                  <span className="text-lg font-bold text-[#1a365d]">{formatearPrecio(calculadora.precio)}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Pie</span>
                  <span className="text-lg font-bold text-[#1a365d]">{formatearPrecio(calculadora.pie)}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Monto a Financiar</span>
                  <span className="text-lg font-bold text-[#1a365d]">{formatearPrecio(calculadora.precio - calculadora.pie)}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b-4 border-[#1a365d] pt-4">
                  <span className="text-gray-600 font-medium">Cuota Mensual</span>
                  <span className="text-2xl font-bold text-[#c53030]">{formatearPrecio(calcularCuota())}</span>
                </div>
              </div>
              
              <div className="flex gap-3 flex-wrap">
                <button className="flex-1 px-6 py-3 bg-[#1a365d] text-white rounded-lg font-semibold hover:bg-[#c53030] transition-colors">
                  📞 Solicitar Pre-aprobación
                </button>
                <button className="flex-1 px-6 py-3 bg-gray-200 text-[#1a365d] rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                  💬 Consultar por WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opciones de Financiamiento */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a365d] mb-8">Opciones de Financiamiento</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">🏦</div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4 text-center">Crédito Bancario</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-6 space-y-2">
                <p className="text-sm text-gray-700"><strong>Tasa desde:</strong> 6.9% anual</p>
                <p className="text-sm text-gray-700"><strong>Plazo:</strong> Hasta 84 meses</p>
                <p className="text-sm text-gray-700"><strong>Pie mínimo:</strong> 10%</p>
                <p className="text-sm text-gray-700"><strong>Aprobación:</strong> 24-48 horas</p>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Mejores tasas del mercado</li>
                <li>✅ Flexibilidad en cuotas</li>
                <li>✅ Seguro incluido</li>
                <li>✅ Sin penalización por prepago</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-4 border-[#ffd700] relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#ffd700] text-[#1a365d] px-4 py-1 rounded-full text-sm font-bold">⭐ Más Popular</div>
              <div className="text-5xl mb-4 text-center mt-2">💳</div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4 text-center">Leasing Automotriz</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-6 space-y-2">
                <p className="text-sm text-gray-700"><strong>Tasa desde:</strong> 7.5% anual</p>
                <p className="text-sm text-gray-700"><strong>Plazo:</strong> 24-60 meses</p>
                <p className="text-sm text-gray-700"><strong>Pie mínimo:</strong> 15%</p>
                <p className="text-sm text-gray-700"><strong>Aprobación:</strong> 15 minutos</p>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Beneficios tributarios</li>
                <li>✅ Renovación fácil</li>
                <li>✅ Mantención incluida</li>
                <li>✅ Ideal para empresas</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">💰</div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4 text-center">Pago al Contado</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-6 space-y-2">
                <p className="text-sm text-gray-700"><strong>Descuento:</strong> Hasta 5%</p>
                <p className="text-sm text-gray-700"><strong>Entrega:</strong> Inmediata</p>
                <p className="text-sm text-gray-700"><strong>Trámites:</strong> Mínimos</p>
                <p className="text-sm text-gray-700"><strong>Garantía:</strong> Extendida gratis</p>
              </div>
              <ul className="space-y-2 text-gray-600">
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
      <section className="py-16 bg-gradient-to-br from-[#1a365d] to-[#2d3748]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Documentos Necesarios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-4 text-[#ffd700]">👤 Persona Natural</h3>
              <ul className="space-y-2">
                <li>📄 RUT vigente</li>
                <li>🚗 Licencia de conducir clase B</li>
                <li>💼 Últimas 3 liquidaciones de sueldo</li>
                <li>🏦 Cartola bancaria (3 meses)</li>
                <li>📋 Certificado de AFP</li>
                <li>🏠 Comprobante de domicilio</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-4 text-[#ffd700]">🏢 Empresa</h3>
              <ul className="space-y-2">
                <li>📄 RUT de la empresa</li>
                <li>📋 Escritura de constitución</li>
                <li>💰 Estados financieros</li>
                <li>🧾 Declaración de IVA</li>
                <li>👨‍💼 Poder notarial del representante</li>
                <li>🏦 Cartola comercial</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-4 text-[#ffd700]">🔄 Vehículo en Parte de Pago</h3>
              <ul className="space-y-2">
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a365d] mb-12">Beneficios Incluidos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Garantía Extendida</h3>
              <p className="text-gray-600">Protección adicional hasta 5 años o 100,000 km en componentes principales.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Entrega a Domicilio</h3>
              <p className="text-gray-600">Llevamos tu auto nuevo hasta tu casa u oficina sin costo adicional.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Primera Mantención</h3>
              <p className="text-gray-600">Primera mantención gratuita incluida en nuestra red de talleres.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">App AutoChile</h3>
              <p className="text-gray-600">Gestiona tus pagos, mantenciones y garantía desde tu smartphone.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="text-5xl mb-4">🆘</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Asistencia 24/7</h3>
              <p className="text-gray-600">Servicio de asistencia en carretera las 24 horas durante el primer año.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Capacitación</h3>
              <p className="text-gray-600">Sesión de inducción completa sobre las funciones de tu nuevo vehículo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">¿Listo para tu Nuevo Auto?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Nuestro equipo está preparado para guiarte en cada paso del proceso. 
              ¡Comienza hoy mismo!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-8 py-4 bg-[#1a365d] text-white rounded-lg font-semibold hover:bg-[#c53030] transition-colors">
                🚗 Ver Catálogo
              </button>
              <button className="px-8 py-4 bg-gray-200 text-[#1a365d] rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                📞 Agendar Cita
              </button>
              <button className="px-8 py-4 bg-[#ffd700] text-[#1a365d] rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
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
