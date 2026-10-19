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
const PenIcon = () => (
  <><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path></>
);
const LayoutIcon = () => (
  <><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></>
);
const SearchIcon = () => (
  <><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></>
);
const CodeIcon = () => (
  <><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></>
);
const CloudIcon = () => (
  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
);
const GitIcon = () => (
  <><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></>
);
const WrenchIcon = () => (
  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
);

/** Shared wrapper for a 24×24 Lucide-style icon */
const Icon = ({ children }) => (
  <span style={{ display: 'grid', placeItems: 'center', width: '48px', height: '48px', borderRadius: '14px', background: '#e6f4fb', flex: 'none' }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f3d5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
  </span>
);

/** A single skill card */
const SkillCard = ({ name, desc, icon }) => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '20px', borderRadius: '16px', background: '#ffffff', border: '2px solid #d3e8f2' }}>
    <Icon>{icon}</Icon>
    <div>
      <h4 style={{ margin: '0 0 4px 0', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 500, fontSize: '19px' }}>{name}</h4>
      <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.45, color: '#3d6a85' }}>{desc}</p>
    </div>
  </div>
);

export default function Skills() {
  /* ✏️ EDIT THIS — Define your skill categories and individual skills here.
   *  Each category = { title: string, skills: [{ name, desc, icon }] }
   *  The `icon` is a React element rendered inside a 24×24 SVG.
   */
  const categories = [
    {
      title: 'Design',
      skills: [
        { name: 'Figma', desc: 'Components, auto layout and design tokens.', icon: <PenIcon /> },
        { name: 'Prototyping', desc: 'Clickable flows and micro-interactions.', icon: <LayoutIcon /> },
        { name: 'Wireframing', desc: 'Low-fi sketches to high-fi screens.', icon: <LayoutIcon /> },
      ],
    },
    {
      title: 'Research',
      skills: [
        { name: 'User interviews', desc: 'Finding the real problem before drawing.', icon: <SearchIcon /> },
        { name: 'Usability testing', desc: 'Quick rounds with five users.', icon: <SearchIcon /> },
      ],
    },
    {
      title: 'Front-end and Cloud',
      skills: [
        { name: 'HTML and CSS', desc: 'Turning designs into working pages.', icon: <CodeIcon /> },
        { name: 'JavaScript basics', desc: 'Small interactions and form checks.', icon: <CodeIcon /> },
        { name: 'AWS fundamentals', desc: 'Learning cloud basics in the club.', icon: <CloudIcon /> },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git and GitHub', desc: 'Version control and handoff.', icon: <GitIcon /> },
        { name: 'Notion', desc: 'Roadmaps, notes and design docs.', icon: <WrenchIcon /> },
      ],
    },
  ];

  return (
    <div id="skills" style={{ position: 'relative' }}>
      <div className="sec" style={{ position: 'relative', boxSizing: 'border-box', maxWidth: '1220px', margin: '0 auto', padding: '96px 48px' }}>
        <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
          {/* ✏️ EDIT THIS — Section title and subtitle */}
          <h2 className="h2" style={{ margin: '0 0 12px 0', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 600, fontSize: '40px' }}>Skills &amp; Technologies</h2>
          <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.5, color: '#3d6a85' }}>The tools and methods I use to design and test ideas.</p>
        </div>
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
