import { footer, nav, site } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-canvas text-ink">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-8">
        <div aria-hidden="true" className="g-ribbon h-1.5 rounded-full" />

        <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo />
            <p lang="la" className="mt-3 text-red">
              {site.motto}
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-7 gap-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-ink-soft lowercase transition-colors hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 grid gap-6 border-t border-line pt-8 text-sm leading-relaxed text-ink-muted lg:grid-cols-12">
          <p className="lg:col-span-4">
            © {year} {site.name}
          </p>
          <p className="lg:col-span-8">{footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
