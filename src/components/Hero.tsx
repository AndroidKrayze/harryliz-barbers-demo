import { HeroMotion, WashDrift } from "@/components/motion";
import { SITE, asset } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden"
      aria-label="Harryliz Barbers hero"
    >
      {/* Full-bleed hero plane */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${asset("/images/hero-exterior.jpg")})`,
        }}
        role="img"
        aria-label="Harryliz Barbers shopfront on Lower Road"
      />

      {/* Opacity wash layers — ink / sand / lilac (not Framer opacity traps) */}
      <div className="absolute inset-0 bg-ink/55" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-lilac/25"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent"
        aria-hidden
      />
      <WashDrift className="pointer-events-none absolute -left-1/4 top-0 h-[70%] w-[70%] rounded-full bg-lilac/20 blur-3xl mix-blend-soft-light" />
      <WashDrift className="pointer-events-none absolute -right-1/5 bottom-0 h-[55%] w-[55%] rounded-full bg-sand/15 blur-3xl mix-blend-overlay" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
        <HeroMotion>
          <p className="font-display text-4xl leading-none tracking-[0.06em] text-sand uppercase sm:text-5xl md:text-7xl lg:text-8xl">
            Harryliz
            <span className="mt-1 block text-lilac-bright">Barbers</span>
          </p>
          <h1 className="mt-6 max-w-xl font-sans text-xl font-medium text-sand sm:text-2xl md:text-3xl">
            Sharp fades and personal cuts on Lower Road, SE16.
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-sand/80 md:text-lg">
            Inclusive chair-side care in Bermondsey — book the next open slot
            on Fresha, or call if you need to speak to the shop.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={SITE.freshaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-lilac px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-lilac-bright"
            >
              Book on Fresha
            </a>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center rounded-md border border-sand/40 bg-ink/30 px-6 py-3.5 text-sm font-semibold text-sand backdrop-blur-sm transition hover:border-sand/70 hover:bg-ink/50"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </HeroMotion>
      </div>
    </section>
  );
}
