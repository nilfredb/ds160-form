import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DocumentTextIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
          >
            <img 
              src="/img/logo.svg" 
              alt="Logo" 
              className="h-14 w-14"
            />
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-white">VisaLegal</span>
              <span className="text-2xl font-bold text-amber-400 ml-1">Experts</span>
            </div>
          </Link>

          {/* BOTÓN HAMBURGUESA (sólo en móviles) */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white"
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>

          {/* Navegación de escritorio + Botón => oculta en móviles */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-200 hover:text-white transition-colors">
              Inicio
            </Link>
            <Link to="/about" className="text-gray-200 hover:text-white transition-colors">
              Equipo
            </Link>
            <Link to="/contact" className="text-gray-200 hover:text-white transition-colors">
              Contacto
            </Link>
            <Link to="/schedule" className="text-gray-200 hover:text-white transition-colors">
              Agendar Cita
            </Link>
            
            {/* Botón "Iniciar Solicitud" en la misma línea */}
            <Link 
              to="/formulario" 
              className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg flex items-center transition-colors"
            >
              <DocumentTextIcon className="h-5 w-5 mr-2" />
              Iniciar Solicitud
            </Link>
          </div>
        </div>

        {/* MENÚ MÓVIL (se muestra si isOpen === true) */}
        {isOpen && (
          <div className="mt-3 md:hidden">
            <nav className="flex flex-col space-y-2 bg-blue-800 px-4 py-4 rounded-lg">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className="text-gray-200 hover:text-white transition-colors"
              >
                Inicio
              </Link>
              <Link 
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-gray-200 hover:text-white transition-colors"
              >
                Equipo
              </Link>
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-gray-200 hover:text-white transition-colors"
              >
                Contacto
              </Link>
              <Link 
                to="/schedule"
                onClick={() => setIsOpen(false)}
                className="text-gray-200 hover:text-white transition-colors"
              >
                Agendar Cita
              </Link>
              
              {/* Botón "Iniciar Solicitud" también en menú móvil */}
              <Link 
                to="/formulario"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg flex items-center transition-colors"
              >
                <DocumentTextIcon className="h-5 w-5 mr-2" />
                Iniciar Solicitud
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
