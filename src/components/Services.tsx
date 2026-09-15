import { Reveal } from "@/components/motion";
import { SERVICES, SITE } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="bg-ink py-20 text-sand md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.18em] text-lilac uppercase">
            Services
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
            Book the cut you actually want
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-sand/70">
            Prices match the live Fresha menu. Every Book button opens the real
            Harryliz booking page — no fake widgets.
          </p>
        </Reveal>

        <ul className="mt-12 divide-y divide-sand/15 border-y border-sand/15">
          {SERVICES.map((service, index) => (
            <Reveal key={service.name} delay={Math.min(index * 0.03, 0.24)}>
              <li className="grid gap-4 py-6 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-2xl text-sand">
                      {service.name}
                    </h3>
                    <span className="text-sm text-sand/55">
                      {service.duration}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-sand/65">
                    {service.blurb}
                  </p>
                </div>
                <div className="flex items-center gap-4 md:justify-end">
                  <span className="font-display text-2xl text-lilac-bright">
                    {service.price}
                  </span>
                  <a
                    href={SITE.freshaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-md bg-lilac px-4 py-2 text-sm font-semibold text-ink transition hover:bg-lilac-bright"
                  >
                    Book
                  </a>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
