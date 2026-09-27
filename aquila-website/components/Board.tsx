import { board, ui } from "@/content/site";
import { Avatar } from "./Avatar";
import { LinkedInIcon } from "./LinkedInIcon";
import { SectionHeading } from "./SectionHeading";

/** Lowercases a role for display but keeps acronyms such as "AI" in capitals. */
function displayRole(role: string) {
  return role
    .split(" ")
    .map((word) => (/^[A-Z]{2,}$/.test(word) ? word : word.toLowerCase()))
    .join(" ");
}

/** Profile cards for the executive board. Positions without a name show as "To be announced". */
export function Board() {
  return (
    <section id="board" aria-labelledby="board-heading" className="bg-cloud">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-8 sm:py-32">
        <SectionHeading id="board-heading" label={board.label} heading={board.heading} intro={board.intro} />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {board.members.map((member, i) => {
            const vacant = !member.name.trim();
            return (
              <li key={`${member.role}-${i}`} className="flex flex-col rounded-[1.75rem] bg-white p-7">
                <div className="flex items-start justify-between">
                  <Avatar name={member.name} photo={member.photo} index={i} className="h-20 w-20 text-2xl" />
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="-mt-1 -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-cloud hover:text-ink"
                    >
                      <LinkedInIcon className="h-[1.125rem] w-[1.125rem]" />
                      <span className="sr-only">
                        {member.name}, {member.role}, {ui.onLinkedIn} ({ui.newTab})
                      </span>
                    </a>
                  ) : null}
                </div>
                <p className="mt-6 text-sm text-red">{displayRole(member.role)}</p>
                <h3 className={`mt-1 text-2xl font-light tracking-tight ${vacant ? "text-ink-muted" : "text-ink"}`}>
                  {vacant ? ui.toBeAnnounced : member.name}
                </h3>
                {member.bio ? <p className="mt-3 leading-relaxed text-ink-soft">{member.bio}</p> : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
