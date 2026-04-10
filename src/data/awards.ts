export interface Award {
  id: string;
  title: string;
  /** Awarding org / context */
  by: string;
  /** "MMM YYYY" or "YYYY" */
  date: string;
  /** Optional one-line context */
  note?: string;
}

export const awards: Award[] = [
  {
    id: "aspire-2024",
    title: "Aspire Leadership Programme",
    by: "Netradyne",
    date: "Dec 2024",
  },
  {
    id: "nisa-2024",
    title: "Information Security Ambassador (NISA)",
    by: "Netradyne",
    date: "Oct 2024",
  },
  {
    id: "dream-team-2023",
    title: "Dream Team",
    by: "Netradyne",
    date: "Dec 2023",
  },
  {
    id: "gate-2016",
    title: "GATE 2016 — Top 1.5% nationally",
    by: "Graduate Aptitude Test in Engineering",
    date: "2016",
  },
];
