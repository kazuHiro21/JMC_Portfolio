import { ArrowUpRight, Github, Mail } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

export default function Contact() {
  return (
    <section id="contact" className="section alt">
      <div className="section-inner">
        <div className="section-head"><span className="section-kicker">08 / Contact</span><h2>Let&apos;s talk.</h2></div>
        <ScrollReveal>
          <div className="contact-layout">
            <div><h3>Interested in working together?</h3><p>I&apos;m open to internships and thoughtful collaboration around software and security. You can reach me by email or explore my code on GitHub.</p></div>
            <div className="contact-links">
              <a className="contact-link" href="mailto:junmiguel.corbilla@student.eac.edu.ph"><Mail size={17} /> junmiguel.corbilla@student.eac.edu.ph <ArrowUpRight size={14} /></a>
              <a className="contact-link" href="https://github.com/junmiguelcorbilla" target="_blank" rel="noreferrer"><Github size={17} /> github.com/junmiguelcorbilla <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
