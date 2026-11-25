import { skills } from '../../data/skills';
import ScrollReveal from '../ui/ScrollReveal';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end gap-4 mb-12 border-b border-slate-800/50 pb-4">
          <span className="text-indigo-500 font-mono text-xs uppercase tracking-widest">stack</span>
          <h2 className="text-3xl font-bold">Tools I use</h2>
        </div>

        <ScrollReveal>
          <div className="space-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((item) => (
                    <span key={item} className="px-4 py-2 rounded-none border border-slate-700 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
                      {item}
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
