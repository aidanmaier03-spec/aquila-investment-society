export const gradients = ["g-sage-sky", "g-lavender-peach", "g-mint-cream", "g-sky-lavender", "g-peach-sage"];

function initials(name: string) {
  const words = name.replace(/[^\p{L}\s]/gu, "").trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "";
  return (words[0][0] + (words.length > 1 ? words[words.length - 1][0] : "")).toLowerCase();
}

type AvatarProps = { name: string; photo?: string; index?: number; className?: string };

/**
 * Circular profile image. Shows the photo when one is set, otherwise the
 * person's initials on a soft gradient (or an empty gradient for open positions).
 * Decorative: the name is always written beside it.
 */
export function Avatar({ name, photo, index = 0, className }: AvatarProps) {
  if (photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={photo}
        alt=""
        loading="lazy"
        decoding="async"
        className={`shrink-0 rounded-full bg-cloud object-cover ${className ?? ""}`}
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className={`${gradients[index % gradients.length]} inline-flex shrink-0 items-center justify-center rounded-full font-light tracking-tight text-ink ${className ?? ""}`}
    >
      {initials(name)}
    </span>
  );
}
