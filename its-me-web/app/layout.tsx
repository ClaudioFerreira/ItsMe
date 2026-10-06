import "./globals.css";

import type { Metadata } from "next";

const siteUrl = "https://claudioferreira.tech";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Claudio Ferreira",
  url: siteUrl,
  jobTitle: "Frontend Engineer",
  sameAs: [
    "https://www.linkedin.com/in/claudio-hferreira/",
    "https://github.com/ClaudioFerreira",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Claudio Ferreira",
  url: siteUrl,
  description:
    "Personal website of Claudio Ferreira, Frontend Engineer exploring technology, software development and new ideas.",
  author: {
    "@type": "Person",
    name: "Claudio Ferreira",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Claudio Ferreira | Frontend Engineer",
    template: "%s | Claudio Ferreira",
  },

  description:
    "Personal website of Claudio Ferreira, Frontend Engineer exploring technology, software development and new ideas.",

  applicationName: "Claudio Ferreira",

  authors: [
    {
      name: "Claudio Ferreira",
      url: siteUrl,
    },
  ],

  creator: "Claudio Ferreira",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Claudio Ferreira | Frontend Engineer",
    description:
      "Building things for the web. Projects, experiments and thoughts about technology.",
    url: siteUrl,
    siteName: "Claudio Ferreira",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Claudio Ferreira — Frontend Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Claudio Ferreira | Frontend Engineer",
    description:
      "Building things for the web. Projects, experiments and thoughts about technology.",
    images: ["/og-image.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]),
          }}
        />
      </body>
    </html>
  );
}