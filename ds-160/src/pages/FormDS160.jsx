// src/pages/FormDS160.jsx

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Importa tus datos y componentes
import { ds160Questions } from '../data/ds160Questions';
import ProgressBar from '../components/ProgressBar';
import Disclaimer from '../components/Disclaimer';
import DynamicField from '../components/ui/DynamicField';
import Sidebar from '../components/ui/Sidebar';

/**
 * Campos extra que se mostrarán de forma condicional
 * (apodo, pasaporte perdido, patrocinador, 
 * método de contacto preferido, etc.).
 */
const extraFields = {
  otherNamesDetail: {
    type: 'text',
    name: 'otherNamesDetail',
    label: 'Indique el apodo u otro nombre que ha usado'
  },
  lostPassportExplanation: {
    type: 'text',
    name: 'lostPassportExplanation',
    label: 'Explique en detalle sobre el pasaporte perdido o robado'
  },
  tripSponsorName: {
    type: 'text',
    name: 'tripSponsorName',
    label: 'Nombre de la persona que patrocina su viaje'
  },
  tripSponsorLastName: {
    type: 'text',
    name: 'tripSponsorLastName',
    label: 'Apellido de la persona que patrocina su viaje'
  },
  tripSponsorAddress: {
    type: 'text',
    name: 'tripSponsorAddress',
    label: 'Dirección del patrocinador'
  },
  tripSponsorEmail: {
    type: 'email',
    name: 'tripSponsorEmail',
    label: 'Correo electrónico (opcional)'
  },
  tripSponsorRelationship: {
    type: 'text',
    name: 'tripSponsorRelationship',
    label: 'Relación/parentesco con el patrocinador'
  },

  // Contacto preferido
  contactWhatsAppNumber: {
    type: 'tel',
    name: 'contactWhatsAppNumber',
    label: 'Número de WhatsApp'
  },
  contactEmailAlt: {
    type: 'email',
    name: 'contactEmailAlt',
    label: 'Correo electrónico de contacto'
  },
  contactPhoneAlt: {
    type: 'tel',
    name: 'contactPhoneAlt',
    label: 'Número telefónico (para llamada)'
  }
};

/**
 * Generamos el esquema de validación con Yup:
 * - Campos obligatorios de ds160Questions
 * - Validaciones condicionales (apodo, pasaporte perdido, 
 *   patrocinador, familiares, método de contacto, etc.)
 * - Campo acceptTerms para paso final.
 */
const generateValidationSchema = () => {
  const schemaShape = {};

  // 1. Requerimientos base sacados de ds160Questions
  ds160Questions.forEach((section) => {
    section.fields.forEach((field) => {
      if (field.required) {
        schemaShape[field.name] = yup
          .string()
          .required('Este campo es obligatorio');
      }
    });
  });

  // 2. Validaciones condicionales
  return yup.object().shape({
    ...schemaShape,

    // Apodo (otherNamesUsed)
    otherNamesDetail: yup
      .string()
      .when('otherNamesUsed', {
        is: (val) => val === 'Sí',
        then: (schema) => schema.required('Por favor indique el otro nombre'),
        otherwise: (schema) => schema.notRequired()
      }),

    // Pasaporte perdido/robado
    lostPassportExplanation: yup
      .string()
      .when('lostPassport', {
        is: (val) => val === 'Sí',
        then: (schema) =>
          schema.required('Explique el pasaporte perdido o robado'),
        otherwise: (schema) => schema.notRequired()
      }),

    // Patrocinador de viaje
    tripSponsorName: yup
      .string()
      .when('payOwnTrip', {
        is: (val) => val === 'No',
        then: (schema) => schema.required('Ingrese el nombre del patrocinador'),
        otherwise: (schema) => schema.notRequired()
      }),
    tripSponsorLastName: yup
      .string()
      .when('payOwnTrip', {
        is: (val) => val === 'No',
        then: (schema) =>
          schema.required('Ingrese el apellido del patrocinador'),
        otherwise: (schema) => schema.notRequired()
      }),
    tripSponsorAddress: yup
      .string()
      .when('payOwnTrip', {
        is: (val) => val === 'No',
        then: (schema) =>
          schema.required('Ingrese la dirección del patrocinador'),
        otherwise: (schema) => schema.notRequired()
      }),
    tripSponsorEmail: yup
      .string()
      .email('Correo inválido')
      .notRequired(),
    tripSponsorRelationship: yup
      .string()
      .when('payOwnTrip', {
        is: (val) => val === 'No',
        then: (schema) =>
          schema.required('Ingrese la relación con el patrocinador'),
        otherwise: (schema) => schema.notRequired()
      }),

    // Ocupación != "Desempleado"
    employerName: yup
      .string()
      .when('currentOccupation', {
        is: (val) => val && val.toLowerCase() !== 'desempleado',
        then: (schema) => schema.required('Ingrese el nombre de su empleador'),
        otherwise: (schema) => schema.notRequired()
      }),
    employmentStartDate: yup
      .date()
      .typeError('Ingrese una fecha válida (AAAA-MM-DD)')
      .when('currentOccupation', {
        is: (val) => val && val.toLowerCase() !== 'desempleado',
        then: (schema) => schema.required('Ingrese la fecha de inicio'),
        otherwise: (schema) => schema.notRequired()
      }),

    // Familiares en EE.UU.
    usRelativesList: yup.array().of(
      yup.object().shape({
        fullName: yup.string().required('Indique el nombre completo'),
        relationship: yup.string().required('Indique el parentesco')
      })
    ),

    // Método de contacto preferido
    contactWhatsAppNumber: yup
      .string()
      .when('preferredContactMethod', {
        is: (val) => val === 'WhatsApp',
        then: (schema) => schema.required('Ingrese su número de WhatsApp'),
        otherwise: (schema) => schema.notRequired()
      }),
    contactEmailAlt: yup
      .string()
      .email('Correo inválido')
      .when('preferredContactMethod', {
        is: (val) => val === 'Email',
        then: (schema) => schema.required('Ingrese su correo de contacto'),
        otherwise: (schema) => schema.notRequired()
      }),
    contactPhoneAlt: yup
      .string()
      .when('preferredContactMethod', {
        is: (val) => val === 'Llamada Telefónica',
        then: (schema) => schema.required('Ingrese su número telefónico'),
        otherwise: (schema) => schema.notRequired()
      }),

    // Paso final (Aceptar términos)
    acceptTerms: yup
      .boolean()
      .oneOf([true], 'Debes aceptar los términos y condiciones')
      .required('Debes aceptar los términos y condiciones')
  });
};

export default function FormDS160() {
  // Definimos que el paso final = número de secciones en ds160Questions
  const finalStep = ds160Questions.length; // e.g., 9
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // useForm con Yup y US Relatives list en []
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
    control
  } = useForm({
    resolver: yupResolver(generateValidationSchema()),
    defaultValues: {
      // usRelativesList arranca vacío
      usRelativesList: [],
      acceptTerms: false
    }
  });

  // Manejo de arreglos dinámicos (familiares)
  const { fields: relativesFields, append, remove } = useFieldArray({
    control,
    name: 'usRelativesList'
  });

  // Watchers
  const watchUSRelatives = watch('usRelatives');
  const watchOtherNamesUsed = watch('otherNamesUsed');
  const watchLostPassport = watch('lostPassport');
  const watchPayOwnTrip = watch('payOwnTrip');
  const watchPreferredContactMethod = watch('preferredContactMethod');

  // useEffect para borrar familiares si usuario pone "No"
  useEffect(() => {
    if (watchUSRelatives === 'No' && relativesFields.length > 0) {
      // Elimina todos los familiares en la lista
      for (let i = relativesFields.length - 1; i >= 0; i--) {
        remove(i);
      }
    }
  }, [watchUSRelatives, relativesFields, remove]);

  // Pasar al siguiente paso
  const handleNext = async () => {
    if (currentStep < finalStep) {
      // Validar campos requeridos de la sección actual
      const requiredFields = ds160Questions[currentStep].fields
        .filter((field) => field.required)
        .map((field) => field.name);

      const isValid = await trigger(requiredFields);
      if (isValid) {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  // Pasar al anterior
  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  // onSubmit final
  const onSubmit = async (formData) => {
    try {
      setLoading(true);
      setSuccessMessage('');
      setErrorMessage('');

      console.log('Enviando datos DS-160...', formData);
      const response = await fetch('https://api.visalegalexperts.com/api/ds160', { //Cambia esta direccion por la direccion que usas en tu backend o dejala http://localhost:4000/api/ds160 para pruebas locales
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud al servidor');
      }

      const result = await response.json();
      console.log('Respuesta del servidor:', result);

      // Mensaje amigable de éxito
      setSuccessMessage(
        '¡Tu solicitud ha sido enviada con éxito! Pronto nos pondremos en contacto para continuar con el proceso.'
      );
    } catch (error) {
      console.error('Error al enviar datos:', error);
      setErrorMessage(
        'Lo sentimos, hubo un problema al enviar tus datos. Por favor, inténtalo más tarde.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        {/* Columna principal: Formulario */}
        <div className="bg-white p-8 rounded-xl shadow-lg">

          {/* Barra de progreso */}
          <ProgressBar step={currentStep + 1} totalSteps={finalStep + 1} />

          <Disclaimer />

          {/* Mensajes globales de éxito o error */}
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border border-green-400 text-green-800 p-4 rounded mb-4"
            >
              {successMessage}
            </motion.div>
          )}
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-400 text-red-800 p-4 rounded mb-4"
            >
              {errorMessage}
            </motion.div>
          )}

<form onSubmit={handleSubmit(onSubmit)}>
            <AnimatePresence mode="wait">
              {currentStep < finalStep ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold text-blue-900 mb-6">
                    {ds160Questions[currentStep].section}
                  </h2>

                  {ds160Questions[currentStep].fields.map((field, index) => (
                    <div key={index}>
                      <DynamicField
                        fieldConfig={field}
                        register={register}
                        errors={errors}
                      />

                      {/* Condicional: Apodo (otherNamesUsed) */}
                      {field.name === 'otherNamesUsed' &&
                        watchOtherNamesUsed === 'Sí' && (
                          <DynamicField
                            fieldConfig={extraFields.otherNamesDetail}
                            register={register}
                            errors={errors}
                          />
                      )}

                      {/* Condicional: Pasaporte perdido (lostPassport) */}
                      {field.name === 'lostPassport' &&
                        watchLostPassport === 'Sí' && (
                          <DynamicField
                            fieldConfig={extraFields.lostPassportExplanation}
                            register={register}
                            errors={errors}
                          />
                      )}

                      {/* Condicional: Patrocinador de viaje (payOwnTrip) */}
                      {field.name === 'payOwnTrip' &&
                        watchPayOwnTrip === 'No' && (
                          <>
                            <DynamicField
                              fieldConfig={extraFields.tripSponsorName}
                              register={register}
                              errors={errors}
                            />
                            <DynamicField
                              fieldConfig={extraFields.tripSponsorLastName}
                              register={register}
                              errors={errors}
                            />
                            <DynamicField
                              fieldConfig={extraFields.tripSponsorAddress}
                              register={register}
                              errors={errors}
                            />
                            <DynamicField
                              fieldConfig={extraFields.tripSponsorEmail}
                              register={register}
                              errors={errors}
                            />
                            <DynamicField
                              fieldConfig={extraFields.tripSponsorRelationship}
                              register={register}
                              errors={errors}
                            />
                          </>
                      )}

                      {/* Condicional: Familiares en EE.UU. */}
                      {field.name === 'usRelatives' &&
                        watchUSRelatives === 'Sí' && (
                          <div className="bg-gray-50 p-4 rounded-md mt-2">
                            <h3 className="font-semibold mb-2">
                              Información de los familiares en EE.UU.
                            </h3>
                            {relativesFields.map((relField, i) => (
                              <div
                                key={relField.id}
                                className="mb-4 border-b pb-2"
                              >
                                <label className="block text-gray-700 mb-1">
                                  Nombre completo del familiar
                                </label>
                                <input
                                  type="text"
                                  {...register(`usRelativesList.${i}.fullName`)}
                                  className={`w-full p-2 border ${
                                    errors.usRelativesList?.[i]?.fullName
                                      ? 'border-red-500'
                                      : 'border-gray-300'
                                  } rounded-md mb-2`}
                                />
                                {errors.usRelativesList?.[i]?.fullName && (
                                  <span className="text-red-500 text-sm">
                                    {errors.usRelativesList[i].fullName.message}
                                  </span>
                                )}

                                <label className="block text-gray-700 mb-1">
                                  Parentesco
                                </label>
                                <input
                                  type="text"
                                  {...register(`usRelativesList.${i}.relationship`)}
                                  className={`w-full p-2 border ${
                                    errors.usRelativesList?.[i]?.relationship
                                      ? 'border-red-500'
                                      : 'border-gray-300'
                                  } rounded-md`}
                                />
                                {errors.usRelativesList?.[i]?.relationship && (
                                  <span className="text-red-500 text-sm">
                                    {errors.usRelativesList[i].relationship.message}
                                  </span>
                                )}

                                <button
                                  type="button"
                                  className="text-sm text-red-500 mt-2"
                                  onClick={() => remove(i)}
                                >
                                  Eliminar este familiar
                                </button>
                              </div>
                            ))}

                            <button
                              type="button"
                              className="bg-blue-700 text-white px-4 py-2 rounded-md"
                              onClick={() =>
                                append({ fullName: '', relationship: '' })
                              }
                            >
                              Agregar otro familiar
                            </button>
                          </div>
                      )}
                      
                      {/* Condicional: Método de contacto preferido */}
                      {field.name === 'preferredContactMethod' && (
                        <>
                          {watchPreferredContactMethod === 'WhatsApp' && (
                            <DynamicField
                              fieldConfig={extraFields.contactWhatsAppNumber}
                              register={register}
                              errors={errors}
                            />
                          )}
                          {watchPreferredContactMethod === 'Email' && (
                            <DynamicField
                              fieldConfig={extraFields.contactEmailAlt}
                              register={register}
                              errors={errors}
                            />
                          )}
                          {watchPreferredContactMethod === 'Llamada Telefónica' && (
                            <DynamicField
                              fieldConfig={extraFields.contactPhoneAlt}
                              register={register}
                              errors={errors}
                            />
                          )}

                          {/* Mensaje: un especialista contactará */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-blue-50 p-4 rounded-md mt-4"
                          >
                            <p className="text-sm text-blue-900 leading-relaxed">
                              Una vez que completes este formulario, 
                              <strong> un especialista</strong> revisará tu 
                              información y se pondrá en contacto contigo a 
                              través de 
                              {watchPreferredContactMethod === 'WhatsApp' && ' tu número de WhatsApp. Asegurate de incluir el prefijo. Ej: RD (+1)'}
                              {watchPreferredContactMethod === 'Email' && ' tu correo electrónico.'}
                              {watchPreferredContactMethod === 'Llamada Telefónica' && ' una llamada telefónica. Asegurate de incluir el prefijo. Ej: RD (+1)'}
                            </p>
                          </motion.div>
                        </>
                      )}
                    </div>
                  ))}

                  {/* Botones de navegación */}
                  <div className="flex justify-between mt-8">
                    {currentStep > 0 && (
                      <motion.button
                        type="button"
                        onClick={handlePrev}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-500 text-white px-6 py-2 rounded-lg"
                      >
                        Anterior
                      </motion.button>
                    )}
                    {/* Botón Siguiente */}
                    <motion.button
                      type="button"
                      onClick={handleNext}
                      whileHover={{ scale: 1.05 }}
                      className="bg-blue-900 text-white px-6 py-2 rounded-lg ml-auto"
                    >
                      Siguiente
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                // Paso final
                <motion.div
                  key="cost-and-terms"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                    Costo y Términos
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                  <p className="text-gray-600 leading-relaxed">
                    Antes de enviar tu formulario, te recordamos que el costo 
                    de la visa americana (B1/B2) establecido por el Departamento 
                    de Estado es de <strong>US$160</strong>. Este valor no es 
                    reembolsable.
                  </p>
                  <br/>
                  <p className="text-gray-600 leading-relaxed">
                    Nuestro servicio de asesoría y llenado del DS-160 tiene un 
                    costo adicional de <strong>US$50</strong>. Con este pago, 
                    brindamos un acompañamiento integral en cada paso del proceso. 
                    Si tienes dudas adicionales, no dudes en consultarnos o 
                    revisar nuestros Términos y Condiciones.
                  </p>
                  <br/>
                  <p className="text-gray-600 leading-relaxed">
                    Por favor, confirma que has leído y aceptas los siguientes 
                    <strong> Términos y Condiciones</strong> antes de enviar.
                  </p>
                  </p>

                  {/* Checkbox y validación */}
                  <label className="flex items-center space-x-2 mt-4">
                    <input
                      type="checkbox"
                      {...register('acceptTerms')}
                      className={`w-5 h-5 border rounded ${
                        errors.acceptTerms ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    <span className="text-gray-800">
                      He leído y acepto los Términos y Condiciones
                    </span>
                  </label>
                  {errors.acceptTerms && (
                    <span className="text-red-500 text-sm">
                      {errors.acceptTerms.message}
                    </span>
                  )}

                  <div className="flex justify-between mt-8">
                    <motion.button
                      type="button"
                      onClick={handlePrev}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-500 text-white px-6 py-2 rounded-lg"
                    >
                      Anterior
                    </motion.button>

                    {/* Botón Enviar => se desactiva si loading */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: loading ? 1 : 1.05 }}
                      disabled={loading}
                      className={`${
                        loading
                          ? 'bg-green-400'
                          : 'bg-green-600 hover:bg-green-700'
                      } text-white px-6 py-2 rounded-lg ml-auto transition-colors`}
                    >
                      {loading ? 'Enviando...' : 'Enviar Solicitud'}
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>

        {/* Columna lateral - FAQ + Testimonios (Sidebar) */}
        <Sidebar />
      </div>
    </div>
  );
}
