import { archive, featuredProject, projects } from '../data/profile';
import type { LinkKind, ProjectLink } from '../data/profile';
import { Reveal, SectionHeading, Tag, TextLink } from './ui';

const LINK_LABELS: Record<LinkKind, string> = {
  source: 'Source',
  demo: 'Demo',
  live: 'Live',
};

function ProjectLinks({ links, title }: { links: ProjectLink[]; title: string }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {links.map((link) => (
        <TextLink key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${LINK_LABELS[link.kind]}: ${title}`}>
          {LINK_LABELS[link.kind]}
        </TextLink>
      ))}
    </div>
  );
}

function FeaturedProject() {
  return (
    <Reveal>
      <article className="grid overflow-hidden rounded-2xl border border-line bg-elev lg:grid-cols-2">
        <div className="aspect-video overflow-hidden border-b border-line bg-elev-2 lg:aspect-auto lg:border-r lg:border-b-0">
          <img
            src={featuredProject.image}
            alt={`Screenshot of ${featuredProject.title}`}
            loading="lazy"
            className="size-full object-cover"
            style={{ objectPosition: featuredProject.imagePosition }}
          />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-xs font-medium text-accent-ink">
              <span className="size-1.5 rounded-full bg-accent-ink" />
              Live now
            </span>
            <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">{featuredProject.kind}</p>
          </div>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight">{featuredProject.title}</h3>
          <p className="mt-3 leading-relaxed text-muted">{featuredProject.description}</p>
          <ul className="mt-4 space-y-2">
            {featuredProject.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                <span aria-hidden="true" className="mt-[0.75em] h-px w-3 shrink-0 bg-accent-ink" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <ul aria-label="Technologies" className="flex flex-wrap gap-2">
              {featuredProject.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </ul>
            <ProjectLinks links={featuredProject.links} title={featuredProject.title} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <SectionHeading index="03" label="Projects" title="Selected projects.">
            Sentysis is where most of my time goes right now — the codebase is private, but the product is live.
            Below are a couple of earlier projects you can explore end to end.
          </SectionHeading>
        </Reveal>

        <div className="mt-14">
          <FeaturedProject />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Reveal key={project.title} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-elev">
                <div className="aspect-16/10 overflow-hidden border-b border-line bg-elev-2">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    loading="lazy"
                    className="size-full object-cover"
                    style={{ objectPosition: project.imagePosition }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="text-xs font-semibold tracking-[0.14em] text-accent-ink uppercase">{project.kind}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{project.description}</p>
                  <ul className="mt-4 space-y-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <span aria-hidden="true" className="mt-[0.75em] h-px w-3 shrink-0 bg-accent-ink" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-8">
                    <ul aria-label="Technologies" className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </ul>
                    <ProjectLinks links={project.links} title={project.title} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <h3 className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">From the archive</h3>
          <ul className="mt-4 border-t border-line">
            {archive.map((item) => (
              <li
                key={item.title}
                className="grid gap-4 border-b border-line py-5 md:grid-cols-[13rem_minmax(0,1fr)_auto] md:items-center md:gap-10"
              >
                <p className="font-semibold tracking-tight">{item.title}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <p className="text-[15px] text-muted">{item.description}</p>
                  <ul aria-label="Technologies" className="flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </ul>
                </div>
                <ProjectLinks links={item.links} title={item.title} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
