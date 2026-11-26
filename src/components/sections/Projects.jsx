import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { projects } from '../../data/projects';
import ScrollReveal from '../ui/ScrollReveal';
import usePointerTilt from '../../hooks/usePointerTilt';

function ProjectCard({ project }) {
  const tilt = usePointerTilt(1.8);
  return (
    <article className="project-card interactive-tilt" ref={tilt.ref} onPointerMove={tilt.onPointerMove} onPointerLeave={tilt.onPointerLeave}>
      <div className="project-cover" aria-hidden="true"><span className="cover-index">PROJECT {project.number}</span><span className="cover-code">{project.cover}</span></div>
      <div className="project-body">
        <div className="project-title-row"><h3>{project.title}</h3><a href={project.github} target="_blank" rel="noreferrer">Repo <ArrowUpRight size={13} /></a></div>
        <p className="project-summary">{project.summary}</p>
        <div className="project-detail"><span className="meta-label">Problem</span><p>{project.problem}</p></div>
        <div className="project-detail"><span className="meta-label">Approach</span><p>{project.approach}</p></div>
        <div className="project-detail"><span className="meta-label">Learned</span><p>{project.learning}</p></div>
        <div className="tag-row">{project.tech.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div className="section-head"><span className="section-kicker">03 / Selected work</span><h2>Built, tested, learned.</h2></div>
        <ScrollReveal>
          <div className="project-grid">{visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
          {projects.length > 3 && <button className="more-projects" type="button" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show fewer projects' : 'View more projects'} <ChevronDown className={showAll ? 'chevron-up' : ''} size={15} /></button>}
          <p className="section-note">Project screenshots will be added as they are prepared.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
