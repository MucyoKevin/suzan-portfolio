import Reveal from "./Reveal";
import type { CaseStudy as CaseStudyType } from "@/content/portfolio";

type CaseStudyProps = {
  study: CaseStudyType;
  index: number;
};

/**
 * Editorial featured-work block: a sticky meta column (numeral, organisation,
 * role, skills) beside the story itself. Built from the copy alone, so it
 * reads complete without project imagery.
 */
export default function CaseStudy({ study, index }: CaseStudyProps) {
  const numeral = String(index + 1).padStart(2, "0");

  return (
    <article className="grid gap-10 border-t border-sand-deep pt-12 md:grid-cols-[1fr_2fr] md:gap-16">
      <Reveal className="md:sticky md:top-32 md:self-start">
        <p
          aria-hidden="true"
          className="text-7xl leading-none font-light text-terracotta md:text-8xl"
        >
          {numeral}
        </p>
        <p className="mt-8 text-2xl leading-snug font-light text-ink md:text-3xl">
          {study.organisation}
        </p>
        {study.role ? (
          <p className="mt-2 text-sm text-ink-soft">{study.role}</p>
        ) : null}

        <ul
          aria-label="Skills applied"
          className="mt-8 flex flex-wrap gap-2"
        >
          {study.skills.map((skill) => (
            <li
              key={skill}
              className="border border-terracotta/40 px-3 py-1.5 text-xs tracking-wide text-ink"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={120}>
        <h3 className="u-h2 text-[clamp(1.75rem,3.2vw,2.75rem)]">
          {study.title}
        </h3>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-ink md:text-xl">
          {study.overview}
        </p>

        <p className="u-eyebrow mt-12 text-terracotta-deep">My Contribution</p>
        <ol className="mt-6 grid gap-x-10 sm:grid-cols-2">
          {study.contributions.map((contribution, itemIndex) => (
            <li
              key={contribution}
              className="flex gap-4 border-t border-sand-deep py-5"
            >
              <span
                aria-hidden="true"
                className="u-eyebrow pt-1 text-terracotta-deep/70"
              >
                {String(itemIndex + 1).padStart(2, "0")}
              </span>
              <span className="u-body text-base">{contribution}</span>
            </li>
          ))}
        </ol>
      </Reveal>
    </article>
  );
}
