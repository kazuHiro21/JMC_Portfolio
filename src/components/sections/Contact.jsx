import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-end gap-4 mb-12 border-b border-slate-800/50 pb-4">
          <span className="text-indigo-500 font-mono text-xs uppercase tracking-widest">contact</span>
          <h2 className="text-3xl font-bold">Get in touch</h2>
        </div>

        <ScrollReveal className="space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-100">Say hello</h3>
            <p className="text-slate-400">
              I&apos;m open to internships, junior roles, and collaboration. Reach out via email or connect below.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-slate-900 border border-slate-800 rounded-none">
              <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0" />
              <a href="mailto:junmiguel.corbilla@student.eac.edu.ph" className="text-slate-300 hover:text-indigo-400 transition-colors">
                junmiguel.corbilla@student.eac.edu.ph
              </a>
            </div>

            <div className="flex items-center gap-3 p-4 bg-slate-900 border border-slate-800 rounded-none">
              <Github className="w-5 h-5 text-indigo-400 flex-shrink-0" />
              <a href="#" className="text-slate-300 hover:text-indigo-400 transition-colors">
                github.com/junmiguelcorbilla
              </a>
            </div>

            <div className="flex items-center gap-3 p-4 bg-slate-900 border border-slate-800 rounded-none">
              <Linkedin className="w-5 h-5 text-indigo-400 flex-shrink-0" />
              <a href="#" className="text-slate-300 hover:text-indigo-400 transition-colors">
                linkedin.com/in/junmiguelcorbilla
              </a>
            </div>
          </div>

          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-sm font-semibold hover:bg-slate-800 hover:text-white transition-colors active:scale-95">
            <FileText className="w-4 h-4" /> Download Resume
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
