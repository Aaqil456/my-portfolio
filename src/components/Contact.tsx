import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/profile';
import { Eyebrow, Highlight, Reveal, TextLink } from './ui';

function EmailActions() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <TextLink href={`mailto:${profile.email}`} className="text-base">
        {profile.email}
      </TextLink>
      <button type="button" onClick={copyEmail} className="text-sm text-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-fg hover:decoration-fg">
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <div className="rounded-3xl border border-line bg-elev px-6 py-14 sm:px-12 sm:py-20">
            <Eyebrow index="06" label="Contact" />
            <h2 className="mt-5 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-balance">
              Have something that needs to <Highlight>ship</Highlight>?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
              I’m always happy to talk about full-stack products, AI automation or Web3 builds. Email is the fastest way
              to reach me.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <EmailActions />
              <TextLink href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </TextLink>
              <TextLink href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </TextLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
