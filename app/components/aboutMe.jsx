import { aboutSection } from '../../content/about';
import { details, highlights } from '../../content/about';
import React from 'react';

/**
 * About Me Section Component
 * ──────────────────────────
 * Personal information, background and quick-info highlight cards.
 * Each item in the arrays below is editable.
 */

export default function AboutMe() {
  /* ✏️ EDIT THIS — Your personal details as [label, value] pairs */


  /* ✏️ EDIT THIS — Quick-info highlight cards shown on the right */


  return (
    <div id="about" style={{ position: 'relative' }}>
      <div className="sec" style={{ position: 'relative', boxSizing: 'border-box', maxWidth: '1220px', margin: '0 auto', padding: '96px 48px' }}>
        <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
          {/* ✏️ EDIT THIS — Section label and subtitle */}
          <p style={{ margin: '0 0 8px 0', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 600, fontSize: '14px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#a82c54' }}>GET TO KNOW ME</p>
          <h2 className="h2" style={{ margin: '0 0 12px 0', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 600, fontSize: '40px' }}>{aboutSection.title}</h2>
          <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.5, color: '#3d6a85' }}>{aboutSection.subtitle}</p>
        </div>
        <div className="g" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start' }}>
          <div>
            <dl style={{ margin: 0, display: 'grid', gap: '18px' }}>
              {details.map(([label, value]) => (
                <div key={label}>
                  <dt style={{ fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 600, color: '#a82c54' }}>{label}</dt>
                  <dd style={{ margin: 0, fontSize: '18px', maxWidth: '60ch' }}>{value}</dd>
                </div>
              ))}
            </dl>
            <p style={{ margin: '32px 0 0 0' }}>
              <a href="#projects" style={{ display: 'inline-flex', alignItems: 'center', minHeight: '48px', padding: '0 28px', borderRadius: '999px', textDecoration: 'none', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 500, fontSize: '18px', background: '#cf3a6a', color: '#ffffff' }}>See My Projects</a>
            </p>
          </div>
          <div className="g" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '20px' }}>
            {highlights.map(([title, desc]) => (
              <div key={title} style={{ padding: '20px', borderRadius: '16px', background: '#ffffff', border: '2px solid #d3e8f2' }}>
                <h3 style={{ margin: '0 0 6px 0', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 500, fontSize: '18px', color: '#a82c54' }}>{title}</h3>
                <p style={{ margin: 0, fontSize: '17px' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
