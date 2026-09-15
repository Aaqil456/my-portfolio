import { profile } from '../data/profile';
import { ArrowUpIcon } from './Icons';

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript and Tailwind CSS.
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-fg">
          Back to top
          <ArrowUpIcon className="size-3.5" />
        </a>
      </div>
    </footer>
  );
}
