import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { contact, mission, site, ui } from "@/content/site";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const title = `${site.name} | ${site.motto}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  formatDetection: { email: false, telephone: false, address: false },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: site.name,
    title,
    description: mission.statement,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.name}. ${site.motto}.` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: mission.statement,
    images: ["/og.png"],
  },
  icons: { apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.shortName,
  slogan: site.motto,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  description: site.description,
  ...(contact.email.includes("@") ? { email: contact.email } : {}),
  ...(contact.linkedin.startsWith("http") ? { sameAs: [contact.linkedin] } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={sans.variable}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-red focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          {ui.skipLink}
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
