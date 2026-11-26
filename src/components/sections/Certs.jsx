import { useRef, useState } from 'react';
import { ArrowUpRight, Expand } from 'lucide-react';
import { certs } from '../../data/certs';
import ScrollReveal from '../ui/ScrollReveal';

export default function Certs() {
  const dialogRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certs" className="section">
      <div className="section-inner">
        <div className="section-head"><span className="section-kicker">04 / Credential</span><h2>Learning in practice.</h2></div>
        <ScrollReveal>
          {certs.map((cert) => <article className="cert-feature" key={cert.id}>
            <div className="cert-copy">
              <span className="meta-label">Completed · {cert.date}</span>
              <h3>{cert.name}</h3>
              <p>{cert.issuer}</p>
              <a className="text-link" href={cert.credentialUrl} target="_blank" rel="noreferrer">View credential record <ArrowUpRight size={14} /></a>
            </div>
            <button className="cert-preview" type="button" onClick={() => { setSelectedCert(cert); dialogRef.current?.showModal(); }} aria-label={`View full ${cert.name} certificate`}>
              <img src={cert.image} alt="" loading="lazy" />
              <span>Open certificate <Expand size={14} /></span>
            </button>
          </article>)}
        </ScrollReveal>
      </div>
      <dialog className="cert-dialog" ref={dialogRef} aria-labelledby="cert-dialog-title" onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current.close(); }}>
        {selectedCert && <><div className="cert-dialog-head"><span id="cert-dialog-title">{selectedCert.name}</span><button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close certificate preview">Close ×</button></div>
        <img src={selectedCert.image} alt={`${selectedCert.name} certificate issued by ${selectedCert.issuer}`} /></>}
      </dialog>
    </section>
  );
}
