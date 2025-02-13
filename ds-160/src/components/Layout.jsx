import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-blue-900 p-4 shadow-lg">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="container mx-auto flex items-center"
        >
          <Link to="/" className="text-white text-2xl font-bold">
            VisaLegal Pro
          </Link>
          <div className="ml-8 space-x-6">
            <Link
              to="/formulario"
              className="text-gray-200 hover:text-white transition-colors"
            >
              Iniciar Solicitud
            </Link>
          </div>
        </motion.div>
      </nav>
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}