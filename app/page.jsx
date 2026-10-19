'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from './components/header';
import Intro from './components/intro';
import AboutMe from './components/aboutMe';
import Skills from './components/skills';
import Projects from './components/projects';
import EducationExperience from './components/educationExperience';
import Contact from './components/contact';
import Footer from './components/footer';

/**
 * PortfolioPage — Main page component
 * ─────────────────────────────────────
 * This file composes all section components together and handles
 * the interactive bunny cursor effect + SVG pixel-art symbol definitions.
 *
 * Each section lives in its own file under app/components/.
 * You should NOT need to edit this file to customise your portfolio content.
 * Instead, edit the individual component files:
 *   - Header.jsx   → Logo, nav links
 *   - Intro.jsx    → Hero card (name, role, bio, tags, CTA)
 *   - AboutMe.jsx  → Personal details and highlight cards
 *   - Skills.jsx   → Skill categories and items
 *   - Projects.jsx → Featured project cards
 *   - EducationExperience.jsx → Timeline + certifications
 *   - Contact.jsx  → Contact info and form
 *   - Footer.jsx   → Social links, logo, copyright
 */

export default function PortfolioPage() {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);
  const headRef = useRef(null);
  const menuRef = useRef(null);
  const [bunnyOn, setBunnyOn] = useState('on');

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.checked = false;
  };

  useEffect(() => {
    const root = rootRef.current;
    const cv = canvasRef.current;
    const head = headRef.current;
    if (!root || !cv || !head) return;

    let pts = [];
    let sp = [];
    let rot = 0;
    let acc = 0;
    let last = null;
    let px = 0;
    let py = 0;
    let raf = null;

    const place = () => {
      head.style.transform = 'translate(' + (px - 19) + 'px,' + (py - 18) + 'px) rotate(' + rot + 'deg)';
    };

    const frame = () => {
      if (!cv || !root) return;
      const w = root.offsetWidth;
      const h = root.offsetHeight;
      if (cv.width !== w || cv.height !== h) {
        cv.width = w;
        cv.height = h;
      }
      const ctx = cv.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      const now = performance.now();
      const life = 650;
      pts = pts.filter((p) => now - p.t < life);
      sp = sp.filter((s) => now - s.t < s.life);
      rot *= 0.9;
      if (px !== undefined) place();
      const cols = ['#ff4d6d', '#ff9e3d', '#ffe14d', '#4fd47c', '#4db8ff', '#a47bff'];
      ctx.lineCap = 'round';
      const P = pts;
      for (let i = 1; i < P.length; i++) {
        const a = P[i - 1];
        const b = P[i];
        const s = 1 - (now - b.t) / life;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len;
        const ny = dx / len;
        const bw = 1.2 + 2.6 * s;
        for (let k = 0; k < 6; k++) {
          const o = (k - 2.5) * bw;
          ctx.strokeStyle = cols[k];
          ctx.globalAlpha = Math.max(0, s) * 0.95;
          ctx.lineWidth = bw + 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x + nx * o, a.y + ny * o);
          ctx.lineTo(b.x + nx * o, b.y + ny * o);
          ctx.stroke();
        }
      }
      ctx.shadowColor = 'rgba(60,150,230,0.85)';
      ctx.shadowBlur = 8;
      ctx.fillStyle = '#ffffff';
      for (const s of sp) {
        const age = (now - s.t) / s.life;
        const z = s.s * (1 - age);
        const cx = s.x + s.vx * (now - s.t) * 0.05;
        const cy = s.y + s.vy * (now - s.t) * 0.05;
        ctx.globalAlpha = 1 - age;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(s.a + age * 2);
        ctx.beginPath();
        ctx.moveTo(0, -z);
        ctx.quadraticCurveTo(z * 0.15, -z * 0.15, z, 0);
        ctx.quadraticCurveTo(z * 0.15, z * 0.15, 0, z);
        ctx.quadraticCurveTo(-z * 0.15, z * 0.15, -z, 0);
        ctx.quadraticCurveTo(-z * 0.15, -z * 0.15, 0, -z);
        ctx.fill();
        ctx.restore();
      }
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    };

    const tick = () => {
      raf = null;
      frame();
      if (pts.length || sp.length || Math.abs(rot) > 0.2) {
        raf = requestAnimationFrame(tick);
      }
    };

    const ensureLoop = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const handleMouseMove = (e) => {
      const r = root.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const now = performance.now();
      if (last) {
        const dx = x - last.x;
        const dy = y - last.y;
        const d = Math.hypot(dx, dy);
        if (d > 1.5) {
          pts.push({ x, y, t: now });
          rot += (Math.max(-18, Math.min(18, dx * 0.6)) - rot) * 0.3;
          acc += d;
          while (acc > 16) {
            acc -= 16;
            sp.push({
              x: x + (Math.random() - 0.5) * 26,
              y: y + (Math.random() - 0.5) * 26,
              vx: (Math.random() - 0.5) * 0.4,
              vy: 0.2 + Math.random() * 0.5,
              t: now,
              life: 600 + Math.random() * 400,
              s: 5 + Math.random() * 8,
              a: Math.random() * 3,
            });
          }
        }
      } else {
        pts.push({ x, y, t: now });
      }
      last = { x, y };
      px = x;
      py = y;
      head.style.opacity = '1';
      place();
      ensureLoop();
    };

    const handleMouseLeave = () => {
      head.style.opacity = '0';
      last = null;
    };

    root.addEventListener('mousemove', handleMouseMove);
    root.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      root.removeEventListener('mousemove', handleMouseMove);
      root.removeEventListener('mouseleave', handleMouseLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      id="home"
      data-bunny={bunnyOn}
      ref={rootRef}
      style={{
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box',
        background: '#f4fafd',
        fontFamily: "'Nunito', 'Trebuchet MS', sans-serif",
        color: '#0f3d5c',
        overflowX: 'hidden',
      }}
    >
      {/* SVG Pixel Definitions (used by Projects, Footer and cursor) */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <symbol id="px-heart" viewBox="0 0 8 7" shapeRendering="crispEdges">
            <rect x="1" y="0" width="1" height="1"></rect>
            <rect x="2" y="0" width="1" height="1"></rect>
            <rect x="5" y="0" width="1" height="1"></rect>
            <rect x="6" y="0" width="1" height="1"></rect>
            <rect x="0" y="1" width="1" height="1"></rect>
            <rect x="1" y="1" width="1" height="1"></rect>
            <rect x="2" y="1" width="1" height="1"></rect>
            <rect x="3" y="1" width="1" height="1"></rect>
            <rect x="4" y="1" width="1" height="1"></rect>
            <rect x="5" y="1" width="1" height="1"></rect>
            <rect x="6" y="1" width="1" height="1"></rect>
            <rect x="7" y="1" width="1" height="1"></rect>
            <rect x="0" y="2" width="1" height="1"></rect>
            <rect x="1" y="2" width="1" height="1"></rect>
            <rect x="2" y="2" width="1" height="1"></rect>
            <rect x="3" y="2" width="1" height="1"></rect>
            <rect x="4" y="2" width="1" height="1"></rect>
            <rect x="5" y="2" width="1" height="1"></rect>
            <rect x="6" y="2" width="1" height="1"></rect>
            <rect x="7" y="2" width="1" height="1"></rect>
            <rect x="0" y="3" width="1" height="1"></rect>
            <rect x="1" y="3" width="1" height="1"></rect>
            <rect x="2" y="3" width="1" height="1"></rect>
            <rect x="3" y="3" width="1" height="1"></rect>
            <rect x="4" y="3" width="1" height="1"></rect>
            <rect x="5" y="3" width="1" height="1"></rect>
            <rect x="6" y="3" width="1" height="1"></rect>
            <rect x="7" y="3" width="1" height="1"></rect>
            <rect x="1" y="4" width="1" height="1"></rect>
            <rect x="2" y="4" width="1" height="1"></rect>
            <rect x="3" y="4" width="1" height="1"></rect>
            <rect x="4" y="4" width="1" height="1"></rect>
            <rect x="5" y="4" width="1" height="1"></rect>
            <rect x="6" y="4" width="1" height="1"></rect>
            <rect x="2" y="5" width="1" height="1"></rect>
            <rect x="3" y="5" width="1" height="1"></rect>
            <rect x="4" y="5" width="1" height="1"></rect>
            <rect x="5" y="5" width="1" height="1"></rect>
            <rect x="3" y="6" width="1" height="1"></rect>
            <rect x="4" y="6" width="1" height="1"></rect>
          </symbol>
          <symbol id="px-star" viewBox="0 0 7 7" shapeRendering="crispEdges">
            <rect x="3" y="0" width="1" height="1"></rect>
            <rect x="3" y="1" width="1" height="1"></rect>
            <rect x="2" y="2" width="1" height="1"></rect>
            <rect x="3" y="2" width="1" height="1"></rect>
            <rect x="4" y="2" width="1" height="1"></rect>
            <rect x="0" y="3" width="1" height="1"></rect>
            <rect x="1" y="3" width="1" height="1"></rect>
            <rect x="2" y="3" width="1" height="1"></rect>
            <rect x="3" y="3" width="1" height="1"></rect>
            <rect x="4" y="3" width="1" height="1"></rect>
            <rect x="5" y="3" width="1" height="1"></rect>
            <rect x="6" y="3" width="1" height="1"></rect>
            <rect x="1" y="4" width="1" height="1"></rect>
            <rect x="2" y="4" width="1" height="1"></rect>
            <rect x="3" y="4" width="1" height="1"></rect>
            <rect x="4" y="4" width="1" height="1"></rect>
            <rect x="5" y="4" width="1" height="1"></rect>
            <rect x="1" y="5" width="1" height="1"></rect>
            <rect x="2" y="5" width="1" height="1"></rect>
            <rect x="4" y="5" width="1" height="1"></rect>
            <rect x="5" y="5" width="1" height="1"></rect>
            <rect x="1" y="6" width="1" height="1"></rect>
            <rect x="5" y="6" width="1" height="1"></rect>
          </symbol>
          <symbol id="px-plus" viewBox="0 0 5 5" shapeRendering="crispEdges">
            <rect x="2" y="0" width="1" height="1"></rect>
            <rect x="2" y="1" width="1" height="1"></rect>
            <rect x="0" y="2" width="1" height="1"></rect>
            <rect x="1" y="2" width="1" height="1"></rect>
            <rect x="2" y="2" width="1" height="1"></rect>
            <rect x="3" y="2" width="1" height="1"></rect>
            <rect x="4" y="2" width="1" height="1"></rect>
            <rect x="2" y="3" width="1" height="1"></rect>
            <rect x="2" y="4" width="1" height="1"></rect>
          </symbol>
          <symbol id="px-hanni" viewBox="0 0 21 5" shapeRendering="crispEdges">
            <rect x="0" y="0" width="1" height="1"></rect>
            <rect x="6" y="0" width="1" height="1"></rect>
            <rect x="7" y="0" width="1" height="1"></rect>
            <rect x="10" y="0" width="1" height="1"></rect>
            <rect x="11" y="0" width="1" height="1"></rect>
            <rect x="12" y="0" width="1" height="1"></rect>
            <rect x="15" y="0" width="1" height="1"></rect>
            <rect x="16" y="0" width="1" height="1"></rect>
            <rect x="17" y="0" width="1" height="1"></rect>
            <rect x="20" y="0" width="1" height="1"></rect>
            <rect x="0" y="1" width="1" height="1"></rect>
            <rect x="8" y="1" width="1" height="1"></rect>
            <rect x="10" y="1" width="1" height="1"></rect>
            <rect x="13" y="1" width="1" height="1"></rect>
            <rect x="15" y="1" width="1" height="1"></rect>
            <rect x="18" y="1" width="1" height="1"></rect>
            <rect x="0" y="2" width="1" height="1"></rect>
            <rect x="1" y="2" width="1" height="1"></rect>
            <rect x="2" y="2" width="1" height="1"></rect>
            <rect x="6" y="2" width="1" height="1"></rect>
            <rect x="7" y="2" width="1" height="1"></rect>
            <rect x="8" y="2" width="1" height="1"></rect>
            <rect x="10" y="2" width="1" height="1"></rect>
            <rect x="13" y="2" width="1" height="1"></rect>
            <rect x="15" y="2" width="1" height="1"></rect>
            <rect x="18" y="2" width="1" height="1"></rect>
            <rect x="20" y="2" width="1" height="1"></rect>
            <rect x="0" y="3" width="1" height="1"></rect>
            <rect x="3" y="3" width="1" height="1"></rect>
            <rect x="5" y="3" width="1" height="1"></rect>
            <rect x="8" y="3" width="1" height="1"></rect>
            <rect x="10" y="3" width="1" height="1"></rect>
            <rect x="13" y="3" width="1" height="1"></rect>
            <rect x="15" y="3" width="1" height="1"></rect>
            <rect x="18" y="3" width="1" height="1"></rect>
            <rect x="20" y="3" width="1" height="1"></rect>
            <rect x="0" y="4" width="1" height="1"></rect>
            <rect x="3" y="4" width="1" height="1"></rect>
            <rect x="6" y="4" width="1" height="1"></rect>
            <rect x="7" y="4" width="1" height="1"></rect>
            <rect x="8" y="4" width="1" height="1"></rect>
            <rect x="10" y="4" width="1" height="1"></rect>
            <rect x="13" y="4" width="1" height="1"></rect>
            <rect x="15" y="4" width="1" height="1"></rect>
            <rect x="18" y="4" width="1" height="1"></rect>
            <rect x="20" y="4" width="1" height="1"></rect>
          </symbol>
          <symbol id="px-bunny" viewBox="0 0 24 5" shapeRendering="crispEdges">
            <rect x="0" y="0" width="1" height="1"></rect>
            <rect x="5" y="0" width="1" height="1"></rect>
            <rect x="8" y="0" width="1" height="1"></rect>
            <rect x="10" y="0" width="1" height="1"></rect>
            <rect x="11" y="0" width="1" height="1"></rect>
            <rect x="12" y="0" width="1" height="1"></rect>
            <rect x="15" y="0" width="1" height="1"></rect>
            <rect x="16" y="0" width="1" height="1"></rect>
            <rect x="17" y="0" width="1" height="1"></rect>
            <rect x="20" y="0" width="1" height="1"></rect>
            <rect x="23" y="0" width="1" height="1"></rect>
            <rect x="0" y="1" width="1" height="1"></rect>
            <rect x="5" y="1" width="1" height="1"></rect>
            <rect x="8" y="1" width="1" height="1"></rect>
            <rect x="10" y="1" width="1" height="1"></rect>
            <rect x="13" y="1" width="1" height="1"></rect>
            <rect x="15" y="1" width="1" height="1"></rect>
            <rect x="18" y="1" width="1" height="1"></rect>
            <rect x="20" y="1" width="1" height="1"></rect>
            <rect x="23" y="1" width="1" height="1"></rect>
            <rect x="0" y="2" width="1" height="1"></rect>
            <rect x="1" y="2" width="1" height="1"></rect>
            <rect x="2" y="2" width="1" height="1"></rect>
            <rect x="5" y="2" width="1" height="1"></rect>
            <rect x="8" y="2" width="1" height="1"></rect>
            <rect x="10" y="2" width="1" height="1"></rect>
            <rect x="13" y="2" width="1" height="1"></rect>
            <rect x="15" y="2" width="1" height="1"></rect>
            <rect x="18" y="2" width="1" height="1"></rect>
            <rect x="21" y="2" width="1" height="1"></rect>
            <rect x="22" y="2" width="1" height="1"></rect>
            <rect x="23" y="2" width="1" height="1"></rect>
            <rect x="0" y="3" width="1" height="1"></rect>
            <rect x="3" y="3" width="1" height="1"></rect>
            <rect x="5" y="3" width="1" height="1"></rect>
            <rect x="8" y="3" width="1" height="1"></rect>
            <rect x="10" y="3" width="1" height="1"></rect>
            <rect x="13" y="3" width="1" height="1"></rect>
            <rect x="15" y="3" width="1" height="1"></rect>
            <rect x="18" y="3" width="1" height="1"></rect>
            <rect x="23" y="3" width="1" height="1"></rect>
            <rect x="0" y="4" width="1" height="1"></rect>
            <rect x="1" y="4" width="1" height="1"></rect>
            <rect x="2" y="4" width="1" height="1"></rect>
            <rect x="6" y="4" width="1" height="1"></rect>
            <rect x="7" y="4" width="1" height="1"></rect>
            <rect x="8" y="4" width="1" height="1"></rect>
            <rect x="10" y="4" width="1" height="1"></rect>
            <rect x="13" y="4" width="1" height="1"></rect>
            <rect x="15" y="4" width="1" height="1"></rect>
            <rect x="18" y="4" width="1" height="1"></rect>
            <rect x="20" y="4" width="1" height="1"></rect>
            <rect x="21" y="4" width="1" height="1"></rect>
            <rect x="22" y="4" width="1" height="1"></rect>
          </symbol>
          <symbol id="px-sparkle" viewBox="0 0 9 9" shapeRendering="crispEdges">
            <rect x="4" y="0" width="1" height="1"></rect>
            <rect x="4" y="1" width="1" height="1"></rect>
            <rect x="3" y="2" width="1" height="1"></rect>
            <rect x="4" y="2" width="1" height="1"></rect>
            <rect x="5" y="2" width="1" height="1"></rect>
            <rect x="3" y="3" width="1" height="1"></rect>
            <rect x="4" y="3" width="1" height="1"></rect>
            <rect x="5" y="3" width="1" height="1"></rect>
            <rect x="0" y="4" width="1" height="1"></rect>
            <rect x="1" y="4" width="1" height="1"></rect>
            <rect x="2" y="4" width="1" height="1"></rect>
            <rect x="3" y="4" width="1" height="1"></rect>
            <rect x="4" y="4" width="1" height="1"></rect>
            <rect x="5" y="4" width="1" height="1"></rect>
            <rect x="6" y="4" width="1" height="1"></rect>
            <rect x="7" y="4" width="1" height="1"></rect>
            <rect x="8" y="4" width="1" height="1"></rect>
            <rect x="3" y="5" width="1" height="1"></rect>
            <rect x="4" y="5" width="1" height="1"></rect>
            <rect x="5" y="5" width="1" height="1"></rect>
            <rect x="3" y="6" width="1" height="1"></rect>
            <rect x="4" y="6" width="1" height="1"></rect>
            <rect x="5" y="6" width="1" height="1"></rect>
            <rect x="4" y="7" width="1" height="1"></rect>
            <rect x="4" y="8" width="1" height="1"></rect>
          </symbol>
          <symbol id="px-diamond" viewBox="0 0 5 5" shapeRendering="crispEdges">
            <rect x="2" y="0" width="1" height="1"></rect>
            <rect x="1" y="1" width="1" height="1"></rect>
            <rect x="2" y="1" width="1" height="1"></rect>
            <rect x="3" y="1" width="1" height="1"></rect>
            <rect x="0" y="2" width="1" height="1"></rect>
            <rect x="1" y="2" width="1" height="1"></rect>
            <rect x="2" y="2" width="1" height="1"></rect>
            <rect x="3" y="2" width="1" height="1"></rect>
            <rect x="4" y="2" width="1" height="1"></rect>
            <rect x="1" y="3" width="1" height="1"></rect>
            <rect x="2" y="3" width="1" height="1"></rect>
            <rect x="3" y="3" width="1" height="1"></rect>
            <rect x="2" y="4" width="1" height="1"></rect>
          </symbol>
        </defs>
      </svg>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1 — Hero
          ═══════════════════════════════════════════════════════════════════════ */}
      <Intro />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2 — Middle sections (blurred background)
          ═══════════════════════════════════════════════════════════════════════ */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            left: '-12px',
            right: '-12px',
            top: '-12px',
            bottom: '-12px',
            background: 'url(/assets/images/cb1e02c62df71a43e9ff2463890185a8.jpg) center top / 100% auto repeat-y',
            filter: 'blur(6px)',
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255,255,255,0.5)',
          }}
        ></div>

        <AboutMe />
        <Skills />
        <Projects />
        <EducationExperience />
        <Contact />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — Footer
          ═══════════════════════════════════════════════════════════════════════ */}
      <Footer />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — Header (absolutely positioned on top)
          ═══════════════════════════════════════════════════════════════════════ */}
      <Header menuRef={menuRef} closeMenu={closeMenu} />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 — Bunny canvas & animated cursor head
          ═══════════════════════════════════════════════════════════════════════ */}
      <canvas
        className="bcv"
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 50,
        }}
      ></canvas>
      <img
        className="bhead"
        ref={headRef}
        src="/assets/images/9fad891fec666c4c0e81ce9b00f539ab.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '38px',
          height: 'auto',
          pointerEvents: 'none',
          zIndex: 60,
          opacity: 0,
          transform: 'translate(-200px, -200px)',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
