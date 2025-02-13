import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';

export default function FormDS160_Simplificado() {
  // Sólo 2 pasos: paso 0 (información básica) y paso final (1)
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 1; // último paso = 1

  // useForm sin Yup (sólo para probar la navegación y el submit)
  const { register, handleSubmit } = useForm();

  // Navegación
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  // onSubmit
  const onSubmit = async (data) => {
    console.log('onSubmit triggered:', data);
    try {
      const response = await fetch('http://localhost:4000/api/ds160', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Fetch error');
      const result = await response.json();
      console.log('Servidor dice:', result);
      alert('Datos enviados con éxito.');
    } catch (err) {
      console.error(err);
      alert('Error al enviar datos.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow">
      <h1 className="text-2xl mb-4">Formulario Simplificado DS-160</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence>
          {currentStep < totalSteps ? (
            // Paso 0: info básica + botón Siguiente
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <h2 className="text-xl mb-2">Paso 1: Info Básica</h2>
              <label>Nombre:</label>
              <input
                {...register('name')}
                className="w-full p-2 mb-2 border"
              />

              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Siguiente
              </button>
            </motion.div>
          ) : (
            // Paso final: botón "Enviar Solicitud"
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <h2 className="text-xl mb-2">Paso Final</h2>

              <label>
                <input type="checkbox" {...register('acceptTerms')} /> Aceptar
                términos
              </label>

              <div className="mt-4 flex justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Anterior
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Enviar Solicitud
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
