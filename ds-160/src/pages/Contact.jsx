// src/pages/Contact.jsx

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Contact() {
  // Form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Estados para mejorar la UX
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Actualizar campos del formulario
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // onSubmit: envía datos al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.visalegalexperts.com/api/contact', { //Cambia esta direccion por la direccion que usas en tu backend o dejala http://localhost:4000/api/contact para pruebas locales
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud al servidor');
      }

      const result = await response.json();
      console.log('Respuesta del servidor (Contact):', result);

      // Mensaje de éxito más profesional
      setSuccessMessage(
        '¡Tu mensaje ha sido enviado correctamente! Nos pondremos en contacto pronto.'
      );

      // Limpiar formulario
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error al enviar mensaje de contacto:', error);
      setErrorMessage(
        'Lo sentimos, ocurrió un problema al enviar tu mensaje. Intenta de nuevo más tarde.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-20"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Contacto</h2>

        {/* Mensajes globales de éxito o error */}
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-400 text-green-800 p-4 rounded mb-4"
          >
            {successMessage}
          </motion.div>
        )}
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-400 text-red-800 p-4 rounded mb-4"
          >
            {errorMessage}
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna Izquierda: información de contacto */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center">
              <MapPinIcon className="h-8 w-8 text-blue-600 mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Oficina Principal</h3>
                <p className="text-gray-600">1234 Brickell Avenue, Suite 567</p>
                <p className="text-gray-600"> Miami, FL 33131</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <PhoneIcon className="h-8 w-8 text-blue-600 mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Teléfono</h3>
                <p className="text-gray-600">+1 (809) 502-4126</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <EnvelopeIcon className="h-8 w-8 text-blue-600 mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Correo Electrónico</h3>
                <p className="text-gray-600">visalegalexperts@gmail.com
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed">
              Nuestro equipo está listo para atender tus dudas sobre el proceso 
              DS-160 y servicios de asesoría migratoria.
            </p>
          </motion.div>

          {/* Columna Derecha: Formulario */}
          <motion.form 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Mensaje"
              rows="5"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.message}
              onChange={handleChange}
              required
            />

            {/* Botón de envío con indicador de carga */}
            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-900 text-white px-6 py-3 rounded-lg w-full transition-colors ${
                loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-800'
              }`}
            >
              {loading ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}
