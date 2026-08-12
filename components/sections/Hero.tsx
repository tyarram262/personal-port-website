import { identity } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="pt-32 pb-16 sm:pt-40 sm:pb-20"
      style={{ paddingInline: "var(--gutter)", scrollMarginTop: "5rem" }}
    >
      <div className="mx-auto flex w-full max-w-[var(--content-max)] flex-col items-center gap-10 text-center md:flex-row md:items-center md:text-left">
        <div className="flex-1">
          <h1 className="text-name font-extrabold tracking-tight text-text">
            {identity.name}
          </h1>
          <p className="mt-3 text-lg font-semibold tracking-tight text-text-muted">
            {identity.title}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lead text-text-muted md:mx-0">
            {identity.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href={`mailto:${identity.email}`}
              className="inline-flex items-center justify-center rounded-[var(--radius-sm)] bg-accent px-6 py-3 text-sm font-medium text-white transition-colors duration-[var(--transition)] hover:bg-accent-hover"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-[var(--radius-sm)] border border-border px-6 py-3 text-sm font-medium text-text transition-colors duration-[var(--transition)] hover:border-accent hover:text-accent"
            >
              View my work
            </a>
            <a
              href={identity.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center rounded-[var(--radius-sm)] border border-border px-6 py-3 text-sm font-medium text-text transition-colors duration-[var(--transition)] hover:border-accent hover:text-accent"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Résumé
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-text-muted md:justify-start">
            <a
              href={`mailto:${identity.email}`}
              className="transition-colors duration-[var(--transition)] hover:text-accent"
            >
              {identity.email}
            </a>
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-[var(--transition)] hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-[var(--transition)] hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {identity.headshot && (
          <div className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={identity.headshot}
              alt={identity.name}
              className="h-44 w-44 rounded-[var(--radius)] border border-border object-cover shadow-[0_8px_32px_var(--shadow-lg)] sm:h-64 sm:w-64"
            />
          </div>
        )}
      </div>
    </section>
  );
}
