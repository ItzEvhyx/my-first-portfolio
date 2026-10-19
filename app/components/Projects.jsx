import React from 'react';

/**
 * Featured Projects Section Component
 * ────────────────────────────────────
 * Each project is an object in the `projects` array.
 * Edit the array below to add your own projects.
 */

export default function Projects() {
  /* ✏️ EDIT THIS — Add, remove or modify your projects here.
   *  Each project = { category, title, description, tags[], gradient, pixelIcon, projectUrl, demoUrl }
   *  - gradient: CSS gradient for the card header
   *  - pixelIcon: href id of the pixel art SVG symbol (defined in page.jsx)
   */
  const projects = [
    {
      category: 'Web / UI/UX',
      title: 'CloudNest Onboarding',
      description: 'Redesigned the first-run experience of a cloud learning platform, cutting setup steps from nine to four.',
      tags: ['Figma', 'Prototype', 'Usability'],
      gradient: 'linear-gradient(135deg, #b9e6f6, #e3d2f8)',
      pixelIcon: '#px-star',
      projectUrl: '#',
      demoUrl: '#',
    },
    {
      category: 'Mobile / UI',
      title: 'Carrot Tracker',
      description: 'A gentle habit app that rewards small daily wins with a growing carrot garden.',
      tags: ['Mobile', 'Illustration', 'Motion'],
      gradient: 'linear-gradient(135deg, #ffd0e4, #ffe9c8)',
      pixelIcon: '#px-heart',
      projectUrl: '#',
      demoUrl: '#',
    },
    {
      category: 'Design system',
      title: 'StarHop Design System',
      description: 'A shared library of 60 components and tokens that keeps three product teams on the same page.',
      tags: ['Tokens', 'Accessibility', 'Docs'],
      gradient: 'linear-gradient(135deg, #cdeedd, #c7e4ff)',
      pixelIcon: '#px-plus',
      projectUrl: '#',
      demoUrl: '#',
    },
  ];

  return (
    <div id="projects" style={{ position: 'relative' }}>
      <div className="sec" style={{ position: 'relative', boxSizing: 'border-box', maxWidth: '1220px', margin: '0 auto', padding: '96px 48px' }}>
        <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
          {/* ✏️ EDIT THIS — Section title and subtitle */}
          <h2 className="h2" style={{ margin: '0 0 12px 0', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 600, fontSize: '40px' }}>Featured Projects</h2>
          <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.5, color: '#3d6a85' }}>A few stories from my sketchbook.</p>
        </div>
        <div className="g" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {projects.map((p) => (
            <div key={p.title} style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: '24px', background: '#ffffff', boxShadow: '0 8px 24px rgba(20,90,140,0.14)' }}>
              <div style={{ height: '180px', background: p.gradient, display: 'grid', placeItems: 'center' }}>
                <svg width="84" height="84" viewBox="0 0 8 8" aria-hidden="true" style={{ filter: 'drop-shadow(5px 6px 0 rgba(122,46,87,0.35))' }}><use href={p.pixelIcon} width="8" height="8" fill="#ffffff"></use></svg>
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
                  {/* ✏️ EDIT THIS — Replace '#' with your actual project and demo URLs */}
                  <a href={p.projectUrl} style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', padding: '0 20px', borderRadius: '999px', textDecoration: 'none', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 500, fontSize: '16px', background: '#0f3d5c', color: '#ffffff' }}>View Project</a>
                  <a href={p.demoUrl} style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', padding: '0 20px', borderRadius: '999px', textDecoration: 'none', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 500, fontSize: '16px', background: '#ffffff', color: '#0f3d5c', boxShadow: 'inset 0 0 0 2px #0f3d5c' }}>Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
