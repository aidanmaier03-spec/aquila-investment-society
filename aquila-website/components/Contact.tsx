import { contact, ui } from "@/content/site";
import { ContactForm } from "./ContactForm";
import { SectionHeading } from "./SectionHeading";

/** A gradient panel with the form floating on it as a translucent white card. */
export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-canvas">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
        <div className="g-sky-lavender grid gap-10 rounded-[1.75rem] p-6 sm:rounded-[2.25rem] sm:p-12 lg:grid-cols-12 lg:gap-12 lg:p-16">
          <div className="lg:col-span-5">
            <SectionHeading id="contact-heading" label={contact.label} heading={contact.heading} intro={contact.intro} />

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-sm text-ink-soft lowercase">{contact.emailLabel}</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-2xl font-light tracking-tight break-all text-ink underline decoration-ink/25 underline-offset-[6px] transition-colors hover:decoration-red"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-ink-soft lowercase">{contact.linkedinLabel}</dt>
                <dd className="mt-1">
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-light tracking-tight text-ink underline decoration-ink/25 underline-offset-[6px] transition-colors hover:decoration-red"
                  >
                    {contact.linkedinText}
                    <span className="sr-only"> ({ui.newTab})</span>
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[1.5rem] bg-white/85 p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_20px_48px_-20px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
