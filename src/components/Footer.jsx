import { HardHat, Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const text = {
  nav: ['Home', 'Services', 'Why Apex', 'Projects', 'Process', 'Success Stories', 'Support'],
  tagline: 'Engineering landmarks with precision, integrity, and timeless craftsmanship since 1998.',
  quickLinks: 'Quick Links',
  servicesTitle: 'Services',
  contactTitle: 'Contact',
  servicesList: ['Commercial', 'Residential', 'Project Management', 'Interior Fit-Out'],
  address: 'Sheikh Zayed Road, Tower 2, Office 1801\nDubai, United Arab Emirates',
  phone: '+971 4 555 8800',
  email: 'projects@apex.ae',
};

export default function Footer() {
  const navLinks = [
    { href: '#home' }, { href: '#services' }, { href: '#why-us' }, { href: '#projects' },
    { href: '#process' }, { href: '#testimonials' }, { href: '#contact' },
  ];

  return (
    <footer className="bg-[#0a1426] text-white">
      <div className="container-x py-16 lg:py-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#d4a73e] text-[#0a1426]"><HardHat className="h-6 w-6" strokeWidth={2.2} /></span>
              <span className="flex flex-col leading-none"><span className="font-display text-lg font-extrabold">Apex</span><span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#ddbb63]">Construction</span></span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">{text.tagline}</p>
            <div className="mt-6 flex items-center gap-3">{[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (<a key={i} href="#" aria-label="social link" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white/60 transition-all duration-400 ease-smooth hover:border-[#d4a73e]/50 hover:bg-[#d4a73e]/10 hover:text-[#ddbb63]"><Icon className="h-5 w-5" /></a>))}</div>
          </div>
          <div><h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#ddbb63]">{text.quickLinks}</h4><ul className="mt-5 flex flex-col gap-3">{navLinks.map((link, i) => (<li key={link.href}><a href={link.href} className="text-sm text-white/60 transition-colors duration-300 hover:text-[#ddbb63]">{text.nav[i]}</a></li>))}</ul></div>
          <div><h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#ddbb63]">{text.servicesTitle}</h4><ul className="mt-5 flex flex-col gap-3">{text.servicesList.map((service) => (<li key={service}><a href="#services" className="text-sm text-white/60 transition-colors duration-300 hover:text-[#ddbb63]">{service}</a></li>))}</ul></div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#ddbb63]">{text.contactTitle}</h4>
            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-white/60"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ddbb63]" /><span className="whitespace-pre-line">{text.address}</span></li>
              <li className="flex items-center gap-3 text-sm text-white/60"><Phone className="h-4 w-4 shrink-0 text-[#ddbb63]" /><a href={`tel:${text.phone.replace(/\s/g, '')}`} className="hover:text-[#ddbb63]">{text.phone}</a></li>
              <li className="flex items-center gap-3 text-sm text-white/60"><Mail className="h-4 w-4 shrink-0 text-[#ddbb63]" /><a href={`mailto:${text.email}`} className="hover:text-[#ddbb63]">{text.email}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
