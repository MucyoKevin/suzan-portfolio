import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { expertise } from "@/content/portfolio";

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="border-y border-sand-deep bg-sand py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <SectionHeading
          index="02"
          eyebrow="Areas of Expertise"
          title="What I Do"
        />

        {/* Template 1's multi-column grid, separated by hairline rules. */}
        <ul className="mt-16 grid gap-x-12 border-t border-sand-deep md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(index % 3) * 90}
              className="group border-b border-sand-deep py-8 transition-colors duration-300 hover:border-terracotta/60"
            >
              <p className="u-eyebrow text-terracotta-deep/70 transition-colors duration-300 group-hover:text-terracotta-deep">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="u-h3 mt-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                {item.title}
              </h3>
              <p className="u-body mt-3 text-base">{item.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
