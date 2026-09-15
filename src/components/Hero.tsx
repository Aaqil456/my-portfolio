import { marquee, profile, stats } from '../data/profile';
import { ArrowRightIcon, GitHubIcon, LinkedInIcon } from './Icons';
import { ButtonLink, Highlight, Reveal } from './ui';

function statClasses(index: number) {
  // 2 columns on mobile, 4 on large screens, with hairline dividers between cells.
  return [
    index % 2 === 1 ? 'border-l pl-4' : 'pr-4',
    index >= 2 ? 'border-t lg:border-t-0' : '',
    index > 0 ? 'lg:border-l lg:pl-6' : '',
  ].join(' ');
}

function TechMarquee() {
  const row = (duplicate: boolean) => (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={duplicate || undefined}>
      {marquee.map((tech) => (
        <li
          key={tech}
          className="flex items-center gap-10 text-xs font-medium tracking-[0.14em] whitespace-nowrap text-subtle uppercase"
        >
          {tech}
          <span aria-hidden="true" className="size-1 rotate-45 bg-line-strong" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee-mask overflow-hidden py-8">
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 sm:pt-44">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-56 left-1/2 -z-10 h-[32rem] w-[min(56rem,100%)] -translate-x-1/2 rounded-full bg-accent/30 blur-[120px] dark:bg-accent/10"
      />

      <Reveal className="container-page">
        <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-elev/70 py-1.5 pr-3.5 pl-2.5 text-xs font-medium text-muted backdrop-blur">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-accent ring-1 ring-accent-ink/40" />
          </span>
          {profile.status}
        </p>

        <h1 className="mt-7 max-w-5xl text-[clamp(2.75rem,7.4vw,5.75rem)] leading-[1] font-semibold tracking-[-0.045em] text-balance">
          I turn product ideas into <Highlight>shipped</Highlight> software.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-pretty text-muted sm:text-xl">
          Hi, I’m <span className="font-medium text-fg">{profile.name}</span>. {profile.intro}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <ButtonLink href="#contact">
            Get in touch
            <ArrowRightIcon className="size-4" />
          </ButtonLink>
          <div className="flex items-center gap-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:bg-elev-2 hover:text-fg"
            >
              <GitHubIcon className="size-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:bg-elev-2 hover:text-fg"
            >
              <LinkedInIcon className="size-5" />
            </a>
          </div>
        </div>
      </Reveal>

      <div className="container-page mt-20 sm:mt-28">
        <dl className="grid grid-cols-2 border-y border-line lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`flex flex-col gap-1.5 border-line py-6 ${statClasses(index)}`}>
              <dt className="text-sm leading-snug text-muted">{stat.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <TechMarquee />
    </section>
  );
}
