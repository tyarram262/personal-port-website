import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  variant?: "default" | "subtle";
};

export function Section({ id, title, children, variant = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={variant === "subtle" ? "bg-bg-subtle" : undefined}
      style={{ scrollMarginTop: "5rem" }}
    >
      <div
        className="mx-auto w-full max-w-[var(--content-max)] py-16 sm:py-20"
        style={{ paddingInline: "var(--gutter)" }}
      >
        <h2 className="relative pb-4 text-h2 font-bold tracking-tight text-text after:absolute after:bottom-0 after:left-0 after:h-1 after:w-12 after:rounded-full after:bg-accent">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
