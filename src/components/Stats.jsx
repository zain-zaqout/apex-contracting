import { useCountUp } from '../hooks/useCountUp';
import { useRevealGroup } from '../hooks/useReveal';
import { Sparkles, Building2, Smile, Users } from 'lucide-react';

const stats = [
  { icon: Sparkles, end: 27, suffix: '+', label: 'Years of Excellence' },
  { icon: Building2, end: 340, suffix: '+', label: 'Projects Delivered' },
  { icon: Smile, end: 98, suffix: '%', label: 'Client Satisfaction' },
  { icon: Users, end: 120, suffix: '+', label: 'Expert Engineers' },
];

function StatCard({ stat, label, index }) {
  const { ref, value } = useCountUp(stat.end, { suffix: stat.suffix ?? '' });
  const Icon = stat.icon;
  return (
    <div ref={ref} className={`reveal reveal-delay-${index + 1} group relative flex flex-col items-center px-4 py-6 text-center`}>
      {index < stats.length - 1 && (<span className="pointer-events-none absolute end-0 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#c8962f]/25 to-transparent lg:block" />)}
      <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-[#d4a73e]/10 text-[#ddbb63] transition-all duration-600 ease-smooth group-hover:bg-[#d4a73e]/20 group-hover:scale-110">
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-[#d4a73e]/20" />
        <Icon className="h-6 w-6" strokeWidth={1.6} />
      </span>
      <span className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white lg:text-4xl">{value}</span>
      <span className="mt-2 h-0.5 w-8 rounded-full bg-[#d4a73e]/60 transition-all duration-600 ease-smooth group-hover:w-12" />
      <span className="mt-2 text-xs font-medium text-white/55">{label}</span>
    </div>
  );
}

export default function Stats() {
  const ref = useRevealGroup();
  return (
    <section id="stats" className="relative bg-[#0a1426]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c8962f]/50 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[60%] -translate-x-1/2 rounded-full bg-[#c8962f]/[0.06] blur-3xl" />
      <div ref={ref} className="container-x relative !py-10 md:!py-12">
        <div className="grid grid-cols-2 gap-y-2 lg:grid-cols-4 lg:gap-0">
          {stats.map((s, i) => (<StatCard key={s.label} stat={s} label={s.label} index={i} />))}
        </div>
      </div>
    </section>
  );
}
