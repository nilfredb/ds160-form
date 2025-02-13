import { motion } from 'framer-motion';
import { PhoneIcon } from '@heroicons/react/24/solid';

export default function WhatsAppButton() {
  // Reemplaza con tu número de WhatsApp en formato internacional sin signos
  // Ejemplo: "+12125551234"
  const phoneNumber = "+18299295562"; 
  // Mensaje que aparecerá automáticamente en el chat
  const defaultMessage = "¡Hola! Me gustaría obtener más información sobre el DS-160.";

  // Construimos la URL de WhatsApp
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <motion.a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      // Animación sutil al hacer hover
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      style={{ zIndex: 9999 }} // Aseguramos que quede por encima de todo
    >
      <PhoneIcon className="h-6 w-6" />
    </motion.a>
  );
}
