import { useRevealGroup } from '../hooks/useReveal';
import { serviceImages } from '../data/images';
import SectionHeading from './SectionHeading';
import { Building2, Home, ClipboardList, Sofa, ArrowRight } from 'lucide-react';

const content = {
  eyebrow: 'What We Do',
  title: 'Comprehensive Construction Solutions',
  subtitle: 'From foundation to finishing, Apex manages every phase with the same uncompromising standard of excellence.',
  cta: 'Learn More',
};

const services = [
  { icon: Building2, title: 'Commercial Construction', desc: 'Office towers, retail complexes, and mixed-use developments built to the highest structural and aesthetic standards.' },
  { icon: Home, title: 'Residential Construction', desc: 'Luxury villas and residential communities crafted with meticulous attention to detail and lasting value.' },
  { icon: ClipboardList, title: 'Project Management', desc: 'End-to-end oversight — scheduling, procurement, and quality control — keeping every Apex project on time and on budget.' },
  { icon: Sofa, title: 'Interior Fit-Out', desc: 'Sophisticated interior execution that transforms architectural vision into refined, functional spaces.' },
];

export default function Services() {
  const ref = useRevealGroup();
  return (
    <section id="services" className="bg-[#fcfbf7]">
      <div className="container-x section-pad">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
        <div ref={ref} className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <article key={i} className={`reveal reveal-delay-${i + 1} group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-600 ease-smooth hover:-translate-y-2 hover:shadow-elevated`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={serviceImages[i]} alt={item.title} loading="lazy" className="service-img h-full w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1426]/70 via-[#0a1426]/15 to-transparent" />
                  <span className="absolute start-4 top-4 grid h-12 w-12 place-items-center rounded-xl bg-[#d4a73e] text-[#0a1426] shadow-gold ring-4 ring-white/10 backdrop-blur-sm transition-all duration-500 ease-smooth group-hover:scale-110">
                    <Icon className="h-6 w-6 text-[#0a1426] transition-colors duration-500 group-hover:text-[#0a1426]" strokeWidth={1.8} />
                  </span>
                  <span className="absolute end-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-[#0a1426]/80 font-display text-sm font-extrabold text-[#ddbb63] backdrop-blur-sm">0{i + 1}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold text-[#0f1b33]">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#344d77]">{item.desc}</p>
                  <a href="#contact" className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#ab7926] transition-colors duration-300 hover:text-[#c8962f]">
                    {content.cta}<ArrowRight className="h-4 w-4 transition-transform duration-400 ease-smooth group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
