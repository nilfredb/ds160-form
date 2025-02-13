import { motion } from 'framer-motion';

export default function AttorneyCard({ 
  name, 
  title, 
  experience, 
  specialties = [], // Valor por defecto añadido
  image 
}) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-sm p-4 text-center"
    >
      <img 
        src={image} 
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
      />
      
      <h3 className="text-lg font-semibold text-blue-900 mb-1">{name}</h3>
      <p className="text-sm text-blue-600 mb-2">{title}</p>
      
      <div className="text-xs text-gray-500 mb-3">
        <p>Experiencia: {experience}</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2">
        {specialties?.map((specialty, index) => ( // Operador opcional añadido
          <span 
            key={index}
            className="px-2 py-1 bg-blue-50 text-blue-800 text-xs rounded-full"
          >
            {specialty}
          </span>
        ))}
      </div>
    </motion.div>
  );
}