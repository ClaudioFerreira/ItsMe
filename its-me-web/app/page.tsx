
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

const projects = [
  {
    name: "ItsMe",
    type: "Personal website & developer journal",
    description:
      "A personal space to share my work, projects, ideas and things I’m learning.",
    stack: ["Next.js", "TypeScript", "Docker", "GitHub Actions"],
    href: "https://github.com/ClaudioFerreira/ItsMe",
  },
  {
    name: "Bigodon",
    type: "Pet adoption platform",
    description:
      "A personal project exploring a simple and friendly way to connect people with pets looking for a home.",
    stack: ["Angular", "Firebase"],
    href: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header / Navigation */}
      <header className="page-shell pt-8 sm:pt-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#top"
            aria-label="Claudio Ferreira - início"
            className="display-font text-lg font-semibold tracking-tight"
          >
            CF<span style={{ color: "var(--color-rust)" }}>.</span>
          </a>

          <nav
            aria-label="Main navigation"
            className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-7"
          >
            <a href="#about" className="journal-link">
              About
            </a>

            <a href="#work" className="journal-link">
              Work
            </a>

            <a href="#journal" className="journal-link">
              Journal
            </a>

            <a href="#contact" className="journal-link">
              Let&apos;s talk
            </a>
          </nav>
        </div>

        <div className="decorative-line mt-6" />
      </header>

      {/* Hero */}
      <section
        id="top"
        className="page-shell flex min-h-[calc(100vh-110px)] flex-col justify-center py-20 sm:py-28"
      >
        <div className="mb-10 flex items-center gap-3">
          <span className="status-dot" />

          <span className="eyebrow text-[#777a73]">
            Frontend Engineer · Sorocaba, Brazil
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
              building thoughtful digital experiences.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#777a73] sm:text-lg">
              Exploring ideas, building products and sharing experiences
              through code.
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

              <a href="#contact" className="journal-link">
                Let&apos;s talk
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <aside className="border-l border-[#151719]/15 pl-5">
            <p className="eyebrow text-[#777a73]">A note from Claudio</p>

            <p className="mt-4 text-sm leading-relaxed text-[#555850]">
              This is my little corner of the internet — a place for work,
              projects, experiments and thoughts about technology.
            </p>
          </aside>
        </div>
      </section>

      {/* About */}
      <section id="about" className="page-shell scroll-mt-10 py-24 sm:py-32">
        <div className="decorative-line mb-10" />

        <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-16">
          <div>
            <p className="eyebrow text-[#777a73]">About</p>
          </div>

          <div className="max-w-3xl">
            <h2 className="display-font text-3xl font-medium tracking-tight sm:text-5xl">
              Beyond the code.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-[#777a73] sm:text-lg">
              <p>
                I&apos;m a Frontend Engineer who enjoys turning ideas into
                thoughtful digital experiences.
              </p>

              <p>
                I&apos;m driven by curiosity, continuous learning, and a
                passion for building things that are both useful and
                meaningful. Alongside my professional work, I enjoy exploring
                new technologies and bringing personal projects to life.
              </p>

              <p>
                I believe good software starts with understanding the problem,
                caring about the details, and always being open to learning
                something new.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="page-shell scroll-mt-10 py-24 sm:py-32">
        <div className="decorative-line mb-10" />

        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-[#777a73]">Selected Work</p>

            <h2 className="display-font mt-3 text-3xl font-medium tracking-tight sm:text-5xl">
              Things I&apos;ve built.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-[#777a73]">
            A small selection of professional and personal projects. More will
            find their way here over time.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group flex min-h-[320px] flex-col justify-between border border-[#151719]/15 p-6 transition-colors duration-200 hover:bg-[#e7e4da] sm:p-8"
            >
              <div>
                <div className="mb-10 flex items-center justify-between gap-4">
                  <span className="mono-font text-xs text-[#777a73]">
                    0{index + 1}
                  </span>

                  <span className="eyebrow text-[#777a73]">
                    In development
                  </span>
                </div>

                <h3 className="display-font text-2xl font-medium tracking-tight sm:text-3xl">
                  {project.name}
                </h3>

                <p className="mt-2 text-sm text-[#777a73]">
                  {project.type}
                </p>

                <p className="mt-6 max-w-md text-sm leading-relaxed text-[#555850] sm:text-base">
                  {project.description}
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-5">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="mono-font border border-[#151719]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.08em] text-[#777a73]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {project.href !== "#" ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="journal-link w-fit"
                  >
                    View project
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="mono-font text-xs uppercase tracking-[0.08em] text-[#777a73]">
                    Coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Developer's Journal */}
      <section
        id="journal"
        className="page-shell scroll-mt-10 py-24 sm:py-32"
      >
        <div className="decorative-line mb-10" />

        <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-16">
          <div>
            <p className="eyebrow text-[#777a73]">Developer&apos;s Journal</p>
          </div>

          <div className="border border-[#151719]/15 p-7 sm:p-10">
            <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <h2 className="display-font text-3xl font-medium tracking-tight sm:text-5xl">
                  Notes, experiments &amp; things I&apos;m learning.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-[#777a73] sm:text-lg">
                  A space for software, experiments, lessons learned and
                  thoughts collected along the way.
                </p>
              </div>

              <span className="mono-font shrink-0 text-xs uppercase tracking-[0.08em] text-[#777a73]">
                Coming soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="page-shell scroll-mt-10 py-24 sm:py-32">
        <div className="decorative-line mb-10" />

        <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-16">
          <div>
            <p className="eyebrow text-[#777a73]">Let&apos;s talk</p>
          </div>

          <div className="max-w-3xl">
            <h2 className="display-font text-3xl font-medium tracking-tight sm:text-5xl">
              Have something in mind?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#777a73] sm:text-lg">
              I&apos;m open to meaningful conversations, collaborations and
              selected freelance projects.
            </p>

            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#777a73] sm:text-lg">
              I&apos;m also always happy to connect around interesting
              opportunities and ideas.
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
        </div>
      </section>

      {/* Footer */}
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