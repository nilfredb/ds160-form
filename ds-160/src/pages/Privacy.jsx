// pages/Privacy.jsx
import { ShieldCheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Encabezado */}
          <div className="flex items-center mb-8">
            <ShieldCheckIcon className="h-12 w-12 text-blue-900 mr-4" />
            <h1 className="text-3xl font-bold text-blue-900">
              Política de Privacidad
            </h1>
          </div>

          {/* Contenido */}
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-blue-900">
                1. Recopilación de Información
              </h2>
              <p className="mb-4">
                Recolectamos información personal que usted nos proporciona voluntariamente al:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Completar formularios en nuestro sitio web</li>
                <li>Contactarnos por correo electrónico o teléfono</li>
                <li>Registrarse para recibir actualizaciones</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-blue-900">
                2. Uso de la Información
              </h2>
              <p>
                Utilizamos su información para:
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Procesar solicitudes de visas</li>
                  <li>Comunicarnos sobre el estado de su trámite</li>
                  <li>Mejorar nuestros servicios</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-blue-900">
                3. Protección de Datos
              </h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="flex items-center mb-2">
                  <DocumentTextIcon className="h-5 w-5 mr-2 text-blue-700" />
                  Implementamos medidas de seguridad incluyendo:
                </p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Cifrado SSL de 256-bit</li>
                  <li>Firewalls de última generación</li>
                  <li>Acceso restringido al personal autorizado</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-blue-900">
                4. Compartición de Información
              </h2>
              <p>
                No compartimos su información personal excepto:
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Cuando sea requerido por autoridades legales</li>
                  <li>Con proveedores de servicios esenciales (ej: procesamiento de pagos)</li>
                  <li>Con su consentimiento expreso</li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-blue-900">
                5. Sus Derechos
              </h2>
              <p>
                Usted tiene derecho a:
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Acceder a sus datos personales</li>
                  <li>Solicitar corrección de información</li>
                  <li>Pedir eliminación de sus datos</li>
                  <li>Oponerse al procesamiento de datos</li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-blue-900">
                6. Contacto
              </h2>
              <p className="space-y-2">
                <div>Oficina de Privacidad de Datos</div>
                <div>Email: privacidad@visalegal.com</div>
                <div>Teléfono: +1 (829) 929-5562</div>
                <div>Dirección: 1234 Brickell Avenue, Suite 567 Miami, FL 33131</div>
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-8">
              Última actualización: 15 de Enero 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}