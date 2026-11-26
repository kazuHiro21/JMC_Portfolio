import { ArrowDown, ArrowUpRight } from 'lucide-react';
import useBoundedDrag from '../../hooks/useBoundedDrag';

export default function Hero() {
  const badgeDrag = useBoundedDrag({ maxX: 42, maxY: 32 });
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> CS student · cybersecurity direction</div>
        <h1>Building software that can <span>stand up to scrutiny.</span></h1>
        <p className="hero-lede">
          I&apos;m Jun Miguel, a Computer Science student interested in application security and the systems behind reliable software. I build with C++ and Python, and I&apos;m looking for an opportunity to grow through hands-on security work.
        </p>
        <div className="hero-actions">
          <a className="button-link" href="#projects">Selected work <ArrowDown size={15} /></a>
          <a className="button-link secondary" href="#contact">Get in touch <ArrowUpRight size={15} /></a>
        </div>
        <div className="hero-meta" aria-label="Current profile">
          <div className="hero-meta-item"><span className="meta-label">Currently</span><span className="meta-value">BS Computer Science</span></div>
          <div className="hero-meta-item"><span className="meta-label">Focus</span><span className="meta-value">Security &amp; systems</span></div>
          <div className="hero-meta-item"><span className="meta-label">Open to</span><span className="meta-value">Internship opportunities</span></div>
        </div>
      </div>
      <figure className="hero-portrait">
        <div className="lanyard-stage">
          <svg className="lanyard-strap-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path className="lanyard-strap-line" d="M50 0 C50 8 50 16 50 22" />
            <path className="lanyard-strap-detail" d="M50 0 C50 8 50 16 50 22" />
          </svg>
          <div className="lanyard-card-drop">
            <div className="lanyard-clip" aria-hidden="true" />
            <div
              className="lanyard-card interactive-tilt"
              ref={badgeDrag.ref}
              onPointerDown={badgeDrag.onPointerDown}
              onPointerMove={badgeDrag.onPointerMove}
              onPointerUp={badgeDrag.onPointerUp}
              onPointerCancel={badgeDrag.onPointerCancel}
              onLostPointerCapture={badgeDrag.onLostPointerCapture}
              onKeyDown={badgeDrag.onKeyDown}
              role="group"
              tabIndex={0}
              aria-label="Movable profile badge. Drag with a pointer or use arrow keys to move it within the lanyard range."
            >
              <div className="lanyard-card-top"><span>JMC / PERSONAL PROFILE</span><span>01</span></div>
              <div className="lanyard-photo"><img src="/images/avatar.jpg" alt="Portrait of Jun Miguel A. Corbilla" fetchPriority="high" /></div>
              <div className="lanyard-details">
                <strong>Jun Miguel Corbilla</strong>
                <span>COMPUTER SCIENCE · SECURITY</span>
                <b>JMC–1821</b>
              </div>
              <div className="lanyard-bottom"><span>STUDENT</span><span>DRAG / ARROWS</span></div>
            </div>
          </div>
        </div>
        <figcaption className="portrait-caption">IDENTITY / PORTFOLIO</figcaption>
      </figure>
    </section>
  );
}
