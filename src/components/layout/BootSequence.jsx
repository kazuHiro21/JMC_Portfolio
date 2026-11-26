import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

export default function BootSequence({ onComplete }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      onComplete();
      return undefined;
    }

    const stepTimer = window.setInterval(() => setActiveStep((step) => Math.min(step + 1, 3)), 680);
    const finishTimer = window.setTimeout(onComplete, 2550);
    return () => {
      window.clearInterval(stepTimer);
      window.clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <div className="boot-screen" aria-label="Loading portfolio">
      <div className="boot-panel">
        <div className="boot-heading"><span className="boot-mark">JMC</span><span>LOCAL PORTFOLIO / STARTUP</span></div>
        <svg className="boot-network" viewBox="0 0 560 210" role="img" aria-label="Animated route connecting profile, work, and toolkit">
          <path className={`network-link ${activeStep > 0 ? 'linked' : ''}`} d="M83 111H230L346 53H477" />
          <path className={`network-link ${activeStep > 1 ? 'linked' : ''}`} d="M230 111L346 168H477" />
          <circle className={`network-node ${activeStep >= 0 ? 'node-active' : ''}`} cx="83" cy="111" r="9" />
          <circle className={`network-node ${activeStep > 0 ? 'node-active' : ''}`} cx="230" cy="111" r="7" />
          <circle className={`network-node ${activeStep > 1 ? 'node-active' : ''}`} cx="346" cy="53" r="7" />
          <circle className={`network-node ${activeStep > 2 ? 'node-active' : ''}`} cx="346" cy="168" r="7" />
          <circle className={`network-node ${activeStep > 2 ? 'node-active' : ''}`} cx="477" cy="53" r="7" />
          <circle className={`network-node ${activeStep > 2 ? 'node-active' : ''}`} cx="477" cy="168" r="7" />
          <text x="52" y="143">START</text><text x="202" y="143">PROFILE</text>
          <text x="319" y="31">WORK</text><text x="319" y="196">TOOLKIT</text>
          <text x="454" y="31">READY</text><text x="453" y="196">READY</text>
        </svg>
        <div className="boot-footer">
          <span role="status" aria-live="polite"><i className="boot-pulse" /> {['Preparing interface', 'Loading profile', 'Opening selected work', 'Ready'][activeStep]}</span>
          <button type="button" onClick={onComplete}>Skip <ArrowDown size={13} /></button>
        </div>
      </div>
    </div>
  );
}
