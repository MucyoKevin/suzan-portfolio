import CaseStudy from "./CaseStudy";
import SectionHeading from "./SectionHeading";
import { caseStudies } from "@/content/portfolio";

export default function SelectedWork() {
  return (
    <section id="work" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <SectionHeading
          index="03"
          eyebrow="Selected Work"
          title="Featured Work"
        />

        <div className="mt-16 space-y-20 md:space-y-28">
          {caseStudies.map((study, index) => (
            <CaseStudy key={study.organisation} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
