import { Section } from "@/components/ui/Section";
import { experience } from "@/lib/site";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative flex flex-col gap-10 border-l border-border pl-8">
        {experience.map((item, i) => (
          <li key={`${item.company}-${i}`} className="relative">
            <span
              className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-base font-semibold tracking-tight text-text">
                  {item.title}
                </h3>
                <span className="text-sm font-medium text-accent">
                  {item.company}
                </span>
              </div>
              <span className="font-mono text-xs text-text-muted sm:whitespace-nowrap">
                {item.date}
              </span>
            </div>
            <ul className="mt-3 flex flex-col gap-2">
              {item.bullets.map((bullet, j) => (
                <li
                  key={j}
                  className="flex gap-2.5 text-sm leading-relaxed text-text-muted"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-muted" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
