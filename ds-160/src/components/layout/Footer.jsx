import { Link } from 'react-router-dom';
import { MapPinIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200 mt-20">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">VisaLegal Experts</h3>
          <p className="text-sm">Especialistas en visas americanas con más de 15 años de experiencia</p>
        </div>

        <div>
          <h4 className="text-white mb-4">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2" />
              1234 Brickell Avenue, Suite 567 <br/>Miami, FL 33131
            </li>
            <li className="flex items-center">
              <ClockIcon className="h-5 w-5 mr-2" />
              Lun-Vie: 9am - 6pm EST
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-white">Política de Privacidad</Link></li>
            <li><Link to="/terms" className="hover:text-white">Términos de Servicio</Link></li>
            <li><Link to="/FAQ" className="hover:text-white">Preguntas Frecuentes</Link></li>
            <li><Link to="/Testimonials" className="hover:text-white">Testimonios</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-4">Certificaciones</h4>
          <div className="flex items-center space-x-2">
            <ShieldCheckIcon className="h-8 w-8 text-blue-300" />
            <span className="text-sm">Miembro Acreditado de AILA</span>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800 mt-8 py-6 text-center text-sm">
        © 2024 VisaLegal Experts. Todos los derechos reservados.
      </div>
    </footer>
  );
}