import "./globals.css";

import type { Metadata } from "next";

const siteUrl = "https://claudioferreira.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Claudio Ferreira | Frontend Engineer",
    template: "%s | Claudio Ferreira",
  },

  description:
    "Personal website of Claudio Ferreira, Frontend Engineer exploring technology, software development, projects and new ideas.",

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
      "Projects, experiments and thoughts about technology, software development and the web.",
    url: siteUrl,
    siteName: "Claudio Ferreira",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Claudio Ferreira | Frontend Engineer",
    description:
      "Projects, experiments and thoughts about technology, software development and the web.",
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
      <body>{children}</body>
    </html>
  );
}