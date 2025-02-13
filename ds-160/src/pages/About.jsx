import { motion } from 'framer-motion';
import AttorneyCard from '../components/ui/AttorneyCard';
import { BriefcaseIcon, ScaleIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const attorneys = [
  {
    name: "Dra. Laura M. Fernández",
    title: "Especialista en Derecho Migratorio",
    experience: "15 años de experiencia",
    education: "JD - Harvard Law School",
    image: "/img/abogada.webp",
    certifications: ["AILA Member", "State Bar of Florida"]
  },
  {
    name: "Lic. Carlos E. Rojas",
    title: "Experto en Visas de Inversión",
    experience: "12 años de experiencia",
    education: "LL.M - Georgetown University",
    image: "/img/abogado.webp",
    certifications: ["EB-5 Certified", "USCIS Liaison"]
  }
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-20"
    >
      {/* Sección de Introducción */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-blue-900 mb-6"
        >
          Más de 25 años protegiendo sus derechos migratorios
        </motion.h1>
        <p className="text-lg text-gray-600 mb-8">
          En VisaLegal Experts combinamos experiencia jurídica con un enfoque personalizado 
          para cada caso de visa americana.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <BriefcaseIcon className="h-12 w-12 text-blue-900 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">+5,000 Casos</h3>
            <p className="text-gray-600">Resueltos exitosamente</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <ScaleIcon className="h-12 w-12 text-blue-900 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Ética Profesional</h3>
            <p className="text-gray-600">Certificados por AILA</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <AcademicCapIcon className="h-12 w-12 text-blue-900 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Educación Continua</h3>
            <p className="text-gray-600">Actualización legal permanente</p>
          </motion.div>
        </div>
      </div>

      {/* Sección del Equipo */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Nuestro Equipo Jurídico
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {attorneys.map((attorney, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <AttorneyCard 
                {...attorney}
                additionalInfo={
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-2">
                      <span className="font-semibold">Formación:</span> {attorney.education}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {attorney.certifications.map((cert, i) => (
                        <span 
                          key={i}
                          className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sección de Filosofía */}
      <motion.div 
        className="bg-blue-900 text-white rounded-2xl p-8 shadow-xl mb-12"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
      >
        <h3 className="text-2xl font-bold mb-4">Nuestra Filosofía</h3>
        <p className="text-lg leading-relaxed">
          "Creemos en un enfoque integral del derecho migratorio, donde cada caso 
          se trata con la máxima atención al detalle y compromiso ético. Nuestra 
          prioridad es brindar soluciones efectivas manteniendo una comunicación 
          transparente con cada cliente."
        </p>
      </motion.div>

      {/* Sección de Certificaciones */}
      <div className="bg-gray-50 rounded-xl p-8 text-center">
  <h3 className="text-2xl font-bold text-blue-900 mb-6">
    Certificaciones y Membresías
  </h3>
  <div className="flex flex-wrap justify-center gap-8">
    <img 
      src="/img/AILA.svg" 
      alt="AILA - American Immigration Lawyers Association" 
      className="h-16 opacity-75 hover:opacity-100 transition-opacity"
    />
    <img 
      src="/img/florida.png" 
      alt="Florida Bar - State Bar Association" 
      className="h-16 opacity-75 hover:opacity-100 transition-opacity"
    />
    <img 
      src="/img/bbb-accredited.webp" 
      alt="BBB - Better Business Bureau Accredited Business" 
      className="h-16 opacity-75 hover:opacity-100 transition-opacity"
    />
    <img 
      src="/img/american-bar.svg" 
      alt="ABA - American Bar Association Member" 
      className="h-16 opacity-75 hover:opacity-100 transition-opacity"
    />
    <img 
      src="/img/uscis.png" 
      alt="USCIS Authorized Representative" 
      className="h-16 opacity-75 hover:opacity-100 transition-opacity"
    />
  </div>
</div>
    </motion.div>
  );
}