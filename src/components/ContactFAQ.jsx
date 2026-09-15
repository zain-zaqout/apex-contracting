import { useState } from 'react';
import { useRevealGroup } from '../hooks/useReveal';
import { supabase } from '../lib/supabase';
import { Send, CheckCircle2, AlertCircle, Plus, Minus, MessageCircle, HelpCircle } from 'lucide-react';

const content = {
  support: {
    eyebrow: 'Support & Contact',
    title: "We're Here to Help",
    subtitle: 'Find answers to common questions or reach out directly — the Apex team responds within 24 hours.',
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      { q: 'What regions does Apex serve?', a: 'We operate across the GCC — primarily the UAE, Saudi Arabia, Qatar, and Bahrain — with selected projects worldwide.' },
      { q: 'Do you provide design and build services?', a: 'Yes. The Apex in-house team handles architecture, engineering, and construction under one contract for seamless delivery.' },
      { q: 'How long does a typical project take?', a: 'Timelines vary by scope. A residential villa averages 10–14 months; commercial towers range from 18–36 months. We provide a detailed schedule during consultation.' },
      { q: 'What warranties does Apex offer?', a: 'Every Apex project includes a 20-year structural warranty and a 2-year coverage on finishes and MEP systems.' },
      { q: 'Can we see projects under construction?', a: 'Absolutely. We arrange site tours of active Apex projects for prospective clients on request.' },
    ],
  },
  contact: {
    title: 'Start Your Project Today',
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    projectType: 'Project Type',
    projectTypes: ['Commercial', 'Residential', 'Project Management', 'Interior Fit-Out'],
    message: 'Tell us about your project',
    submit: 'Send Message',
    sending: 'Sending…',
    success: 'Thank you. Your message has been received — Apex will be in touch within 24 hours.',
    error: 'Something went wrong. Please try again or contact us directly.',
  },
};

function AccordionItem({ q, a, open, onToggle }) {
  return (
    <div className={`overflow-hidden rounded-2xl border transition-colors duration-400 ease-smooth ${open ? 'border-[#d4a73e]/50 bg-white shadow-soft' : 'border-[#d6deea] bg-white/60 hover:border-[#aebfd6]'}`}>
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start" aria-expanded={open}>
        <span className="font-display text-sm font-bold text-[#0f1b33]">{q}</span>
        <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-colors duration-400 ${open ? 'bg-[#d4a73e] text-[#0a1426]' : 'bg-[#eef2f7] text-[#243a60]'}`}>{open ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}</span>
      </button>
      <div className="grid transition-[grid-template-rows] duration-500 ease-smooth" style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
        <div className="overflow-hidden"><p className="px-5 pb-4 text-sm leading-relaxed text-[#344d77]">{a}</p></div>
      </div>
    </div>
  );
}

export default function ContactFAQ() {
  const ref = useRevealGroup();
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', projectType: '', message: '' });
  const [openIdx, setOpenIdx] = useState(0);
  const update = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!supabase) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const { error } = await supabase.from('contact_submissions').insert({ name: form.name, email: form.email, phone: form.phone, project_type: form.projectType, message: form.message, lang: 'en' });
      if (error) throw error;
      setStatus('success'); setForm({ name: '', email: '', phone: '', projectType: '', message: '' });
    } catch { setStatus('error'); }
  };

  const inputCls = 'w-full rounded-xl border border-[#aebfd6] bg-[#ffffff] px-4 py-3 text-sm text-[#0f1b33] placeholder-[#526d96] transition-all duration-300 ease-smooth focus:border-[#d4a73e] focus:outline-none focus:ring-2 focus:ring-[#d4a73e]/20';

  return (
    <section id="contact" className="bg-[#f6f4ec]">
      <div className="container-x section-pad">
        {/* Unified heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2"><span className="h-px w-8 bg-[#c8962f]" /><span className="eyebrow">{content.support.eyebrow}</span><span className="h-px w-8 bg-[#c8962f]" /></div>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-[#0f1b33] sm:text-4xl lg:leading-[1.12]">{content.support.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-[#344d77] sm:text-lg">{content.support.subtitle}</p>
        </div>

        <div ref={ref} className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14 lg:mt-16">
          {/* Left — FAQ */}
          <div className="reveal">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0f1b33] text-[#d4a73e]"><HelpCircle className="h-5 w-5" /></span>
              <h3 className="font-display text-xl font-bold text-[#0f1b33]">{content.faq.title}</h3>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              {content.faq.items.map((item, i) => (
                <AccordionItem key={i} q={item.q} a={item.a} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? null : i)} />
              ))}
            </div>
          </div>
          {/* Right — Contact form */}
          <div className="reveal reveal-delay-1">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0f1b33] text-[#d4a73e]"><MessageCircle className="h-5 w-5" /></span>
              <h3 className="font-display text-xl font-bold text-[#0f1b33]">{content.contact.title}</h3>
            </div>
            <div className="mt-6 rounded-3xl bg-white p-6 shadow-card sm:p-8">
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2"><label className="text-sm font-semibold text-[#142340]">{content.contact.name}</label><input required value={form.name} onChange={update('name')} className={inputCls} placeholder="—" /></div>
                  <div className="flex flex-col gap-2"><label className="text-sm font-semibold text-[#142340]">{content.contact.phone}</label><input required type="tel" value={form.phone} onChange={update('phone')} className={inputCls} placeholder="+971 —" /></div>
                </div>
                <div className="flex flex-col gap-2"><label className="text-sm font-semibold text-[#142340]">{content.contact.email}</label><input required type="email" value={form.email} onChange={update('email')} className={inputCls} placeholder="name@example.com" /></div>
                <div className="flex flex-col gap-2"><label className="text-sm font-semibold text-[#142340]">{content.contact.projectType}</label><select required value={form.projectType} onChange={update('projectType')} className={inputCls}><option value="" disabled>—</option>{content.contact.projectTypes.map((pt) => <option key={pt} value={pt}>{pt}</option>)}</select></div>
                <div className="flex flex-col gap-2"><label className="text-sm font-semibold text-[#142340]">{content.contact.message}</label><textarea required value={form.message} onChange={update('message')} rows={3} className={`${inputCls} resize-none`} placeholder="—" /></div>
                <button type="submit" disabled={status === 'sending'} className="btn-gold mt-1 w-full disabled:cursor-not-allowed disabled:opacity-70">{status === 'sending' ? content.contact.sending : <>{content.contact.submit}<Send className="h-4 w-4 rtl-flip" /></>}</button>
                {status === 'success' && <div className="flex items-start gap-3 rounded-xl bg-[#ecfdf5] px-4 py-3.5 text-sm text-[#047857] animate-slide-down"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" /><span>{content.contact.success}</span></div>}
                {status === 'error' && <div className="flex items-start gap-3 rounded-xl bg-[#fef2f2] px-4 py-3.5 text-sm text-[#dc2626] animate-slide-down"><AlertCircle className="mt-0.5 h-5 w-5 shrink-0" /><span>{content.contact.error}</span></div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
