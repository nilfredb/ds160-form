import { motion } from 'framer-motion';

export default function ProgressBar({ step, totalSteps }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        {Array.from({ length: totalSteps }, (_, i) => (
          <motion.div
            key={i}
            className={`w-8 h-8 rounded-full flex items-center justify-center 
              ${step > i ? 'bg-blue-900 text-white' : 'bg-gray-300'}`}
            whileHover={{ scale: 1.1 }}
          >
            {i + 1}
          </motion.div>
        ))}
      </div>
      <motion.div
        className="h-2 bg-blue-200 rounded-full"
        initial={{ width: '0%' }}
        animate={{ width: `${(step/totalSteps)*100}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}