import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '97145558800';
const WHATSAPP_MSG = "Hello Apex, I'd like to inquire about a construction project.";

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  return (
    <a href={waLink} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className={`fixed bottom-6 end-6 z-40 flex items-center gap-3 rounded-full bg-[#10b981] px-4 py-4 text-white shadow-elevated transition-all duration-600 ease-smooth hover:bg-[#059669] ${show ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}`}>
      <MessageCircle className="h-6 w-6" />
      <span className="pointer-events-none absolute end-full me-3 hidden whitespace-nowrap rounded-lg bg-[#0f1b33] px-3 py-2 text-xs font-semibold text-white shadow-soft sm:block">Chat with us</span>
    </a>
  );
}
