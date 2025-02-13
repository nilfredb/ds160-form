import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Confirmacion() {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      className="max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-xl text-center"
    >
      <div className="text-green-500 text-6xl mb-4">✓</div>
      <h2 className="text-3xl font-bold text-blue-900 mb-4">
        Solicitud Completada
      </h2>
      <p className="text-gray-600 mb-8">
        Tu formulario DS-160 ha sido enviado exitosamente
      </p>
      <Link to="/">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-blue-900 text-white px-6 py-2 rounded-lg"
        >
          Volver al Inicio
        </motion.button>
      </Link>
    </motion.div>
  );
}