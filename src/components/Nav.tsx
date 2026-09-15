import { useEffect, useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../hooks/useTheme';
import { ArrowRightIcon, CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

// Sections without a nav item are observed too, so no link stays highlighted while they're in view.
const OBSERVED_SECTIONS = ['top', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];

export function Nav() {
  const active = useActiveSection(OBSERVED_SECTIONS);
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const desktop = window.matchMedia('(min-width: 64rem)');
    const close = () => setMenuOpen(false);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', close);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', close);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? 'border-line bg-bg/85 backdrop-blur-xl' : 'border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="container-page relative flex h-16 items-center justify-end gap-4">
        <ul className="hidden items-center gap-1 rounded-full border border-line bg-elev/70 p-1 backdrop-blur lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`block rounded-full px-4 py-1.5 text-sm transition-colors ${
                    isActive ? 'bg-fg text-bg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
          >
            {theme === 'dark' ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="grid size-9 place-items-center rounded-full border border-line transition-colors hover:border-line-strong lg:hidden"
          >
            {menuOpen ? <CloseIcon className="size-4" /> : <MenuIcon className="size-4" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="container-page h-[calc(100dvh-4rem)] overflow-y-auto pb-8 lg:hidden">
          <ul className="border-t border-line">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="border-b border-line">
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-4 text-2xl font-medium tracking-tight"
                >
                  {item.label}
                  <ArrowRightIcon className="size-5 text-subtle" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
