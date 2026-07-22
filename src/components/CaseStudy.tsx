import Reveal from "./Reveal";
import type { CaseStudy as CaseStudyType } from "@/content/portfolio";

type CaseStudyProps = {
  study: CaseStudyType;
  index: number;
};

/**
 * Template 3's two-column featured-work block. With no project imagery yet,
 * the visual half is a typographic panel carrying the chapter numeral — swap
 * it for a <ParallaxFrame> once screenshots exist.
 */
export default function CaseStudy({ study, index }: CaseStudyProps) {
  const numeral = String(index + 1).padStart(2, "0");
  const flipped = index % 2 === 1;

  return (
    <article className="grid gap-10 border-t border-sand-deep pt-12 md:grid-cols-2 md:gap-16">
      <Reveal
        className={`relative flex min-h-64 flex-col justify-between overflow-hidden bg-sand p-8 md:min-h-[22rem] ${
          flipped ? "md:order-2" : ""
        }`}
      >
        <span
          aria-hidden="true"
          className="absolute -right-4 -bottom-10 text-[10rem] leading-none font-light text-sand-deep select-none md:text-[14rem]"
        >
          {numeral}
        </span>
        <p className="u-eyebrow relative text-terracotta-deep">
          Project {numeral}
        </p>
        <p className="relative mt-8 max-w-xs text-2xl leading-snug font-light text-ink md:text-3xl">
          {study.organisation}
        </p>
      </Reveal>

      <Reveal delay={120} className={flipped ? "md:order-1" : ""}>
        <h3 className="u-h2 text-[clamp(1.5rem,2.6vw,2.125rem)]">
          {study.title}
        </h3>

        <p className="u-eyebrow mt-4 text-ink">{study.organisation}</p>
        {study.role ? (
          <p className="mt-2 text-sm text-ink-soft">Role: {study.role}</p>
        ) : null}

        <div className="mt-8">
          <p className="u-eyebrow text-terracotta-deep">Overview</p>
          <p className="u-body mt-3">{study.overview}</p>
        </div>

        <div className="mt-8">
          <p className="u-eyebrow text-terracotta-deep">My Contribution</p>
          <ul className="mt-3 space-y-2.5">
            {study.contributions.map((contribution) => (
              <li
                key={contribution}
                className="u-body relative pl-6 text-base before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-3 before:bg-terracotta"
              >
                {contribution}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <p className="u-eyebrow text-terracotta-deep">Skills Applied</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {study.skills.map((skill) => (
              <li
                key={skill}
                className="border border-terracotta/40 px-3 py-1.5 text-xs tracking-wide text-ink"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </article>
  );
}
