import React from 'react';

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Nos services</h2>
        <div className="service-grid" style={{marginTop:12}}>
          <article className="service">
            <h3>Marketing</h3>
            <p>Campagnes, stratégie, analytics et optimisation de conversion.</p>
          </article>

          <article className="service">
            <h3>Sites web</h3>
            <p>Conception et développement de sites web performants et responsives.</p>
          </article>

          <article className="service">
            <h3>Design graphique</h3>
            <p>Identité visuelle, illustrations et supports marketing.</p>
          </article>

          <article className="service">
            <h3>Vidéos professionnelles</h3>
            <p>Tournage, montage, motion design et production audiovisuelle complète.</p>
          </article>
        </div>
      </div>
    </section>
  );
}