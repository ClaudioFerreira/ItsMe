
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claudio Ferreira | Frontend Engineer",
  description:
    "Personal website of Claudio Ferreira. Frontend Engineer exploring technology, software development and new ideas.",
  metadataBase: new URL("https://claudioferreira.tech"),
  openGraph: {
    title: "Claudio Ferreira | Frontend Engineer",
    description:
      "Building things for the web. Projects, experiments and thoughts about technology.",
    url: "https://claudioferreira.tech",
    siteName: "Claudio Ferreira",
    locale: "en_US",
    type: "website",
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