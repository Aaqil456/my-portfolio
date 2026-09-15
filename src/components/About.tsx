import { useEffect, useState } from 'react';
import { capabilities, profile } from '../data/profile';
import { Highlight, Reveal, SectionHeading } from './ui';

function LocalTime({ timeZone }: { timeZone: string }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const time = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone }).format(now);
  return <span className="tabular-nums">Local time {time} (GMT+8)</span>;
}

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <figure>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-elev-2">
              <img
                src={profile.portrait}
                alt="Aaqil Ahamad"
                width={720}
                height={1280}
                loading="lazy"
                className="size-full object-cover object-[50%_38%]"
              />
            </div>
            <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm text-muted">
              <span>{profile.location}</span>
              <LocalTime timeZone={profile.timeZone} />
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              index="01"
              label="About"
              title={
                <>
                  Engineer by practice, <Highlight>analyst</Highlight> by training.
                </>
              }
            />
            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-pretty text-muted">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <li key={capability.title} className="bg-elev">
                <Reveal className="h-full p-6 sm:p-7">
                  <p className="text-xs font-semibold tracking-[0.14em] text-accent-ink">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight">{capability.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{capability.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
