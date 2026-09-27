import { features, performance, ui } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

/**
 * PERFORMANCE PANEL: HIDDEN BY DEFAULT.
 *
 * Renders nothing unless `features.showPerformance` is true in content/site.ts.
 * Figures are edited in `performance` in the same file. When enabling,
 * also add { label: "Performance", href: "#performance" } to `nav` if wanted.
 */
export function Performance() {
  if (!features.showPerformance) return null;

  return (
    <section id="performance" aria-labelledby="performance-heading" className="bg-canvas">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-8 sm:py-32">
        <SectionHeading id="performance-heading" label={performance.label} heading={performance.heading} />
        <dl className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {performance.metrics.map((m) => (
            <div key={m.label} className="rounded-[1.75rem] border border-line p-7">
              <dt className="text-sm text-ink-muted lowercase">{m.label}</dt>
              <dd className="mt-4 text-4xl font-light tracking-tight tabular-nums">{m.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm text-ink-muted">
          {ui.asOf} {performance.asOf}. {performance.note}
        </p>
      </div>
    </section>
  );
}
