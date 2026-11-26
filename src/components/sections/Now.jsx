import { Circle } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

export default function Now() {
  return (
    <section id="now" className="section">
      <div className="section-inner">
        <div className="section-head"><span className="section-kicker">06 / Current status</span><h2>What I&apos;m focused on now.</h2></div>
        <ScrollReveal>
          <div className="now-layout">
            <p>Studying computer science, improving my C++ and Python foundations, building small projects, and learning cybersecurity fundamentals. I&apos;m open to internship opportunities where I can contribute, learn from experienced engineers, and build responsibly.</p>
            <span className="now-status"><Circle size={9} fill="currentColor" /> OPEN TO INTERNSHIPS</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
