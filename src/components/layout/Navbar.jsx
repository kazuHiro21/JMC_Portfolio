import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'certs', label: 'Certs' },
  { id: 'skills', label: 'Stack' },
  { id: 'now', label: 'Now' },
  { id: 'experiments', label: 'Experiments' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="font-mono text-sm font-bold tracking-tighter text-indigo-400">JMC</span>
            <span className="hidden sm:block text-sm font-semibold">Corbilla</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-slate-400 hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <button
              className="md:hidden p-2 rounded-none border border-slate-700 hover:bg-slate-800 text-slate-300"
              onClick={() => setOpen(!open)}
              aria-label="Open menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-4 border-t border-slate-800/50 pt-4 space-y-2">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded-none transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
