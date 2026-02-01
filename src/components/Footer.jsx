import React from 'react';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <p>© {new Date().getFullYear()} Company. All rights reserved.</p>
        </div>

        <div style={{display:'flex', gap:16, alignItems:'center'}}>
          <nav className="footer-nav" aria-label="Footer">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </nav>

          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}