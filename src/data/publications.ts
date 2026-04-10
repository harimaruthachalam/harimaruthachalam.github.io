export interface Publication {
  id: string;
  /** Authors in citation order */
  authors: string[];
  title: string;
  /** Conference / journal name */
  venue: string;
  /** Full venue string for citation, e.g. "Proc. Interspeech 2018, 1059–1060" */
  citation: string;
  year: number;
  location?: string;
  /** External link — DOI preferred, archive URL otherwise */
  url: string;
  /** Optional one-line takeaway in plain English */
  takeaway?: string;
}

export const publications: Publication[] = [
  {
    id: "embc-2019",
    authors: [
      "Srihari Maruthachalam",
      "Mari Ganesh Kumar",
      "Hema A. Murthy",
    ],
    title: "Time Warping Solutions for Classifying Artifacts in EEG",
    venue: "IEEE EMBC 2019",
    citation:
      "41st Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC), pp. 4537–4540, 2019.",
    year: 2019,
    location: "Berlin, Germany",
    url: "https://doi.org/10.1109/EMBC.2019.8856669",
    takeaway:
      "Dynamic time warping turns out to be a surprisingly strong baseline for separating muscle and eye-blink artifacts from clean EEG.",
  },
  {
    id: "interspeech-2018",
    authors: [
      "Srihari Maruthachalam",
      "Sidharth Aggarwal",
      "Mari Ganesh Kumar",
      "Mriganka Sur",
      "Hema A. Murthy",
    ],
    title:
      "Brain–Computer Interface using Electroencephalogram Signatures of Eye Blinks",
    venue: "Interspeech 2018",
    citation: "Proc. Interspeech 2018, pp. 1059–1060, 2018.",
    year: 2018,
    location: "Hyderabad, India",
    url: "https://www.isca-speech.org/archive/Interspeech_2018/pdfs/3019.pdf",
    takeaway:
      "A single-channel EEG can reliably distinguish intentional eye-blink patterns from involuntary ones — enough to drive a usable BCI.",
  },
];
