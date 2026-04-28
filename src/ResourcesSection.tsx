import { content } from './data/content';

export function ResourcesSection() {
  const icons: Record<string, JSX.Element> = {
    info: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>,
    heart: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
    users: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>,
    phone: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>,
  };
  return (
    <section id="resources" className="px-4 py-16 lg:px-8 lg:py-24 bg-surface">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-4">{content.resources.title}</h2>
        <p className="text-secondary">{content.resources.subtitle}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
        {content.resources.cards.map((card, i) => (
          <div key={i} className="bg-surface p-6 rounded-2xl shadow-soft hover:-translate-y-1 transition-all">
            <div className="w-11 h-11 mb-4 flex items-center justify-center bg-accent/10 text-accent rounded-xl">{icons[card.icon]}</div>
            <h3 className="font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-secondary">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}