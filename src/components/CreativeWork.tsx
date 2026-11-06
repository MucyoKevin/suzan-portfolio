import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { creativeHighlights } from "@/content/portfolio";

const rows = [
  { label: "Objective", key: "objective" },
  { label: "Approach", key: "approach" },
  { label: "Outcome", key: "outcome" },
] as const;

/** Shared by the column header and every row so the columns line up. */
const rowGrid = "md:grid md:grid-cols-[1fr_3fr] md:gap-12";
const cellGrid = "md:grid md:grid-cols-3 md:gap-10";

export default function CreativeWork() {
  return (
    <section
      id="creative"
      aria-labelledby="creative-heading"
      className="border-y border-sand-deep bg-sand py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <SectionHeading
          index="04"
          eyebrow="Digital & Creative Work"
          title="Content & Campaign Highlights"
          titleId="creative-heading"
        />

        {/*
          A matrix rather than cards: the Objective / Approach / Outcome labels
          are printed once as column heads on desktop, and repeat inline only
          on narrow screens where the columns stack.
        */}
        <div
          aria-hidden="true"
          className={`mt-16 hidden border-b border-ink/15 pb-4 ${rowGrid}`}
        >
          <p className="u-eyebrow text-ink-soft">Format</p>
          <div className={cellGrid}>
            {rows.map((row) => (
              <p key={row.key} className="u-eyebrow text-terracotta-deep">
                {row.label}
              </p>
            ))}
          </div>
        </div>

        <ul className="mt-10 border-t border-sand-deep md:mt-0 md:border-t-0">
          {creativeHighlights.map((highlight, index) => (
            <Reveal
              as="li"
              key={highlight.title}
              delay={index * 70}
              className={`group border-b border-sand-deep py-10 transition-colors duration-300 hover:border-terracotta/60 ${rowGrid}`}
            >
              <div className="flex items-baseline gap-4">
                <span
                  aria-hidden="true"
                  className="text-3xl leading-none font-light text-terracotta"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="u-h3 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                  {highlight.title}
                </h3>
              </div>

              <dl className={`mt-6 space-y-5 md:mt-0 md:space-y-0 ${cellGrid}`}>
                {rows.map((row) => (
                  <div key={row.key}>
                    <dt className="u-eyebrow text-terracotta-deep md:sr-only">
                      {row.label}
                    </dt>
                    <dd
                      className={`u-body mt-1.5 text-base md:mt-0 ${
                        // .u-body is unlayered CSS, so its color wins without !
                        row.key === "outcome" ? "text-ink!" : ""
                      }`}
                    >
                      {highlight[row.key]}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
