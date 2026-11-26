import { journey } from '../../data/journey';
import ScrollReveal from '../ui/ScrollReveal';

export default function Journey() {
  return (
    <section id="journey" className="section">
      <div className="section-inner">
        <div className="section-head"><span className="section-kicker">02 / Journey</span><h2>One route, still unfolding.</h2></div>
        <p className="journey-intro">A short record of how I got here. New study, project, and work milestones can join the route over time.</p>
        <ScrollReveal>
          <div className="journey-map">
            <span className="journey-packet" aria-hidden="true" />
            <ol className="journey-track">
              {journey.map((step) => (
                <li className="journey-step" key={step.id}>
                  <article className="journey-card">
                    <div className="journey-card-top"><time>{step.years}</time><span>{step.status}</span></div>
                    <h3>{step.title}</h3>
                    <p className="journey-place">{step.place}</p>
                    <p className="journey-summary">{step.summary}</p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
