import ScrollReveal from '../ui/ScrollReveal';

export default function Now() {
  return (
    <section id="now" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-8 border-b border-slate-800/50 pb-4">
          <span className="text-indigo-500 font-mono text-xs uppercase tracking-widest">now</span>
          <h2 className="text-3xl font-bold">Currently</h2>
        </div>

        <ScrollReveal className="space-y-6">
          <p className="text-lg text-slate-400 leading-relaxed">
            Learning C++ memory tooling, building small game prototypes, and reading about cybersecurity for legal contexts.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            Open to internships and junior roles where I can write code that actually matters.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
