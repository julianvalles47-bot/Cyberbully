import { useState } from 'react';
import { content } from './data/content';
import { tools } from './data/tools';

function ToolCard({ tool, isOpen, onToggle }: { tool: typeof tools[0]; isOpen: boolean; onToggle: () => void }) {
  const [checked, setChecked] = useState<boolean[]>(new Array(tool.items.length).fill(false));
  return (
    <div className="bg-surface rounded-2xl shadow-soft overflow-hidden">
      <button onClick={onToggle} className="w-full px-6 py-4 flex justify-between hover:bg-gray-50">
        <span className="font-semibold">{tool.title}</span>
        <svg className={`w-5 h-5 transition ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
      <div className={`overflow-hidden ${isOpen ? 'max-h-[500px] p-6' : 'max-h-0'}`}>
        <ul className="space-y-2">{tool.items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <button onClick={() => { const n = [...checked]; n[i] = !n[i]; setChecked(n); }} className={`w-5 h-5 rounded border-2 flex ${checked[i] ? 'border-accent bg-accent' : 'border-gray-300'}`}>{checked[i] && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}</button>
            <span className={`text-sm ${checked[i] ? 'line-through opacity-60' : ''}`}>{item.text}</span>
          </li>
        ))}</ul>
      </div>
    </div>
  );
}

export function ToolsSection() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="tools" className="px-4 py-16 lg:px-8 lg:py-24 bg-surface">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-4">{content.tools.title}</h2>
        <p className="text-secondary">{content.tools.subtitle}</p>
      </div>
      <div className="max-w-3xl mx-auto space-y-3">{tools.map(t => <ToolCard key={t.id} tool={t} isOpen={open === t.id} onToggle={() => setOpen(open === t.id ? null : t.id)} />)}</div>
    </section>
  );
}