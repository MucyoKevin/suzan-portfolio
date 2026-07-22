import Reveal from "./Reveal";

type SectionHeadingProps = {
  /** Two-digit chapter marker, e.g. "01". */
  index: string;
  eyebrow: string;
  title?: string;
};

/**
 * Template 2's numbered section marker paired with a heading.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <p className="u-eyebrow flex items-center gap-3 text-terracotta-deep">
        <span>{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-terracotta/50" />
        <span>{eyebrow}</span>
      </p>
      {title ? <h2 className="u-h2 mt-6 max-w-3xl">{title}</h2> : null}
    </Reveal>
  );
}
