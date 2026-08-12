import { Section } from "@/components/ui/Section";
import { projects, type Project } from "@/lib/site";

function ProjectCardBody({ project }: { project: Project }) {
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight text-text">
          {project.name}
        </h3>
        {project.href && (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="mt-1 shrink-0 text-text-muted transition-all duration-[var(--transition)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        )}
      </div>

      {project.period && (
        <span className="font-mono text-xs text-text-muted">
          {project.period}
        </span>
      )}

      <p className="flex-1 text-sm leading-relaxed text-text-muted">
        {project.description}
      </p>

      <div className="flex flex-wrap items-center gap-2">
        {project.homepage && (
          <span className="rounded-[6px] bg-accent-soft px-2.5 py-1 font-mono text-xs font-medium text-accent">
            Live
          </span>
        )}
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[6px] border border-border px-2.5 py-1 font-mono text-xs text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects" variant="subtle">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) =>
          project.href ? (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 rounded-[var(--radius)] border border-border bg-bg p-6 transition-all duration-[var(--transition)] hover:-translate-y-1 hover:border-accent hover:shadow-[0_12px_32px_var(--shadow)]"
            >
              <ProjectCardBody project={project} />
            </a>
          ) : (
            <div
              key={project.id}
              className="flex flex-col gap-3 rounded-[var(--radius)] border border-border bg-bg p-6"
            >
              <ProjectCardBody project={project} />
            </div>
          )
        )}
      </div>
    </Section>
  );
}
