import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Header />

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <h1>We make striking marketing, multimedia and web experiences</h1>
              <p className="lead">Brand-first creative and dev services — websites, video, streaming, and performance marketing.</p>
              <div className="hero-cta">
                <a className="btn primary" href="#contact">Start a Project</a>
                <a className="btn ghost" href="#services">View Services</a>
              </div>
            </div>

            <div className="hero-media" aria-hidden="false">
              <div className="media-card">
                <img src="./assets/hero-thumb.jpg" alt="Example multimedia" />
              </div>
            </div>
          </div>
        </section>

        <About />
        <Services />
        <section id="work" className="work">
          <div className="container">
            <h2>Selected work</h2>
            <div className="gallery">
              <figure><img src="./assets/work1.jpg" alt="Project 1" /></figure>
              <figure><img src="./assets/work2.jpg" alt="Project 2" /></figure>
              <figure><img src="./assets/work3.jpg" alt="Project 3" /></figure>
            </div>
          </div>
        </section>
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}