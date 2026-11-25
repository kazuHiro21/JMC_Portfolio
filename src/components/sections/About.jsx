import ScrollReveal from '../ui/ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end gap-4 mb-12 border-b border-slate-800/50 pb-4">
          <span className="text-indigo-500 font-mono text-xs uppercase tracking-widest">about</span>
          <h2 className="text-3xl font-bold">Not the usual path.</h2>
        </div>

        <ScrollReveal className="space-y-8">
          <p className="text-lg text-slate-400 leading-relaxed">
            I&apos;m Jun Miguel A. Corbilla, a third-year Computer Science student at Emilio Aguinaldo College &ndash; Cavite. I started in HUMSS&mdash;an unusual path into tech&mdash;and then moved into programming. Right now I spend most of my time with C++, Python, and Java, and I build frontend interfaces with React.
          </p>

          <p className="text-lg text-slate-400 leading-relaxed">
            I want to make games, and I&apos;m interested in cybersecurity&mdash;specifically the kind of work law firms and agencies need. Not because it sounds impressive, but because I like the idea of building software that has to hold up under scrutiny.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-none">
              <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-3">Education</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>
                  <span className="text-slate-200 font-semibold">Emilio Aguinaldo College &ndash; Cavite</span><br />
                  BS Computer Science &middot; 2024 &ndash; Present
                </li>
                <li>
                  <span className="text-slate-200 font-semibold">EAC-Cavite Senior High School</span><br />
                  HUMSS Strand &middot; 2023 &ndash; 2024
                </li>
                <li>
                  <span className="text-slate-200 font-semibold">NU-Dasmarinas</span><br />
                  HUMSS Strand &middot; 2022 &ndash; 2023
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-none">
              <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-3">Focus</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>C++ systems &amp; memory tooling</li>
                <li>Game development prototypes</li>
                <li>Cybersecurity fundamentals</li>
                <li>React frontends</li>
                <li>Docker &amp; container workflows</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
