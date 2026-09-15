import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#0b0b0c' : '#f6f5f1');
}

export function useTheme() {
  // index.html sets data-theme before first paint; start from that.
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark',
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Follow the OS setting until the visitor picks a theme themselves.
  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = () => {
      if (!readStoredTheme()) setTheme(query.matches ? 'light' : 'dark');
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  }, [theme]);

  return { theme, toggleTheme };
}
