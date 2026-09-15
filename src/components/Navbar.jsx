import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle, HardHat, ChevronDown } from 'lucide-react';

const WHATSAPP_NUMBER = '97145558800';
const text = {
  links: ['Home', 'Services', 'Why Apex', 'Projects', 'Process', 'Success Stories', 'Support'],
  quote: 'Get Quote',
  whatsapp: 'WhatsApp',
  message: "Hello Apex, I'd like to inquire about a construction project.",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [waOpen, setWaOpen] = useState(false);

  const links = [
    { key: 'home', href: '#home' }, { key: 'services', href: '#services' },
    { key: 'whyUs', href: '#why-us' }, { key: 'projects', href: '#projects' },
    { key: 'process', href: '#process' }, { key: 'testimonials', href: '#testimonials' },
    { key: 'contact', href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text.message)}`;

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-600 ease-smooth ${scrolled ? 'bg-[#ffffff]/90 backdrop-blur-xl shadow-soft [--header-h:72px]' : 'bg-transparent [--header-h:88px]'}`} style={{ height: 'var(--header-h)' }}>
        <nav className="container-x flex h-full items-center justify-between gap-4">
          <a href="#home" className="group flex shrink-0 items-center gap-2.5" aria-label="Apex">
            <span className={`grid h-11 w-11 place-items-center rounded-xl transition-colors duration-500 ${scrolled ? 'bg-[#0f1b33] text-[#d4a73e]' : 'bg-[#d4a73e] text-[#0a1426]'}`}><HardHat className="h-6 w-6" strokeWidth={2.2} /></span>
            <span className="flex flex-col leading-none">
              <span className={`font-display text-lg font-extrabold tracking-tight transition-colors duration-500 ${scrolled ? 'text-[#0f1b33]' : 'text-white'}`}>Apex</span>
              <span className={`text-[10px] font-medium uppercase tracking-[0.2em] transition-colors duration-500 ${scrolled ? 'text-[#ab7926]' : 'text-[#ddbb63]'}`}>Construction</span>
            </span>
          </a>
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l, i) => (<li key={l.key}><a href={l.href} className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-[#1a2c4d] hover:text-[#ab7926]' : 'text-white/85 hover:text-white'}`}>{text.links[i]}</a></li>))}
          </ul>
          <div className="flex shrink-0 items-center gap-2.5">
            <div className="relative hidden sm:block">
              <button onClick={() => setWaOpen((v) => !v)} onBlur={() => setTimeout(() => setWaOpen(false), 180)} className="inline-flex items-center gap-2 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-3.5 py-2 text-sm font-semibold text-[#059669] transition-all duration-400 ease-smooth hover:bg-[#10b981]/20" aria-label="WhatsApp" aria-expanded={waOpen}>
                <MessageCircle className="h-4 w-4" /><ChevronDown className={`h-3.5 w-3.5 transition-transform duration-400 ${waOpen ? 'rotate-180' : ''}`} />
              </button>
              {waOpen && (<div className="absolute end-0 top-[calc(100%+10px)] z-50 w-60 animate-slide-down rounded-2xl bg-white p-4 shadow-elevated">
                <p className="text-sm font-semibold text-[#0f1b33]">{text.whatsapp}</p><p className="mt-1 text-xs text-[#344d77]">+971 4 555 8800</p>
                <a href={waLink} target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()} className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#10b981] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#059669]"><MessageCircle className="h-4 w-4" />{text.whatsapp}</a>
              </div>)}
            </div>
            <a href="#contact" className="btn-gold hidden sm:inline-flex">{text.quote}</a>
            <button onClick={() => setMobileOpen(true)} className={`grid h-11 w-11 place-items-center rounded-xl transition-colors lg:hidden ${scrolled ? 'text-[#0f1b33] hover:bg-[#eef2f7]' : 'text-white hover:bg-white/10'}`} aria-label="Open menu"><Menu className="h-5 w-5" /></button>
          </div>
        </nav>
      </header>
      <div className={`fixed inset-0 z-[60] lg:hidden ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!mobileOpen}>
        <div className={`absolute inset-0 bg-[#0a1426]/60 backdrop-blur-sm transition-opacity duration-500 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMobileOpen(false)} />
        <aside className={`absolute end-0 top-0 h-full w-[84%] max-w-sm bg-[#ffffff] shadow-elevated transition-transform duration-600 ease-smooth ${mobileOpen ? 'translate-x-0' : 'ltr:translate-x-full rtl:-translate-x-full hidden'}`}>
          <div className="flex items-center justify-between border-b border-[#d6deea] px-6 py-5">
            <span className="font-display text-lg font-extrabold text-[#0f1b33]">Apex</span>
            <button onClick={() => setMobileOpen(false)} className="grid h-10 w-10 place-items-center rounded-xl text-[#1a2c4d] hover:bg-[#eef2f7]" aria-label="Close menu"><X className="h-5 w-5" /></button>
          </div>
          <ul className="flex flex-col gap-1 px-4 py-4">{links.map((l, i) => (<li key={l.key}><a href={l.href} onClick={() => setMobileOpen(false)} className="block rounded-xl px-4 py-3 text-base font-medium text-[#142340] transition-colors hover:bg-[#eef2f7] hover:text-[#ab7926]">{text.links[i]}</a></li>))}</ul>
          <div className="mt-2 flex flex-col gap-3 px-6">
            <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-gold w-full">{text.quote}</a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-outline-dark w-full"><MessageCircle className="h-4 w-4" />{text.whatsapp}</a>
          </div>
        </aside>
      </div>
    </>
  );
}
