import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import ThemeToggle from './components/layout/ThemeToggle';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Certs from './components/sections/Certs';
import Skills from './components/sections/Skills';
import Now from './components/sections/Now';
import Experiments from './components/sections/Experiments';
import Contact from './components/sections/Contact';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen" data-theme={theme}>
      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <Hero />
        <About />
        <Projects />
        <Certs />
        <Skills />
        <Now />
        <Experiments />
        <Contact />
      </main>

      <footer className="border-t border-slate-800/50 bg-slate-950/80 backdrop-blur py-8 text-center text-slate-500 text-sm">
        {theme === 'light' ? <span className="bg-slate-900 text-slate-100 px-2 py-0.5 rounded">light mode</span> : null}
        <p>Jun Miguel A. Corbilla · 2024</p>
      </footer>
    </div>
  );
}
