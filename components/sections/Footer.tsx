import { identity } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ paddingInline: "var(--gutter)" }} className="pb-10">
      <div className="mx-auto max-w-[var(--content-max)] border-t border-border pt-8">
        <div className="flex flex-col items-center gap-4 text-sm text-text-muted sm:flex-row sm:justify-between">
          <span>
            © {year} {identity.name}
          </span>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${identity.email}`}
              className="transition-colors duration-[var(--transition)] hover:text-accent"
            >
              Email
            </a>
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-[var(--transition)] hover:text-accent"
            >
              GitHub
            </a>
            {identity.linkedin && (
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-[var(--transition)] hover:text-accent"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
