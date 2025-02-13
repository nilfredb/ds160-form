// src/components/ui/DynamicField.js
import { motion } from 'framer-motion';
import { ErrorMessage } from '@hookform/error-message';

const DynamicField = ({ fieldConfig, register, errors }) => {
  const renderField = () => {
    switch (fieldConfig.type) {
      case 'text':
      case 'email':
      case 'tel':
      case 'date':
      case 'number':
        return (
          <input
            type={fieldConfig.type}
            {...register(fieldConfig.name)}
            className={`w-full p-3 border rounded-lg ${
              errors[fieldConfig.name] ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder={fieldConfig.label}
          />
        );

      case 'radio':
        return (
          <div className="space-y-2">
            {fieldConfig.options.map((option, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="radio"
                  value={option}
                  {...register(fieldConfig.name)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        );

      case 'select':
        return (
          <select
            {...register(fieldConfig.name)}
            className={`w-full p-3 border rounded-lg bg-white ${
              errors[fieldConfig.name] ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Seleccione...</option>
            {fieldConfig.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case 'checkbox-group':
        return (
          <div className="grid grid-cols-2 gap-4">
            {fieldConfig.options.map((option, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={option}
                  {...register(fieldConfig.name)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6"
    >
      {fieldConfig.label && (
        <label className="block text-gray-700 text-sm font-medium mb-2">
          {fieldConfig.label}
          {fieldConfig.required && <span className="text-red-500">*</span>}
        </label>
      )}

      {renderField()}

      <ErrorMessage
        errors={errors}
        name={fieldConfig.name}
        render={({ message }) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-sm mt-1 block"
          >
            {message}
          </motion.span>
        )}
      />
    </motion.div>
  );
};

export default DynamicField;
