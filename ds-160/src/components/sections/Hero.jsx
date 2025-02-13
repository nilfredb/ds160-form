import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Asistencia Legal Profesional para tu Visa Americana
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Abogados especializados en inmigración con tasa de aprobación del 98%
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/formulario">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold"
              >
                Iniciar Solicitud DS-160
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg"
              >
                Conoce a Nuestro Equipo
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}