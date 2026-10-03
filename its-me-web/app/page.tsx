
const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/claudio-hferreira/",
  },
  {
    label: "GitHub",
    href: "https://github.com/ClaudioFerreira",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="page-shell pt-8 sm:pt-10">
        <div className="flex items-center justify-between">
          <a
            href="/"
            aria-label="Claudio Ferreira - início"
            className="display-font text-lg font-semibold tracking-tight"
          >
            CF<span style={{ color: "var(--color-rust)" }}>.</span>
          </a>

          <span className="eyebrow text-[#777a73]">
            Personal website
          </span>
        </div>

        <div className="decorative-line mt-6" />
      </header>

      <section className="page-shell flex flex-1 flex-col justify-center py-20 sm:py-28">
        <div className="mb-10 flex items-center gap-3">
          <span className="status-dot" />

          <span className="eyebrow text-[#777a73]">
            Currently building something
          </span>
        </div>

        <h1 className="hero-title">
          Hello,
          <span>I&apos;m Claudio.</span>
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_300px] md:items-end">
          <div>
            <p className="display-font max-w-2xl text-2xl font-medium leading-snug sm:text-3xl">
              Frontend Engineer
              <br />
              building things for the web.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#777a73] sm:text-lg">
              Exploring ideas, building products and sharing
              experiences through code.
            </p>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="journal-link"
                >
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>

          <aside className="border-l border-[#151719]/15 pl-5">
            <p className="eyebrow text-[#777a73]">
              A note from Claudio
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#555850]">
              This little corner of the internet is under
              construction.
              <br />
              <br />
              Soon, it will be a place for projects,
              experiments and thoughts about technology.
            </p>
          </aside>
        </div>

        <div className="decorative-line mt-20 sm:mt-28" />

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <span className="eyebrow text-[#777a73]">
            Developer&apos;s Journal — 001
          </span>

          <span className="mono-font text-xs text-[#777a73]">
            Made with curiosity & coffee
          </span>
        </div>
      </section>

      <footer className="page-shell pb-8">
        <div className="decorative-line mb-5" />

        <div className="flex flex-wrap justify-between gap-3">
          <span className="text-xs text-[#777a73]">
            © {new Date().getFullYear()} Claudio Ferreira
          </span>

          <span className="text-xs text-[#777a73]">
            Sorocaba, Brazil <span aria-hidden="true">·</span> v1.0.1
          </span>
        </div>
      </footer>
    </main>
  );
}