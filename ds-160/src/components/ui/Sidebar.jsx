// src/components/ui/Sidebar.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full text-left focus:outline-none"
      >
        <span className="font-medium text-gray-800">{question}</span>
        <span className="font-bold">{open ? '-' : '+'}</span>
      </button>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="mt-2"
        >
          <p className="text-sm text-gray-600">{answer}</p>
        </motion.div>
      )}
    </div>
  );
}


function TestimonialItem({ name, comment }) {
  return (
    <div className="bg-white border-l-4 border-blue-900 pl-4 pr-2 py-3 rounded-md mb-4 shadow-sm">
      <p className="text-gray-600 italic">"{comment}"</p>
      <p className="text-gray-800 font-semibold mt-2">- {name}</p>
    </div>
  );
}

export default function Sidebar() {
  const faqs = [
    {
      question: "¿Cuánto cuesta la solicitud DS-160?",
      answer:
        "La tarifa para la visa de turista/negocios (B1/B2) es de US$160. Otras categorías pueden variar."
    },
    {
      question: "¿Necesito todos los documentos antes de llenar el formulario?",
      answer:
        "Lo ideal es contar con pasaporte vigente y datos personales. El resto de documentos se presentan en la entrevista."
    },
    {
      question: "¿Cuánto tiempo tarda el proceso?",
      answer:
        "El tiempo de procesamiento depende de la embajada. Por lo general, de 1 a 2 semanas antes de poder agendar la cita."
    }
  ];
  
  

  const testimonials = [
    {
      name: "Juan Pérez",
      comment:
        "¡Excelente servicio! Me ayudaron con cada paso para completar mi DS-160."
    },
    {
      name: "Ana Contreras",
      comment:
        "Tenía muchas dudas y en VisaLegal Experts me dieron la seguridad que necesitaba. Recomendados."
    }
  ];

  return (
    <aside className="space-y-8">
      {/* Bloque de FAQ */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">
          Preguntas Frecuentes
        </h3>
        <div>
          {faqs.map((item, idx) => (
            <FAQItem key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div className="text-right mt-2">
        <Link 
          to="/faq" 
          className="text-sm text-blue-600 hover:underline"
        >
          Ver más preguntas
        </Link>
      </div>
      </div>

      {/* Bloque de Testimonios */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">
          Testimonios
        </h3>
        <div>
          {testimonials.map((t, idx) => (
            <TestimonialItem key={idx} name={t.name} comment={t.comment} />
          ))}
        </div>
        <div className="text-right mt-2">
        <Link 
          to="/testimonios" 
          className="text-sm text-blue-600 hover:underline"
        >
          Ver más testimonios
        </Link>
      </div>
      </div>
      
    </aside>
  );
}
