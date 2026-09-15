import { useState } from 'react';
import { useRevealGroup } from '../hooks/useReveal';
import { supabase } from '../lib/supabase';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const content = {
  eyebrow: 'Get in Touch',
  title: 'Start Your Project Today',
  subtitle: 'Share your vision and the Apex team will respond within 24 hours.',
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
  info: {
    title: 'Visit Our Office',
    address: 'Sheikh Zayed Road, Tower 2, Office 1801\nDubai, United Arab Emirates',
    phone: '+971 4 555 8800',
    email: 'projects@apex.ae',
    hours: 'Sun – Thu: 8:00 AM – 6:00 PM',
  },
};

export default function Contact() {
  const ref = useRevealGroup();
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', projectType: '', message: '' });
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
  const infoItems = [
    { icon: MapPin, label: content.info.address },
    { icon: Phone, label: content.info.phone, href: `tel:${content.info.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: content.info.email, href: `mailto:${content.info.email}` },
    { icon: Clock, label: content.info.hours },
  ];

  return (
    <section id="contact" className="bg-[#fcfbf7]">
      <div className="container-x section-pad">
        <div ref={ref} className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <div className="reveal">
            <div className="inline-flex items-center gap-2"><span className="h-px w-8 bg-[#c8962f]" /><span className="eyebrow">{content.eyebrow}</span></div>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-[#0f1b33] sm:text-4xl lg:leading-[1.12]">{content.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-[#344d77] sm:text-lg">{content.subtitle}</p>
            <div className="mt-10 flex flex-col gap-5">
              {infoItems.map((item, i) => {
                const Icon = item.icon;
                const content = (<div className="flex items-start gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#0f1b33] text-[#d4a73e]"><Icon className="h-5 w-5" strokeWidth={1.8} /></span><span className="pt-2 whitespace-pre-line text-sm leading-relaxed text-[#243a60]">{item.label}</span></div>);
                return item.href ? <a key={i} href={item.href} className="transition-opacity hover:opacity-70">{content}</a> : <div key={i}>{content}</div>;
              })}
            </div>
          </div>
          <div className="reveal reveal-delay-1 rounded-4xl bg-white p-8 shadow-card sm:p-10">
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2"><label className="text-sm font-semibold text-[#142340]">{content.name}</label><input required value={form.name} onChange={update('name')} className={inputCls} placeholder="—" /></div>
                <div className="flex flex-col gap-2"><label className="text-sm font-semibold text-[#142340]">{content.phone}</label><input required type="tel" value={form.phone} onChange={update('phone')} className={inputCls} placeholder="+971 —" /></div>
              </div>
              <div className="flex flex-col gap-2"><label className="text-sm font-semibold text-[#142340]">{content.email}</label><input required type="email" value={form.email} onChange={update('email')} className={inputCls} placeholder="name@example.com" /></div>
              <div className="flex flex-col gap-2"><label className="text-sm font-semibold text-[#142340]">{content.projectType}</label><select required value={form.projectType} onChange={update('projectType')} className={inputCls}><option value="" disabled>—</option>{content.projectTypes.map((pt) => <option key={pt} value={pt}>{pt}</option>)}</select></div>
              <div className="flex flex-col gap-2"><label className="text-sm font-semibold text-[#142340]">{content.message}</label><textarea required value={form.message} onChange={update('message')} rows={4} className={`${inputCls} resize-none`} placeholder="—" /></div>
              <button type="submit" disabled={status === 'sending'} className="btn-gold mt-2 w-full disabled:cursor-not-allowed disabled:opacity-70">{status === 'sending' ? content.sending : <>{content.submit}<Send className="h-4 w-4 rtl-flip" /></>}</button>
              {status === 'success' && <div className="flex items-start gap-3 rounded-xl bg-[#ecfdf5] px-4 py-3.5 text-sm text-[#047857] animate-slide-down"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" /><span>{content.success}</span></div>}
              {status === 'error' && <div className="flex items-start gap-3 rounded-xl bg-[#fef2f2] px-4 py-3.5 text-sm text-[#dc2626] animate-slide-down"><AlertCircle className="mt-0.5 h-5 w-5 shrink-0" /><span>{content.error}</span></div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
