import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <ConstellationInline />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <motion.img
            src="/images/avatar.jpg"
            alt="Jun Miguel A. Corbilla"
            className="w-[400px] h-[400px] object-contain filter drop-shadow-2xl transition-filter duration-500 hover:drop-shadow-[0_0_40px_rgba(99,102,241,0.5)] animate-float"
            loading="lazy"
          />
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-indigo-500/30 text-indigo-400 text-xs font-mono uppercase tracking-widest">
            3rd Year CS Student
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Hi, I'm <span className="text-indigo-400">Jun Miguel.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            Aspiring game developer and cybersecurity student. I build with C++, Python, and Java, and I craft interfaces with React.
            Ideally headed for law firms and agencies.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="px-6 py-3 bg-indigo-600 border border-indigo-600 text-white font-semibold hover:bg-indigo-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 active:scale-95 transition-all">
              View Work
            </a>
            <a href="#contact" className="px-6 py-3 border border-slate-700 text-slate-300 font-semibold hover:bg-slate-800 hover:text-white active:scale-95 transition-all">
              Contact
            </a>
          </div>

          <div className="flex gap-4 mt-2">
            <a href="mailto:example@email.com" className="p-2.5 rounded-none border border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="p-2.5 rounded-none border border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-2.5 rounded-none border border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConstellationInline() {
  return (
    <div className="absolute inset-0 -z-10 opacity-25 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <circle id="dot" cx="0" cy="0" r="1" fill="#6366f1" />
        </defs>
        <use x="10" y="10" href="#dot" opacity="60" />
        <use x="90" y="30" href="#dot" opacity="60" />
        <use x="40" y="80" href="#dot" opacity="60" />
        <use x="20" y="60" href="#dot" opacity="40" />
        <use x="70" y="15" href="#dot" opacity="40" />
        <line x1="10" y1="10" x2="90" y2="30" stroke="#6366f1" strokeWidth="0.5" opacity="30" />
        <line x1="90" y1="30" x2="40" y2="80" stroke="#6366f1" strokeWidth="0.5" opacity="30" />
        <line x1="40" y1="80" x2="20" y2="60" stroke="#6366f1" strokeWidth="0.5" opacity="20" />
      </svg>
    </div>
  );
}
