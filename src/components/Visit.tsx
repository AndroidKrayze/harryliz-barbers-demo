import { Reveal } from "@/components/motion";
import { HOURS, SITE, asset } from "@/lib/site";

export function Visit() {
  return (
    <section id="visit" className="grain bg-sand py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.18em] text-lilac-deep uppercase">
            Visit
          </p>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            134 Lower Road
          </h2>
          <p className="mt-4 text-lg text-ink/75">{SITE.area}</p>
          <p className="mt-2 text-ink/70">{SITE.address}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.freshaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md bg-ink px-5 py-3 text-sm font-semibold text-sand transition hover:bg-ink/90"
            >
              Book on Fresha
            </a>
            <a
              href={SITE.phoneHref}
              className="inline-flex rounded-md border border-ink/25 px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink/50"
            >
              Call {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md border border-ink/25 px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink/50"
            >
              Get directions
            </a>
          </div>
          <div className="mt-10 overflow-hidden rounded-sm">
            <img
              src={asset("/images/hero-exterior.jpg")}
              alt="Harryliz Barbers exterior on Lower Road"
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="font-display text-2xl text-ink">Opening hours</h3>
          <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
            {HOURS.map((row) => (
              <li
                key={row.day}
                className="flex items-center justify-between gap-4 py-3 text-sm md:text-base"
              >
                <span className="font-medium text-ink">{row.day}</span>
                <span className="text-ink/65">{row.hours}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-ink/60">
            Near public transport · Parking available · Instant confirmation on
            Fresha
          </p>
        </Reveal>
      </div>
    </section>
  );
}
