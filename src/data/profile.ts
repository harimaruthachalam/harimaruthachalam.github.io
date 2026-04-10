/**
 * Personal identity, contact, and the prose that introduces the page.
 * One source of truth for everything that ends up in the hero, footer,
 * and `<head>` meta tags.
 */

export interface SocialLink {
  label: string;
  url: string;
  /** Used by the icon component to look up the right SVG */
  icon: "github" | "linkedin" | "scholar" | "orcid" | "email";
}

export const profile = {
  name: "Srihari Maruthachalam",
  givenName: "Srihari",
  familyName: "Maruthachalam",
  /** Site URL — used everywhere a fully-qualified link is needed */
  siteUrl: "https://harimaruthachalam.github.io",
  /** SEO title — pinned under 60 chars to avoid SERP truncation */
  title: "Srihari Maruthachalam · Staff Data Scientist · IIT Madras",
  /** Short, one-line value prop — used in the hero subtitle and meta description */
  tagline:
    "Staff Data Scientist building real-time ML systems that ship to production.",
  /** Longer meta description — keyword-rich for search */
  metaDescription:
    "Srihari Maruthachalam — Staff Data Scientist (formerly Netradyne, ZS Associates) and ML researcher with an IIT Madras MS by Research. Builds real-time edge ML, healthcare NLP, and brain–computer interfaces. Author of peer-reviewed work at IEEE EMBC and Interspeech.",
  /** Search/LLM keywords — broad surface area of how recruiters might find Srihari */
  keywords: [
    "Srihari Maruthachalam",
    "Staff Data Scientist",
    "Machine Learning Engineer",
    "ML Researcher",
    "Deep Learning",
    "Edge ML",
    "Real-time Machine Learning",
    "BERT",
    "Transformers",
    "PyTorch",
    "XGBoost",
    "LightGBM",
    "Brain-Computer Interface",
    "EEG",
    "Computer Vision",
    "Healthcare NLP",
    "IIT Madras",
    "Indian Institute of Technology Madras",
    "Netradyne",
    "ZS Associates",
    "MS by Research",
    "Hema A Murthy",
  ],
  /**
   * Longer About paragraph. Counts roughly hold as of Apr 2026:
   *  - 5 yrs DS  (ZS Apr 2020 → Netradyne Jun 2025)
   *  - 3 yrs research (IIT-M Dec 2016 → Feb 2020)
   *  - 2.5 yrs SWE (Cognizant Aug 2014 → Jan 2017)
   */
  about:
    "Five years of applied data science across automotive safety at Netradyne and healthcare at ZS Associates, three years of academic research at IIT Madras, and a software engineering foundation from Cognizant. I work end to end — from problem framing to edge deployment — with a bias toward shipping models that hold up in production, not just on a leaderboard.",
  /** Headline credential, surfaced near the name in the hero */
  credential: "MS by Research, IIT Madras",
  location: "Coimbatore, India",
  emails: {
    primary: "srihari.m.srihari@gmail.com",
    alumni: "harimaruthachal@alumni.iitm.ac.in",
  },
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/harimaruthachalam",
      icon: "github",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/srihari-maruthachalam/",
      icon: "linkedin",
    },
    {
      label: "Google Scholar",
      url: "https://scholar.google.co.in/citations?user=sFzHiYEAAAAJ&hl=en",
      icon: "scholar",
    },
    {
      label: "ORCID",
      url: "https://orcid.org/0000-0001-9081-6860",
      icon: "orcid",
    },
  ] satisfies SocialLink[],
  /** Path to the static PDF resume in /public, served as-is */
  resumePdf: "/SrihariMaruthachalam.pdf",
} as const;
