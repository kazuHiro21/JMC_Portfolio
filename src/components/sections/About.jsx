import ScrollReveal from '../ui/ScrollReveal';

export default function About() {
  return (
    <section id="about" className="section alt">
      <div className="section-inner">
        <div className="section-head"><span className="section-kicker">01 / Profile</span><h2>A path into security.</h2></div>
        <ScrollReveal>
          <p className="section-intro">
            I&apos;m a third-year Computer Science student at <strong>Emilio Aguinaldo College – Cavite</strong>. I started in HUMSS and moved into programming, where I found myself drawn to the question of how software behaves under pressure. I&apos;m working toward stronger foundations in secure coding, systems, and practical security analysis.
          </p>
          <div className="about-grid">
            <article className="info-panel">
              <h3>What I&apos;m working toward</h3>
              <p className="focus-copy">Getting better at understanding how applications and systems fail, then using that knowledge to write software that is safer, easier to inspect, and dependable in real use.</p>
            </article>
            <p className="about-journey-link">My path so far, from HUMSS to computer science, is mapped in the <a href="#journey">journey timeline ↓</a></p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
