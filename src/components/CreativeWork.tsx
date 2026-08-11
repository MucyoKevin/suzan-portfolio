import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { creativeHighlights } from "@/content/portfolio";

const rows = [
  { label: "Objective", key: "objective" },
  { label: "Approach", key: "approach" },
  { label: "Outcome", key: "outcome" },
] as const;

export default function CreativeWork() {
  return (
    <section
      id="creative"
      className="border-y border-sand-deep bg-sand py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <SectionHeading
          index="04"
          eyebrow="Digital & Creative Work"
          title="Content & Campaign Highlights"
        />

        <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {creativeHighlights.map((highlight, index) => (
            <Reveal
              as="li"
              key={highlight.title}
              delay={(index % 3) * 90}
              className="flex flex-col border border-sand-deep bg-cream p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-terracotta/50 hover:shadow-[0_20px_45px_-28px_rgba(28,25,23,0.35)]"
            >
              <h3 className="u-h3">{highlight.title}</h3>
              <dl className="mt-6 space-y-4">
                {rows.map((row) => (
                  <div key={row.key}>
                    <dt className="u-eyebrow text-terracotta-deep">
                      {row.label}
                    </dt>
                    <dd className="u-body mt-1.5 text-base">
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
