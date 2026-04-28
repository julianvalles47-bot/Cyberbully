import { useState, useRef, useEffect } from 'react';
import { content } from './data/content';
import { quickExitUrl } from './data/tools';

interface Message { id: string; text: string; type: 'received' | 'sent'; }

export function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0) setMessages([{ id: 'welcome', text: content.chat.welcomeMessage, type: 'received' }]);
  }, []);

  useEffect(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages]);

  const send = () => {
    if (!input.trim()) return;
    setMessages(p => [...p, { id: Date.now().toString(), text: input.trim(), type: 'sent' }]);
    setInput('');
    setTimeout(() => setMessages(p => [...p, { id: (Date.now()+1).toString(), text: content.chat.responseMessage, type: 'received' }]), 1000);
  };

  return (
    <section id="chat" className="px-4 py-16 lg:px-8 lg:py-24 bg-background">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary mb-4">{content.chat.title}</h2>
        <p className="text-secondary">{content.chat.subtitle}</p>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="bg-surface rounded-2xl shadow-soft overflow-hidden">
          <div className="px-6 py-4 border-b flex justify-between">
            <div><h3 className="font-display text-lg font-semibold">{content.chat.headerTitle}</h3><p className="text-sm text-secondary">{content.chat.headerSubtitle}</p></div>
            <div className="flex gap-2">
              <button onClick={() => setMessages([{ id: 'welcome', text: content.chat.welcomeMessage, type: 'received' }])} className="p-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg></button>
              <a href={quickExitUrl} target="_blank" className="p-2 text-error"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg></a>
            </div>
          </div>
          <div className="h-[320px] overflow-y-auto px-6 py-4 flex flex-col gap-3">
            {messages.map(m => <div key={m.id} className={`chat-bubble ${m.type === 'received' ? 'chat-bubble-received self-start' : 'chat-bubble-sent self-end'}`}>{m.text}</div>)}
            <div ref={endRef} />
          </div>
          <div className="px-6 py-4 border-t">
            <button onClick={() => setIsAnonymous(!isAnonymous)} className={`flex items-center gap-2 text-sm mb-3 ${isAnonymous ? 'text-accent' : 'text-secondary'}`}>
              <div className={`w-4 h-4 rounded border-2 flex ${isAnonymous ? 'border-accent bg-accent' : 'border-gray-300'}`}>{isAnonymous && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}</div>
              {content.chat.anonymousToggle}
            </button>
            <textarea className="w-full px-4 py-3 text-sm border rounded-xl bg-background focus:border-accent resize-none min-h-[80px]" placeholder={content.chat.placeholder} value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }} />
            <div className="flex flex-wrap gap-2 mt-3">{content.chat.quickPrompts.map((p, i) => <button key={i} onClick={() => setInput(p)} className="px-3 py-1.5 text-xs text-accent bg-accent/5 rounded-full">{p}</button>)}</div>
            <button onClick={send} disabled={!input.trim()} className="px-6 py-3 text-sm font-semibold text-white bg-accent rounded-xl mt-3 disabled:opacity-50">{content.chat.sendButton}</button>
          </div>
        </div>
        <p className="text-center text-xs text-secondary mt-4">{content.footer.privacyDisclaimer}</p>
      </div>
    </section>
  );
}