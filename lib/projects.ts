export type ProjectStatus = "Finished" | "Ongoing" | "Not started";

export type Project = {
  name: string;
  status: ProjectStatus;
  date: string;
  desc: string;
  tech: string[];
  link: string;
  githubLink?: string;
  keyFeatures?: string[];
  caseStudyPrompt?: string;
  thumbnailPrompt?: string;
  featured?: FeaturedShowcase;
};

// Projects shown with a device mockup on the projects page. Screenshots live in
// public/projects/<slug>-{desktop,mobile}.jpg.
export type FeaturedShowcase = {
  slug: string;
  tagline: string;
  logo: string;
  // Round logos get padded inside a white tile so they sit centered.
  circularLogo?: boolean;
};

type ProjectSeed = Omit<Project, "desc">;

const oldDescriptions: Record<string, string> = {
  "Algorithmic Memory Allocation Simulator": "A high-fidelity Streamlit simulation environment for operating system memory management, built to visualize page replacement mechanics, frame allocation behavior, and fault patterns with Gemini-powered contextual analysis layered on top.",
  "IntelliAIDrive: Autonomous Driving Agent": "An autonomous driving research platform that combines real-time computer vision, reinforcement learning, and simulation-driven evaluation to train and interrogate an intelligent vehicle agent under dynamic road conditions.",
  "Pokemon-Hau Flutter App": "A polished Flutter mobile experience engineered around responsive layouts, animation-rich interaction patterns, and real-time PokéAPI data delivery for a highly fluid and production-grade consumer interface.",
  "Multimodal AI Chatbot": "A multimodal Python assistant architecture designed to ingest heterogeneous inputs, fuse context across modalities, and generate disciplined responses through LLM orchestration and prompt-aware control flows.",
  "AI Math Solver Chatbot": "A mathematically focused reasoning assistant engineered to decompose symbolic and numeric problems into structured solution steps while maintaining strict response control and computation fidelity.",
  "Real-Time Facial Recognition System": "A computer vision pipeline for facial detection and identity recognition, built around feature extraction, model training, and image processing primitives for practical biometric analysis.",
  "CPU Scheduling Algorithm Simulator": "A scheduling analysis engine for simulating FCFS, SJF, and Round Robin algorithms with visual Gantt timelines, turnaround metrics, and comparative performance analysis.",
  "Personal Portfolio Website": "A custom Next.js portfolio system designed with responsive motion, modular content sections, and a highly optimized presentation layer for showcasing projects and technical identity.",
  "Smart Attendance System": "An automated attendance platform powered by facial recognition and real-time computer vision, built to streamline identity capture, record verification, and presence tracking.",
  "Driver Drowsiness Detector": "A real-time driver safety system that applies deep learning and computer vision to detect fatigue cues from live video streams before they escalate into risk.",
  "Lumo: Voice-Guided Navigation App": "An AI-powered voice navigation platform for visually impaired users, combining accessible interaction design, guided routing, and a hackathon-winning product vision.",
  "peeView: AI Urine Test Interpreter": "An AI-assisted mobile health interface for instant urine test interpretation, translating structured clinical signals into clear, readable, user-facing insights.",
  "Student Database Management System": "A structured student records system for organizing academic data, enforcing clean data flow, and supporting efficient record retrieval and management.",
  "Chinese Horoscope Mobile App": "A Dart-based interpretation app that packages horoscope logic into a lightweight, responsive interface with a focus on clarity and user engagement.",
  "Age Classification Model": "A Flutter application for age classification workflows, designed to convert simple inputs into deterministic, immediate, and easy-to-verify outputs.",
  "BahayKubo: Filipino Recipes App": "A recipe platform built to showcase more than 50 Filipino dishes with a clean content architecture centered on preservation, discoverability, and authentic culinary presentation.",
  "Parapo: Public Transport Tracker": "A transport-focused UI/UX concept exploring route visibility, commuter clarity, and high-signal interface decisions for a public transit tracking system.",
  "Batch File Rename Tool": "A batch file renaming utility engineered for high-volume file organization, rapid naming consistency, and workflow efficiency.",
  "Secure Password Generator": "A deterministic password generation tool built to produce secure, randomized credentials with customizable output constraints and minimal friction.",
  "Interactive Digital Clock UI": "A front-end interface project focused on timing visualization, animation rhythm, and pixel-accurate clock presentation.",
  "Interactive Analog Clock UI": "A CSS-first analog clock interface emphasizing layout precision, dynamic hand movement, and clean visual balance.",
  "Shell Number Guessing Game": "A command-line game implemented with shell scripting fundamentals to practice flow control, input handling, and terminal UX.",
  "HAU Org Finder": "A data-driven web application built with React and Vite to help university students match with campus organizations based on personality, career goals, and interests, featuring a robust filtering algorithm and responsive UI.",
  "The Daily Dish": "A premium digital recipe box and weekly meal planner built with Vanilla JavaScript. Features a smart fridge mode to track ingredients, multi-proxy link importing, and an immersive, interactive cooking mode.",
  "Revive Pilates Studio": "A full-stack booking platform for a two-branch boutique Pilates studio. Clients pick their exact reformer, mat, or barre spot, buy class packages, and pay with receipt verification, while the studio runs schedules, coaches, and payments from a drag-and-drop admin dashboard.",
  "IG Curator": "A minimalist drag-and-drop dashboard to visually curate and schedule Instagram grids, reels, and stories.",
};

const buildDescription = (project: ProjectSeed): string => {
  const oldDescription = oldDescriptions[project.name];

  if (oldDescription) {
    return oldDescription;
  }

  const scope = project.tech.slice(0, 3).join(", ");

  if (project.status === "Finished") {
    return `Completed project focused on ${scope}.`;
  }

  if (project.status === "Ongoing") {
    return `Ongoing project focused on ${scope}.`;
  }

  return `Planned project focused on ${scope}.`;
};

const projectSeeds: ProjectSeed[] = [
  {
    name: "Revive Pilates Studio",
    status: "Finished",
    date: "September 2026",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Web Dev", "UI/UX", "Git", "Version Control"],
    link: "https://revive-pilates-studio-6b8h.vercel.app/",
    githubLink: "https://github.com/ciellamher/revive-pilates-studio",
    featured: {
      slug: "revive-pilates",
      tagline: "Book a class, pick your reformer, and manage packages at a boutique Pilates studio.",
      logo: "/projects/revive-pilates-logo.png",
      circularLogo: true,
    },
  },
  {
    name: "IG Curator",
    status: "Finished",
    date: "July 2026",
    tech: ["TypeScript", "Next.js", "Prisma", "PostgreSQL", "Web Dev", "UI/UX", "Git", "Version Control"],
    link: "https://ig-curator.vercel.app",
    githubLink: "https://github.com/ciellamher/ig-curator",
    featured: {
      slug: "ig-curator",
      tagline: "Plan and preview your Instagram grid, reels, and stories before you post.",
      logo: "/projects/ig-curator-logo.svg",
    },
  },
  {
    name: "The Daily Dish",
    status: "Finished",
    date: "July 2026",
    tech: ["HTML", "CSS", "JavaScript", "Web Dev", "UI/UX", "Git", "Version Control"],
    link: "https://the-daily-dish-iota.vercel.app",
    githubLink: "https://github.com/ciellamher/the-daily-dish",
    featured: {
      slug: "the-daily-dish",
      tagline: "An AI cookbook and meal planner built around what's already in your fridge.",
      logo: "/projects/the-daily-dish-logo.png",
      circularLogo: true,
    },
  },
  {
    name: "HAU Org Finder",
    status: "Finished",
    date: "May 2026",
    tech: ["React", "Vite", "Web Dev", "UI/UX", "JavaScript", "Git", "Version Control"],
    link: "https://hau-org-finder.vercel.app/",
    githubLink: "https://github.com/ciellamher/hau-org-finder",
    featured: {
      slug: "hau-org-finder",
      tagline: "Answer a few questions and find the campus orgs that fit you at Holy Angel University.",
      logo: "/projects/hau-org-finder-logo.svg",
    },
  },
  {
    name: "Algorithmic Memory Allocation Simulator",
    status: "Finished",
    date: "March 2026",
    tech: ["Python", "AI", "Computer Science", "Software Engineering", "Git", "Version Control"],
    link: "https://github.com/ciellamher/Virtual-Paging-Algorithms-Simulation",
  },
  {
    name: "IntelliAIDrive: Autonomous Driving Agent",
    status: "Finished",
    date: "March 2026",
    tech: ["Python", "AI", "Machine Learning", "Data Science", "Git", "Version Control"],
    link: "https://github.com/ciellamher/IntelliAIDrive",
  },
  {
    name: "Pokemon-Hau Flutter App",
    status: "Finished",
    date: "March 2026",
    tech: ["Dart", "App Dev", "API Development", "UI/UX", "Git", "Version Control"],
    link: "https://github.com/ciellamher/Pokemon-Hau",
  },
  {
    name: "Driver Drowsiness Detector",
    status: "Finished",
    date: "March 2026",
    tech: ["Python", "AI", "Machine Learning", "Computer Science", "Git", "Version Control"],
    link: "https://github.com/ciellamher/driver_drowsiness_detector",
  },
  {
    name: "Personal Portfolio Website",
    status: "Finished",
    date: "March 2026",
    tech: ["Web Dev", "UI/UX", "JavaScript", "HTML", "CSS", "Git", "Version Control"],
    link: "https://github.com/ciellamher/my-portfolio",
  },
  {
    name: "Smart Attendance System",
    status: "Finished",
    date: "February 23, 2026",
    tech: ["Python", "AI", "Machine Learning", "Git", "Version Control"],
    link: "https://github.com/ciellamher/Smart-Attendance-System",
  },
  {
    name: "Multimodal AI Chatbot",
    status: "Finished",
    date: "February 16, 2026",
    tech: ["Python", "AI", "API Development", "Git", "Version Control"],
    link: "https://github.com/ciellamher/MultimodalChatbot",
  },
  {
    name: "CPU Scheduling Algorithm Simulator",
    status: "Finished",
    date: "February 9, 2026",
    tech: ["Python", "Computer Science", "Software Engineering", "Git", "Version Control"],
    link: "https://github.com/ciellamher/CPUScheduler",
  },
  {
    name: "AI Math Solver Chatbot",
    status: "Finished",
    date: "February 6, 2026",
    tech: ["Python", "AI", "API Development", "Git", "Version Control"],
    link: "https://github.com/ciellamher/MathChatbot",
  },
  {
    name: "Real-Time Facial Recognition System",
    status: "Finished",
    date: "January 16, 2026",
    tech: ["Python", "Machine Learning", "AI", "Git", "Version Control"],
    link: "https://github.com/ciellamher/MLA1-Face-Recognition",
  },
  {
    name: "Lumo: Voice-Guided Navigation App",
    status: "Finished",
    date: "October 2025",
    tech: ["App Dev", "AI", "Machine Learning", "UI/UX", "Git", "Version Control"],
    link: "https://github.com/darknecrocities/Lumo",
  },
  {
    name: "Batch File Rename Tool",
    status: "Finished",
    date: "October 4, 2025",
    tech: ["JavaScript", "HTML", "CSS", "Web Dev", "Git", "Version Control"],
    link: "https://github.com/ciellamher/quickRename",
  },
  {
    name: "Secure Password Generator",
    status: "Finished",
    date: "September 14, 2025",
    tech: ["JavaScript", "HTML", "CSS", "Web Dev", "Git", "Version Control"],
    link: "https://github.com/ciellamher/passwordgenerator",
  },
  {
    name: "peeView: AI Urine Test Interpreter",
    status: "Finished",
    date: "August 2025",
    tech: ["Dart", "App Dev", "AI", "UI/UX", "Git", "Version Control"],
    link: "https://github.com/darknecrocities/peeview",
  },
  {
    name: "Student Database Management System",
    status: "Finished",
    date: "August 4, 2025",
    tech: ["Databases", "SQL", "Data Science", "Git", "Version Control"],
    link: "https://github.com/ciellamher/studentdatabase",
  },
  {
    name: "Chinese Horoscope Mobile App",
    status: "Finished",
    date: "August 4, 2025",
    tech: ["Dart", "App Dev", "Git", "Version Control"],
    link: "https://github.com/ciellamher/chinesehoroscope",
  },
  {
    name: "Age Classification Model",
    status: "Finished",
    date: "August 4, 2025",
    tech: ["Dart", "App Dev", "Git", "Version Control"],
    link: "https://github.com/ciellamher/ageclassification",
  },
  {
    name: "Interactive Digital Clock UI",
    status: "Finished",
    date: "August 4, 2025",
    tech: ["CSS", "HTML", "Web Dev", "Git", "Version Control"],
    link: "#",
  },
  {
    name: "Interactive Analog Clock UI",
    status: "Finished",
    date: "August 4, 2025",
    tech: ["CSS", "HTML", "Web Dev", "Git", "Version Control"],
    link: "#",
  },
  {
    name: "Shell Number Guessing Game",
    status: "Finished",
    date: "February 8, 2025",
    tech: ["Linux", "Computer Science", "Git", "Version Control"],
    link: "#",
  },
  {
    name: "BahayKubo: Filipino Recipes App",
    status: "Finished",
    date: "October 26, 2024",
    tech: ["HTML", "CSS", "JavaScript", "Web Dev", "UI/UX", "Git", "Version Control"],
    link: "https://github.com/ciellamher/BahayKubo",
  },
  {
    name: "Parapo: Public Transport Tracker",
    status: "Finished",
    date: "December 2023",
    tech: ["Dart", "App Dev", "API Development", "Git", "Version Control"],
    link: "#",
  },
  {
    name: "Movie Recommendation System",
    status: "Not started",
    date: "",
    tech: ["Python", "AI", "Machine Learning", "Data Science"],
    link: "#",
  },
  {
    name: "Budget Tracker and Advisor",
    status: "Not started",
    date: "",
    tech: ["Web Dev", "Databases", "UI/UX"],
    link: "#",
  },
  {
    name: "AI Chatbot for Student FAQs",
    status: "Not started",
    date: "",
    tech: ["AI", "Python", "Web Dev"],
    link: "#",
  },
  {
    name: "College Forum Website",
    status: "Not started",
    date: "",
    tech: ["Web Dev", "Databases", "JavaScript", "HTML", "CSS"],
    link: "#",
  },
  {
    name: "Sleep Attack Detector for Students",
    status: "Not started",
    date: "",
    tech: ["Machine Learning", "AI", "Python", "App Dev"],
    link: "#",
  },
  {
    name: "Smart Umbrella that Predicts Rain",
    status: "Not started",
    date: "",
    tech: ["AI", "API Development", "Computer Science"],
    link: "#",
  },
  {
    name: "Smart Grid Energy Demand Forecasting",
    status: "Not started",
    date: "",
    tech: ["Data Science", "Machine Learning", "Python", "Data Analytics"],
    link: "#",
  },
  {
    name: "Localized Sentiment Analysis API (NLP)",
    status: "Not started",
    date: "",
    tech: ["API Development", "AI", "Machine Learning", "Python"],
    link: "#",
  },
  {
    name: "Food Inventory Machine Locator",
    status: "Not started",
    date: "",
    tech: ["App Dev", "Databases", "API Development"],
    link: "#",
  },
];

export const allProjects: Project[] = projectSeeds.map((project) => ({
  ...project,
  desc: buildDescription(project),
}));

export const featuredProjects = allProjects.filter((project) => project.featured);

// Shipped projects not already shown in the featured section.
export const otherProjects = allProjects.filter((project) => (project.status === "Finished" || project.status === "Ongoing") && !project.featured);

export const recentProjects = allProjects.filter((project) => project.status === "Finished" || project.status === "Ongoing").slice(0, 4);
