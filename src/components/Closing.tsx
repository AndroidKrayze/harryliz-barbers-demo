import { Reveal } from "@/components/motion";
import { SITE } from "@/lib/site";

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(184,164,201,0.28),_transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="font-display text-4xl text-sand md:text-6xl">
            Ready when you are
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sand/70">
            Reserve your chair on Fresha, or ring the shop if you need a quick
            word first.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={SITE.freshaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md bg-lilac px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-lilac-bright"
            >
              Book on Fresha
            </a>
            <a
              href={SITE.phoneHref}
              className="inline-flex rounded-md border border-sand/35 px-6 py-3.5 text-sm font-semibold text-sand transition hover:border-sand/70"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-sand/10 bg-ink py-10 text-sand/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-lg tracking-[0.08em] text-sand uppercase">
            {SITE.name}
          </p>
          <p className="mt-1 text-sm">{SITE.address}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href={SITE.freshaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sand"
          >
            Book
          </a>
          <a href={SITE.phoneHref} className="hover:text-sand">
            Call
          </a>
          <a href="#services" className="hover:text-sand">
            Services
          </a>
          <a href="#visit" className="hover:text-sand">
            Visit
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-5 text-xs text-sand/40 md:px-8">
        Marketing demo for Harryliz Barbers. Booking is handled exclusively via
        Fresha. Suggested GitHub Pages slug: harryliz-barbers-demo.
      </p>
    </footer>
  );
}
