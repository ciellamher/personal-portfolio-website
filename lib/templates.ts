import { BookOpen, SquarePen, Target, type LucideIcon } from "lucide-react";

export type NotionTemplate = {
  slug: string;
  name: string;
  tagline: string;
  description: string[];
  included: string[];
  category: string;
  icon: LucideIcon;
  link: string;
  // Preview screenshot in /public. Without one, a placeholder is drawn.
  image?: string;
};

export const templates: NotionTemplate[] = [
  {
    slug: "start-of-the-semester",
    image: "/templates/start-of-the-semester.jpg",
    name: "Start of the Semester Pack",
    tagline: "A central hub to track your courses, tasks, and class schedule.",
    description: [
      "Start of the Semester Pack helps you stay organized and manage your semester from one place.",
      "Track your courses, assignments, and schedules in a single hub, organize classes by semester, and keep on top of every deadline from day one.",
    ],
    included: [
      "Academic Courses database, filtered by semester",
      "Task Manager with Today, Done, and All Modules views",
      "Classes database",
      "Class Schedule calendar",
      "Step-by-step guide boxes",
    ],
    category: "School",
    icon: SquarePen,
    link: "https://valiant-cod-82e.notion.site/start-of-the-semester",
  },
  {
    slug: "align-and-ascend-reset-hub",
    image: "/templates/align-and-ascend-reset-hub.jpg",
    name: "Align & Ascend Reset Hub",
    tagline: "Reset, set your goals, and track your progress quarter by quarter.",
    description: [
      "Align & Ascend Reset Hub helps you reset, realign, and move toward your goals for the year.",
      "Write down your main goal, break the year into quarters, turn big goals into actionable steps, and keep your dreams in view with a vision board.",
    ],
    included: [
      "Main goal for the year",
      "Quarters database",
      "Goals database",
      "Actionable Goals with This Week, This Month, and Completed views",
      "Goals calendar",
      "Vision board",
    ],
    category: "Productivity",
    icon: Target,
    link: "https://valiant-cod-82e.notion.site/align-and-ascend-reset-hub",
  },
  {
    slug: "study-planner",
    image: "/templates/study-planner.jpg",
    name: "Study Planner",
    tagline: "A calm, focused dashboard for your classes, schedule, and study goals.",
    description: [
      "Study Planner is a clean, calming academic hub that keeps your daily tasks and coursework in one focused dashboard.",
      "Track syllabus readings, map out your weekly class schedule, and count down to your next big exam, all without the overwhelm.",
    ],
    included: [
      "Courses database with term filters and sorting",
      "Navigation menu to every database",
      "Semester Schedule",
      "Calendar",
      "Clock and weather widgets",
    ],
    category: "School",
    icon: BookOpen,
    link: "https://valiant-cod-82e.notion.site/Study-Planner-37799476786780818ca6e143744a2cb1",
  },
];

export const getTemplate = (slug: string) => templates.find((template) => template.slug === slug);
