import { mission, site } from "@/content/site";

/** Mission statement, motto and objective, directly beneath the hero panel. */
export function Mission() {
  return (
    <section id="mission" aria-labelledby="mission-heading" className="bg-canvas">
      <div className="anim-fade mx-auto grid max-w-7xl gap-10 px-4 pt-14 pb-24 sm:px-8 sm:pt-20 sm:pb-32 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 id="mission-heading" className="flex items-center gap-2.5 text-sm text-ink-soft lowercase">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-red" />
            {mission.label}
          </h2>
          <p lang="la" className="mt-6 text-4xl font-light tracking-tight text-red sm:text-5xl">
            {site.motto}
          </p>
          <p className="mt-2 text-ink-muted lowercase">{site.mottoTranslation}</p>
        </div>

        <div className="lg:col-span-7">
          <p className="text-3xl leading-snug font-light tracking-tight text-ink sm:text-4xl">{mission.statement}</p>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{mission.summary}</p>

          <div className="g-lavender-peach mt-10 rounded-[1.75rem] p-7 sm:p-9">
            <h3 className="flex items-center gap-2.5 text-sm text-ink-soft lowercase">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-red" />
              {mission.objective.label}
            </h3>
            <p className="mt-4 text-2xl leading-snug font-light tracking-tight text-ink sm:text-3xl">
              {mission.objective.statement}
            </p>
          </div>

          <a
            href={mission.cta.href}
            className="mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-red px-7 text-white lowercase transition-colors hover:bg-red-deep"
          >
            {mission.cta.label}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
