'use client';

import React from 'react';

/**
 * Header / Navbar Component
 * ─────────────────────────
 * This is the top navigation bar that sits over the clouds.
 * Edit the nav links and logo below to match your own portfolio.
 */

export default function Header({ menuRef, closeMenu }) {
  return (
    <div style={{ position: 'absolute', left: 0, top: 0, right: 0, height: '240px', zIndex: 3 }}>
      <div style={{ position: 'absolute', left: 0, top: 0, right: 0, height: '240px', filter: 'drop-shadow(0 16px 16px rgba(20,90,140,0.45))' }}>
        <div
          className="hstrip"
          style={{
            position: 'absolute',
            left: 0,
            top: '100px',
            right: 0,
            height: '143px',
            background: 'url(/assets/images/baa61f6494ea9efa8b02e16efa1b0b73.svg) repeat-x left top / 968px 143px',
          }}
        ></div>
        <div
          className="hwhite"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            height: '110px',
            background: '#ffffff',
          }}
        ></div>
      </div>
      <div
        className="hrow"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          height: '150px',
          boxSizing: 'border-box',
          padding: '0 48px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <input type="checkbox" id="mt" className="mt" ref={menuRef} aria-label="Open menu" />
        <label htmlFor="mt" className="burger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </label>

        {/* ✏️ EDIT THIS — Replace with your own logo image */}
        <a className="hlogo" href="#home" style={{ flex: '0 0 auto', display: 'block' }}>
          <img
            src="/assets/images/dcca05493962f89386c5ecf967cbe990.png"
            alt="It's always Day One logo, go to home"
            className="himg"
            style={{ display: 'block', height: '86px', width: 'auto' }}
          />
        </a>

        {/* ✏️ EDIT THIS — Add or remove nav links to match your sections */}
        <nav className="hnav" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4px' }}>
          <a className="navlink" onClick={closeMenu} href="#home">Home</a>
          <a className="navlink" onClick={closeMenu} href="#about">About</a>
          <a className="navlink" onClick={closeMenu} href="#skills">Skills</a>
          <a className="navlink" onClick={closeMenu} href="#projects">Projects</a>
          <a className="navlink" onClick={closeMenu} href="#education">Education</a>
          <a className="navlink" onClick={closeMenu} href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  );
}
