import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Steps from '../components/sections/Steps';
import Team from '../components/sections/Team';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Sección Hero */}
      <Hero />

      {/* Sección de Pasos */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Steps />
      </motion.div>

      {/* Sección de Equipo */}
      <Team />
    </div>
  );
}