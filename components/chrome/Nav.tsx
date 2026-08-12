"use client";

import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/chrome/ThemeToggle";
import { useActiveSection } from "@/lib/useActiveSection";

const links = [
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#education", label: "Education", id: "education" },
  { href: "#skills", label: "Skills", id: "skills" },
];

const sectionIds = links.map((link) => link.id);

export function Nav() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div
        className="mx-auto flex h-16 max-w-[var(--content-max)] items-center justify-between gap-4"
        style={{ paddingInline: "var(--gutter)" }}
      >
        <a href="#top" className="shrink-0 font-semibold text-text">
          Tanush Yarram
        </a>

        <nav
          className="hidden items-center gap-8 sm:flex"
          aria-label="Section"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeId === link.id ? "true" : undefined}
              className={`text-sm font-medium transition-colors duration-[var(--transition)] hover:text-accent ${
                activeId === link.id ? "text-accent" : "text-text-muted"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text sm:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="flex flex-col border-t border-border bg-bg sm:hidden"
          aria-label="Section"
          style={{ paddingInline: "var(--gutter)" }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={activeId === link.id ? "true" : undefined}
              className={`border-b border-border py-4 text-sm font-medium last:border-b-0 ${
                activeId === link.id ? "text-accent" : "text-text"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
