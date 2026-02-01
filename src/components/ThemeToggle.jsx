import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-pressed={theme === 'dark'}
      aria-label="Toggle color theme"
      className="theme-toggle"
      title="Toggle theme"
    >
      <span className="sun">☀️</span>
      <span className="moon">🌙</span>
    </button>
  );
}