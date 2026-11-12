import { projectsSection } from '../../content/projects';
import { projects } from '../../content/projects';
import React from 'react';

/**
 * Featured Projects Section Component
 * ────────────────────────────────────
 * Each project is an object in the `projects` array.
 * Edit the array below to add your own projects.
 */

// Accept full links or domains typed without https://; ignore empty or invalid links.
function externalUrl(value) {
  if (typeof value !== 'string') return '';
  const input = value.trim();
  if (!input || input.startsWith('#') || input.startsWith('/') || /\s/.test(input)) return '';
  if (/^[a-z][a-z\d+.-]*:/i.test(input) && !/^https?:\/\//i.test(input)) return '';
  try {
    const url = new URL(/^https?:\/\//i.test(input) ? input : `https://${input}`);
    return ['http:', 'https:'].includes(url.protocol) && url.hostname.includes('.') ? url.href : '';
  } catch {
    return '';
  }
}

export default function Projects() {
  /* ✏️ EDIT THIS — Add, remove or modify your projects here.
   *  Each project = { category, title, description, tags[], color, icon, projectUrl }
   *  - color: blue, pink, or green
   *  - icon: star, heart, or plus
   */


  return (
    <div id="projects" style={{ position: 'relative' }}>
      <div className="sec" style={{ position: 'relative', boxSizing: 'border-box', maxWidth: '1220px', margin: '0 auto', padding: '96px 48px' }}>
        <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
          {/* ✏️ EDIT THIS — Section title and subtitle */}
          <h2 className="h2" style={{ margin: '0 0 12px 0', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 600, fontSize: '40px' }}>{projectsSection.title}</h2>
          <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.5, color: '#3d6a85' }}>{projectsSection.subtitle}</p>
        </div>
        <div className="g" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {projects.map((p) => (
            <div key={p.title} style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: '24px', background: '#ffffff', boxShadow: '0 8px 24px rgba(20,90,140,0.14)' }}>
              <div style={{ height: '180px', background: ({ blue: 'linear-gradient(135deg, #b9e6f6, #e3d2f8)', pink: 'linear-gradient(135deg, #ffd0e4, #ffe9c8)', green: 'linear-gradient(135deg, #cdeedd, #c7e4ff)' })[p.color] || '#b9e6f6', display: 'grid', placeItems: 'center' }}>
                <svg width="84" height="84" viewBox="0 0 8 8" aria-hidden="true" style={{ filter: 'drop-shadow(5px 6px 0 rgba(122,46,87,0.35))' }}><use href={`#px-${['star', 'heart', 'plus'].includes(p.icon) ? p.icon : 'star'}`} width="8" height="8" fill="#ffffff"></use></svg>
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#a82c54' }}>{p.category}</p>
                <h3 style={{ margin: 0, fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 500, fontSize: '22px' }}>{p.title}</h3>
                <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.5 }}>{p.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {p.tags.map((tag) => (
                    <span key={tag} style={{ padding: '2px 12px', borderRadius: '999px', background: '#e6f4fb', fontSize: '14px', fontWeight: 700 }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: 'auto' }}>
                  {/* Project URLs are configured in content/projects.js. */}
                  {externalUrl(p.projectUrl) && <a href={externalUrl(p.projectUrl)} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', padding: '0 20px', borderRadius: '999px', textDecoration: 'none', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 500, fontSize: '16px', background: '#0f3d5c', color: '#ffffff' }}>View Project</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
