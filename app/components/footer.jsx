import React from 'react';

/**
 * Footer Component
 * ────────────────
 * Cloud scallop transition, mascot, logo, social links and copyright.
 * Edit the social links and copyright text below.
 */

export default function Footer() {
  /* ✏️ EDIT THIS — Your social media links.
   *  Each entry = { label, href, pixelIcon, iconColor }
   *  - pixelIcon: id of the SVG symbol defined in page.jsx (#px-star, #px-heart, etc.)
   */
  const socials = [
    { label: 'GitHub', href: '#', pixelIcon: '#px-star', iconColor: '#ffb33d' },
    { label: 'LinkedIn', href: '#', pixelIcon: '#px-heart', iconColor: '#4aa8ff' },
    { label: 'Facebook', href: '#', pixelIcon: '#px-heart', iconColor: '#9b6bd9' },
    { label: 'Instagram', href: '#', pixelIcon: '#px-star', iconColor: '#ff5fb0' },
  ];

  const socialButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    minHeight: '42px',
    padding: '0 20px',
    border: '3px solid transparent',
    borderRadius: '999px',
    background: 'linear-gradient(135deg, #ffffff 0%, #ffe3f1 45%, #dfeaff 100%) padding-box, linear-gradient(90deg, #ff5fb0, #ffb33d, #ffd84d, #5fd3b3, #4aa8ff, #9b6bd9) border-box',
    boxShadow: '0 5px 0 rgba(122,46,87,0.35), 0 8px 14px rgba(255,95,176,0.35)',
    color: '#0f3d5c',
    fontFamily: "'Fredoka', 'Trebuchet MS', sans-serif",
    fontWeight: 500,
    fontSize: '16px',
    textDecoration: 'none',
  };

  return (
    <div
      id="footer"
      style={{
        position: 'relative',
        overflow: 'hidden',
        color: '#0f3d5c',
        background: '#68d2f0 url(/assets/images/2d72006bf90372214a62df811dc74063.jpg) center bottom / cover no-repeat',
      }}
    >
      {/* Cloud scallop transition */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          height: '115px',
          background: 'url(/assets/images/baa61f6494ea9efa8b02e16efa1b0b73.svg) repeat-x left top / 780px 115px',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0, #000 45px)',
          maskImage: 'linear-gradient(to bottom, transparent 0, #000 45px)',
        }}
      ></div>
      <div
        className="fin"
        style={{
          position: 'relative',
          boxSizing: 'border-box',
          padding: '120px 48px 26px 48px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px 32px',
        }}
      >
        <div className="fl" style={{ display: 'flex', alignItems: 'flex-end', gap: '18px' }}>
          <div style={{ position: 'relative', width: '116px', height: '150px', flex: 'none' }}>
            <svg width="150" height="159" viewBox="0 0 340 360" aria-hidden="true" style={{ position: 'absolute', left: '-26px', bottom: 0, display: 'block' }}>
              <defs>
                <linearGradient id="ft1" gradientUnits="userSpaceOnUse" x1="0" y1="360" x2="220" y2="190">
                  <stop offset="0" stopColor="#ffb3d0" stopOpacity="0"></stop>
                  <stop offset="1" stopColor="#ff9fcf" stopOpacity="0.9"></stop>
                </linearGradient>
              </defs>
              <polygon points="0,360 90,360 250,200 150,150" fill="url(#ft1)"></polygon>
              <use href="#px-plus" x="40" y="300" width="16" height="16" fill="#ffffff"></use>
              <use href="#px-plus" x="90" y="250" width="12" height="12" fill="#ffffff"></use>
              <use href="#px-plus" x="130" y="210" width="16" height="16" fill="#ffffff"></use>
              <use href="#px-plus" x="20" y="220" width="12" height="12" fill="#ffffff"></use>
              <use href="#px-plus" x="70" y="330" width="12" height="12" fill="#ffffff"></use>
              <use href="#px-plus" x="180" y="170" width="14" height="14" fill="#ffffff"></use>
            </svg>
            {/* ✏️ EDIT THIS — Replace with your own mascot/avatar image */}
            <img
              src="/assets/images/808f12872841f94ccc994cca0457c9bd.png"
              alt="Hanni the bunny mascot"
              style={{
                position: 'relative',
                height: '150px',
                width: 'auto',
                display: 'block',
                filter: 'drop-shadow(5px 8px 4px rgba(35,70,125,0.4))',
              }}
            />
          </div>
          {/* ✏️ EDIT THIS — Replace with your own logo image */}
          <img
            src="/assets/images/dcca05493962f89386c5ecf967cbe990.png"
            alt="It's always Day One logo"
            style={{ height: '66px', width: 'auto', display: 'block', marginBottom: '14px' }}
          />
        </div>
        <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} style={socialButtonStyle}>
                <svg width="16" height="16" aria-hidden="true">
                  <use href={s.pixelIcon} width="16" height="14" fill={s.iconColor}></use>
                </svg>
                {s.label}
              </a>
            ))}
          </div>
          {/* ✏️ EDIT THIS — Your copyright text */}
          <p
            style={{
              margin: 0,
              padding: '6px 18px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.72)',
              border: '2px solid #ffffff',
              boxShadow: '0 3px 0 rgba(122,46,87,0.25)',
              fontSize: '15px',
            }}
          >
            © 2026 Hanni Bunny. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
