type SectionHeadingProps = {
  id: string;
  label: string;
  heading: string;
  intro?: string;
};

/** Red dot label, light lowercase heading and optional intro. */
export function SectionHeading({ id, label, heading, intro }: SectionHeadingProps) {
  return (
    <header className="max-w-3xl">
      <p className="flex items-center gap-2.5 text-sm text-ink-soft lowercase">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-red" />
        {label}
      </p>
      <h2
        id={id}
        className="mt-5 text-4xl leading-[1.05] font-light tracking-tight text-balance text-ink lowercase sm:text-6xl"
      >
        {heading}
      </h2>
      {intro ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p> : null}
    </header>
  );
}
