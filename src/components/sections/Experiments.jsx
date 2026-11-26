import { experiments } from '../../data/experiments';
import ScrollReveal from '../ui/ScrollReveal';

export default function Experiments() {
  return (
    <section id="experiments" className="section alt">
      <div className="section-inner">
        <div className="section-head"><span className="section-kicker">07 / Lab notes</span><h2>Small things in progress.</h2></div>
        <ScrollReveal>
          <div className="experiment-list">
            {experiments.map((experiment) => (
              <article className="experiment" key={experiment.title}>
                <h3>{experiment.title}</h3>
                <p>{experiment.description}</p>
                <span className="meta-label">{experiment.status}</span>
                <div className="tag-row">{experiment.tech.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>
              </article>
            ))}
          </div>
          <p className="section-note">Public links will be added as these experiments are published.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
