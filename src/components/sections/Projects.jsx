import { projects } from '../../data/projects';
import { ExternalLink, Code, Github } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import { Card } from '../ui/Card';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end gap-4 mb-12 border-b border-slate-800/50 pb-4">
          <span className="text-indigo-500 font-mono text-xs uppercase tracking-widest">work</span>
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>

        <ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:border-indigo-500/50">
                <div className="relative h-48 overflow-hidden mb-4">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                      <Code className="w-12 h-12 text-slate-600" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
                <p className="text-sm text-slate-400 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-none text-[10px] font-mono border border-slate-700 text-slate-400 bg-slate-800/50">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-slate-700 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors active:scale-95"
                  >
                    <Github className="w-4 h-4 mr-2" /> Repo
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-indigo-600 border border-indigo-600 text-sm font-medium text-white hover:bg-indigo-500 transition-colors active:scale-95"
                    >
                      Live <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
