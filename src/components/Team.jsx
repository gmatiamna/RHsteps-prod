import React from 'react';

export default function Team() {
  return (
    <section id="team" className="team">
      <div className="container">
        <h2>Team</h2>
        <p>Small cross-functional team of producers, designers, and engineers.</p>
        <div className="team-grid" style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:12, marginTop:12}}>
          <div className="team-member" style={{background:'var(--card)', padding:12, borderRadius:8}}>
            <strong>Alex</strong>
            <div>Producer</div>
          </div>
          <div className="team-member" style={{background:'var(--card)', padding:12, borderRadius:8}}>
            <strong>Mari</strong>
            <div>Designer</div>
          </div>
          <div className="team-member" style={{background:'var(--card)', padding:12, borderRadius:8}}>
            <strong>Sam</strong>
            <div>Engineer</div>
          </div>
        </div>
      </div>
    </section>
  );
}