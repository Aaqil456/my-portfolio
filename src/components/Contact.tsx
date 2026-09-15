import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/profile';
import { CheckIcon, CopyIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons';
import { ButtonLink, Eyebrow, Highlight, Reveal } from './ui';

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
    <div className="inline-flex max-w-full items-stretch overflow-hidden rounded-full bg-accent text-on-accent">
      <a
        href={`mailto:${profile.email}`}
        className="inline-flex min-w-0 items-center gap-2 py-3 pr-4 pl-5 font-medium transition hover:brightness-95"
      >
        <MailIcon className="size-4 shrink-0" />
        <span className="truncate">{profile.email}</span>
      </a>
      <button
        type="button"
        onClick={copyEmail}
        aria-label="Copy email address"
        className="grid w-12 place-items-center border-l border-on-accent/15 transition hover:bg-black/5"
      >
        {copied ? <CheckIcon className="size-4" /> : <CopyIcon className="size-4" />}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? 'Email address copied' : ''}
      </span>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl border border-line bg-elev px-6 py-14 sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top_right,#000,transparent_70%)]"
            />
            <div
              aria-hidden="true"
              className="absolute -top-32 -right-24 -z-10 size-96 rounded-full bg-accent/25 blur-[100px] dark:bg-accent/10"
            />

            <Eyebrow index="06" label="Contact" />
            <h2 className="mt-5 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-balance">
              Have something that needs to <Highlight>ship</Highlight>?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
              I’m always happy to talk about full-stack products, AI automation or Web3 builds. Email is the fastest way
              to reach me.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <EmailActions />
              <ButtonLink href={profile.linkedin} external variant="secondary">
                <LinkedInIcon className="size-4" />
                LinkedIn
              </ButtonLink>
              <ButtonLink href={profile.github} external variant="secondary">
                <GitHubIcon className="size-4" />
                GitHub
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
