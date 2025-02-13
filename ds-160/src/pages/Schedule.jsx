// src/pages/Schedule.jsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Schedule() {
  useEffect(() => {
    // Inyectamos el script del Calendly (widget inline).
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">

        {/* Sección estilo Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-8 mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Agenda tu Cita de Asesoría
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Programa una reunión con nuestro equipo para <strong>resolver 
            todas tus dudas</strong> sobre el formulario DS-160 y el proceso 
            de solicitud de visa. Recibirás orientación personalizada por 
            parte de profesionales en derecho migratorio.
          </p>
        </motion.div>

        {/* Sección de instrucciones y recomendaciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            ¿Cómo funciona esta cita de asesoría?
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
            <li>
              <strong>Duración aproximada:</strong> 30 minutos. El tiempo 
              suficiente para plantear tus inquietudes y recibir 
              recomendaciones puntuales.
            </li>
            <li>
              <strong>Modalidad:</strong> Puede ser vía llamada telefónica 
              o videollamada, según tu preferencia. Te enviaremos los detalles 
              una vez confirmes la cita.
            </li>
            <li>
              <strong>Enfoque principal:</strong> Resolver dudas específicas 
              sobre la <strong>completación del DS-160</strong>, documentos 
              necesarios y pasos a seguir en el proceso de visa.
            </li>
            <li>
              <strong>Recomendación:</strong> Ten a mano tu pasaporte y 
              cualquier otra documentación relevante para aprovechar el tiempo 
              al máximo.
            </li>
            <li>
              Tras la asesoría, si lo deseas, podemos coordinar 
              un <strong>servicio completo</strong> de llenado y seguimiento
              de la solicitud.
            </li>
          </ul>
        </motion.div>

        {/* Calendly Inline Widget */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/visalegalexperts/ds-160-reunion" 
            style={{ minWidth: '320px', height: '700px' }}
          />
        </motion.div>

        {/* Sección de notas adicionales o disclaimers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-md"
        >
          <p className="text-gray-700 leading-relaxed">
            <strong>Nota:</strong> La cita de asesoría es para orientación 
            inicial y no garantiza la aprobación de tu visa. Sin embargo, 
            nuestro equipo se compromete a brindarte toda la información 
            y <strong>asistencia necesaria</strong> para mejorar tus 
            probabilidades de éxito.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
