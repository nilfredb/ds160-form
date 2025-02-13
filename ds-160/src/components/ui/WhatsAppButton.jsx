import { motion } from 'framer-motion';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function WhatsAppButton() {
  const phoneNumber = "+18095024126";
  const defaultMessage = "¡Hola! Me gustaría obtener más información sobre el DS-160.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-2 z-[9999]">
      {showTooltip && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: 10 }}
          className="bg-white text-gray-700 px-3 py-2 rounded-md shadow-lg text-sm mb-2"
        >
          ¿Necesitas ayuda? Escríbenos a WhatsApp
        </motion.div>
      )}
      <motion.a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center relative"
      >
        <PhoneIcon className="h-6 w-6" />
      </motion.a>
    </div>
  );
}
