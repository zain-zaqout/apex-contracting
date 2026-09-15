import { useRevealGroup } from '../hooks/useReveal';
import { images } from '../data/images';
import SectionHeading from './SectionHeading';
import { Star, Quote } from 'lucide-react';

const avatars = [images.a1, images.a2, images.a3];
const text = {
  eyebrow: 'Success Stories',
  title: 'Partnerships That Built Landmarks',
  subtitle: 'Real results, real leaders — hear how Apex delivered on their vision.',
  items: [
    { name: 'Khalid Al-Rashid', role: 'CEO, Rashid Holdings', quote: 'Apex delivered our headquarters six weeks ahead of schedule.' },
    { name: 'Sarah Mitchell', role: 'President, Mitchell Properties', quote: 'From design to handover, the Apex team was meticulous and communicative.' },
  ],
};

export default function Testimonials() {
  const ref = useRevealGroup();
  return (
    <section id="testimonials" className="bg-[#fcfbf7]">
      <div className="container-x section-pad">
        <SectionHeading eyebrow={text.eyebrow} title={text.title} subtitle={text.subtitle} />
        <div ref={ref} className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-16">
          {text.items.map((item, i) => (
            <figure key={i} className={`reveal reveal-delay-${i + 1} relative flex flex-col rounded-3xl bg-white p-8 shadow-card transition-all duration-600 ease-smooth hover:-translate-y-1.5 hover:shadow-elevated`}>
              <Quote className="h-9 w-9 text-[#d4a73e]/40" strokeWidth={1.5} />
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-[#1a2c4d]">"{item.quote}"</blockquote>
              <div className="mt-6 flex items-center gap-1">{Array.from({ length: 5 }).map((_, s) => (<Star key={s} className="h-4 w-4 fill-[#d4a73e] text-[#d4a73e]" />))}</div>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-[#d6deea] pt-6">
                <img src={avatars[i]} alt={item.name} loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-[#d4a73e]/30" />
                <div><p className="font-display text-sm font-bold text-[#0f1b33]">{item.name}</p><p className="text-xs text-[#344d77]">{item.role}</p></div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
