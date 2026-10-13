import type { ComponentProps, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
export type ButtonVariant =
  "primary" | "outline" | "light-outline" | "orange-outline";
const variants: Record<ButtonVariant, string> = {
  primary: "border-orange bg-orange text-white hover:bg-orange/90",
  outline:
    "border-navy bg-transparent text-navy hover:bg-navy hover:text-white",
  "light-outline":
    "border-white/60 bg-transparent text-white hover:bg-white/10",
  "orange-outline":
    "border-orange bg-transparent text-orange hover:bg-orange hover:text-white",
};
const base =
  "inline-flex min-h-8 items-center justify-center gap-1.5 rounded-[5px] border px-5 py-1.5 text-body font-medium";
export function Button({
  variant = "primary",
  arrow = false,
  className = "",
  children,
  ...props
}: ComponentProps<"button"> & { variant?: ButtonVariant; arrow?: boolean }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      {arrow && <ArrowUpRight size={13} aria-hidden="true" />}
    </button>
  );
}
export function ButtonLink({
  variant = "primary",
  arrow = false,
  className = "",
  children,
  ...props
}: ComponentProps<"a"> & { variant?: ButtonVariant; arrow?: boolean }) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      {arrow && <ArrowUpRight size={13} aria-hidden="true" />}
    </a>
  );
}
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`page-container ${className}`}>{children}</div>;
}
export function Logo({
  dark = false,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <a
      href="#home"
      aria-label="Lante homepage"
      className={`inline-block shrink-0 ${className}`}
    >
      <img
        src={dark ? "/assets/logo-dark.png" : "/assets/logo-white.png"}
        alt="Lante"
        width="100"
        height="32"
        className="h-auto w-full"
      />
    </a>
  );
}
