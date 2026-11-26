import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'certs', label: 'Certs' },
  { id: 'skills', label: 'Stack' },
  { id: 'now', label: 'Now' },
  { id: 'experiments', label: 'Lab notes' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ theme, setTheme, ThemeToggle }) {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Jun Miguel Corbilla, home">
          <span className="brand-mark" aria-hidden="true">JMC</span>
          <span className="brand-name">Jun Miguel Corbilla</span>
        </a>
        <div className="nav-links">
          {links.map((link) => <a key={link.id} href={`#${link.id}`}>{link.label}</a>)}
        </div>
        <div className="nav-actions">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && <div className="nav-menu">{links.map((link) => <a key={link.id} href={`#${link.id}`} onClick={closeMenu}>{link.label}</a>)}</div>}
    </nav>
  );
}
