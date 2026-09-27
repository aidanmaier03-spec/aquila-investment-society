/**
 * All website copy and settings live in this file.
 * Edit text here; the components read from it and never need to change.
 *
 * House style: British spelling, no em or en dashes, no exclamation marks and
 * none of the banned words in scripts/check-copy.mjs. Run `npm run check:copy` after editing.
 */

// ---------------------------------------------------------------------------
// Site settings
// ---------------------------------------------------------------------------

export const site = {
  name: "Aquila Investment Society",
  shortName: "Aquila",
  nameSuffix: "Investment Society",
  motto: "Signum Ferimus",
  mottoTranslation: "We carry the standard",
  // TODO: replace with the production domain before launch (used for SEO and Open Graph).
  url: "https://aquila-investment-society.vercel.app",
  description:
    "Aquila Investment Society is a selective, student-led investment society open to university and high school students anywhere, researching and managing a portfolio with discipline and rigorous risk control.",
  keywords: [
    "Aquila Investment Society",
    "investment society",
    "student-led investment society",
    "student managed fund",
    "equity research",
  ],
};

// ---------------------------------------------------------------------------
// Feature switches
// ---------------------------------------------------------------------------

export const features = {
  /**
   * PERFORMANCE PANEL: HIDDEN.
   * Set to true only once figures have been reviewed and approved for publication.
   * The figures themselves are edited in `performance` below.
   */
  showPerformance: false,
};

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const nav = [
  { label: "Mission", href: "#mission" },
  { label: "Founder", href: "#founder" },
  { label: "Board", href: "#board" },
  { label: "Contact", href: "#contact" },
];

// ---------------------------------------------------------------------------
// Interface labels (mostly read by screen readers)
// ---------------------------------------------------------------------------

export const ui = {
  skipLink: "Skip to content",
  backToTop: "back to top",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  newTab: "opens in a new tab",
  onLinkedIn: "on LinkedIn",
  toBeAnnounced: "To be announced",
  asOf: "As of",
};

// ---------------------------------------------------------------------------
// Hero (buttons inside the opening panel, visible without scrolling)
// ---------------------------------------------------------------------------

export const hero = {
  primaryCta: { label: "Get in touch", href: "#contact" },
  // Shown from laptop width upwards.
  secondaryCta: { label: "Meet the board", href: "#board" },
};

// ---------------------------------------------------------------------------
// Mission
// ---------------------------------------------------------------------------

export const mission = {
  label: "Our mission",
  statement:
    "We research, debate and invest with the patience of long-term owners and the discipline of risk managers.",
  summary:
    "Aquila is a selective, student-led investment society, open to university and high school students anywhere. Members research public equities, pitch to their peers and manage a portfolio under written risk rules.",
  objective: {
    label: "Our objective",
    statement:
      "To outperform the S&P 500 on a risk-adjusted basis over rolling three-year periods.",
  },
  cta: { label: "Get in touch", href: "#contact" },
};

// ---------------------------------------------------------------------------
// Founder
// Photo: put a square image (at least 400 x 400) in public/board/ and set
// `photo` to its path, e.g. "/board/aidan-maier.jpg". Leave empty for initials.
// ---------------------------------------------------------------------------

export const founder = {
  label: "About the founder",
  name: "Aidan Longford Maier",
  role: "Founder and President",
  linkedin: "https://www.linkedin.com/in/aidan-maier-456b92438",
  photo: "",
  // One entry per paragraph. The first is shown slightly larger as an introduction.
    paragraphs: [
      "Aidan was born in Rome and grew up between Italy, South Africa and Nigeria, studying in the French education system before completing the International Baccalaureate Certificate Programme at St George’s in Rome.",
      "Aidan had an affinity for politics, which grew into a passion for markets and economics. To him, the two remain inseparable.",
      "Chairing Model United Nations conferences and goalkeeping for his football team taught him that leadership means staying composed under pressure and protecting what others entrust to you.",
      "Aidan founded Aquila to build something from the ground up. Its name comes from the eagle standard of the Roman legion, which stood guard over the legion’s treasury. That remains the Society’s purpose: disciplined, patient stewardship of capital, measured honestly against the S&P 500.",
      "He studies Accounting and Business Decisions at the W. P. Carey School of Business, with a minor in Construction Management, and speaks English, French and Italian. He intends to build a career in finance and in service, and Aquila is where that begins.",
    ],
};

// ---------------------------------------------------------------------------
// Performance (hidden; see features.showPerformance)
// ---------------------------------------------------------------------------

export const performance = {
  label: "Performance",
  heading: "Performance",
  // TODO: complete with reviewed figures before enabling.
  asOf: "[Date]",
  metrics: [
    { label: "Annualised return", value: "[0.0%]" },
    { label: "S&P 500 (same period)", value: "[0.0%]" },
    { label: "Sharpe ratio", value: "[0.00]" },
    { label: "Maximum drawdown", value: "[0.0%]" },
  ],
  note: "Figures are unaudited and presented for educational purposes only. Past performance is not indicative of future results.",
};

// ---------------------------------------------------------------------------
// Executive board
// Add, remove or reorder members here.
//   name:     leave empty ("") to show the position as "To be announced"
//   linkedin: leave empty to hide the LinkedIn icon
//   photo:    square image in public/board/, e.g. "/board/jane-smith.jpg"
// ---------------------------------------------------------------------------

export const board = {
  label: "Leadership",
  heading: "Executive board",
  intro: "Further appointments will be announced shortly.",
  members: [
    {
      name: "Aidan Longford Maier",
      role: "President, Treasurer and Fundraiser",
      bio: "Accounting and Business Decisions, W. P. Carey School of Business. Speaks English, French and Italian.",
      linkedin: "https://www.linkedin.com/in/aidan-maier-456b92438",
      photo: "",
    },
    {
      name: "Jayce Rooney",
      role: "Vice President",
      bio: "Business Entrepreneurship, W. P. Carey School of Business. From Tucson, Arizona.",
      linkedin: "https://www.linkedin.com/in/jayce-rooney-3b5049407/",
      photo: "",
    },
    {
      name: "",
      role: "Chief Investment Officer",
      bio: "",
      linkedin: "",
      photo: "",
    },
    {
      name: "",
      role: "Head of Risk",
      bio: "",
      linkedin: "",
      photo: "",
    },
    {
      name: "",
      role: "Director of Research",
      bio: "",
      linkedin: "",
      photo: "",
    },
    {
      name: "",
      role: "Head of AI Trading",
      bio: "",
      linkedin: "",
      photo: "",
    },
  ],
};

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

export const contact = {
  label: "Contact",
  heading: "Get in touch",
  intro:
    "We welcome enquiries from prospective members and from industry professionals interested in the society.",
  emailLabel: "Email",
  // TODO: replace with the society's email address.
  email: "[EMAIL]",
  linkedinLabel: "LinkedIn",
  // TODO: replace with the society's LinkedIn page URL.
  linkedin: "[LINK]",
  linkedinText: "Aquila Investment Society",
  form: {
    /**
     * FORMSPREE ENDPOINT: REPLACE BEFORE LAUNCH.
     * 1. Create a free form at https://formspree.io
     * 2. Paste its endpoint below, e.g. "https://formspree.io/f/abcdwxyz"
     */
    endpoint: "https://formspree.io/f/YOUR_FORM_ID",
    fields: {
      name: "Name",
      email: "Email",
      message: "Message",
    },
    submit: "Send message",
    sending: "Sending",
    success: "Thank you. Your message has been sent and we will reply shortly.",
    error:
      "Your message could not be sent. Please try again or email us directly.",
    notConfigured:
      "The contact form is not yet connected. Please email us directly.",
  },
};

// ---------------------------------------------------------------------------
// 404 page
// ---------------------------------------------------------------------------

export const notFound = {
  code: "404",
  title: "Page not found",
  message: "The page you are looking for does not exist or has moved.",
  home: "Back to home",
  contact: "Contact us",
};

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export const footer = {
  // Must appear exactly as written.
  disclaimer:
    "Aquila Investment Society is a student organisation for educational purposes. Nothing on this website constitutes an offer to sell or a solicitation of an offer to buy any security. Past performance is not indicative of future results.",
};
