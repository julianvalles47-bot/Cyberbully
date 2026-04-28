import { content } from './data/content';

export function Hero({ onNavigate }: { onNavigate: (s: string) => void }) {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 relative">
      <div className="absolute inset-0 hero-bg" />
      <div className="relative z-10 max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary mb-6">{content.hero.headline}</h1>
        <p className="text-secondary text-lg mb-8 max-w-xl mx-auto">{content.hero.subtext}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => onNavigate('chat')} className="px-6 py-3 text-sm font-semibold text-white bg-accent rounded-xl">{content.hero.primaryCTA}</button>
          <button onClick={() => onNavigate('tools')} className="px-6 py-3 text-sm font-semibold text-accent border border-accent rounded-xl">{content.hero.secondaryCTA}</button>
        </div>
      </div>
    </section>
  );
}