import { Reveal } from "@/components/motion";
import { GALLERY } from "@/lib/site";

export function Gallery() {
  return (
    <section id="gallery" className="grain bg-sand-deep py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.18em] text-lilac-deep uppercase">
            Inside the shop
          </p>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            Real chairs. Real cuts.
          </h2>
          <p className="mt-4 max-w-xl text-ink/70">
            Photos from Harryliz on Fresha — shopfront, floor, and finished
            work. No stock fillers.
          </p>
        </Reveal>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {GALLERY.map((image, index) => (
            <Reveal key={image.src} delay={Math.min(index * 0.04, 0.2)} className="mb-4 break-inside-avoid">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full rounded-sm object-cover"
                loading="lazy"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
