/**
 * Conferences and workshops attended — credibility signals for the
 * "research-adjacent" reader. Distinct from publications (where work
 * was *presented*).
 */

export interface Talk {
  id: string;
  event: string;
  location: string;
  year: number;
}

export const talks: Talk[] = [
  {
    id: "embc-2019",
    event: "IEEE Engineering in Medicine and Biology Society (EMBC)",
    location: "Berlin, Germany",
    year: 2019,
  },
  {
    id: "ccbr-2019",
    event: "Centre for Computational Brain Research",
    location: "IIT Madras",
    year: 2019,
  },
  {
    id: "interspeech-2018",
    event: "Interspeech",
    location: "Hyderabad, India",
    year: 2018,
  },
  {
    id: "neuromorphic-2018",
    event: "Neuromorphic Computing Workshop",
    location: "IISc Bengaluru",
    year: 2018,
  },
  {
    id: "ccbr-2018",
    event: "Centre for Computational Brain Research",
    location: "IIT Madras",
    year: 2018,
  },
  {
    id: "brain-modes-2017",
    event: "Brain Modes",
    location: "National Brain Research Centre, New Delhi",
    year: 2017,
  },
];
