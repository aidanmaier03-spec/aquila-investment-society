import { useId } from "react";

type LogoMarkProps = {
  className?: string;
  /** Accessible name. Omit when the mark sits beside the written name. */
  title?: string;
};

/**
 * The Aquila mark: a solid disc with an "A" (Λ) cut clean through it.
 * The cut is a mask, so whatever sits behind the disc shows through.
 */
export function LogoMark({ className, title }: LogoMarkProps) {
  const maskId = `aquila-cut-${useId().replace(/:/g, "")}`;
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <defs>
        <mask id={maskId}>
          <rect width="64" height="64" fill="white" />
          <path d="M13 68L32 17L51 68" fill="none" stroke="black" strokeWidth="6" strokeLinejoin="miter" />
        </mask>
      </defs>
      <circle cx="32" cy="32" r="30" fill="currentColor" mask={`url(#${maskId})`} />
    </svg>
  );
}

/** Mark and lowercase wordmark, used in the header and footer. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className="h-7 w-7 text-red" />
      <span className="text-[1.35rem] font-normal tracking-tight lowercase">aquila</span>
    </span>
  );
}
