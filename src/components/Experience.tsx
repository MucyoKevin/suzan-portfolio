import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  certifications,
  education,
  experience,
  languages,
} from "@/content/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-cream py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <SectionHeading
          index="07"
          eyebrow="Experience"
          title="Career Journey"
          titleId="experience-heading"
        />

        {/* A résumé-style timeline: dates left, role and highlights right. */}
        <ol className="mt-16 border-t border-sand-deep">
          {experience.map((item) => (
            <Reveal
              as="li"
              key={`${item.organisation}-${item.period}`}
              className="grid gap-4 border-b border-sand-deep py-10 md:grid-cols-[14rem_1fr] md:gap-12"
            >
              <div>
                <p className="u-eyebrow text-terracotta-deep">{item.period}</p>
                <p className="mt-2 text-sm text-ink-soft">{item.location}</p>
              </div>

              <div>
                <h3 className="u-h3">{item.role}</h3>
                <p className="u-eyebrow mt-3 text-ink">{item.organisation}</p>
                <ul className="mt-5 space-y-2.5">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="u-body relative pl-6 text-base before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-3 before:bg-terracotta"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-20 grid gap-10 md:grid-cols-3 md:gap-12">
          <Reveal className="border-t border-sand-deep pt-8">
            <p className="u-eyebrow text-terracotta-deep">Education</p>
            <h3 className="u-h3 mt-4">{education.degree}</h3>
            <p className="u-body mt-2 text-base">
              {education.institution} · {education.period}
            </p>
          </Reveal>

          <Reveal delay={90} className="border-t border-sand-deep pt-8">
            <p className="u-eyebrow text-terracotta-deep">
              Professional Development
            </p>
            {certifications.map((cert) => (
              <div key={cert.name}>
                <h3 className="u-h3 mt-4">{cert.name}</h3>
                <p className="u-body mt-2 text-base">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={180} className="border-t border-sand-deep pt-8">
            <p className="u-eyebrow text-terracotta-deep">Languages</p>
            <ul className="mt-4 space-y-1">
              {languages.map((language) => (
                <li key={language.code} className="u-h3">
                  {language.name}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
