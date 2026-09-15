import type { AnchorHTMLAttributes, ReactNode } from 'react';

// Plain wrapper — kept so section components don't need editing, but it no
// longer animates anything. `delay` is accepted for call-site compatibility
// and ignored.
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string; delay?: number }) {
  return <div className={className}>{children}</div>;
}

/** Accent colour for a single emphasised word inside a heading. */
export function Highlight({ children }: { children: ReactNode }) {
  return <span className="text-accent-ink">{children}</span>;
}

/** Small uppercase label used above headings, e.g. "01 — About". */
export function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.14em] text-muted uppercase">
      <span className="text-accent-ink tabular-nums">{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
      {label}
    </p>
  );
}

export function SectionHeading({
  index,
  label,
  title,
  children,
}: {
  index: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <Eyebrow index={index} label={label} />
      <h2 className="mt-5 text-[clamp(2rem,4.6vw,3.25rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-balance">
        {title}
      </h2>
      {children ? <p className="mt-5 text-lg leading-relaxed text-pretty text-muted">{children}</p> : null}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <li className="rounded-full border border-line px-2.5 py-1 text-xs leading-none text-muted">{children}</li>;
}

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-on-accent hover:bg-accent-ink hover:text-bg',
  secondary: 'border border-line-strong bg-elev text-fg hover:bg-elev-2',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'h-9 gap-1.5 px-3.5 text-sm',
  md: 'h-11 gap-2 px-5 text-[15px]',
};

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  external?: boolean;
}

export function ButtonLink({ variant = 'primary', size = 'md', external = false, className = '', ...props }: ButtonLinkProps) {
  return (
    <a
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
      className={`inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap transition-colors ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`}
    />
  );
}

/** Plain text link with an underline that appears on hover — used instead of icon buttons. */
export function TextLink({ className = '', ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={`text-sm font-medium underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-fg ${className}`}
    />
  );
}
