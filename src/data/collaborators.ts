/**
 * Co-authors and academic collaborators referenced on the site.
 * Single source of truth for their homepage URLs — used by:
 *   - Publications.astro to linkify author names
 *   - Experience.astro to linkify advisor mentions
 *   - jsonLd.ts to attach url to each ScholarlyArticle.author Person
 *   - llms.txt and llms-full.txt (manually mirrored)
 */

export interface Collaborator {
  /** Exact name as it appears in publications.ts and experience.ts text */
  name: string;
  /** Personal homepage / faculty page / authoritative profile URL */
  url: string;
  /** Optional one-line affiliation, used in some rendering contexts */
  affiliation?: string;
}

export const collaborators: Collaborator[] = [
  {
    name: "Mari Ganesh Kumar",
    url: "https://mariganeshkumar.github.io/",
  },
  {
    name: "Hema A. Murthy",
    url: "https://www.cse.iitm.ac.in/~hema/",
    affiliation: "IIT Madras",
  },
  {
    name: "Mriganka Sur",
    url: "https://bcs.mit.edu/directory/mriganka-sur",
    affiliation: "MIT, Brain & Cognitive Sciences",
  },
  {
    name: "Sidharth Aggarwal",
    url: "https://in.linkedin.com/in/asidharth019",
  },
];

/** Exact-name lookup, O(1). */
export const collaboratorByName: Record<string, Collaborator> =
  Object.fromEntries(collaborators.map((c) => [c.name, c]));

/**
 * Take any plain text and return an HTML string with collaborator
 * names wrapped in `<a>` tags. Sorted by name length descending so
 * longer names match before any substring.
 *
 * The wrapping `<a>` uses the .collab-link CSS class defined in
 * global.css, so styling stays consistent and centralised.
 */
export function linkifyCollaborators(text: string): string {
  const sorted = [...collaborators].sort(
    (a, b) => b.name.length - a.name.length,
  );
  let result = text;
  for (const c of sorted) {
    // Escape regex special chars (e.g. the "." in "Hema A. Murthy")
    const escaped = c.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`\\b${escaped}\\b`, "g");
    result = result.replace(
      re,
      `<a href="${c.url}" target="_blank" rel="noopener" class="collab-link">${c.name}</a>`,
    );
  }
  return result;
}
