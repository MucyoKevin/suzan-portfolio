import ParallaxFrame from "./ParallaxFrame";
import Reveal from "./Reveal";
import { profile } from "@/content/portfolio";

export default function Hero() {
  return (
    <section id="top" className="bg-cream pt-32 md:pt-40">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
          <div>
            <Reveal>
              <p className="u-eyebrow text-terracotta-deep">{profile.name}</p>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="u-display mt-6">{profile.portfolioTitle}</h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="u-body mt-8 max-w-xl">{profile.tagline}</p>
            </Reveal>

            <Reveal delay={270}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 border border-ink px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors duration-300 hover:bg-ink hover:text-cream"
                >
                  Let&rsquo;s work together
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </a>
                <p className="u-eyebrow text-ink-soft">{profile.location}</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <ParallaxFrame
              src="/pic_1.jpeg"
              alt={`Portrait of ${profile.name}`}
              priority
              strength={46}
              sizes="(min-width: 768px) 46vw, 100vw"
              className="aspect-4/5 w-full"
              overlayClassName="hero-sweep"
            />
          </Reveal>
        </div>
      </div>

      {/* Template 3's full-width headline band, used here for the pillars. */}
      <div className="mt-20 border-y border-sand-deep bg-sand md:mt-28">
        <div className="mx-auto max-w-[1200px] px-6 py-6 sm:px-10">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-between">
            {profile.pillars.map((pillar) => (
              <li key={pillar} className="u-eyebrow text-ink">
                {pillar}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
