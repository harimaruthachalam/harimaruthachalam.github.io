/**
 * Work history, source of truth for the Experience timeline and the
 * "Selected Work" cards (which pull a curated subset by id).
 */

export interface ExperienceBullet {
  /** The narrative — what the work was and why it mattered */
  text: string;
  /** Optional headline metric to call out visually, e.g. "96% recall" */
  metric?: string;
  /** Optional tech tags shown as small pills */
  tags?: string[];
}

export interface ExperienceRole {
  id: string;
  company: string;
  role: string;
  location: string;
  /** Format: "MMM YYYY", e.g. "Jun 2022" */
  start: string;
  /** Format: "MMM YYYY" or "Present" */
  end: string;
  bullets: ExperienceBullet[];
  /** Awards or notes specific to this role */
  highlights?: string[];
}

export const experience: ExperienceRole[] = [
  {
    id: "netradyne",
    company: "Netradyne",
    role: "Staff Data Scientist",
    location: "Bangalore, IN",
    start: "Jun 2022",
    end: "Jun 2025",
    bullets: [
      {
        text: "Built collision-classification models on inertial and visual streams using XGBoost and LightGBM, triggered from inertial jerk and running on the edge. A downstream Deep Neural Network on the cloud refines predictions for borderline cases.",
        metric: "96% recall · 95% precision (edge), +2% recall (cloud)",
        tags: ["XGBoost", "LightGBM", "PyTorch", "Edge ML", "Multiclass"],
      },
      {
        text: "Shipped a real-time idling-detection neural network combining inertial and GPS features, robust to unreliable GPS. When prolonged idling is detected, in-cabin audio prompts the driver to switch off the engine.",
        metric: "76.3% F1 in production · ~150 t CO₂/month avoided",
        tags: ["Neural Network", "Real-time", "Binary Classification"],
      },
      {
        text: "Designed a threshold-based hard-braking detector over speed and inertial streams, fused with existing vision models to identify cause in real time. The signal feeds a driver-coaching loop that measurably improved fleet safety.",
        metric: "67% reduction in driver distraction",
        tags: ["Real-time Analysis", "Sensor Fusion"],
      },
    ],
    highlights: [
      "Aspire Leadership Programme (Dec 2024)",
      "Netradyne Information Security Ambassador / NISA (Oct 2024)",
      "Netradyne Dream Team (Dec 2023)",
    ],
  },
  {
    id: "zs",
    company: "ZS Associates",
    role: "Data Science Associate Consultant",
    location: "Bangalore, IN",
    start: "Apr 2020",
    end: "Jun 2022",
    bullets: [
      {
        text: "Built a BERT transformer for diagnosing rare diseases from administrative claims data — patient-level claims, diagnosis codes, procedures, and medications — addressing chronic misdiagnosis and treatment delay in healthcare.",
        metric: "96.8% test AUPRC vs 79% (XGBoost) and 80.1% (LSTM) baselines",
        tags: ["Transformer", "BERT", "PU Learning", "Python"],
      },
      {
        text: "Designed a genetic algorithm for ML feature selection: evaluate fitness, crossover and mutate, augment with non-linear transformations of high-importance features each generation, repeat until convergence.",
        tags: ["XGBoost", "Feature Engineering", "Genetic Algorithm"],
      },
      {
        text: "Built an oncology progression predictor estimating whether patients would advance to the next stage within six months from claims history. A CNN over a time-ordered claims/Rx matrix outperformed the XGBoost baseline by an absolute 13.7 points of AUPRC.",
        metric: "+13.7% AUPRC over XGBoost baseline",
        tags: ["CNN", "PyTorch", "Time-series"],
      },
      {
        text: "Led an OLS analysis identifying the most effective sales channel for a pharmaceutical client's drug, regionalised to capture local effects.",
        metric: "R² = 0.76",
        tags: ["OLS", "Residual Analysis"],
      },
    ],
  },
  {
    id: "iitm-pa",
    company: "Indian Institute of Technology, Madras",
    role: "Project Associate",
    location: "Chennai, IN",
    start: "Jul 2019",
    end: "Feb 2020",
    bullets: [
      {
        text: "Built an Android app for Automated Speech Recognition that converts Indic speech to text, in collaboration with the Electrical Engineering and Computer Science departments.",
        tags: ["ASR", "Android", "Java"],
      },
      {
        text: "Led an Android app translating eye blinks into speech using a single-channel remote EEG, opening a new communication channel for users with speech and movement limitations.",
        tags: ["BCI", "EEG", "Android"],
      },
      {
        text: "Built SEAT, a graph-matching algorithm that maps student preferences to course enrolment under capacity and prerequisite constraints.",
        tags: ["Graph Matching", "Optimisation"],
      },
    ],
  },
  {
    id: "iitm-ra",
    company: "Indian Institute of Technology, Madras",
    role: "Research Assistant",
    location: "Chennai, IN",
    start: "Dec 2016",
    end: "Jun 2019",
    bullets: [
      {
        text: "Half-Time Research Assistantship (HTRA) funded by MHRD, India. Research focus on EEG signal processing and brain–computer interfaces under Prof. Hema A. Murthy, leading to publications at IEEE EMBC and Interspeech.",
        tags: ["EEG", "Signal Processing", "PyTorch", "MATLAB"],
      },
      {
        text: "Teaching Assistant for Introduction to Programming and Pattern Recognition: course curation, student support, question paper creation, and end-to-end evaluation.",
        tags: ["Teaching"],
      },
    ],
  },
  {
    id: "cognizant",
    company: "Cognizant Technology Solutions",
    role: "Programmer Analyst",
    location: "Chennai, IN",
    start: "Aug 2014",
    end: "Jan 2017",
    bullets: [
      {
        text: "Full-stack developer on a workflow management system for a US insurance client, plus a web publishing application and a job monitoring system. Improvements to ticketing, deployment, and job monitoring saved approximately 50 human-hours per month.",
        metric: "~50 human-hours/month saved",
        tags: ["ASP.NET MVC 4", "Entity Framework", "MS SQL", "jQuery"],
      },
    ],
  },
];
