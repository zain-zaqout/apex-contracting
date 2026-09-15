import { useState } from 'react';
import { useRevealGroup } from '../hooks/useReveal';
import SectionHeading from './SectionHeading';
import { Plus, Minus } from 'lucide-react';

const content = {
  eyebrow: 'Questions',
  title: 'Frequently Asked Questions',
  subtitle: 'Everything you need to know before starting your project with Apex.',
  items: [
    {
      q: 'What regions does Apex serve?',
      a: 'We operate across the GCC — primarily the UAE, Saudi Arabia, Qatar, and Bahrain — with selected projects worldwide.',
    },
    {
      q: 'Do you provide design and build services?',
      a: 'Yes. The Apex in-house team handles architecture, engineering, and construction under one contract for seamless delivery.',
    },
    {
      q: 'How long does a typical project take?',
      a: 'Timelines vary by scope. A residential villa averages 10–14 months; commercial towers range from 18–36 months. We provide a detailed schedule during consultation.',
    },
    {
      q: 'What warranties does Apex offer?',
      a: 'Every Apex project includes a 20-year structural warranty and a 2-year coverage on finishes and MEP systems.',
    },
    {
      q: 'Can we see projects under construction?',
      a: 'Absolutely. We arrange site tours of active Apex projects for prospective clients on request.',
    },
  ],
};

function AccordionItem({ q, a, open, onToggle }) {
  return (
    <div className={`overflow-hidden rounded-2xl border transition-colors duration-400 ease-smooth ${open ? 'border-[#d4a73e]/50 bg-white shadow-soft' : 'border-[#d6deea] bg-white/60 hover:border-[#aebfd6]'}`}>
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start" aria-expanded={open}>
        <span className="font-display text-base font-bold text-[#0f1b33]">{q}</span>
        <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors duration-400 ${open ? 'bg-[#d4a73e] text-[#0a1426]' : 'bg-[#eef2f7] text-[#243a60]'}`}>{open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}</span>
      </button>
      <div className="grid transition-[grid-template-rows] duration-500 ease-smooth" style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
        <div className="overflow-hidden"><p className="px-6 pb-5 text-sm leading-relaxed text-[#344d77]">{a}</p></div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useRevealGroup();
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section id="faq" className="bg-[#f6f4ec]">
      <div className="container-x section-pad">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
        <div ref={ref} className="mx-auto mt-12 flex max-w-3xl flex-col gap-3.5 lg:mt-14">
          {content.items.map((item, i) => (
            <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}>
              <AccordionItem q={item.q} a={item.a} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? null : i)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
