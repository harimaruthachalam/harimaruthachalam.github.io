export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["Python", "Java", "MATLAB", "SQL"],
  },
  {
    id: "ml-dl",
    label: "ML & Deep Learning",
    items: [
      "PyTorch",
      "XGBoost",
      "LightGBM",
      "LLM Agents",
      "Agent Orchestration",
      "Transformers (BERT)",
      "CNNs",
      "LSTMs",
      "Genetic Algorithms",
      "OLS / Residual Analysis",
    ],
  },
  {
    id: "areas",
    label: "Areas",
    items: [
      "Signal Processing",
      "Time-series",
      "NLP",
      "Computer Vision",
      "ASR",
      "Brain–Computer Interfaces",
      "Edge ML",
      "Real-time Inference",
      "Agentic AI",
      "Autonomous Testing",
      "OCR",
      "Entity Resolution",
    ],
  },
  {
    id: "data",
    label: "Data & Tooling",
    items: ["NumPy", "Pandas", "Git", "LaTeX", "Playwright", "AWS"],
  },
];
