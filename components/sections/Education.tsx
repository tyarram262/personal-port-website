import { Section } from "@/components/ui/Section";
import { education, publication } from "@/lib/site";

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="flex flex-col gap-5">
        {education.map((deg) => (
          <div
            key={deg.school}
            className="rounded-[var(--radius)] border border-border bg-bg p-6"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-base font-semibold tracking-tight text-text">
                  {deg.school}
                </h3>
                <span className="text-sm font-medium text-accent">
                  {deg.degree}
                </span>
              </div>
              <span className="font-mono text-xs text-text-muted sm:whitespace-nowrap">
                {deg.date}
              </span>
            </div>
            {deg.gpa && (
              <p className="mt-2 text-sm text-text-muted">GPA: {deg.gpa}</p>
            )}
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              <span className="font-medium text-text">Coursework:</span>{" "}
              {deg.coursework.join(", ")}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-[var(--radius)] border border-dashed border-border p-6">
        <h3 className="text-sm font-semibold text-text">Publication</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          {publication.citation}
        </p>
      </div>
    </Section>
  );
}
