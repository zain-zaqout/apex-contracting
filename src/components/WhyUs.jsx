import { useReveal, useRevealGroup } from '../hooks/useReveal';
import { images } from '../data/images';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

const content = {
  eyebrow: 'Why Apex',
  title: 'A Standard of Excellence Few Can Match',
  subtitle: 'For over two decades, clients have trusted Apex to deliver projects that define skylines and elevate communities.',
  badgeLabel: 'Est. 1998',
  badgeTitle: 'Trusted Since 1998',
  points: [
    ['In-House Engineering Team', 'Licensed engineers and architects under one roof — no subcontracted core work.'],
    ['On-Time, On-Budget Delivery', '98% of Apex projects completed within the contracted schedule and budget.'],
    ['Premium Materials & Methods', 'We source certified, top-grade materials and apply modern construction techniques.'],
    ['Transparent Communication', 'Real-time progress reports and a dedicated Apex project lead for every client.'],
  ],
};

export default function WhyUs() {
  const imgRef = useReveal();
  const listRef = useRevealGroup();
  return (
    <section id="why-us" className="bg-[#f6f4ec]">
      <div className="container-x section-pad">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div ref={imgRef} className="reveal relative">
            <div className="relative overflow-hidden rounded-4xl shadow-elevated">
              <img src={images.architect} alt="Architect reviewing blueprints" className="aspect-[4/5] w-full object-cover object-center sm:aspect-[5/5]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1426]/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 end-6 animate-float-slow sm:end-[-1.5rem]">
              <div className="flex items-center gap-4 rounded-2xl bg-[#0f1b33] px-6 py-5 shadow-elevated">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#d4a73e] text-[#0a1426]"><ShieldCheck className="h-6 w-6" strokeWidth={2} /></span>
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#ddbb63]">{content.badgeLabel}</span>
                  <span className="font-display text-sm font-bold text-white">{content.badgeTitle}</span>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -left-4 -top-4 -z-0 h-24 w-24 rounded-tl-3xl border-s-2 border-t-2 border-[#d4a73e]/50" />
          </div>
          <div ref={listRef}>
            <div className="reveal inline-flex items-center gap-2"><span className="h-px w-8 bg-[#c8962f]" /><span className="eyebrow">{content.eyebrow}</span></div>
            <h2 className="reveal reveal-delay-1 mt-5 font-display text-3xl font-extrabold tracking-tight text-[#0f1b33] sm:text-4xl lg:leading-[1.12]">{content.title}</h2>
            <p className="reveal reveal-delay-2 mt-4 text-base leading-relaxed text-[#344d77] sm:text-lg">{content.subtitle}</p>
            <ul className="mt-8 flex flex-col gap-5">
              {content.points.map(([title, desc], i) => (
                <li key={i} className={`reveal reveal-delay-${Math.min(i + 2, 5)} flex items-start gap-4`}>
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#d4a73e]/15 text-[#ab7926]"><CheckCircle2 className="h-5 w-5" strokeWidth={2} /></span>
                  <div><h3 className="font-display text-base font-bold text-[#0f1b33]">{title}</h3><p className="mt-1 text-sm leading-relaxed text-[#344d77]">{desc}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
