import React from 'react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="brand" aria-label="Company home">
          <Logo />
        </a>

        <nav className="main-nav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-controls">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}