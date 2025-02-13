// pages/Terms.jsx
import { ScaleIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Encabezado */}
          <div className="flex items-center mb-8">
            <ScaleIcon className="h-12 w-12 text-blue-900 mr-4" />
            <h1 className="text-3xl font-bold text-blue-900">
              Términos de Servicio
            </h1>
          </div>

          {/* Contenido */}
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-blue-900">
                1. Aceptación de los Términos
              </h2>
              <p>
                Al utilizar nuestros servicios, usted acepta:
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Estos términos en su totalidad</li>
                  <li>Nuestra Política de Privacidad</li>
                  <li>Todas las leyes y regulaciones aplicables</li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-blue-900">
                2. Servicios Ofrecidos
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Asesoría legal en trámites migratorios</li>
                <li>Preparación de documentación DS-160</li>
                <li>Revisión de requisitos para visas</li>
                <li>Seguimiento de casos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-blue-900">
                3. Responsabilidades del Usuario
              </h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="flex items-center mb-2">
                  <DocumentTextIcon className="h-5 w-5 mr-2 text-blue-700" />
                  Usted se compromete a:
                </p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Proporcionar información veraz y completa</li>
                  <li>Notificar cambios en sus datos</li>
                  <li>Mantener la confidencialidad de su cuenta</li>
                  <li>Usar el servicio solo para fines legales</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-blue-900">
                4. Limitación de Responsabilidad
              </h2>
              <p>
                VisaLegal Experts no garantiza:
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Resultados específicos en trámites</li>
                  <li>Tiempos de procesamiento gubernamentales</li>
                  <li>Disponibilidad continua del servicio</li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-blue-900">
                5. Propiedad Intelectual
              </h2>
              <p>
                Todo el contenido del sitio (logos, textos, diseños) es propiedad 
                exclusiva de VisaLegal Experts y está protegido por leyes de derechos 
                de autor.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-blue-900">
                6. Modificaciones
              </h2>
              <p>
                Nos reservamos el derecho de actualizar estos términos periódicamente.
                Las versiones anteriores estarán disponibles en nuestro archivo histórico.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-blue-900">
                7. Ley Aplicable
              </h2>
              <p>
                Estos términos se rigen por las leyes del Estado de Florida, EE.UU.
                Cualquier disputa será resuelta en los tribunales competentes de Miami-Dade County.
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