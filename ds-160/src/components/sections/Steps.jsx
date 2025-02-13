import { motion } from 'framer-motion';
import StepCard from '../ui/StepCard';

const steps = [
  {
    title: "Consulta Inicial",
    description: "Evaluación de tu caso sin costo",
    icon: "📋"
  },
  {
    title: "Preparación Documental",
    description: "Revisión experta de requisitos",
    icon: "📂"
  },
  {
    title: "Solicitud DS-160",
    description: "Llenado del formulario",
    icon: "✍️"
  },
  {
    title: "Acompañamiento",
    description: "Asistencia en la entrevista",
    icon: "🛂"
  }
];

export default function Steps() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Nuestro Proceso de Trabajo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <StepCard {...step} number={index + 1} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}