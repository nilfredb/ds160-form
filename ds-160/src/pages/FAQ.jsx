// src/pages/FAQ.jsx

import { useState } from 'react';
import { motion } from 'framer-motion';

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full text-left focus:outline-none"
      >
        {/* Pregunta: texto más grande y semibold */}
        <span className="font-semibold text-gray-800 text-lg md:text-xl">
          {question}
        </span>
        <span className="font-bold text-blue-600">
          {open ? '-' : '+'}
        </span>
      </button>

      {/* Respuesta: se muestra sólo si "open" es true */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="mt-4"
        >
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {answer}
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default function FAQ() {
  // Puedes incluir aquí todas las preguntas que consideres necesarias
  const faqs = [
    {
      question: '1. ¿Cuánto cuesta la tarifa de la solicitud DS-160?',
      answer: `
      La tarifa para una visa de turismo o negocios (B1/B2) es de US$160.
      Sin embargo, existen otras categorías de visa con diferentes tarifas.
      Es importante verificar el costo exacto en la página oficial del Departamento de Estado
      antes de realizar el pago. Ten en cuenta que esta tarifa no es reembolsable,
      incluso si tu visa es denegada.
      `
    },
    {
      question: '2. ¿Cuánto tiempo tarda el procesamiento de mi solicitud?',
      answer: `
      El tiempo de procesamiento puede variar según la embajada o consulado
      donde presentes tu solicitud. En general, puede tardar entre 1 a 3 semanas
      antes de poder programar la cita. Después de la entrevista, si la visa es
      aprobada, usualmente toma de 3 a 7 días laborales para estampar y enviar tu pasaporte.
      `
    },
    {
      question: '3. ¿Necesito todos los documentos completos antes de llenar el formulario?',
      answer: `
      Para llenar el DS-160, debes contar con tu pasaporte vigente y los datos
      personales básicos. Sin embargo, no necesitas tener todos los documentos
      adicionales (como extractos bancarios, cartas de empleo, etc.) en mano para
      iniciar. Dichos documentos se presentarán y revisarán durante la entrevista
      consular, no durante el llenado del formulario.
      `
    },
    {
      question: '4. ¿Qué pasa si todavía no tengo pasaporte o se me vence pronto?',
      answer: `
      Es fundamental contar con un pasaporte válido para poder completar la solicitud DS-160,
      ya que el número del pasaporte y su fecha de vencimiento son datos obligatorios.
      Si tu pasaporte está a punto de vencer, lo más recomendable es renovarlo
      antes de iniciar el trámite de la visa, así evitarás problemas en la cita.
      `
    },
    {
      question: '5. ¿Puedo cambiar la fecha de mi cita después de haberla programado?',
      answer: `
      Sí, en la mayoría de los casos puedes reprogramar tu cita si surge un
      imprevisto. Tendrás que ingresar al sistema de citas con la cuenta que
      creaste inicialmente y buscar la opción de "Cambiar/Cancelar Cita".
      Sin embargo, existe un límite en el número de reprogramaciones permitidas.
      Revisa los lineamientos específicos de la Embajada o Consulado correspondiente.
      `
    },
    {
      question: '6. ¿Qué documentos debo llevar a la entrevista consular?',
      answer: `
      Además de tu pasaporte con el DS-160 confirmado, se recomienda llevar:
      - Confirmación impresa de la cita y del DS-160.
      - Documentos que demuestren lazos con tu país de origen (carta laboral, estados de cuenta bancarios,
        acta de propiedad, etc.).
      - Soporte de ingresos y/o carta de empleador.
      - Cualquier otro documento que creas relevante para demostrar el motivo de tu viaje
        y tu intención de regresar a tu país.
      `
    },
    {
      question: '7. ¿Necesito un intérprete en la entrevista si no hablo inglés?',
      answer: `
      Por lo general, las entrevistas se realizan en el idioma oficial del país
      donde se ubica el consulado o embajada de EE.UU. (por ejemplo, en español
      en el caso de la Embajada en México, República Dominicana, etc.).
      Si no hablas ese idioma con fluidez, en algunos casos puedes solicitar
      asistencia de intérpretes. Sin embargo, cada consulado puede tener
      reglamentos distintos. Lo mejor es consultar su sitio web oficial.
      `
    },
    {
      question: '8. ¿Puedo solicitar la visa en un país que no sea mi lugar de residencia?',
      answer: `
      Sí, es posible solicitar la visa en un tercer país (diferente al de
      tu nacionalidad o residencia). Pero debes estar consciente de que
      el oficial consular evaluará si tienes suficientes lazos con el país
      donde presentas la solicitud y puede que se te requiera más documentación.
      Además, el tiempo de espera para la cita podría ser mayor para solicitantes
      de tercera nacionalidad. Es importante revisar la información oficial de la
      embajada o consulado donde planeas aplicar.
      `
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        {/* Título principal del FAQ, con un tamaño mayor */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Preguntas Frecuentes (FAQ)
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}