import type { ReactNode } from "react";
import { LogoMark } from "./Logo";

type KeynotePanelProps = {
  headingId: string;
  title: string;
  subtitle: string;
  /** Buttons shown under the title, inside the panel. */
  children?: ReactNode;
};

/**
 * The keynote-style panel used by the hero and the 404 page: soft gradient,
 * translucent white disc, and two thin hairlines crossing the composition.
 * Its height is capped to the viewport so the buttons inside stay above the fold.
 */
export function KeynotePanel({ headingId, title, subtitle, children }: KeynotePanelProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-8 sm:pt-8">
      <div className="g-sage-sky relative flex min-h-[max(21rem,min(26rem,calc(100svh_-_7rem)))] items-center justify-center overflow-hidden rounded-[1.75rem] sm:min-h-[max(24rem,min(32rem,calc(100svh_-_8rem)))] sm:rounded-[2.25rem] lg:min-h-[max(26rem,min(38rem,calc(100svh_-_8rem)))]">
        {/*
          Two-column grid: the disc sits beside the title in the first row, the
          buttons get their own row underneath, so the disc stays centred on the
          name and the buttons always count towards the width.
        */}
        <div className="grid grid-cols-[auto_auto] items-center">
          <LogoMark className="anim-disc col-start-1 row-start-1 h-24 w-24 text-white/90 sm:h-40 sm:w-40 lg:h-52 lg:w-52" />

          {/* Vertical hairline, running the full height of the panel */}
          <span aria-hidden="true" className="relative col-start-2 row-span-2 row-start-1 ml-5 self-stretch sm:ml-9">
            <span className="anim-line-y absolute -top-[100vh] -bottom-[100vh] left-0 w-px bg-white/80" />
          </span>

          <h1
            id={headingId}
            className="col-start-2 row-start-1 ml-5 pl-5 font-light tracking-tight text-white lowercase sm:ml-9 sm:pl-9"
          >
            <span className="anim-drop relative block text-5xl leading-none sm:text-7xl lg:text-8xl">
              {title}
              {/* Horizontal hairline, from the left edge of the panel to the vertical line */}
              <span
                aria-hidden="true"
                className="anim-line-x absolute right-full bottom-[0.14em] mr-5 h-px w-[100vw] bg-white/80 sm:mr-9"
              />
            </span>{" "}
            <span className="anim-slide mt-2 block text-xl leading-tight sm:mt-3 sm:text-3xl lg:text-4xl">
              {subtitle}
            </span>
          </h1>

          {children ? (
            <div className="anim-fade col-start-2 row-start-2 mt-6 ml-5 flex gap-3 pl-5 whitespace-nowrap sm:mt-8 sm:ml-9 sm:pl-9">
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/** Pill buttons for use inside the panel. */
export const panelButton = {
  primary:
    "inline-flex h-11 items-center gap-2 rounded-full bg-red px-6 text-white lowercase transition-colors hover:bg-red-deep sm:h-12 sm:px-7",
  /** Pair with a display class, e.g. "hidden lg:inline-flex". */
  secondary:
    "h-11 items-center rounded-full bg-white/75 px-6 text-ink lowercase backdrop-blur transition-colors hover:bg-white sm:h-12 sm:px-7",
};
