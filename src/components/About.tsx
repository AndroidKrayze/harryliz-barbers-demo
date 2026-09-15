import { Reveal } from "@/components/motion";
import { SITE, asset } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="grain relative overflow-hidden bg-sand py-20 md:py-28">
      <div
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-lilac/25 blur-3xl"
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-16 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.18em] text-lilac-deep uppercase">
            On Lower Road
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
            A trusted chair in Bermondsey SE16
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/75">
            {SITE.description}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={asset("/images/lounge.jpg")}
              alt="Waiting lounge at Harryliz Barbers on Lower Road"
              className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-lilac/10" />
            <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-sand">
              {SITE.reviewsNote} · LGBTQ+ friendly
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
