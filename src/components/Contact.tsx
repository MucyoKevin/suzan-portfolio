import Reveal from "./Reveal";
import { contact, navLinks, profile } from "@/content/portfolio";

const detailLink =
  "text-lg text-ink underline decoration-terracotta/40 decoration-1 underline-offset-4 transition-colors hover:text-terracotta-deep hover:decoration-terracotta md:text-xl";

export default function Contact() {
  return (
    <footer id="contact" className="bg-sand-deep py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <Reveal>
          <p className="u-eyebrow flex items-center gap-3 text-terracotta-deep">
            <span>07</span>
            <span aria-hidden="true" className="h-px w-8 bg-terracotta/50" />
            <span>Contact</span>
          </p>
          <h2 className="u-display mt-6">{contact.heading}</h2>
        </Reveal>

        {/* Template 1's footer: contact left, section links right. */}
        <div className="mt-16 grid gap-12 border-t border-ink/15 pt-12 md:grid-cols-[1.4fr_1fr]">
          <Reveal delay={90}>
            <p className="u-h3 text-2xl font-light">{profile.name}</p>
            <p className="u-eyebrow mt-2 text-ink-soft">{profile.title}</p>

            <ul className="mt-8 space-y-4">
              <li>
                <a href={`mailto:${contact.email}`} className={detailLink}>
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className={detailLink}>
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={detailLink}
                >
                  {contact.linkedinLabel}
                </a>
              </li>
              <li>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={detailLink}
                >
                  {contact.instagramLabel}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={180}>
            <nav aria-label="Footer">
              <ul className="space-y-3 md:text-right">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-soft transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-ink/15 pt-8 text-xs tracking-wide text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <p>{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
