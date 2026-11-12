import Link from 'next/link';
import { skillIcons } from '../components/skillIcons';

export default function IconGuide() {
  return <main style={{ maxWidth: 800, margin: '80px auto', padding: 24 }}>
    <Link href="/">← Back to portfolio</Link>
    <h1>Skill icon guide</h1>
    <p>Copy an icon name into the <code>icon</code> field in <code>content/skills.js</code>.</p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16 }}>
      {Object.entries(skillIcons).map(([name, Shape]) => <div key={name} style={{ background: 'white', padding: 24, borderRadius: 16, textAlign: 'center' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><Shape /></svg>
        <p><code>{name}</code></p>
      </div>)}
    </div>
  </main>;
}
