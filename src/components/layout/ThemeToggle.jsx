import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, setTheme }) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  return (
    <button className="icon-button" onClick={() => setTheme(nextTheme)} aria-label={`Switch to ${nextTheme} mode`} title={`Switch to ${nextTheme} mode`}>
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
