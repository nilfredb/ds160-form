// components/Disclaimer.jsx
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function Disclaimer() {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-8 mx-auto max-w-4xl">
      <div className="flex items-start">
        <ShieldCheckIcon className="h-6 w-6 text-blue-700 mr-3 flex-shrink-0" />
        
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-blue-900">
            Antes de comenzar su solicitud
          </h3>
          
          <ul className="list-disc pl-5 space-y-2 text-blue-800 text-sm">
            <li>Toda la información proporcionada está protegida mediante cifrado SSL de 256-bit</li>
            <li>Verifique que los datos coincidan exactamente con sus documentos oficiales</li>
            <li>Los campos marcados con (*) son obligatorios para el procesamiento</li>
            <li>La información falsa puede resultar en el rechazo permanente de la solicitud</li>
            <li>Si la pregunta es no valida en su caso, llene el campo con un "No aplica"</li>
            <li>
            Este formulario no reemplaza el formulario oficial <strong>DS-160</strong> del
            Departamento de Estado de EE.UU.
            Su información será revisada por nuestro equipo y 
            posteriormente <strong>ingresada</strong> en la plataforma oficial.
            </li>
            <li>
            Al utilizar este servicio, usted comprende que 
            VisaLegal Experts no emite visas directamente ni 
            garantiza la aprobación de su solicitud. Nuestra 
            función se limita a la asesoría y verificación 
            de datos.
            </li>
          </ul>
          
          
          <p className="text-blue-700 text-xs mt-3">
            Al continuar, acepta nuestros{' '}
            <a 
              href="/politica-privacidad" 
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Términos de Servicio y Política de Privacidad
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}