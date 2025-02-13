// components/sections/Team.jsx
import AttorneyCard from '../ui/AttorneyCard';

const attorneys = [
  {
    name: "Dra. Laura M. Fernández",
    title: "Derecho Migratorio",
    experience: "15 años",
    image: "/img/abogado.webp",
    specialties: ["Visas de Trabajo", "Ajuste de Estatus"]
  },
  {
    name: "Lic. Carlos E. Rojas",
    title: "Visas de Inversión",
    experience: "12 años",
    image: "/img/abogada.webp",
    specialties: ["EB-5", "Renovaciones"]
  },
  {
    name: "Dra. Ana G. Castillo",
    title: "Defensa Deportación",
    experience: "10 años",
    image: "/img/abogada2.webp",
    specialties: ["Asilo Político", "Corte Migratoria"]
  },
  {
    name: "Lic. Roberto J. Méndez",
    title: "Reunificación Familiar",
    experience: "8 años",
    image: "/img/abogado2.webp",
    specialties: ["I-130", "Aplicaciones Consulares"]
  }
];

export default function Team() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">
          Nuestro Equipo Legal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {attorneys.map((attorney, index) => (
        <AttorneyCard 
            key={index}
            image={attorney.image}
            name={attorney.name}
            title={attorney.title}
            experience={attorney.experience}
            specialties={attorney.specialties}
        />
        ))}
        </div>
      </div>
    </section>
  );
}