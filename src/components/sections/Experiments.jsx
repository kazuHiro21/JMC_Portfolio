import ScrollReveal from '../ui/ScrollReveal';

export default function Experiments() {
  const experiments = [
    {
      title: 'Canvas Particle Toy',
      description: 'Interactive particle system with mouse repulsion.',
      tech: ['JavaScript', 'Canvas'],
    },
    {
      title: 'C++ CLI Menu',
      description: 'Terminal-based menu system with input validation.',
      tech: ['C++', 'Conan'],
    },
  ];

  return (
    <section id="experiments" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end gap-4 mb-12 border-b border-slate-800/50 pb-4">
          <span className="text-indigo-500 font-mono text-xs uppercase tracking-widest">labs</span>
          <h2 className="text-3xl font-bold">Experiments</h2>
        </div>

        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {experiments.map((exp) => (
              <div key={exp.title} className="bg-slate-900 border border-slate-800 p-6 rounded-none">
                <h3 className="text-lg font-bold text-slate-100 mb-2">{exp.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-none text-[10px] font-mono border border-slate-700 text-slate-400 bg-slate-800/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
