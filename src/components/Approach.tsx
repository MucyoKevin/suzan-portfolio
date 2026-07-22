import CountUp from "./CountUp";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { approach } from "@/content/portfolio";

export default function Approach() {
  return (
    <section
      id="approach"
      className="border-y border-sand-deep bg-sand py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <SectionHeading index="06" eyebrow="My Approach" title="How I Work" />

        {/* Template 2's big numbered list */}
        <ol className="mt-16 border-t border-sand-deep">
          {approach.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 80}
              className="grid gap-4 border-b border-sand-deep py-8 md:grid-cols-[auto_1fr_1.4fr] md:items-baseline md:gap-10 md:py-10"
            >
              <CountUp
                to={index + 1}
                className="text-4xl leading-none font-light text-terracotta md:text-5xl"
              />
              <h3 className="u-h2 text-[clamp(1.5rem,2.4vw,2rem)]">
                {step.title}
              </h3>
              <p className="u-body">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
