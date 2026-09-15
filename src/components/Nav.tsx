import { useEffect, useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../hooks/useTheme';

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
        solid ? 'border-line bg-bg' : 'border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="container-page relative flex h-16 items-center justify-end gap-4">
        <ul className="hidden items-center gap-1 rounded-full border border-line bg-elev p-1 lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2">
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
            className="h-9 rounded-full border border-line px-3.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg"
          >
            {theme === 'dark' ? 'Dark' : 'Light'}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="h-9 rounded-full border border-line px-3.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg lg:hidden"
          >
            {menuOpen ? 'Close' : 'Menu'}
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
                  className="block py-4 text-2xl font-medium tracking-tight"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
