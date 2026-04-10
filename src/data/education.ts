export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  field: string;
  start: string;
  end: string;
  /** GPA or marks shown next to the degree */
  grade?: string;
  /** Optional area / thesis / advisor blurb */
  notes?: string;
}

export const education: EducationEntry[] = [
  {
    id: "iitm-ms",
    institution: "Indian Institute of Technology, Madras",
    degree: "MS by Research",
    field: "Computer Science and Engineering",
    start: "2016",
    end: "2020",
    grade: "8.0 / 10",
    notes:
      "EEG signal processing and brain–computer interfaces. Published at IEEE EMBC 2019 and Interspeech 2018.",
  },
  {
    id: "anna-btech",
    institution: "Anna University, Chennai",
    degree: "B.Tech.",
    field: "Information Technology",
    start: "2010",
    end: "2014",
    grade: "8.2 / 10",
  },
];
