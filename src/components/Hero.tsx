import Magnetic from "./Magnetic";
import Reveal from "./Reveal";
import { profile } from "@/content/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="bg-cream pt-28 pb-14 md:pt-32 md:pb-16"
    >
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="max-w-2xl">
          {/*
            The name sits inside the <h1> rather than in a <p> above it, so the
            page's single top-level heading carries both the person and the
            subject. Rendering is unchanged: the two lines keep their own type
            styles and their own reveal timings.
          */}
          <h1 id="hero-heading">
            <Reveal as="span" className="u-eyebrow block text-terracotta-deep">
              {profile.name}
            </Reveal>
            <Reveal as="span" delay={90} className="u-display mt-6 block">
              {profile.portfolioTitle}
            </Reveal>
          </h1>

          <Reveal delay={180}>
            <p className="u-body mt-8 max-w-xl">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={270}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Magnetic
                href="#contact"
                className="group inline-flex items-center gap-3 border border-ink px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition duration-300 hover:bg-ink hover:text-cream"
              >
                Let&rsquo;s work together
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </Magnetic>
              <p className="u-eyebrow text-ink-soft">{profile.location}</p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Template 3's full-width headline band, used here for the pillars. */}
      <div className="mt-14 border-y border-sand-deep bg-sand md:mt-16">
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
