import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import { identity, education } from "@/lib/site";
import "./globals.css";

const SITE_URL = "https://tanush-yarram-portfolio.vercel.app";

const THEME_INIT_SCRIPT = `
  (function () {
    try {
      var stored = localStorage.getItem("theme");
      var theme = stored === "dark" || stored === "light"
        ? stored
        : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      document.documentElement.dataset.theme = theme;
    } catch (e) {}
  })();
`;

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const description =
  "Software engineer at Visa building API gateways, event-driven services, and observability tooling. Projects, experience, and education.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tanush Yarram — Software Engineer",
  description,
  openGraph: {
    title: "Tanush Yarram — Software Engineer",
    description,
    url: SITE_URL,
    siteName: "Tanush Yarram",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanush Yarram — Software Engineer",
    description,
    images: ["/opengraph-image"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: identity.name,
  jobTitle: identity.title,
  email: identity.email,
  url: SITE_URL,
  sameAs: [identity.github, identity.linkedin].filter(Boolean),
  alumniOf: education.map((deg) => ({
    "@type": "CollegeOrUniversity",
    name: deg.school,
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-[var(--radius-sm)] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
