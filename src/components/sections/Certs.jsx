import { certs } from '../../data/certs';
import { Award, FileText } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import { Card } from '../ui/Card';

export default function Certs() {
  return (
    <section id="certs" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end gap-4 mb-12 border-b border-slate-800/50 pb-4">
          <span className="text-indigo-500 font-mono text-xs uppercase tracking-widest">credentials</span>
          <h2 className="text-3xl font-bold">Certificates</h2>
        </div>

        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {certs.map((cert) => (
              <Card key={cert.id} className="text-center">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={`${cert.name} certificate`}
                    className="w-full h-auto mb-4 border border-slate-800"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-16 h-16 mx-auto mb-4 bg-indigo-500/10 border border-indigo-500/30 rounded-none flex items-center justify-center">
                    <Award className="w-8 h-8 text-indigo-400" />
                  </div>
                )}
                <h3 className="text-lg font-bold text-slate-100 mb-1">{cert.name}</h3>
                <p className="text-sm text-slate-500 mb-2">{cert.issuer}</p>
                <p className="text-xs text-slate-600 font-mono mb-4">{cert.date}</p>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  View Credential <FileText className="w-4 h-4" />
                </a>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
