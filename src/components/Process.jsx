import { useRevealGroup } from '../hooks/useReveal';
import SectionHeading from './SectionHeading';

const stepIcons = ['01', '02', '03', '04'];

const content = {
  eyebrow: 'How We Work',
  title: 'A Refined Process, Start to Handover',
  subtitle: 'Four disciplined phases ensure clarity, quality, and confidence at every step.',
  steps: [
    { title: 'Consultation', desc: 'We listen to your vision, assess the site, and define scope, budget, and timeline.' },
    { title: 'Design', desc: 'Apex architects craft detailed plans and 3D visualizations for your approval.' },
    { title: 'Execution', desc: 'Construction begins with rigorous quality control and transparent weekly reporting.' },
    { title: 'Handover', desc: 'Final inspection, commissioning, and a guided walkthrough of your completed project.' },
  ],
};

export default function Process() {
  const ref = useRevealGroup();
  return (
    <section id="process" className="relative overflow-hidden bg-[#0a1426]">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.04]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#c8962f]/10 blur-3xl" />
      <div className="container-x !py-12 md:!py-16 relative">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} light />
        <div ref={ref} className="mt-10 lg:mt-12">
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute top-[2.75rem] inset-x-[12%] h-px bg-gradient-to-r from-transparent via-[#c8962f]/40 to-transparent" />
              <div className="grid grid-cols-4 gap-6">
                {content.steps.map((step, i) => (
                  <div key={i} className={`reveal reveal-delay-${i + 1} group relative flex flex-col items-center text-center`}>
                    <div className="relative grid h-[5.5rem] w-[5.5rem] place-items-center rounded-full border border-[#c8962f]/30 bg-[#0f1b33] transition-all duration-600 ease-smooth group-hover:border-[#d4a73e] group-hover:shadow-gold">
                      <span className="font-display text-xl font-extrabold text-gradient-gold">{stepIcons[i]}</span>
                      <span className="absolute inset-0 -z-10 rounded-full bg-[#c8962f]/5 transition-all duration-600 group-hover:bg-[#c8962f]/10 group-hover:scale-110" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold text-white">{step.title}</h3>
                    <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-white/55">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative lg:hidden">
            <div className="absolute top-0 bottom-0 start-[2.25rem] w-px bg-gradient-to-b from-[#c8962f]/40 via-[#c8962f]/20 to-transparent" />
            <div className="flex flex-col gap-6">
              {content.steps.map((step, i) => (
                <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 4)} relative flex items-start gap-5`}>
                  <div className="relative z-10 grid h-[4.5rem] w-[4.5rem] shrink-0 place-items-center rounded-full border border-[#c8962f]/30 bg-[#0f1b33]"><span className="font-display text-lg font-extrabold text-gradient-gold">{stepIcons[i]}</span></div>
                  <div className="pt-3"><h3 className="font-display text-base font-bold text-white">{step.title}</h3><p className="mt-1.5 text-sm leading-relaxed text-white/55">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
