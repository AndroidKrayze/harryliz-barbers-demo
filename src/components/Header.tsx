import { SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <a
          href="#top"
          className="font-display text-lg tracking-[0.08em] text-sand uppercase md:text-xl"
        >
          {SITE.name}
        </a>
        <nav className="flex items-center gap-2 sm:gap-3" aria-label="Primary">
          <a
            href={SITE.phoneHref}
            className="inline-flex rounded-md px-3 py-2 text-sm font-medium text-sand/90 transition hover:text-sand"
          >
            Call
          </a>
          <a
            href={SITE.freshaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-lilac px-4 py-2 text-sm font-semibold text-ink transition hover:bg-lilac-bright"
          >
            Book on Fresha
          </a>
        </nav>
      </div>
    </header>
  );
}
