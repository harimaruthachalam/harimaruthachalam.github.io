/**
 * Schema.org JSON-LD payload for the home page.
 *
 * This is the densest, most structured representation of who Srihari is —
 * the layer search engines and LLMs read to form citations and rich
 * cards. Every fact here is also somewhere on the visible page (just less
 * verbose); nothing here is invented.
 */

import { profile } from "./profile";
import { publications } from "./publications";
import { experience } from "./experience";
import { education } from "./education";
import { awards } from "./awards";
import { skillGroups } from "./skills";

const personId = `${profile.siteUrl}/#person`;
const websiteId = `${profile.siteUrl}/#website`;

/** Flatten all skill items into one knowsAbout array */
const knowsAbout = skillGroups.flatMap((g) => g.items);

/** Build a ScholarlyArticle node for each publication */
const scholarlyArticles = publications.map((p) => ({
  "@type": "ScholarlyArticle",
  "@id": `${profile.siteUrl}/#pub-${p.id}`,
  headline: p.title,
  name: p.title,
  author: p.authors.map((name) => ({
    "@type": "Person",
    name,
    ...(name === profile.name ? { "@id": personId } : {}),
  })),
  datePublished: String(p.year),
  isPartOf: {
    "@type": "PublicationVolume",
    name: p.venue,
  },
  url: p.url,
  ...(p.url.includes("doi.org")
    ? { sameAs: p.url, "@identifier": p.url.replace("https://doi.org/", "") }
    : {}),
}));

/** Roles → schema.org Role / Organization */
const employmentHistory = experience.map((r) => ({
  "@type": "OrganizationRole",
  roleName: r.role,
  startDate: r.start,
  endDate: r.end,
  worksFor: {
    "@type": "Organization",
    name: r.company,
  },
}));

const educationCredentials = education.map((e) => ({
  "@type": "EducationalOccupationalCredential",
  credentialCategory: e.degree,
  educationalLevel: e.degree.includes("MS") ? "Masters" : "Bachelors",
  recognizedBy: {
    "@type": "CollegeOrUniversity",
    name: e.institution,
  },
  about: e.field,
  dateCreated: e.end,
}));

/** Person — the centrepiece */
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: profile.name,
  givenName: profile.givenName,
  familyName: profile.familyName,
  jobTitle: "Staff Data Scientist",
  description: profile.longBio,
  disambiguatingDescription: profile.about,
  email: `mailto:${profile.emails.primary}`,
  url: profile.siteUrl,
  image: `${profile.siteUrl}/og.png`,
  knowsLanguage: ["en", "ta"],
  nationality: { "@type": "Country", name: "India" },
  homeLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressCountry: "IN",
    },
  },
  sameAs: profile.socials.map((s) => s.url),
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Technology, Madras",
      url: "https://www.iitm.ac.in",
      sameAs: "https://en.wikipedia.org/wiki/Indian_Institute_of_Technology_Madras",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Anna University, Chennai",
      url: "https://www.annauniv.edu",
      sameAs: "https://en.wikipedia.org/wiki/Anna_University",
    },
  ],
  hasCredential: educationCredentials,
  hasOccupation: {
    "@type": "Occupation",
    name: "Staff Data Scientist",
    occupationLocation: { "@type": "City", name: "Bangalore" },
    skills: knowsAbout.join(", "),
    description:
      "Designs and ships production machine learning systems — real-time edge inference for fleet safety, healthcare NLP from administrative claims, and brain–computer interfaces from EEG signals.",
  },
  knowsAbout,
  award: awards.map((a) => `${a.title} — ${a.by} (${a.date})`),
  workExample: employmentHistory,
  subjectOf: scholarlyArticles,
  /** Mark every paper Srihari co-authored as authored by him */
  "@authorOf": scholarlyArticles.map((a) => a["@id"]),
};

/** WebSite — helps search engines build a sitelinks search box */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  name: profile.name,
  alternateName: "Srihari Maruthachalam — Portfolio",
  url: profile.siteUrl,
  description: profile.metaDescription,
  inLanguage: "en",
  author: { "@id": personId },
  publisher: { "@id": personId },
  copyrightHolder: { "@id": personId },
  copyrightYear: 2018,
  keywords: profile.keywords.join(", "),
};

/** A pre-flattened @graph that bundles everything into one JSON-LD block */
export const homepageGraph = {
  "@context": "https://schema.org",
  "@graph": [personSchema, websiteSchema, ...scholarlyArticles],
};
