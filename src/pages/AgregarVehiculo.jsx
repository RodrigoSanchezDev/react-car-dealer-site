import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVehiculos } from '../context/VehiculosContext';

const AgregarVehiculo = () => {
  const navigate = useNavigate();
  const { agregarVehiculo } = useVehiculos();

  const [formData, setFormData] = useState({
    marca: '',
    modelo: '',
    año: new Date().getFullYear(),
    precio: '',
    imagen: '',
    combustible: 'Gasolina',
    transmision: 'Manual',
    kilometraje: 0,
    color: '',
    ubicacion: 'Santiago',
    descripcion: '',
    caracteristicas: ''
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Limpiar error del campo al modificarlo
    if (errores[name]) {
      setErrores({
        ...errores,
        [name]: ''
      });
    }
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!formData.marca.trim()) {
      nuevosErrores.marca = 'La marca es obligatoria';
    }
    if (!formData.modelo.trim()) {
      nuevosErrores.modelo = 'El modelo es obligatorio';
    }
    if (!formData.precio || formData.precio <= 0) {
      nuevosErrores.precio = 'El precio debe ser mayor a 0';
    }
    if (formData.año < 1900 || formData.año > new Date().getFullYear() + 1) {
      nuevosErrores.año = 'Año inválido';
    }
    if (!formData.color.trim()) {
      nuevosErrores.color = 'El color es obligatorio';
    }
    if (!formData.descripcion.trim()) {
      nuevosErrores.descripcion = 'La descripción es obligatoria';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    // Procesar características (convertir string separado por comas a array)
    const caracteristicasArray = formData.caracteristicas
      .split(',')
      .map(c => c.trim())
      .filter(c => c.length > 0);

    // Preparar datos del vehículo
    const nuevoVehiculo = {
      ...formData,
      precio: parseInt(formData.precio),
      año: parseInt(formData.año),
      kilometraje: parseInt(formData.kilometraje),
      caracteristicas: caracteristicasArray.length > 0 ? caracteristicasArray : ['Características por definir'],
      imagen: formData.imagen || 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop'
    };

    // Agregar vehículo al inventario
    agregarVehiculo(nuevoVehiculo);

    // Mostrar mensaje de éxito
    alert('¡Vehículo agregado exitosamente!');

    // Redirigir al inventario
    navigate('/inventario');
  };

  const handleCancelar = () => {
    if (window.confirm('¿Estás seguro de que deseas cancelar? Los datos no guardados se perderán.')) {
      navigate('/inventario');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1a365d] mb-2">Agregar Nuevo Vehículo</h1>
            <p className="text-gray-600">Completa el formulario para agregar un vehículo al inventario</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            {/* Información Básica */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#1a365d] border-b-2 border-gray-200 pb-2">Información Básica</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="marca" className="block text-sm font-semibold text-gray-700 mb-2">
                    Marca *
                  </label>
                  <input
                    type="text"
                    id="marca"
                    name="marca"
                    value={formData.marca}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                      errores.marca 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:border-[#1a365d]'
                    }`}
                    placeholder="Ej: Toyota, Chevrolet, Nissan"
                  />
                  {errores.marca && (
                    <span className="text-red-500 text-sm mt-1 block">{errores.marca}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="modelo" className="block text-sm font-semibold text-gray-700 mb-2">
                    Modelo *
                  </label>
                  <input
                    type="text"
                    id="modelo"
                    name="modelo"
                    value={formData.modelo}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                      errores.modelo 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:border-[#1a365d]'
                    }`}
                    placeholder="Ej: Corolla, Tracker, Kicks"
                  />
                  {errores.modelo && (
                    <span className="text-red-500 text-sm mt-1 block">{errores.modelo}</span>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="año" className="block text-sm font-semibold text-gray-700 mb-2">
                    Año *
                  </label>
                  <input
                    type="number"
                    id="año"
                    name="año"
                    value={formData.año}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                      errores.año 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:border-[#1a365d]'
                    }`}
                    min="1900"
                    max={new Date().getFullYear() + 1}
                  />
                  {errores.año && (
                    <span className="text-red-500 text-sm mt-1 block">{errores.año}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="precio" className="block text-sm font-semibold text-gray-700 mb-2">
                    Precio (CLP) *
                  </label>
                  <input
                    type="number"
                    id="precio"
                    name="precio"
                    value={formData.precio}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                      errores.precio 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:border-[#1a365d]'
                    }`}
                    placeholder="15000000"
                    min="0"
                  />
                  {errores.precio && (
                    <span className="text-red-500 text-sm mt-1 block">{errores.precio}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Características Técnicas */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#1a365d] border-b-2 border-gray-200 pb-2">Características Técnicas</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="combustible" className="block text-sm font-semibold text-gray-700 mb-2">
                    Combustible
                  </label>
                  <select
                    id="combustible"
                    name="combustible"
                    value={formData.combustible}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
                  >
                    <option value="Gasolina">Gasolina</option>
                    <option value="Diésel">Diésel</option>
                    <option value="Híbrido">Híbrido</option>
                    <option value="Eléctrico">Eléctrico</option>
                    <option value="GNV">GNV</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="transmision" className="block text-sm font-semibold text-gray-700 mb-2">
                    Transmisión
                  </label>
                  <select
                    id="transmision"
                    name="transmision"
                    value={formData.transmision}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
                  >
                    <option value="Manual">Manual</option>
                    <option value="Automática">Automática</option>
                    <option value="CVT">CVT</option>
                    <option value="Secuencial">Secuencial</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="kilometraje" className="block text-sm font-semibold text-gray-700 mb-2">
                    Kilometraje
                  </label>
                  <input
                    type="number"
                    id="kilometraje"
                    name="kilometraje"
                    value={formData.kilometraje}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
                    placeholder="0"
                    min="0"
                  />
                </div>

                <div>
                  <label htmlFor="color" className="block text-sm font-semibold text-gray-700 mb-2">
                    Color *
                  </label>
                  <input
                    type="text"
                    id="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                      errores.color 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:border-[#1a365d]'
                    }`}
                    placeholder="Ej: Blanco Perla, Negro Ébano"
                  />
                  {errores.color && (
                    <span className="text-red-500 text-sm mt-1 block">{errores.color}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Ubicación y Detalles */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#1a365d] border-b-2 border-gray-200 pb-2">Ubicación y Detalles</h2>
              
              <div>
                <label htmlFor="ubicacion" className="block text-sm font-semibold text-gray-700 mb-2">
                  Ubicación
                </label>
                <select
                  id="ubicacion"
                  name="ubicacion"
                  value={formData.ubicacion}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
                >
                  <option value="Santiago">Santiago</option>
                  <option value="Valparaíso">Valparaíso</option>
                  <option value="Concepción">Concepción</option>
                  <option value="La Serena">La Serena</option>
                  <option value="Viña del Mar">Viña del Mar</option>
                  <option value="Temuco">Temuco</option>
                  <option value="Antofagasta">Antofagasta</option>
                </select>
              </div>

              <div>
                <label htmlFor="imagen" className="block text-sm font-semibold text-gray-700 mb-2">
                  URL de Imagen
                </label>
                <input
                  type="url"
                  id="imagen"
                  name="imagen"
                  value={formData.imagen}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
                  placeholder="https://ejemplo.com/imagen.jpg (opcional)"
                />
                <small className="text-gray-500 text-sm mt-1 block">
                  Si no se proporciona, se usará una imagen por defecto
                </small>
              </div>

              <div>
                <label htmlFor="descripcion" className="block text-sm font-semibold text-gray-700 mb-2">
                  Descripción *
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                    errores.descripcion 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:border-[#1a365d]'
                  }`}
                  rows="4"
                  placeholder="Describe las características principales del vehículo..."
                />
                {errores.descripcion && (
                  <span className="text-red-500 text-sm mt-1 block">{errores.descripcion}</span>
                )}
              </div>

              <div>
                <label htmlFor="caracteristicas" className="block text-sm font-semibold text-gray-700 mb-2">
                  Características
                </label>
                <input
                  type="text"
                  id="caracteristicas"
                  name="caracteristicas"
                  value={formData.caracteristicas}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1a365d] transition-colors"
                  placeholder="Cámara de reversa, Sensores, Control crucero (separadas por comas)"
                />
                <small className="text-gray-500 text-sm mt-1 block">
                  Ingresa las características separadas por comas
                </small>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-4 justify-end pt-6 border-t-2 border-gray-200">
              <button 
                type="button" 
                onClick={handleCancelar} 
                className="px-8 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                Cancelar
              </button>
              <button 
                type="submit" 
                className="px-8 py-3 bg-[#1a365d] text-white rounded-lg font-semibold hover:bg-[#c53030] transition-colors"
              >
                Agregar Vehículo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgregarVehiculo;
