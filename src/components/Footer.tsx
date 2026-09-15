import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript and Tailwind CSS.
        </p>
        <a href="#top" className="transition-colors hover:text-fg">
          Back to top
        </a>
      </div>
    </footer>
  );
}
