"use client";

import { useEffect, useState } from "react";
import { contact, nav, site, ui } from "@/content/site";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with Escape or when the viewport widens.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onResize = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [open]);

  const links = nav.filter((item) => item.href !== "#contact");

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        <a href="#top" className="text-ink" aria-label={`${site.name}, ${ui.backToTop}`}>
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {links.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-[0.95rem] text-ink-soft lowercase transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-flex h-10 items-center rounded-full bg-red px-5 text-[0.95rem] text-white lowercase transition-colors hover:bg-red-deep"
              >
                {contact.label}
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? ui.closeMenu : ui.openMenu}</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 9h16M4 15h16" />}
          </svg>
        </button>
      </div>

      <nav id="mobile-nav" aria-label="Primary" className={`border-t border-line/70 lg:hidden ${open ? "block" : "hidden"}`}>
        <ul className="px-4 py-4 sm:px-8">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-3xl font-light tracking-tight text-ink lowercase"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
