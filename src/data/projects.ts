/**
 * Curated "Selected Work" — a small set of projects we want to surface
 * as standalone cards on the home page. These reframe the most impressive
 * experience bullets as standalone case studies.
 *
 * Order matters: shown top-to-bottom on the home page.
 */

export interface Project {
  id: string;
  /** Short, memorable name */
  name: string;
  /** Where this happened — company / lab */
  context: string;
  /** Year(s) — used for ordering and the small date label */
  year: string;
  /** One-line problem statement */
  problem: string;
  /** What was built */
  solution: string;
  /** The headline metric */
  outcome: string;
  /** Tech stack */
  stack: string[];
  /** Optional link out — paper, demo, blog, etc. */
  link?: { label: string; url: string };
}

export const projects: Project[] = [
  {
    id: "edge-collision",
    name: "Real-time collision classification on the edge",
    context: "Netradyne",
    year: "2023–25",
    problem:
      "Detect potential collisions from inertial and visual streams within the latency budget of an in-cab edge device.",
    solution:
      "XGBoost and LightGBM models trained on signal-processing features, triggered by inertial jerk; a downstream Deep Neural Network on the cloud refines borderline cases.",
    outcome: "96% recall, 95% precision at the edge — +2% recall from the cloud refinement.",
    stack: ["XGBoost", "LightGBM", "PyTorch", "Edge ML"],
  },
  {
    id: "idling",
    name: "Idling detector that pays for itself in CO₂",
    context: "Netradyne",
    year: "2023",
    problem:
      "Identify per-minute vehicle idling using inertial and GPS streams, robust to dropped or noisy GPS, and prompt the driver in real time.",
    solution:
      "Neural network combining inertial and GPS features, deployed in the in-cabin device with audio feedback when prolonged idling is detected.",
    outcome:
      "76.3% production F1 — estimated ~150 tons of CO₂ avoided per month across the fleet.",
    stack: ["Neural Network", "Real-time", "Sensor Fusion"],
  },
  {
    id: "rare-disease-bert",
    name: "BERT for rare disease diagnosis from claims data",
    context: "ZS Associates",
    year: "2021",
    problem:
      "Rare diseases are systematically misdiagnosed and treated late. Predict the diagnosis from longitudinal administrative claims.",
    solution:
      "BERT transformer trained on patient-level claims sequences — diagnosis codes, procedures, medications — under a positive-unlabeled learning setup.",
    outcome:
      "96.8% test AUPRC, beating XGBoost (79%) and LSTM (80.1%) baselines by ~17 points.",
    stack: ["BERT", "Transformers", "PU Learning", "Python"],
  },
  {
    id: "eeg-dtw",
    name: "Dynamic time warping for EEG artifact classification",
    context: "IIT Madras",
    year: "2019",
    problem:
      "Separate muscle and eye-blink artifacts from clean EEG without an over-engineered model.",
    solution:
      "DTW-based template matching as the core classifier, evaluated against deeper baselines.",
    outcome: "Published at IEEE EMBC 2019 (Berlin).",
    stack: ["DTW", "Signal Processing", "MATLAB", "Python"],
    link: {
      label: "EMBC 2019 paper",
      url: "https://doi.org/10.1109/EMBC.2019.8856669",
    },
  },
  {
    id: "blink-bci",
    name: "Single-channel eye-blink BCI on Android",
    context: "IIT Madras",
    year: "2018–20",
    problem:
      "Open a communication channel for users with speech and movement limitations using only a remote single-channel EEG.",
    solution:
      "Android app that classifies intentional eye-blink patterns from raw EEG and translates them into speech.",
    outcome: "Published at Interspeech 2018 (Hyderabad).",
    stack: ["EEG", "BCI", "Android", "Java"],
    link: {
      label: "Interspeech 2018 paper",
      url: "https://www.isca-speech.org/archive/Interspeech_2018/pdfs/3019.pdf",
    },
  },
];
