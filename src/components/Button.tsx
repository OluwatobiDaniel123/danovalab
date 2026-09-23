import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { Icon } from "./Icon";
import type { IconName } from "../data/types";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "accent";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  iconRight?: IconName;
  iconLeft?: IconName;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 shadow-[0_8px_30px_-10px_rgba(59,107,255,0.5)] border border-brand-400/40",
  secondary:
    "bg-white text-ink-900 hover:bg-ink-100 border border-ink-200 shadow-card",
  ghost: "text-ink-800 hover:bg-ink-100 border border-transparent",
  outline: "border border-ink-300 text-ink-800 hover:bg-ink-100 hover:border-ink-400",
  accent: "bg-accent-500 text-white hover:bg-accent-600 border border-accent-400/40",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base py-3.5",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 will-change-transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-50 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

function Inner({ iconLeft, iconRight, children }: Pick<BaseProps, "children" | "iconLeft" | "iconRight">) {
  return (
    <>
      {iconLeft && <Icon name={iconLeft} className="w-4 h-4" />}
      {children}
      {iconRight && <Icon name={iconRight} className="w-4 h-4" />}
    </>
  );
}

export function ButtonLink({
  to,
  variant = "primary",
  size = "md",
  className = "",
  children,
  iconRight,
  iconLeft,
  external,
}: BaseProps & { to: string; external?: boolean }) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={cls}>
        <Inner iconLeft={iconLeft} iconRight={iconRight}>{children}</Inner>
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      <Inner iconLeft={iconLeft} iconRight={iconRight}>{children}</Inner>
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  iconRight,
  iconLeft,
  ...rest
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      <Inner iconLeft={iconLeft} iconRight={iconRight}>{children}</Inner>
    </button>
  );
}
