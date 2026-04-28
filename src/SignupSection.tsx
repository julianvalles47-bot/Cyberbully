import { useState } from 'react';
import { content } from './data/content';

export function SignupSection() {
  const [data, setData] = useState({ email: '', password: '', displayName: '' });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e: { email?: string; password?: string } = {};
    if (!data.email.includes('@')) e.email = content.signup.errors.email;
    if (data.password.length < 8) e.password = content.signup.errors.password;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  if (success) {
    return (
      <section id="signup" className="px-4 py-16 lg:px-8 lg:py-24 bg-background">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-4">{content.signup.title}</h2>
          <p className="text-secondary">{content.signup.subtitle}</p>
        </div>
        <div className="max-w-md mx-auto bg-surface rounded-2xl shadow-soft p-8 text-center">
          <h3 className="font-display text-xl font-semibold mb-2">{content.signup.successTitle}</h3>
          <p className="text-sm text-secondary">{content.signup.successText}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="signup" className="px-4 py-16 lg:px-8 lg:py-24 bg-background">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-4">{content.signup.title}</h2>
        <p className="text-secondary">{content.signup.subtitle}</p>
      </div>
      <div className="max-w-md mx-auto bg-surface rounded-2xl shadow-soft p-8">
        <h3 className="font-display text-xl font-semibold text-center mb-1">{content.signup.cardTitle}</h3>
        <p className="text-sm text-secondary text-center mb-6">{content.signup.cardSubtitle}</p>
        <form onSubmit={e => { e.preventDefault(); if (validate()) setSuccess(true); }} className="space-y-4">
          <div><label className="block text-sm mb-2">{content.signup.emailLabel}</label><input type="email" className="w-full px-4 py-3 text-sm border rounded-xl bg-background focus:border-accent" placeholder={content.signup.emailPlaceholder} value={data.email} onChange={e => setData({...data, email: e.target.value})} />{errors.email && <p className="text-xs text-error mt-1">{errors.email}</p>}</div>
          <div><label className="block text-sm mb-2">{content.signup.passwordLabel}</label><input type="password" className="w-full px-4 py-3 text-sm border rounded-xl bg-background focus:border-accent" placeholder={content.signup.passwordPlaceholder} value={data.password} onChange={e => setData({...data, password: e.target.value})} />{errors.password && <p className="text-xs text-error mt-1">{errors.password}</p>}</div>
          <div><label className="block text-sm mb-2">{content.signup.displayNameLabel}</label><input type="text" className="w-full px-4 py-3 text-sm border rounded-xl bg-background focus:border-accent" placeholder={content.signup.displayNamePlaceholder} value={data.displayName} onChange={e => setData({...data, displayName: e.target.value})} /></div>
          <button className="w-full px-6 py-3 text-sm font-semibold text-white bg-accent rounded-xl mt-2">{content.signup.submitButton}</button>
        </form>
        <p className="text-xs text-secondary text-center mt-6 pt-6 border-t">{content.signup.privacy}</p>
      </div>
    </section>
  );
}