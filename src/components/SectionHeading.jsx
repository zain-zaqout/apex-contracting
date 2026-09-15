import { useRevealGroup } from '../hooks/useReveal';

export default function SectionHeading({ eyebrow, title, subtitle, center = true, light = false }) {
  const ref = useRevealGroup();
  return (
    <div ref={ref} className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <div className={`reveal ${center ? 'flex items-center justify-center' : 'inline-flex items-center'}`}>
        <span className={`h-px w-8 ${light ? 'bg-[#d4a73e]' : 'bg-[#c8962f]'}`} />
        <span className={`eyebrow ${light ? 'text-[#ddbb63]' : ''}`}>{eyebrow}</span>
        <span className={`h-px w-8 ${light ? 'bg-[#d4a73e]' : 'bg-[#c8962f]'}`} />
      </div>
      <h2 className={`reveal reveal-delay-1 mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12] ${light ? 'text-white' : 'text-[#0f1b33]'}`}>{title}</h2>
      {subtitle && <p className={`reveal reveal-delay-2 mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-white/65' : 'text-[#344d77]'}`}>{subtitle}</p>}
    </div>
  );
}
