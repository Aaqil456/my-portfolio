import { skills } from '../data/profile';
import { Reveal, SectionHeading } from './ui';

export function Skills() {
  return (
    <section id="skills" className="border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <SectionHeading index="04" label="Skills" title="The toolkit.">
            Languages, platforms and practices I use to take work from requirements to production.
          </SectionHeading>
        </Reveal>

        <dl className="mt-14 border-t border-line">
          {skills.map((group, index) => (
            <Reveal
              key={group.group}
              delay={index * 40}
              className="grid gap-4 border-b border-line py-6 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10"
            >
              <dt className="text-xs font-semibold tracking-[0.14em] text-muted uppercase md:pt-2">{group.group}</dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-lg border border-line bg-elev px-3 py-1.5 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
