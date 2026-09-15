import { images } from '../data/images';
import { ArrowRight } from 'lucide-react';

const heroText = {
  eyebrow: 'Apex — Construction & Contracting Since 1998',
  title: 'Engineering Landmarks That Define Skylines',
  subtitle:
    'Apex delivers precision-engineered commercial, residential, and fit-out projects — combining three decades of expertise with uncompromising quality and visionary design.',
  ctaPrimary: 'Request a Quote',
  ctaSecondary: 'View Our Projects',
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={images.hero} alt="" className="h-full w-full object-cover object-center" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1426]/90 via-[#0a1426]/65 to-[#0f1b33]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1426]/80 via-transparent to-[#0a1426]/30" />
      </div>
      <div className="container-x relative z-10 pt-[var(--header-h)]">
        <div className="max-w-2xl">
          <div className="animate-fade-up"><span className="eyebrow text-[#ddbb63]"><span className="h-px w-8 bg-[#d4a73e]" />{heroText.eyebrow}</span></div>
          <h1 className="mt-6 animate-fade-up font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4rem]" style={{ animationDelay: '80ms' }}>{heroText.title}</h1>
          <p className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-white/75 sm:text-lg" style={{ animationDelay: '160ms' }}>{heroText.subtitle}</p>
          <div className="mt-9 flex animate-fade-up flex-col gap-4 sm:flex-row sm:items-center" style={{ animationDelay: '240ms' }}>
            <a href="#contact" className="btn-gold">{heroText.ctaPrimary}<ArrowRight className="h-4 w-4" /></a>
            <a href="#projects" className="btn-outline">{heroText.ctaSecondary}</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0a1426] to-transparent" />
    </section>
  );
}
