import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { events } from "@/content/portfolio";

export default function Events() {
  return (
    <section id="events" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <SectionHeading
          index="05"
          eyebrow={events.eyebrow}
          title={events.heading}
        />

        {/* Template 3's card row */}
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {events.examples.map((example, index) => (
            <Reveal
              as="li"
              key={example.title}
              delay={index * 90}
              className="group border-t-2 border-terracotta/60 pt-6 transition-all duration-300 hover:-translate-y-1 hover:border-terracotta"
            >
              <h3 className="u-h3 transition-colors duration-300 group-hover:text-terracotta-deep">
                {example.title}
              </h3>
              <p className="u-body mt-3 text-base">{example.description}</p>
            </Reveal>
          ))}
        </ul>

        {/* Strategy -> Planning -> Execution -> Audience Experience */}
        <Reveal className="mt-20 border-t border-sand-deep pt-10">
          <p className="u-eyebrow text-terracotta-deep">
            {events.processLabel}
          </p>
          <ol className="mt-6 flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:gap-6">
            {events.process.map((step, index) => (
              <li key={step} className="flex items-center gap-3 md:gap-6">
                {/* numerals carry the sequence on mobile, arrows on desktop */}
                <span className="u-eyebrow text-terracotta-deep md:hidden">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-light text-ink md:text-xl">
                  {step}
                </span>
                {index < events.process.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="hidden items-center gap-2 text-terracotta md:flex"
                  >
                    <span className="h-px w-8 bg-terracotta/50" />
                    &rarr;
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
