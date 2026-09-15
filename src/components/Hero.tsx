import { marquee, profile, stats } from '../data/profile';
import { ButtonLink, Highlight, Reveal, TextLink } from './ui';

function statClasses(index: number) {
  // 2 columns on mobile, 4 on large screens, with hairline dividers between cells.
  return [
    index % 2 === 1 ? 'border-l pl-4' : 'pr-4',
    index >= 2 ? 'border-t lg:border-t-0' : '',
    index > 0 ? 'lg:border-l lg:pl-6' : '',
  ].join(' ');
}

function TechList() {
  return (
    <div className="container-page">
      <ul className="flex flex-wrap items-center gap-2 border-t border-line py-8">
        {marquee.map((tech) => (
          <li key={tech} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="pt-32 sm:pt-44">
      <Reveal className="container-page">
        <h1 className="max-w-5xl text-[clamp(2.75rem,7.4vw,5.75rem)] leading-none font-semibold tracking-[-0.045em] text-balance">
          I turn product ideas into <Highlight>shipped</Highlight> software.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-pretty text-muted sm:text-xl">
          Hi, I’m <span className="font-medium text-fg">{profile.name}</span>. {profile.intro}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
          <ButtonLink href="#contact">Get in touch</ButtonLink>
          <TextLink href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </TextLink>
          <TextLink href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </TextLink>
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

      <TechList />
    </section>
  );
}
