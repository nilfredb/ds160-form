// src/pages/Testimonials.jsx

import { motion } from 'framer-motion';

function StarRating({ rating }) {
  // rating: número de 1 a 5
  // Retornamos un array de estrellas
  const stars = Array.from({ length: 5 }, (_, i) => {
    return (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        fill={i < rating ? '#FBBF24' : 'none'}  // Estrella rellena si i < rating
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#FBBF24"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.75.75 0 011.04 0l2.391 2.524a.75.75 0 00.543.249l3.513.144c.975.04 1.373 1.286.59 1.873l-2.727 2.065a.75.75 0 00-.261.792l.977 3.412c.274.958-.783 1.711-1.59 1.158l-2.956-1.955a.75.75 0 00-.828 0l-2.956 1.955c-.807.553-1.864-.2-1.59-1.158l.977-3.412a.75.75 0 00-.26-.792l-2.728-2.065c-.783-.587-.385-1.832.59-1.873l3.512-.144a.75.75 0 00.544-.249L11.48 3.5z"
        />
      </svg>
    );
  });

  return <div className="flex items-center space-x-1">{stars}</div>;
}

function TestimonialCard({ name, comment, location, visaType, rating }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md p-6 mb-6"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-blue-900 text-lg">{name}</h3>
        {rating && <StarRating rating={rating} />}
      </div>
      <p className="text-gray-600 italic mt-2">"{comment}"</p>

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500">
        <div>
          {visaType && (
            <p className="mb-1">
              <span className="font-semibold">Tipo de Visa:</span> {visaType}
            </p>
          )}
          {location && (
            <p>
              <span className="font-semibold">Ubicación:</span> {location}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      comment:
        'No creí que fuera tan fácil. Me ayudaron con cada paso para llenar mi DS-160 y me sentí muy segura durante el proceso.',
      location: 'Guadalajara, MX',
      visaType: 'Turismo (B1/B2)',
      rating: 5
    },
    {
      name: 'Enrique Castro',
      comment:
        'El equipo de VisaLegal Experts revisó mi formulario antes de enviarlo, y me orientaron en la preparación de mis documentos. Obtuve mi visa en 2 semanas.',
      location: 'Santiago, CL',
      visaType: 'Negocios (B1/B2)',
      rating: 4
    },
    {
      name: 'Laura Fernández',
      comment:
        'Tenía muchas dudas sobre la documentación financiera para mi cita. Me dieron un checklist súper claro y con eso pude organizar todo a tiempo. ¡Excelente servicio!',
      location: 'Buenos Aires, AR',
      visaType: 'Turismo/Visita familiar',
      rating: 5
    },
    {
      name: 'Carlos López',
      comment:
        'Un trato muy profesional, pero también amable. Me sentí en confianza desde el primer momento.',
      location: 'Quito, EC',
      visaType: 'Negocios (B1/B2)',
      rating: 5
    },
    {
      name: 'Evelyn Martínez',
      comment:
        'Todo el equipo fue muy atento, respondieron a mis preguntas incluso en fines de semana. Definitivamente los recomiendo a mis amigos.',
      location: 'Ciudad de México, MX',
      visaType: 'Turismo (B1/B2)',
      rating: 5
    },
    {
      name: 'Diego Rojas',
      comment:
        'Mi caso era algo complicado porque ya me habían negado la visa antes. Me asesoraron y ahora finalmente pude obtenerla.',
      location: 'San José, CR',
      visaType: 'Turismo (B1/B2)',
      rating: 4
    },
    {
      name: 'Rosa Hernández',
      comment:
        'Gracias al seguimiento constante y las guías que me enviaron, llené mi DS-160 sin errores. Muy agradecida por la paciencia que tuvieron conmigo.',
      location: 'Bogotá, CO',
      visaType: 'Turismo (B1/B2)',
      rating: 5
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Testimonios</h1>
        <p className="text-gray-600 mb-8">
          Conoce la experiencia de nuestros clientes satisfechos. Nuestra prioridad es 
          brindar una asesoría personalizada y eficaz para cada caso de visa americana.
        </p>

        {/* Renderizamos todos los testimonios */}
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={i}
            name={t.name}
            comment={t.comment}
            location={t.location}
            visaType={t.visaType}
            rating={t.rating}
          />
        ))}
      </div>
    </div>
  );
}
