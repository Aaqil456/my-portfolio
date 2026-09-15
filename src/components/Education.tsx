import { education } from '../data/profile';
import { Reveal, SectionHeading } from './ui';

export function Education() {
  return (
    <section id="education" className="border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <SectionHeading index="05" label="Education" title="Academic background." />
        </Reveal>

        <ol className="mt-14 grid gap-4 md:grid-cols-3 md:gap-6">
          {education.map((entry, index) => (
            <li key={entry.title}>
              <Reveal delay={index * 80} className="flex h-full flex-col rounded-2xl border border-line bg-elev p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3 text-sm text-muted">
                  <span className="tabular-nums">{entry.period}</span>
                  <span className="rounded-full bg-accent px-2.5 py-1 text-xs leading-none font-semibold text-on-accent">
                    {entry.grade}
                  </span>
                </div>
                <h3 className="mt-8 text-lg leading-snug font-semibold tracking-tight text-balance">{entry.title}</h3>
                <p className="mt-2 text-muted">{entry.school}</p>
                <p className="mt-auto pt-6 text-sm text-subtle">{entry.location}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
