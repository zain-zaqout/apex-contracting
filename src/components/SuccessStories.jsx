import { useState, useEffect, useCallback } from 'react';
import { useRevealGroup } from '../hooks/useReveal';
import { images } from '../data/images';
import SectionHeading from './SectionHeading';
import { Star, Quote, ChevronLeft, ChevronRight, Building2 } from 'lucide-react';

const execPhotos = [images.exec1, images.exec2];
const text = {
  eyebrow: 'Success Stories',
  title: 'Partnerships That Built Landmarks',
  subtitle: 'Real results, real leaders — hear how Apex delivered on their vision.',
  items: [
    { name: 'Khalid Al-Rashid', role: 'CEO, Rashid Holdings', quote: 'Apex delivered our headquarters six weeks ahead of schedule. The craftsmanship is simply unmatched.', company: 'Rashid Holdings', project: 'Corporate HQ Tower — Riyadh', rating: 5 },
    { name: 'Sarah Mitchell', role: 'President, Mitchell Properties', quote: 'From design to handover, the Apex team was meticulous and communicative. Our residential towers exceeded every expectation.', company: 'Mitchell Properties', project: 'Marina Residential Towers — Dubai', rating: 5 },
  ],
};

export default function SuccessStories() {
  const ref = useRevealGroup();
  const [active, setActive] = useState(0);
  const items = text.items;
  const count = items.length;
  const Prev = ChevronLeft;
  const Next = ChevronRight;

  const go = useCallback((n) => setActive((p) => (p + n + count) % count), [count]);

  useEffect(() => {
    const timer = setInterval(() => go(1), 7000);
    return () => clearInterval(timer);
  }, [go]);

  return (
    <section id="testimonials" className="bg-[#fcfbf7]">
      <div className="container-x section-pad">
        <SectionHeading eyebrow={text.eyebrow} title={text.title} subtitle={text.subtitle} />
        <div ref={ref} className="mx-auto mt-12 max-w-5xl lg:mt-16">
          {/* Swiper container */}
          <div className="reveal relative overflow-hidden rounded-3xl bg-white shadow-card">
            <div className="flex transition-transform duration-700 ease-smooth" style={{ transform: `translateX(${-active * 100}%)` }}>
              {items.map((item, i) => (
                <div key={i} className="flex w-full shrink-0 flex-col md:flex-row">
                  {/* Left/right side — executive photo with company info overlay */}
                  <div className="relative min-h-[280px] flex-1 md:min-h-[420px]">
                    <img src={execPhotos[i] ?? execPhotos[0]} alt={item.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1426]/85 via-[#0a1426]/30 to-transparent" />
                    {/* Company name + person name at bottom */}
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="flex items-center gap-2 text-[#ddbb63]">
                        <Building2 className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">{item.company}</span>
                      </div>
                      <h3 className="mt-2 font-display text-xl font-extrabold text-white">{item.name}</h3>
                      <p className="mt-0.5 text-sm text-white/70">{item.role}</p>
                    </div>
                  </div>
                  {/* Other side — star rating + quote */}
                  <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
                    <Quote className="h-10 w-10 text-[#d4a73e]/30" strokeWidth={1.5} />
                    <div className="mt-4 flex items-center gap-1">
                      {Array.from({ length: item.rating }).map((_, s) => (
                        <Star key={s} className="h-5 w-5 fill-[#d4a73e] text-[#d4a73e]" />
                      ))}
                    </div>
                    <blockquote className="mt-5 text-lg leading-relaxed text-[#1a2c4d]">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <p className="mt-6 text-sm font-semibold text-[#ab7926]">{item.project}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Navigation arrows */}
            <button
              onClick={() => go(-1)}
              className="absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow-soft backdrop-blur-sm transition-all duration-300 hover:bg-[#d4a73e] hover:shadow-elevated ltr:left-4 rtl:right-4"
              aria-label="Previous"
            >
              <Prev className="h-5 w-5 text-[#0f1b33]" />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow-soft backdrop-blur-sm transition-all duration-300 hover:bg-[#d4a73e] hover:shadow-elevated ltr:right-4 rtl:left-4"
              aria-label="Next"
            >
              <Next className="h-5 w-5 text-[#0f1b33]" />
            </button>
          </div>
          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2.5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2.5 rounded-full transition-all duration-400 ${active === i ? 'w-8 bg-[#c8962f]' : 'w-2.5 bg-[#aebfd6] hover:bg-[#7e95ba]'}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
