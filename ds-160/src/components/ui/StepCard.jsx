import { motion } from 'framer-motion';

export default function StepCard({ number, title, description, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start mb-4">
        <div className="bg-blue-100 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center mr-4">
          <span className="font-bold text-xl">{number}</span>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
      
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>

      <motion.div 
        className="mt-4 h-1 bg-blue-200 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}