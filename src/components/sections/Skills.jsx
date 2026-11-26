import { useState } from 'react';
import { skills } from '../../data/skills';
import ScrollReveal from '../ui/ScrollReveal';

function SkillMark({ name, icon }) {
  const [loaded, setLoaded] = useState(true);
  return loaded
    ? <img src={`https://cdn.simpleicons.org/${icon}/C3E66B`} alt="" loading="lazy" onError={() => setLoaded(false)} />
    : <span className="skill-fallback" aria-hidden="true">{name.slice(0, 1)}</span>;
}

export default function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="section-inner">
        <div className="section-head"><span className="section-kicker">05 / Toolkit</span><h2>Tools, with a purpose.</h2></div>
        <ScrollReveal>
          <div className="skill-groups">
            {skills.map((group) => (
              <div className="skill-group" key={group.category}>
                <h3>{group.category}</h3>
                <div className="skill-items">{group.items.map((item) => <span className="skill-item" key={item.name}><SkillMark {...item} />{item.name}</span>)}</div>
              </div>
            ))}
          </div>
          <p className="section-note">The icons are served by Simple Icons. The tool names remain visible if an icon can&apos;t load.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
