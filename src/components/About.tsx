import ParallaxFrame from "./ParallaxFrame";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about, profile } from "@/content/portfolio";

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <SectionHeading index="01" eyebrow={about.eyebrow} />

        <div className="mt-12 grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-start md:gap-16">
          {/* Template 3's circular portrait */}
          <Reveal className="mx-auto w-full max-w-xs md:sticky md:top-32 md:max-w-sm">
            <ParallaxFrame
              src="/pic_2.jpeg"
              alt={`${profile.name} smiling to camera`}
              strength={28}
              sizes="(min-width: 768px) 32vw, 80vw"
              className="aspect-square w-full rounded-full"
            />
          </Reveal>

          <div>
            <Reveal delay={90}>
              <h2 className="u-h2 max-w-2xl">{about.heading}</h2>
            </Reveal>

            <div className="mt-8 space-y-6">
              {about.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delay={150 + index * 90}>
                  <p className="u-body max-w-2xl">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
