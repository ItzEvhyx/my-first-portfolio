import React from 'react';

/**
 * Intro / Hero Section Component
 * ───────────────────────────────
 * The hero card with your name, role, tagline, bio, tags and CTA buttons,
 * plus the bunny mascot image on the right.
 */

export default function Intro() {
  return (
    <div
      className="hero"
      style={{
        position: 'relative',
        minHeight: '900px',
        overflow: 'hidden',
        background: '#68d2f0',
      }}
    >
      {/* ✏️ EDIT THIS — Replace with your own hero background image */}
      <img
        src="/assets/images/2d72006bf90372214a62df811dc74063.jpg"
        alt=""
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center bottom',
          display: 'block',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '140px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.5))',
        }}
      ></div>

      <div
        className="hc"
        style={{
          position: 'relative',
          zIndex: 3,
          boxSizing: 'border-box',
          maxWidth: '1220px',
          margin: '0 auto',
          padding: '290px 48px 60px 48px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '32px',
        }}
      >
        {/* Hero Card */}
        <div className="hcard" style={{ flex: '1 1 380px', maxWidth: '600px', boxSizing: 'border-box', padding: '36px', borderRadius: '32px', background: 'rgba(255,255,255,0.9)', border: '3px solid #7a2e57', boxShadow: '8px 10px 0 rgba(122,46,87,0.35)' }}>
          {/* ✏️ EDIT THIS — Your greeting text */}
          <p style={{ margin: '0 0 8px 0', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 600, fontSize: '14px', letterSpacing: '0.14em', color: '#a82c54' }}>HELLO, I&apos;M</p>

          {/* ✏️ EDIT THIS — Your full name */}
          <h1 style={{ margin: '0 0 12px 0', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 600, fontSize: 'clamp(36px, 5vw, 58px)', lineHeight: 1.05 }}>Hanni Bunny</h1>

          {/* ✏️ EDIT THIS — Your job title / role */}
          <p style={{ margin: '0 0 16px 0', display: 'inline-block', padding: '6px 18px', borderRadius: '999px', background: '#cf3a6a', color: '#ffffff', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 500, fontSize: '20px' }}>UI/UX Designer</p>

          {/* ✏️ EDIT THIS — Your one-line tagline */}
          <p style={{ margin: '0 0 8px 0', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 500, fontSize: '22px' }}>I design interfaces that feel like day one, every day.</p>

          {/* ✏️ EDIT THIS — Your short bio paragraph */}
          <p style={{ margin: '0 0 20px 0', fontSize: '18px', lineHeight: 1.5 }}>Five years of turning confusing screens into cozy, accessible experiences, with a soft spot for pixel art, playful motion and design systems that people actually enjoy using.</p>

          {/* ✏️ EDIT THIS — Your quick-info tags (location, availability, skills) */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
            <span style={{ padding: '4px 14px', borderRadius: '999px', background: '#ffe3ee', border: '2px solid #7a2e57', fontSize: '15px', fontWeight: 700 }}>Based in Cloud City</span>
            <span style={{ padding: '4px 14px', borderRadius: '999px', background: '#ffe3ee', border: '2px solid #7a2e57', fontSize: '15px', fontWeight: 700 }}>Open to freelance</span>
            <span style={{ padding: '4px 14px', borderRadius: '999px', background: '#ffe3ee', border: '2px solid #7a2e57', fontSize: '15px', fontWeight: 700 }}>Figma · Prototyping · Research</span>
          </div>

          {/* ✏️ EDIT THIS — CTA button labels and links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            <a href="#projects" style={{ display: 'inline-flex', alignItems: 'center', minHeight: '48px', padding: '0 28px', borderRadius: '999px', textDecoration: 'none', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 500, fontSize: '18px', background: '#cf3a6a', color: '#ffffff' }}>View My Projects</a>
            <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', minHeight: '48px', padding: '0 28px', borderRadius: '999px', textDecoration: 'none', fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif", fontWeight: 500, fontSize: '18px', background: '#ffffff', color: '#0f3d5c', boxShadow: 'inset 0 0 0 2px #0f3d5c' }}>Contact Me</a>
          </div>
        </div>

        {/* ✏️ EDIT THIS — Replace with your own mascot/avatar image */}
        <img src="/assets/images/808f12872841f94ccc994cca0457c9bd.png" alt="Hanni the bunny mascot waving a hello" className="hbun" style={{ flex: '0 1 auto', width: 'min(100%, 400px)', height: 'auto', display: 'block', filter: 'drop-shadow(10px 16px 8px rgba(35,70,125,0.4))' }} />
      </div>
    </div>
  );
}
