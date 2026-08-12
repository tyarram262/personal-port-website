import { Section } from "@/components/ui/Section";
import { certifications, skills } from "@/lib/site";

export function Skills() {
  return (
    <Section id="skills" title="Technical skills" variant="subtle">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.label}
            className="rounded-[var(--radius)] border border-border bg-bg p-6"
          >
            <h3 className="border-b border-border pb-3 text-sm font-semibold text-text">
              {group.label}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-[6px] border border-border bg-bg-subtle px-2.5 py-1 font-mono text-xs text-text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-[var(--radius)] border border-border bg-bg p-6">
        <h3 className="border-b border-border pb-3 text-sm font-semibold text-text">
          Certifications
        </h3>
        <ul className="mt-4 flex flex-col gap-2">
          {certifications.map((cert) => (
            <li key={cert} className="flex gap-2.5 text-sm text-text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-muted" aria-hidden="true" />
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
