import { content } from './data/content';
import { quickExitUrl } from './data/tools';

export function Footer() {
  return (
    <footer className="bg-surface border-t py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <button onClick={() => window.scrollTo({ top: 0 })} className="font-display text-xl font-semibold text-accent">{content.footer.logo}</button>
        <div className="flex gap-6">{content.footer.links.map((l, i) => <a key={i} href={l.href} className="text-sm text-secondary">{l.label}</a>)}</div>
        <p className="text-sm text-secondary">{content.footer.copyright}</p>
      </div>
      <div className="text-center mt-6 pt-6 border-t">
        <p className="text-xs text-secondary">{content.footer.privacyDisclaimer}</p>
        <a href={quickExitUrl} target="_blank" className="inline-flex gap-2 mt-3 px-4 py-2 text-xs text-error hover:bg-error/10 rounded-lg">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          Quick Exit
        </a>
      </div>
    </footer>
  );
}