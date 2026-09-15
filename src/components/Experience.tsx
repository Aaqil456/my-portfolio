import { experience } from '../data/profile';
import { Reveal, SectionHeading, Tag } from './ui';

export function Experience() {
  return (
    <section id="experience" className="border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <SectionHeading index="02" label="Experience" title="Where I’ve been building.">
            Two years shipping production software, built on a foundation of business analysis — requirements,
            prototypes and test cycles.
          </SectionHeading>
        </Reveal>

        <ol className="mt-14 border-t border-line">
          {experience.map((job) => (
            <li key={job.company} className="border-b border-line">
              <Reveal className="grid gap-5 py-10 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm md:flex-col md:items-start">
                  <span className="font-medium text-fg tabular-nums">{job.period}</span>
                  <span className="text-muted">{job.location}</span>
                  {job.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-ink/30 bg-accent/15 px-2 py-1 text-xs leading-none font-medium text-accent-ink">
                      <span className="size-1.5 rounded-full bg-accent-ink" />
                      Current
                    </span>
                  )}
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {job.role} <span className="font-normal text-subtle">at</span> {job.company}
                  </h3>
                  <p className="mt-3 max-w-3xl leading-relaxed text-fg/85">{job.summary}</p>
                  <ul className="mt-5 max-w-3xl space-y-3">
                    {job.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <span aria-hidden="true" className="mt-[0.75em] h-px w-3 shrink-0 bg-accent-ink" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
