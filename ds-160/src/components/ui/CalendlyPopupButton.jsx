// CalendlyPopupButton.jsx
import { useEffect } from 'react';

export default function CalendlyPopupButton() {
  // Inyectamos script principal 1 vez
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const handleOpenPopup = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/nbaez414/ds-160-reunion"
    });
  };

  return (
    <button 
      onClick={handleOpenPopup}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      Agendar Cita
    </button>
  );
}
