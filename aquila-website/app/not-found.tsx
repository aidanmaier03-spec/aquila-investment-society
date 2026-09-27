import type { Metadata } from "next";
import { KeynotePanel, panelButton } from "@/components/KeynotePanel";
import { Logo } from "@/components/Logo";
import { notFound, site } from "@/content/site";

// Overrides the site-wide "index, follow" so the 404 is never indexed.
export const metadata: Metadata = {
  title: notFound.title,
  robots: { index: false, follow: true },
};

/** Custom 404, exported as out/404.html. Links are absolute because this page can be served from any path. */
export default function NotFound() {
  return (
    <>
      <header className="border-b border-line/70 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-8">
          <a href="/" className="text-ink" aria-label={site.name}>
            <Logo />
          </a>
        </div>
      </header>
      <main id="main" tabIndex={-1} className="pb-16 focus:outline-none sm:pb-24">
        <KeynotePanel headingId="not-found-heading" title={notFound.code} subtitle={notFound.title}>
          <a href="/" className={panelButton.primary}>
            {notFound.home}
            <span aria-hidden="true">→</span>
          </a>
          <a href="/#contact" className={`${panelButton.secondary} hidden lg:inline-flex`}>
            {notFound.contact}
          </a>
        </KeynotePanel>
        <p className="mx-auto mt-10 max-w-7xl px-4 text-lg text-ink-soft sm:px-8">{notFound.message}</p>
      </main>
    </>
  );
}
