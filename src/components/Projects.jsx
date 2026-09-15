import { useState } from 'react';
import { useRevealGroup } from '../hooks/useReveal';
import SectionHeading from './SectionHeading';
import { ArrowRight, MapPin } from 'lucide-react';

const projectVisuals = [
  '/images/projects/project-1.jpg',
  '/images/projects/project-2.jpg',
  '/images/projects/project-3.jpg',
  '/images/projects/project-4.jpg',
  '/images/projects/project-5.jpg',
  '/images/projects/project-6.jpg',
];

const content = {
  eyebrow: 'Our Portfolio',
  title: 'Projects That Speak for Themselves',
  subtitle: 'A selection of landmark developments across residential, commercial, and interior fit-out.',
  filters: {
    all: 'All',
    residential: 'Residential',
    commercial: 'Commercial',
    fitout: 'Fit-Out',
  },
  viewProject: 'View Project',
  items: [
    { name: 'The Marina Heights', location: 'Dubai Marina, UAE', category: 'residential', img: projectVisuals[0] },
    { name: 'Central Corporate Tower', location: 'Riyadh, KSA', category: 'commercial', img: projectVisuals[1] },
    { name: 'Azure Penthouse', location: 'Doha, Qatar', category: 'fitout', img: projectVisuals[2] },
    { name: 'Palm Garden Villas', location: 'Palm Jumeirah, UAE', category: 'residential', img: projectVisuals[3] },
    { name: 'The Exchange Plaza', location: 'Abu Dhabi, UAE', category: 'commercial', img: projectVisuals[4] },
    { name: 'Heritage Office Fit-Out', location: 'Manama, Bahrain', category: 'fitout', img: projectVisuals[5] },
  ],
};

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const ref = useRevealGroup({}, [filter]);
  const Arrow = ArrowRight;
  const filters = [
    { key: 'all', label: content.filters.all },
    { key: 'residential', label: content.filters.residential },
    { key: 'commercial', label: content.filters.commercial },
    { key: 'fitout', label: content.filters.fitout },
  ];
  const visible = filter === 'all' ? content.items : content.items.filter((p) => p.category === filter);

  return (
    <section id="projects" className="bg-[#fcfbf7]">
      <div className="container-x section-pad">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
        {/* Filter pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5 lg:mt-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-400 ease-smooth ${filter === f.key ? 'bg-[#0f1b33] text-white shadow-soft' : 'bg-white text-[#243a60] shadow-soft hover:bg-[#eef2f7] hover:text-[#0f1b33]'}`}
            >
              {f.label}
            </button>
          ))}
        </div>
        {/* Clean card grid */}
        <div ref={ref} key={filter} className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {visible.map((p, i) => (
            <article
              key={`${p.name}-${filter}`}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-elevated`}
            >
              {/* Image — uniform aspect ratio, consistent color grading */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="img-graded h-full w-full object-cover transition-transform duration-[800ms] ease-smooth group-hover:scale-105"
                />
                {/* Subtle gradient for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1426]/50 via-transparent to-transparent" />
                {/* Category badge — clean pill */}
                <span className="absolute start-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0f1b33] shadow-soft backdrop-blur-sm">
                  {content.filters[p.category]}
                </span>
              </div>
              {/* Body — clean, minimal, well-spaced */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold text-[#0f1b33]">{p.name}</h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-[#344d77]">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-[#c8962f]" />
                  {p.location}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#ab7926] transition-colors duration-300 hover:text-[#c8962f]"
                >
                  {content.viewProject}
                  <Arrow className="h-4 w-4 rtl-flip" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
