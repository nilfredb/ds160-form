import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FormDS160 from './pages/FormDS160';
import Confirmacion from './pages/Confirmacion';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import WhatsAppButton from './components/ui/WhatsAppButton';
import Schedule from './pages/Schedule';
import FormDS160_Simplificado from './pages/FormDS160_Simplificado';


export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/formulario" element={<FormDS160 />} />
            <Route path="/confirmacion" element={<Confirmacion />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/politica-privacidad" element={<Privacy />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/ds160test" element={<FormDS160_Simplificado />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}