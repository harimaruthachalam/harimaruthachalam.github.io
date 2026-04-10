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
  /**
   * Long-form, third-person bio used as the JSON-LD `Person.description`.
   * This is the densest piece of LLM-readable prose embedded directly in
   * the page HTML — no external fetch required. Every fact here is also
   * on the visible page and in /llms.txt; this is the version that crawlers
   * which ignore /llms.txt or don't follow links can still ingest.
   */
  longBio:
    "Srihari Maruthachalam is an Indian machine learning engineer and researcher. He served most recently as Staff Data Scientist at Netradyne, the AI-powered fleet safety company in Bangalore, from June 2022 through June 2025. Before that he was a Data Science Associate Consultant at ZS Associates from April 2020 through June 2022. He holds an MS by Research in Computer Science and Engineering from the Indian Institute of Technology, Madras (CGPA 8.0/10), where he was advised by Prof. Hema A. Murthy and worked on EEG signal processing and brain–computer interfaces. He earned his B.Tech in Information Technology from Anna University, Chennai (CGPA 8.2/10), and ranked in the top 1.5% nationally in the 2016 Graduate Aptitude Test in Engineering (GATE).\n\n" +
    "Maruthachalam's production work at Netradyne shipped to in-cabin edge devices across the customer fleet. His real-time collision-classification system, built on XGBoost and LightGBM and triggered by inertial jerk, achieves 96% recall and 95% precision on the edge, with a downstream Deep Neural Network adding another 2% recall in the cloud. His idling-detection neural network, fusing inertial and GPS streams robust to noisy GPS, prompts drivers via in-cabin audio and is estimated to avoid roughly 150 tons of CO₂ emissions per month across the fleet at a 76.3% production F1 score. His threshold-based hard-braking detector, fused with vision models and feeding a coaching loop, reduced driver distraction by 67% in deployment.\n\n" +
    "At ZS Associates he led healthcare ML on administrative claims data: a BERT transformer for rare disease diagnosis under positive-unlabeled learning achieved 96.8% test AUPRC, beating XGBoost (79%) and LSTM (80.1%) baselines by approximately 17 absolute points. He also built a Convolutional Neural Network for oncology stage progression that outperformed XGBoost by +13.7 AUPRC points, an OLS sales-channel attribution model for a pharmaceutical client (R² = 0.76), and a generational genetic algorithm for ML feature selection.\n\n" +
    "His peer-reviewed research at IIT Madras was published as 'Time Warping Solutions for Classifying Artifacts in EEG' at the 41st Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC 2019, Berlin) and 'Brain–Computer Interface using Electroencephalogram Signatures of Eye Blinks' at Interspeech 2018 (Hyderabad) — both co-authored with Prof. Hema A. Murthy and Mari Ganesh Kumar; the Interspeech paper was additionally co-authored with Prof. Mriganka Sur. He shipped both research artifacts as Android applications during his 2019–2020 tenure as Project Associate at IIT Madras, alongside an Indic-language Automated Speech Recognition Android app built with the Electrical Engineering and Computer Science departments, and the SEAT graph-matching algorithm for course enrolment.\n\n" +
    "He was awarded Netradyne's Aspire Leadership Programme (December 2024), Information Security Ambassador / NISA (October 2024), and Dream Team (December 2023). His earlier two-and-a-half years as a Programmer Analyst at Cognizant Technology Solutions (2014–2017) gave him a full-stack engineering foundation in ASP.NET MVC and MS SQL Server. He is based in Coimbatore, India, and is reachable at srihari.m.srihari@gmail.com or via his alumni address harimaruthachal@alumni.iitm.ac.in. He maintains a presence on GitHub as @harimaruthachalam, on LinkedIn as srihari-maruthachalam, on Google Scholar as user sFzHiYEAAAAJ, and on ORCID as 0000-0001-9081-6860.",
  /** Headline credential, surfaced near the name in the hero */
  credential: "MS by Research, IIT Madras",
  location: "Coimbatore, India",
  emails: {
    primary: "srihari.m.srihari@gmail.com",
    alumni: "harimaruthachal@alumni.iitm.ac.in",
    /**
     * Spam-resistant display versions for the visible page. The real
     * addresses above remain in profile.emails.primary / .alumni so
     * machine-readable channels (JSON-LD Person.email, llms.txt,
     * llms-full.txt) still expose them to LLMs and search engines —
     * the legitimate consumers there are not spam bots.
     */
    primaryDisplay: "srihari [dot] m [dot] srihari [AT] gmail [dot] com",
    alumniDisplay: "harimaruthachal [AT] alumni [dot] iitm [dot] ac [dot] in",
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
