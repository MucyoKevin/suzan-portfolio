import {
  about,
  caseStudies,
  contact,
  expertise,
  profile,
} from "@/content/portfolio";
import {
  portraitAlt,
  portraitPath,
  siteDescription,
  siteName,
  siteUrl,
} from "@/lib/site";

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;
const pageId = `${siteUrl}/#webpage`;
const imageId = `${siteUrl}/#portrait`;

/**
 * A single `@graph` describing the site to search engines and AI crawlers:
 * who the page is about (Person), what the site is (WebSite), and what this
 * document is (ProfilePage). Nodes cross-reference by `@id` rather than
 * repeating themselves, which is what Google's parser expects.
 *
 * Everything is derived from `content/portfolio.ts`, so the markup can never
 * disagree with the copy actually rendered on the page.
 */
export function buildStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ImageObject",
        "@id": imageId,
        url: `${siteUrl}${portraitPath}`,
        contentUrl: `${siteUrl}${portraitPath}`,
        width: 800,
        height: 975,
        caption: portraitAlt,
      },
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        givenName: profile.name.split(" ")[0],
        familyName: profile.name.split(" ").slice(1).join(" "),
        jobTitle: profile.title,
        description: about.paragraphs[0],
        url: siteUrl,
        image: { "@id": imageId },
        email: `mailto:${contact.email}`,
        telephone: contact.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: profile.location.split(",")[0].trim(),
          addressCountry: "UG",
        },
        knowsAbout: [
          ...profile.pillars,
          ...expertise.map((item) => item.title),
        ],
        knowsLanguage: ["en"],
        // `sameAs` is how search engines tie this page to the same identity
        // elsewhere; it is the strongest entity signal a personal site has.
        sameAs: [contact.linkedin, contact.instagram],
        worksFor: caseStudies.map((study) => ({
          "@type": "Organization",
          name: study.organisation,
        })),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        inLanguage: "en",
        publisher: { "@id": personId },
        copyrightHolder: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": pageId,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        inLanguage: "en",
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
        primaryImageOfPage: { "@id": imageId },
        hasPart: caseStudies.map((study) => ({
          "@type": "CreativeWork",
          name: study.title,
          headline: study.title,
          abstract: study.overview,
          about: { "@type": "Organization", name: study.organisation },
          author: { "@id": personId },
          keywords: study.skills.join(", "),
        })),
      },
    ],
  };
}

/**
 * Serialises the graph for a `<script type="application/ld+json">` tag.
 * `<` is escaped so a stray angle bracket in the copy can never close the
 * script element early (the XSS vector `JSON.stringify` alone leaves open).
 */
export function structuredDataJson(): string {
  return JSON.stringify(buildStructuredData()).replace(/</g, "\u003c");
}
