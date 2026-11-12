import { educationSection } from '../../content/education';
import { education, experience, certifications } from '../../content/education';
import React from 'react';

/**
 * Education & Experience Section Component
 * ─────────────────────────────────────────
 * Timeline entries for education, work experience and certifications.
 * Edit the arrays below to add your own entries.
 */

/** Renders a single timeline entry with a dot, date badge, title, org and description */
const TimelineItem = ({ date, title, org, desc }) => (
  <li style={{ position: 'relative' }}>
    <span style={{ position: 'absolute', left: '-39px', top: '8px', width: '16px', height: '16px', borderRadius: '50%', background: '#cf3a6a', border: '3px solid #ffffff', boxShadow: '0 0 0 2px #cf3a6a' }}></span>
    <span style={{ display: 'inline-block', padding: '2px 12px', borderRadius: '999px', background: '#e6f4fb', fontSize: '14px', fontWeight: 700, marginBottom: '6px' }}>{date}</span>
    <h4 style={{ margin: 0, fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 500, fontSize: '20px' }}>{title}</h4>
    <p style={{ margin: '0 0 4px 0', fontWeight: 700, color: '#3d6a85' }}>{org}</p>
    <p style={{ margin: 0, fontSize: '17px' }}>{desc}</p>
  </li>
);

export default function EducationExperience() {
  /* ✏️ EDIT THIS — Your education entries */


  /* ✏️ EDIT THIS — Your work experience entries */


  /* ✏️ EDIT THIS — Your certifications */


  return (
    <div id="education" style={{ position: 'relative' }}>
      <div className="sec" style={{ position: 'relative', boxSizing: 'border-box', maxWidth: '1220px', margin: '0 auto', padding: '96px 48px' }}>
        <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
          {/* ✏️ EDIT THIS — Section title and subtitle */}
          <h2 className="h2" style={{ margin: '0 0 12px 0', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 600, fontSize: '40px' }}>{educationSection.title}</h2>
          <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.5, color: '#3d6a85' }}>{educationSection.subtitle}</p>
        </div>
        <div className="g" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
          {/* Education column */}
          <div>
            <h3 style={{ margin: '0 0 24px 0', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 500, fontSize: '26px' }}>Education</h3>
            <ol style={{ listStyle: 'none', margin: 0, padding: '0 0 0 28px', borderLeft: '3px solid #ffffff', display: 'grid', gap: '28px' }}>
              {education.map((e) => (
                <TimelineItem key={e.title} {...e} />
              ))}
            </ol>
          </div>
          {/* Experience column */}
          <div>
            <h3 style={{ margin: '0 0 24px 0', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 500, fontSize: '26px' }}>Experience</h3>
            <ol style={{ listStyle: 'none', margin: 0, padding: '0 0 0 28px', borderLeft: '3px solid #ffffff', display: 'grid', gap: '28px' }}>
              {experience.map((e) => (
                <TimelineItem key={e.title} {...e} />
              ))}
            </ol>
          </div>
        </div>

        {/* Certifications */}
        <h3 style={{ margin: '56px 0 24px 0', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 500, fontSize: '26px' }}>Certifications</h3>
        <div className="g" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {certifications.map((c) => (
            <div key={c.title} style={{ padding: '22px', borderRadius: '16px', background: '#ffffff', border: '2px solid #d3e8f2' }}>
              <h4 style={{ margin: '0 0 6px 0', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 500, fontSize: '19px' }}>{c.title}</h4>
              <p style={{ margin: 0 }}>{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
