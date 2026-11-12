import { skillsSection } from '../../content/skills';
import { categories } from '../../content/skills';
import { skillIcons } from './skillIcons';
import React from 'react';

/**
 * Skills & Technologies Section Component
 * ────────────────────────────────────────
 * Organised into categories. Each category has a title and an array of skills.
 * Add, remove or reorder items in the arrays below to customise.
 */

/* ──────────────────────────────────────────────────────────────────────────────
 * Reusable icon components used in skill cards.
 * You can swap these for any SVG icons you prefer.
 * ────────────────────────────────────────────────────────────────────────────── */
/** Shared wrapper for a 24×24 Lucide-style icon */
const Icon = ({ children }) => (
  <span style={{ display: 'grid', placeItems: 'center', width: '48px', height: '48px', borderRadius: '14px', background: '#e6f4fb', flex: 'none' }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f3d5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
  </span>
);

/** A single skill card */
const SkillCard = ({ name, desc, icon }) => {
  const IconShape = skillIcons[icon] || skillIcons.tools;
  return (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px', borderRadius: '16px', background: '#ffffff', border: '2px solid #d3e8f2' }}>
    <Icon><IconShape /></Icon>
    <div>
      <h4 style={{ margin: '0 0 4px 0', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 500, fontSize: '19px' }}>{name}</h4>
      <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.45, color: '#3d6a85' }}>{desc}</p>
    </div>
  </div>
  );
};

export default function Skills() {
  /* ✏️ EDIT THIS — Define your skill categories and individual skills here.
   *  Each category = { title: string, skills: [{ name, desc, icon }] }
   *  The `icon` is a React element rendered inside a 24×24 SVG.
   */


  const warnings = [];
  if (categories.length > 4) warnings.push('Use up to 4 skill categories for the best layout.');
  categories.forEach((category) => {
    if (category.skills.length > 6) warnings.push(`${category.title}: use up to 6 skills for the best layout.`);
    category.skills.forEach((skill) => {
      if (!skillIcons[skill.icon]) warnings.push(`${skill.name}: icon "${skill.icon}" is not available; using tools instead.`);
      if (skill.desc.length > 100) warnings.push(`${skill.name}: keep the description under 100 characters for the best layout.`);
    });
  });
  return (
    <div id="skills" style={{ position: 'relative' }}>
      <div className="sec" style={{ position: 'relative', boxSizing: 'border-box', maxWidth: '1220px', margin: '0 auto', padding: '96px 48px' }}>
        <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
          {/* ✏️ EDIT THIS — Section title and subtitle */}
          <h2 className="h2" style={{ margin: '0 0 12px 0', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 600, fontSize: '40px' }}>{skillsSection.title}</h2>
          <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.5, color: '#3d6a85' }}>{skillsSection.subtitle}</p>
        </div>
        {process.env.NODE_ENV !== 'production' && warnings.length > 0 && (
          <div role="status" style={{ padding: '16px', marginBottom: '24px', background: '#fff4d4', borderRadius: '12px' }}>
            <strong>Content tips (visible only while developing):</strong>
            <ul>{warnings.map((warning, index) => <li key={index}>{warning}</li>)}</ul>
          </div>
        )}
        {categories.map((cat) => (
          <div key={cat.title} style={{ marginBottom: '40px' }}>
            <h3 style={{ margin: '0 0 16px 0', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 500, fontSize: '24px' }}>{cat.title}</h3>
            <div className="g" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
              {cat.skills.map((s) => (
                <SkillCard key={s.name} name={s.name} desc={s.desc} icon={s.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
