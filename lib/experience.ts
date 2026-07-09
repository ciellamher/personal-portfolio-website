export interface Experience {
  title: string;
  org: string;
  year: string;
  active: boolean;
  isEdu?: boolean;
  description: string;
  logo?: string;
}

export const experiences: Experience[] = [
  // CURRENT ACTIVE ROLES
  { 
    title: "Notion Campus Leader", 
    org: "Notion - Holy Angel University", 
    year: "2026", 
    active: true,
    logo: "/logos/notion.png",
    description: "Leading the Notion community at Holy Angel University. Organizing workshops, sharing productivity tips, and helping students build effective study systems using Notion."
  },
  { 
    title: "Volunteer", 
    org: "Each One Teach One Philippines", 
    year: "2023", 
    active: true,
    logo: "/logos/eachoneteachone.png",
    description: "Volunteering to provide educational support and mentorship to underprivileged students, helping bridge the education gap in local communities."
  },
  { 
    title: "Volunteer", 
    org: "DEVCON.PH", 
    year: "2024", 
    active: true,
    logo: "/logos/devcon.png",
    description: "Assisting in organizing the largest developer conferences and meetups in the Philippines, facilitating tech community engagement and networking."
  },
  { 
    title: "BS Computer Science", 
    org: "Holy Angel University", 
    year: "2027", 
    active: true, 
    isEdu: true,
    logo: "/logos/hau.png",
    description: "Currently pursuing a Bachelor of Science in Computer Science. Coursework focuses on data structures, algorithms, machine learning, and software engineering principles."
  },
  { 
    title: "Academic Awardee & SHS Graduate", 
    org: "University of the Assumption", 
    year: "2023", 
    active: false, 
    isEdu: true,
    logo: "/logos/uashs.png",
    description: "Graduated with High Honors from the STEM strand. Actively participated in mathematics competitions and science fairs."
  },

  // PREVIOUS ROLES
  { 
    title: "Events Director", 
    org: "Cybersecurity Intelligence Alliance", 
    year: "2026", 
    active: false,
    logo: "/logos/cia.png",
    description: "Orchestrated university-wide cybersecurity awareness campaigns, capture-the-flag (CTF) competitions, and expert seminar sessions."
  },
  { 
    title: "Events Lead", 
    org: "Google Developer Groups on Campus - Holy Angel University", 
    year: "2026", 
    active: false,
    logo: "/logos/gdsc.png",
    description: "Led the events team to successfully plan and execute tech talks, coding bootcamps, and developer study jams focused on Google technologies."
  },
  { 
    title: "Core Member", 
    org: "Google Developer Student Clubs - HAU", 
    year: "2025", 
    active: false,
    logo: "/logos/gdsc.png",
    description: "Collaborated with other core members to plan and execute tech events, study jams, and hackathons aimed at upskilling the student body."
  },
  { 
    title: "Volunteer", 
    org: "Notion - Holy Angel University", 
    year: "2025", 
    active: false,
    logo: "/logos/notion.png",
    description: "Supported the Notion Campus Leader in setting up events, creating templates for students, and managing social media promotions."
  },
  { 
    title: "Senior Executive Assistant to the Governor", 
    org: "School of Computing - Student Council", 
    year: "2024", 
    active: false,
    logo: "/logos/soc.png",
    description: "Managed executive communications, coordinated with university administration, and ensured proper execution of student council initiatives."
  },
  { 
    title: "Volunteer", 
    org: "School of Computing - Student Council", 
    year: "2023", 
    active: false,
    logo: "/logos/soc.png",
    description: "Assisted the student council in various outreach programs, student onboarding activities, and departmental festivals."
  },
  { 
    title: "Facilities and Logistics", 
    org: "Holy Angel University - Student Council", 
    year: "2024", 
    active: false,
    logo: "/logos/hau_usc.jpg",
    description: "Managed physical and technical logistics for major university events, ensuring seamless execution and proper allocation of resources."
  },
  { 
    title: "Business Manager", 
    org: "University of the Assumption – UASHS Supreme Student Council", 
    year: "2022", 
    active: false,
    logo: "/logos/uashs.png",
    description: "Oversaw the council's financial transactions, managed event budgets, and secured sponsorships for various senior high school activities."
  },
  { 
    title: "Secretary", 
    org: "Scali Supreme Student Council", 
    year: "2021", 
    active: false,
    logo: "/logos/scali.png",
    description: "Responsible for recording meeting minutes, handling internal correspondence, and maintaining organized records for the student body."
  }
].sort((a, b) => {
  if (a.active !== b.active) {
    return a.active ? -1 : 1;
  }
  return parseInt(b.year) - parseInt(a.year);
});
