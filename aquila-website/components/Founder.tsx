import { founder, ui } from "@/content/site";
import { Avatar } from "./Avatar";
import { LinkedInIcon } from "./LinkedInIcon";

export function Founder() {
  return (
    <section id="founder" aria-labelledby="founder-heading" className="bg-canvas">
      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-8 sm:pb-32">
        <div className="rounded-[1.75rem] bg-cloud p-7 sm:p-12 lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 id="founder-heading" className="flex items-center gap-2.5 text-sm text-ink-soft lowercase">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-red" />
              {founder.label}
            </h2>
            <Avatar name={founder.name} photo={founder.photo} className="mt-8 h-28 w-28 text-3xl sm:h-36 sm:w-36 sm:text-4xl" />
            <h3 className="mt-6 text-3xl leading-tight font-light tracking-tight text-ink">{founder.name}</h3>
            <p className="mt-1 text-ink-muted lowercase">{founder.role}</p>
            {founder.linkedin ? (
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm text-ink transition-colors hover:text-red"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
                <span className="sr-only">
                  {" "}
                  {founder.name}, {ui.onLinkedIn} ({ui.newTab})
                </span>
              </a>
            ) : null}
          </div>
          <div className="mt-10 space-y-5 text-lg leading-relaxed text-ink-soft lg:col-span-8 lg:mt-0">
            {founder.paragraphs.map((p, i) => (
              <p key={p} className={i === 0 ? "text-2xl leading-snug font-light tracking-tight text-ink" : undefined}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
