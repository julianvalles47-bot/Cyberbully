import { useState, useEffect } from 'react';
import { content } from './data/content';

export function Navbar({ activeSection, onNavigate }: { activeSection: string; onNavigate: (s: string) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { window.addEventListener('scroll', () => setScrolled(window.scrollY > 20)); return () => window.removeEventListener('scroll', () => {}); }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 lg:px-8 transition-all ${scrolled ? 'bg-white/85 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <button onClick={() => onNavigate('home')} className="font-display text-2xl font-semibold text-accent">{content.nav.logo}</button>
        <div className="hidden lg:flex gap-8">{content.nav.links.map(l => <button key={l.id} onClick={() => onNavigate(l.id)} className={`text-sm font-medium ${activeSection === l.id ? 'text-primary' : 'text-secondary'}`}>{l.label}</button>)}</div>
        <button onClick={() => onNavigate('signup')} className="hidden lg:block px-5 py-2.5 text-sm font-semibold text-accent border border-accent rounded-xl">{content.nav.signIn}</button>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg></button>
      </nav>
      {mobileOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setMobileOpen(false)} />}
      <div className={`fixed top-0 right-0 w-[280px] h-full bg-surface z-50 p-6 transition-transform lg:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-6 mt-16">{content.nav.links.map(l => <button key={l.id} onClick={() => { onNavigate(l.id); setMobileOpen(false); }} className="text-left text-lg">{l.label}</button>)}</div>
      </div>
    </>
  );
}