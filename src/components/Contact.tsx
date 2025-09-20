import { useState } from "react";
import { useTranslation } from 'react-i18next';
import Section from "./Section";
import userInfo from '../config/userInfo.json';

export const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <Section id="contact" title={t('contact.title')} eyebrow={t('contact.subtitle')}>
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6 max-w-md">
          <p className="text-soft leading-relaxed text-sm md:text-base">
            {t('contact.message')}
          </p>
          <div className="text-sm space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-faint">{t('contact.email')}:</span>
              <a
                href={userInfo.socialLinks.email}
                className="text-soft hover:text-brand transition-colors"
              >
                {userInfo.socialLinks.email.replace('mailto:', '')}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-faint">{t('contact.linkedin')}:</span>
              <a 
                href={userInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft hover:text-brand transition-colors"
              >
                linkedin.com/in/nhan-tran
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-faint">{t('contact.github')}:</span>
              <a 
                href={userInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft hover:text-brand transition-colors"
              >
                github.com/nhan-tran
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 apple-card max-w-2xl">
          <div className="grid gap-6">
            <label className="flex flex-col gap-3">
                  <span className="text-sm font-medium" style={{ color: 'var(--color-text-soft)' }}>Name</span>
              <input
                required
                name="name"
                className="px-4 py-3 rounded-xl bg-[var(--color-bg-accent)] border border-[var(--color-border)] focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 text-base transition-all duration-200"
                style={{ color: 'var(--color-text)' }}
                placeholder="Your name"
              />
            </label>
            <label className="flex flex-col gap-3">
              <span className="text-sm font-medium" style={{ color: 'var(--color-text-soft)' }}>Email</span>
              <input
                required
                type="email"
                name="email"
                className="px-4 py-3 rounded-xl bg-[var(--color-bg-accent)] border border-[var(--color-border)] focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 text-base transition-all duration-200"
                style={{ color: 'var(--color-text)' }}
                placeholder="your.email@example.com"
              />
            </label>
            <label className="flex flex-col gap-3">
              <span className="text-sm font-medium" style={{ color: 'var(--color-text-soft)' }}>Message</span>
              <textarea
                required
                name="message"
                rows={6}
                className="px-4 py-3 rounded-xl resize-none bg-[var(--color-bg-accent)] border border-[var(--color-border)] focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 text-base leading-relaxed transition-all duration-200"
                style={{ color: 'var(--color-text)' }}
                placeholder="Tell me about your project or just say hello..."
              />
            </label>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <button
              type="submit"
              disabled={status !== "idle"}
              className="apple-button text-base font-medium transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === "idle" && t('contact.cta')}
              {status === "sending" && (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
              )}
              {status === "sent" && (
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sent ✓
                </span>
              )}
            </button>
            {status === "sent" && (
              <span className="text-sm text-faint">
                (Demo only – hook to backend later)
              </span>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
