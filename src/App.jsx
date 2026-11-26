import { useCallback, useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import BootSequence from './components/layout/BootSequence';
import ThemeToggle from './components/layout/ThemeToggle';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Journey from './components/sections/Journey';
import Projects from './components/sections/Projects';
import Certs from './components/sections/Certs';
import Skills from './components/sections/Skills';
import Now from './components/sections/Now';
import Experiments from './components/sections/Experiments';
import Contact from './components/sections/Contact';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [booted, setBooted] = useState(() => sessionStorage.getItem('portfolio-booted') === 'true');
  const finishBoot = useCallback(() => {
    sessionStorage.setItem('portfolio-booted', 'true');
    setBooted(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={`site-shell${booted ? ' is-booted' : ''}`}>
      {!booted && <BootSequence onComplete={finishBoot} />}
      <Navbar theme={theme} setTheme={setTheme} ThemeToggle={ThemeToggle} />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Certs />
        <Skills />
        <Now />
        <Experiments />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>Jun Miguel A. Corbilla · {new Date().getFullYear()}</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}
