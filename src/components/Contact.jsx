import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>

        <div className="contact-card" style={{maxWidth:720, marginTop:12}}>
          <p style={{margin:0, fontWeight:600}}>Production Audiovisuel</p>
          <ul style={{marginTop:8, marginBottom:12, paddingLeft:18}}>
            <li>📣 Marketing</li>
            <li>🖥️ Sites web</li>
            <li>🎨 Design graphiques</li>
            <li>🎞️ Vidéos professionnelles</li>
          </ul>

          <p style={{margin:6}}>
            <strong>Email:</strong>{' '}
            <a href="mailto:rhsteps.production@gmail.com">rhsteps.production@gmail.com</a>
          </p>

          <p style={{margin:6}}>
            <strong>Téléphone:</strong> 26.920.940
          </p>

          <div style={{marginTop:14}}>
            <a className="btn primary" href="mailto:rhsteps.production@gmail.com">Envoyer un message</a>
            <a className="btn ghost" href="#services" style={{marginLeft:10}}>Nos services</a>
          </div>
        </div>
      </div>
    </section>
  );
}