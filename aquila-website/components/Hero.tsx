import { hero, site } from "@/content/site";
import { KeynotePanel, panelButton } from "./KeynotePanel";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-canvas">
      <KeynotePanel headingId="hero-heading" title={site.shortName} subtitle={site.nameSuffix}>
        <a href={hero.primaryCta.href} className={panelButton.primary}>
          {hero.primaryCta.label}
          <span aria-hidden="true">→</span>
        </a>
        <a href={hero.secondaryCta.href} className={`${panelButton.secondary} hidden lg:inline-flex`}>
          {hero.secondaryCta.label}
        </a>
      </KeynotePanel>
    </section>
  );
}
